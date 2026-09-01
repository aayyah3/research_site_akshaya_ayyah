import { Calendar } from "lucide-react";

const timelineEvents = [
  {
    year: "April 2024 – Present",
    title: "Undergraduate Stamps Scholar",
    organization: "University of Illinois Urbana-Champaign",
    description:
      "Selected out of nearly 475,000 applicants as one out of five students at the University of Illinois Urbana Champaign to be a recipient of the prestigious Stamps Scholarship, supporting interdisciplinary study at the intersection of biological sciences, chemistry, and technology, chosen on the basis of leadership, academics, and service."
  },
  {
    year: "January 2025 – Present",
    title: "Undergraduate Research Assistant",
    organization: "Beckman Center",
    description:
      "Contributed to ongoing lab research exploring chemical segementation, assisted with reviewing literature, data analysis, and preparation of findings for presentations."
  },
  {
    year: "May 2025 – Present",
    title: "Research Internship with Argonne National Laboratory",
    organization: "Argonne National Laboratory",
    description:
      "Worked with and gave presentations to the faculty at Argonne National Laboratory multiple times, working on the expansion and testing of protein language models in development."
  },
  {
    year: "March 2026",
    title: "Presentation at the Human-Centered Engineering (HCE) Symposium 2026",
    organization: "Siebel Center for Design, University of Illinois Urbana Champaign",
    description:
      "Prepared for and gave a poster presentation on electrical components of VisionSwim, a digital solution for swimming pool lane detection for the visually impaired."
  },
  {
    year: "April 2026",
    title: "Outreach Director at MedLaunch",
    organization: "MedLaunch, University of Illinois Urbana Champaign",
    description:
      "Networked with community partners to find suitable engineering projects. Evaluated the feasibility, methods, techniques involved in the successful completion of each project, and what skills future teams should employ."
  },
  {
    year: "May 2026 – Aug 2026",
    title: "Research & Development Internship",
    organization: "Proctor and Gamble",
    description:
      "Received a return offer for and participated a highly selective summer internship program centered around computational tools for research developments in Fabric and Home Care products."
  },
  {
    year: "October 2026",
    title: "Presentation at 9th Annual Michigan AI Symposium",
    organization: "University of Michigan",
    description:
      "Prepared for and gave a poster presentation on protein language modeling research at the 9th Annual Michigan AI Symposium."
  },
  // {
  //   year: "October 2026",
  //   title: "Presentation at 9th Annual Michigan AI Symposium",
  //   organization: "University of Michigan",
  //   description:
  //     "Prepared for and gave a poster presentation on protein language modeling research at the 9th Annual Michigan AI Symposium."
  // }
];

export function Timeline() {
  return (
    <section className="py-20 px-4 bg-secondary/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center space-y-4 mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold">Timeline</h2>
          <div className="w-16 h-1 rounded-full mx-auto" style={{ backgroundColor: "#00394e" }} />
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex gap-6 relative">
                {/* Dot */}
                <div
                  className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center z-10 ring-4 ring-background"
                  style={{ backgroundColor: "#00394e" }}
                >
                  <Calendar className="h-5 w-5 text-white" />
                </div>

                {/* Content */}
                <div className="pt-1 pb-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {event.year}
                  </span>
                  <h3 className="text-lg font-semibold mt-0.5">{event.title}</h3>
                  <p className="text-sm font-medium" style={{ color: "#00394e" }}>
                    {event.organization}
                  </p>
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
