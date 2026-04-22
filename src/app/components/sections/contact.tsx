import { Github, Linkedin, Mail, Copyright } from "lucide-react";

interface contactProps {
  t: (key: string) => any;
}

export function Footer({ t }: contactProps) {
  // Accessing the footer data from your JSON
  const footerData = t('footer');

  return (
    <footer className="border-t bg-background/95 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        
        {/* Status Message */}
        <p className="text-muted-foreground text-center max-w-md">
          {footerData.status}
        </p>

        {/* Social Links */}
        <div className="flex gap-5">
          <a href={footerData.links[0].url} target="_blank" className="hover:text-primary transition-colors">
            <Github size={24} />
          </a>
          <a href={footerData.links[1].url} target="_blank" className="hover:text-primary transition-colors">
            <Linkedin size={24} />
          </a>
          <a href={footerData.links[2].url} className="hover:text-primary transition-colors">
            <Mail size={24} />
          </a>
        </div>

        {/* Copyright & Technical Credit */}
        <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground pt-4 border-t w-full max-w-xl">
          <p className="flex items-center gap-1">
            <Copyright size={14} /> {footerData.copy}
          </p>
          <p>
            {/* Added Flutter & Next.js to match your toolkit */}
            Built with <span className="text-foreground font-medium">Next.js, Flutter & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}