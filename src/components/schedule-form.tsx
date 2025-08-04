"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import React, { useEffect } from "react";

function ScheduleForm() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#fb186b" },
          dark: { "cal-brand": "#fb186b" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <Cal
      namespace={process.env.NEXT_PUBLIC_CAL_LINK?.split("/")[1] || ""}
      calLink={process.env.NEXT_PUBLIC_CAL_LINK || ""}
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view", theme: "light" }}
    />
  );
}

export default ScheduleForm;
