import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"Renato 100% Lanches",description:"Lanche feito na hora, preço na lata e pedido sem complicação."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
