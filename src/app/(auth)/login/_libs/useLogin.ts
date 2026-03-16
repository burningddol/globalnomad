import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useForm } from "react-hook-form";

export const signInSchema = z.object({
  email: z
    .string()
    .nonempty("이메일을 입력해주세요.")
    .email("잘못된 이메일 형식입니다."),
  password: z
    .string()
    .nonempty("비밀번호를 입력해주세요.")
    .min(8, "비밀번호를 8자 이상 입력해주세요."),
});

export type signInValues = z.infer<typeof signInSchema>;

export function useLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, touchedFields },
  } = useForm({
    resolver: zodResolver(signInSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: signInValues) => {
    console.log(data);
  };

  return {
    register,
    errors,
    isValid,
    touchedFields,
    onFormSubmit: handleSubmit(onSubmit),
  };
}
