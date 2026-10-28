import { officialMatches, selectFixtures } from './providers.mjs';

export const fixtureCompetitions = [
  {code:'PPL',name:'PRIMEIRA LIGA',country:'PT',countryName:'Portugal',flag:'pt'},
  {code:'PD',name:'LA LIGA',country:'ES',countryName:'Espanha',flag:'es'},
  {code:'PL',name:'PREMIER LEAGUE',country:'EN',countryName:'Inglaterra',flag:'gb-eng'},
];

export async function loadFixtureLeagues(shared, football, now=Date.now()) {
  const schedules=[];
  // Reuse Portugal's existing cache and refresh each league at most once an hour.
  // Sequential loading keeps a cold refresh below the free API's request limit.
  for (const league of fixtureCompetitions) {
    const meta=await shared('fixtures-'+league.code,60*60000,async()=>
      officialMatches(await football('competitions/'+league.code+'/matches?status=SCHEDULED,TIMED')));
    schedules.push({...league,...meta,data:selectFixtures(meta.data||[],now)});
  }
  return schedules;
}
