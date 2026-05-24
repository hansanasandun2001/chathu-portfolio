import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Section from "./Section";

const baseUrl = import.meta.env.BASE_URL || "/";
const withBase = (path) => `${baseUrl}${path.replace(/^\/+/, "")}`;

const highlights = [
  {
    id: 1,
    title: "Media Promotion for \"Pawul Kana Minihek\" Theater Production",
    organizer: "Department of Mass Communication, University of Kelaniya",
    role: "Media Promoter & Article Writer",
    description:
      "Formulated and published strategic promotional articles in mainstream national newspapers to boost audience engagement and ticket sales for the official theater production organized by the Department of Mass Communication.",
    photos: [withBase("highlights/highlight1_1.jpg")],
  },
  {
    id: 2,
    title: "PR Campaign for \"Parapurata Hadak\" Community Social Project",
    organizer: "Department of Mass Communication, University of Kelaniya",
    role: "PR & Media Campaigner",
    description:
      "Handled the complete print media promotion by writing and publishing compelling feature articles in national newspapers to raise public awareness for the official community project organized by the Department of Mass Communication.",
    photos: [
      withBase("highlights/highlight2_1.jpg"),
      withBase("highlights/highlight2_2.jpg"),
    ],
  },
  {
    id: 3,
    title: "Academic Tribute Book Launch for Prof. Wimal Dissanayake",
    organizer: "Department of Mass Communication, University of Kelaniya",
    role: "Executive Typesetter & Organizing Committee Member",
    description:
      "Handled the complete professional-grade typesetting, text formatting, and inner page layout for the official tribute book published in honor of Prof. Wimal Dissanayake, while actively serving as a core organizing member for the book launch ceremony.",
    photos: [
      withBase("highlights/highlight3_1.jpg"),
      withBase("highlights/highlight3_2.jpg"),
    ],
  },
  {
    id: 4,
    title:
      "Commemorative Volume for \"Sanjanani\" Communication & Public Relations Festival (2026)",
    organizer: "Department of Mass Communication, University of Kelaniya",
    role: "Head of Typesetting & Assistant Editor",
    description:
      "Successfully handled the complete professional-grade typesetting, text formatting, and structural editing for the official 2026 commemorative book published for the Sanjanani Communication and Public Relations Festival.",
    photos: [
      withBase("highlights/highlight4_1.jpg"),
      withBase("highlights/highlight4_2.jpg"),
    ],
  },
  {
    id: 5,
    title: "\"Abhisara Abhiman\" Radio Magazine & Event Launch",
    organizer: null,
    role: "Editorial Board, Scriptwriter & PR Coordinator",
    description:
      "Contributed creative scripts and spearheaded the official corporate PR, invitations workflow, and event logistics for the live launching ceremony.",
    photos: [
      withBase("highlights/highlight5_1.jpg"),
      withBase("highlights/highlight5_2.jpg"),
    ],
  },
  {
    id: 6,
    title: "Live Broadcasting & Editing at Unik Radio (University of Kelaniya)",
    organizer: null,
    role: "Radio Program Producer & Audio Editor",
    description:
      "Managed live campus radio operations, specializing in program packaging, scriptwriting, and comprehensive audio editing/splicing. Hosted the popular academic interview programs.",
    photos: [
      withBase("highlights/highlight6_1.jpg"),
      withBase("highlights/highlight6_2.jpg"),
      withBase("highlights/highlight6_3.jpg"),
      withBase("highlights/highlight6_4.jpg"),
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function HighlightCard({ item }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const hasMultiplePhotos = item.photos.length > 1;

  return (
    <motion.article className="highlight-card" variants={cardVariants}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={hasMultiplePhotos}
        pagination={hasMultiplePhotos ? { clickable: true } : false}
        autoplay={hasMultiplePhotos ? { delay: 3000 } : false}
        loop={hasMultiplePhotos}
        style={{ width: "100%", height: "auto", borderRadius: "8px" }}
      >
        {item.photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <img
              src={photo}
              alt={`highlight photo ${index + 1}`}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "300px",
                objectFit: "contain",
                background: "#0a192f",
                borderRadius: "8px",
                border: "2px solid #e6b800",
                cursor: "pointer",
              }}
              onClick={() => {
                setLightboxOpen(true);
                setLightboxIndex(index);
              }}
              onError={(event) => {
                event.currentTarget.parentElement.style.background = "#112240";
                event.currentTarget.style.display = "none";
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={item.photos.map((src) => ({ src }))}
      />
      <h3>{item.title}</h3>
      {item.organizer ? <p className="highlight-organizer">{item.organizer}</p> : null}
      <p className="highlight-role">{item.role}</p>
      <p className="highlight-description">{item.description}</p>
    </motion.article>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Professional Highlights">
      {(isInView) => (
        <motion.div
          className="highlight-grid"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {highlights.map((item) => (
            <HighlightCard key={item.title} item={item} />
          ))}
        </motion.div>
      )}
    </Section>
  );
}

export default Experience;
