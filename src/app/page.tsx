"use client";

import React, { useState } from 'react';
import SmoothScroll from '@/components/SmoothScroll';
import Preloader from '@/components/Preloader';
import CustomCursor from '@/components/CustomCursor';
import WebGLBackground from '@/components/WebGLBackground';
import Navbar from '@/components/Navbar';
import SpatialDeck from '@/components/SpatialDeck';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import SingleProjectSlide, { ProjectData } from '@/components/SingleProjectSlide';
import Experience from '@/components/Experience';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import AIChatbot from '@/components/AIChatbot';

const PROJECTS: ProjectData[] = [
  {
    number: '01',
    title: 'Machine Events Backend System',
    category: 'SPRING BOOT / THREAD-SAFE INGESTION',
    description:
      'High-performance Spring Boot backend engineered to ingest and deduplicate machine events with automated validation and update handling.',
    bullets: [
      'Built a Spring Boot backend to ingest and deduplicate machine events with validation and update handling.',
      'Ensured thread-safe ingestion using transactions and database-level uniqueness constraints.',
      'Implemented time-based statistics APIs to compute machine health and defect metrics.',
      'Added integration tests for ingestion logic, concurrency, and data correctness.',
    ],
    techStack: ['Java', 'Spring Boot', 'JPA', 'H2 Database', 'REST APIs', 'JUnit'],
    github: 'https://github.com',
    gradient: 'from-emerald-900/40 via-teal-900/20 to-gray-950',
    accent: '#ccff00',
  },
  {
    number: '02',
    title: 'Task Manager System (Trello-lite)',
    category: 'FULL STACK BACKEND / JWT SECURITY',
    description:
      'Comprehensive RESTful API for managing projects, tasks, and user roles with stateless JWT authentication and role-based access.',
    bullets: [
      'Developed a RESTful API using Java, Spring Boot, Hibernate (JPA), and MySQL to manage projects, tasks, and user roles.',
      'Implemented user management with registration, login, profile view, and role-based access (USER/ADMIN).',
      'Built project and task management features, allowing creation, assignment, and status tracking of tasks within projects.',
      'Applied Spring Data JPA, validation, and Lombok for efficient database interaction and maintainable architecture.',
    ],
    techStack: ['Java', 'Spring Boot', 'Hibernate/JPA', 'Maven', 'MySQL', 'JWT', 'Lombok'],
    github: 'https://github.com',
    gradient: 'from-blue-900/40 via-cyan-900/20 to-gray-950',
    accent: '#00f0ff',
  },
  {
    number: '03',
    title: 'Recruitment Management System',
    category: 'MICROSERVICES / THIRD-PARTY API INTEGRATION',
    description:
      'Backend infrastructure supporting applicant profiles, resume uploads (PDF/DOCX), and third-party automated parser API integration.',
    bullets: [
      'Developed backend supporting user profiles, resume uploads (PDF/DOCX), and secure role-based access.',
      'Integrated third-party API for automated resume parsing and applicant data extraction.',
      'Implemented and tested RESTful APIs for job postings, applicant browsing, and application submission using Postman.',
      'Enabled admin features to manage job openings and review extracted applicant information.',
    ],
    techStack: ['Java', 'Spring Boot', 'REST APIs', 'JWT', 'Resume Parser API', 'Postman'],
    github: 'https://github.com',
    gradient: 'from-purple-900/40 via-violet-900/20 to-gray-950',
    accent: '#a78bfa',
  },
];

export default function Home() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  const deckSections = [
    { id: 'hero', label: 'Hero', component: <Hero ready={preloaderDone} /> },
    { id: 'about', label: 'About', component: <About /> },
    { id: 'skills', label: 'Skills', component: <Skills /> },
    {
      id: 'project-1',
      label: 'Machine Events Backend',
      component: <SingleProjectSlide project={PROJECTS[0]} />,
    },
    {
      id: 'project-2',
      label: 'Task Manager (Trello-lite)',
      component: <SingleProjectSlide project={PROJECTS[1]} />,
    },
    {
      id: 'project-3',
      label: 'Recruitment Management',
      component: <SingleProjectSlide project={PROJECTS[2]} />,
    },
    { id: 'experience', label: 'Experience', component: <Experience /> },
    { id: 'services', label: 'Services', component: <Services /> },
    { id: 'contact', label: 'Contact', component: <Contact /> },
  ];

  return (
    <SmoothScroll>
      {/* 1. Preloader */}
      <Preloader onComplete={() => setPreloaderDone(true)} />

      {/* 2. WebGL 3D Background */}
      <WebGLBackground />

      {/* 3. Custom Cursor */}
      <CustomCursor />

      {/* 4. Navbar */}
      <Navbar />

      {/* 5. Main Spatial Flight Deck */}
      <main className="relative z-10 min-h-screen bg-transparent text-[#f4f4f5]">
        <SpatialDeck sections={deckSections} />
      </main>

      {/* 6. AI Chatbot */}
      <AIChatbot />
    </SmoothScroll>
  );
}
