"use client";
import { useParams } from "next/navigation";

import Badge from "@/components/ui/Badge";
import Card from "../ui/Card";
import projectsData from "@/data/projectsData";

const ProjectDetail = ({ children }) => {
  const { slug } = useParams();
  const { title, desc, details, images, techUsed, features } =
    projectsData.find((p) => p.slug === slug);

  return (
    <div className="space-y-4 pt-4 text-sm">
      <h1 className="text-primary text-2xl font-bold">{title}</h1>
      <p className="">{desc}</p>
      <div className="flex gap-2">
        {techUsed.map((t, i) => (
          <Badge key={i}>{t}</Badge>
        ))}
      </div>
      <Card>{}</Card>
      <div>
        <h2>Details</h2>
        <p>{details}</p>
      </div>
      <div className="">
        <h2>Features</h2>
        {features.map((f, i) => (
          <p key={i}>{f}</p>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;
