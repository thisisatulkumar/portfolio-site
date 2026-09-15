import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Socials from "./Socials";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0 mb-8 md:mb-16">
      <div className="flex items-center gap-4">
        <Link href="/">
          <Avatar className="w-12 h-12">
            <AvatarImage src="https://avatars.githubusercontent.com/u/212378250?s=400&u=ffbcdfc35978df6c0c85a3e051eec0d177994b10&v=4" />
            <AvatarFallback>Atul Kumar</AvatarFallback>
          </Avatar>
        </Link>

        <div className="flex flex-col">
          <strong>Atul Kumar</strong>
          <span className="text-muted-foreground text-sm">
            Competitive Programmer :|
          </span>
        </div>
      </div>
      <Socials />
    </nav>
  );
};

export default Navbar;
