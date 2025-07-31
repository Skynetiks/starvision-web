import sharp from "sharp"; // sharp-import
import path from "path";
import { buildConfig, PayloadComponent } from "payload";
import { fileURLToPath } from "url";
import { Users } from "@/payload/collections/Users";
import { defaultLexical } from "@/payload/fields/defaultLexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { Blogs } from "@/payload/collections/Blogs";
import { Categories } from "@/payload/collections/Categories";
import { Media } from "@/payload/collections/Media";
import { getServerSideURL } from "@/payload/utilities/getURL";
import { plugins } from "@/payload/plugins";
import Logo from "./site/logo";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default buildConfig({
  admin: {
    importMap: {
      baseDir: path.resolve(__dirname),
    },
    theme: "light",
    user: Users.slug,
    components: {
      graphics: {
        Logo: {
          path: "@/payload/site/logo.tsx",
          //   exportName: "Logo",
        }, // Custom logo on login + sidebar
        // Icon: () => null, // optional: hide small favicon-like icon
      },
    },
    livePreview: {
      breakpoints: [
        {
          label: "Mobile",
          name: "mobile",
          width: 375,
          height: 667,
        },
        {
          label: "Tablet",
          name: "tablet",
          width: 768,
          height: 1024,
        },
        {
          label: "Desktop",
          name: "desktop",
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  // This config helps us configure global or default features that the other editors can inherit
  editor: defaultLexical,
  // database-adapter-config-start
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  // database-adapter-config-end
  collections: [Blogs, Categories, Media, Users],
  cors: [getServerSideURL()].filter(Boolean),
  globals: [],
  plugins: [
    ...plugins,
    // storage-adapter-placeholder
  ],
  secret: process.env.PAYLOAD_SECRET || "",
  sharp,
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  defaultDepth: 2,
  maxDepth: 3,
});
