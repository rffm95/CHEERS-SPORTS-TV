import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'CHEERS SPORTS • Ao vivo',description:'Emissão desportiva do Cheers O Bar, Viseu.',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="pt-PT"><body>{children}</body></html>}
