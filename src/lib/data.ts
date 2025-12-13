import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Award, BookOpen, Briefcase, Users, Plane, ClipboardList, GraduationCap, Building } from 'lucide-react';

const findImage = (id: string): ImagePlaceholder => {
    const image = PlaceHolderImages.find(img => img.id === id);
    if (!image) {
        // Fallback to a default image if not found
        return {
            id: 'not-found',
            description: 'Placeholder image',
            imageUrl: 'https://picsum.photos/seed/error/600/400',
            imageHint: 'fallback',
        };
    }
    return image;
};

export const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/courses', label: 'Courses' },
    { href: '/admissions', label: 'Admissions' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
];

export const whyChooseUsItems = [
    {
        icon: Award,
        title: 'World-Class Instructors',
        description: 'Learn from seasoned industry experts with thousands of hours of flight and instruction experience.',
    },
    {
        icon: Users,
        title: 'Global Alumni Network',
        description: 'Join an elite network of successful pilots flying for major airlines across the globe.',
    },
    {
        icon: BookOpen,
        title: 'State-of-the-Art Simulators',
        description: 'Train on the latest full-motion simulators that replicate real-world flight conditions.',
    },
    {
        icon: Briefcase,
        title: 'Unmatched Career Placement',
        description: 'Our dedicated placement team ensures you land your dream job right after graduation.',
    },
];

export const courses = [
    {
        id: 'ppl',
        title: 'Private Pilot License (PPL)',
        description: 'Your first step into the world of aviation. Master the fundamentals of flight and earn your wings.',
        image: findImage('course-ppl'),
    },
    {
        id: 'cpl',
        title: 'Commercial Pilot License (CPL)',
        description: 'Transform your passion into a profession. Train for a career as a professional pilot.',
        image: findImage('course-cpl'),
    },
    {
        id: 'atpl',
        title: 'Airline Transport Pilot License (ATPL)',
        description: 'Reach the pinnacle of aviation. Qualify to command aircraft for major commercial airlines.',
        image: findImage('course-atpl'),
    },
];

export const trainingTimelineSteps = [
    {
        icon: ClipboardList,
        title: 'Enquiry & Counseling',
        description: 'Start your journey with a personalized counseling session to map out your career path.',
    },
    {
        icon: GraduationCap,
        title: 'Enrollment & Ground School',
        description: 'Complete your enrollment and build a strong theoretical foundation with our expert-led ground school.',
    },
    {
        icon: Plane,
        title: 'Flight Training & Simulators',
        description: 'Take to the skies and hone your skills in our modern fleet and advanced simulators.',
    },
    {
        icon: Building,
        title: 'Placement & Airline Career',
        description: 'Graduate and seamlessly transition into your first officer role with a leading airline.',
    },
];

export const placementStats = {
    pilotsPlaced: 1200,
    partnerAirlines: 45,
    yearsOfExcellence: 15,
};

export const airlineLogos = [
    findImage('airline-logo-1'),
    findImage('airline-logo-2'),
    findImage('airline-logo-3'),
    findImage('airline-logo-4'),
    findImage('airline-logo-5'),
];


export const testimonials = [
    {
        name: 'Alex Johnson',
        role: 'First Officer, Global Airways',
        quote: 'Elevate Aviation didn\'t just teach me to fly; they shaped my career. The training is unparalleled.',
        image: findImage('testimonial-1'),
    },
    {
        name: 'Samantha Lee',
        role: 'Captain, SkyHigh Airlines',
        quote: 'The instructors are true professionals. Their guidance was instrumental in my journey to the captain\'s seat.',
        image: findImage('testimonial-2'),
    },
    {
        name: 'Michael Chen',
        role: 'Cadet Pilot',
        quote: 'From the simulators to the aircraft, every piece of equipment is top-notch. A truly premium experience.',
        image: findImage('testimonial-3'),
    },
];
