import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  upload: f({
    blob: { maxFileCount: 1, maxFileSize: "16MB" },
  }).onUploadComplete(async ({ file }) => {
    return { url: file.url };
  }),
} satisfies FileRouter;
export type OurFileRouter = typeof ourFileRouter;
