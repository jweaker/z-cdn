import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

const twilioTemplateMedia = {
  "image/jpeg": { maxFileCount: 1, maxFileSize: "16MB" },
  "image/png": { maxFileCount: 1, maxFileSize: "16MB" },
  "video/mp4": { maxFileCount: 1, maxFileSize: "16MB" },
  "application/pdf": { maxFileCount: 1, maxFileSize: "16MB" },
} as const;
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  upload: f(twilioTemplateMedia).onUploadComplete(async ({ file }) => {
    return { url: file.appUrl, mimeType: file.type };
  }),
} satisfies FileRouter;
export type OurFileRouter = typeof ourFileRouter;
