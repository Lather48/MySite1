"use client";

import { motion } from "framer-motion";
import { useStore } from "@/store/useStore";
import { BookOpen, Bot, BrainCircuit, Code, LineChart, Notebook, Sparkles, UserCheck } from "lucide-react";
import React, { useState } from "react";

const skills = [
    { name: "LLMs / Generative AI", icon: <BrainCircuit size={32} />, category: "AI", x: -120, y: -80 },
    { name: "Python Automation", icon: <Bot size={32} />, category: "ICT", x: 120, y: -50 },
    { name: "React & Web", icon: <Code size={32} />, category: "ICT", x: 0, y: -160 },
    { name: "Data Analytics", icon: <LineChart size={32} />, category: "AI", x: -160, y: 60 },
    { name: "Cambridge Curriculum", icon: <BookOpen size={32} />, category: "EdTech", x: 140, y: 120 },
    { name: "Smart Assessments", icon: <Sparkles size={32} />, category: "EdTech", x: 80, y: -150 },
    { name: "LMS Integration", icon: <Notebook size={32} />, category: "EdTech", x: -80, y: 140 },
    { name: "Student Engagement", icon: <UserCheck size={32} />, category: "EdTech", x: 0, y: 80 },
];

export default function Skills() {
    const { setCursorVariant } = useStore();
    const [activeTab, setActiveTab] = useState<"Skills" | "Metrics">("Skills");

    return (
        <section
            id="skills"
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
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                style={{ width: "100%", maxWidth: "1200px", textAlign: "center" }}
            >
                <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginBottom: "4rem" }}>
                    <h2
                        onClick={() => setActiveTab("Skills")}
                        className="font-ndot"
                        style={{
                            fontSize: "3rem",
                            cursor: "pointer",
                            color: activeTab === "Skills" ? "var(--accent)" : "var(--foreground)",
                            opacity: activeTab === "Skills" ? 1 : 0.5,
                            transition: "all 0.3s"
                        }}
                    >
                        EDTECH SKILLS
                    </h2>
                    <h2
                        onClick={() => setActiveTab("Metrics")}
                        className="font-ndot"
                        style={{
                            fontSize: "3rem",
                            cursor: "pointer",
                            color: activeTab === "Metrics" ? "var(--accent)" : "var(--foreground)",
                            opacity: activeTab === "Metrics" ? 1 : 0.5,
                            transition: "all 0.3s"
                        }}
                    >
                        IMPACT METRICS
                    </h2>
                </div>

                {activeTab === "Skills" ? (
                    <div style={{ position: "relative", height: "500px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {skills.map((skill, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 0, y: 0 }}
                                whileInView={{ opacity: 1, x: skill.x, y: skill.y }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    type: "spring",
                                    stiffness: 50,
                                    damping: 10,
                                    delay: i * 0.1
                                }}
                                style={{
                                    position: "absolute",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: "1.5rem",
                                    background: "var(--glass-bg)",
                                    border: "1px solid var(--glass-border)",
                                    backdropFilter: "blur(10px)",
                                    borderRadius: "20px",
                                    width: "140px",
                                    height: "140px",
                                    gap: "0.5rem",
                                    cursor: "none",
                                    color: "var(--foreground)"
                                }}
                                animate={{
                                    y: [skill.y, skill.y - 15, skill.y],
                                    transition: {
                                        duration: 3 + (i % 3),
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }}
                                onMouseEnter={(e) => {
                                    setCursorVariant('hover');
                                    e.currentTarget.style.borderColor = "var(--accent)";
                                    e.currentTarget.style.color = "var(--accent)";
                                }}
                                onMouseLeave={(e) => {
                                    setCursorVariant('default');
                                    e.currentTarget.style.borderColor = "var(--glass-border)";
                                    e.currentTarget.style.color = "var(--foreground)";
                                }}
                            >
                                <span style={{ position: "absolute", top: 10, left: 10, fontSize: "0.6rem", color: "var(--accent)" }}>{skill.category}</span>
                                {skill.icon}
                                <span className="font-nsans" style={{ fontSize: "0.8rem", fontWeight: "bold", textAlign: "center", marginTop: "0.5rem" }}>
                                    {skill.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="glass-panel"
                        style={{ padding: "4rem", textAlign: "left" }}
                    >
                        <h3 className="font-ndot" style={{ fontSize: "2rem", marginBottom: "2rem" }}>Student Outcomes Tracker</h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                            {[
                                { label: "Engagement in ICT Modules", value: 92, stat: "+24% YoY" },
                                { label: "AI Project Completion Rate", value: 85, stat: "120+ Projects" },
                                { label: "Logic Mapping Improvement", value: 78, stat: "Post-Simulation" }
                            ].map((metric, i) => (
                                <div key={i}>
                                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                                        <span style={{ fontWeight: "bold", fontSize: "1.1rem" }}>{metric.label}</span>
                                        <span style={{ color: "var(--accent)" }}>{metric.stat}</span>
                                    </div>
                                    <div style={{ width: "100%", height: "8px", background: "rgba(255,255,255,0.1)", borderRadius: "4px", overflow: "hidden" }}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${metric.value}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                                            style={{ height: "100%", background: "var(--accent)" }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </motion.div>
        </section>
    );
}
