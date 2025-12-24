import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ProfileTab } from "@/components/ProfileTab";
import { ResumeTab } from "@/components/ResumeTab";
import { ProjectsTab } from "@/components/ProjectsTab";
import { ContactTab } from "@/components/ContactTab";
import { ThesisTracker } from "@/components/ThesisTracker";

type Section = "overview" | "resume" | "projects" | "contact" | "thesis";

const Index = () => {
  const [activeSection, setActiveSection] = useState<Section>("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (section: Section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  const SidebarLink = ({ section, label, delay = 0 }: { section: Section; label: string; delay?: number }) => (
    <a
      href={`#${section}`}
      onClick={(e) => {
        e.preventDefault();
        handleNavClick(section);
      }}
      className={`sidebar-link block py-2 px-3 transition-all duration-300 font-mono text-sm ${
        activeSection === section 
          ? 'text-foreground bg-zinc-200/50 dark:bg-zinc-800/50 border-l-2 border-zinc-900 dark:border-zinc-100' 
          : 'text-muted-foreground hover:text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-900'
      }`}
      style={{ animationDelay: `${delay}s` }}
    >
      {activeSection === section && <span className="mr-2 text-zinc-900 dark:text-zinc-100 font-bold">{">>"}</span>}
      {label}
    </a>
  );

  const NavigationContent = () => (
    <>
      <div className="sidebar-section mb-6">
        <p className="font-mono font-bold text-[10px] mb-2 uppercase tracking-[0.2em] text-muted-foreground">Navigation</p>
        <div className="space-y-1">
          <SidebarLink section="overview" label="Overview" delay={0.05} />
          <SidebarLink section="resume" label="Resume" delay={0.1} />
          <SidebarLink section="projects" label="Projects" delay={0.15} />
          <SidebarLink section="contact" label="Contact" delay={0.2} />
          <SidebarLink section="thesis" label="Thesis" delay={0.25} />
        </div>
      </div>

      <div className="sidebar-section mb-6">
        <p className="font-mono font-bold text-[10px] mb-2 uppercase tracking-[0.2em] text-muted-foreground">External</p>
        <div className="space-y-1 font-mono text-xs">
          <a href="https://github.com/cantilakiven" target="_blank" rel="noopener noreferrer" className="block py-1.5 px-3 text-muted-foreground hover:text-foreground transition-all underline decoration-zinc-300 dark:decoration-zinc-700">
            GitHub ↗
          </a>
          <a href="https://dev.to/kiven_cantila" target="_blank" rel="noopener noreferrer" className="block py-1.5 px-3 text-muted-foreground hover:text-foreground transition-all underline decoration-zinc-300 dark:decoration-zinc-700">
            Dev.to ↗
          </a>
          <a href="https://www.facebook.com/makemecum.yoti/" target="_blank" rel="noopener noreferrer" className="block py-1.5 px-3 text-muted-foreground hover:text-foreground transition-all underline decoration-zinc-300 dark:decoration-zinc-700">
            Facebook ↗
          </a>
        </div>
      </div>

      <div className="sidebar-section">
        <p className="font-mono font-bold text-[10px] mb-2 uppercase tracking-[0.2em] text-muted-foreground">Download</p>
        <a href="/resume.pdf" download="Kiven_Cantila_Resume.pdf" className="block py-1.5 px-3 font-mono text-xs hover:underline">
          [RESUME_PDF]
        </a>
      </div>
    </>
  );

  return (
    // Changed bg to stone-50 and font-mono for the whole container
    <div className="min-h-screen bg-[#f5f5f4] dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-300 font-mono transition-colors duration-500">
      
      {/* Header with sharper lines */}
      <header className="border-b border-zinc-300 dark:border-zinc-800 bg-white/50 dark:bg-black/20 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 -ml-2 text-foreground hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <div className="flex-1 md:flex-none text-center md:text-left">
              <h1 className="text-lg md:text-xl font-bold tracking-tighter uppercase">
                Kiven Cantila
                <span className="hidden sm:inline text-muted-foreground font-normal ml-3 text-sm opacity-60">
                  Portfolio
                </span>
              </h1>
            </div>

            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40" onClick={() => setMobileMenuOpen(false)} />
      )}

      <nav className={`md:hidden fixed top-0 left-0 w-64 h-full bg-[#f5f5f4] dark:bg-[#0a0a0a] z-50 transform transition-transform duration-300 border-r border-zinc-300 dark:border-zinc-800 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8 border-b border-zinc-300 dark:border-zinc-800 pb-2">
            <span className="font-bold text-xs uppercase tracking-widest">Directory</span>
            <X size={18} className="cursor-pointer" onClick={() => setMobileMenuOpen(false)} />
          </div>
          <NavigationContent />
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <nav className="sticky top-32">
              <NavigationContent />
            </nav>
          </aside>

          {/* Content Area - Clean and Flat */}
          <div className="flex-1 min-w-0">
            <div className="animate-in fade-in duration-500">
              {activeSection === "overview" && <ProfileTab onNavigate={(section) => setActiveSection(section as Section)} />}
              {activeSection === "resume" && <ResumeTab />}
              {activeSection === "projects" && <ProjectsTab />}
              {activeSection === "contact" && <ContactTab />}
              {activeSection === "thesis" && <ThesisTracker />}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-300 dark:border-zinc-800 py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[10px] tracking-widest uppercase opacity-50">
            © {new Date().getFullYear()} — Built for performance: <strong>KivenCantila</strong>
          </p>
        </div>
      </footer>

      {/* Forced Sharp Corners for "Old Web" Feel */}
      <style dangerouslySetInnerHTML={{ __html: `
        * { border-radius: 0 !important; }
      `}} />
    </div>
  );
};

export default Index;