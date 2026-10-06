import { readdir, writeFile, copyFile } from 'node:fs/promises';
export function naturalAds(names) {return names.filter(n=>/\.(png|jpe?g|webp|svg)$/i.test(n)).sort((a,b)=>a.localeCompare(b,'en',{numeric:true,sensitivity:'base'}));}
export async function buildAds(root=new URL('../public/',import.meta.url)) {const names=naturalAds(await readdir(new URL('ads/',root)));await writeFile(new URL('ads-manifest.json',root),JSON.stringify({version:Date.now(),ads:names.map(n=>'/ads/'+encodeURIComponent(n))}));return names;}
if(process.argv[1]===new URL(import.meta.url).pathname) {console.log('Ads:',(await buildAds()).length);await copyFile(new URL('../app/globals.css',import.meta.url),new URL('../public/tv.css',import.meta.url));}
