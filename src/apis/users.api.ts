import axios from "./axios";
import { UserMeValues } from "@/app/mypage/user-info/_libs/userInfo.schema";

export const postUserMeImage = async (image: File) => {
  const formData = new FormData();
  formData.append("image", image);

  return await axios.post("/user/me/images", formData);
};

export const patchUserMe = async (
  data: Omit<UserMeValues, "email" | "passwordConfirmation" | "passwordScore">,
) => {
  return await axios.patch("/users/me", data);
};
