import Section from "./Section";
import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const socials = [
  {
    label: "Facebook (Personal)",
    href: "https://www.facebook.com/profile.php?id=61564310852677",
    icon: FaFacebookF,
  },
  {
    label: "Facebook (Font Page)",
    href: "https://www.facebook.com/profile.php?id=61589932408174",
    icon: FaFacebookF,
  },
  {
    label: "YouTube (Chathu with Media)",
    href: "https://www.youtube.com/@Chathurangideshani",
    icon: FaYoutube,
  },
  {
    label: "LinkedIn (Chathu Weerasingha)",
    href: "https://www.linkedin.com/in/chathu-weerasingha-50b360331/",
    icon: FaLinkedinIn,
  },
];

function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Lets Connect">
      <div className="contact-grid">
        <div className="contact-details">
          <p>
            <strong>Phone:</strong> <a href="tel:+94704072481">+94 70 407 2481</a>
          </p>
          <p>
            <strong>Address:</strong> Dankubura, Meehitiya, Malwala, Ratnapura
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:cdeshanI904@gmail.com">cdeshanI904@gmail.com</a>
          </p>
        </div>
        <div className="contact-socials">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.href}
                className="social-button"
                href={social.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="social-icon" aria-hidden="true">
                  <Icon />
                </span>
                <span>{social.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export default Contact;
