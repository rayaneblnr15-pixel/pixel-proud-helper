import { useEffect, useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { addOns, type MenuItem } from "@/data/menu";

export function OrderDrawer({ item, onClose, onAdd }: { item: MenuItem | null; onClose: () => void; onAdd: (qty: number) => void }) {
  const [qty, setQty] = useState(1);
  const [extras, setExtras] = useState<string[]>([]);
  useEffect(() => {
    setQty(1);
    setExtras([]);
  }, [item]);

  const total = item ? (item.price + addOns.filter((a) => extras.includes(a.id)).reduce((s, a) => s + a.price, 0)) * qty : 0;

  return (
    <Sheet open={!!item} onOpenChange={(o) => !o && onClose()}>
      <SheetContent className="flex w-full flex-col gap-0 overflow-y-auto bg-background p-0 sm:max-w-md">
        {item && (
          <>
            <img src={item.image} alt={item.name} className="aspect-[4/3] w-full bg-beige object-cover" />
            <div className="flex flex-1 flex-col p-6">
              <SheetHeader className="p-0 text-left">
                <SheetTitle className="text-xl font-medium uppercase tracking-wide">{item.name}</SheetTitle>
                <SheetDescription className="text-sm text-foreground/75">{item.description}</SheetDescription>
              </SheetHeader>
              <div className="mt-6 flex items-center justify-between">
                <span className="label-caps">Quantity</span>
                <div className="flex items-center gap-4 rounded-full border px-2 py-1">
                  <button aria-label="Decrease quantity" onClick={() => setQty(Math.max(1, qty - 1))} className="p-1"><Minus className="h-4 w-4" /></button>
                  <span className="w-4 text-center tabular-nums">{qty}</span>
                  <button aria-label="Increase quantity" onClick={() => setQty(qty + 1)} className="p-1"><Plus className="h-4 w-4" /></button>
                </div>
              </div>
              <fieldset className="mt-8">
                <legend className="label-caps mb-3">Add-ons</legend>
                <div className="space-y-3">
                  {addOns.map((a) => (
                    <label key={a.id} className="flex cursor-pointer items-center justify-between rounded-xl border px-4 py-3 text-sm">
                      <span className="flex items-center gap-3">
                        <Checkbox checked={extras.includes(a.id)} onCheckedChange={(c) => setExtras((p) => (c ? [...p, a.id] : p.filter((x) => x !== a.id)))} />
                        {a.label}
                      </span>
                      <span className="text-muted-foreground">{a.price ? `+$${a.price.toFixed(2)}` : "Free"}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <button
                onClick={() => onAdd(qty)}
                className="mt-auto flex w-full items-center justify-between rounded-full bg-primary px-6 py-4 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
                style={{ marginTop: "2rem" }}
              >
                <span>Add to order</span>
                <span className="tabular-nums">${total.toFixed(2)}</span>
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
