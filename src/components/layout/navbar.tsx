"use client";

import Link from "next/link";
import { Plane, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      initial={{ y: -120 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
      className="fixed top-4 left-0 right-0 w-full z-50"
    >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className={cn(
                "relative flex items-center justify-between h-20 transition-all duration-300 rounded-xl px-6",
                isScrolled || isMenuOpen ? "bg-card/70 shadow-lg backdrop-blur-xl border border-white/10" : "bg-transparent"
             )}>

                <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
                    <Plane className="h-8 w-8" />
                    <span className="font-headline text-2xl">Elevate Aviation</span>
                </Link>

                <nav className="hidden md:flex items-center space-x-2 bg-card/50 border border-white/10 rounded-full px-4 py-2">
                    {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                        "relative text-sm font-medium transition-colors hover:text-primary px-4 py-2 rounded-full",
                        pathname === link.href ? "text-primary" : "text-foreground"
                        )}
                    >
                        {link.label}
                        {pathname === link.href && (
                        <motion.div
                            className="absolute inset-0 bg-primary/10 rounded-full"
                            layoutId="underline"
                        />
                        )}
                    </Link>
                    ))}
                </nav>
                
                <div className="hidden md:block">
                    <Button asChild>
                    <Link href="/admissions">Apply Now</Link>
                    </Button>
                </div>

                <div className="md:hidden">
                    <Button variant="ghost" size="icon" onClick={toggleMenu}>
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </div>
            </div>
        </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="md:hidden mt-2 mx-4 rounded-xl bg-card/90 backdrop-blur-lg"
          >
            <nav className="flex flex-col items-center space-y-4 py-8">
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={menuItemVariants}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      pathname === link.href ? "text-primary" : "text-foreground"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
               <motion.div variants={menuItemVariants}>
                 <Button asChild>
                    <Link href="/admissions">Apply Now</Link>
                 </Button>
               </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
