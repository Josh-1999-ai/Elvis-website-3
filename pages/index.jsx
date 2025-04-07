
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

const publications = [
  {
    title: "Exploring the Multidimensional Challenges in Integrating Design for Safety (DfS) in the Ghanaian Construction Industry",
    description: "This study investigates the various challenges faced in implementing Design for Safety principles within Ghana's construction sector.",
    link: "https://doi.org/10.1108/JEDT-02-2023-0085",
  },
  {
    title: "Analysis of the Underlying Factors Affecting BIM-LCA Integration in the Ghanaian Construction Industry: A Factor Analysis Approach",
    description: "This research examines the factors influencing the integration of Building Information Modeling and Life Cycle Assessment in Ghana's construction industry.",
    link: "https://doi.org/10.1108/CI-01-2023-0012",
  },
  {
    title: "Impact of Construction Workers Informal Safety Communication (CWISC) on Safety Performance on Construction Sites",
    description: "This paper explores how informal safety communication among construction workers affects overall safety performance on construction sites.",
    link: "https://doi.org/10.1108/ECAM-03-2023-0250",
  },
  {
    title: "Provision of Access for Persons with Disabilities in Selected Sports Stadiums In Ghana",
    description: "An evaluation of the accessibility features available for persons with disabilities in various sports stadiums across Ghana.",
    link: "https://ajmess.org/index.php/ajmess/article/view/168",
  },
];

export default function Home() {
  const [index, setIndex] = useState(-1);
  const images = [
    "/images/elvis1.jpg",
    "/images/elvis2.jpg",
    "/images/elvis3.jpg",
    "/images/elvis4.jpg",
    "/images/elvis5.jpg",
    "/images/elvis6.jpg",
    "/images/elvis7.jpg",
  ];

  return (
    <main className="min-h-screen bg-white text-black p-8 space-y-12">
      <section className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Hi, I'm EAK
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          A PhD student in Civil Engineering with a deep passion for research in construction safety, BIM, and accessibility in the built environment.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <a href="mailto:elvisadjeikonadu@gmail.com">
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </a>
          </Button>
          <Button variant="outline"><Github className="mr-2 h-4 w-4" /> GitHub</Button>
          <Button variant="outline" asChild>
            <a href="https://www.linkedin.com/in/elvis-adjei-konadu-a25210200" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </a>
          </Button>
        </div>
      </section>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          Hello, I'm Elvis Adjei Konadu, a construction enthusiast based in Fort Collins, Colorado. Armed with a Bachelor's degree in Construction Technology and Management, as well as an MSc in Construction Management, both earned from Kwame Nkrumah University of Science and Technology, I am on a journey to delve deeper into the world of construction.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          My academic journey has been marked by a fervent love for research, with several research papers to my name from my graduate student days. I am starting a PhD in Civil Engineering at Colorado State University this Fall (2024).
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Beyond academia, I find joy in the simple pleasures of life. Video games, movie nights, and whipping up delicious dishes in the kitchen are my go-to ways of unwinding. My research interests span a wide spectrum within the construction industry, including topics like construction safety, design for safety, AI integration in safety management, accessibility in the built environment, and Building Information Modeling (BIM).
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          As I continue my academic journey, I embrace the opportunity to explore new facets of construction. Just as I seek to build a brighter future in construction, I remain open to new experiences, cultures, and innovative ways of thinking.
        </p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Elvis ${i + 1}`}
              onClick={() => setIndex(i)}
              className="rounded-xl shadow-md cursor-pointer hover:scale-105 transition-transform duration-200"
            />
          ))}
          <Lightbox open={index >= 0} index={index} close={() => setIndex(-1)} slides={images.map(img => ({ src: img }))} />
        </div>
      </section>

      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Publications</h2>
        <Carousel>
          <CarouselContent>
            {publications.map((pub, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{pub.title}</h3>
                      <p className="text-gray-600 mb-4">{pub.description}</p>
                    </div>
                    <Button asChild variant="link">
                      <a href={pub.link} target="_blank" rel="noopener noreferrer">
                        Read More
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      <footer className="text-center text-gray-500 mt-12">
        <p>&copy; {new Date().getFullYear()} Elvis Adjei Konadu. All rights reserved.</p>
      </footer>
    </main>
  );
}
