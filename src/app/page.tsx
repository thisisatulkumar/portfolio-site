import About from "@/components/About";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link
        href="/content"
        className="underline text-muted-foreground hover:text-foreground transition-colors"
      >
        Brain Dump
      </Link>
      <div className="h-8"></div>
      <About />
    </div>
  );
}
