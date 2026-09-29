"use client";
import { ReactNode, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

interface ScrollExpandMediaProps { mediaSrc:string; bgImageSrc:string; title?:string; date?:string; scrollToExpand?:string; children?:ReactNode; }

export default function ScrollExpandMedia({mediaSrc,bgImageSrc,title="Bateu a fome?",date="ABERTO HOJE • 18H—23H30",scrollToExpand="ROLE PARA VER O CARDÁPIO",children}:ScrollExpandMediaProps){
 const ref=useRef<HTMLDivElement>(null); const reduced=useReducedMotion();
 const {scrollYProgress}=useScroll({target:ref,offset:["start start","end start"]});
 const width=useTransform(scrollYProgress,[0,.68],["58vw","100vw"]); const height=useTransform(scrollYProgress,[0,.68],["72vh","100vh"]);
 const radius=useTransform(scrollYProgress,[0,.65],["3px","0px"]); const bgOpacity=useTransform(scrollYProgress,[0,.6],[.55,0]);
 const textY=useTransform(scrollYProgress,[0,.55],[0,-90]); const textOpacity=useTransform(scrollYProgress,[0,.45],[1,0]);
 return <div ref={ref} className="scroll-expansion">
   <div className="expansion-sticky">
    <motion.div className="expansion-bg" style={{opacity:reduced?.55:bgOpacity}}><Image src={bgImageSrc} alt="" fill priority sizes="100vw"/></motion.div>
    <motion.div className="expansion-copy" style={{y:reduced?0:textY,opacity:reduced?1:textOpacity}}><p>{date}</p><h1>{title.split(" ").slice(0,2).join(" ")}<br/><em>{title.split(" ").slice(2).join(" ")}</em></h1><span>{scrollToExpand} ↓</span></motion.div>
    <motion.div className="expansion-media" style={{width:reduced?"58vw":width,height:reduced?"72vh":height,borderRadius:radius}}><Image src={mediaSrc} alt="X-Burguer do Renato com queijo e salada" fill priority sizes="(max-width: 768px) 92vw, 100vw"/><div className="media-shade"/><div className="price-seal"><small>A PARTIR DE</small><strong>R$14</strong><b>,00</b></div></motion.div>
   </div>{children}
 </div>
}
