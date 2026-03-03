"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useStore } from '@/store/useStore';
import './cursor.css';

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { cursorVariant } = useStore();

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            backgroundColor: "transparent",
            border: "2px solid var(--accent)",
            height: 32,
            width: 32,
        },
        hover: {
            x: mousePosition.x - 24,
            y: mousePosition.y - 24,
            backgroundColor: "var(--accent)",
            mixBlendMode: "difference" as const,
            height: 48,
            width: 48,
            border: "none",
        },
        project: {
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
            backgroundColor: "var(--accent)",
            color: "#fff",
            height: 80,
            width: 80,
            border: "none",
        }
    };

    return (
        <>
            <motion.div
                className="custom-cursor"
                variants={variants as any}
                animate={cursorVariant}
                transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
            >
                {cursorVariant === 'project' && <span className="cursor-text">View</span>}
            </motion.div>
            <div
                className="cursor-dot"
                style={{ left: mousePosition.x, top: mousePosition.y }}
            />
        </>
    );
}
