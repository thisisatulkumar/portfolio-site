import Link from "next/link";

const cpProfiles = [
  {
    platform: "Codeforces",
    username: "carpenterx",
    url: "https://codeforces.com/profile/carpenterx",
  },
  {
    platform: "CodeChef",
    username: "theatulkumar",
    url: "https://codechef.com/users/theatulkumar",
  },
];

const CP = () => {
  return (
    <p className="my-8 flex flex-col md:flex-row gap-2 md:gap-0">
      {cpProfiles.map((profile) => (
        <span key={profile.platform}>
          {profile.platform}:&nbsp;
          <Link
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 underline text-muted-foreground hover:text-foreground transition-colors"
          >
            {profile.username}
          </Link>
        </span>
      ))}
    </p>
  );
};

export default CP;
