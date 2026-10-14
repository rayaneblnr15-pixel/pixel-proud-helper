import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import { MenuTabs } from "@/components/site/MenuTabs";
import { OrderDrawer } from "@/components/site/OrderDrawer";
import { AppPromo, Mission, Locations, Newsletter, Footer } from "@/components/site/Sections";
import type { MenuItem } from "@/data/menu";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Leafwise – Fresh Salads & Warm Bowls" },
      { name: "description", content: "Seasonal salads, warm bowls and fresh sides made from scratch with produce from local farms. Order pickup or delivery." },
      { property: "og:title", content: "Leafwise – Fresh Salads & Warm Bowls" },
      { property: "og:description", content: "Seasonal salads, warm bowls and fresh sides made from scratch with local produce." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const [count, setCount] = useState(0);
  return (
    <>
      <Navbar cartCount={count} />
      <main>
        <HeroCarousel />
        <MenuTabs onOrder={setSelected} />
        <AppPromo />
        <Mission />
        <Locations />
        <Newsletter />
      </main>
      <Footer />
      <OrderDrawer
        item={selected}
        onClose={() => setSelected(null)}
        onAdd={(q) => {
          setCount((c) => c + q);
          toast.success(`${selected?.name} added to your order`);
          setSelected(null);
        }}
      />
      <Toaster />
    </>
  );
}
