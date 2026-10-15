import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import breakfast from "@/assets/ocrepino-breakfast.jpg";
export function HeroCarousel() {
  return <section id="top" className="relative h-[78vh] min-h-[520px] max-h-[900px] overflow-hidden">
    <img src={breakfast} alt="Petit-déjeuner avec œuf, avocat et tomates — photo améliorée à partir de la carte" width={1376} height={768} className="absolute inset-0 h-full w-full object-cover object-[65%_center]" />
    <div className="absolute inset-0 bg-hero-overlay" />
    <div className="container-x absolute inset-x-0 bottom-12 text-on-image md:bottom-16"><p className="label-caps mb-5 text-primary">Salé · Petit-déjeuner & brunch</p><h1 className="heading-tight text-6xl font-semibold md:text-8xl">Ôcrepino</h1><p className="mt-5 max-w-sm text-xl leading-relaxed">Les matins ont<br />leur bonne adresse.</p><div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg"><a href="#menu">Découvrir la carte <ArrowDown /></a></Button><Button asChild variant="outline" size="lg" className="border-on-image/40 bg-transparent text-on-image hover:bg-background"><a href="https://glovoapp.com/" target="_blank" rel="noreferrer">Commander <ArrowUpRight /></a></Button></div></div>
  </section>;
}
