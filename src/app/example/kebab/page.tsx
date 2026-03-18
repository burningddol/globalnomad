"use client";

import { Kebab } from "@/components/ui/Kebab";

export default function KebabPage() {
  return (
    <>
      <h2 className="mb-[40px]">케밥 메뉴</h2>

      <div className="flex items-center justify-between rounded-2xl border border-gray-200 p-4">
        <span className="text-[16px] font-medium text-[#1F1F22]">
          내 체험 카드 제목
        </span>
        <Kebab side="left" align="start" sideOffset={1}>
          <Kebab.Item onClick={() => alert("수정하기 클릭")}>
            수정하기
          </Kebab.Item>
          <Kebab.Item onClick={() => alert("삭제하기 클릭")}>
            삭제하기
          </Kebab.Item>
        </Kebab>
      </div>
    </>
  );
}
