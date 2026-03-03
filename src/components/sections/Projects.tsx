"use client";

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useStore } from "@/store/useStore";
import React, { useState } from "react";
import { X } from "lucide-react";

type ProjectCategory = "ALL" | "AI" | "AUTOMATION" | "CLASSROOM TOOLS";

interface ProjectData {
    title: string;
    category: ProjectCategory;
    desc: string;
    details: string;
}

const TiltCard = ({
    project,
    onClick
}: {
    project: ProjectData;
    onClick: () => void;
}) => {
    const { setCursorVariant } = useStore();
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setCursorVariant('default');
    };

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: 1000,
                height: "100%",
                cursor: "pointer"
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => setCursorVariant('project')}
            onClick={onClick}
            className="glass-panel"
        >
            <div
                style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d",
                    width: "100%",
                    height: "100%",
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem"
                }}
            >
                <div style={{ transform: "translateZ(75px)", background: "var(--accent)", width: "40px", height: "4px", borderRadius: "2px" }} />
                <span style={{ transform: "translateZ(60px)", fontSize: "0.8rem", color: "var(--accent)", letterSpacing: "1px" }}>
                    {project.category}
                </span>
                <h3 className="font-ndot" style={{ fontSize: "1.5rem", transform: "translateZ(50px)", color: "var(--foreground)" }}>
                    {project.title}
                </h3>
                <p style={{ transform: "translateZ(25px)", fontSize: "0.9rem", color: "var(--foreground)", opacity: 0.7 }}>
                    {project.desc}
                </p>
            </div>
        </motion.div>
    );
};

export default function Projects() {
    const [filter, setFilter] = useState<ProjectCategory>("ALL");
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

    const projects: ProjectData[] = [
        {
            title: "Smart Assessment Generator",
            category: "AI",
            desc: "LLM-powered tool to instantly create quizzes localized to Cambridge curriculum standards.",
            details: "Utilized OpenAI API to map standard syllabus requirements against auto-generated MCQs and short-answer questions. Saved teachers ~4 hours a week in manual test creation."
        },
        {
            title: "Automated Attendance Systems",
            category: "AUTOMATION",
            desc: "Biometric and network-based hybrid attendance logger for lab periods.",
            details: "Built a Python-based logger leveraging local network pings and an entry scanner to cross-verify student laboratory presence automatically."
        },
        {
            title: "Interactive Logic Simulator",
            category: "CLASSROOM TOOLS",
            desc: "Visual drag-and-drop boolean logic gate simulator for middle schoolers.",
            details: "A React and Canvas based playground where students connect AND/OR/NOT gates to solve puzzle scenarios. Deployed to 200+ students across multiple grades."
        },
        {
            title: "AI Project Mentorship Dashboard",
            category: "AI",
            desc: "Tracking system for student-led AI science projects with milestone predictions.",
            details: "Dashboard visualizing student progress globally across the school. Used simple regression to flag projects that might miss science fair deadlines."
        },
    ];

    const filteredProjects = filter === "ALL"
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section
            id="projects"
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
            <div style={{ maxWidth: "1200px", width: "100%" }}>
                <h2
                    className="font-ndot text-neon"
                    style={{ fontSize: "3rem", marginBottom: "2rem", textAlign: "center" }}
                >
                    AI & EDTECH SHOWCASE
                </h2>

                {/* Filter Buttons */}
                <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "4rem", flexWrap: "wrap" }}>
                    {["ALL", "AI", "AUTOMATION", "CLASSROOM TOOLS"].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat as ProjectCategory)}
                            style={{
                                padding: "0.5rem 1.5rem",
                                background: filter === cat ? "var(--accent)" : "transparent",
                                border: `1px solid ${filter === cat ? "var(--accent)" : "var(--glass-border)"}`,
                                color: filter === cat ? "#000" : "var(--foreground)",
                                borderRadius: "30px",
                                cursor: "none",
                                fontFamily: "var(--font-sans)",
                                fontSize: "0.9rem",
                                transition: "all 0.3s ease"
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div
                    layout
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "2rem",
                        perspective: "2000px"
                    }}
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((p) => (
                            <motion.div
                                key={p.title}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4 }}
                                style={{ height: "350px" }}
                            >
                                <TiltCard project={p} onClick={() => setSelectedProject(p)} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Detail Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100vw",
                            height: "100vh",
                            background: "rgba(0,0,0,0.8)",
                            backdropFilter: "blur(10px)",
                            zIndex: 9999,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "2rem"
                        }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="glass-panel"
                            style={{
                                maxWidth: "600px",
                                width: "100%",
                                padding: "3rem",
                                position: "relative"
                            }}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                style={{
                                    position: "absolute",
                                    top: "1.5rem",
                                    right: "1.5rem",
                                    background: "transparent",
                                    border: "none",
                                    color: "var(--foreground)",
                                    cursor: "none"
                                }}
                            >
                                <X size={24} />
                            </button>
                            <span style={{ color: "var(--accent)", fontWeight: "bold", letterSpacing: "1px", fontSize: "0.9rem" }}>
                                {selectedProject.category}
                            </span>
                            <h2 className="font-ndot" style={{ fontSize: "2rem", marginTop: "1rem", marginBottom: "1.5rem" }}>
                                {selectedProject.title}
                            </h2>
                            <p style={{ fontSize: "1.1rem", lineHeight: 1.6, opacity: 0.9 }}>
                                {selectedProject.details}
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
