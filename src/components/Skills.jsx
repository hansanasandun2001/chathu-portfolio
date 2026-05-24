import { motion } from "framer-motion";
import {
  FaKeyboard,
  FaBroadcastTower,
  FaHeadphones,
  FaPenNib,
  FaCalendarCheck,
  FaBullhorn,
  FaClock,
} from "react-icons/fa";
import Section from "./Section";

const skills = [
  { icon: FaKeyboard, label: "Typesetting" },
  { icon: FaBroadcastTower, label: "Radio Production" },
  { icon: FaHeadphones, label: "Audio Editing" },
  { icon: FaPenNib, label: "Scriptwriting" },
  { icon: FaCalendarCheck, label: "Event Organizing" },
  { icon: FaBullhorn, label: "Public Relations (PR)" },
  { icon: FaClock, label: "Time Management" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 180, damping: 14 },
  },
};

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Core Strengths">
      {(isInView) => (
        <motion.div
          className="skills-grid"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div className="skill-card" key={skill.label} variants={item}>
                <span className="skill-icon" aria-hidden="true">
                  <Icon />
                </span>
                <span className="skill-label">{skill.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </Section>
  );
}

export default Skills;
