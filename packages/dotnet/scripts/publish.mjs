/*
 * Placeholder script for now
 * We as a team should decide how this will publish to nuget.org
 */

import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";

const { packageId } = JSON.parse(readFileSync("./dotnet.config.json", "utf8"));
const { version } = JSON.parse(readFileSync("../web/package.json", "utf8"));

const apiKey = process.env.NUGET_API_KEY;
const source = process.env.NUGET_SOURCE ?? "https://api.nuget.org/v3/index.json";

if (!apiKey) {
  console.error("NUGET_API_KEY is not set.");
  process.exit(1);
}

const nupkg = join("out", `${packageId}.${version}.nupkg`);
if (!existsSync(nupkg)) {
  console.error(`${nupkg} not found. Run the dotnet build first.`);
  process.exit(1);
}

execFileSync(
  "dotnet",
  ["nuget", "push", nupkg, "--api-key", apiKey, "--source", source, "--skip-duplicate"],
  { stdio: "inherit" }
);