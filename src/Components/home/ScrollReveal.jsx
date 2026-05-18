"use client";

import {
    motion,
    useScroll,
    useTransform,
} from "framer-motion";

import { useRef } from "react";

export default function ScrollReveal({
    children,
    className = "",
}) {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.9", "end 0.2"],
    });

    // Smooth upward movement
    const y = useTransform(
        scrollYProgress,
        [0, 1],
        [80, -60]
    );

    // Smooth fade effect
    const opacity = useTransform(
        scrollYProgress,
        [0, 0.2, 0.8, 1],
        [0, 1, 1, 0]
    );

    return (
        <motion.div
            ref={ref}
            style={{ y, opacity }}
            className={className}
        >
            {children}
        </motion.div>
    );
}