import { motion } from "framer-motion";
import profileImage from "../assets/profile.jpg";

const nameWords = "CHATHURANGI WEERASINGHA".split(" ");

const nameContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const nameWord = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};


function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden="true"></div>
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p className="hero-kicker">Creative Portfolio</p>
          <motion.h1
            className="hero-title"
            variants={nameContainer}
            initial="hidden"
            animate="show"
          >
            {nameWords.map((word, index) => (
              <motion.span key={`${word}-${index}`} variants={nameWord}>
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <h3>Creative Copywriter &amp; Content Creator</h3>
          <p className="hero-subtitle">
            Building meaningful narratives, strong campaigns, and polished media experiences.
          </p>
          <div className="hero-actions">
            <a
              href="cv.pdf"
              download="Chathurangi_Weerasingha_CV.pdf"
              className="btn-primary"
              style={{ textDecoration: "none", display: "inline-block" }}
            >
              View My CV
            </a>
            <motion.a
              className="btn ghost"
              href="#contact"
              whileHover={{ scale: 1.05 }}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          className="hero-photo"
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 16, delay: 0.15 }}
        >
          <div className="photo-ring">
            <img src={profileImage} alt="Chathurangi Weerasingha" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
