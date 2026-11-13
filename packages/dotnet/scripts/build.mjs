import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";

const { packageId } = JSON.parse(readFileSync("./dotnet.config.json", "utf8"));
const { version } = JSON.parse(readFileSync("../web/package.json", "utf8"));

const csproj = join("generated", `${packageId}.csproj`);
if (!existsSync(csproj)) {
  console.error(`${csproj} not found. Build the web package first.`);
  process.exit(1);
}

execFileSync("dotnet", ["restore", csproj], { stdio: "inherit" });
execFileSync(
  "dotnet",
  [
    "pack", csproj, "-c", "Release", "-o", "out",
    `-p:Version=${version}`,
    "-p:PackageLicenseExpression=MIT",
    "-p:RepositoryUrl=https://github.com/cds-snc/gcds-components",
    "-p:Description=ASP.NET Tag Helpers and Blazor components for GC Design System",
  ],
  { stdio: "inherit" }
);