import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const dir = path.join(process.cwd(), "public/imageaja");
  try {
    const files = fs.readdirSync(dir).filter(file =>
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    );
    res.status(200).json(files);
  } catch (err) {
    res.status(500).json({ error: "Gagal baca folder", detail: err.message });
  }
}
