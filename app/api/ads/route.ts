import { env } from 'cloudflare:workers';
const bucket=(env as unknown as {BUCKET?:R2Bucket}).BUCKET;
let last:{ads:string[];version:string;nextAttempt:number}|null=null;
let active:Promise<any>|null=null;
async function load(){if(!last&&bucket)try{const o=await bucket.get('ads-manifest-v1.json');if(o)last=await o.json();}catch{}
 if(last&&Date.now()<last.nextAttempt)return last;
 try{const controller=new AbortController();const timer=setTimeout(()=>controller.abort(),10000);let response;try{response=await fetch('https://api.github.com/repos/rffm95/CHEERS-SPORTS-TV/contents/public/ads?ref=main',{headers:{Accept:'application/vnd.github+json','User-Agent':'Cheers-Sports-TV'},signal:controller.signal});}finally{clearTimeout(timer);}if(!response.ok)throw Error();const files=await response.json() as Array<{type:string;name:string;sha:string}>;if(!Array.isArray(files))throw Error();const found=files.filter(f=>f.type==='file'&&/\.(png|jpe?g|webp|svg)$/i.test(f.name)).sort((a,b)=>a.name.localeCompare(b.name,'en',{numeric:true,sensitivity:'base'}));const ads=found.map(f=>'https://raw.githubusercontent.com/rffm95/CHEERS-SPORTS-TV/'+ 'main/public/ads/'+encodeURIComponent(f.name)+'?v='+f.sha);last={ads,version:found.map(f=>f.sha).join('-'),nextAttempt:Date.now()+300000};if(bucket)try{await bucket.put('ads-manifest-v1.json',JSON.stringify(last));}catch{}return last;
 }catch{if(last){last.nextAttempt=Date.now()+120000;return last;}return null;}}
export async function GET(){if(!active)active=load().finally(()=>{active=null;});const result=await active;return Response.json(result||{fallback:true},{headers:{'Cache-Control':'no-store'}});}
