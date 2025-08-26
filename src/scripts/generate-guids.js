import { readFileSync, writeFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";

// Fix __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to your JSON file (fix spelling if needed: movies.json not moveis.json)
const filePath = path.join(__dirname, "../db/movies.json");

// Read existing movie data
const rawData = readFileSync(filePath, "utf-8");
const data = JSON.parse(rawData);

// Replace each movie ID with a GUID
const updatedMovies = data.map((movie) => ({
  ...movie,
  id: uuidv4(),
}));

// Write back the updated JSON
writeFileSync("uuid-movies.json", JSON.stringify(updatedMovies, null, 2));
