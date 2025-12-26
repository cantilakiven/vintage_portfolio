import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Github, AlertCircle, X, Info, Download, ArrowUp } from "lucide-react";

export interface ProjectData {
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  previewLink?: string;
  codeLink?: string;
  videoLink?: string;
  downloadLink?: string;
  isPreviewAvailable: boolean;
  isCodeAvailable: boolean;
}

const projects: ProjectData[] = [
  {
    title: "Point of Sale System",
    shortDescription: "A point of sale system for small to medium businesses to manage sales and inventory.",
    fullDescription: `A point of sale system for small to medium businesses to manage sales and inventory Online and Offline.

Built with modern technologies React and TypeScript, it features a clean, aesthetic that prioritizes readability and user experience.

Key features include:
• Admin and cashier roles with distinct access levels
• Product management with add, edit, delete, and search functionalities
• Sales processing with real-time inventory updates
• Sales reporting and analytics dashboard
• Local storage for offline functionality
• Supabase integration for data persistence and synchronization
• Can work offline and sync data when online
• Can be use for up to 5 cashiers simultaneously using local network`,
    technologies: ["React", "TypeScript", "Tailwind CSS", "SQL", "Supabase"],
    previewLink: "#",
    codeLink: "https://github.com/cantilakiven",
    downloadLink: "https://drive.google.com/file/d/1VW8AoW5G3jn_Fe5HRCl3eBF_TYDNjoEp/view?usp=sharing/",
    isPreviewAvailable: false,
    isCodeAvailable: false,
  },
  {
    title: "TaskFlow - Task Management",
    shortDescription: "A simple task management to manage daily task using react and local storage.",
    fullDescription: `A simple task management to manage daily task using react and local storage. An intuitive and user-friendly web application that helps users organize and track their daily tasks efficiently.

This project demonstrates fundamental web development skills including DOM manipulation, local storage for data persistence, and responsive design principles.

Features include:
• Create, read, update, and delete tasks
• Mark tasks as complete
• Filter tasks by status
• Data persistence using local storage
• Clean, intuitive user interface`,
    technologies: ["React", "Vite", "TypeScript", "Tailwind CSS"],
    previewLink: "https://task-manager-mocha-xi.vercel.app/",
    codeLink: "https://github.com/cantilakiven/TaskManager.git",
    downloadLink: "https://drive.google.com/file/d/17ZAX23U7kflTAZKfYoW3loCFUaGzfV01/view?usp=sharing",
    isPreviewAvailable: true,
    isCodeAvailable: true,
  },
  {
    title: "Sari Sari Store Inventory System",
    shortDescription: "A simple inventory management system for a sari-sari store.",
    fullDescription: `A simple inventory management system designed for a sari-sari store to track products, sales, and stock levels.

This project is under development and aims to provide a user-friendly interface for store owners to manage their inventory effectively.
It's not completed yet and still a work in progress.

Features include:
• Add, edit, and delete products
• Track product quantities and prices
• Record sales transactions
• Generate sales reports
• Simple user interface for store admin and client's`,
    technologies: ["Flask", "HTML5", "Bootstrap", "SQLite"],
    previewLink: "https://sari-sari.onrender.com/",
    codeLink: "https://github.com/cantilakiven/Sari-Sari-Store-Management.git",
    downloadLink: "https://drive.google.com/file/d/1wJtbahPST1-KPJ45tRHtEoJT4VO4UfYx/view?usp=sharing",
    isPreviewAvailable: true,
    isCodeAvailable: true,
  },
  {
    title: "Website Builder Tool",
    shortDescription: "A simple website builder tool that allows users to create basic web pages using pre-defined templates.",
    fullDescription: `A website builder tool that allows users to create basic web pages using pre-defined templates and can download the whole package.

You can choose website templates, like portfolio, blog, or business site, and customize them with your own text and images. Once you're satisfied with your design, you can download the complete react package files to host your website anywhere.

Features include:
• 4 pre-defined website templates
• Easy customization of text and images
• Downloadable React package for hosting
• User-friendly interface`,
    technologies: ["React", "Vite", "TypeScript", "Tailwind CSS"],
    previewLink: "https://react-gen.pages.dev/",
    codeLink: "https://github.com/kiven-mailbox/React_Gen.git",
    downloadLink: "",
    isPreviewAvailable: true,
    isCodeAvailable: true,
  },
  {
    title: "POS Local - Offline Point of Sale System",
    shortDescription: "A local offline point of sale system for small businesses to manage sales and inventory without internet connection.",
    fullDescription: `A local offline point of sale system for small businesses to manage sales and inventory without internet connection that saves the data in local storage.

Note: This project is still under development and not yet completed. If you clear the browser data, all the data will be lost since it uses local storage for data persistence.

Features include:
• Admin only with distinct access levels
• Product management with add, edit, delete, and search functionalities
• Sales processing with real-time inventory updates
• Sales reporting and analytics dashboard
• Local storage for offline functionality
• Upload products using CSV file
• Can use Barcode Scanner for faster sales processing
• User-friendly interface`,
    technologies: ["React", "Vite", "TypeScript", "Tailwind CSS"],
    previewLink: "https://demo-of-sales.pages.dev/",
    codeLink: "https://github.com/cantilakiven/POS_Local-Storage.git",
    downloadLink: "https://drive.google.com/file/d/1VXD5FOKqyMmqxdKYWruO74_NpRJC3Jyh/view?usp=sharing",
    isPreviewAvailable: true,
    isCodeAvailable: true,
  },
];

