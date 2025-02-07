import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"; // Default to 'production'

if (!projectId) {
  throw new Error("Missing projectId. Check your .env file");
}

export default defineConfig({
  name: "default",
  title: "Oats Blog",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
