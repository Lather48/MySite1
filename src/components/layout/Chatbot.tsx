"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send } from "lucide-react";
import React, { useState } from "react";
import { useStore } from "@/store/useStore";

interface Message {
    role: "user" | "ai";
    content: string;
}

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [inputText, setInputText] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        { role: "ai", content: "Hello! I'm Robin's AI Teaching Assistant. How can I help you learn about AI in the classroom today?" }
    ]);
    const { setCursorVariant } = useStore();
    const chatEndRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleMockResponse = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        const userText = inputText.trim();
        setInputText("");
        setMessages(prev => [...prev, { role: "user", content: userText }]);

        setTimeout(() => {
            const txt = userText.toLowerCase();
            let aiResponse = "";

            if (txt.includes("cambridge")) {
                aiResponse = "At Saint MSG Glorious International School, Robin integrates AI into the Cambridge Curriculum to enhance logical thinking and coding skills.";
            } else if (txt.includes("python") || txt.includes("code") || txt.includes("program")) {
                aiResponse = "Robin teaches Python utilizing interactive platforms like Replit and Google Colab, making coding accessible and fun for students.";
            } else if (txt.includes("ai") || txt.includes("artificial intelligence")) {
                aiResponse = "Robin is highly focused on AI in Education! He uses LLMs and local models to create adaptive learning pathways specific to each student's needs.";
            } else if (txt.includes("who is robin") || txt.includes("experience") || txt.includes("background")) {
                aiResponse = "Robin is an ICT Educator with over 3 years of experience specializing in Smart Classrooms, currently seeking to build the next generation of EdTech.";
            } else if (txt.includes("contact") || txt.includes("email") || txt.includes("hire")) {
                aiResponse = "You can scroll down to the 'Initiate Contact' form or email Robin directly at robinlather20@gmail.com!";
            } else {
                aiResponse = `That's an interesting question about "${userText}". As an AI TA, my core focus is Robin's ICT methodologies, but I always encourage students to research deeply!`;
            }

            setMessages(prev => [...prev, { role: "ai", content: aiResponse }]);
        }, 800 + Math.random() * 600); // Simulated thinking time
    };

    return (
        <div style={{ position: "fixed", bottom: "2rem", right: "2rem", zIndex: 1000 }}>
            <AnimatePresence>
                {isOpen ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="glass-panel"
                        style={{
                            width: "350px",
                            height: "500px",
                            display: "flex",
                            flexDirection: "column",
                            marginBottom: "1rem",
                            overflow: "hidden"
                        }}
                    >
                        <div style={{ padding: "1rem", borderBottom: "1px solid var(--glass-border)", display: "flex", justifyContent: "space-between", alignItems: "center", background: "rgba(255,0,60,0.1)" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                <Bot color="var(--accent)" />
                                <span className="font-ndot" style={{ fontSize: "1.1rem" }}>TA-BOT OS</span>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                style={{ background: "transparent", border: "none", color: "white", cursor: "pointer" }}
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div style={{ flex: 1, padding: "1rem", overflowY: "auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
                            {messages.map((msg, i) => (
                                <div key={i} style={{ alignSelf: msg.role === 'ai' ? 'flex-start' : 'flex-end', maxWidth: "80%" }}>
                                    <div style={{
                                        padding: "0.8rem 1rem",
                                        borderRadius: "12px",
                                        background: msg.role === 'ai' ? "var(--glass-bg)" : "var(--accent)",
                                        color: msg.role === 'ai' ? "var(--foreground)" : "#000",
                                        border: msg.role === 'ai' ? "1px solid var(--glass-border)" : "none",
                                        fontSize: "0.9rem",
                                        lineHeight: 1.4
                                    }}>
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                            <div ref={chatEndRef} />
                        </div>

                        <form onSubmit={handleMockResponse} style={{ padding: "1rem", borderTop: "1px solid var(--glass-border)", display: "flex", gap: "0.5rem" }}>
                            <input
                                type="text"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                placeholder="Ask AI a question..."
                                onMouseEnter={() => setCursorVariant('hover')}
                                onMouseLeave={() => setCursorVariant('default')}
                                style={{
                                    flex: 1,
                                    padding: "0.8rem",
                                    background: "rgba(255,255,255,0.05)",
                                    border: "1px solid var(--glass-border)",
                                    color: "var(--foreground)",
                                    borderRadius: "8px",
                                    outline: "none",
                                    fontFamily: "var(--font-sans)",
                                    fontSize: "0.9rem"
                                }}
                            />
                            <button
                                type="submit"
                                onMouseEnter={() => setCursorVariant('hover')}
                                onMouseLeave={() => setCursorVariant('default')}
                                style={{
                                    padding: "0.8rem",
                                    background: "transparent",
                                    border: "1px solid var(--accent)",
                                    borderRadius: "8px",
                                    cursor: "none",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <Send size={16} style={{ color: "var(--accent)" }} />
                            </button>
                        </form>
                    </motion.div>
                ) : (
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(true)}
                        onMouseEnter={() => setCursorVariant('hover')}
                        onMouseLeave={() => setCursorVariant('default')}
                        style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "30px",
                            background: "var(--accent)",
                            border: "none",
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "none",
                            boxShadow: "0 0 20px rgba(255, 0, 60, 0.4)"
                        }}
                    >
                        <Bot size={28} />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}
