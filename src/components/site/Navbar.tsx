import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Reveal";

const links = [
  { href: "#menu", label: "Our Menu" },
  { href: "#mission", label: "Our Mission" },
  { href: "#locations", label: "Locations" },
];

export function Navbar({ cartCount }: { cartCount: number }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "bg-background/85 text-foreground backdrop-blur-md shadow-[0_1px_0_var(--color-border)]" : "text-primary-foreground"
      }`}
    >
      <nav className="container-x grid h-16 grid-cols-[1fr_auto_1fr] items-center" aria-label="Main">
        <ul className="hidden gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="label-caps opacity-90 transition-opacity hover:opacity-100">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        <a href="#top" aria-label="Leafwise home" className={solid ? "text-primary" : ""}>
          <Logo />
        </a>
        <div className="flex items-center justify-end gap-6">
          <a href="#" className="label-caps hidden md:inline">Sign in</a>
          <a
            href="#menu"
            className="relative inline-flex items-center rounded-full bg-primary px-4 py-1.5 label-caps text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Order
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-secondary px-1 text-[10px] font-semibold text-secondary-foreground">
                {cartCount}
              </span>
            )}
          </a>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-16 flex flex-col justify-between bg-background px-5 pb-10 pt-10 md:hidden"
          >
            <ul className="space-y-6">
              {[...links, { href: "#", label: "Sign in" }].map((l, i) => (
                <motion.li key={l.label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }}>
                  <a href={l.href} onClick={() => setOpen(false)} className="heading-tight text-5xl">
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <a href="#menu" onClick={() => setOpen(false)} className="rounded-full bg-primary py-4 text-center label-caps text-primary-foreground">
              Order now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
