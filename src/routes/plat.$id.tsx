import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check, Coffee, Droplets, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { breakfastIncluded, formatPrice, menu } from "@/data/menu";
import { Logo } from "@/components/site/Reveal";

export const Route = createFileRoute("/plat/$id")({
  loader: ({ params }) => {
    const item = Object.values(menu).flat().find((meal) => meal.id === params.id);
    if (!item) throw notFound();
    return { item, isBreakfast: menu["Petits-déjeuners"].some((meal) => meal.id === item.id) };
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.item.name} — Ôcrepino Salé` : "Plat introuvable — Ôcrepino";
    const description = loaderData ? `${loaderData.item.name}, ${formatPrice(loaderData.item.price)}. ${loaderData.item.description || "Découvrez ce plat chez Ôcrepino à Salé."}` : "Retrouvez la carte d’Ôcrepino à Salé.";
    return { meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] };
  },
  component: MealDetail,
});

function MealDetail() {
  const { item, isBreakfast } = Route.useLoaderData();
  const ingredients = item.description ? item.description.replace(/\.$/, "").split(/,\s*| : /).filter(Boolean) : [];
  const related = Object.values(menu).flat().filter((meal) => meal.id !== item.id).slice(0, 3);
  return (
    <div className="min-h-screen bg-background">
      <header className="container-x flex h-20 items-center justify-between border-b">
        <Button asChild variant="ghost"><Link to="/" hash="menu"><ArrowLeft /> La carte</Link></Button>
        <Link to="/" aria-label="Ôcrepino accueil"><Logo /></Link>
      </header>
      <main className="container-x pb-16 pt-8 md:pt-12">
        <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <div className="relative">
            <img src={item.image} alt={item.name} className="aspect-square w-full rounded-lg object-cover" />
            <p className="absolute bottom-4 left-4 rounded-md bg-background/85 px-3 py-2 text-xs text-foreground backdrop-blur">Visuel d’illustration</p>
          </div>
          <div className="py-2 lg:py-6">
            <p className="label-caps text-primary">{isBreakfast ? "Petit-déjeuner & brunch" : "À la carte"} · Ôcrepino</p>
            <h1 className="mt-5 break-words text-4xl font-medium leading-tight md:text-5xl">{item.name}</h1>
            {item.description && <p className="mt-5 text-base leading-relaxed text-muted-foreground">{item.description}</p>}
            <div className="mt-8 flex flex-wrap items-end justify-between gap-5 border-b pb-8">
              <div><p className="text-sm text-muted-foreground">Prix du plat</p><p className="mt-1 text-3xl font-semibold text-primary">{formatPrice(item.price)}</p></div>
              <Button asChild size="lg" className="h-12"><a href="https://glovoapp.com/" target="_blank" rel="noreferrer">Commander sur Glovo <ArrowUpRight /></a></Button>
            </div>
            {isBreakfast && <div className="mt-7"><h2 className="text-lg font-medium">Inclus avec votre petit-déjeuner</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{breakfastIncluded}</p><div className="mt-5 flex flex-wrap gap-5 text-sm"><span className="inline-flex items-center gap-2"><Coffee className="h-5 w-5 text-primary" /> Boisson chaude</span><span className="inline-flex items-center gap-2"><Droplets className="h-5 w-5 text-primary" /> Eau · 33 cl</span></div></div>}
          </div>
        </div>
        {ingredients.length > 0 && <section className="mt-12 border-t pt-8"><div className="flex items-center justify-between gap-4"><h2 className="text-2xl font-medium">Composition</h2><span className="text-sm text-muted-foreground">{ingredients.length} éléments</span></div><ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{ingredients.map((ingredient, index) => <li key={`${ingredient}-${index}`} className="relative flex min-h-32 flex-col items-center justify-center gap-3 rounded-lg bg-card px-4 py-5 text-center"><Check className="absolute left-3 top-3 h-4 w-4 text-primary" /><Utensils className="h-7 w-7 text-primary" /><span className="text-sm leading-snug first-letter:uppercase">{ingredient}</span></li>)}</ul></section>}
        <section className="mt-12 border-t pt-8"><h2 className="text-2xl font-medium">À découvrir aussi</h2><div className="mt-5 grid gap-5 sm:grid-cols-3">{related.map((meal) => <Link key={meal.id} to="/plat/$id" params={{ id: meal.id }} className="group"><img src={meal.image} alt={meal.name} loading="lazy" className="aspect-[3/2] w-full rounded-lg object-cover" /><div className="mt-3 flex items-center justify-between gap-3"><h3 className="font-medium group-hover:text-primary">{meal.name}</h3><span className="shrink-0 text-primary">{formatPrice(meal.price)}</span></div></Link>)}</div></section>
      </main>
    </div>
  );
}