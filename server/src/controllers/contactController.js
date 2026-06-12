const ContactMessage = require("../models/ContactMessage");

const createContactMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All contact fields are required" });
    }

    await ContactMessage.create({
      name,
      email,
      subject,
      message,
    });

    res.status(201).json({
      message: "Thanks for reaching out. We will get back to you soon.",
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to send contact message" });
  }
};

module.exports = {
  createContactMessage,
};
