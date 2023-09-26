import Hero from "@/components/Hero/Hero";
import AboutSection from "@/components/AboutSection/AboutSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import ImageGrid from "@/components/ImageGrid/ImageGrid";

export default async function Home() {
  const aboutContent = [
    {
      id: 1,
      img: "/images/desktop/image-transform.jpg",
      alt: "transform",
      isImage: true,
    },
    {
      id: 2,
      title: "Transform your brand",
      copy: `We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.`,
    },
    {
      id: 3,
      img: "/images/desktop/image-stand-out.jpg",
      alt: "stand out",
      isImage: true,
    },
    {
      id: 4,
      title: "Stand out to the right audience",
      copy: `Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.`,
      isImage: false,
      isPink: true,
    },
  ];

  const servicesContent = [
    {
      id: 1,
      img: "/images/desktop/image-graphic-design.jpg",
      alt: "graphic design",
      title: "Graphic Design",
      copy: `Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’ attention.`,
    },
    {
      id: 2,
      img: "/images/desktop/image-photography.jpg",
      alt: "photography",
      title: "Photography",
      copy: `Increase your credibility by getting the most stunning, high-quality photos that improve your business image.`,
      isBlue: true,
    },
  ];

  const slides = [
    {
      id: 1,
      img: "/images/image-emily.jpg",
      alt: "slide 1",
      name: "Emily R.",
      quote: `We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.`,
      title: "Marketing Director",
    },
    {
      id: 2,
      img: "/images/image-thomas.jpg",
      alt: "slide 2",
      name: "Thomas S.",
      quote: `Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.`,
      title: "Chief Operating Officer",
    },
    {
      id: 3,
      img: "/images/image-jennie.jpg",
      alt: "slide 3",
      name: "Jennie F.",
      quote: `Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!`,
      title: "Business Owner",
    },
    {
      id: 4,
      img: "/images/image-lee.jpg",
      alt: "slide 4",
      name: "Lee M.",
      quote: `Sunnyside’s creative flair elevated our brand, driving significant client growth in a competitive market.`,
      title: "Marketing Director",
    },
    {
      id: 5,
      img: "/images/image-kami.jpg",
      alt: "slide 5",
      name: "Kami W.",
      quote: `Sunnyside revolutionized our branding, skyrocketing our digital presence and revenue.`,
      title: "Chief Operating Officer",
    },
    {
      id: 6,
      img: "/images/image-sharon.jpg",
      alt: "slide 6",
      name: "Sharon S.",
      quote: `Thanks to Sunnyside, we experienced a surge in brand recognition and consumer engagement.`,
      title: "Business Owner",
    },
  ];

  const imageGridContent = [
    {
      id: 1,
      img: "/images/desktop/image-gallery-milkbottles.jpg",
      alt: `milk bottles`,
    },
    {
      id: 2,
      img: "/images/desktop/image-gallery-orange.jpg",
      alt: `orange`,
    },
    {
      id: 3,
      img: "/images/desktop/image-gallery-cone.jpg",
      alt: `ice cream cone`,
    },
    {
      id: 4,
      img: "/images/desktop/image-gallery-sugarcubes.jpg",
      alt: `sugar cubes`,
    },
  ];

  return (
    <>
      <Hero />
      <AboutSection content={aboutContent} />
      <ServicesSection content={servicesContent} />
      <TestimonialsSection content={slides} />
      <ImageGrid content={imageGridContent} />
    </>
  );
}
