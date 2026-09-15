import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const source = path.resolve("public/assets/uzu.png");
const outputDir = path.resolve("public/assets/decorative");

const maskSvg = (width, height, paths) => Buffer.from(
  `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="black"/>${paths.map((d) => `<path d="${d}" fill="white"/>`).join("")}</svg>`,
);

const maskedCrop = async (name, extract, paths) => {
  const width = extract.width;
  const height = extract.height;
  const buffer = await sharp(source)
    .extract(extract)
    .composite([{ input: maskSvg(width, height, paths), blend: "dest-in" }])
    .png()
    .toBuffer();

  await fs.writeFile(path.join(outputDir, name), buffer);
  return buffer;
};

const composite = async (name, width, height, layers) => {
  const buffer = await sharp({
    create: { width, height, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
  })
    .composite(layers)
    .png()
    .toBuffer();

  await fs.writeFile(path.join(outputDir, name), buffer);
  return buffer;
};

await fs.mkdir(outputDir, { recursive: true });

await maskedCrop("about-polaroid.png", { left: 25, top: 20, width: 545, height: 710 }, [
  "M30 15 L476 2 L520 683 L100 692 Z",
]);

await maskedCrop("about-note.png", { left: 585, top: 55, width: 405, height: 395 }, [
  "M35 15 L385 35 L388 315 L355 335 L300 352 L245 365 L170 374 L22 371 L15 340 L22 300 L15 250 L22 204 L15 155 L22 105 L15 55 Z",
]);

await maskedCrop("coffee-cup.png", { left: 790, top: 450, width: 235, height: 350 }, [
  "M40 14 C72 1 175 5 204 23 L215 318 C195 342 51 343 31 320 L36 56 Z",
]);

const heroGoodIdeas = await maskedCrop("hero-good-ideas.png", { left: 1000, top: 28, width: 250, height: 245 }, [
  "M16 28 L239 10 L244 231 L28 241 Z",
]);

const heroBuild = await maskedCrop("hero-sticky-note-build.png", { left: 1270, top: 35, width: 220, height: 285 }, [
  "M18 36 L208 43 L213 264 L20 276 Z",
  "M121 0 L159 2 L161 40 L120 39 Z",
]);

const heroBigger = await maskedCrop("hero-sticky-note-bigger-things.png", { left: 1055, top: 300, width: 225, height: 205 }, [
  "M14 16 L215 23 L209 191 L12 184 Z",
]);

await maskedCrop("hero-stars.png", { left: 1110, top: 570, width: 410, height: 230 }, [
  "M225 13 L243 48 L282 52 L252 77 L260 117 L225 97 L190 118 L198 78 L168 53 L208 48 Z",
  "M77 135 L91 162 L120 166 L98 185 L104 216 L77 200 L49 217 L55 185 L33 166 L63 162 Z",
  "M280 133 C302 111 331 114 346 137 C328 158 301 165 280 154 Z",
]);

await maskedCrop("hero-coding-doodle.png", { left: 1320, top: 390, width: 195, height: 165 }, [
  "M21 28 L73 0 L96 20 L47 53 Z",
  "M112 0 L183 43 L166 65 L101 24 Z",
  "M61 103 C93 82 131 86 158 108 C133 134 94 138 61 124 Z",
]);

const probablyCoding = await maskedCrop("about-probably-coding.png", { left: 0, top: 695, width: 285, height: 155 }, [
  "M0 12 L280 0 L282 151 L3 155 Z",
]);

const fuelDoodle = await maskedCrop("about-fuel-doodle.png", { left: 515, top: 640, width: 300, height: 165 }, [
  "M0 12 L295 0 L299 160 L5 165 Z",
]);

await composite("about-doodles.png", 720, 320, [
  { input: probablyCoding, left: 0, top: 28 },
  { input: fuelDoodle, left: 350, top: 28 },
]);

await maskedCrop("always-learning-doodle.png", { left: 680, top: 815, width: 380, height: 190 }, [
  "M11 28 C74 4 313 7 366 30 L375 164 C283 185 109 187 5 160 Z",
]);

await composite("hero-decorative-assets.png", 820, 560, [
  { input: heroBuild, left: 555, top: 0 },
  { input: heroBigger, left: 575, top: 300 },
  { input: heroGoodIdeas, left: 0, top: 50 },
]);

console.log(`Extracted decorative assets to ${outputDir}`);
