import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Github, AlertCircle, X, Info, Download } from "lucide-react";
import { useState, useEffect } from "react";

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