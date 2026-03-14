import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  FlatList, 
  SafeAreaView, 
  StatusBar 
} from 'react-native';

export default function App() {
  const [senhaGerada, setSenhaGerada] = useState('Clique para gerar');
  const [historicoSenhas, setHistoricoSenhas] = useState([]);

  // Função para gerar uma senha forte aleatória
  const gerarNovaSenha = () => {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let resultado = '';
    const comprimento = 12;

    for (let i = 0; i < comprimento; i++) {
      resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    setSenhaGerada(resultado);
    adicionarAoHistorico(resultado);
  };

  // Função para adicionar a senha gerada ao histórico
  const adicionarAoHistorico = (novaSenha) => {
    setHistoricoSenhas((historicoAntigo) => [novaSenha, ...historicoAntigo]);
  };

  // Função para limpar o histórico
  const limparHistorico = () => {
    setHistoricoSenhas([]);
    setSenhaGerada('Clique para gerar');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Gerador de Senhas</Text>
      </View>

      <View style={styles.areaSenha}>
        <Text style={styles.textoSenha}>{senhaGerada}</Text>
      </View>

      <TouchableOpacity style={styles.botaoGerar} onPress={gerarNovaSenha}>
        <Text style={styles.textoBotao}>Gerar Nova Senha</Text>
      </TouchableOpacity>

      <View style={styles.areaHistorico}>
        <View style={styles.cabecalhoHistorico}>
          <Text style={styles.tituloHistorico}>Histórico</Text>
          {historicoSenhas.length > 0 && (
            <TouchableOpacity onPress={limparHistorico}>
              <Text style={styles.textoLimpar}>Limpar</Text>
            </TouchableOpacity>
          )}
        </View>

        <FlatList
          data={historicoSenhas}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemHistorico}>
              <Text style={styles.textoItemHistorico}>{item}</Text>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.textoVazio}>Nenhuma senha gerada ainda.</Text>
          }
          style={styles.lista}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
  },
  cabecalho: {
    marginTop: 40,
    marginBottom: 30,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  areaSenha: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#DDD',
    marginBottom: 20,
    height: 80,
  },
  textoSenha: {
    fontSize: 20,
    fontWeight: '600',
    color: '#007AFF',
    letterSpacing: 1,
  },
  botaoGerar: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  areaHistorico: {
    flex: 1,
  },
  cabecalhoHistorico: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  tituloHistorico: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
  },
  textoLimpar: {
    color: '#FF3B30',
    fontSize: 14,
  },
  lista: {
    flex: 1,
  },
  itemHistorico: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#007AFF',
  },
  textoItemHistorico: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'monospace',
  },
  textoVazio: {
    textAlign: 'center',
    color: '#999',
    marginTop: 20,
  },
});
