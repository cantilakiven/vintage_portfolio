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
      {/* Overview Title */}
      <h2 className="mb-6 text-center sm:text-left">
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
            I am a firm believer in continuous learning and am constantly exploring modern frameworks to sharpen my craft.
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

      {/* Personal Information Section */}
      <h3 className="font-serif text-primary mb-4 text-lg tracking-wide flex items-center gap-2">
        <span className="h-px w-8 bg-primary/30"></span>
        Personal Information
      </h3>
      <div className="section-box ornament-corners bg-secondary/10 backdrop-blur-sm border border-border/50 p-1 mb-10">
        <div className="bg-card/50 p-4 sm:p-6">
          <table className="info-table w-full text-sm">
            <tbody>
              <tr className="border-b border-border/40">
                <td className="py-4 text-muted-foreground uppercase tracking-tighter font-bold w-1/3">Name</td>
                <td className="py-4 font-medium text-primary">Kiven Cantila <span className="text-[10px] opacity-50 block sm:inline ml-0 sm:ml-2">(Legal: Kiven Etol)</span></td>
              </tr>
              <tr className="border-b border-border/40">
                <td className="py-4 text-muted-foreground uppercase tracking-tighter font-bold">Role</td>
                <td className="py-4">Front-End Web Developer</td>
              </tr>
              <tr className="border-b border-border/40">
                <td className="py-4 text-muted-foreground uppercase tracking-tighter font-bold">Email</td>
                <td className="py-4">
                  <a href="mailto:cantilakiven.mailbox01@gmail.com" className="hover:text-primary transition-colors break-all">cantilakiven.mailbox01@gmail.com</a>
                </td>
              </tr>
              <tr className="border-b border-border/40">
                <td className="py-4 text-muted-foreground uppercase tracking-tighter font-bold">Contact</td>
                <td className="py-4 space-y-1">
                  <span className="block">TNT +63 981 619 5241</span>
                  <span className="block">TM  +63 935 919 3319</span>
                </td>
              </tr>
              <tr>
                <td className="py-4 text-muted-foreground uppercase tracking-tighter font-bold">Location</td>
                <td className="py-4">Mutia Zamboanga del Norte, Philippines</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 className="font-serif text-primary mb-6 text-lg tracking-wide text-center sm:text-left">Connect With Me</h3>
      <div className="flex justify-center sm:justify-start">
        <SocialLinks />
      </div>
    </div>
  );
};