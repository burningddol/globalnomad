import { useEffect, useMemo } from "react";
import { FieldValues, Path, PathValue, UseFormSetValue } from "react-hook-form";
import zxcvbn from "zxcvbn";

export function usePasswordStrength<T extends FieldValues>(
  passwordValue: string | undefined,
  setValue: UseFormSetValue<T>,
) {
  const passwordScore = useMemo(() => {
    return passwordValue ? zxcvbn(passwordValue).score : 0;
  }, [passwordValue]);

  useEffect(() => {
    const scorePath = "passwordScore" as Path<T>;
    setValue(scorePath, passwordScore as PathValue<T, Path<T>>, {
      shouldValidate: true,
    });
  }, [passwordScore, setValue]);

  return { passwordScore };
}
