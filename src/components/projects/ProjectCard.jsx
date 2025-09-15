import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Link from "next/link";

const ProjectCard = ({
  project,
  className = "",
  showDetails = false,
  children,
}) => {
  const {
    id = 1010001,
    slug = "meme",
    title = "lolcat",
    desc = "",
    images = [],
    techUsed = [],
    features = [],
    repo = "",
    details = "",
    preview = "",
  } = project;

  return (
    <Card className={`space-y-4 ${className}`}>
      <div>
        <div className="mb-1.75 flex items-end gap-2">
          <h1 className="text-primary flex-1 font-mono text-3xl font-bold select-text">
            {title}
          </h1>
          <div className="flex gap-2">
            <Link href={`/projects/${slug}`}>
              <Button tertiary>Details</Button>
            </Link>
          </div>
        </div>
        <div className="space-y-1.5">
          <p className="text-sm select-text md:text-base">{desc}</p>
          <div className="flex flex-wrap gap-1">
            {techUsed.map((t, i) => (
              <Badge key={i}>{t}</Badge>
            ))}
          </div>
          {showDetails && (
            <div className="text-text/80 text-sm select-text md:text-base">
              {details}
            </div>
          )}
        </div>
      </div>

      {children}
    </Card>
  );
};

export default ProjectCard;
