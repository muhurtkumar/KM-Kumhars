import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "f4srwlgc",
  dataset: "production",
  apiVersion: "2026-01-01",
  useCdn: import.meta.env.PROD,
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}