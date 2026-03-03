"use client";

import { motion } from "framer-motion";
import { useStore } from "@/store/useStore";
import { Volume2, VolumeX, Moon, Sun, Download } from "lucide-react";

export default function OverlayUI() {
    const { theme, toggleTheme, soundEnabled, toggleSound, setCursorVariant } = useStore();

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                padding: "2rem",
                zIndex: 100,
                pointerEvents: "none",
                gap: "1rem"
            }}
        >
            <button
                onClick={toggleTheme}
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
                style={{
                    pointerEvents: "auto",
                    background: "var(--glass-bg)",
                    border: "1px solid var(--glass-border)",
                    color: "var(--foreground)",
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "none",
                    backdropFilter: "blur(10px)"
                }}
            >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
                onClick={toggleSound}
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
                style={{
                    pointerEvents: "auto",
                    background: "var(--glass-bg)",
                    border: "1px solid var(--glass-border)",
                    color: "var(--foreground)",
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "none",
                    backdropFilter: "blur(10px)"
                }}
            >
                {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>

            <a
                href="/resume.pdf"
                target="_blank"
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
                style={{
                    pointerEvents: "auto",
                    background: "var(--accent)",
                    border: "none",
                    color: "#fff",
                    padding: "0 1.5rem",
                    height: "48px",
                    borderRadius: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    cursor: "none",
                    fontFamily: "var(--font-ndot)",
                    textDecoration: "none",
                    fontWeight: "bold",
                    fontSize: "0.9rem"
                }}
            >
                <Download size={16} />
                RESUME
            </a>
        </motion.div>
    );
}
