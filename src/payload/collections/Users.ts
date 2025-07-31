import type { CollectionConfig } from "payload";
import { protectRoles } from "@/payload/collections/hooks/protectRoles";
import { role } from "@/payload/access/role";
import { checkRole } from "@/payload/collections/utils/checkRole";
import { User } from "@/payload/payload-types";
import { formatSlugHook } from "../fields/slug/formatSlug";

export const Users: CollectionConfig = {
  slug: "users",
  access: {
    create: role.editor,
    read: role.user,
    update: role.user,
    delete: role.admin,
  },
  admin: {
    useAsTitle: "email",
  },
  auth: true,
  defaultPopulate: {
    slug: true,
    name: true,
  },
  fields: [
    {
      name: "avatar",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "roles",
      type: "select",
      hasMany: true,
      saveToJWT: true,
      options: [
        { label: "Admin", value: "admin" },
        { label: "Editor", value: "editor" },
        { label: "User", value: "user" },
      ],
      hooks: {
        beforeChange: [protectRoles],
      },
      access: {
        update: ({ req: { user } }) => checkRole(["user"], user as User),
      },
    },
    {
      name: "active",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "name",
      type: "text",
    },
    {
      name: "slug",
      type: "text",
      index: true,
      hooks: {
        beforeValidate: [formatSlugHook("name")],
      },
    },
    // Email added by default
    // Add more fields as needed
  ],
};
