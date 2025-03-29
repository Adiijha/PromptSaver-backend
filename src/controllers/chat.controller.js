import Chat from "../models/chat.js";

// Save chat
export const saveChat = async (req, res) => {
  try {
    const { query, response } = req.body;

    if (!query || !response) {
      return res.status(400).json({ success: false, message: "Query and Response are required." });
    }

    const chat = new Chat({ query, response });
    await chat.save();

    res.status(201).json({ success: true, message: "Chat saved successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get saved chats
export const getSavedChats = async (req, res) => {
  try {
    const chats = await Chat.find().sort({ createdAt: -1 });
    res.json(chats);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
