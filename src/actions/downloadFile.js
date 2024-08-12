"use server";
import fs from "fs";

export const readResume = async () => {
  const file = fs.readFileSync("./src/assets/pdfs/Yash_Sahu_Resume.pdf");

  return file;
};
