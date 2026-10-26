import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <main className="flex min-h-[40vh] w-full max-w-3xl items-center justify-center">
      <div
        className="flex items-center gap-3 text-muted-foreground"
        role="status"
      >
        <LoaderCircle className="size-5 animate-spin" aria-hidden="true" />
        <span>Loading content...</span>
      </div>
    </main>
  );
}
