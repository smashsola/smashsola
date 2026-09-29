import { MapPin, ArrowRight } from "lucide-react";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import { Hero08, type HeroCard } from "@/components/ui/hero-08";
import Navbar,{Logo} from "@/components/site/navbar";
const image=(id:string,w=1400)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=86`;
const cards:HeroCard[]=[
 {title:"X-Salada",subtitle:"O DE SEMPRE, CAPRICHADO",price:"R$ 14,00",image:image("photo-1568901346375-23c9450c58cd"),imageAlt:"X-Salada com queijo e vegetais"},
 {title:"X-Bacon",subtitle:"BACON CROCANTE DE VERDADE",price:"R$ 18,00",image:image("photo-1550547660-d9450f859349"),imageAlt:"Hambúrguer com bacon"},
 {title:"Batata",subtitle:"PORÇÃO PRA DIVIDIR. OU NÃO.",price:"R$ 16,00",image:image("photo-1573080496219-bb080dd4f877"),imageAlt:"Porção de batatas fritas"}
];
export default function Page(){return <><Navbar/><main id="inicio"><ScrollExpandMedia mediaSrc={cards[0].image} bgImageSrc={cards[1].image}><div className="hero-bridge"><p>COMIDA DE VERDADE <b>•</b> PREÇO JUSTO <b>•</b> FEITO NA HORA</p></div></ScrollExpandMedia><section id="cardapio" className="menu-section"><header><span>ESCOLHA O SEU</span><h2>Os mais <em>pedidos</em></h2><p>Foto grande, preço claro e pedido sem enrolação.</p></header><div className="categories"><button className="active">Hambúrgueres</button><button>Cachorros-quentes</button><button>Porções</button><button>Bebidas</button></div><Hero08 cards={cards}/><a className="full-menu" href="#cardapio">VER CARDÁPIO COMPLETO <ArrowRight/></a></section><section id="local" className="location"><div><span>PASSA AQUI</span><h2>O trailer<br/>do Renato</h2></div><div className="address"><MapPin/><p><b>Av. Principal, 100</b><br/>Bairro Centro · Sua cidade</p><a href="#inicio">COMO CHEGAR →</a></div></section></main><footer><Logo/><p>Comida de verdade. Desde sempre.</p><small>© 2026 Renato 100% Lanches</small></footer></>}
