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
  educations,
} from "@/data";

import TypescriptLogo from "@/assets/typescript.svg";
import NodejsLogo from "@/assets/nodejs.svg";
import ReactLogo from "@/assets/react.svg";
import NestjsLogo from "@/assets/nestjs.svg";
import PostgresLogo from "@/assets/postgresql.svg";
import PrismaLightLogo from "@/assets/prisma-light.svg";
import PrismaDarkLogo from "@/assets/prisma-dark.svg";
import RedisLogo from "@/assets/redis.svg";
import DockerLogo from "@/assets/docker.svg";
import TurborepoLogo from "@/assets/turborepo.svg";
import ApiLogo from "@/assets/api.svg";
import GcpLogo from "@/assets/gcp.svg";
import Avatar from "@/assets/TaduJR.jpg";
import { useIsMobile } from "@/hooks/use-mobile";
import CalcomLightLogo from "@/assets/calcom-light.avif";
import CalcomDarkLogo from "@/assets/calcom-dark.avif";
import SwaggerLogo from "@/assets/swagger.svg";

const skillLogos = {
  TypeScript: TypescriptLogo,
  "Node.js": NodejsLogo,
  React: ReactLogo,
  NestJS: NestjsLogo,
  Postgres: PostgresLogo,
  Prisma: { light: PrismaLightLogo, dark: PrismaDarkLogo },
  Redis: RedisLogo,
  Docker: DockerLogo,
  Turborepo: TurborepoLogo,
  "REST API": ApiLogo,
  GCP: GcpLogo,
  Swagger: SwaggerLogo,
} as Record<string, string | { light: string; dark: string }>;

const companyLogos = {
  "Cal.com": { light: CalcomLightLogo, dark: CalcomDarkLogo },
} as Record<string, { light: string; dark: string }>;

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-4 py-7">
      {mounted && (
        <div className="flex justify-end mb-4 items-center gap-2">
          <Sun className="w-4 h-4" />
          <Switch
            checked={theme === "dark"}
            onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
            className="data-[state=checked]:bg-gray-800"
          />
          <Moon className="w-4 h-4" />
        </div>
      )}
      <div
        className={`mb-12 ${
          isMobile
            ? "flex flex-col items-center gap-4 text-center"
            : "flex items-center gap-4"
        }`}
      >
        <img
          src={Avatar}
          alt={personalInfo.name}
          className="w-20 h-20 rounded-full"
        />
        <div className="flex-1">
          <h1 className="text-2xl font-medium">{personalInfo.name}</h1>
          <p className="text-muted-foreground">{personalInfo.title}</p>
          <p className="text-muted-foreground text-sm">{personalInfo.email}</p>
          <p className="text-muted-foreground text-sm">
            {personalInfo.address}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button asChild className="gap-2 rounded-none">
            <a href="/resume.pdf" download>
              Download Resume
              <Download className="w-3 h-3" />
            </a>
          </Button>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-sm text-muted-foreground uppercase font-semibold mb-4">
          About
        </h2>
        <p className="text-foreground">{personalInfo.about}</p>
      </section>

      <section className="mb-12">
        <h2 className="text-sm text-muted-foreground uppercase font-semibold mb-4">
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
                src={
                  typeof skillLogos[skill] === "string"
                    ? skillLogos[skill]
                    : theme === "dark"
                    ? skillLogos[skill].light
                    : skillLogos[skill].dark
                }
                alt={`${skill} logo`}
                className="h-4 w-4"
              />
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-sm text-muted-foreground uppercase font-semibold mb-4">
          Work Experience
        </h2>
        <div className="space-y-10">
          {workExperiences.map((job) => (
            <div key={job.id}>
              <div className="flex flex-col gap-1 mb-2">
                <div className="flex items-start gap-4 mb-2">
                  {companyLogos[job.company] && (
                    <img
                      src={
                        theme === "dark"
                          ? companyLogos[job.company].dark
                          : companyLogos[job.company].light
                      }
                      alt={`${job.company} logo`}
                      className="h-12 w-12 shrink-0"
                    />
                  )}
                  <div className="flex-1 flex flex-col">
                    <h3 className="font-medium whitespace-nowrap">
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
                      {job.companyUrl && (
                        <ArrowUpRight className="inline-block w-4 h-4 align-text-bottom ml-1" />
                      )}
                    </h3>
                    {job.location && job.workType && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <span>{job.location}</span>
                        <span>•</span>
                        <span>{job.workType}</span>
                      </div>
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground ml-auto hidden md:block">
                    {job.period}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground md:hidden mb-2">
                  {job.period}
                </div>
              </div>
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
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-sm text-muted-foreground uppercase font-semibold mb-4">
          Education
        </h2>
        <div className="space-y-6">
          {educations.map((edu) => (
            <div key={edu.id}>
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <h3 className="font-medium">{edu.degree}</h3>
                <span className="text-sm text-muted-foreground md:ml-auto">
                  {edu.period}
                </span>
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {edu.institution}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-sm text-muted-foreground uppercase font-semibold mb-4">
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

      <section>
        <h2 className="text-sm text-muted-foreground uppercase font-semibold mb-4">
          Links
        </h2>
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
