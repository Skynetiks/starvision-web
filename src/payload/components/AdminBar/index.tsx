"use client";

import type {
  PayloadAdminBarProps,
  PayloadMeUser,
} from "@payloadcms/admin-bar";

import { cn } from "@/payload/utilities/ui";
import { useSelectedLayoutSegments } from "next/navigation";
import { PayloadAdminBar } from "@payloadcms/admin-bar";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { getClientSideURL } from "@/payload/utilities/getURL";
import CustomLogo from "@/payload/site/logo";

const baseClass = "admin-bar";

const collectionLabels = {
  blogs: {
    plural: "Blogs",
    singular: "Blog",
  },
};

const Title: React.FC = () => <span>Dashboard</span>;

export const AdminBar: React.FC<{
  adminBarProps?: PayloadAdminBarProps;
}> = (props) => {
  const { adminBarProps } = props || {};
  const segments = useSelectedLayoutSegments();
  const [show, setShow] = useState(false);
  const collection = (
    collectionLabels[segments?.[1] as keyof typeof collectionLabels]
      ? segments[1]
      : "pages"
  ) as keyof typeof collectionLabels;
  const router = useRouter();

  const onAuthChange = React.useCallback((user: PayloadMeUser) => {
    setShow(Boolean(user?.id));
  }, []);

  return (
    <div
      className={cn(
        baseClass,
        "py-2 bg-transparent text-foreground border-b border-primary/20",
        {
          block: show,
          hidden: !show,
        }
      )}
    >
      <div className="w-full flex items-center justify-center !px-4">
        <PayloadAdminBar
          {...adminBarProps}
          className="py-2 text-foreground"
          classNames={{
            controls: "font-medium text-foreground",
            logo: "text-foreground",
            user: "text-foreground",
            preview: "rounded-md !p-1 !px-2 !bg-primary/40 !text-foreground",
            logout: "rounded-md !p-1 !px-2 !bg-white !text-primary",
          }}
          createProps={{
            style: {
              display: "none",
            },
          }}
          logoutProps={{
            style: {
              display: "none",
            },
          }}
          cmsURL={getClientSideURL()}
          collectionSlug={collection}
          collectionLabels={{
            plural: collectionLabels[collection]?.plural || "Blogs",
            singular: collectionLabels[collection]?.singular || "Blog",
          }}
          logo={
            <div className="flex items-center gap-2">
              {/* <CustomLogo /> */}
              <span className="text-foreground">Go To Dashboard(Admin)</span>
            </div>
          }
          onAuthChange={onAuthChange}
          onPreviewExit={() => {
            fetch("/next/exit-preview").then(() => {
              router.push("/");
              router.refresh();
            });
          }}
          style={{
            backgroundColor: "transparent",
            padding: 0,
            position: "relative",
            zIndex: "unset",
          }}
        />
      </div>
    </div>
  );
};
