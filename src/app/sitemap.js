import projectsData from "@/data/projectsData";

export default async function sitemap() {
  const date = new Date();
  const projects = projectsData.map((p) => {
    return {
      url: `https://amritv.space/projects/${p.slug}`,
      lastModified: date,
      priority: 0.5,
    };
  });

  return [
    {
      url: "https://amritv.space",
      lastModified: date,
      priority: 1,
    },
    {
      url: "https://amritv.space/resume",
      lastModified: date,
      priority: 0.75,
    },
    {
      url: "https://amritv.space/projects",
      lastModified: date,
      priority: 0.75,
    },
    ...projects,
  ];
}
