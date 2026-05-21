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
        offset: ["start 0.95", "start 0.65"],
    });

    const y = useTransform(
        scrollYProgress,
        [0, 1],
        [12, 0]
    );

    const opacity = useTransform(
        scrollYProgress,
        [0, 1],
        [0, 1]
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
