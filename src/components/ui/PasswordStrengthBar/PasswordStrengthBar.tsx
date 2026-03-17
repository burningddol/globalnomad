"use client";

import { cn } from "@/commons/utils/cn";

interface PasswordStrengthBarProps {
  score: number;
}

export const PasswordStrengthBar = ({ score }: PasswordStrengthBarProps) => {
  const levels = [1, 2, 3, 4];

  const getLevelColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-[#BBDDFF]/40";
      case 2:
        return "bg-[#BBDDFF]/70";
      case 3:
        return "bg-[#BBDDFF]";
      case 4:
        return "bg-[#88BBFF]";
      default:
        return "bg-muted";
    }
  };

  return (
    <div className="mt-2 flex flex-col gap-1.5 w-full">
      <div className="grid grid-cols-4 gap-1.5">
        {levels.map((level) => (
          <div
            key={level}
            className={cn(
              "h-1.5 rounded-full transition-all duration-500 ease-out",
              score >= level ? getLevelColor(level) : "bg-muted",
            )}
          />
        ))}
      </div>
    </div>
  );
};