export const ProjectsTab = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setShowScrollBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="animate-fade-in relative z-10 -mt-4 sm:mt-0 max-w-2xl mx-auto">
      
      {/* IMPROVED BACK TO TOP 
          Desktop: Anchored precisely to the right of your content column
          Mobile: Fixed to corner
      */}
      {showScrollBtn && (
        <>
          {/* Desktop Version: Stays with the column */}
          <div className="hidden lg:block absolute -right-20 top-0 h-full">
            <button 
              onClick={scrollToTop}
              className="sticky top-[85vh] z-50 p-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] border-2 border-zinc-900 dark:border-zinc-100 hover:-translate-y-1 active:translate-y-0 transition-all flex flex-col items-center gap-0.5 group"
            >
              <ArrowUp size={20} className="group-hover:scale-110 transition-transform" />
              <span className="text-[8px] font-black uppercase tracking-tighter">TOP</span>
            </button>
          </div>

          {/* Mobile Version: Corner Fixed */}
          {/* <button 
            onClick={scrollToTop}
            className="lg:hidden fixed bottom-6 right-6 z-50 p-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)] border-2 border-zinc-900 dark:border-zinc-100 active:scale-95 transition-all flex flex-col items-center gap-0.5"
          >
            <ArrowUp size={16} />
            <span className="text-[7px] font-black uppercase">TOP</span>
          </button> */}
        </>
      )}

      <h2 className="text-xl font-serif text-primary font-bold mb-4">Projects</h2>
      
      <p className="mb-8 text-muted-foreground animate-fade-in stagger-1 leading-relaxed italic text-sm">
        Below are some of the projects I have worked on. Click on any project to view more details, screenshots, and links.
      </p>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group cursor-pointer p-6 border border-border/50 rounded-xl hover:bg-secondary/30 transition-all active:scale-[0.98] animate-fade-in-up"
            style={{ animationDelay: `${0.15 + index * 0.1}s` }}
            onClick={() => setSelectedProject(project)}
          >
            <h3 className="font-serif text-lg text-primary group-hover:underline transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-foreground/80 mt-2 mb-4 leading-relaxed">{project.shortDescription}</p>
            
            <p className="text-[11px] mb-3">
              <strong className="text-muted-foreground uppercase tracking-tighter">Technologies:</strong>{" "}
              <span className="italic opacity-80">{project.technologies.join(", ")}</span>
            </p>

            <p className="text-xs text-primary/70 flex items-center gap-2 group-hover:translate-x-1 transition-transform">
              <span>◆</span>
              Click to view details & links
            </p>
          </div>
        ))}
      </div>

      <div className="vintage-divider mt-12 py-4 flex justify-center border-t border-border/30">
        <span className="text-primary/40"> + + + </span>
      </div>

      <p className="text-xs text-muted-foreground italic text-center mt-4 pb-10">
        More projects coming soon as I continue to develop my skills.
      </p>

      <ProjectDetailModal
        project={selectedProject}
        open={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

// --- MODAL COMPONENT ---

interface ProjectDetailModalProps {
  project: ProjectData | null;
  open: boolean;
  onClose: () => void;
}

const getYouTubeEmbedUrl = (url: string): string | null => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) 
    ? `https://www.youtube.com/embed/${match[2]}?autoplay=1&mute=1` 
    : null;
};

