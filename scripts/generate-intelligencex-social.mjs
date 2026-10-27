// Uses installed Sharp and existing artwork. No remote assets or new dependency.
// node scripts/generate-intelligencex-social.mjs
import sharp from "sharp";

const portrait = await sharp("public/assets/ujjwal-character.webp").resize(340, 460, { fit: "inside" }).png().toBuffer();
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#f5f0e6"/>
  <rect x="30" y="30" width="1140" height="570" rx="12" fill="none" stroke="#171717" stroke-width="2"/>
  <rect x="64" y="64" width="310" height="44" rx="22" fill="#ffdf70" stroke="#171717"/>
  <text x="86" y="93" font-family="Arial,sans-serif" font-size="20" letter-spacing="2" fill="#171717">PERSONAL PORTFOLIO</text>
  <circle cx="967" cy="300" r="166" fill="#a7d9ed"/>
  <image href="data:image/png;base64,${portrait.toString("base64")}" x="799" y="104" width="340" height="460" preserveAspectRatio="xMidYMid meet"/>
  <g font-family="Arial,sans-serif" fill="#171717">
    <text x="64" y="235" font-size="91" font-weight="700">IntelligenceX</text>
    <text x="68" y="315" font-size="41">Company guide &amp;</text>
    <text x="68" y="370" font-size="41">my developer experience</text>
    <text x="68" y="430" font-size="23" fill="#49443e">XrepAI · AIPTx · CSPMX</text>
    <text x="68" y="529" font-size="29" font-weight="700">Ujjwal Baunthiyal</text>
    <text x="68" y="568" font-size="23">ujjwaluzu.in</text>
  </g>
</svg>`;
await sharp(Buffer.from(svg)).png().toFile("public/assets/intelligencex-guide-social.png");
console.log("Created public/assets/intelligencex-guide-social.png (1200 × 630)");
