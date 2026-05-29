"use client";

import React, { useState } from "react";
import { Send, Check, Mail } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", project: "Full Stack Application", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("ksabhilash11111@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API request delay
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setFormState({ name: "", email: "", project: "Full Stack Application", message: "" });
      
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section className="py-24 md:py-32 bg-surface-container reveal" id="contact">
      <div className="px-6 md:px-16 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Column: Typography Details */}
        <div className="space-y-8 select-none">
          <span className="font-sans text-[10px] font-bold tracking-widest text-accent-blue uppercase block">
            Get In Touch
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-primary">
            Let&apos;s start a conversation.
          </h2>
          <p className="font-sans text-base text-text-secondary leading-relaxed max-w-md">
            I am currently available for freelance opportunities, long-term contract engagements, or full-time roles. If you have a project that needs a high touch of system design and digital craftsmanship, get in touch.
          </p>
          
          <div className="space-y-4 pt-6">
            <p className="font-sans text-[10px] font-bold tracking-widest text-text-secondary uppercase">
              DIRECT CONTACT
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="mailto:ksabhilash11111@gmail.com"
                className="font-serif text-xl sm:text-2xl md:text-3xl font-bold block underline underline-offset-8 decoration-border-subtle hover:decoration-accent-blue hover:text-accent-blue transition-all cursor-pointer"
              >
                ksabhilash11111@gmail.com
              </a>
              <button
                onClick={copyEmail}
                className="border border-border-subtle hover:border-primary px-3 py-1 font-sans text-[9px] font-bold tracking-widest uppercase hover:bg-primary hover:text-white transition-all max-w-fit flex items-center gap-1 cursor-pointer select-none"
              >
                {copied ? <Check size={10} /> : <Mail size={10} />}
                {copied ? "Copied" : "Copy Mail"}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <form 
          onSubmit={handleSubmit}
          className="space-y-10 bg-paper-white p-8 md:p-12 border border-border-subtle hover:shadow-2xl transition-shadow duration-500 relative"
        >
          {/* Form input: Name */}
          <div className="space-y-2">
            <label className="font-sans text-[9px] font-bold tracking-widest text-text-secondary uppercase">
              Full Name
            </label>
            <input 
              required
              type="text" 
              name="name"
              value={formState.name}
              onChange={handleInputChange}
              placeholder="Jane Doe" 
              className="w-full bg-transparent p-2 font-sans text-sm outline-none border-b border-border-subtle focus:border-b-2 focus:border-accent-blue transition-all"
            />
          </div>

          {/* Form input: Email */}
          <div className="space-y-2">
            <label className="font-sans text-[9px] font-bold tracking-widest text-text-secondary uppercase">
              Email Address
            </label>
            <input 
              required
              type="email" 
              name="email"
              value={formState.email}
              onChange={handleInputChange}
              placeholder="jane@example.com" 
              className="w-full bg-transparent p-2 font-sans text-sm outline-none border-b border-border-subtle focus:border-b-2 focus:border-accent-blue transition-all"
            />
          </div>

          {/* Form input: Project type */}
          <div className="space-y-2">
            <label className="font-sans text-[9px] font-bold tracking-widest text-text-secondary uppercase">
              Project Type
            </label>
            <select 
              name="project"
              value={formState.project}
              onChange={handleInputChange}
              className="w-full bg-transparent p-2 font-sans text-sm outline-none border-b border-border-subtle focus:border-b-2 focus:border-accent-blue transition-all cursor-pointer"
            >
              <option value="Full Stack Application">Full Stack Application</option>
              <option value="High Performance Backend">High Performance Backend</option>
              <option value="Docker Containerization Setup">Docker Containerization Setup</option>
              <option value="Redis Caching Implementation">Redis Caching Implementation</option>
              <option value="Consulting &amp; Architecture">Consulting &amp; Architecture</option>
            </select>
          </div>

          {/* Form input: Message */}
          <div className="space-y-2">
            <label className="font-sans text-[9px] font-bold tracking-widest text-text-secondary uppercase">
              Message
            </label>
            <textarea 
              required
              name="message"
              value={formState.message}
              onChange={handleInputChange}
              rows={3} 
              placeholder="Tell me about your project specifications..." 
              className="w-full bg-transparent p-2 font-sans text-sm outline-none border-b border-border-subtle focus:border-b-2 focus:border-accent-blue transition-all resize-none"
            />
          </div>

          {/* Form Submit button */}
          <button 
            type="submit" 
            disabled={submitting || success}
            className={`w-full py-5 font-sans text-[10px] font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer select-none active:scale-[0.98] ${
              success 
                ? "bg-[#28a745] text-white" 
                : submitting 
                ? "bg-[#626875] text-white opacity-80 cursor-wait" 
                : "bg-primary text-white hover:bg-accent-blue hover:shadow-lg"
            }`}
          >
            {success ? (
              <>
                <Check size={14} className="animate-bounce" />
                Inquiry Sent Successfully
              </>
            ) : submitting ? (
              <>
                <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin inline-block" />
                Sending Inquiry...
              </>
            ) : (
              <>
                <Send size={12} />
                Send Inquiry
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
