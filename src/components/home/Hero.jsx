import Container from "@/components/layout/Container";
import TypeWriter from "@/components/ui/TypeWriter";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Link from "next/link";

import projectsData from "@/data/projectsData";

const Hero = () => {
  const techProjects = projectsData.flatMap((p) => p.techUsed);
  const uniqProjects = [...new Set(techProjects)];

  return (
    <Container className="mt-32">
      <div className="flex h-full flex-col justify-center gap-8 font-mono md:flex-row md:items-center">
        <div className="flex-1 space-y-8">
          <div>
            <h1 className="text-4xl font-bold md:text-5xl">
              amrit's portfolio
            </h1>
            <h3 className="mt-2 text-base md:text-xl">
              i hex bits into{" "}
              <TypeWriter
                strings={[
                  "web applications",
                  "react interfaces",
                  "apis",
                  "cpu cores",
                  "assemblers",
                  "algorithms",
                ]}
                letterInterval={96}
                wordInterval={1700}
                primary
              />
              <span className="animate-pulse">_</span>
            </h3>
          </div>

          <div className="flex max-w-[500px] flex-wrap gap-2">
            {uniqProjects.map((tech, i) => (
              <Badge key={i}>{tech}</Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/projects">
              <Button accent>View Projects</Button>
            </Link>
            <Link href="/contact">
              <Button tertiary>Get in Touch</Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-1 justify-center md:justify-end">
          <div className="relative">
            <div className="bg-surface/30 border-surface max-w-[320px] rounded-lg border p-6 font-mono text-sm">
              <div className="mb-4 flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/60"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500/60"></div>
                <div className="h-3 w-3 rounded-full bg-green-500/60"></div>
              </div>
              <div className="space-y-1 text-xs">
                <div className="text-accent">const</div>
                <div className="text-primary ml-2">developer = {"{"}</div>
                <div className="text-text/80 ml-4">name: "amrit",</div>
                <div className="text-text/80 ml-4">skills: [</div>{" "}
                {uniqProjects.slice(0, 4).map((tech, i) => (
                  <div key={i} className="text-primary/80 ml-6">
                    "{tech.toLowerCase()}",
                  </div>
                ))}
                <div className="text-text/80 ml-4">],</div>
                <div className="text-text/80 ml-4">status: "building"</div>
                <div className="text-primary ml-2">{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
