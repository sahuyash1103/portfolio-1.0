import {
  DownloadIcon,
  GithubIcon,
  LinkedInIcon,
  InstagramIcon,
  ExternalLinkIcon,
} from "@/assets/svgs/index";
import { IProjectLinks, projects } from "./data";
import Link from "next/link";

export default function Projects() {
  return (
    <main className="scrollbar h-full w-full overflow-scroll overflow-x-clip px-20">
      <div className="flex flex-col">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="bg-primary-2 my-5 flex flex-col gap-2 rounded-xl p-6"
          >
            <div className="flex items-center justify-between">
              <span className="text-2xl font-semibold capitalize text-tertiary">
                {project.name.toLowerCase()}
              </span>
              <span className="text-lg capitalize text-secondary">
                {project.from} {project.to && ` - ${project.to}`}
              </span>
            </div>
            <hr className="border-tertiary" />
            <span className="flex flex-col text-secondary">
              {/* <span className="my-2 text-white">Description: </span> */}
              {project.description.map((d, i) => (
                <span key={i} className="my-2">
                  {d}
                </span>
              ))}
            </span>
            <span className="flex flex-col gap-2 py-2">
              <span className="text-nowrap text-white">Tech Stack: </span>
              <div className="flex flex-wrap gap-1 text-tertiary">
                {project.techStack.map((t, i) => {
                  return (
                    <span
                      key={t}
                      className="mx-1 rounded-md border border-tertiary px-2 py-1 text-[14px] tracking-wide"
                    >
                      {t}
                    </span>
                  );
                })}
              </div>
            </span>
            <span className="flex flex-col gap-2 py-2">
              <span className="text-nowrap text-white">Additional: </span>
              <div className="flex flex-wrap gap-1 text-tertiary">
                {project.additional.map((a, i) => {
                  return (
                    <span
                      key={a}
                      className="mx-1 rounded-md border border-tertiary px-2 py-1 text-[14px] tracking-wide"
                    >
                      {a}
                    </span>
                  );
                })}
              </div>
            </span>
            <div className="flex flex-col items-start justify-start gap-2">
              <span className="text-nowrap text-white">Links: </span>
              <ProjectLinkIcons links={project.links} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

function ProjectLinkIcons({ links }: { links: IProjectLinks }) {
  return (
    <div className="flex w-fit items-center justify-end gap-4 text-tertiary">
      {links.git && (
        <Link
          href={links.git}
          target="_blank"
          className="flex items-center gap-3 rounded-full border border-tertiary p-2"
        >
          <GithubIcon className="w-4 text-2xl" />
        </Link>
      )}
      {links.live && (
        <Link
          href={links.live}
          target="_blank"
          className="flex items-center gap-3 rounded-full border border-tertiary p-2"
        >
          <ExternalLinkIcon className="w-4 text-2xl" />
        </Link>
      )}
    </div>
  );
}
