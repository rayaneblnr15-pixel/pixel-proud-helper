import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { categories, menu, type Category, type MenuItem } from "@/data/menu";
import { Reveal } from "./Reveal";

function ProductCard({ item, onOrder }: { item: MenuItem; onOrder: (i: MenuItem) => void }) {
  return (
    <article className="group w-[82%] shrink-0 snap-start sm:w-auto">
      <div className="relative overflow-hidden rounded-3xl bg-beige transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-soft">
        <img src={item.image} alt={`${item.name} bowl, top-down view`} loading="lazy" width={1024} height={896} className="aspect-[4/3.5] w-full object-cover" />
        {item.popular && (
          <span className="absolute left-4 top-4 rounded-full bg-secondary px-3 py-1 label-caps text-secondary-foreground">Popular</span>
        )}
        {(item.glutenFree || item.containsGluten) && (
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="absolute right-4 top-4 grid h-7 w-7 place-items-center rounded-full border border-foreground/60 text-xs font-medium" aria-label={item.glutenFree ? "Gluten-free" : "Contains gluten"}>
                G
              </button>
            </TooltipTrigger>
            <TooltipContent>{item.glutenFree ? "Gluten-free" : "Contains gluten"}</TooltipContent>
          </Tooltip>
        )}
      </div>
      <h3 className="mt-5 text-base font-medium uppercase tracking-wide">{item.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground/80">{item.description}</p>
      <button onClick={() => onOrder(item)} className="group/link mt-4 inline-flex items-center gap-1.5 text-sm font-medium">
        Order now <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
      </button>
    </article>
  );
}

export function MenuTabs({ onOrder }: { onOrder: (i: MenuItem) => void }) {
  const [active, setActive] = useState<Category>("Salads");
  return (
    <section id="menu" className="scroll-mt-16 py-20">
      <div className="container-x">
        <Reveal>
          <div role="tablist" aria-label="Menu categories" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {categories.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={active === c}
                onClick={() => setActive(c)}
                className={`relative pb-4 font-serif text-[clamp(30px,4vw,46px)] font-light transition-colors ${active === c ? "text-foreground" : "text-muted-foreground hover:text-foreground/70"}`}
              >
                {c}
                {active === c && <motion.span layoutId="dot" className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-foreground" />}
              </button>
            ))}
          </div>
        </Reveal>
        <TooltipProvider delayDuration={100}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              role="tabpanel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45 }}
              className="-mx-5 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3"
            >
              {menu[active].map((item) => (
                <ProductCard key={item.id} item={item} onOrder={onOrder} />
              ))}
            </motion.div>
          </AnimatePresence>
        </TooltipProvider>
      </div>
    </section>
  );
}
