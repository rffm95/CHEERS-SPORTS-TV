export const screen = `<main id="broadcast">
  <header class="topbar">
    <div class="brand"><b>CHEERS TV</b></div>
    <div class="channel"><span class="channel-number">01</span><div><b>SPORTS CLUB</b><span>FUTEBOL. COCKTAILS. BOA COMPANHIA.</span></div></div>
    <div class="header-message">O JOGO É <em>AQUI.</em></div>
    <div class="clock"><b id="clock">--:--:--</b><span id="date">PORTUGAL</span></div>
  </header>
  <section class="stage">
    <aside class="standings">
      <div class="section-title"><span>PELO TOPO.</span><b id="league-country">PT</b></div>
      <div class="league-head"><span class="eyebrow">CLASSIFICAÇÃO</span><h1 id="league-name">PRIMEIRA LIGA</h1><p id="league-caption">Informação em atualização</p></div>
      <div class="table-head"><span>#</span><span>CLUBE</span><span>J</span><span>PTS</span></div>
      <div id="table"><div class="empty">O futebol continua.<small>Informação em atualização</small></div></div>
      <div class="panel-foot"><span id="table-page">FUTEBOL EUROPEU</span><div class="league-dots" id="league-dots"><i class="active"></i><i></i><i></i><i></i><i></i></div></div>
      <div class="club-signature"><span>O TEU CLUBE.</span><b>O TEU BAR.</b><small>CHEERS · SINCE 2014</small></div>
    </aside>
    <section class="feature">
      <div class="poster-stage" id="poster-stage">
        <div class="welcome" id="poster-welcome"><span>CHEERS O BAR / VISEU</span><b>O JOGO É AQUI.<br>O BRINDE <em>TAMBÉM.</em></b><p>Escolhe a tua bebida. Nós tratamos do resto.</p></div>
        <div class="poster-layer" id="poster-a"><img class="poster-image" alt="Publicidade Cheers"></div>
        <div class="poster-layer" id="poster-b"><img class="poster-image" alt="Publicidade Cheers"></div>
      </div>
      <div class="feature-bottom" id="sales-strip">
        <div class="sales-copy"><span id="sales-kicker">A TUA PRÓXIMA RONDA</span><b id="sales-title">QUAL VAI SER O TEU BRINDE?</b></div>
        <div class="sales-action"><b id="sales-action">PEDE NO BALCÃO.</b><span id="sales-detail">Nós tratamos do resto.</span></div>
        <div class="poster-position"><span id="poster-count">CHEERS</span><i id="poster-progress"></i></div>
      </div>
    </section>
    <aside class="fixtures">
      <div class="section-title"><span>VEM AÍ.</span><b>PT</b></div>
      <div class="fixture-head"><span class="eyebrow">PRÓXIMOS JOGOS</span><h1>PRIMEIRA LIGA</h1><p id="fixtures-caption">HORA DE PORTUGAL</p></div>
      <div id="fixtures"><div class="empty">O próximo jogo<br>está a chegar.<small>Calendário em atualização</small></div></div>
      <div class="panel-foot"><span id="fixture-page">FUTEBOL · PORTUGAL</span></div>
      <div class="return-card"><span>A MELHOR PARTE?</span><b>TER COM QUEM<br>VER O JOGO.</b><small>@cheers_o_bar</small></div>
    </aside>
  </section>
  <div class="source-line"><span id="data-status">CHEERS SPORTS CLUB</span><span id="sources">INFORMAÇÃO DESPORTIVA &amp; MERCADOS</span></div>
  <section class="ticker market-ticker"><div class="ticker-label">MERCADOS<span>COTAÇÕES · USD</span></div><div class="ticker-window"><div class="ticker-track" id="markets-track"><div class="ticker-group">BTC · ETH · SOL · PETRÓLEO — Informação em atualização</div><div class="ticker-group" aria-hidden="true">BTC · ETH · SOL · PETRÓLEO — Informação em atualização</div></div></div></section>
  <section class="ticker results-ticker"><div class="ticker-label">NO MARCADOR.<span>RESULTADOS · PRIMEIRA LIGA</span></div><div class="ticker-window"><div class="ticker-track" id="results-track"><div class="ticker-group">CHEERS SPORTS CLUB · O jogo é aqui. O brinde também.</div><div class="ticker-group" aria-hidden="true">CHEERS SPORTS CLUB · O jogo é aqui. O brinde também.</div></div></div><button class="fullscreen" id="fullscreen" aria-label="Ecrã inteiro">⛶</button></section>
  <script src="/tv.js" defer></script>
</main>`;
