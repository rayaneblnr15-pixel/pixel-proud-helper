import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import side1 from "@/assets/side-1.jpg";

const slides = [
  { label: "New menu", title: ["Now serving", "summer"], image: hero1, alt: "Friends sharing colorful salad bowls on a sunlit yellow table" },
  { label: "Seasonal", title: ["Warm bowls", "are back"], image: hero2, alt: "Roasted vegetable grain bowl on a sage linen table" },
  { label: "On the side", title: ["Fresh sides,", "big flavor"], image: side1, alt: "Crispy rosemary potatoes with garlic aioli" },
];

export function HeroCarousel() {
  const [i, setI] = useState(0);
  const go = useCallback((d: number) => setI((p) => (p + d + slides.length) % slides.length), []);

  useEffect(() => {
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [i, go]);

  const s = slides[i];
  return (
    <section id="top" className="relative h-[70vh] overflow-hidden md:h-[85vh]" aria-roledescription="carousel" aria-label="Featured">
      <AnimatePresence mode="sync">
        <motion.img
          key={s.image}
          src={s.image}
          alt={s.alt}
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60) go(1);
            else if (info.offset.x > 60) go(-1);
          }}
        />
      </AnimatePresence>
      <div className="pointer-events-none absolute inset-0 bg-hero-overlay" />

      <div className="absolute right-5 top-20 flex gap-2 md:right-10">
        <button aria-label="Previous slide" onClick={() => go(-1)} className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-secondary-foreground transition-transform hover:-translate-y-0.5">
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button aria-label="Next slide" onClick={() => go(1)} className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-secondary-foreground transition-transform hover:-translate-y-0.5">
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div className="container-x absolute inset-x-0 bottom-12 md:bottom-16">
        <AnimatePresence mode="wait">
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.6 }} className="text-primary-foreground">
            <p className="label-caps mb-4">{s.label}</p>
            <h1 className="heading-tight text-[clamp(48px,8vw,88px)]">
              {s.title[0]}
              <br />
              {s.title[1]}
            </h1>
          </motion.div>
        </AnimatePresence>
        <a href="#menu" className="group mt-8 inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3 label-caps text-secondary-foreground transition-transform hover:-translate-y-0.5">
          Order now <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </a>
        <div className="mt-6 flex gap-2" aria-hidden="true">
          {slides.map((_, k) => (
            <span key={k} className={`h-1 rounded-full bg-primary-foreground transition-all ${k === i ? "w-8" : "w-3 opacity-50"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
