import profileLightPhoto from "@/assets/profile-light.webp";
import profileDarkPhoto from "@/assets/profile-dark.webp";
import { SocialLinks } from "./SocialLinks";
import { useEffect, useState } from "react";

interface ProfileTabProps {
  onNavigate?: (section: string) => void;
}

export const ProfileTab = ({ onNavigate }: ProfileTabProps) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkTheme();
    
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(section);
    }
  };

  const currentPhoto = isDark ? profileDarkPhoto : profileLightPhoto;

  return (
    <div className="animate-fade-in -mt-4 sm:mt-0 max-w-4xl mx-auto">
      {/* Overview Title - Now hidden on mobile (hidden) and shown on small screens and up (sm:block) */}
      <h2 className="mb-6 text-center sm:text-left hidden sm:block">
        <span className="inline-block border-b-2 border-vintage-gold/30 pb-1 text-2xl font-serif">Overview</span>
      </h2>
      
      {/* Mobile: Compact Circular Profile */}
      <div className="flex flex-col items-center mb-8 sm:hidden">
        <div className="relative">
          {/* Subtle Outer Glow Ring */}
          <div className="absolute -inset-1 bg-gradient-to-tr from-vintage-gold/40 via-primary/10 to-vintage-gold/40 rounded-full blur-sm opacity-60"></div>
          
          {/* Reduced size from w-36 to w-28 for better mobile flow */}
          <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-vintage-gold shadow-lg">
            <div className="absolute inset-0 bg-vintage-sepia/5 mix-blend-overlay z-10 pointer-events-none" />
            <img
              src={currentPhoto}
              alt="Kiven Cantila"
              className="w-full h-full object-cover object-[center_15%]"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-8 lg:gap-12 mb-10 items-start">
        <div className="flex-1 text-justify space-y-4 text-sm sm:text-base leading-relaxed">
          <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:leading-none">
            My name is <strong className="text-primary">Kiven Cantila</strong>. 
            I am an undergrad in <strong>Bachelor of Science in Computer Engineering</strong> at Jose Rizal Memorial State University.
            Due to life challenges, I paused my studies, but my passion for technology remains my driving force.
            In 2023, I have been developed an interest learning the basic's of web development, specializing in creating responsive and aesthetically pleasing web applications.
          </p>
          <p>
            I focus on front-end development using <span className="font-semibold">HTML:5, CSS, Bootstrap, to React (Vite), TypeScript, and Tailwind CSS</span>. 
            I am in continuous learning and am constantly exploring modern frameworks to sharpen my craft and I adapt AI for better code and suggestions because we are now in a generation of Artificial Intelligence.
          </p>
          <p className="italic text-muted-foreground">
            Explore my work through my{" "}
            <a 
              href="#resume" 
              onClick={(e) => handleLinkClick(e, "resume")}
              className="text-primary underline-offset-4 cursor-pointer font-medium hover:underline not-italic"
            >
              resume
            </a>, browse my{" "}
            <a 
              href="#projects" 
              onClick={(e) => handleLinkClick(e, "projects")}
              className="text-primary underline-offset-4 cursor-pointer font-medium hover:underline not-italic"
            >
              projects
            </a>, or drop me a message via the{" "}
            <a 
              href="#contact" 
              onClick={(e) => handleLinkClick(e, "contact")}
              className="text-primary underline-offset-4 cursor-pointer font-medium hover:underline not-italic"
            >
              contact form
            </a>.
          </p>
        </div>
        
        {/* Desktop Profile: Refined size */}
        <div className="flex-shrink-0 hidden sm:flex sm:items-start sm:justify-center">
          <div className="vintage-frame group p-1.5 border border-vintage-gold/50 bg-card shadow-xl">
            <div className="relative overflow-hidden border border-vintage-gold/20">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none" />
              <img
                src={currentPhoto}
                alt="Kiven Cantila"
                className="relative w-44 md:w-52 lg:w-56 h-auto object-cover transition-all duration-700 group-hover:scale-105 filter grayscale-[0.3] group-hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="vintage-divider mb-10">
        <span className="text-vintage-gold/50 text-xl">✦</span>
      </div>

    </div>
  );
};