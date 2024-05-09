# VetClinic Project 🐶🐱

## Instruções

Bem-vindo ao README do projeto VetClinic! Aqui você encontrará orientações sobre
como executar o projeto e lidar com o arquivo .env.

### Executando o Projeto

Para executar o projeto VetClinic localmente, siga estas etapas:

1. Clone o repositório em sua máquina local:
   git clone https://github.com/LuancGerlach/compass-challenges-VetClinic.git

2. Navegue até o diretório do projeto:
   cd compass-challenges-VetClinic

3. Instale as dependências:
   npm install

4. Crie um arquivo `.env` no diretório raiz do projeto com o seguinte conteúdo,
   este arquivo contém variáveis de ambiente usadas pelo projeto.
   DB_DIALECT=sqlite
   DB_STORAGE=./db/app.db
   PORT=3000

5. Execute o projeto:
   npm start

O projeto agora deve estar sendo executado localmente.
Você pode acessá-lo em [http://localhost:3000](http://localhost:3000).

### Rotas para Tutor

- **POST /tutor/add**: Adiciona um novo tutor ao sistema.
- **GET /tutor**: Lista todos os tutores cadastrados, incluindo os pets associados a cada tutor.
- **GET /tutor/:tutorId**: Busca um tutor específico pelo seu ID, incluindo os pets associados a ele.
- **PUT /tutor/:tutorId**: Atualiza as informações de um tutor específico pelo seu ID.
- **DELETE /tutor/:tutorId**: Exclui um tutor do sistema com base no seu ID.

### Rotas para Pet

- **POST /pet/:tutorId**: Adiciona um novo pet, vinculando-o a um tutor específico pelo ID do tutor.
- **GET /pet**: Lista todos os pets cadastrados no sistema.
- **GET /pet/:petId**: Busca um pet específico pelo seu ID.
- **PUT /pet/:petId**: Atualiza as informações de um pet específico pelo seu ID.
- **DELETE /pet/:petId**: Exclui um pet do sistema com base no seu ID.
