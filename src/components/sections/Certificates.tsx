"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Award, ShieldCheck, X } from "lucide-react";
import { useState } from "react";
import { useStore } from "@/store/useStore";

interface Cert {
    id: string;
    title: string;
    issuer: string;
    year: string;
    verified: boolean;
}

const certificates: Cert[] = [
    { id: "cert-01", title: "AI in Education Specialization", issuer: "Top University / EdX", year: "2023", verified: true },
    { id: "cert-02", title: "Cambridge ICT Starters Validation", issuer: "Cambridge Assessment", year: "2024", verified: true },
    { id: "cert-03", title: "Advanced Python Automation", issuer: "Coursera", year: "2022", verified: true },
    { id: "cert-04", title: "Interactive Smart Board Technician", issuer: "Promethean", year: "2025", verified: true },
];

export default function Certificates() {
    const { setCursorVariant } = useStore();
    const [selectedCert, setSelectedCert] = useState<Cert | null>(null);

    return (
        <section
            id="certificates"
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
            <div style={{ maxWidth: "1200px", width: "100%" }}>
                <h2
                    className="font-ndot text-neon"
                    style={{ fontSize: "3rem", marginBottom: "4rem", textAlign: "center" }}
                >
                    SECURE VAULT
                </h2>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                        gap: "2rem",
                    }}
                >
                    {certificates.map((cert, i) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            onClick={() => setSelectedCert(cert)}
                            onMouseEnter={() => setCursorVariant('project')}
                            onMouseLeave={() => setCursorVariant('default')}
                            className="glass-panel"
                            style={{
                                padding: "2rem",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "1rem",
                                cursor: "none",
                                textAlign: "center",
                                borderTop: "4px solid var(--accent)"
                            }}
                        >
                            <Award size={48} color="var(--foreground)" style={{ opacity: 0.8 }} />
                            <h3 className="font-nsans" style={{ fontSize: "1.2rem", color: "var(--foreground)" }}>{cert.title}</h3>
                            <span style={{ color: "var(--accent)", fontSize: "0.9rem" }}>{cert.issuer}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100vw",
                            height: "100vh",
                            background: "rgba(0,0,0,0.9)",
                            backdropFilter: "blur(15px)",
                            zIndex: 9999,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "2rem"
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, rotateY: 90 }}
                            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                            exit={{ scale: 0.8, opacity: 0, rotateY: -90 }}
                            transition={{ type: "spring", damping: 20, stiffness: 100 }}
                            onClick={(e) => e.stopPropagation()}
                            className="glass-panel"
                            style={{
                                maxWidth: "700px",
                                width: "100%",
                                padding: "4rem",
                                position: "relative",
                                background: "var(--background)",
                                border: "2px solid var(--accent)",
                                boxShadow: "0 0 50px rgba(255, 0, 60, 0.2)",
                                textAlign: "center"
                            }}
                        >
                            <button
                                onClick={() => setSelectedCert(null)}
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

                            <ShieldCheck size={64} color="var(--accent)" style={{ margin: "0 auto 2rem" }} />
                            <h2 className="font-ndot" style={{ fontSize: "2.5rem", color: "var(--foreground)" }}>{selectedCert.title}</h2>
                            <p style={{ fontSize: "1.2rem", margin: "1rem 0", color: "var(--foreground)", opacity: 0.8 }}>
                                Issued by <strong>{selectedCert.issuer}</strong>
                            </p>
                            <div style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                background: "rgba(255,0,60,0.1)",
                                padding: "0.5rem 1rem",
                                borderRadius: "20px",
                                color: "var(--accent)",
                                fontWeight: "bold",
                                marginTop: "2rem"
                            }}>
                                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent)" }} />
                                VERIFIED ON CHAIN - {selectedCert.year}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
