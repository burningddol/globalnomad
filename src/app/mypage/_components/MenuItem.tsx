"use client";

import { memo } from "react";
import Link from "next/link";
import { MypageButton } from "@/components/ui/Buttons/MypageButton";
import {
  CircleUserRound,
  MessageSquareText,
  Settings,
  CalendarDays,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/commons/utils/cn";

const ICONS: Record<string, LucideIcon> = {
  user: CircleUserRound,
  reservation: MessageSquareText,
  activity: Settings,
  status: CalendarDays,
};

export const MenuItem = memo(
  ({
    href,
    label,
    iconName,
    isActive,
  }: {
    href: string;
    label: string;
    iconName: string;
    isActive: boolean;
  }) => {
    const Icon = ICONS[iconName];
    return (
      <li className="w-full w-[299px] h-[41px] mb-[17px] md:w-[150px] md:h-[54px] hover:rounded-xl md:mb-0 xl:w-full hover:bg-sky-50 md:hover:rounded-xl">
        <MypageButton active={isActive} asChild>
          <Link href={href}>
            {Icon && (
              <Icon
                size={20}
                className={cn(
                  "w-[24px] h-[24px] px-[3px] py-[3px] md:w-[20px] md:h-[20px] md:px-[1.5px] md:py-[1.5px] xl:w-[24px] xl:h-[24px] xl:px-[2px] xl:py-[2px]",
                  "transition-colors",
                  isActive ? "text-blue-500" : "text-gray-600",
                )}
              />
            )}
            <span>{label}</span>
          </Link>
        </MypageButton>
      </li>
    );
  },
);
MenuItem.displayName = "MenuItem";
