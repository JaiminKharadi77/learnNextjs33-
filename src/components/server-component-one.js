import fs from "fs";

export const ServerComponentOne = () => {
  fs.readFileSync("src/components/server-component-one.js", "utf-8");
  return <h1>ServerComponentOne</h1>;
};
