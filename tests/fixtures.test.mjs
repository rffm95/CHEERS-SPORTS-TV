import test from 'node:test';
import assert from 'node:assert/strict';
import {cached} from '../lib/cache.mjs';
import {loadFixtureLeagues} from '../lib/fixtures.mjs';

function fixture(home,round=10) {
  return {status:'TIMED',matchday:round,utcDate:'2099-11-01T20:15:00Z',homeTeam:{name:home},awayTeam:{name:'Away'},score:{fullTime:{home:null,away:null}}};
}

test('three fixture leagues use free competition endpoints and independent hourly caches',async()=>{
  let now=Date.parse('2099-10-28T00:00:00Z'),failSpain=false;
  const cache=new Map(),calls=[];
  const store={get:async key=>cache.get(key),put:async(key,value)=>cache.set(key,value)};
  const shared=(key,ttl,loader)=>cached(store,key,ttl,loader,now);
  const football=async path=>{calls.push(path);if(failSpain&&path.includes('/PD/'))throw Error('Temporary provider outage');return {matches:[fixture(path.split('/')[1]),fixture('Later round',11)]};};
  let groups=await loadFixtureLeagues(shared,football,now);
  assert.deepEqual(groups.map(g=>g.code),['PPL','PD','PL']);
  assert.deepEqual(calls,['PPL','PD','PL'].map(code=>'competitions/'+code+'/matches?status=SCHEDULED,TIMED'));
  assert.deepEqual(groups.map(g=>g.data[0].home),['PPL','PD','PL']);
  assert.ok(groups.every(g=>g.data.length===1));
  await loadFixtureLeagues(shared,football,now+1000);
  assert.equal(calls.length,3);
  now+=3600001;failSpain=true;
  groups=await loadFixtureLeagues(shared,football,now);
  assert.equal(calls.length,6);
  assert.equal(groups[1].stale,true);
  assert.equal(groups[1].data[0].home,'PD');
  assert.equal(groups[0].stale,false);
  assert.equal(groups[2].stale,false);
});
