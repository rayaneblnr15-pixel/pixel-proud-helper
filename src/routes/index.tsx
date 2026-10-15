import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import { MenuTabs } from "@/components/site/MenuTabs";
import { Mission, Locations, Footer } from "@/components/site/Sections";
export const Route = createFileRoute("/")({
 head: () => ({meta:[
 {title:"Ôcrepino — Petit-déjeuner & brunch à Salé"},
 {name:"description",content:"Découvrez les petits-déjeuners et brunchs d’Ôcrepino à Salé, dès 28 DH. Av. Mohamed Taib Al Alaoui. Téléphone : 08 08 67 52 22."},
 {property:"og:title",content:"Ôcrepino — Petit-déjeuner & brunch à Salé"},
 {property:"og:description",content:"La carte Ôcrepino : petits-déjeuners, brunchs et suggestions à Salé. Retrouvez nos prix et nos coordonnées."},
 {property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}
 ]}),component:Index,
});
function Index(){return <><Navbar/><main><HeroCarousel/><MenuTabs/><Mission/><Locations/></main><Footer/></>;}
