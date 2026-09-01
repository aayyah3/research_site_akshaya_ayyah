export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">About Me</h2>
          <div className="w-16 h-1 rounded-full mx-auto" style={{ backgroundColor: "#00394e" }} />
        </div>
        <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground text-base leading-relaxed space-y-4 text-center">
          <p>
            Hi! I'm Akshaya an undergraduate junior at the University of Illinois Urbana-Champaign pursuing
            a degree in Computer Science + Chemistry with a minor in Biology as a Stamps Scholar. My research 
            lives at the intersection of the life sciences and technology. I have forayed into Large Language 
            Modeling for protein sequences, U-Net modeling for the chemical imaging of human tissues, and molecular
            modeling for consumer products. 
          </p>
          <p>
            I seek to to develop computational tools that deepen our understanding 
            of biological processes and chemistry and am paticularly interested in these implications for drug design.
            I'm heavily involved in mechanical projects as well and work with community members to design and develop
            solutions that improve accessibility.
          </p>
        </div>
      </div>
    </section>
  );
}
