import type { User } from "@/payload/payload-types";
import { checkRole } from "@/payload/collections/utils/checkRole";
import { Access, AccessArgs } from "payload";

export const role: {
  [key: string]: Access;
} = {
  admin: ({ req: { user } }: AccessArgs) => {
    if (user) {
      if (checkRole(["admin"], user)) {
        return true;
      }
    }

    return false;
  },

  editor: ({ req: { user } }: AccessArgs) => {
    if (user) {
      if (checkRole(["admin", "editor"], user)) {
        return true;
      }
    }

    return false;
  },
  user: ({ req: { user } }: AccessArgs) => {
    if (user) {
      if (checkRole(["admin", "editor"], user)) {
        return true;
      }

      return { id: { equals: user.id } };
    }

    return false;
  },
};
