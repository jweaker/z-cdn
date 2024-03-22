"use client";
import { UploadDropzone } from "@/utils/uploadthing";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const [url, setUrl] = useState<string>("");
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(url);
    toast.success("Url saved to clipboard!");
  };
  return (
    <div className="flex h-screen flex-col p-24 sm:p-12">
      <div className="flex w-full flex-wrap items-center justify-between font-mono">
        <span className="bg-gradient-to-r from-purple-300 to-blue-600 bg-clip-text text-3xl font-extrabold text-transparent">
          Z-CDN
        </span>
        <span className="text-xl">Fast Free CDN</span>
      </div>

      <main className="flex h-full flex-col items-center justify-center">
        <div className="relative flex place-items-center rounded-lg border-4 border-dashed border-gray-800 p-2">
          <UploadDropzone
            className="mt-0"
            endpoint="upload"
            config={{ appendOnPaste: true, mode: "auto" }}
            onClientUploadComplete={(res: any) => {
              console.log(res[0]);
              setUrl(res[0].url);
            }}
            onUploadError={(error: Error) => {
              console.error(error);
              toast.error("Error: " + error.message);
            }}
          />
          <div className="z-[-1] before:absolute before:w-full before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[220px] after:w-full after:-translate-x-full after:-translate-y-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:lg:h-[360px] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40"></div>
        </div>
        <div
          className="mt-4 flex min-h-20 w-[330px] cursor-pointer items-center rounded-md border-4 border-dashed border-gray-800 p-2 hover:bg-gray-800/50"
          style={url ? {} : { opacity: 0, cursor: "default" }}
          onClick={handleCopyUrl}
        >
          <span className="w-full break-all text-center">{url}</span>
        </div>
      </main>
      <footer className="text-center">
        Made with ❤️ by
        <span className="mx-2 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-xl font-extrabold text-transparent">
          Zainab Radhi
        </span>
        and
        <span className="mx-2 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-xl font-extrabold text-transparent">
          Widad Razzaq
        </span>
      </footer>
      <Toaster
        toastOptions={{
          style: {
            backgroundColor: "rgb(17 24 39)",
            color: "white",
          },
        }}
      />
    </div>
  );
}
