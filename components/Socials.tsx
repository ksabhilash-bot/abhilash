import React from "react";
import { Link2 } from "lucide-react";

export default function Socials() {
  const socialLinks = [
    {
      icon: (
        <svg 
          viewBox="0 0 24 24" 
          className="w-9 h-9 group-hover:text-accent-blue transition-colors duration-500 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      tag: "NETWORK",
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/abhilash-k-s-b801ab386?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    },
    {
      icon: (
        <svg 
          viewBox="0 0 24 24" 
          className="w-9 h-9 group-hover:text-white transition-colors duration-500 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      ),
      tag: "REPOSITORIES",
      title: "GitHub",
      link: "https://github.com/ksabhilash-bot"
    },
    {
      icon: (
        <svg 
          viewBox="0 0 24 24" 
          className="w-9 h-9 group-hover:text-accent-blue transition-colors duration-500 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      tag: "INQUIRIES",
      title: "Direct Email",
      link: "mailto:ksabhilash11111@gmail.com"
    }
  ];

  return (
    <section className="pb-24 md:pb-32 px-6 md:px-16 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
      {socialLinks.map((social, index) => (
        <a 
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-10 border border-border-subtle flex flex-col justify-between h-64 hover:bg-primary hover:text-paper-white hover:border-primary transition-all duration-500 cursor-pointer select-none bg-paper-white relative"
        >
          {/* Card hover icon change */}
          <div className="text-primary group-hover:text-paper-white transition-colors duration-500">
            {social.icon}
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5 opacity-60 group-hover:opacity-85 transition-opacity">
              <span className="font-sans text-[9px] font-bold tracking-widest uppercase">
                {social.tag}
              </span>
              <Link2 size={10} />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold">
              {social.title}
            </h3>
          </div>
          
          {/* Subtle architectural arrow indicator */}
          <span className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500 font-sans text-xs">
            →
          </span>
        </a>
      ))}
    </section>
  );
}
