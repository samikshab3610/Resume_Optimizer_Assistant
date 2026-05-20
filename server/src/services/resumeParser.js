const { PDFParse } = require("pdf-parse");

const extractResumeText = async ({ file, resumeText }) => {
  if (resumeText && resumeText.trim()) {
    return resumeText.trim();
  }

  if (!file) {
    return "";
  }

  if (file.mimetype === "application/pdf") {
    const parser = new PDFParse({ data: file.buffer });

    try {
      const parsedPdf = await parser.getText();
      return parsedPdf.text.trim();
    } finally {
      await parser.destroy();
    }
  }

  if (file.mimetype === "text/plain") {
    return file.buffer.toString("utf-8").trim();
  }

  throw new Error("Unsupported file type. Please upload a PDF or text file.");
};

module.exports = {
  extractResumeText,
};
