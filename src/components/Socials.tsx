import { ArrowUpRight } from "lucide-react";

const links: { label: string; url: string }[] = [
  { label: "GitHub", url: "https://github.com/thisisatulkumar" },
  { label: "LinkedIn", url: "https://linkedin.com/in/thisisatulkumar" },
  { label: "Instagram", url: "https://instagram.com/thisisatulkumar" },
  { label: "X", url: "https://x.com/thisisatulkumar" },
  { label: "theatulkumar11@gmail.com", url: "mailto:theatulkumar11@gmail.com" },
];

const Socials = () => {
  return (
    <div className="flex flex-row gap-4 mt-4 md:mt-0 flex-wrap md:flex-col md:gap-0 text-right">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {link.label} <ArrowUpRight className="inline-block ml-1 w-3 h-3" />
        </a>
      ))}
    </div>
  );
};

export default Socials;
