"use client";

import { Controller } from "react-hook-form";
import { useSignup } from "./_libs/useSignUp";
import { Checkbox } from "@/components/ui/Checkbox/Checkbox";
import { Button } from "@/components/ui/Buttons/Button";
import Link from "next/link";
import Image from "next/image";

export default function SignupPage() {
  const { control, errors, isValid, onFormSubmit } = useSignup();

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
            name="nickname"
            control={control}
            render={({ field }) => (
              <>
                <label htmlFor={field.name}>닉네임</label>
                <input
                  {...field}
                  type="text"
                  id={field.name}
                  placeholder="닉네임을 입력해주세요"
                />
                {errors.nickname?.message && (
                  <div className="active">{errors.nickname?.message}</div>
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

          <Controller
            name="passwordConfirmation"
            control={control}
            render={({ field }) => (
              <>
                <label htmlFor={field.name}>비밀번호 확인</label>
                <input
                  {...field}
                  type="password"
                  id={field.name}
                  placeholder="비밀번호를 한 번 더 입력해 주세요"
                />
                {errors.passwordConfirmation?.message && (
                  <div className="active">
                    {errors.passwordConfirmation?.message}
                  </div>
                )}
              </>
            )}
          />

          <Controller
            name="terms"
            control={control}
            render={({ field }) => (
              <>
                <Checkbox
                  id="terms"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  onBlur={field.onBlur}
                />
                <label htmlFor="terms">(필수) 이용약관 동의</label>
                <button type="button">보기</button>
                {errors.terms?.message && (
                  <div className="active">{errors.terms?.message}</div>
                )}
              </>
            )}
          />

          <Button type="submit" className={isValid ? "" : "disabled"}>
            회원가입하기
          </Button>
        </form>
        <div className="kakao-signup">
          <p>SNS 계정으로 회원가입하기</p>
          <Button variant="secondary" size="lg">
            <Image
              width={24}
              height={24}
              src="/icons/kakao.svg"
              alt="카카오 아이콘"
            />
            카카오 회원가입
          </Button>
        </div>
        <div className="go-to-login">
          회원이신가요?<Link href="/login">로그인하기</Link>
        </div>
      </div>
    </div>
  );
}
