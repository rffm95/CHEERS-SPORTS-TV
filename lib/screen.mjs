export const screen = `<main id="broadcast">
  <div class="broadcast-content">
  <header class="topbar">
    <div class="brand"><span class="crest"><svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 4.5h17L12 13.2z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M6.6 7.6h10.8L12 13.2z" fill="currentColor"/><path d="M12 13.2v6.3M7.6 20h8.8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" fill="none"/><path d="M15.2 2.2l-3 5.4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><circle cx="15.6" cy="1.9" r="1.3" fill="currentColor"/></svg></span><div class="brand-text"><b>CHEERS <span>TV</span></b><small>SPORTS &amp; COCKTAIL BAR</small></div></div>
    <div class="header-message"><span class="hm-ico"><svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 7.2l4.3 3.1-1.6 5h-5.4l-1.6-5z" fill="currentColor"/><path d="M12 7.2V1.6M16.3 10.3l5.2-1.8M14.7 15.3l3.3 4.6M9.3 15.3L6 19.9M7.7 10.3L2.5 8.5" stroke="currentColor" stroke-width="1.4" fill="none"/></svg></span><i class="rule"></i><span class="hm-text">O JOGO É <em>AQUI.</em></span><i class="rule"></i><span class="hm-ico"><svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="10" cy="9" rx="7" ry="7.6" fill="none" stroke="currentColor" stroke-width="1.6" transform="rotate(-35 10 9)"/><g fill="currentColor"><circle cx="8" cy="7" r=".9"/><circle cx="11" cy="6.2" r=".9"/><circle cx="7.4" cy="10.2" r=".9"/><circle cx="10.4" cy="9.4" r=".9"/><circle cx="13.2" cy="8.4" r=".9"/><circle cx="10" cy="12.6" r=".9"/></g><path d="M14.6 14.6l5.6 5.6" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/><circle cx="20" cy="4.4" r="2.1" fill="var(--ball)"/></svg></span></div>
    <div class="clock"><b id="clock">--:--</b><span id="date">PORTUGAL</span></div>
  </header>
  <section class="stage">
    <aside class="standings">
      <div class="section-title"><span>PELO TOPO.</span><b id="league-country">PT</b></div>
      <div class="league-head"><span class="eyebrow">CLASSIFICAÇÃO</span><h1 id="league-name">PRIMEIRA LIGA</h1><p id="league-caption">Informação em atualização</p></div>
      <div class="table-head"><span>#</span><span>CLUBE</span><span>J</span><span>PTS</span></div>
      <div id="table"><div class="empty">O futebol continua.<small>Informação em atualização</small></div></div>
      <div class="panel-foot"><span id="table-page">FUTEBOL EUROPEU</span><div class="league-dots" id="league-dots"><i class="active"></i><i></i><i></i><i></i><i></i></div></div>
      <div class="club-signature"><span class="sig-ico"><svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 7.2l4.3 3.1-1.6 5h-5.4l-1.6-5z" fill="currentColor"/><path d="M12 7.2V1.6M16.3 10.3l5.2-1.8M14.7 15.3l3.3 4.6M9.3 15.3L6 19.9M7.7 10.3L2.5 8.5" stroke="currentColor" stroke-width="1.4" fill="none"/></svg></span><span>O TEU CLUBE.</span><b>O TEU BAR.</b><small>CHEERS · SINCE 2014</small></div>
    </aside>
    <section class="feature">
      <div class="poster-stage" id="poster-stage">
        <div class="welcome" id="poster-welcome"><span>CHEERS O BAR / VISEU</span><b>O JOGO É AQUI.<br>O BRINDE <em>TAMBÉM.</em></b><p>Escolhe a tua bebida. Nós tratamos do resto.</p></div>
        <div class="poster-layer" id="poster-a"><img class="poster-image" alt="Publicidade Cheers"></div>
        <div class="poster-layer" id="poster-b"><img class="poster-image" alt="Publicidade Cheers"></div>
      </div>
      <div class="feature-bottom" id="sales-strip">
        <span class="sales-ico"><svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 4.5h17L12 13.2z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M6.6 7.6h10.8L12 13.2z" fill="currentColor"/><path d="M12 13.2v6.3M7.6 20h8.8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" fill="none"/><path d="M15.2 2.2l-3 5.4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><circle cx="15.6" cy="1.9" r="1.3" fill="currentColor"/></svg></span><div class="sales-copy"><span id="sales-kicker">A TUA PRÓXIMA RONDA</span><b id="sales-title">QUAL VAI SER O TEU BRINDE?</b></div>
        <div class="sales-action"><b id="sales-action">PEDE NO BALCÃO.</b><span id="sales-detail">Nós tratamos do resto.</span></div>
        <div class="poster-position"><span id="poster-count">CHEERS</span><i id="poster-progress"></i></div>
      </div>
    </section>
    <aside class="fixtures">
      <div class="section-title"><span class="fixture-heading"><img id="fixture-flag" class="country-flag" src="flags/pt.svg" alt="Portugal" width="28" height="21">VEM AÍ.</span><b id="fixture-country">PT</b></div>
      <div class="fixture-head"><span class="eyebrow" id="fixtures-eyebrow">PRÓXIMOS JOGOS</span><h1 id="fixtures-league-name">PRIMEIRA LIGA</h1><p id="fixtures-caption">HORA DE PORTUGAL</p></div>
      <div id="fixtures"><div class="empty">O próximo jogo<br>está a chegar.<small>Calendário em atualização</small></div></div>
      <div class="panel-foot"><span id="fixture-page">FUTEBOL · PORTUGAL</span></div>
      <div class="return-card"><span class="sig-ico"><svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="10" cy="9" rx="7" ry="7.6" fill="none" stroke="currentColor" stroke-width="1.6" transform="rotate(-35 10 9)"/><g fill="currentColor"><circle cx="8" cy="7" r=".9"/><circle cx="11" cy="6.2" r=".9"/><circle cx="7.4" cy="10.2" r=".9"/><circle cx="10.4" cy="9.4" r=".9"/><circle cx="13.2" cy="8.4" r=".9"/><circle cx="10" cy="12.6" r=".9"/></g><path d="M14.6 14.6l5.6 5.6" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/><circle cx="20" cy="4.4" r="2.1" fill="var(--ball)"/></svg></span><span>A MELHOR PARTE?</span><b>TER COM QUEM<br>VER O JOGO.</b><small>@cheers_o_bar</small></div>
    </aside>
  </section>
  <div class="source-line"><span id="data-status">CHEERS TV</span><span id="sources">INFORMAÇÃO DESPORTIVA &amp; MERCADOS</span></div>
  <section class="ticker market-ticker" id="market-ticker" hidden><div class="ticker-label">MERCADOS<span>COTAÇÕES · USD</span></div><div class="ticker-window"><div class="ticker-track" id="markets-track"><div class="ticker-group">BTC · ETH · SOL · PETRÓLEO — Informação em atualização</div><div class="ticker-group" aria-hidden="true">BTC · ETH · SOL · PETRÓLEO — Informação em atualização</div></div></div></section>
  <section class="ticker results-ticker"><div class="ticker-label"><span class="label-ico"><svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 7.2l4.3 3.1-1.6 5h-5.4l-1.6-5z" fill="currentColor"/><path d="M12 7.2V1.6M16.3 10.3l5.2-1.8M14.7 15.3l3.3 4.6M9.3 15.3L6 19.9M7.7 10.3L2.5 8.5" stroke="currentColor" stroke-width="1.4" fill="none"/></svg></span>NO MARCADOR.<span>RESULTADOS · PRIMEIRA LIGA</span></div><div class="ticker-window"><div class="ticker-track" id="results-track"><div class="ticker-group">CHEERS TV · O jogo é aqui. O brinde também.</div><div class="ticker-group" aria-hidden="true">CHEERS TV · O jogo é aqui. O brinde também.</div></div></div></section>
  <script src="/tv.js?v=luxe-2" defer></script>
  </div>
</main>`;
