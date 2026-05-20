const { PDFParse } = require("pdf-parse");
const mammoth = require("mammoth");
const Tesseract = require("tesseract.js");

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

    if (
        file.mimetype ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
        const result = await mammoth.extractRawText({ buffer: file.buffer });
        return result.value.trim();
    }

    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        const result = await Tesseract.recognize(file.buffer, "eng");
        return result.data.text.trim();
    }

    throw new Error("Unsupported file type. Please upload a PDF or text file.");
};

module.exports = {
    extractResumeText,
};
