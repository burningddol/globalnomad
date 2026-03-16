"use client";
import { cn } from "@/commons/utils/cn";
import Image from "next/image";
import { ReactNode } from "react";
import { Button } from "@/components/ui/Buttons/Button";

export interface DialogOptions {
  content: ReactNode;
  type: "confirm" | "alert";
  onConfirm?: () => void;
}

interface DialogRendererProps {
  options: DialogOptions;
  onClose: () => void;
  onConfirm: () => void;
}

type DialogConfig = {
  containerClass: string;
  icon?: ReactNode;
  renderActions: (onClose: () => void, onConfirm: () => void) => ReactNode;
};

const DIALOG_CONFIG: Record<DialogOptions["type"], DialogConfig> = {
  confirm: {
    containerClass: "md:px-14 px-10",
    icon: (
      <Image
        src="/icons/warning.svg"
        alt="warning"
        width={88}
        height={88}
        className="w-[49px] h-[49px] md:w-[88px] md:h-[88px]"
      />
    ),
    renderActions: (onClose, onConfirm) => (
      <div className="flex w-full gap-3">
        <Button
          autoFocus
          variant="secondary"
          size="sm"
          onClick={onClose}
          className="flex-1"
        >
          아니오
        </Button>
        <Button size="sm" onClick={onConfirm} className="flex-1">
          네
        </Button>
      </div>
    ),
  },
  alert: {
    containerClass: "md:px-21 px-16",
    renderActions: (onClose) => (
      <Button autoFocus size="sm" onClick={onClose}>
        확인
      </Button>
    ),
  },
};

export function DialogRenderer({
  options,
  onClose,
  onConfirm,
}: DialogRendererProps) {
  const config = DIALOG_CONFIG[options.type];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
    >
      <div
        className={cn(
          "flex w-[320px] md:w-[400px] flex-col items-center rounded-4xl bg-white py-6 md:py-8",
          config.containerClass,
        )}
      >
        {config.icon}
        <p className="whitespace-pre-line text-center text-base font-bold text-gray-800 mb-3 md:mb-5">
          {options.content}
        </p>
        {config.renderActions(onClose, onConfirm)}
      </div>
    </div>
  );
}
