"use client";

import { Minus, Plus } from "lucide-react";

interface HeadcountSectionProps {
  headcount: number;
  onDecrement: () => void;
  onIncrement: () => void;
}

export function HeadcountSection({
  headcount,
  onDecrement,
  onIncrement,
}: HeadcountSectionProps) {
  return (
    <div className="flex items-center border border-gray-300 rounded w-fit">
      <button
        onClick={onDecrement}
        className="w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-50"
      >
        <Minus size={14} />
      </button>
      <span className="min-w-8 text-center text-base font-medium text-gray-950 px-1">
        {headcount}
      </span>
      <button
        onClick={onIncrement}
        className="w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-50"
      >
        <Plus size={14} />
      </button>
    </div>
  );
}
