import { Code, FlaskConical, Cpu, Dna, Microscope, BarChart2 } from "lucide-react";

const areas = [
  {
    icon: Dna,
    title: "Computational Peptide Generation",
    description: "Exploring large language models for de novo peptide binder sequence generation."
  },
  {
    icon: Code,
    title: "Consumer Product Regulatory Modeling",
    description: "Modeling the compliance of chemical formulas and ingredient lists in consumer products for regulations."
  },
  {
    icon: Microscope,
    title: "Chemical Image Segmentation",
    description: "Applying segmentation techniques on oral tumor samples to seperate tissues and marker regions."
  },
  {
    icon: Cpu,
    title: "Chemical Inventory Modeling",
    description: "Developing and evaluating novel automated technology to check chemical descriptors and formulas with inventories."
  },
  {
    icon: FlaskConical,
    title: "Assistive Technology Development",
    description: "Engineering assistive devices for community members with disabilities."
  },
];

export function Skills() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">Research Areas</h2>
          <div className="w-16 h-1 rounded-full mx-auto" style={{ backgroundColor: "#00394e" }} />
        </div>

        <div className="flex flex-col divide-y divide-border">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-5 py-6 group hover:bg-secondary/30 transition-colors rounded-lg px-4 -mx-4"
              >
                <div
                  className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-0.5"
                  style={{ backgroundColor: "#00394e15" }}
                >
                  <Icon className="h-5 w-5" style={{ color: "#00394e" }} />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1">{area.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{area.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
