"use client";

import { cn } from "@/lib/utils";
import { CATEGORIES, COLORS, FILTER_ALL } from "./constants";
import type { CategoryId } from "./puntos_de_interes";

export type CategoryFilterId = CategoryId | typeof FILTER_ALL;

interface CategoryFiltersProps {
  value: CategoryFilterId;
  onChange: (id: CategoryFilterId) => void;
  className?: string;
}

export function CategoryFilters({
  value,
  onChange,
  className,
}: CategoryFiltersProps) {
  return (
    <div
      className={cn("flex flex-wrap justify-center gap-2", className)}
      role="group"
      aria-label="Filtrar por categoría"
    >
      <button
        type="button"
        onClick={() => onChange(FILTER_ALL)}
        className={cn(
          "rounded-full border px-5 py-2.5 text-sm font-semibold transition-all min-h-[44px] flex items-center",
          value === FILTER_ALL
            ? "border-[var(--brand-orange)] bg-[var(--brand-orange)]/10 text-[var(--brand-orange)]"
            : "border-[#2a3f52] bg-[#152030]/60 text-[var(--brand-gray-soft)] hover:opacity-90"
        )}
      >
        Todos
      </button>
      {(Object.keys(CATEGORIES) as CategoryId[]).map((id) => {
        const cat = CATEGORIES[id];
        const isActive = value === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => onChange(id)}
            className={cn(
              "rounded-full border px-5 py-2.5 text-sm font-semibold transition-all min-h-[44px] flex items-center gap-2",
              isActive
                ? "text-white"
                : "border-[#2a3f52] bg-[#152030]/60 text-[var(--brand-gray-soft)] hover:opacity-90"
            )}
            style={
              isActive
                ? {
                    borderColor: cat.color,
                    backgroundColor: `${cat.color}20`,
                    color: cat.color,
                  }
                : undefined
            }
          >
            <cat.Icon className="size-4 shrink-0" aria-hidden />
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
