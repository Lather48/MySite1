"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "@/store/useStore";
import { useState } from "react";

export default function Contact() {
    const { setCursorVariant } = useStore();
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill out all fields.");
            return;
        }

        setStatus("loading");

        try {
            const response = await fetch("https://formsubmit.co/ajax/robinlather20@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    _subject: `New Portfolio Message from ${formData.name}`,
                    email: formData.email,
                    name: formData.name,
                    message: formData.message,
                    _template: "table"
                })
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                // Reset success message after a few seconds
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section
            id="contact"
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "6rem 2rem",
                position: "relative",
                zIndex: 10
            }}
        >
            <div style={{ maxWidth: "800px", width: "100%" }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-panel"
                    style={{ padding: "4rem", textAlign: "center" }}
                >
                    <h2 className="font-ndot text-neon" style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                        INITIATE CONTACT
                    </h2>
                    <p style={{ color: "var(--foreground)", opacity: 0.7, marginBottom: "3rem", fontSize: "1.1rem" }}>
                        Ready to build the next award-winning experience? Send a transmission below.
                    </p>

                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem", width: "100%" }}>
                        <div style={{ position: "relative", width: "100%" }}>
                            <motion.input
                                whileFocus={{ scale: 1.02, borderColor: "var(--accent)", boxShadow: "0 0 20px rgba(255, 0, 60, 0.4)" }}
                                whileHover={{ scale: 1.01, boxShadow: "0 0 10px rgba(255, 0, 60, 0.2)" }}
                                type="text"
                                placeholder="IDENTIFICATION (NAME)"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                style={{
                                    width: "100%",
                                    background: "rgba(0,0,0,0.4)",
                                    border: "1px solid var(--glass-border)",
                                    padding: "1.8rem",
                                    borderRadius: "16px",
                                    color: "var(--foreground)",
                                    fontFamily: "var(--font-ndot)",
                                    fontSize: "1.2rem",
                                    outline: "none",
                                    transition: "all 0.3s ease",
                                    backdropFilter: "blur(10px)",
                                    boxSizing: "border-box",
                                    display: "block"
                                }}
                                className="contact-input"
                                onMouseEnter={() => setCursorVariant('hover')}
                                onMouseLeave={() => setCursorVariant('default')}
                            />
                        </div>

                        <div style={{ position: "relative", width: "100%" }}>
                            <motion.input
                                suppressHydrationWarning
                                whileFocus={{ scale: 1.02, borderColor: "var(--accent)", boxShadow: "0 0 20px rgba(255, 0, 60, 0.4)" }}
                                whileHover={{ scale: 1.01, boxShadow: "0 0 10px rgba(255, 0, 60, 0.2)" }}
                                type="email"
                                placeholder="COMM LINK (EMAIL)"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                                style={{
                                    width: "100%",
                                    background: "rgba(0,0,0,0.4)",
                                    border: "1px solid var(--glass-border)",
                                    padding: "1.8rem",
                                    borderRadius: "16px",
                                    color: "var(--foreground)",
                                    fontFamily: "var(--font-ndot)",
                                    fontSize: "1.2rem",
                                    outline: "none",
                                    transition: "all 0.3s ease",
                                    backdropFilter: "blur(10px)",
                                    boxSizing: "border-box",
                                    display: "block"
                                }}
                                className="contact-input"
                                onMouseEnter={() => setCursorVariant('hover')}
                                onMouseLeave={() => setCursorVariant('default')}
                            />
                        </div>

                        <div style={{ position: "relative", width: "100%" }}>
                            <motion.textarea
                                whileFocus={{ scale: 1.02, borderColor: "var(--accent)", boxShadow: "0 0 20px rgba(255, 0, 60, 0.4)" }}
                                whileHover={{ scale: 1.01, boxShadow: "0 0 10px rgba(255, 0, 60, 0.2)" }}
                                placeholder="TRANSMISSION DATA (MESSAGE)"
                                rows={8}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                                style={{
                                    width: "100%",
                                    background: "rgba(0,0,0,0.4)",
                                    border: "1px solid var(--glass-border)",
                                    padding: "1.8rem",
                                    borderRadius: "16px",
                                    color: "var(--foreground)",
                                    fontFamily: "var(--font-ndot)",
                                    fontSize: "1.2rem",
                                    outline: "none",
                                    resize: "none",
                                    transition: "all 0.3s ease",
                                    backdropFilter: "blur(10px)",
                                    boxSizing: "border-box",
                                    display: "block"
                                }}
                                className="contact-input"
                                onMouseEnter={() => setCursorVariant('hover')}
                                onMouseLeave={() => setCursorVariant('default')}
                            />
                        </div>

                        <AnimatePresence>
                            {status === "success" && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    style={{
                                        color: "#00ff88",
                                        fontFamily: "var(--font-ndot)",
                                        padding: "1rem",
                                        background: "rgba(0, 255, 136, 0.1)",
                                        border: "1px solid #00ff88",
                                        borderRadius: "8px"
                                    }}
                                >
                                    [✓] TRANSMISSION SUCCESSFUL
                                </motion.div>
                            )}
                            {status === "error" && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    style={{
                                        color: "var(--accent)",
                                        fontFamily: "var(--font-ndot)",
                                        padding: "1rem",
                                        background: "rgba(255, 0, 60, 0.1)",
                                        border: "1px solid var(--accent)",
                                        borderRadius: "8px"
                                    }}
                                >
                                    [✗] TRANSMISSION FAILED
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <motion.button
                            type="submit"
                            disabled={status === "loading" || status === "success"}
                            whileHover={{
                                scale: status !== "loading" ? 1.02 : 1,
                                backgroundColor: "var(--accent)",
                                color: "#000",
                                boxShadow: "0 0 30px rgba(255,0,60,0.5)"
                            }}
                            whileTap={{ scale: status !== "loading" ? 0.98 : 1 }}
                            style={{
                                width: "100%",
                                background: status === "loading" ? "var(--glass-border)" : "transparent",
                                border: `2px solid ${status === "loading" ? "transparent" : "var(--accent)"}`,
                                color: status === "loading" ? "var(--background)" : "var(--accent)",
                                padding: "1.5rem",
                                borderRadius: "12px",
                                fontFamily: "var(--font-ndot)",
                                fontSize: "1.2rem",
                                letterSpacing: "2px",
                                cursor: status === "loading" ? "wait" : "none",
                                marginTop: "1rem",
                                transition: "all 0.3s ease",
                                opacity: status === "success" ? 0.5 : 1,
                                position: "relative",
                                overflow: "hidden"
                            }}
                            onMouseEnter={() => setCursorVariant('hover')}
                            onMouseLeave={() => setCursorVariant('default')}
                        >
                            {status === "loading" ? "UPLOADING DATA..." : status === "success" ? "LINK ESTABLISHED" : "SEND TRANSMISSION"}
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
