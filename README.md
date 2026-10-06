# CHEERS SPORTS TV

Emissão 16:9 para Smart TV: publicidades a cada 10 segundos, cinco classificações, próximos jogos da Primeira Liga, resultados, cripto e petróleo. Relógio e jogos em `Europe/Lisbon`.

## Publicidades

Adicione `pub1.png`, `pub2.jpg`, `pub10.webp`, etc. a **public/ads/** e faça commit/push para **main**. A emissão publicada descobre os ficheiros automaticamente em até 5 minutos; não precisa de editar listas ou código. A ordem é natural. PNG, JPG/JPEG, WEBP e SVG são aceites; as imagens mantêm a proporção. Os dois SVG incluídos são anúncios iniciais do Cheers e podem ser substituídos.

O build também gera `public/ads-manifest.json` para fallback local. Publicidades do GitHub entram diretamente na emissão, sem exigir novo deploy. Alterações ao código precisam de publicação do servidor.

## Dados e execução

- football-data.org: classificações oficiais das cinco ligas (30 min), resultados Primeira Liga (15 min) e calendário (60 min). Chave exclusivamente no servidor, cabeçalhos de rate limit respeitados; os dados do free tier podem ser atrasados.
- CoinMarketCap v3: BTC/ETH/SOL, preço USD e variação 24h; cache 5 min. Acesso público sem chave, com chave Basic opcional para quota própria. Atribuição visível.
- EIA: WTI spot USD/barril, publicação diária atrasada; variação entre as duas últimas observações, sempre com data. Atualização diária; usa DEMO_KEY público de baixo volume ou EIA_API_KEY.
- AAPL/MSFT/NVDA/AMZN/GOOGL: integração Twelve Data preparada, desativada até existirem chave e direitos de exibição externa. Não são apresentadas cotações fictícias. O plano Basic é de uso interno e não cobre a exibição no bar.

R2 guarda os últimos dados válidos e o intervalo de retry. Cache por fonte; várias TVs reutilizam dados. Cache local de dispositivo ajuda nas falhas de rede. Publicidades continuam se uma API falhar. Num arranque sem dados válidos, aparece um estado discreto de atualização.

As chaves são segredos do alojamento; nunca as coloque no frontend ou no Git. Consulte `.env.example`. Para desenvolvimento com Cloudflare, use `.dev.vars` (ignorado).

```sh
corepack pnpm install --frozen-lockfile
pnpm dev
pnpm test
pnpm build
```

**Ecrã inteiro:** botão no canto inferior direito, tecla F ou Enter; alguns browsers de TV exigem usar a opção nativa do browser. Layout de 1920×1080 escalado para o viewport, incluindo 1366×768, sem scroll. Browsers com Fetch, Promise, CSS Grid e Intl/timezones são necessários. Teste no modelo concreto da TV antes de uso contínuo.

## Validação

Testes de dados oficiais, paginação, hora de Lisboa, ordenação de imagens, cache, falhas e retry; simulação de 8 horas de timers e slideshow. A validação visual no browser da TV permanece necessária. Não foram realizados testes de 8 horas em hardware real.

Fontes/documentação: [football-data](https://docs.football-data.org/general/v4/lookup_tables.html), [CoinMarketCap](https://coinmarketcap.com/api/documentation/pro-api-reference/keyless-public-api), [EIA](https://www.eia.gov/opendata/), [Twelve Data](https://twelvedata.com/pricing-business).
