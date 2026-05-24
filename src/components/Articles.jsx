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

const articles = [
  {
    id: 1,
    title: "Medical Articles",
    description:
      "Conducted interviews with prominent specialist doctors in Sri Lanka and wrote medical articles for various newspapers.",
    photos: Array.from({ length: 9 }, (_, index) =>
      `/chathu-portfolio/articles/a1_${index + 1}.jpg`
    ),
  },
  {
    id: 2,
    title: "Travel Articles",
    description:
      "Explored various travel destinations in Sri Lanka and wrote travel articles for various newspapers.",
    photos: Array.from({ length: 7 }, (_, index) =>
      `/chathu-portfolio/articles/a2_${index + 1}.jpg`
    ),
  },
  {
    id: 3,
    title: "Articles on Buddhism",
    description:
      "Conducted interviews with venerable Buddhist monks and wrote newspaper articles regarding Buddhism.",
    photos: Array.from({ length: 7 }, (_, index) =>
      `/chathu-portfolio/articles/a3_${index + 1}.jpg`
    ),
  },
  {
    id: 4,
    title: "Articles on Beauty",
    description: "Wrote newspaper articles regarding beauticians and beauty culture.",
    photos: Array.from({ length: 5 }, (_, index) =>
      `/chathu-portfolio/articles/a4_${index + 1}.jpg`
    ),
  },
  {
    id: 5,
    title: "Political Articles",
    description: "Conducted interviews with Sri Lankan politicians and wrote newspaper articles.",
    photos: ["/chathu-portfolio/articles/a5_1.jpg"],
  },
  {
    id: 6,
    title: "Various Articles",
    description:
      "Wrote various types of newspaper articles from diverse perspectives regarding different fields.",
    photos: Array.from({ length: 9 }, (_, index) =>
      `/chathu-portfolio/articles/a6_${index + 1}.jpg`
    ),
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

function ArticleCard({ item }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <motion.article className="highlight-card" variants={cardVariants}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        style={{ width: "100%", height: "auto", borderRadius: "8px" }}
      >
        {item.photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <img
              src={photo}
              alt={`article photo ${index + 1}`}
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
      <p className="highlight-description">{item.description}</p>
    </motion.article>
  );
}

function Articles() {
  return (
    <Section
      id="articles"
      eyebrow="Articles"
      title="Newspaper Article Writing Experience"
    >
      {(isInView) => (
        <motion.div
          className="highlight-grid"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {articles.map((item) => (
            <ArticleCard key={item.id} item={item} />
          ))}
        </motion.div>
      )}
    </Section>
  );
}

export default Articles;
