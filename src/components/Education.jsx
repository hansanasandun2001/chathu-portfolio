import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import Section from "./Section";

const education = [
  {
    title: "B.A. (Hons) in Mass Communication",
    detail: "University of Kelaniya (2023-2027)",
  },
  {
    title: "G.C.E. Advanced Level",
    detail: "2A, 1C (2021)",
  },
  {
    title: "G.C.E. Ordinary Level",
    detail: "6A, 1B, 2C (2018)",
  },
];

function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic Background">
      {(isInView) => (
        <div className="education-grid">
          {education.map((item) => (
            <motion.div
              key={item.title}
              className="education-card"
              initial={{ opacity: 0, rotateY: 90 }}
              animate={isInView ? { opacity: 1, rotateY: 0 } : { opacity: 0, rotateY: 90 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="education-icon" aria-hidden="true">
                <FaGraduationCap />
              </span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </motion.div>
          ))}
        </div>
      )}
    </Section>
  );
}

export default Education;
