"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import React, { useEffect, useState } from "react";

function ScheduleForm() {
  const [calLink, setCalLink] = useState<string | null>(null);

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_CAL_LINK) return;
    setCalLink(process.env.NEXT_PUBLIC_CAL_LINK);

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

  if (!calLink) return null;

  return (
    <Cal
      namespace={calLink.split("/")[1] || ""}
      calLink={calLink}
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view", theme: "light" }}
    />
  );
}

export default ScheduleForm;
