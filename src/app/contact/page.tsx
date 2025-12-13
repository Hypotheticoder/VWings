import SectionHeading from "@/components/common/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from 'lucide-react';
import { MotionDiv } from "@/components/common/motion-components";


export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get in Touch"
          subtitle="Start Your Aviation Journey Today"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <MotionDiv
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
            >
                <h3 className="font-headline text-3xl font-bold">Contact Information</h3>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <MapPin className="h-8 w-8 text-primary mt-1 shrink-0"/>
                        <div>
                            <h4 className="font-semibold text-lg">Our Campus</h4>
                            <p className="text-muted-foreground">123 Aviation Way, Flight City, 90210</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Mail className="h-8 w-8 text-primary mt-1 shrink-0"/>
                        <div>
                            <h4 className="font-semibold text-lg">Email Us</h4>
                            <a href="mailto:admissions@elevate.aero" className="text-muted-foreground hover:text-primary transition-colors">admissions@elevate.aero</a>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Phone className="h-8 w-8 text-primary mt-1 shrink-0"/>
                        <div>
                            <h4 className="font-semibold text-lg">Call Us</h4>
                            <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">+1 (234) 567-890</a>
                        </div>
                    </div>
                </div>
            </MotionDiv>
            
            <MotionDiv
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <Card className="bg-card border-accent/20">
                    <CardHeader>
                        <CardTitle className="font-headline text-3xl">Send a Message</CardTitle>
                        <CardDescription>We'll get back to you within 24 hours.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input id="name" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input id="email" type="email" placeholder="john.doe@example.com" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Your Message</Label>
                                <Textarea id="message" placeholder="I'd like to know more about..." />
                            </div>
                             <Button type="submit" className="w-full" size="lg">Send Message</Button>
                        </form>
                    </CardContent>
                </Card>
            </MotionDiv>
        </div>
      </div>
    </div>
  );
}
