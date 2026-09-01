import { useState } from "react";
import { Button } from "./components/ui/button";
import { Menu, X, Linkedin, Mail, Github } from "lucide-react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Timeline } from "./components/Timeline";
import { Projects } from "./components/Projects";
import { TechnicalSkills } from "./components/TechnicalSkills";
import { Contact } from "./components/Contact";
import { ThemeProvider } from "./components/theme-provider";
import { ThemeToggle } from "./components/theme-toggle";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Research Areas", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/akshaya-ayyah-954b0830b/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:aayyah3@illinois.edu", label: "Email" },
    { icon: Github, href: "https://github.com/aayyah3", label: "GitHub" }
  ];

  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme-v2">
      <div className="min-h-screen bg-background transition-colors duration-300">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-white/10" style={{ backgroundColor: "#00394e" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="shrink-0">
                <span className="text-white font-semibold text-lg tracking-tight">Akshaya Ayyah</span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-4">
                <div className="flex items-baseline space-x-1">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-white/75 hover:text-white px-3 py-2 text-sm transition-colors rounded-md hover:bg-white/10"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
                <div className="flex items-center space-x-2 ml-2 pl-2 border-l border-white/20">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target={label !== "Email" ? "_blank" : undefined}
                      rel={label !== "Email" ? "noopener noreferrer" : undefined}
                      aria-label={label}
                      className="text-white/70 hover:text-white transition-colors p-1.5 rounded hover:bg-white/10"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
                <ThemeToggle />
              </div>

              {/* Mobile menu section */}
              <div className="md:hidden flex items-center space-x-2">
                <ThemeToggle />
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden" style={{ backgroundColor: "#00394e" }}>
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-white/10">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-white/75 hover:text-white block px-3 py-2 text-base transition-colors rounded-md hover:bg-white/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex items-center space-x-2 px-3 pt-2 border-t border-white/10 mt-2">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target={label !== "Email" ? "_blank" : undefined}
                      rel={label !== "Email" ? "noopener noreferrer" : undefined}
                      aria-label={label}
                      className="text-white/70 hover:text-white transition-colors p-1.5 rounded hover:bg-white/10"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main>
          <div id="home">
            <Hero />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="timeline">
            <Timeline />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="technical-skills">
            <TechnicalSkills />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </main>

        {/* Footer */}
        <footer className="py-12 px-4" style={{ backgroundColor: "#00394e" }}>
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="mb-2 text-white font-semibold">Akshaya Ayyah</h3>
            <p className="text-white/60 mb-6 text-sm">
              Undergraduate Stamps Scholar · University of Illinois Urbana-Champaign
            </p>
            <div className="flex justify-center space-x-5 mb-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <p className="text-sm text-white/40">
              © 2025 Akshaya Ayyah. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}