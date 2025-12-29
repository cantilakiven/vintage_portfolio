import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

export const ContactTab = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send(
        "service_fgtgi1f",
        "template_zgn0yi3",
        {
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          message: formData.message,
          to_name: "Kiven Cantila",
          email_subject: `Portfolio Contact: ${formData.name}`,
        },
        "1ufm_aRIst9HtsMq3"
      );

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="animate-fade-in">
      <h2>Contact</h2>
      
      <p className="mb-8 opacity-0 animate-fade-in stagger-1 leading-relaxed">
        If you have any questions, opportunities, or just want to say hello, feel free to reach out using the form below or through my contact information.
      </p>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Contact Info */}
        <div className="flex-1 opacity-0 animate-fade-in-up stagger-2">
          <h3 className="font-serif text-primary mb-5 text-lg tracking-wide">Contact Information</h3>
          <div className="section-box ornament-corners hover-glow overflow-hidden">
            <table className="info-table w-full table-fixed">
              <tbody>
                <tr className="border-b border-border/40">
                  <td className="py-3 w-16 sm:w-24 shrink-0 align-top">Email:</td>
                  <td className="py-3 break-words hyphens-auto">
                    <a 
                      href="mailto:cantilakiven.mailbox01@gmail.com" 
                      className="text-xs sm:text-sm md:text-base hover:underline text-primary break-all block"
                    >
                      cantilakiven.mailbox01@gmail.com
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-border/40">
                  <td className="py-3 w-16 sm:w-24 shrink-0 align-top">Phone:</td>
                  <td className="py-3 text-sm sm:text-base">
                    <span className="block sm:inline">+639816195241</span>
                    <span className="hidden sm:inline"> / </span>
                    <span className="block sm:inline">+639359193319</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 w-16 sm:w-24 shrink-0 align-top">Location:</td>
                  <td className="py-3 text-sm sm:text-base">Zamboanga del Norte, Philippines</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-serif text-primary mb-5 text-lg tracking-wide">Social Links</h3>
          <div className="section-box ornament-corners hover-glow">
            <ul className="list-none space-y-3">
              <li className="relative pl-5 transition-all duration-300 hover:translate-x-2 before:content-['◆'] before:absolute before:left-0 before:text-primary/50 before:text-xs before:top-1">
                <a href="https://github.com/cantilakiven" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  GitHub
                </a>
              </li>
              <li className="relative pl-5 transition-all duration-300 hover:translate-x-2 before:content-['◆'] before:absolute before:left-0 before:text-primary/50 before:text-xs before:top-1">
                <a href="https://dev.to/kiven_cantila" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Dev.to
                </a>
              </li>
              <li className="relative pl-5 transition-all duration-300 hover:translate-x-2 before:content-['◆'] before:absolute before:left-0 before:text-primary/50 before:text-xs before:top-1">
                <a href="https://www.facebook.com/makemecum.yoti/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li className="relative pl-5 transition-all duration-300 hover:translate-x-2 before:content-['◆'] before:absolute before:left-0 before:text-primary/50 before:text-xs before:top-1">
                <a href="https://www.youtube.com/@cantila-t1x" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 opacity-0 animate-fade-in-up stagger-3">
          <h3 className="font-serif text-primary mb-5 text-lg tracking-wide">Send a Message</h3>
          <div className="section-box ornament-corners hover-glow">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="group">
                <label htmlFor="name" className="block font-medium mb-2 transition-colors duration-300 group-focus-within:text-primary tracking-wide">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full px-4 py-3 input-elegant focus:outline-none transition-all duration-300"
                  placeholder="Your full name"
                />
              </div>

              <div className="group">
                <label htmlFor="email" className="block font-medium mb-2 transition-colors duration-300 group-focus-within:text-primary tracking-wide">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full px-4 py-3 input-elegant focus:outline-none transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="group">
                <label htmlFor="message" className="block font-medium mb-2 transition-colors duration-300 group-focus-within:text-primary tracking-wide">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full px-4 py-3 input-elegant focus:outline-none resize-vertical transition-all duration-300"
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="btn-vintage w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none disabled:hover:shadow-none"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};