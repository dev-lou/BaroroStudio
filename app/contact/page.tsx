"use client";
import { useRef, useState, useEffect } from "react";
import * as motion from "motion/react-client";
import { useScroll, useTransform, AnimatePresence } from "motion/react";
import Label from "@/components/Label";
import IntersectionObserverPlane from "@/components/IntersectionObserverPlane";

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], ["0%", "20%"]);

  // Local Passi City Time
  const [localTime, setLocalTime] = useState("");
  useEffect(() => {
    const updateTime = () => {
      const timeString = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Manila",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setLocalTime(timeString);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Form interactivity
  const servicesList = ["3D Animation", "Brand Identity", "Web Design", "Creative Dev"];
  const budgetRanges = ["< $5k", "$5k - $15k", "$15k - $30k", "$30k+"];
  
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const toggleService = (srv: string) => {
    setSelectedServices((prev) =>
      prev.includes(srv) ? prev.filter((item) => item !== srv) : [...prev, srv]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
    }, 1200);
  };

  const socials = [
    { name: "Instagram", href: "https://instagram.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "Behance", href: "https://behance.net" },
    { name: "Twitter / X", href: "https://x.com" },
  ];

  return (
    <div ref={containerRef} className="relative bg-void-black text-off-white overflow-x-clip min-h-[150vh]">
      <IntersectionObserverPlane setThemeTo="light" setThemeFrom="light" className="absolute top-0 w-full h-10 z-50" />
      
      {/* Massive Sticking Hero */}
      <motion.div 
        style={{ scale, opacity, y }}
        className="fixed top-0 left-0 h-screen w-full flex flex-col justify-center px-4 lg:px-[8vw] z-0 origin-top pointer-events-none"
      >
        <Label className="mb-4">
          <span className="font-light">/</span>&nbsp; CONTACT US
        </Label>
        
        <h1 className="text-[11vw] lg:text-[10vw] leading-[0.85] font-normal tracking-[-0.04em] uppercase text-flare-red">
          LET&apos;S <br/> TALK.
        </h1>
      </motion.div>

      {/* Content that scrolls up over the fixed hero */}
      <div className="relative z-20 mt-[80vh] bg-cool-gray pt-[12vh] px-4 lg:px-[8vw] pb-[20vh] border-t border-gray-800 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Info Side */}
          <div className="lg:col-span-5 flex flex-col justify-between order-2 lg:order-1 pt-4">
            <div>
              <h2 className="text-[8vw] lg:text-[4vw] leading-[0.9] font-normal tracking-[-0.02em] mb-12">REACH OUT.</h2>
              <div className="flex flex-col gap-10">
                <div>
                  <h3 className="text-gray-500 mb-2 uppercase tracking-widest text-[11px] font-bold">Email</h3>
                  <a href="mailto:Info@BaroroStudio.com" className="text-xl lg:text-2xl hover:text-flare-red transition-colors duration-300 font-light underline underline-offset-4 decoration-white/10 hover:decoration-flare-red">
                    Info@BaroroStudio.com
                  </a>
                </div>
                <div>
                  <h3 className="text-gray-500 mb-2 uppercase tracking-widest text-[11px] font-bold">Phone</h3>
                  <a href="tel:+639000000000" className="text-xl lg:text-2xl hover:text-flare-red transition-colors duration-300 font-light underline underline-offset-4 decoration-white/10 hover:decoration-flare-red">
                    +63 9XX XXX XXXX
                  </a>
                </div>
                <div>
                  <h3 className="text-gray-500 mb-2 uppercase tracking-widest text-[11px] font-bold">Location</h3>
                  <p className="text-xl lg:text-2xl font-light leading-[1.4]">
                    Passi City, <br/>
                    Iloilo Philippines
                  </p>
                </div>
              </div>
            </div>

            {/* Timezone & Socials footer */}
            <div className="mt-16 lg:mt-24 pt-8 border-t border-white/10 flex flex-col gap-8">
              {localTime && (
                <div>
                  <span className="text-gray-500 text-[11px] tracking-widest uppercase font-bold block mb-1">Local Time</span>
                  <span className="text-2xl font-light text-flare-red">{localTime} <span className="text-sm text-gray-400">GMT+8</span></span>
                </div>
              )}
              
              <div>
                <span className="text-gray-500 text-[11px] tracking-widest uppercase font-bold block mb-3">Connect</span>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {socials.map((social) => (
                    <a 
                      key={social.name} 
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-lg font-light text-gray-300 hover:text-flare-red transition-colors duration-300 relative group"
                    >
                      {social.name}
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-flare-red transition-all duration-300 group-hover:w-full" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-[#0b0b0d] border border-white/5 rounded-2xl p-8 lg:p-12 order-1 lg:order-2 shadow-2xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              {formStatus === "success" ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="h-full min-h-[400px] flex flex-col justify-center items-center text-center py-12"
                >
                  <div className="w-16 h-16 bg-flare-red/10 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-flare-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-light mb-4">Message Sent!</h3>
                  <p className="text-gray-400 font-light text-lg max-w-sm">
                    Thank you for reaching out to Baroro Studio. Our team will review your inquiry and get back to you shortly.
                  </p>
                  <button 
                    onClick={() => {
                      setFormStatus("idle");
                      setFormData({ name: "", email: "", message: "" });
                      setSelectedServices([]);
                      setSelectedBudget("");
                    }} 
                    className="mt-8 text-flare-red text-sm font-semibold tracking-wider uppercase hover:text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.div 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="text-3xl font-light mb-10 text-off-white">SEND A MESSAGE</h3>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                    
                    {/* Name Input */}
                    <div className="relative group">
                      <input 
                        type="text" 
                        required
                        placeholder="Name" 
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full bg-transparent border-b border-white/10 pb-3 text-lg font-light outline-none transition-colors placeholder:text-gray-600 focus:placeholder:text-gray-400 text-off-white"
                      />
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-flare-red transition-all duration-300 group-focus-within:w-full" />
                    </div>

                    {/* Email Input */}
                    <div className="relative group">
                      <input 
                        type="email" 
                        required
                        placeholder="Email" 
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full bg-transparent border-b border-white/10 pb-3 text-lg font-light outline-none transition-colors placeholder:text-gray-600 focus:placeholder:text-gray-400 text-off-white"
                      />
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-flare-red transition-all duration-300 group-focus-within:w-full" />
                    </div>

                    {/* Multi-Select Tags for Services */}
                    <div className="mt-4">
                      <span className="text-gray-500 text-[11px] tracking-widest uppercase font-bold block mb-4">I&apos;M INTERESTED IN...</span>
                      <div className="flex flex-wrap gap-3">
                        {servicesList.map((srv) => {
                          const isSelected = selectedServices.includes(srv);
                          return (
                            <button
                              key={srv}
                              type="button"
                              onClick={() => toggleService(srv)}
                              className={`px-4 py-2 border rounded-full text-[14px] uppercase tracking-wider transition-all duration-300 font-medium ${
                                isSelected 
                                  ? "bg-flare-red border-flare-red text-void-black font-bold" 
                                  : "border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                              }`}
                            >
                              {srv}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Budget Selector */}
                    <div className="mt-2">
                      <span className="text-gray-500 text-[11px] tracking-widest uppercase font-bold block mb-4">BUDGET RANGE</span>
                      <div className="flex flex-wrap gap-3">
                        {budgetRanges.map((range) => {
                          const isSelected = selectedBudget === range;
                          return (
                            <button
                              key={range}
                              type="button"
                              onClick={() => setSelectedBudget(range)}
                              className={`px-4 py-2 border rounded-full text-[14px] uppercase tracking-wider transition-all duration-300 font-medium ${
                                isSelected 
                                  ? "bg-flare-red border-flare-red text-void-black font-bold" 
                                  : "border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                              }`}
                            >
                              {range}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Message Details */}
                    <div className="relative group mt-2">
                      <textarea 
                        placeholder="Tell us about your project..." 
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        className="w-full bg-transparent border-b border-white/10 pb-3 text-lg font-light outline-none transition-colors placeholder:text-gray-600 focus:placeholder:text-gray-400 resize-none text-off-white"
                      ></textarea>
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-flare-red transition-all duration-300 group-focus-within:w-full" />
                    </div>

                    {/* Submit Button */}
                    <button 
                      type="submit" 
                      disabled={formStatus === "submitting"}
                      className="relative overflow-hidden bg-flare-red text-void-black py-4 mt-6 font-bold tracking-widest uppercase transition-colors duration-300 w-full lg:w-auto lg:px-16 self-start text-sm group flex items-center justify-center gap-2"
                    >
                      <span className="relative z-10">
                        {formStatus === "submitting" ? "TRANSMITTING..." : "SUBMIT INQUIRY"}
                      </span>
                      {formStatus !== "submitting" && (
                        <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                      )}
                      
                      {/* Hover background effect */}
                      <span className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-x-100" />
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}
