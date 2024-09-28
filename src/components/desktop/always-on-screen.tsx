"use client";
import React from "react";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const AlwaysOnScreen = () => {
  React.useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      const day = days[date.getDay()];
      const month = months[date.getMonth()];
      const dateNum = date.getDate();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      const ampm = hours >= 12 ? "PM" : "AM";
      const time = `${hours}:${minutes}`;
      const formattedDate = `${day}, ${month} ${dateNum}`;
      const T = document.getElementById("T")!;
      T.innerText = time;
      const dateElement = document.getElementById("date")!;
      dateElement.innerText = formattedDate;
    }, 1000);
    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black z-50 flex items-start justify-center w-screen h-screen">
      <span className="text-white text-shadow block text-center p-32 space-y-4">
        <span className="text-8xl block mt-5 font-light" id="T"></span>
        <span
          className="text-x block text-gray-200 font-extralight"
          id="date"
        ></span>
      </span>
    </div>
  );
};

export default AlwaysOnScreen;
