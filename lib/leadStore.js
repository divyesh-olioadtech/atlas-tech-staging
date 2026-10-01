import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "logs", "leads.json");

export function saveLead(lead) {
  let existing = [];

  if (fs.existsSync(filePath)) {
    existing = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  }

  existing.push(lead);
  fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));
}
