# Mentoria AI FIRST — Next.js + Payload

Versão administrável da landing page da Mentoria AI FIRST.

O projeto reúne no mesmo aplicativo:

- landing page em Next.js;
- painel Payload em `/admin`;
- banco SQLite local;
- conteúdo editável com rascunhos e versões;
- biblioteca de mídia;
- formulário com armazenamento de aplicações e UTMs;
- SEO e card de compartilhamento.

## Início rápido

```bash
pnpm install
pnpm dev
```

Abra:

- site: <http://localhost:3000>
- painel: <http://localhost:3000/admin>

No primeiro acesso ao painel, crie o usuário administrador. O conteúdo inicial da landing page é criado automaticamente.

## Documentação de uso

Veja o passo a passo completo em [TUTORIAL.md](./TUTORIAL.md).

## Produção

```bash
pnpm build
pnpm start
```

Esta aplicação precisa de hospedagem Node.js e banco persistente. Ela não deve ser enviada ao cPanel como um conjunto de arquivos HTML estáticos.
