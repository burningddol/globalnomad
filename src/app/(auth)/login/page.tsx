"use client";

import { useLogin } from "./_libs/useLogin";
import { Controller } from "react-hook-form";
import { Button } from "@/components/ui/Buttons/Button";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const { control, errors, isValid, onFormSubmit } = useLogin();

  return (
    <div>
      <div className="container">
        <Link href="/">auth 로고 이미지 추가 예정</Link>
        <form onSubmit={onFormSubmit}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <>
                <label htmlFor={field.name}>이메일</label>
                <input
                  {...field}
                  type="text"
                  id={field.name}
                  placeholder="이메일을 입력해주세요"
                />
                {errors.email?.message && (
                  <div className="active">{errors.email?.message}</div>
                )}
              </>
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <>
                <label htmlFor={field.name}>비밀번호</label>
                <input
                  {...field}
                  type="password"
                  id={field.name}
                  placeholder="8자 이상 입력해 주세요"
                />
                {errors.password?.message && (
                  <div className="active">{errors.password?.message}</div>
                )}
              </>
            )}
          />

          <Button type="submit" className={isValid ? "" : "disabled"}>
            로그인하기
          </Button>
        </form>
        <div className="kakao-signin">
          <p>SNS 계정으로 로그인하기</p>
          <Button variant="secondary" size="lg">
            <Image
              width={24}
              height={24}
              src="/icons/kakao.svg"
              alt="카카오 아이콘"
            />
            카카오 로그인하기
          </Button>
        </div>
        <div className="go-to-login">
          회원이 아니신가요?<Link href="/signup">회원가입하기</Link>
        </div>
      </div>
    </div>
  );
}
