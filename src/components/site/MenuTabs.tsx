import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories, menu, breakfastIncluded, formatPrice, type Category } from "@/data/menu";
import carte from "@/assets/ocrepino-carte.png.asset.json";
import moroccan from "@/assets/ocrepino-moroccan.jpg";
import { Reveal } from "./Reveal";

export function MenuTabs() {
  const [active, setActive] = useState<Category>("Petits-déjeuners");
  return (
    <section id="menu" className="scroll-mt-20 py-20">
      <div className="container-x">
        <Reveal><div className="flex flex-wrap items-end justify-between gap-6"><div><p className="label-caps text-primary">À la carte</p><h2 className="heading-tight mt-3 text-5xl md:text-6xl">Le goût du matin.</h2></div><Button asChild variant="outline"><a href={carte.url} target="_blank" rel="noreferrer">Voir la carte originale <ArrowUpRight /></a></Button></div></Reveal>
        <div className="mt-10 grid gap-10 lg:grid-cols-[0.85fr_1.4fr]">
          <div><img src={moroccan} alt="Illustration du petit-déjeuner marocain" width={1024} height={896} loading="lazy" className="aspect-square w-full rounded-lg object-cover" /><p className="mt-3 text-xs text-muted-foreground">Visuel d’illustration</p><p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">{breakfastIncluded}</p></div>
          <div><div role="tablist" aria-label="Catégories de la carte" className="flex gap-3 border-b pb-5">{categories.map(c => <Button key={c} role="tab" aria-selected={active === c} variant={active === c ? "default" : "ghost"} onClick={() => setActive(c)}>{c}</Button>)}</div><div role="tabpanel">{menu[active].map(item => <article key={item.id} className="border-b py-5"><div className="flex items-start justify-between gap-5"><h3 className="text-lg font-medium">{item.name}</h3><span className="shrink-0 text-lg font-semibold text-primary">{formatPrice(item.price)}</span></div>{item.description && <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">{item.description}</p>}</article>)}</div><Button asChild className="mt-6" size="lg"><a href="https://glovoapp.com/" target="_blank" rel="noreferrer">Commander sur Glovo <ArrowUpRight /></a></Button></div>
        </div>
      </div>
    </section>
  );
}
