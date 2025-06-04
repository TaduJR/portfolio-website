import {
  ArrowUpRight,
  Download,
  Moon,
  Sun,
  Github,
  Linkedin,
  Globe,
  Mail,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  workExperiences,
  projects,
  socialLinks,
  skills,
  personalInfo,
} from "@/data";
// Skill logo imports
import TypescriptLogo from "@/assets/typescript.svg";
import NodejsLogo from "@/assets/nodejs.svg";
import ReactLogo from "@/assets/react.svg";
import NestjsLogo from "@/assets/nestjs.svg";
import PostgresLogo from "@/assets/postgresql.svg";
import PrismaLogo from "@/assets/prisma.svg";
import RedisLogo from "@/assets/redis.svg";
import DockerLogo from "@/assets/docker.svg";
import TurborepoLogo from "@/assets/turborepo.svg";
import ApiLogo from "@/assets/api.svg";
import GcpLogo from "@/assets/gcp.svg";
import Avatar from "@/assets/TaduJR.jpg";

// Map each skill name to its logo
const skillLogos: Record<string, string> = {
  TypeScript: TypescriptLogo,
  "Node.js": NodejsLogo,
  React: ReactLogo,
  NestJS: NestjsLogo,
  Postgres: PostgresLogo,
  Prisma: PrismaLogo,
  Redis: RedisLogo,
  Docker: DockerLogo,
  Turborepo: TurborepoLogo,
  "REST API": ApiLogo,
  GCP: GcpLogo,
};

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      {/* Header / Intro */}
      <div className="flex items-center gap-4 mb-12">
        <img
          src={Avatar}
          alt={personalInfo.name}
          className="w-20 h-20 rounded-full"
        />
        <div className="flex-1">
          <h1 className="text-2xl font-medium">{personalInfo.name}</h1>
          <p className="text-muted-foreground">{personalInfo.title}</p>
          <p className="text-muted-foreground text-sm">{personalInfo.email}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Sun className="w-4 h-4" />
            {mounted && (
              <Switch
                checked={theme === "dark"}
                onCheckedChange={(checked) =>
                  setTheme(checked ? "dark" : "light")
                }
                className="data-[state=checked]:bg-gray-800"
              />
            )}
            <Moon className="w-4 h-4" />
          </div>
          <Button asChild className="gap-2">
            <a href="/resume.pdf" download>
              Download CV
              <Download className="w-3 h-3 rounded-none" />
            </a>
          </Button>
        </div>
      </div>

      {/* About Section */}
      <section className="mb-12">
        <h2 className="text-sm text-muted-foreground uppercase mb-4">About</h2>
        <p className="text-foreground">{personalInfo.about}</p>
      </section>

      {/* Key Skills Section */}
      <section className="mb-12">
        <h2 className="text-sm text-muted-foreground uppercase mb-4">
          Key Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="outline"
              className="rounded-none px-3 py-1 text-sm"
            >
              <img
                src={skillLogos[skill]}
                alt={`${skill} logo`}
                className="h-4 w-4"
              />
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="mb-12">
        <h2 className="text-sm text-muted-foreground uppercase mb-4">
          Work Experience
        </h2>
        <div className="space-y-10">
          {workExperiences.map((job) => (
            <div key={job.id}>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-medium">
                    {job.title} -{" "}
                    {job.companyUrl ? (
                      <a
                        href={job.companyUrl}
                        className="underline decoration-gray-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {job.company}
                      </a>
                    ) : (
                      job.company
                    )}
                  </h3>
                  {job.companyUrl && (
                    <a
                      href={job.companyUrl}
                      className="inline-block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                  <span className="text-sm text-muted-foreground ml-auto">
                    {job.period}
                  </span>
                </div>
                {job.location && job.workType && (
                  <div className="flex gap-2 mb-1 text-sm">
                    <span className="text-muted-foreground">
                      {job.location}
                    </span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">
                      {job.workType}
                    </span>
                  </div>
                )}
                <p className="text-foreground mb-2">{job.description}</p>
                <div className="flex flex-wrap gap-1 text-sm text-muted-foreground">
                  {job.technologies.map((tech, i) => (
                    <span key={`${job.id}-tech-${i}`} className="font-medium">
                      {tech}
                      {i < job.technologies.length - 1 && " • "}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Side Projects Section */}
      <section className="mb-12">
        <h2 className="text-sm text-muted-foreground uppercase mb-4">
          Side Projects
        </h2>
        <div className="space-y-10">
          {projects.map((project) => (
            <div key={project.id} className="flex items-start gap-2">
              <div className="text-2xl pt-1">{project.logo}</div>
              <div className="flex-1">
                <div className="flex items-center gap-1">
                  <h3 className="font-medium">{project.name}</h3>
                  {project.url && (
                    <a
                      href={project.url}
                      className="inline-block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <a
                  href={project.url}
                  className="text-muted-foreground underline text-sm mb-2 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.url}
                </a>
                <p className="text-foreground mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-1 text-sm text-muted-foreground">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={`${project.id}-tech-${i}`}
                      className="font-medium"
                    >
                      {tech}
                      {i < project.technologies.length - 1 && " • "}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Links Section */}
      <section>
        <h2 className="text-sm text-muted-foreground uppercase mb-4">Links</h2>
        <div className="space-y-2">
          {socialLinks.map((link) => (
            <div key={link.id} className="grid grid-cols-[100px_1fr] gap-4">
              <div className="text-sm text-muted-foreground">
                {link.platform}
              </div>
              <div>
                <a
                  href={link.url}
                  className="flex items-center gap-2 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon === "linkedin" && <Linkedin className="w-4 h-4" />}
                  {link.icon === "github" && <Github className="w-4 h-4" />}
                  {link.icon === "globe" && <Globe className="w-4 h-4" />}
                  {link.icon === "mail" && <Mail className="w-4 h-4" />}
                  <span>{link.username}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
