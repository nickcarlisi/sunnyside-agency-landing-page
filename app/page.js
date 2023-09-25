import Hero from "@/components/Hero/Hero";
import AboutSection from "@/components/AboutSection/AboutSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import ImageGrid from "@/components/ImageGrid/ImageGrid";
import Slider from "@/components/Slider/Slider";

const token =
  "IGQWROODcybmxVSk1PMDByb0pGNmVha255SXlnejhGTTNHS1FHTDRKX042WGxLT2pCR3VsY2gxTEZAmUEFJeFBiaXNSNWY4ZAjdXVmx0T0s2U01adlVpdUlZAVS1MZA2F6SjFDZAlA3MUdjWTg5VkhIQkN3MnAzeGtkSVUZD";
const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink,thumbnail_url&access_token=${token}`;

const fetchInstagram = async () => {
  const data = await fetch(url);
  const feed = await data.json();
  return feed;
};

export default async function Home() {
  const instagramFeed = await fetchInstagram();

  console.log(instagramFeed);

  const slides = [
    {
      id: 1,
      img: "/images/desktop/image-gallery-cone.jpg",
      alt: "slide 1",
    },
    {
      id: 2,
      img: "/images/desktop/image-gallery-milkbottles.jpg",
      alt: "slide 2",
    },
    {
      id: 3,
      img: "/images/desktop/image-gallery-sugarcubes.jpg",
      alt: "slide 3",
    },
  ];

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

  const testimonialsContent = [
    {
      id: 1,
      img: "/images/image-emily.jpg",
      copy: `We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.`,
      name: "Emily R.",
      title: "Marketing Director",
    },
    {
      id: 2,
      img: "/images/image-thomas.jpg",
      copy: `Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.`,
      name: "Thomas S.",
      title: "Chief Operating Officer",
    },
    {
      id: 3,
      img: "/images/image-jennie.jpg",
      copy: `Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!`,
      name: "Jennie F.",
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

  console.log(slides);
  return (
    <>
      <Hero />
      <Slider slides={instagramFeed.data} />
      <AboutSection content={aboutContent} />
      <ServicesSection content={servicesContent} />
      <TestimonialsSection content={testimonialsContent} />
      <ImageGrid content={imageGridContent} />
    </>
  );
}
