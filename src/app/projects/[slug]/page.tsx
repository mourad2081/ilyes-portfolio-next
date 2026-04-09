"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Shield,
  Zap,
  Globe,
  CreditCard,
  Ship,
  BookOpen,
  CheckCircle,
} from "lucide-react";
import { projects } from "@/lib/data";
import { useLanguage } from "@/hooks/use-language";

const ProjectMap = dynamic(
  () => import("@/components/ui/project-map").then((m) => m.ProjectMap),
  { ssr: false, loading: () => <div className="w-full h-full bg-slate-800 rounded-xl animate-pulse" /> }
);

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Zap,
  Globe,
  CreditCard,
  Ship,
  BookOpen,
};

export default function ProjectPage() {
  const params = useParams();
  const { t } = useLanguage();
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/#projects" className="text-cyan-500 hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-24 pb-20">
      {/* Hero */}
      <section className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-500 rounded-full">
              {t("featured_project")}
            </span>
            {project.status === "Delivered" ? (
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-green-500/10 text-green-500 rounded-full">
                <CheckCircle className="w-3 h-3 inline mr-1" />
                {t("delivered")}
              </span>
            ) : (
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-500 rounded-full">
                In Progress
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            {project.title.split(" ").slice(0, 3).join(" ")}
            <br />
            <span className="text-cyan-500">
              {project.title.split(" ").slice(3).join(" ")}
            </span>
          </h1>

          <p className="text-lg text-slate-600 dark:text-gray-400 max-w-3xl leading-relaxed mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-bold tracking-wider px-4 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 text-slate-600 dark:text-gray-400 uppercase"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-gray-200 dark:border-gray-800">
            {project.metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                className="flex flex-col justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold mb-2">
                  {metric.label}
                </p>
                <p
                  className={`text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${metric.gradient}`}
                >
                  {metric.value}
                </p>
                <p className="text-xs text-slate-400 mt-2 font-medium">
                  {metric.sub}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Content + Map */}
      <section className="container mx-auto px-6 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Feature Cards */}
          <div className="space-y-8">
            {project.features.map((feat, i) => {
              const Icon = iconMap[feat.icon] || Shield;
              return (
                <motion.div
                  key={feat.title}
                  className="bg-white/80 dark:bg-slate-800/70 backdrop-blur-xl border border-gray-200/50 dark:border-white/5 rounded-2xl p-8"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <Icon className="w-6 h-6 text-cyan-500" />
                    {feat.title}
                  </h3>
                  <p className="text-slate-600 dark:text-gray-400 leading-relaxed mb-4">
                    {feat.desc}
                  </p>
                  {feat.items && (
                    <ul className="space-y-2 text-slate-600 dark:text-gray-400">
                      {feat.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="text-cyan-500 mt-1">&#10003;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Map */}
          <div className="sticky top-24">
            <div className="bg-white/80 dark:bg-slate-800/70 backdrop-blur-xl border border-gray-200/50 dark:border-white/5 rounded-2xl p-2 h-[600px] flex flex-col relative">
              <ProjectMap center={project.mapCenter} zoom={project.mapZoom} />
              <div className="absolute bottom-6 right-6 z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-4 py-3 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
                  {t("proj_zone")}
                </h4>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 inline-block" />
                  {t("strategic_corridor")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