export const ProjectDetailModal = ({ project, open, onClose }: ProjectDetailModalProps) => {
  const [toast, setToast] = useState<{ show: boolean; message: string }>({ show: false, message: "" });

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => setToast({ show: false, message: "" }), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  if (!project || !open) return null;

  const youtubeEmbedUrl = getYouTubeEmbedUrl(project.videoLink || "");

  const handleLinkClick = (e: React.MouseEvent, type: string, isAvailable: boolean) => {
    if (!isAvailable) {
      e.preventDefault();
      setToast({ show: true, message: `${type} link is not available yet.` });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="z-[9999] max-w-2xl w-[95vw] max-h-[90vh] overflow-y-auto bg-card border-border shadow-2xl p-0">
        
        {toast.show && (
          <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[10000] flex items-center gap-3 px-6 py-2 bg-primary text-primary-foreground rounded-full shadow-2xl border border-white/10">
            <Info size={16} />
            <span className="text-xs font-medium">{toast.message}</span>
            <X size={14} className="cursor-pointer" onClick={() => setToast({ show: false, message: "" })} />
          </div>
        )}

        <div className="p-6 space-y-6">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-primary">{project.title}</DialogTitle>
          </DialogHeader>

          {youtubeEmbedUrl && (
            <div className="rounded-lg overflow-hidden border border-border/50 bg-black aspect-video">
              <iframe 
                src={youtubeEmbedUrl} 
                className="w-full h-full" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen 
              />
            </div>
          )}

          <div className="space-y-4">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground border-b border-border pb-1 mb-2 font-mono">Detailed Description</h4>
              <p className="text-foreground leading-relaxed whitespace-pre-line text-sm">
                {project.fullDescription}
              </p>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground border-b border-border pb-1 mb-2 font-mono">Stack</h4>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 bg-secondary text-secondary-foreground text-[10px] font-bold rounded border border-border">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-wrap gap-8 border-t border-border">
            <a
              href={project.previewLink}
              target={project.isPreviewAvailable ? "_blank" : "_self"}
              onClick={(e) => handleLinkClick(e, "Preview", project.isPreviewAvailable)}
              className={`flex items-center gap-2 text-xs font-bold ${
                project.isPreviewAvailable ? "text-primary hover:underline" : "text-muted-foreground/40 cursor-help"
              }`}
            >
              {project.isPreviewAvailable ? <ExternalLink size={16} /> : <AlertCircle size={16} />}
              Live Preview
            </a>

            <a
              href={project.codeLink}
              target={project.isCodeAvailable ? "_blank" : "_self"}
              onClick={(e) => handleLinkClick(e, "Source code", project.isCodeAvailable)}
              className={`flex items-center gap-2 text-xs font-bold ${
                project.isCodeAvailable ? "text-primary hover:underline" : "text-muted-foreground/40 cursor-help"
              }`}
            >
              {project.isCodeAvailable ? <Github size={16} /> : <AlertCircle size={16} />}
              View Code
            </a>

            <a
              href={project.downloadLink || "#"}
              target="_blank"
              onClick={(e) => handleLinkClick(e, "Download", !!project.downloadLink)}
              className={`flex items-center gap-2 text-xs font-bold transition-colors ${
                project.downloadLink ? "text-primary hover:underline" : "text-muted-foreground/40 cursor-help"
              }`}
            >
              {project.downloadLink ? <Download size={16} /> : <AlertCircle size={16} />}
              Download
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};