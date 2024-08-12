"use client";
import {
  DownloadIcon,
  GithubIcon,
  LinkedInIcon,
  InstagramIcon,
} from "@/assets/svgs/index";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { readResume } from "@/actions/downloadFile";

const numbersData = [
  {
    number: "2018",
    text: "Coding Since",
  },
  {
    number: "300+",
    text: "Code Commits",
  },
  {
    number: "15+",
    text: "Personal Projects",
  },
  {
    number: "15+",
    text: "Technologies Used",
  },
];

const Numbers = ({ number, text }: { number: string; text: string }) => {
  return (
    <div className="gap-2m mx-3 flex h-fit w-fit gap-2">
      <span className="flex items-center justify-center text-5xl">
        {number}
      </span>
      <span className="flex h-full items-center text-wrap text-lg text-secondary">
        {text}
      </span>
    </div>
  );
};

export default function Home() {
  const downloadResume = async () => {
    const file = await readResume();

    const blob = new Blob([file], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Yash_Sahu_Resume.pdf";
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="flex h-full w-full flex-col items-center justify-start">
      <div className="flex h-[70%] w-full">
        <section className="flex h-full w-full flex-col items-center justify-center">
          <div className="flex flex-col">
            <span className="my-2 text-lg text-primary-fg/70">
              Full Stack Developer
            </span>
            <span className="text-bold mb-1 mt-2 text-5xl tracking-widest text-primary-fg">{`Hello, I'm`}</span>
            <span className="text-bold mb-4 mt-1 text-6xl text-tertiary">
              Yash Sahu
            </span>
            <span className="text-justify text-sm text-secondary">
              An enthusiastic guy who is always curious about new technologies,
              always learning new technology and projects. A guy who is
              calculative about decisions and logics and always thinks that
              everything happens for a reason. My reason of being in this world
              is to provide people with software tool to ease their life style
              through this company.
            </span>
          </div>
          <div className="mt-6 flex w-full justify-between gap-6">
            <button
              className="flex items-center gap-3 rounded-full border border-tertiary px-6 py-2"
              onClick={downloadResume}
            >
              Download Resume
              <DownloadIcon className="w-6 text-2xl text-tertiary" />
            </button>
            <div className="flex items-center justify-center gap-4">
              <Link
                href={"https://github.com/sahuyash1103"}
                target="_blank"
                className="flex items-center gap-3 rounded-full border border-tertiary p-2"
              >
                <GithubIcon className="w-4 text-2xl text-tertiary" />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/yash-sahu-58b645202/"}
                target="_blank"
                className="flex items-center gap-3 rounded-full border border-tertiary p-2"
              >
                <LinkedInIcon className="w-4 text-2xl text-tertiary" />
              </Link>
            </div>
          </div>
        </section>
        <section className="flex h-full w-full flex-col items-center justify-center p-1">
          {/* TODO: IMAGE */}
          <div className="relative m-2 flex aspect-square w-[90%] items-center justify-center rounded-full border-4 border-primary p-4 outline outline-2 outline-tertiary">
            {/* Image */}
            <Image
              src={"https://avatars.githubusercontent.com/u/72812188"}
              alt=""
              layout="fill"
              objectFit="contain"
              className="rounded-full"
            />
          </div>
        </section>
      </div>
      <footer className="mb-1 flex h-[25%] w-full">
        {
          <div className="flex h-full w-full items-center justify-center gap-6">
            {numbersData.map((data, index) => (
              <React.Fragment key={index}>
                {index != 0 && <span className="text-secondary">|</span>}
                <Numbers number={data.number} text={data.text} />
              </React.Fragment>
            ))}
          </div>
        }
      </footer>
    </main>
  );
}
