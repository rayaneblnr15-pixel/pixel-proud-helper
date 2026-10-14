import bowl1 from "@/assets/bowl-1.jpg";
import bowl2 from "@/assets/bowl-2.jpg";
import bowl3 from "@/assets/bowl-3.jpg";
import side1 from "@/assets/side-1.jpg";

export type Category = "Salads" | "Warm Bowls" | "Sides";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  image: string;
  popular?: boolean;
  glutenFree?: boolean;
  containsGluten?: boolean;
  price: number;
}

export const categories: Category[] = ["Salads", "Warm Bowls", "Sides"];

export const menu: Record<Category, MenuItem[]> = {
  Salads: [
    { id: "kale-caesar", name: "Kale Caesar", popular: true, price: 13.5, image: bowl1,
      description: "Roasted chicken, tomatoes, parmesan crisps, shaved parmesan, shredded kale, chopped romaine, lime squeeze, caesar dressing" },
    { id: "guac-greens", name: "Guacamole Greens", popular: true, price: 14.25, image: bowl2,
      description: "Roasted chicken, avocado, tomatoes, red onions, shredded cabbage, tortilla chips, spring mix, chopped romaine, lime squeeze, lime cilantro jalapeño vinaigrette" },
    { id: "buffalo-bowl", name: "Buffalo Chicken Bowl", containsGluten: true, price: 14.5, image: bowl1,
      description: "Blackened chicken, pickled carrots and celery, tomatoes, cilantro, blue cheese, za'atar breadcrumbs, shredded kale, chopped romaine, hot sauce, caesar dressing" },
  ],
  "Warm Bowls": [
    { id: "harvest-bowl", name: "Harvest Bowl", popular: true, glutenFree: true, price: 15, image: bowl3,
      description: "Blackened chicken, roasted sweet potatoes, warm wild rice, apples, goat cheese, toasted almonds, shredded kale, balsamic vinaigrette" },
    { id: "miso-glazed", name: "Miso Glazed Salmon", glutenFree: true, price: 17.25, image: bowl3,
      description: "Miso glazed salmon, warm quinoa, roasted broccoli, cucumber, pickled onions, sesame seeds, spicy cashew dressing" },
    { id: "chickpea-tagine", name: "Chickpea Tagine", price: 13.75, containsGluten: true, image: bowl3,
      description: "Spiced roasted chickpeas, warm farro, roasted squash, red onion, herbs, feta, toasted pita crumble, lemon tahini" },
  ],
  Sides: [
    { id: "rosemary-potatoes", name: "Rosemary Potatoes", popular: true, glutenFree: true, price: 5.5, image: side1,
      description: "Crispy roasted potatoes, fresh rosemary, flaky sea salt, garlic aioli for dipping" },
    { id: "sweet-potato", name: "Roasted Sweet Potatoes", glutenFree: true, price: 5, image: side1,
      description: "Caramelized sweet potato cubes, smoked paprika, herbs, lime crema" },
    { id: "focaccia", name: "Herb Focaccia", containsGluten: true, price: 4, image: side1,
      description: "House-baked focaccia, olive oil, rosemary, sea salt, whipped herb butter" },
  ],
};

export const addOns = [
  { id: "avocado", label: "Extra avocado", price: 2 },
  { id: "chicken", label: "Double chicken", price: 3.5 },
  { id: "egg", label: "Jammy egg", price: 1.5 },
  { id: "dressing", label: "Dressing on the side", price: 0 },
];
