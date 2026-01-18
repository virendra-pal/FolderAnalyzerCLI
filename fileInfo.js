#!/usr/bin/env node

/**
 * Folder Analyzer CLI
 * Counts total files, total folders, and total size of a directory.
 * Uses only Node.js standard libraries.
 */

const fs = require("fs");
const path = require("path");

// Validate arguments
if (process.argv.length !== 3) {
  console.log("Usage: node fileInfo.js <folder_path>");
  process.exit(1);
}

const targetPath = process.argv[2];

if (!fs.existsSync(targetPath)) {
  console.error("Error: The specified path does not exist.");
  process.exit(1);
}

let fileCount = 0;
let folderCount = 0;
let totalSize = 0;

function traverse(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isFile()) {
      fileCount++;
      totalSize += fs.statSync(fullPath).size;
    } else if (entry.isDirectory()) {
      folderCount++;
      traverse(fullPath);
    }
  }
}

try {
  traverse(targetPath);

  console.log("Folder Analysis Result");
  console.log("----------------------");
  console.log("Total files   :", fileCount);
  console.log("Total folders :", folderCount);
  console.log(
    "Total size    :",
    (totalSize / (1024 * 1024)).toFixed(2),
    "MB"
  );
} catch (err) {
  console.error("Error while reading directory:", err.message);
  process.exit(1);
}