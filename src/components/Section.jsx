import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function Section({ id, eyebrow, title, children, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: true });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`section ${className}`}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      <div className="section-header">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {typeof children === "function" ? children(isInView) : children}
    </motion.section>
  );
}

export default Section;
