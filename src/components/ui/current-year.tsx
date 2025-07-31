"use client";

import { useState, useEffect } from "react";

export const CurrentYear: React.FC = () => {
  const [year, setYear] = useState<string>("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return <>{year}</>;
};
