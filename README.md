# Monorepo StudyOrg

Este repositório contém os projetos frontend (Angular) e backend (Node.js/Prisma) do StudyOrg organizados em um único monorepo.

## Estrutura

```
/
├── study-org/           # Frontend Angular
├── study-org-backend/   # Backend Node.js + Prisma
├── docker/              # Configurações Docker
├── docker-compose.yml   # Compose para desenvolvimento
├── docker-compose.prod.yml # Compose para produção
├── .gitignore           # Ignora arquivos de ambos projetos
└── README.md            # Este arquivo
```

## Como rodar

Veja as instruções específicas em cada subpasta (`study-org/` e `study-org-backend/`).

### Docker

Para rodar tudo com Docker Compose:

```sh
docker-compose up --build
```

## Observações
- Cada projeto mantém seu próprio `package.json` e dependências.
- Use o README de cada subpasta para detalhes específicos.
- Variáveis de ambiente devem ser configuradas nos arquivos `.env` de cada projeto.
