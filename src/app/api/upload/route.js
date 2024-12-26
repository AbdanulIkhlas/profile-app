import fs from "fs";
import path from "path";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadDir = path.join(process.cwd(), "public/photo"); // Folder untuk menyimpan file

const handler = (req, res) => {
  const form = new formidable.IncomingForm();
  form.uploadDir = uploadDir;
  form.keepExtensions = true;

  form.parse(req, (err, fields, files) => {
    if (err) {
      res.status(500).json({ error: "Failed to upload file." });
      return;
    }

    const file = files.profilePic[0]; // Mengambil file yang diupload
    const filePath = `/photo/${file.newFilename}`; // Path file yang akan digunakan
    res.status(200).json({ filePath }); // Kirimkan path file untuk digunakan di frontend
  });
};

export default handler;
