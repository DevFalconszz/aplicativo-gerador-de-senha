<div align="center">

# 🔐 Gerador de Senhas Fortes

### Aplicativo Mobile de Geração de Senhas Seguras

*React Native + Expo — senhas fortes de 12 caracteres com histórico da sessão em um toque.*

[![React Native](https://img.shields.io/badge/React%20Native-0.78-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactnative.dev)
[![Expo](https://img.shields.io/badge/Expo-SDK%2054-000020?style=flat-square&logo=expo&logoColor=white)](https://expo.dev)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Node](https://img.shields.io/badge/Node.js-18%2B-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![Android](https://img.shields.io/badge/Android-Expo%20Go-3DDC84?style=flat-square&logo=android&logoColor=white)](https://play.google.com/store/apps/details?id=host.exp.exponent)
[![iOS](https://img.shields.io/badge/iOS-Expo%20Go-0A0A0A?style=flat-square&logo=ios&logoColor=white)](https://apps.apple.com/app/expo-go/id982107779)

</div>

---

## 📑 Índice

- [📖 Sobre o Projeto](#-sobre-o-projeto)
- [✨ Funcionalidades](#-funcionalidades)
- [🧰 Stack Tecnológica](#-stack-tecnológica)
- [📂 Estrutura do Projeto](#-estrutura-do-projeto)
- [🚀 Começando](#-começando)

---

## 📖 Sobre o Projeto

**Gerador de Senhas Fortes** é um aplicativo simples e funcional desenvolvido em **React Native** com **Expo** para gerar senhas seguras e manter um histórico das senhas criadas durante a sessão.

O app gera senhas de **12 caracteres** combinando letras maiúsculas, minúsculas, números e símbolos — e registra cada senha gerada em uma lista de histórico, com opção de limpeza rápida.

> 💡 **Diferencial**: interface 100% em português brasileiro, minimalista e intuitiva — basta um toque para ter uma senha forte pronta para uso.

---

## ✨ Funcionalidades

### 🔑 Geração de Senhas
- Senhas fortes de **12 caracteres** por geração
- Charset completo: **letras maiúsculas e minúsculas, números e símbolos** (`!@#$%^&*()_+`)
- Exibição em destaque do resultado gerado

### 📜 Histórico
- Lista das últimas senhas geradas logo abaixo do botão principal (`FlatList`)
- Registro instantâneo de cada nova senha
- Mensagem de estado vazio quando nada foi gerado ainda

### 🧹 Limpeza de Dados
- Botão **Limpar** para apagar todo o histórico e resetar a tela
- O botão só aparece quando existe histórico a ser limpo

### 📱 Interface
- Design limpo e intuitivo, totalmente em **português brasileiro**
- Layout com `SafeAreaView` — respeita as bordas do dispositivo

---

## 🧰 Stack Tecnológica

| Camada | Tecnologia | Uso |
|---|---|---|
| 📱 **Mobile** | **React Native 0.78** | Interface nativa Android e iOS |
| 🚀 **Runtime** | **Expo SDK 54** | Build, execução e testes via Expo Go |
| ⚛️ **UI** | **React 19** | Componentes e hooks de estado |
| 🟨 **Linguagem** | **JavaScript ES6** | Lógica de geração e gestão do histórico |

---

## 📂 Estrutura do Projeto

```text
aplicativo-gerador-de-senha/
├── App.js               # Toda a lógica e estilização do aplicativo
├── app.json             # Configurações globais do Expo
├── package.json         # Dependências e scripts do projeto
├── package-lock.json    # Versões exatas das dependências
└── README.md            # Documentação do projeto
```

---

## 🚀 Começando

### 1️⃣ Pré-requisitos

- [Node.js](https://nodejs.org) instalado
- Aplicativo **Expo Go** no celular: [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) ou [iOS](https://apps.apple.com/app/expo-go/id982107779)

### 2️⃣ Instalação e Execução

```bash
# Clone o repositório
git clone https://github.com/DevFalconszz/aplicativo-gerador-de-senha.git
cd aplicativo-gerador-de-senha

# Instale as dependências
npm install

# Inicie o projeto
npx expo start -c
```

### 3️⃣ Abrindo no Celular

Escaneie o **código QR** que aparecerá no terminal:

- 📷 **iOS** — abra a câmera do celular e aponte para o QR code
- 📷 **Android** — abra o app Expo Go e escaneie o QR code

---

<div align="center">

*Desenvolvido como um exemplo prático de aplicação React Native estruturada e simples 🔐*

</div>
