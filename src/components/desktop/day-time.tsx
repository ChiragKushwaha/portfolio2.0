"use client";
import { useState, useEffect } from "react";

const DayTime = () => {
  const [time, setTime] = useState<string>("");
  // Mon 31 May 05:30 AM
  function getFormattedDate(date: Date) {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const dateNum = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    return `${day} ${dateNum} ${month} ${hours}:${minutes} ${ampm}`;
  }
  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setTime(getFormattedDate(date));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="h-full w-auto flex items-center justify-center text-white text-sm">
      {time}
    </div>
  );
};

export default DayTime;
