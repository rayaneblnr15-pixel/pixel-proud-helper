import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Reveal";
import { Button } from "@/components/ui/button";
const links = [{href:"#menu",label:"La carte"},{href:"#mission",label:"Ôcrepino"},{href:"#locations",label:"Nous trouver"}];
export function Navbar() {
 const [open,setOpen]=useState(false);
 return <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/95 backdrop-blur-md"><nav className="container-x flex h-20 items-center justify-between gap-4" aria-label="Navigation principale"><a href="#top" aria-label="Ôcrepino accueil"><Logo /></a><div className="hidden items-center gap-8 md:flex">{links.map(l=><a key={l.href} href={l.href} className="label-caps hover:text-primary">{l.label}</a>)}</div><div className="flex items-center gap-2"><Button asChild className="hidden sm:inline-flex"><a href="https://glovoapp.com/" target="_blank" rel="noreferrer">Commander <ArrowUpRight /></a></Button><Button variant="ghost" size="icon" className="md:hidden" aria-label={open?"Fermer le menu":"Ouvrir le menu"} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</Button></div></nav>{open&&<div className="border-t bg-background px-5 py-6 md:hidden">{links.map(l=><a key={l.href} href={l.href} onClick={()=>setOpen(false)} className="block py-3 text-xl">{l.label}</a>)}<Button asChild className="mt-4"><a href="https://glovoapp.com/" target="_blank" rel="noreferrer">Commander sur Glovo <ArrowUpRight /></a></Button></div>}</header>;
}
