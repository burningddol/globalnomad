"use client";

import { Button } from "@/components/ui/Buttons/Button";
import { cn } from "@/commons/utils/cn";
import type { SelectedSlot } from "../lib/useReservation";
import type { AvailableTime } from "@/types/activities";

interface TimeSlotSectionProps {
  selectedDate: Date | undefined;
  timeSlots: AvailableTime[];
  selectedSlot: SelectedSlot | null;
  onSelectSlot: (slot: SelectedSlot) => void;
}

export function TimeSlotSection({
  selectedDate,
  timeSlots,
  selectedSlot,
  onSelectSlot,
}: TimeSlotSectionProps) {
  return (
    <div className="">
      <p className="text-base font-bold text-gray-950 mb-3">예약 가능한 시간</p>
      {!selectedDate ? (
        <p className="text-sm text-gray-400 text-center py-4">
          날짜를 선택해주세요.
        </p>
      ) : timeSlots.length === 0 ? (
        <p className="text-sm text-gray-400 text-center py-4">
          예약 가능한 시간이 없습니다.
        </p>
      ) : (
        <div className="flex flex-col gap-2">
          {timeSlots.map((slot) => (
            <Button
              key={slot.id}
              variant="secondary"
              size="sm"
              onClick={() => onSelectSlot(slot)}
              className={cn(
                selectedSlot?.id === slot.id &&
                  "border-[#3D9EF2] text-[#3D9EF2]",
              )}
            >
              {slot.startTime}~{slot.endTime}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
