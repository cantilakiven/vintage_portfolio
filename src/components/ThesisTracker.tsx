import { useState, useEffect, useRef } from "react";
import { 
  Database, Tag, Cpu, Zap, Heart, FolderOpen, BarChart2, ArrowUp
} from "lucide-react";

export const ThesisTracker = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    if (link === "#") {
      e.preventDefault(); // Prevent click if link is empty
    }
  };

  const [pipeline] = useState([
    {
      phase: "00",
      title: "Thesis Title: Chicken Egg Identifier",
      status: "Paused",
      icon: <Heart className="text-red-500 animate-pulse" size={20} />,
      description: "Project aimed at developing an egg classification system using Support Vector Machine (SVM) algorithm as proposed, but end up in YOLOv11 and TensorFlow Lite on Raspberry Pi with Coral USB Accelerator. The system classifies eggs into categories like Crack, Dirty, Rotten, Small, Medium, and Large to enhance quality control in egg production.",
      driveLink: "#",
      linkText: "No Downloads Available",
    },
    {
      phase: "01",
      title: "Dataset Collection",
      status: "32% DONE",
      icon: <Database className="text-blue-500" size={20} />,
      description: "Target: 10,000 images. Currently gathering diverse white egg samples to improve Egg Classification detection and accuracy.",
      results: ["3,240 / 10,000"],
      driveLink: "https://drive.google.com/file/d/1kxgkyBv_gIzgzQKW30LGJxsmonvQ_u16/view?usp=sharing", 
      linkText: "Zip Dataset File",
    },
    {
      phase: "02",
      title: "Data Labeling",
      status: "ACTIVE",
      icon: <Tag className="text-amber-500" size={20} />,
      description: "Annotation process using Label Studio. Balancing classes for Crack, Dirty, Rotten, Small, Medium, and Large identifiers.",
      youtubeId: "YS7Xk84tpRw",
      results: ["Augmented", "6 Classes"],
      driveLink: "https://drive.google.com/file/d/1eWbO7fRt6bUffcISSed9eIFSK9L65zNm/view?usp=sharing",
      linkText: "Labeling Log JSON Export",
    },
    {
      phase: "03",
      title: "YOLO11 Training",
      status: "ITERATING",
      icon: <BarChart2 className="text-green-500" size={20} />,
      description: "Training YOLOv11 weights. Current iteration shows high precision on 'Dirty', 'Crack', 'Rotten', 'Small', 'Medium', and 'Large' egg classification. But when we convert to TFLite, accuracy drops significantly which is not good.",
      youtubeId: "D4Y-RG1bZIo",
      metrics: { mAP: "0.94", Acc: "92%" },
      driveLink: "https://drive.google.com/drive/folders/1DHijKZRQN24GVBPrbh-EFCBs2qy03svT?usp=sharing",
      linkText: "Train Matrics|Weights",
    },
    {
      phase: "04",
      title: "TFLite Export & Optimization",
      status: "READY",
      icon: <Zap className="text-purple-500" size={20} />,
      description: "Model optimized for Raspberry Pi CPU usage. Quantized to INT8 for faster real-time inference using Coral Usb Accelerator.",
      youtubeId: "dRJbDTSo3s4",
      results: ["4.2MB", "TFLite"],
      driveLink: "https://drive.google.com/drive/folders/1ia8oAFAOdFukxvmwKwIsF5E0JhJUuFf5?usp=sharing",
      linkText: "Click me to Get the yolo11s Model",
    },
    {
      phase: "05",
      title: "Pi Live Testing",
      status: "LIVE",
      icon: <Cpu className="text-red-500" size={20} />,
      description: "Final hardware validation. Testing on our system prototype in candling box without running the conveyor. Measuring FPS, CPU load, and detection accuracy in real-world conditions.",
      description2: "As you can see in the video, the model is running smoothly on Raspberry Pi 4B with Coral USB Accelerator attached. The inference speed is around 10-12 FPS which is acceptable for our use case. But it seems that we need to improve more the accuracy by gathering more datasets.", 
      youtubeId: "2vDIB8FHMbo",
      results: ["10 - 12 FPS", "Hardware: Pi 4"],
      driveLink: "#",
      linkText: "No Downloads Available",
    },
    {
      phase: "06",
      title: "Yolo11n_Full_integer_quant.tflite Testing",
      status: "LIVE",
      icon: <Cpu className="text-red-500" size={20} />,
      description: "Another test for different model Yolo11n_Full_integer_quant.tflite Testing on Raspberry Pi 4B with Coral USB Accelerator.",
      description2: "As you can see in the video the fps is higher than the previous test reaching around 381 - 401 FPS, thats because I reduced the img size to 480 x 480 to achieve faster inference but the accuracy is compromised. So we need to find a balance between speed and accuracy for our use case.",
      youtubeId: "cpLgoFdQeUY", 
      results: ["381-401 FPS", "Hardware: Pi 4"],
      driveLink: "#",
      linkText: "No Downloads Available",
    },
    {
      phase: "07",
      title: "Project Status",
      status: "Paused",
      icon: <Heart className="text-red-500 animate-pulse" size={20} />,
      description: "Due to financial problems we can't continue gathering more datasets at this time. Hopefully we can resume soon.",
      driveLink: "#",
      linkText: "No Downloads Available",
    }
  ]);

  return (
    <div className="animate-in fade-in duration-700 font-mono px-2 sm:px-0 relative max-w-2xl mx-auto pb-20 -mt-4 sm:mt-0">
      
      {/* Small, Compact Floating Back to Top Button */}
      {showScrollBtn && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-2.5 sm:p-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)] border-2 border-zinc-900 dark:border-zinc-100 hover:-translate-y-1 active:translate-y-0 transition-all flex flex-col items-center gap-0.5 group"
        >
          <ArrowUp size={16} className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
          <span className="text-[7px] sm:text-[8px] font-black uppercase tracking-tighter">TOP</span>
        </button>
      )}

      {/* Sidebar Indicator */}
      <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-2 opacity-20 pointer-events-none">
        <div className="h-32 w-[1px] bg-zinc-900 dark:bg-zinc-100"></div>
        <span className="text-[9px] font-bold uppercase [writing-mode:vertical-lr] tracking-widest">
          PROJECT_TIMELINE
        </span>
      </div>

      {/* Progress Header */}
      <div className="mb-8 p-5 border-2 border-zinc-900 dark:border-zinc-100 bg-white dark:bg-zinc-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-xl font-black uppercase">Thesis_Log.sys</h2>
        <div className="mt-2 text-[10px] space-y-1 opacity-60">
            <p>Dataset: 3,240 / 10,000 (32.4%)</p>
            <p>Accuracy Goal: 98%</p>
        </div>
        <div className="w-full h-3 bg-zinc-100 dark:bg-zinc-800 border border-zinc-900 mt-4">
          <div className="h-full bg-zinc-900 dark:bg-zinc-100 transition-all duration-1000" style={{ width: '32.4%' }}></div>
        </div>
      </div>

      <div className="space-y-6">
        {pipeline.map((step, index) => (
          <div 
            key={index} 
            className="relative border-2 border-zinc-900 dark:border-zinc-100 bg-white dark:bg-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="bg-zinc-50 dark:bg-zinc-900 border-b-2 border-zinc-900 px-4 py-3 flex justify-between items-center">
              <div className="flex items-center gap-3">
                {step.icon}
                <span className="font-bold text-xs uppercase">{step.title}</span>
              </div>
              <span className="text-[9px] font-bold px-1.5 py-0.5 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-black">
                P_{step.phase}
              </span>
            </div>

            <div className="p-4">
              <p className="text-[13px] leading-relaxed opacity-80 mb-4 italic">
                {step.description}
              </p>

              {step.youtubeId && (
                <div className="mb-4 border-2 border-zinc-900 bg-black aspect-video overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${step.youtubeId}`}
                    title="Video"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              )}

              {step.description2 && (
                <div className="mb-4 p-3 bg-zinc-50 dark:bg-zinc-900 border-l-2 border-zinc-900 dark:border-zinc-100">
                  <p className="text-[12px] leading-relaxed opacity-90 italic">
                    <span className="text-[9px] font-bold uppercase block mb-1 opacity-50 underline">System_Observation:</span>
                    {step.description2}
                  </p>
                </div>
              )}

              <div className="flex flex-col gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <div className="flex flex-wrap gap-2">
                   <span className="text-[9px] font-bold bg-zinc-100 dark:bg-zinc-800 px-2 py-1 border border-zinc-200">
                    {step.status}
                  </span>
                </div>
                <a 
                  href={step.driveLink} 
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleLinkClick(e, step.driveLink)}
                  className={`w-full py-3 flex items-center justify-center gap-2 text-[11px] font-bold uppercase transition-all
                    ${step.driveLink === "#" ? "bg-zinc-100 text-zinc-400 cursor-not-allowed" : "bg-zinc-900 text-white active:scale-[0.98]"}`}
                >
                  <FolderOpen size={14} /> {step.linkText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 py-10 text-center opacity-30 border-t border-dashed border-zinc-400">
        <p className="text-[8px] uppercase tracking-[0.5em]">Log End</p>
      </div>
    </div>
  );
};
