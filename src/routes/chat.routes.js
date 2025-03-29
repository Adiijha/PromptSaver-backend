import express from "express";
import { saveChat, getSavedChats } from "../controllers/chat.controller.js";

const router = express.Router();

router.post("/save", saveChat);
router.get("/saved", getSavedChats);

export default router;
