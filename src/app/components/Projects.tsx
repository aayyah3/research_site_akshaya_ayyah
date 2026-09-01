import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, Download } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import projectPinkImg from "../../imports/Screenshot 2026-08-31 at 7.24.59 PM.png";
import illiniSearchImg from "../../imports/Screenshot_2026-08-30_at_7.19.32_PM.png";
import literatureReviewPdf from "../../imports/Literature Review.pdf";

export function Projects() {
  const projects = [
    {
      title: "Oral Cancer Biomarker Segmentation",
      description: "Undergraduate research project benchmarking U-Net and pretrained segmentation models (MedSAM, HoVer-Net) on multimodal oral histology images (HE and DFIR).",
      image: "https://www.researchgate.net/publication/342540226/figure/fig1/AS:1146030934495233@1650246475430/Histopathological-slide-of-an-oral-squamous-cell-carcinoma-showing-measurement-of-DOI.jpg",
      technologies: ["U-Net", "Python", "Segmentation", "Data Augmentation"],
      github: "https://github.com/aayyah3/oral-biomarker-segmentation",
      // demo: "#"
    },
    {
      title: "Protein Language Modeling",
      description: "Multi-modal representation learning model that learns to represent both codon and amino acid sequences in a shared embedding space using the genetic code as an inductive bias.",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/22/DHRS7B_homology_model.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
      technologies: ["Python", "Masked Language Modeling"],
      github: "https://github.com/aayyah3/Genslm-ESM-Pepmlm",
      // demo: "https://github.com/aayyah3/oral-biomarker-segmentation"
    },
    {
      title: "VisionSwim 2.0",
      description: "Device that alerts a swimmer with vision loss when he swims off-course so that he can reangle his direction.",
      image: "https://as2.ftcdn.net/v2/jpg/00/83/86/63/1000_F_83866376_1bnVFhX0uPIfuZ1ZSYlfhCsIlHOVPt6G.jpg",
      technologies: ["Python", "C", "Ardrino"],
      github: "https://github.com/aayyah3/VisionSwim2.0",
      // demo: "https://github.com/aayyah3/oral-biomarker-segmentation"
    },
    {
      title: "IlliniSearch",
      description: "Interactive dashboard for real-time data visualization using React and Firebase. Handles thousands of concurrent users with live updates.",
      image: illiniSearchImg,
      technologies: ["React", "Gemini API", "TypeScript", "Web-Scraping"],
      github: "https://github.com/aayyah3/oral-biomarker-segmentation",
      // demo: "https://github.com/aayyah3/oral-biomarker-segmentation"
    },
    {
      title: "SpinaCare",
      description: "A customized toilet seat for an eight year old child with spina bifida.",
      image: "https://medlaunch.web.illinois.edu/wp-content/uploads/2025/06/IMG_6077-1536x1152.jpg",
      technologies: ["CAD", "Mechanical"],
    },
    {
      title: "Protein Design with Masked Language Models (A Literature Review)",
      description: "Reproduced experiments from the PepMLM paper, evaluated generated peptide sequences using pseudo-perplexity and structural confidence metrics derived from AlphaFold Multimer, highlighting how models like ESM-2 enable sequence-based discovery.",
      image: projectPinkImg,
      technologies: ["Python", "Masked Language Modeling", "Literature Review", "Finetuning"],
      github: literatureReviewPdf,
      download: true,
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that demonstrate my experience in development, modeling, and engineering.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 pt-2">
                  {project.github && (
              <a
    href={project.github}
    target={project.download ? undefined : "_blank"}
    rel={project.download ? undefined : "noopener noreferrer"}
    download={project.download ? "Protein_Design_Literature_Review.pdf" : undefined}
  >
    <Button variant="outline" size="sm" className="gap-2">
      {project.download ? (
        <Download className="h-4 w-4" />
      ) : (
        <Github className="h-4 w-4" />
      )}
      {project.download ? "Download PDF" : "Code"}
    </Button>
  </a>
)}

                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}