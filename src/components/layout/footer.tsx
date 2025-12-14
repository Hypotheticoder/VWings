import Link from "next/link";
import { Plane } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative mt-20">
      {/* Full-bleed purple background on large screens; contained on smaller screens */}
      <div className="w-full bg-gradient-to-tr from-[#3b0d66]/80 via-[#5b2b8a]/70 to-[#7a3bd2]/60 shadow-2xl backdrop-blur-xl border-t border-white/5">
        <div className="mx-auto max-w-screen-xl md:-translate-y-10 lg:translate-y-0 lg:rounded-none rounded-2xl px-6 md:px-10 lg:px-16 py-10 md:py-14 backdrop-blur-md bg-white/5">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-start">
                <Link
                  href="/"
                  className="flex items-center gap-3 text-xl font-bold text-white mb-3"
                >
                  <Plane className="h-8 w-8 text-primary" />
                  <span className="font-headline text-2xl text-white">
                    Elevate Aviation
                  </span>
                </Link>
                <p className="text-sm text-white/80 max-w-md">
                  Forging the future of aviation, one pilot at a time.
                </p>
              </div>

              <div className="md:justify-self-center">
                <h3 className="font-semibold text-white mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/80 hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:justify-self-end">
                <h3 className="font-semibold text-white mb-4">Contact Us</h3>
                <address className="not-italic text-sm text-white/80 space-y-2 max-w-sm">
                  <p>123 Aviation Way, Flight City, 90210</p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:admissions@elevate.aero"
                      className="hover:text-primary transition-colors"
                    >
                      admissions@elevate.aero
                    </a>
                  </p>
                  <p>
                    Phone:{" "}
                    <a
                      href="tel:+1234567890"
                      className="hover:text-primary transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </p>
                </address>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-white/70">
                &copy; {new Date().getFullYear()} Elevate Aviation. All rights
                reserved.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="/privacy"
                  className="text-sm text-white/70 hover:text-white"
                >
                  Privacy
                </Link>
                <Link
                  href="/terms"
                  className="text-sm text-white/70 hover:text-white"
                >
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
