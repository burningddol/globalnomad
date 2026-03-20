import { Activity } from "@/types/activities";

export const getActivityDetail = async (
  activityId: number,
): Promise<Activity> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/activities/${activityId}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch activity detail");
  }

  return res.json();
};
