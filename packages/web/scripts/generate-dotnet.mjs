import { readFile, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { packDotNetTypes } from "@wc-toolkit/dotnet-tools";

const { packageId, namespace } = JSON.parse(
  await readFile("../dotnet/dotnet.config.json", "utf8")
);
const { version } = JSON.parse(await readFile("./package.json", "utf8"));
const manifest = JSON.parse(
  await readFile("./specs/custom-elements.json", "utf8")
);

const result = await packDotNetTypes({
  manifest,
  packageId,
  namespace,
  version,
  outdir: resolve("../dotnet/generated"),
  pack: false,
  staticAssets: [{ source: "dist/gcds", destination: "gcds" }],
  exclude: ['GcdsTable']
});

if (!result) throw new Error("Generation was skipped");

await writeFile(
  join(result.projectDir, "Blazor", "_Imports.razor"),
  `@namespace ${namespace}\n`
);
await writeFile(
  join(result.projectDir, "Directory.Build.props"),
  `<Project>
  <PropertyGroup>
    <NoWarn>$(NoWarn);CS1591</NoWarn>
  </PropertyGroup>
</Project>
`
);

console.log(`Generated .NET project in ${result.projectDir}`);