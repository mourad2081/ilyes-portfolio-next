"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { projects } from "@/lib/data";

export default function ProjectsSection() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Duplicate projects array for seamless infinite scroll
  const duplicated = [...projects, ...projects];

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-24 overflow-hidden bg-gray-50 dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 rounded-full mb-4">
            {t("projects_subtitle")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white">
            {t("projects_title")}
          </h2>
        </motion.div>
      </div>

      {/* Auto-scrolling carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="group"
      >
        <div className="flex gap-6 px-4 animate-scroll-x group-hover:[animation-play-state:paused]">
          {duplicated.map((project, i) => (
            <Link
              key={`${project.slug}-${i}`}
              href={`/projects/${project.slug}`}
              className="relative flex-shrink-0 w-[340px] sm:w-[400px] h-[280px] rounded-2xl overflow-hidden group/card"
            >
              {/* Project image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                unoptimized
                className="object-cover transition-transform duration-500 group-hover/card:scale-110"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                {/* Status badge */}
                <span
                  className={`inline-block w-fit px-3 py-1 text-xs font-semibold rounded-full mb-3 ${
                    project.status === "Delivered"
                      ? "bg-green-500/20 text-green-300"
                      : "bg-amber-500/20 text-amber-300"
                  }`}
                >
                  {project.status}
                </span>

                <h3 className="text-lg font-bold text-white mb-1">
                  {project.shortTitle}
                </h3>
                <p className="text-sm text-gray-300 line-clamp-2 mb-3">
                  {project.description}
                </p>

                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 group-hover/card:gap-2.5 transition-all">
                  {t("view_details")}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* CSS keyframes for auto-scroll */}
      <style jsx global>{`
        @keyframes scroll-x {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-x {
          animation: scroll-x 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
