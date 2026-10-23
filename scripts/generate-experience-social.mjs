// Run with Node 22.18+: node scripts/generate-experience-social.mjs
// Uses the existing content and logo assets; no remote assets or new dependencies.
import { mkdir } from "node:fs/promises";
import sharp from "sharp";
import { experienceProjects } from "../src/lib/experience-projects.ts";

const escapeXml = (value) => value.replace(/[&<>"']/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;",
})[char]);

await mkdir("public/assets", { recursive: true });
for (const project of experienceProjects) {
  const logo = await sharp(`public${project.logo}`).resize(310, 120, { fit: "inside" }).png().toBuffer();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="#f5f0e6"/>
    <rect x="32" y="32" width="1136" height="566" rx="12" fill="none" stroke="#151515" stroke-width="2"/>
    <rect x="60" y="65" width="9" height="48" fill="#e65f2b"/>
    <text x="88" y="98" font-family="Arial, sans-serif" font-size="23" letter-spacing="3" fill="#333">INTELLIGENCEX EXPERIENCE</text>
    <rect x="792" y="140" width="350" height="180" rx="10" fill="${project.slug === "aiptx" ? "#0b1020" : "#fffdf5"}" stroke="#d0c7bb"/>
    <image href="data:image/png;base64,${logo.toString("base64")}" x="812" y="170" width="310" height="120" preserveAspectRatio="xMidYMid meet"/>
    <text x="65" y="263" font-family="Arial, sans-serif" font-size="104" font-weight="700" fill="#151515">${escapeXml(project.name)}</text>
    <text x="65" y="363" font-family="Arial, sans-serif" font-size="39" fill="#333">${escapeXml(project.category)}</text>
    <line x1="65" y1="447" x2="1135" y2="447" stroke="#b8afa2"/>
    <text x="65" y="507" font-family="Arial, sans-serif" font-size="29" fill="#151515">Ujjwal Baunthiyal · Development experience</text>
    <text x="65" y="552" font-family="Arial, sans-serif" font-size="23" fill="#555">ujjwaluzu.in · Personal portfolio</text>
  </svg>`;
  await sharp(Buffer.from(svg)).png().toFile(`public${project.socialImage}`);
  console.log(project.socialImage);
}
