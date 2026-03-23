"use client";

import { Button } from "@/components/ui/Buttons/Button";
import type { AvailableSchedule } from "@/types/activities";
import { useReservation } from "./lib/useReservation";
import { DatePickerSection } from "./ui/DatePickerSection";
import { TimeSlotSection } from "./ui/TimeSlotSection";
import { HeadcountSection } from "./ui/HeadcountSection";

interface ReservationCalendarProps {
  availableSchedules: AvailableSchedule[];
  price: number;
}

export function ReservationCalendar({
  availableSchedules,
  price,
}: ReservationCalendarProps) {
  const {
    selectedDate,
    selectedSlot,
    headcount,
    timeSlots,
    scheduleMap,
    toDateStr,
    handleDayClick,
    setSelectedSlot,
    setHeadcount,
    totalPrice,
  } = useReservation(availableSchedules, price);

  return (
    <div className="border border-gray-300 rounded-xl w-full overflow-hidden">
      {/* 가격 헤더 */}
      <div className="px-8 pt-6">
        <span className="text-xl font-bold text-gray-950">
          ₩{price.toLocaleString()}
        </span>
        <span className="text-sm text-gray-500"> / 인</span>
      </div>

      <div className="px-8 py-4 flex flex-col gap-0">
        {/* 날짜 */}
        <div className="mb-8">
          <p className="text-base font-bold text-gray-950">날짜</p>
          <DatePickerSection
            scheduleMap={scheduleMap}
            selectedDate={selectedDate}
            toDateStr={toDateStr}
            onDayClick={handleDayClick}
          />
        </div>

        {/* 예약 가능한 시간 */}
        <TimeSlotSection
          selectedDate={selectedDate}
          timeSlots={timeSlots}
          selectedSlot={selectedSlot}
          onSelectSlot={setSelectedSlot}
        />

        {/* 참여 인원 수 */}
        <div className="flex justify-between pt-4 mt-2">
          <p className="text-base font-bold text-gray-950 mb-3">참여 인원 수</p>
          <HeadcountSection
            headcount={headcount}
            onDecrement={() => setHeadcount((n) => Math.max(1, n - 1))}
            onIncrement={() => setHeadcount((n) => n + 1)}
          />
        </div>
      </div>

      {/* 총 합계 + 예약하기 */}
      <div className="px-4 pb-6 pt-4 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-base font-bold text-gray-950">총 합계</span>
          <span className="text-lg font-bold text-gray-950">
            ₩{totalPrice.toLocaleString()}
          </span>
        </div>
        <Button size="md" disabled={!selectedSlot}>
          예약하기
        </Button>
      </div>
    </div>
  );
}
