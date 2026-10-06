// Cache data and the next allowed attempt independently. A failed refresh never
// overwrites the last successful payload. R2 persists across deployments.
export async function cached(store,key,ttl,loader,now=Date.now()) {
 const old=await store.get(key);
 if(old&&now<old.nextAttempt) return {...old.payload,stale:now-old.updatedAt>ttl};
 try {const data=await loader();const payload={data,updatedAt:new Date(now).toISOString(),stale:false};await store.put(key,{payload,updatedAt:now,nextAttempt:now+ttl});return payload;}
 catch(error){const wait=Math.max(120000,Math.min(Number(error.retryAfter||120000),3600000));if(old){await store.put(key,{...old,nextAttempt:now+wait});return {...old.payload,stale:true};}await store.put(key,{payload:{data:null,updatedAt:null,stale:true},updatedAt:0,nextAttempt:now+wait});return {data:null,updatedAt:null,stale:true};}
}
