# MWM Segurança Eletrônica

Site institucional em Next.js 16 com App Router, pronto para publicação na Vercel.

## Executar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Compilar para produção

```bash
npm run build
npm start
```

O comando de build gera automaticamente a pasta `.next` usada pelo Next.js e
pela Vercel.

## Publicar na Vercel

Importe o repositório no painel da Vercel. O framework será detectado como
Next.js e as configurações padrão podem ser mantidas:

- Build Command: `npm run build`
- Output: `.next`
- Install Command: `npm install`

Não são necessárias variáveis de ambiente para o funcionamento atual do site.
