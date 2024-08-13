"use server";
import fs from "fs";

export const readResume = async (path) => {
  const file = fs.readFileSync(path);

  return file;
};
