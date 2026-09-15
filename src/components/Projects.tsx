import Link from "next/link";

const projects = [
  {
    title: "SGPA Calculator",
    url: "https://iet-lko-cgpa-calculator.vercel.app/",
  },
  {
    title: "Canon",
    url: "https://thecanon.fun",
  },
  {
    title: "Fastyy",
    url: "https://fastyy.shop",
  },
];

const Projects = () => {
  return (
    <p className="my-8 flex flex-col md:flex-row gap-2 md:gap-0">
      I&apos;ve built a few projects along the way:&nbsp;
      {projects.map((project, index) => (
        <span key={index} className="text-muted-foreground">
          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-muted-foreground hover:text-foreground transition-colors"
          >
            {project.title}
          </Link>
          {index !== projects.length - 1 ? ", " : ""}&nbsp;
        </span>
      ))}
    </p>
  );
};

export default Projects;
