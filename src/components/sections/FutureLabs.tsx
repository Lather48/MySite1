"use client";

import { motion } from "framer-motion";
import { useStore } from "@/store/useStore";
import { Cpu, Zap, LibraryBig } from "lucide-react";

export default function FutureLabs() {
    const { setCursorVariant } = useStore();

    return (
        <section
            id="future"
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "6rem 2rem",
                position: "relative",
                zIndex: 10
            }}
        >
            <div style={{ maxWidth: "1200px", width: "100%", textAlign: "center" }}>
                <h2
                    className="font-ndot text-neon"
                    style={{ fontSize: "3rem", marginBottom: "1rem" }}
                >
                    FUTURE LABS
                </h2>
                <p style={{ color: "var(--foreground)", opacity: 0.7, fontSize: "1.2rem", marginBottom: "4rem" }}>
                    Demos of incoming AI-powered education methodologies.
                </p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "2rem",
                    }}
                >
                    {[
                        { icon: <LibraryBig size={40} />, title: "AI Lesson Planner", desc: "Instantly maps local curriculums to generated pacing guides." },
                        { icon: <Zap size={40} />, title: "Smart Assessment", desc: "Adapts quiz difficulty in real-time based on live class responses." },
                        { icon: <Cpu size={40} />, title: "Personalized Paths", desc: "Machine learning model predicts individual student hurdles." }
                    ].map((feat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            onMouseEnter={() => setCursorVariant('hover')}
                            onMouseLeave={() => setCursorVariant('default')}
                            className="glass-panel"
                            style={{
                                padding: "3rem 2rem",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "1.5rem",
                                cursor: "none",
                                position: "relative",
                                overflow: "hidden"
                            }}
                        >
                            <div style={{ color: "var(--accent)", zIndex: 1 }}>{feat.icon}</div>
                            <h3 className="font-nsans" style={{ fontSize: "1.4rem", color: "var(--foreground)", zIndex: 1 }}>{feat.title}</h3>
                            <p style={{ color: "var(--foreground)", opacity: 0.7, lineHeight: 1.6, zIndex: 1 }}>
                                {feat.desc}
                            </p>

                            {/* Animated Background Gradient for that "Future" feel */}
                            <motion.div
                                style={{
                                    position: "absolute",
                                    top: "-50%",
                                    left: "-50%",
                                    width: "200%",
                                    height: "200%",
                                    background: "radial-gradient(circle, rgba(255,0,60,0.1) 0%, transparent 60%)",
                                    zIndex: 0
                                }}
                                animate={{
                                    rotate: [0, 360]
                                }}
                                transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
