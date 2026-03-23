"use client";

import { DayPicker } from "react-day-picker";
import { cn } from "@/commons/utils/cn";

interface DatePickerSectionProps {
  scheduleMap: Record<string, unknown[]>;
  selectedDate: Date | undefined;
  toDateStr: (d: Date) => string;
  onDayClick: (day: Date) => void;
}

export function DatePickerSection({
  scheduleMap,
  selectedDate,
  toDateStr,
  onDayClick,
}: DatePickerSectionProps) {
  return (
    <DayPicker
      mode="single"
      selected={selectedDate}
      onDayClick={onDayClick}
      disabled={(day) => !scheduleMap[toDateStr(day)]}
      showOutsideDays
      classNames={{
        root: "w-full h-full flex flex-col relative",
        months: "flex-1 flex flex-col",
        month: "flex-1 flex flex-col",
        month_caption: "flex items-center h-8 mb-1 flex-shrink-0",
        caption_label: "text-sm font-semibold text-gray-950",
        nav: "absolute right-0 top-0 h-8 flex items-center gap-0.5",
        button_previous:
          "p-1 rounded hover:bg-gray-100 text-gray-400 disabled:opacity-30 disabled:cursor-not-allowed",
        button_next:
          "p-1 rounded hover:bg-gray-100 text-gray-400 disabled:opacity-30 disabled:cursor-not-allowed",
        month_grid: "w-full flex-1 border-collapse",
        weekdays: "flex flex-shrink-0",
        weekday: "flex-1 text-center text-xs text-gray-400 py-1 select-none",
        week: "flex w-full mt-2",
        day: "flex-1 flex items-center justify-center",
      }}
      components={{
        DayButton: ({ day, modifiers, className: _cls, ...props }) => (
          <button
            {...props}
            className={cn(
              "w-9 h-9 rounded-full text-sm font-medium transition-colors select-none",
              modifiers.selected
                ? "bg-[#3D9EF2] text-white hover:bg-[#3D9EF2]"
                : modifiers.disabled || modifiers.outside
                  ? "text-gray-300 cursor-default pointer-events-none"
                  : "text-gray-800 hover:bg-gray-100 cursor-pointer",
              modifiers.today && !modifiers.selected && "font-bold",
            )}
          />
        ),
      }}
    />
  );
}
