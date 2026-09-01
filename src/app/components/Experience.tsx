import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, MapPin } from "lucide-react";
import pgLogo from "../../imports/image.png";
import argonneLogo from "../../imports/image-1.png";
import uiucLogo from "../../imports/image-2.png";

const experiences = [
  {
    title: "Research & Development Intern",
    company: "Procter & Gamble",
    location: "Cincinnati, OH",
    period: "May 2026 - Aug 2026",
    description: "Built a neural-network-powered regulatory compliance system leveraging web crawlers, REST APIs, NLP pipelines, and chemical informatics data to identify how substance-level compliance status, potential formulation compliance gaps, and regulatory forecasts impact product portfolio. Partnered with regulatory managers, toxicologists, environmental scientists, and R&D teams to translate complex chemical safety and regulatory requirements into scalable technical specifications, predictive models, and decision-support tools used across product development workflows.",
    technologies: ["Web Crawlers", "Large Language Modeling", "Chemical Modeling"],
    logo: pgLogo,
  },
  {
    title: "Research Aid",
    company: "Argonne National Laboratory",
    location: "Lemont, IL",
    period: "Aug 2025 - Present",
    description: "Continued researching with Dr Archit Vasan and Ramanathan Lab to design antibody scaffolds using PepMLM, ESM, and GenSLM models that were trained and tested for various metrics.",
    technologies: ["Large Language Modeling", "Masked Language Modeling", "Proteins"],
    logo: argonneLogo,
  },
  {
    title: "Undergraduate Researcher",
    company: "University of Illinois Urbana-Champaign",
    location: "Urbana, IL",
    period: "January 2025 – Present",
    description: "Working with Dr Rohit Bhargava, Dr Keerthi Balraj(PI), and team on rapid chemical imaging and computational imaging and segementation of various classes for tumor tissue, in order for accurate and efficient classification of malignant tissue.",
    technologies: ["Chemical Imaging", "U-Net Modeling", "Segmentation"],
    logo: uiucLogo,
  },
  {
    title: "Research Intern",
    company: "Argonne National Laboratory",
    location: "Lemont, IL",
    period: "May 2025 - Aug 2025",
    description: "Worked full time as a laboratory research intern with Dr Archit Vasan and team in the Arvind Ramanathan group to use neural networks to generate and improve the design of antibodies/minibinders targeting potential cancer target proteins. Utilized machine learning models/techniques such as diffusion modeling, preference optimization, large language models, molecular dynamics simulations, and reinforcement learning to model novel antibody designs",
    technologies: ["Large Language Modeling", "Masked Language Modeling", "Proteins"],
    logo: argonneLogo,
  },
  
];

export function Experience() {
  return (
    <section className="py-20 px-4 bg-secondary/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">Professional Experience</h2>
          <div className="w-16 h-1 rounded-full mx-auto" style={{ backgroundColor: "#00394e" }} />
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex gap-5 items-start">
                  <div className="shrink-0 w-14 h-14 rounded-lg overflow-hidden shadow-sm flex items-center justify-center p-1 bg-white">
                    <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h3 className="text-base font-semibold leading-snug">{exp.title}</h3>
                      <p className="text-sm font-medium mt-0.5" style={{ color: "#00394e" }}>{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-1 shrink-0">
                      <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                        <Calendar className="h-3.5 w-3.5" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
