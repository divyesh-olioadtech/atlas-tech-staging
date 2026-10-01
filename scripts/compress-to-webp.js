const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const targetDir = process.argv[2];

if (!targetDir) {
  console.log("Usage: node scripts/compress-to-webp.js <folder-path>");
  console.log("Example: node scripts/compress-to-webp.js public/images/mabp");
  process.exit(1);
}

const fullPath = path.resolve(targetDir);

if (!fs.existsSync(fullPath)) {
  console.error(`Directory not found: ${fullPath}`);
  process.exit(1);
}

const files = fs.readdirSync(fullPath).filter((f) => /\.(png|jpe?g)$/i.test(f));

if (files.length === 0) {
  console.log("No PNG/JPG files found in", fullPath);
  process.exit(0);
}

console.log(`Converting ${files.length} images in ${fullPath}...`);

(async () => {
  for (const file of files) {
    const inputPath = path.join(fullPath, file);
    const outputName = path.parse(file).name + ".webp";
    const outputPath = path.join(fullPath, outputName);

    try {
      await sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);
      fs.unlinkSync(inputPath);
      console.log(`  ${file} -> ${outputName}`);
    } catch (err) {
      console.error(`  Failed: ${file} - ${err.message}`);
    }
  }
  console.log("Done!");
})();
