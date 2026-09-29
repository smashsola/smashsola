# Renato 100% Lanches

Site mobile-first do trailer Renato 100% Lanches, construído com Next.js, React, TypeScript, Tailwind CSS e componentes no padrão shadcn.

## Estrutura

- `app/`: rotas e estilos globais do Next.js.
- `components/ui/`: componentes reutilizáveis compatíveis com a convenção do shadcn. Manter esta pasta é importante para que imports `@/components/ui/*`, o CLI do shadcn e futuras atualizações tenham um caminho previsível.
- `components/site/`: componentes específicos da marca.
- `public/images/`: placeholders locais que podem ser substituídos pelas fotos reais.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Componentes 21st.dev adaptados

O `ScrollExpandMedia` foi adaptado para usar o scroll nativo da página: não há `preventDefault`, bloqueio do scroll ou gesto obrigatório. O `Hero08` fornece a entrada escalonada dos produtos, sem social proof ou conteúdo inventado.
