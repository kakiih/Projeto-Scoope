# 🧭 Scoope Turismo

**Scoope Turismo** é uma plataforma web que permite aos usuários montar seu próprio pacote de viagem personalizado, incluindo transporte, hospedagem, roteiros turísticos e muito mais. O projeto foi desenvolvido como parte do curso Técnico em Desenvolvimento de Sistemas na ETEJBL.

---

## 🚀 Objetivo

Oferecer uma solução completa e personalizada para planejamento de viagens, conectando o usuário a empresas parceiras e facilitando a criação de pacotes únicos e acessíveis.

---

## 🛠 Tecnologias Utilizadas

### Frontend:
- **React.js**
- **HTML5 / CSS3**
- **JavaScript (ES6+)**
- **Axios** para requisições HTTP

### Backend:
- **Node.js**
- **Express**
- **MySQL** (banco de dados relacional)
- **Sequelize** (ORM)

---

## 🗂 Funcionalidades

- ✈️ Criação de pacotes de viagem personalizados  
- 🏨 Escolha de hospedagem, roteiro e transporte  
- 🧑‍💼 Integração com empresas e equipes parceiras  
- 🗃️ Cadastro, listagem, atualização e remoção de seleções (CRUD)  
- 🔐 Validação de dados no backend

---

## 📁 Estrutura do Projeto

scoope/
│
├── frontend/ # Aplicação React
│ ├── public/
│ └── src/
│ ├── components/
│ ├── pages/
│ ├── services/
│ └── App.js
│
├── backend/ # API em Node.js
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── infra/ # Configuração de banco e conexão
│ ├── app.js
│ └── server.js
│
└── README.md

yaml
Copiar
Editar

---

## ⚙️ Como rodar o projeto

### 1. Clone o repositório:

git clone https://github.com/seu-usuario/scoope-turismo.git
2. Instale as dependências:
Backend:
bash
Copiar
Editar
cd backend
npm install
Frontend:
bash
Copiar
Editar
cd ../frontend
npm install
3. Configure o banco de dados:
Crie um banco MySQL e atualize as credenciais no arquivo de configuração (infra/config.js ou .env).

Execute os scripts de criação de tabela, se necessário.

4. Execute a aplicação:
Backend:
bash
Copiar
Editar
npm start
Frontend:
bash
Copiar
Editar
npm start
📌 Status do Projeto
🔧 Em desenvolvimento — funcionalidades principais implementadas e integração com banco iniciada.

👨‍💻 Desenvolvido por
Miguel Silva Fialho
LinkedIn | miguelfialho1234@gmail.com

📃 Licença
Este projeto está sob a licença MIT.
