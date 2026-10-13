import Link from "next/link";
import CP from "./CP";
import Projects from "./Projects";

const About = () => {
  return (
    <div className="text-[#333] dark:text-[#eee]">
      <p>
        I&apos;m Atul Kumar, a sophomore at IET Lucknow pursuing a
        Bachelor&apos;s degree in Computer Science and Engineering. These days,
        I am actively doing competitive programming so that I don&apos;t end up
        unemployed and solving problems genuinely calms me down. Apart from
        this, I&apos;m actively working on my mental health and fixing my life
        after realizing how f*cked up it had become.
      </p>

      <CP />
      <Projects />

      <p>
        I also write. I ain&apos;t a writer, at least not professionally.
        Writing soothes me whenever I feel emotionally heavy and for some reason
        (even I don&apos;t know), I&apos;ve decided to share a major portion of
        it publicly. You can read them{" "}
        <Link
          href="/content"
          className="underline text-muted-foreground hover:text-foreground transition-colors"
        >
          here
        </Link>{" "}
      </p>
    </div>
  );
};

export default About;
