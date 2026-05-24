import Section from "./Section";

function About() {
  return (
    <Section id="about" eyebrow="About" title="About Me">
      <p className="section-text">
        A highly creative Mass Communication undergraduate from the University of Kelaniya with proven
        experience in copywriting, professional typesetting, and national newspaper journalism. Skilled in
        media promotions, radio production, and public relations, bringing strong time management and
        multi-genre feature writing capabilities.
      </p>
      <a
        className="about-cv-link"
        href="/cv.pdf"
        download="Chathurangi_Weerasingha_CV.pdf"
      >
        Download CV
      </a>
    </Section>
  );
}

export default About;
