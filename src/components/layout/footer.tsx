import Link from "next/link";
import { Plane } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-background/50 backdrop-blur-lg border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary mb-4">
              <Plane className="h-8 w-8" />
              <span className="font-headline text-2xl">Elevate Aviation</span>
            </Link>
            <p className="text-sm text-foreground/80">
              Forging the future of aviation, one pilot at a time.
            </p>
          </div>
          <div className="md:justify-self-center">
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-foreground/80 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:justify-self-end">
             <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
             <address className="not-italic text-sm text-foreground/80 space-y-2">
                <p>123 Aviation Way, Flight City, 90210</p>
                <p>Email: <a href="mailto:admissions@elevate.aero" className="hover:text-primary transition-colors">admissions@elevate.aero</a></p>
                <p>Phone: <a href="tel:+1234567890" className="hover:text-primary transition-colors">+1 (234) 567-890</a></p>
             </address>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-sm text-foreground/80">
                &copy; {new Date().getFullYear()} Elevate Aviation. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}
