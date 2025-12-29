import { useState, useEffect } from "react";
import { 
  Database, Tag, Cpu, Zap, Heart, FolderOpen, BarChart2, ArrowUp, ShoppingCart, Image as ImageIcon, Box, Loader2, Maximize, Eye, Layers
} from "lucide-react";

export const ThesisTracker = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [isModelLoading, setIsModelLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"3D" | "2D">("3D");

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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    if (link === "#") e.preventDefault();
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
      youtubeId: "iD8mk4BRpd4",
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
      title: "Colab and EdgeTpu Exporter Notebook",
      status: "Active",
      icon: <i className="fa fa-google" aria-hidden="true">Google</i>,
      description: "You can download the Colab Notebook and EdgeTpu exporter I used in this project, the colab notebook created by: Evan Juras, from EJ Technology Consultants (https://www.ejtech.io/ | http://evanjuras.com/), Special Thanks for him sharing his colab notebook and keeping it updated for new package updates like some python dependencies just to make it work and stay up to date, if you need guidelines you can watch his youtube channel in this link. -- (https://www.youtube.com/c/EdjeElectronics).",
      driveLink: "https://drive.google.com/drive/folders/1h6gTucNXP7bJmE1Ti3h3wiNStwsctuNl?usp=sharing",
      linkText: "Click Me to Download",
    },
    {
      phase: "08",
      title: "Project Status",
      status: "Paused Since October 2025",
      icon: <Heart className="text-red-500 animate-pulse" size={20} />,
      description: "Due to financial problems we can't continue gathering more datasets at this time. Hopefully we can resume soon.",
      driveLink: "#",
      linkText: "No Downloads Available",
    }
  ]);

  const projectCosts = [
    { part: "Raspberry Pi 4B 8GB RAM (SecondHand)", img: "https://i.ibb.co/C3sz140h/rpi.jpg", qty: 1, cost: 4500, total: 4500 },
    { part: "Coral USB Accelerator", img: "https://i.ibb.co/nMWLfVC0/coral.jpg", qty: 1, cost: 7900, total: 7900 },
    { part: "USb Webcam", img: "https://i.ibb.co/HTQBh3TF/webcam.jpg", qty: 1, cost: 400, total: 400 },
    { part: "Power Supply 5V - 24V Adjustable 3A", img: "https://i.ibb.co/C38MyRtB/61-UD5iw-Lu-L-UF350-350-QL80.jpg", qty: 1, cost: 800, total: 800 },
    { part: "Stepper Motor Nema 23", img: "https://i.ibb.co/DD2rWBft/stepper.jpg", qty: 1, cost: 1080, total: 1080 },
    { part: "Stepper Motor Driver (DQ860MA)", img: "https://i.ibb.co/rf0pmQ5B/driver.jpg", qty: 1, cost: 2800, total: 2800 },
    { part: "Arduino Uno", img: "https://i.ibb.co/tMWbXkhN/arduino.jpg", qty: 1, cost: 230, total: 230 },
    { part: "Jumper Wire's (₱10 each)", img: "https://i.ibb.co/tPsKVPdX/2762506-40.jpg", qty: 50, cost: 500, total: 500 },
    { part: "Servo Motors", img: "https://i.ibb.co/Z1mPzst6/servo.jpg", qty: 5, cost: 266, total: 1330 },
    { part: "Wood Planks 1 x 6 (6pcs)", img: "https://i.ibb.co/sd0rHBwp/wood.jpg", qty: 1, cost: 380, total: 380 },
    { part: "Nails (1/4kg Size: 4d 12'1/2 & 7d 11'1/2 )", img: "https://i.ibb.co/Gft3MfRD/nail-size-chart.jpg", qty: 2, cost: 50, total: 50 },
    { part: "Bearings (Size: 603)", img: "https://i.ibb.co/C39VyZRg/miniature-bearing-all-3.jpg", qty: 4, cost: 130, total: 520 },
    { part: "Conveyor Belt)", img: "https://i.ibb.co/gZ4TYKTd/conveyorbelt.webp", qty: 1, cost: 300, total: 300 },
    { part: "Eggs (Sizes: S, M, L, 1 egg 6 images)", img: "https://i.ibb.co/r2jXq8K4/white-eggs-2-scaled.jpg", qty: 540, cost: 5400, total: 5400 },
  ];

  return (
    <div className="animate-in fade-in duration-700 font-mono px-2 sm:px-0 relative max-w-2xl mx-auto pb-20 -mt-4 sm:mt-0">
      
      {showScrollBtn && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-2.5 sm:p-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)] border-2 border-zinc-900 dark:border-zinc-100 hover:-translate-y-1 active:translate-y-0 transition-all flex flex-col items-center gap-0.5 group"
        >
          <ArrowUp size={16} className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
          <span className="text-[7px] sm:text-[8px] font-black uppercase tracking-tighter">TOP</span>
        </button>
      )}

      <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-2 opacity-20 pointer-events-none">
        <div className="h-32 w-[1px] bg-zinc-900 dark:bg-zinc-100"></div>
        <span className="text-[9px] font-bold uppercase [writing-mode:vertical-lr] tracking-widest">PROJECT_TIMELINE</span>
      </div>

      <div className="mb-8 p-5 border-2 border-zinc-900 dark:border-zinc-100 bg-white dark:bg-zinc-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-xl font-black uppercase">Thesis Timeline</h2>
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
          <div key={index}>
            {step.phase === "08" && (
              <div className="space-y-6 mb-8">
                {/* Cost Table Section */}
                <div className="relative border-2 border-zinc-900 dark:border-zinc-100 bg-white dark:bg-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                  <div className="bg-zinc-100 dark:bg-zinc-800 border-b-2 border-zinc-900 px-4 py-3 flex items-center gap-3">
                    <ShoppingCart size={20} className="text-zinc-600 dark:text-zinc-300" />
                    <span className="font-bold text-xs uppercase">Bill of Materials / Project Cost</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-[11px]">
                      <thead>
                        <tr className="bg-zinc-50 dark:bg-zinc-900 border-b-2 border-zinc-900">
                          <th className="p-3 font-black uppercase">Part</th>
                          <th className="p-3 font-black uppercase">Qty</th>
                          <th className="p-3 font-black uppercase text-right">Cost</th>
                          <th className="p-3 font-black uppercase text-right">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {projectCosts.map((item, i) => (
                          <tr key={i} className="border-b border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                            <td className="p-3 flex items-center gap-3">
                              <div className="w-10 h-10 border border-zinc-900 bg-zinc-200 overflow-hidden flex-shrink-0">
                                <img src={item.img} alt={item.part} className="w-full h-full object-cover" />
                              </div>
                              <span className="font-bold">{item.part}</span>
                            </td>
                            <td className="p-3 font-medium">x{item.qty}</td>
                            <td className="p-3 text-right">₱{item.cost.toLocaleString()}</td>
                            <td className="p-3 text-right font-black">₱{item.total.toLocaleString()}</td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr className="bg-zinc-900 text-white dark:bg-zinc-100 dark:text-black">
                          <td colSpan={3} className="p-3 font-black uppercase text-right">Grand Total:</td>
                          <td className="p-3 text-right font-black">
                            ₱{projectCosts.reduce((acc, curr) => acc + curr.total, 0).toLocaleString()}
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>

                {/* Build Documentation Section */}
                <div className="relative border-2 border-zinc-900 dark:border-zinc-100 bg-white dark:bg-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4">
                  <h3>Documentation</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <ImageIcon size={18} />
                    <span className="font-bold text-xs uppercase tracking-tight">System Construction</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="border-2 border-zinc-900 aspect-square bg-zinc-100 overflow-hidden relative group">
                        <img src="https://i.ibb.co/QjYmj5r7/IMG-20240918-151004-325.jpg" alt="Process 1" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" />
                        <div className="absolute bottom-0 left-0 right-0 bg-zinc-900/80 text-white p-1 text-[8px] font-bold uppercase text-center opacity-0 group-hover:opacity-100 transition-opacity">Framework</div>
                    </div>
                    <div className="border-2 border-zinc-900 aspect-square bg-zinc-100 overflow-hidden relative group">
                        <img src="https://i.ibb.co/TMQW2MbQ/IMG-20240920-123308-011.jpg" alt="Process 2" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" />
                        <div className="absolute bottom-0 left-0 right-0 bg-zinc-900/80 text-white p-1 text-[8px] font-bold uppercase text-center opacity-0 group-hover:opacity-100 transition-opacity">Bearing Holes</div>
                    </div>
                    <div className="border-2 border-zinc-900 aspect-square bg-zinc-100 overflow-hidden relative group">
                        <img src="https://i.ibb.co/R4SncDTs/IMG-20240923-124256-792.jpg" alt="Process 3" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" />
                        <div className="absolute bottom-0 left-0 right-0 bg-zinc-900/80 text-white p-1 text-[8px] font-bold uppercase text-center opacity-0 group-hover:opacity-100 transition-opacity">Roller</div>
                    </div>
                    <div className="border-2 border-zinc-900 aspect-square bg-zinc-100 overflow-hidden relative group">
                        <img src="https://i.ibb.co/5xJwSGvW/IMG-20240923-141952-022.jpg" alt="Process 4" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" />
                        <div className="absolute bottom-0 left-0 right-0 bg-zinc-900/80 text-white p-1 text-[8px] font-bold uppercase text-center opacity-0 group-hover:opacity-100 transition-opacity">Egg Bin's</div>
                    </div>
                  </div>
                </div>

                <div className="relative border-2 border-zinc-900 dark:border-zinc-100 bg-white dark:bg-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4">
                  <h3>Documentation</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <ImageIcon size={18} />
                    <span className="font-bold text-xs uppercase tracking-tight">System Wiring</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="border-2 border-zinc-900 aspect-square bg-zinc-100 overflow-hidden relative group">
                        <img src="https://i.ibb.co/gLtg5sh1/cb81d78e-aec5-4442-9350-8079c108c0c4.jpg" alt="Process 1" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" />
                        <div className="absolute bottom-0 left-0 right-0 bg-zinc-900/80 text-white p-1 text-[8px] font-bold uppercase text-center opacity-0 group-hover:opacity-100 transition-opacity">Wiring Diagram</div>
                    </div>
                    <div className="border-2 border-zinc-900 aspect-square bg-zinc-100 overflow-hidden relative group">
                        <img src="https://i.ibb.co/wFw2kBND/170d9133-d0f4-4ee2-9396-57ce2e2a5bbc.jpg" alt="Process 2" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" />
                        <div className="absolute bottom-0 left-0 right-0 bg-zinc-900/80 text-white p-1 text-[8px] font-bold uppercase text-center opacity-0 group-hover:opacity-100 transition-opacity">RPI and Arduino Integration</div>
                    </div>
                    <div className="border-2 border-zinc-900 aspect-square bg-zinc-100 overflow-hidden relative group">
                        <img src="https://i.ibb.co/pjjXDftZ/cbedd64b-ef30-405a-afb7-6e376b485fc5.jpg" alt="Process 3" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" />
                        <div className="absolute bottom-0 left-0 right-0 bg-zinc-900/80 text-white p-1 text-[8px] font-bold uppercase text-center opacity-0 group-hover:opacity-100 transition-opacity">Messy Wires</div>
                    </div>
                    <div className="border-2 border-zinc-900 aspect-square bg-zinc-100 overflow-hidden relative group">
                        <img src="https://i.ibb.co/NdvmJVrK/3b255733-e432-4c36-953d-868b38f5cb7b.jpg" alt="Process 4" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" />
                        <div className="absolute bottom-0 left-0 right-0 bg-zinc-900/80 text-white p-1 text-[8px] font-bold uppercase text-center opacity-0 group-hover:opacity-100 transition-opacity">Wire Dressing</div>
                    </div>
                  </div>
                </div>

                {/* System Design 3D Section with Enhanced Logic */}
                <div className="relative border-2 border-zinc-900 dark:border-zinc-100 bg-white dark:bg-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                  <div className="bg-zinc-900 text-white dark:bg-zinc-100 dark:text-black px-4 py-2 flex items-center justify-between border-b-2 border-zinc-900">
                    <div className="flex items-center gap-3">
                      <Box size={18} />
                      <span className="font-bold text-xs uppercase tracking-tight">System Prototype (SketchUp Designed)</span>
                    </div>
                    {/* View Switcher Controls */}
                    <div className="flex items-center border border-white/20 dark:border-black/20 overflow-hidden rounded-sm">
                        <button 
                          onClick={() => setViewMode("3D")}
                          className={`px-2 py-1 text-[8px] font-bold transition-colors ${viewMode === "3D" ? "bg-white text-black dark:bg-black dark:text-white" : "opacity-50"}`}
                        >
                          3D VIEW
                        </button>
                        <button 
                          onClick={() => setViewMode("2D")}
                          className={`px-2 py-1 text-[8px] font-bold transition-colors ${viewMode === "2D" ? "bg-white text-black dark:bg-black dark:text-white" : "opacity-50"}`}
                        >
                          ACTUAL PHOTO
                        </button>
                    </div>
                  </div>
                  
                  <div className="relative aspect-[16/9] bg-zinc-100 dark:bg-zinc-900 overflow-hidden group">
                    {viewMode === "3D" ? (
                      <>
                        {isModelLoading && (
                          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900">
                            <Loader2 className="w-8 h-8 animate-spin text-zinc-900 dark:text-zinc-100 mb-3" />
                            <div className="text-center">
                              <span className="text-[10px] font-black uppercase tracking-widest block mb-1">Loading 3D Assets</span>
                              <span className="text-[8px] opacity-40 uppercase">Optimizing WebGL Renderer...</span>
                            </div>
                          </div>
                        )}
                        <iframe 
                          src="https://3dwarehouse.sketchup.com/embed/3437b641-2691-45ae-a251-9a1521cc35fa?token=s-gUuar5rds=&binaryName=s21" 
                          frameBorder="0" 
                          scrolling="no" 
                          width="100%" 
                          height="100%" 
                          allowFullScreen
                          onLoad={() => setIsModelLoading(false)}
                          className={`transition-opacity duration-700 ${isModelLoading ? 'opacity-0' : 'opacity-100'}`}
                        ></iframe>
                      </>
                    ) : (
                      <div className="w-full h-full overflow-hidden relative">
                        <img 
                          src="https://i.ibb.co/kVB1wdZ9/systempro.png" 
                          alt="Actual System Photo" 
                          className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-500" 
                        />
                        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                      </div>
                    )}

                    {/* Fullscreen Tooltip overlay on hover */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2 pointer-events-none">
                       <div className="bg-zinc-900/80 text-white text-[8px] px-2 py-1 uppercase font-bold backdrop-blur-sm">
                        {viewMode === "3D" ? "Interactive Mode" : "Static High-Def Mode"}
                       </div>
                    </div>
                  </div>
                  
                  {/* Design Metrics Recommendation Section */}
                  <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border-t-2 border-zinc-900 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <span className="text-[8px] font-black uppercase text-zinc-400 block tracking-tighter">Conveyor_Specs</span>
                            <p className="text-[10px] leading-tight font-bold italic">Standardized 2.5" Width with Rubber-Grip Belt for stable Egg Orientation during Camera Capture.</p>
                        </div>
                        <div className="space-y-1 text-right">
                            <span className="text-[8px] font-black uppercase text-zinc-400 block tracking-tighter">Candling_Box_Isolation</span>
                            <p className="text-[10px] leading-tight font-bold italic">Light-sealed chamber designed for 100% ambient light reduction for Rotten Egg high-contrast analysis.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-3 pt-3 border-t border-zinc-200 dark:border-zinc-800">
                        <div className="flex -space-x-1">
                            <div className="w-6 h-6 border-2 border-zinc-900 bg-blue-500 flex items-center justify-center text-[10px] text-white font-bold">Y</div>
                            <div className="w-6 h-6 border-2 border-zinc-900 bg-amber-500 flex items-center justify-center text-[10px] text-white font-bold">O</div>
                            <div className="w-6 h-6 border-2 border-zinc-900 bg-red-500 flex items-center justify-center text-[10px] text-white font-bold">L</div>
                            <div className="w-6 h-6 border-2 border-zinc-900 bg-zinc-900 flex items-center justify-center text-[10px] text-white font-bold">O</div>
                        </div>
                        <p className="text-[9px] font-bold uppercase tracking-tight opacity-70">While the original design specified PVC board, timber planks were utilized for this prototype to maintain cost-efficiency. Although this substitution affects the aesthetic finish, the structural integrity and functionality remain fully aligned with the project requirements.</p>
                    </div>
                  </div>

                  <div className="p-2 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-black text-[7px] text-center font-black uppercase tracking-[0.3em]">
                    Interactive_Simulation_Environment -- SketchUp
                  </div>
                </div>
              </div>
            )}

            <div className="relative border-2 border-zinc-900 dark:border-zinc-100 bg-white dark:bg-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
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
                  <div className="mb-4 border-2 border-zinc-900 bg-black aspect-video overflow-hidden relative group">
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
          </div>
        ))}
      </div>

      <div className="mt-12 py-10 text-center opacity-30 border-t border-dashed border-zinc-400">
        <p className="text-[8px] uppercase tracking-[0.5em]">Log End</p>
      </div>
    </div>
  );
};