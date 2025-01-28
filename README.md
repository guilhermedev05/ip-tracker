
# [🌍 IP Tracker](https://ip-tracker-guilhermedev.vercel.app/)

Bem-vindo ao **IP Tracker**! Este projeto é uma aplicação web que permite rastrear a localização geográfica de um endereço IP ou domínio fornecido pelo usuário, exibindo as informações diretamente em um mapa interativo.

---

## 🚀 Tecnologias Utilizadas  

- **ReactJS**
- **TypeScript**  
- **Next.js 15.1.6** (com suporte para Server Components e diretórios `app`)  
- **Leaflet.js** (biblioteca para mapas interativos)  
- **Tailwind CSS** (estilização da interface)  
- **REST API** (para rastreamento de IP)  
- **Axios** (requisições HTTP)  

---

## 📂 Estrutura do Diretório do Projeto  

```
├── public/
│   ├── favicon.ico
│   └── marker-icon.png
├── src/
│   ├── app/
│   │   ├── page.tsx      # Página principal da aplicação
│   │   └── globals.css   # Estilos globais
│   ├── components/
│   │   ├── Infos.tsx     # Componente para exibir informações do IP
│   │   └── Map.tsx       # Componente do mapa interativo
│   ├── contexts/
│   │   └── LocationContext.tsx  # Contexto para gerenciar o estado da localização
│   ├── types/
│   │   └── Location.ts   # Tipagem para dados da localização
│   └── utils/
│       └── api.ts        # Funções auxiliares para integração com a API
├── README.md             # Documentação do projeto
├── package.json          # Dependências e scripts
└── tsconfig.json         # Configuração do TypeScript
```

---

## 📖 Funcionalidades  

1. **Busca de IP/Domínio**:  
   O usuário pode inserir um endereço IP ou domínio para obter informações detalhadas sobre a localização, como país, região, cidade, e fuso horário.

2. **Mapa Interativo**:  
   Exibe a localização rastreada em um mapa interativo, com zoom e popup ao clicar no mapa.

3. **Design Responsivo**:  
   Interface adaptada para todos os dispositivos (desktop, tablet e mobile).

4. **Spinner de Carregamento**:  
   Indica ao usuário que a busca está em andamento.

5. **Mensagens de Erro**:  
   Caso o IP ou domínio não seja encontrado, uma mensagem amigável será exibida.

---

## ⚙️ Como Rodar o Projeto  

### Pré-requisitos:  
- Node.js (versão 18 ou superior)  
- Gerenciador de pacotes (NPM ou Yarn)

### Passos:  

1. Clone o repositório:  
   ```bash
   git clone https://github.com/seu-usuario/react-ip-tracker.git
   cd react-ip-tracker
   ```

2. Instale as dependências:  
   ```bash
   npm install
   ```

3. Crie um arquivo `.env.local` na raiz do projeto e adicione sua chave de API:  
   ```plaintext
   NEXT_PUBLIC_API_KEY=SUA_CHAVE_API
   ```

4. Rode o servidor de desenvolvimento:  
   ```bash
   npm run dev
   ```

5. Acesse a aplicação no navegador:  
   [http://localhost:3000](http://localhost:3000)  

---

## 🖼 Demonstração  

![Demonstração da Aplicação - Mobile](https://i.imgur.com/leNA1Yn.png)
![Demonstração da Aplicação - Desktop](https://i.imgur.com/msjVlUX.png)

---

## 🤝 Contribuições  

Contribuições são sempre bem-vindas! Caso queira melhorar ou adicionar funcionalidades, sinta-se à vontade para abrir issues ou pull requests.

---

## 📄 Licença  

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais informações.

---
