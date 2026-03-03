"use client";

import { motion, Variants } from "framer-motion";
import { useStore } from "@/store/useStore";

export default function Hero() {
    const { setCursorVariant } = useStore();

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.5 }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 10 }
        }
    };

    return (
        <section
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "0 2rem",
                position: "relative"
            }}
        >
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ textAlign: "center", zIndex: 10 }}
            >
                <motion.p
                    variants={itemVariants}
                    style={{
                        fontSize: "1.2rem",
                        letterSpacing: "0.2em",
                        marginBottom: "1rem",
                        color: "var(--foreground)",
                        opacity: 0.7
                    }}
                    className="font-sans"
                >
                    WELCOME TO THE FUTURE
                </motion.p>

                <motion.h1
                    variants={itemVariants}
                    className="font-ndot text-neon"
                    style={{
                        fontSize: " clamp(3rem, 8vw, 8rem)",
                        lineHeight: 1.1,
                        margin: 0
                    }}
                    onMouseEnter={() => setCursorVariant('hover')}
                    onMouseLeave={() => setCursorVariant('default')}
                >
                    ROBIN <br />
                    LATHER
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    style={{
                        fontSize: "1.5rem",
                        marginTop: "1rem",
                        color: "var(--accent)",
                        opacity: 0.9,
                        fontFamily: "var(--font-sans)",
                        fontWeight: "bold",
                        letterSpacing: "0.1em"
                    }}
                >
                    ICT & AI EDUCATOR
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    style={{ marginTop: "3rem" }}
                >
                    <a
                        href="#about"
                        style={{
                            padding: "1rem 3rem",
                            background: "transparent",
                            border: "1px solid var(--glass-border)",
                            color: "var(--foreground)",
                            fontFamily: "var(--font-sans)",
                            textDecoration: "none",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            borderRadius: "30px",
                            cursor: "none",
                            transition: "all 0.3s ease",
                        }}
                        className="glass-panel"
                        onMouseEnter={(e) => {
                            setCursorVariant('hover');
                            e.currentTarget.style.borderColor = "var(--accent)";
                        }}
                        onMouseLeave={(e) => {
                            setCursorVariant('default');
                            e.currentTarget.style.borderColor = "var(--glass-border)";
                        }}
                    >
                        Explore
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
