import { useEffect, useRef, useState, type FormEvent } from "react";
import { animate, useInView } from "framer-motion";
import { Apple, ArrowRight, Instagram, Facebook, Twitter, Play } from "lucide-react";
import { toast } from "sonner";
import lemon from "@/assets/lemon-branch.png";
import bowl1 from "@/assets/bowl-1.jpg";
import bowl2 from "@/assets/bowl-2.jpg";
import bowl3 from "@/assets/bowl-3.jpg";
import side1 from "@/assets/side-1.jpg";
import { Reveal, Logo } from "./Reveal";

export function AppPromo() {
  return (
    <section className="overflow-hidden bg-sage py-[100px]">
      <div className="container-x grid items-center gap-16 md:grid-cols-2">
        <Reveal>
          <p className="label-caps">Inside the app</p>
          <h2 className="heading-tight mt-5 text-[clamp(44px,6vw,72px)]">Explore our new<br />Leafwise app</h2>
          <div className="mt-8 max-w-md space-y-4 text-lg leading-snug">
            <p>Our freshly designed app is a dream home for all things Leafwise. Order delivery or pickup, find personalized promos, and access exclusive menu items.</p>
            <p>Tap in to eat with the seasons, explore new flavors, and find the sweet spot between good-for-you and just-plain-good.</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#" className="inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-background transition-transform hover:-translate-y-0.5">
              <Apple className="h-5 w-5" /> <span className="text-sm">Download on the App Store</span>
            </a>
            <a href="#" className="inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-background transition-transform hover:-translate-y-0.5">
              <Play className="h-5 w-5" /> <span className="text-sm">Get it on Google Play</span>
            </a>
          </div>
        </Reveal>
        <div className="relative mx-auto h-[560px] w-full max-w-md">
          <img src={lemon} alt="" aria-hidden="true" loading="lazy" className="absolute -right-16 -top-6 w-[420px] rotate-6" />
          <div className="animate-float absolute bottom-0 left-1/2 w-[250px] rounded-[40px] bg-foreground p-2.5 shadow-soft" style={{ marginLeft: -125, left: "50%" }}>
            <div className="overflow-hidden rounded-[32px] bg-background">
              <div className="flex justify-between px-5 pt-3 text-[10px] font-medium"><span>9:41</span><span>●●●</span></div>
              <div className="p-4">
                <p className="label-caps text-[9px] text-muted-foreground">Featured</p>
                <img src={bowl2} alt="Featured salad in the app" loading="lazy" className="mt-2 aspect-square w-full rounded-2xl bg-beige object-cover" />
                <p className="mt-3 text-sm font-medium">Guacamole Greens</p>
                <p className="text-[10px] text-muted-foreground">Seasonal favourite</p>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {[bowl1, bowl3, side1, bowl2, bowl1, bowl3].map((s, k) => (
                    <img key={k} src={s} alt="" loading="lazy" className="aspect-square rounded-lg bg-beige object-cover" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.8, ease: "easeOut", onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{v}{suffix}</span>;
}

export function Mission() {
  const stats = [
    { n: 100, s: "%", l: "Seasonal produce" },
    { n: 50, s: "+", l: "Local farms" },
    { n: 0, s: "", l: "Artificial additives" },
  ];
  return (
    <section id="mission" className="scroll-mt-16 py-28">
      <div className="container-x grid gap-16 md:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <p className="label-caps">Our mission</p>
          <p className="heading-tight mt-6 text-[clamp(28px,3.6vw,46px)] leading-[1.12]">
            We build every bowl around what's growing right now — sourced from farmers we know by name, prepared from scratch each morning, and served without shortcuts.
          </p>
        </Reveal>
        <div className="space-y-10 self-end">
          {stats.map((s, k) => (
            <Reveal key={s.l} delay={k * 0.1}>
              <div className="border-t pt-5">
                <div className="heading-tight text-6xl"><CountUp to={s.n} suffix={s.s} /></div>
                <p className="label-caps mt-2 text-muted-foreground">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const locations = [
  { name: "Mission Street", addr: "214 Mission St, San Francisco, CA", hours: "Mon–Sun · 10:30am – 9pm" },
  { name: "Silver Lake", addr: "3301 Sunset Blvd, Los Angeles, CA", hours: "Mon–Sun · 10:30am – 9pm" },
  { name: "Williamsburg", addr: "88 N 6th St, Brooklyn, NY", hours: "Mon–Sat · 11am – 10pm" },
  { name: "South Congress", addr: "1500 S Congress Ave, Austin, TX", hours: "Mon–Sun · 10:30am – 8pm" },
];

export function Locations() {
  return (
    <section id="locations" className="scroll-mt-16 pb-28">
      <div className="container-x">
        <Reveal><h2 className="heading-tight text-[clamp(40px,5vw,64px)]">Find us</h2></Reveal>
        <ul className="mt-12 grid gap-x-10 sm:grid-cols-2">
          {locations.map((l, k) => (
            <Reveal key={l.name} delay={k * 0.05}>
              <li className="flex flex-col gap-1 border-t py-7">
                <h3 className="text-lg font-medium">{l.name}</h3>
                <p className="text-sm text-foreground/80">{l.addr}</p>
                <p className="text-sm text-muted-foreground">{l.hours}</p>
                <a href={`https://maps.google.com/?q=${encodeURIComponent(l.addr)}`} target="_blank" rel="noreferrer" className="group mt-3 inline-flex items-center gap-1.5 text-sm font-medium">
                  Get directions <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return setErr("Please enter a valid email address.");
    setErr("");
    setEmail("");
    toast.success("You're on the list — see you next season.");
  };
  return (
    <section className="bg-secondary py-20 text-secondary-foreground">
      <div className="container-x flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <h2 className="heading-tight text-[clamp(36px,4.5vw,56px)]">Get the seasonal drop</h2>
        <form onSubmit={submit} noValidate className="w-full max-w-md">
          <div className="flex gap-2 rounded-full border border-foreground/30 bg-background/60 p-1.5">
            <label htmlFor="nl-email" className="sr-only">Email address</label>
            <input id="nl-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" aria-invalid={!!err} className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-foreground/50" />
            <button className="rounded-full bg-primary px-6 py-2.5 label-caps text-primary-foreground transition-transform hover:-translate-y-0.5">Subscribe</button>
          </div>
          {err && <p role="alert" className="mt-2 pl-4 text-sm text-destructive">{err}</p>}
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  const cols = [
    { t: "Menu", l: ["Salads", "Warm Bowls", "Sides", "Catering"] },
    { t: "Company", l: ["Our Mission", "Careers", "Press", "Contact"] },
  ];
  return (
    <footer className="bg-primary pt-20 pb-10 text-primary-foreground">
      <div className="container-x">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm opacity-80">Fresh salads and warm bowls, made with the seasons.</p>
          </div>
          {cols.map((c) => (
            <div key={c.t}>
              <h3 className="label-caps opacity-70">{c.t}</h3>
              <ul className="mt-4 space-y-2 text-sm">{c.l.map((x) => <li key={x}><a href="#" className="hover:opacity-70">{x}</a></li>)}</ul>
            </div>
          ))}
          <div>
            <h3 className="label-caps opacity-70">Follow us</h3>
            <div className="mt-4 flex gap-3">
              {[Instagram, Facebook, Twitter].map((I, k) => (
                <a key={k} href="#" aria-label={["Instagram", "Facebook", "Twitter"][k]} className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/30 transition-colors hover:bg-primary-foreground/10">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-primary-foreground/20 pt-6 text-xs opacity-70 sm:flex-row">
          <p>© {new Date().getFullYear()} Leafwise. All rights reserved.</p>
          <div className="flex gap-6"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Accessibility</a></div>
        </div>
      </div>
    </footer>
  );
}
