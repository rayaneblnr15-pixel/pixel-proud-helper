import breakfast from "@/assets/ocrepino-breakfast.jpg";
import moroccan from "@/assets/ocrepino-moroccan.jpg";

export type Category = "Petits-déjeuners" | "Suggestions";
export interface MenuItem { id: string; name: string; description: string; image: string; price: number; popular?: boolean; glutenFree?: boolean; containsGluten?: boolean; }
export const categories: Category[] = ["Petits-déjeuners", "Suggestions"];
export const breakfastIncluded = "Tous nos petits-déjeuners et brunchs sont servis avec une boisson chaude au choix (hors spécialités) et une bouteille d’eau de 33 cl.";
export const menu: Record<Category, MenuItem[]> = {
  "Petits-déjeuners": [
    { id: "expresse", name: "L’Expresse", price: 28, image: breakfast, description: "2 mini viennoiseries, toast grillé, jben, miel, rayb maison, jus d’orange." },
    { id: "amsterdam", name: "Amsterdam", price: 38, image: breakfast, description: "Toast à l’œuf à la florentine, croque-madame, rayb maison, jus d’orange." },
    { id: "marocain", name: "Le Marocain", price: 46, image: moroccan, description: "Deux œufs au khlii, assortiment marocain : rghifa, harcha, baghrir, jben, miel, amlou, rayb maison, jus d’orange." },
    { id: "americain", name: "L’Américain", price: 48, image: breakfast, description: "Deux œufs au plat, merguez de bœuf, potatoes, légumes sautés, coleslaw, pancake sucré, rayb maison, jus d’orange." },
    { id: "ocrepino", name: "Ôcrepino", price: 54, image: breakfast, description: "Poêle frittata, miniature salée, waffle aux fruits de saison, rayb maison, jus d’orange." },
    { id: "healthy", name: "Healthy", price: 52, image: breakfast, description: "Pancake sans gluten, œufs mollets à la mimosa, bol d’avoine, millet, fruits frais et secs, rayb maison, jus d’orange." },
    { id: "kids", name: "Kids", price: 32, image: breakfast, description: "Un bol de muesli aux fruits secs, salade de fruits, pancake Nutella, chocolat chaud." },
  ],
  Suggestions: [
    { id: "viennoiserie", name: "Viennoiserie", price: 8, image: breakfast, description: "" },
    { id: "oeufs", name: "Deux œufs au choix", price: 12, image: breakfast, description: "" },
    { id: "assortiment", name: "Assortiment marocain", price: 14, image: moroccan, description: "3 pièces." },
    { id: "croque-mr", name: "Croque-monsieur", price: 18, image: breakfast, description: "" },
    { id: "tajine", name: "Tajine au khlii / Omelette", price: 20, image: moroccan, description: "Tajine au khlii ou omelette fromage-charcuterie / champignon." },
    { id: "croque-mme", name: "Croque-madame", price: 22, image: breakfast, description: "" },
  ],
};
export const addOns: { id: string; label: string; price: number }[] = [];
export const formatPrice = (price: number) => `${price.toLocaleString("fr-MA")} DH`;
