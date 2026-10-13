import { createClient } from "@supabase/supabase-js";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";

type ContentRecord = {
  id: string;
  title: string;
  text: string;
  category: string;
  published_at: string | null;
  created_at: string;
};

const uuidPattern =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

async function getContent(id: string): Promise<ContentRecord | null> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable.",
    );
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  const { data, error } = await supabase
    .from("content")
    .select("id, title, text, category, published_at, created_at")
    .eq("id", id)
    .eq("public", true)
    .maybeSingle();

  if (error) {
    throw new Error("Failed to fetch content from Supabase.", { cause: error });
  }

  return data;
}

function formatDate(date: string) {
  return new Date(`${date.slice(0, 10)}T00:00:00Z`).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    },
  );
}

export default async function Page({ params }: PageProps<"/content/[id]">) {
  const { id } = await params;

  if (!uuidPattern.test(id)) {
    notFound();
  }

  const content = await getContent(id);

  if (!content) {
    notFound();
  }

  return (
    <main className="w-full max-w-3xl">
      <article>
        <header className="mb-10 border-b border-border pb-8 md:mb-12">
          <Link
            href="/content"
            className="underline text-muted-foreground hover:text-foreground transition-colors"
          >
            Go Back
          </Link>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl md:leading-tight">
            {content.title}
          </h1>
          <p className="mt-5 text-sm text-muted-foreground">
            {formatDate(content.published_at ?? content.created_at)} |{" "}
            {content.category.at(0)?.toUpperCase() + content.category.slice(1)}
          </p>
        </header>

        <div className={styles.markdown}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content.text}
          </ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
