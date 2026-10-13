import { createClient } from "@supabase/supabase-js";
import Link from "next/link";

type ContentListItem = {
  id: string;
  title: string;
  category: string;
  published_at: string | null;
};

const pageSize = 1000;

async function getPublicContent(): Promise<ContentListItem[]> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable.",
    );
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  const content: ContentListItem[] = [];

  for (let offset = 0; ; offset += pageSize) {
    const { data, error } = await supabase
      .from("content")
      .select("id, title, category, published_at")
      .eq("public", true)
      .order("published_at", { ascending: false, nullsFirst: false })
      .order("id", { ascending: true })
      .range(offset, offset + pageSize - 1);

    if (error) {
      throw new Error("Failed to fetch public content from Supabase.", {
        cause: error,
      });
    }

    if (!data?.length) {
      break;
    }

    content.push(...data);

    if (data.length < pageSize) {
      break;
    }
  }

  return content;
}

function formatPublishedDate(date: string | null) {
  if (!date) {
    return "Not dated";
  }

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

export default async function Page() {
  const content = await getPublicContent();

  return (
    <main className="w-full max-w-3xl">
      <header className="mb-10">
        <Link
          href="/"
          className="underline text-muted-foreground hover:text-foreground transition-colors"
        >
          Home
        </Link>

        <p className="text-muted-foreground mt-2">
          I&apos;m completely raw and honest here so read at your own risk :)
        </p>
      </header>

      {content.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full min-w-136 border-collapse text-left">
            <thead>
              <tr className="border-b border-border text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                <th scope="col" className="py-3 pr-6">
                  Title
                </th>
                <th scope="col" className="py-3 pr-6 text-center">
                  Category
                </th>
                <th scope="col" className="py-3 text-right">
                  Published
                </th>
              </tr>
            </thead>
            <tbody>
              {content.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-border/70 last:border-0"
                >
                  <td className="py-5 pr-6">
                    <Link
                      href={`/content/${item.id}`}
                      className="font-medium text-foreground transition-colors hover:text-muted-foreground"
                    >
                      {item.title}
                    </Link>
                  </td>
                  <td className="py-5 pr-6 text-sm text-muted-foreground text-center">
                    {item.category.at(0)?.toUpperCase() +
                      item.category.slice(1)}
                  </td>
                  <td className="py-5 text-sm tabular-nums text-muted-foreground text-right">
                    {formatPublishedDate(item.published_at)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="border-t border-border py-6 text-muted-foreground">
          Nothing published yet.
        </p>
      )}
    </main>
  );
}
