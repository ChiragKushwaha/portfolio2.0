"use client";
import React, { useState } from "react";
import SwitchingOn from "./switching-on/page";
import Desktop from "./desktop/page";

export default function Home() {
  const [loading, setLoading] = useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);
  if (loading) {
    return <SwitchingOn />;
  }
  return <Desktop />;
}
