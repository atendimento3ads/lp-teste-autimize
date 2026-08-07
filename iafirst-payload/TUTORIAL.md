# Tutorial — como usar a landing page AI FIRST

## 1. Iniciar o projeto no computador

Abra o Terminal e entre na pasta do projeto:

```bash
cd "/Users/mac-user/Desktop/LPs HTML/lp teste autimize/iafirst-payload"
```

Na primeira vez, instale as dependências:

```bash
pnpm install
```

Depois inicie o site:

```bash
pnpm dev
```

Enquanto o Terminal estiver rodando, use estes endereços:

- landing page: <http://localhost:3000>
- painel administrativo: <http://localhost:3000/admin>

Para encerrar o servidor, volte ao Terminal e pressione `Control + C`.

## 2. Criar o primeiro administrador

1. Abra <http://localhost:3000/admin>.
2. Preencha nome, e-mail e uma senha forte.
3. Clique para criar o primeiro usuário.
4. Guarde o e-mail e a senha em um gerenciador de senhas.

Essa tela de criação aparece somente enquanto ainda não existe nenhum administrador.

## 3. Alterar o conteúdo da landing page

1. Entre no painel.
2. No menu lateral, abra **Landing pages**.
3. Abra **Mentoria AI FIRST**.
4. Use as abas para encontrar o conteúdo desejado.
5. Faça a alteração.
6. Clique em **Publicar**.
7. Atualize <http://localhost:3000> para conferir.

O botão **Salvar rascunho** guarda a alteração sem mostrá-la publicamente. Para colocar a mudança no site, use **Publicar**.

Não altere o identificador `home`, pois ele informa qual registro alimenta a página principal.

### Mapa das abas

| Aba | O que controla |
| --- | --- |
| Abertura | selo, título principal, descrição e botões |
| Diagnóstico | título da seção e quatro indicadores |
| Resultados | os três pilares e suas entregas |
| Programa | quatro módulos, textos e ferramentas |
| Mentores | nomes, cargos, biografias e fotos |
| Oferta e formulário | investimento, destaques e mensagens do formulário |
| FAQ e rodapé | perguntas, chamada final, contatos e redes sociais |
| SEO | título e descrição para Google e compartilhamentos |

## 4. Trocar a foto de um mentor

1. Abra **Mídia** no menu lateral.
2. Clique em **Criar novo** e envie a imagem.
3. Volte para **Landing pages → Mentoria AI FIRST**.
4. Abra a aba **Mentores**.
5. Expanda o mentor desejado.
6. No campo **Nova foto**, selecione a imagem enviada.
7. Publique a landing page.

Se nenhuma nova imagem for escolhida, o site continua usando a foto original indicada em **Foto original**.

## 5. Ver as aplicações recebidas

1. No painel, abra **Aplicações**.
2. Cada linha representa um envio do formulário.
3. Clique em uma aplicação para ver telefone, cargo, receita e objetivo.
4. Use o campo **Status** para marcar como:
   - Nova;
   - Em contato;
   - Qualificada;
   - Arquivada.
5. A seção **Origem da campanha** mostra a página e os parâmetros UTM recebidos.

Exemplo de link para acompanhar uma campanha:

```text
http://localhost:3000/?utm_source=linkedin&utm_medium=paid&utm_campaign=mentoria_aifirst
```

Os envios ficam armazenados no banco `iafirst-payload.db`. Nesta primeira versão, o envio não dispara e-mail automático; a equipe acompanha os leads pelo painel.

## 6. Editar ou remover um FAQ

1. Abra a landing page no painel.
2. Vá para **FAQ e rodapé**.
3. Em **Perguntas**, expanda uma pergunta para editar.
4. Arraste os itens para mudar a ordem.
5. Use o menu do item para removê-lo.
6. Clique em **Adicionar Pergunta** para criar outra.
7. Publique.

## 7. Recuperar uma versão anterior

1. Abra **Mentoria AI FIRST**.
2. Abra o menu de versões do documento.
3. Escolha uma versão anterior.
4. Confira o conteúdo antes de restaurar.
5. Restaure e publique se estiver correto.

O projeto mantém até 30 versões da landing page.

## 8. Criar outros usuários do painel

1. Abra **Usuários**.
2. Clique em **Criar novo**.
3. Informe nome, e-mail e senha temporária.
4. Envie as credenciais de forma segura para a pessoa.

Na configuração atual, usuários autenticados têm acesso administrativo. Se futuramente for necessário separar funções como “Editor”, “Comercial” e “Administrador”, as regras de acesso podem ser ampliadas.

## 9. Preparar para produção

Faça uma compilação antes de publicar:

```bash
pnpm build
```

Para executar a versão de produção:

```bash
pnpm start
```

Configure estas variáveis na hospedagem:

```env
DATABASE_URL=file:./iafirst-payload.db
PAYLOAD_SECRET=uma-chave-longa-e-aleatoria
NEXT_PUBLIC_SERVER_URL=https://seu-dominio.com.br
```

Para gerar uma chave segura:

```bash
openssl rand -hex 32
```

### Requisitos da hospedagem

A hospedagem precisa oferecer:

- Node.js 20.9 ou mais recente;
- processo Node que permaneça em execução;
- HTTPS;
- armazenamento persistente para o banco e uploads;
- configuração de variáveis de ambiente.

Um plano cPanel voltado apenas para PHP e HTML não é suficiente. Para um único servidor, o SQLite funciona bem. Para Vercel ou uma infraestrutura com várias instâncias, troque o banco por PostgreSQL antes da publicação.

### Publicação com Docker

Se a hospedagem aceita Docker Compose, configure o `.env` e execute:

```bash
docker compose up -d --build
```

O arquivo incluído no projeto mantém o banco e os uploads em volumes persistentes. Configure o proxy HTTPS da hospedagem para encaminhar o domínio à porta `3000`.

## 10. Backup

Os dados editáveis ficam principalmente em:

- `iafirst-payload.db`: conteúdo, usuários e aplicações;
- `public/media`: imagens enviadas pelo painel.

Inclua os dois no backup da hospedagem. Para uma cópia local consistente do SQLite, pare o servidor antes de copiar o arquivo do banco.

## 11. Cuidados importantes

- Nunca publique o arquivo `.env`.
- Troque `PAYLOAD_SECRET` antes de ir para produção.
- Não apague `iafirst-payload.db` se ele já contiver leads reais.
- Não altere diretamente o banco com um editor de SQLite.
- Teste o formulário depois de cada publicação.
- Mantenha backups periódicos do banco e das imagens.
