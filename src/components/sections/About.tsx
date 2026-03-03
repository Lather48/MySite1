"use client";

import { motion } from "framer-motion";
import { useStore } from "@/store/useStore";
import { useEffect, useState } from "react";

export default function About() {
    const { theme } = useStore();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section
            id="about"
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                padding: "6rem 2rem",
                position: "relative",
                zIndex: 10
            }}
        >
            <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="glass-panel"
                    style={{
                        padding: "4rem",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "4rem"
                    }}
                >
                    <div>
                        <h2
                            className="font-ndot text-neon"
                            style={{ fontSize: "3rem", marginBottom: "2rem" }}
                        >
                            ABOUT ME
                        </h2>
                        <div
                            style={{
                                height: "4px",
                                width: "60px",
                                background: "var(--accent)",
                                marginBottom: "2rem"
                            }}
                        />
                        {mounted && (
                            <p
                                style={{
                                    fontSize: "1.2rem",
                                    lineHeight: 1.8,
                                    color: "var(--foreground)",
                                    opacity: 0.8
                                }}
                            >
                                I am an enthusiastic ICT educator with over 3 years of
                                experience blending AI tools and modern classroom techniques.
                                <br /><br />
                                Specializing in creating smart, interactive spaces, I strive to
                                innovate traditional learning methods using cutting-edge technologies.
                            </p>
                        )}
                    </div>

                    <div style={{ display: "flex", gap: "2rem", flexDirection: "column", justifyContent: "center" }}>
                        {[
                            { title: "EXPERIENCE", text: "3+ Years elevating ICT & AI in education." },
                            { title: "FOCUS", text: "AI in Education, Smart Classrooms, EdTech Tooling." },
                            { title: "CURRENT", text: "Curriculum Integration & AI Project Mentoring." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                                style={{
                                    padding: "1.5rem",
                                    background: "rgba(255, 255, 255, 0.02)",
                                    border: "1px solid var(--glass-border)",
                                    borderRadius: "12px",
                                    transition: "all 0.3s ease"
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateX(-10px)";
                                    e.currentTarget.style.borderColor = "var(--accent)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateX(0)";
                                    e.currentTarget.style.borderColor = "var(--glass-border)";
                                }}
                            >
                                <h3 className="font-ndot" style={{ color: "var(--accent)", marginBottom: "0.5rem", letterSpacing: "1px" }}>{item.title}</h3>
                                <p style={{ color: "var(--foreground)", opacity: 0.7 }}>{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Timeline Section */}
                <div style={{ marginTop: "6rem" }}>
                    <h3 className="font-ndot text-neon" style={{ fontSize: "2rem", marginBottom: "3rem", textAlign: "center" }}>
                        TEACHING TIMELINE
                    </h3>
                    <div style={{ position: "relative", paddingLeft: "2rem", borderLeft: "2px solid var(--glass-border)" }}>
                        {[
                            {
                                role: "ICT Teacher",
                                dates: "1.5 Years",
                                school: "Saint MSG Glorious International School, Sirsa",
                                desc: "Cambridge Curriculum. Spearheaded AI & EdTech integration, developing intelligent tools for classroom instruction."
                            },
                            {
                                role: "ICT Teacher",
                                dates: "1.5 Years",
                                school: "MRCR Public School, Julana",
                                desc: "Led the foundational computer science curriculum, introducing early-stage automation and logic programming to students."
                            }
                        ].map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: i * 0.2 }}
                                style={{
                                    position: "relative",
                                    marginBottom: i === 1 ? 0 : "4rem",
                                    paddingLeft: "2rem"
                                }}
                            >
                                <div style={{
                                    position: "absolute",
                                    left: "-2.6rem",
                                    top: "0",
                                    width: "20px",
                                    height: "20px",
                                    borderRadius: "50%",
                                    background: "var(--accent)",
                                    border: "4px solid var(--background)"
                                }} />
                                <h4 className="font-sans" style={{ fontSize: "1.5rem", fontWeight: "bold", color: "var(--foreground)" }}>{exp.role}</h4>
                                <span className="font-ndot text-neon" style={{ fontSize: "1rem" }}>{exp.dates}</span>
                                <h5 style={{ fontSize: "1.2rem", marginTop: "0.5rem", color: "var(--foreground)", opacity: 0.9 }}>{exp.school}</h5>
                                <p style={{ marginTop: "1rem", color: "var(--foreground)", opacity: 0.7, lineHeight: 1.6 }}>{exp.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
