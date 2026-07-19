// Official brand marks (Simple Icons SVGs, imported as raw markup) + brand hex colors.
import typescript from "../assets/tool-logos/typescript.svg?raw";
import react from "../assets/tool-logos/react.svg?raw";
import nodedotjs from "../assets/tool-logos/nodedotjs.svg?raw";
import azure from "../assets/tool-logos/azure.svg?raw";
import supabase from "../assets/tool-logos/supabase.svg?raw";
import postgresql from "../assets/tool-logos/postgresql.svg?raw";
import python from "../assets/tool-logos/python.svg?raw";
import openjdk from "../assets/tool-logos/openjdk.svg?raw";
import c from "../assets/tool-logos/c.svg?raw";
import cplusplus from "../assets/tool-logos/cplusplus.svg?raw";
import javascript from "../assets/tool-logos/javascript.svg?raw";
import playwright from "../assets/tool-logos/playwright.svg?raw";
import githubactions from "../assets/tool-logos/githubactions.svg?raw";
import docker from "../assets/tool-logos/docker.svg?raw";
import microsoft from "../assets/tool-logos/microsoft.svg?raw";
import nextdotjs from "../assets/tool-logos/nextdotjs.svg?raw";
import flask from "../assets/tool-logos/flask.svg?raw";
import mysql from "../assets/tool-logos/mysql.svg?raw";
import fastapi from "../assets/tool-logos/fastapi.svg?raw";
import pytorch from "../assets/tool-logos/pytorch.svg?raw";

/** Prepare Simple Icons SVG for currentColor tinting + fixed size. */
function prepareSvg(raw) {
  return raw
    .replace(/<title>[\s\S]*?<\/title>/, "")
    .replace(
      /<svg\b([^>]*)>/,
      '<svg$1 fill="currentColor" aria-hidden="true" class="h-10 w-10">'
    );
}

/** Map tool display name → prepared SVG markup + brand color. */
export const toolLogos = {
  TypeScript: { svg: prepareSvg(typescript), color: "#3178C6" },
  React: { svg: prepareSvg(react), color: "#61DAFB" },
  "Node.js": { svg: prepareSvg(nodedotjs), color: "#5FA04E" },
  Azure: { svg: prepareSvg(azure), color: "#0078D4" },
  Supabase: { svg: prepareSvg(supabase), color: "#3FCF8E" },
  PostgreSQL: { svg: prepareSvg(postgresql), color: "#4169E1" },
  Python: { svg: prepareSvg(python), color: "#3776AB" },
  Java: { svg: prepareSvg(openjdk), color: "#ED8B00" },
  C: { svg: prepareSvg(c), color: "#00599C" },
  "C++": { svg: prepareSvg(cplusplus), color: "#00599C" },
  JavaScript: { svg: prepareSvg(javascript), color: "#F7DF1E" },
  Playwright: { svg: prepareSvg(playwright), color: "#2EAD33" },
  "GitHub Actions": { svg: prepareSvg(githubactions), color: "#2088FF" },
  Docker: { svg: prepareSvg(docker), color: "#2496ED" },
  "MSAL / Azure AD": { svg: prepareSvg(microsoft), color: "#0078D4" },
  "Next.js": { svg: prepareSvg(nextdotjs), color: "#000000" },
  Flask: { svg: prepareSvg(flask), color: "#000000" },
  MySQL: { svg: prepareSvg(mysql), color: "#4479A1" },
  FastAPI: { svg: prepareSvg(fastapi), color: "#009688" },
  PyTorch: { svg: prepareSvg(pytorch), color: "#EE4C2C" },
};
