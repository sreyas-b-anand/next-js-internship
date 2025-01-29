"use client"
import { useFetch } from "@/hooks/useFetch";
const TimeCard = () => {
  const { time, error } = useFetch();
  return (
    <>
      {time ? (
        <div className="flex items-center justify-center gap-3 flex-wrap w-fit p-2">
          <p className="font-semibold">{time}</p>
          <p className="font-semibold">London</p>
        </div>
      ) : (
        <p>{error}</p>
      )}
    </>
  );
};

export default TimeCard;
