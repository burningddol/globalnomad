"use client";

import * as React from "react";
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";
import { MoreVertical } from "lucide-react";
import { cn } from "@/commons/utils/cn";

/* ── Content ─────────────────────────────────── */
function KebabContent({
  className,
  sideOffset = 4,
  align = "end",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        sideOffset={sideOffset}
        align={align}
        className={cn(
          "z-50 min-w-[120px] overflow-hidden rounded-lg bg-white  border-1  ",
          "data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95",
          "data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          className,
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

/* ── Item ─────────────────────────────────────── */
function KebabItem({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item>) {
  return (
    <DropdownMenuPrimitive.Item
      className={cn(
        "cursor-pointer px-4 py-[14px] text-[16px] font-medium text-gray-950",
        "flex items-center justify-center outline-none select-none",
        "focus:bg-gray-50",
        className,
      )}
      {...props}
    />
  );
}

type ContentProps = React.ComponentProps<typeof DropdownMenuPrimitive.Content>;

type KebabProps = React.ComponentProps<typeof DropdownMenuPrimitive.Root> & {
  side?: ContentProps["side"];
  sideOffset?: number;
  align?: ContentProps["align"];
  alignOffset?: number;
};

/* ── Root ─────────────────────────────────────── */
function Kebab({
  children,
  side = "bottom",
  sideOffset = 4,
  align = "end",
  alignOffset = 0,
  ...props
}: KebabProps) {
  return (
    <DropdownMenuPrimitive.Root {...props}>
      <DropdownMenuPrimitive.Trigger asChild>
        <button
          type="button"
          aria-label="더보기"
          className="flex items-center justify-center rounded-full p-1 hover:bg-gray-100"
        >
          <MoreVertical className="size-6" />
        </button>
      </DropdownMenuPrimitive.Trigger>
      <KebabContent
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
      >
        {children}
      </KebabContent>
    </DropdownMenuPrimitive.Root>
  );
}

Kebab.Item = KebabItem;

export { Kebab };
