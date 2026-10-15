import { describe, expect, it } from "vitest";
import { menu, formatPrice } from "@/data/menu";
describe("Supplied Ôcrepino prices", () => {
 it.each([['expresse',28],['amsterdam',38],['marocain',46],['americain',48],['ocrepino',54],['healthy',52],['kids',32],['viennoiserie',8],['oeufs',12],['assortiment',14],['croque-mr',18],['tajine',20],['croque-mme',22]])('%s costs %i DH', (id,price) => {expect(Object.values(menu).flat().find(i=>i.id===id)?.price).toBe(price);});
 it('uses dirhams',()=>{expect(formatPrice(28)).toBe('28 DH');});
});
