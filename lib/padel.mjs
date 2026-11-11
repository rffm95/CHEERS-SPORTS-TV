// Premier Padel calendar from padelapi.org (free plan: 10 req/min, 2,000/day).
// Only main-tour events are shown; one cached request every six hours.
export const padelLevels={major:'MAJOR',p1:'P1',p2:'P2',finals:'FINALS'};
export function padelQuery(now=Date.now()){
  const day=new Date(now).toISOString().slice(0,10);
  return 'tournaments?'+new URLSearchParams({level:'major,p1,p2,finals',after_date:day,sort_by:'start_date',order_by:'asc',per_page:'12'});
}
export function padelTournaments(response,now=Date.now()){
  if(!Array.isArray(response?.data))throw new Error('Invalid padel calendar');
  const today=new Date(now).toISOString().slice(0,10),seen=new Set();
  return response.data.map(t=>({
    name:String(t.name||'').trim(),level:padelLevels[String(t.level||'').toLowerCase()]||'',
    city:String(t.location||'').trim(),country:String(t.country||'').trim().toUpperCase(),
    start:String(t.start_date||'').slice(0,10),end:String(t.end_date||'').slice(0,10),
  })).filter(t=>{
    // The API lists men's and women's draws of one event separately on some editions.
    const key=t.name+'|'+t.start;
    if(!t.name||!t.level||!/^\d{4}-\d{2}-\d{2}$/.test(t.start)||!/^\d{4}-\d{2}-\d{2}$/.test(t.end)||t.end<today||seen.has(key))return false;
    seen.add(key);return true;
  }).sort((a,b)=>a.start.localeCompare(b.start)).slice(0,8);
}
