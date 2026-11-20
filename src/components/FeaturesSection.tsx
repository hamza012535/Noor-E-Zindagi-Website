import React from 'react';
import {
  BellRing,
  BookOpen,
  CalendarDays,
  ChevronDown,
  Clock,
  HeartHandshake,
  LayoutDashboard,
  Library,
  ListChecks,
  MoonStar,
  ScanText,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from 'lucide-react';
import { LocaleStrings } from '../data/translations';

interface FeaturesSectionProps {
  t: LocaleStrings;
}

const FEATURE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  'home-dashboard': LayoutDashboard,
  'quran-reader': BookOpen,
  'salah-times': Clock,
  'sunnah-routine': ListChecks,
  'azkar-duas': HeartHandshake,
  'hadith-library': Library,
  'hijri-calendar': CalendarDays,
  'ai-assistant': Sparkles,
  'ocr-scanner': ScanText,
  'worship-reminders': BellRing,
  'profile-reports': UserCheck,
  'dark-reading-mode': MoonStar,
  'admin-verification': ShieldCheck,
};

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ t }) => {
  return (
    <section
      id="features"
      className="py-16 md:py-24 bg-[#FAF6EE] dark:bg-[#091511] border-b border-[#E2D8C7] dark:border-[#223A30]"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="max-w-2xl mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#0D3B2E] dark:text-[#F5EFE4] [text-wrap:balance]">
            {t.featuresSection.heading}
          </h2>
          <p className="mt-4 text-base text-[#4A5A52] dark:text-[#B7C4BD] leading-relaxed">
            {t.featuresSection.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.featuresSection.items.map((feature) => {
            const Icon = FEATURE_ICONS[feature.id] ?? BookOpen;
            const isWorkflow = Boolean(feature.isTrustWorkflow);

            return (
              <article
                key={feature.id}
                className={`rounded-2xl bg-white dark:bg-[#11231C] border border-[#E2D8C7] dark:border-[#223A30] p-6 surface-shadow-sm flex flex-col justify-between ${
                  isWorkflow ? 'md:col-span-2 lg:col-span-3' : ''
                }`}
              >
                <div>
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#0D3B2E] text-[#C99A3B] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-[#0D3B2E] dark:text-[#F5EFE4] pt-1">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm text-[#4A5A52] dark:text-[#B7C4BD] leading-relaxed">
                    {feature.summary}
                  </p>

                  {/* Non-interactive static Admin Verification workflow diagram */}
                  {isWorkflow && (
                    <div
                      aria-label="Content verification workflow diagram"
                      className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
                    >
                      {t.featuresSection.workflowSteps.map((step) => (
                        <div
                          key={step}
                          className="rounded-xl bg-[#EAF2EE] dark:bg-[#152721] border border-[#DCE7E1] dark:border-[#223A30] px-4 py-3 text-xs font-medium text-[#0D3B2E] dark:text-[#F3E4BE]"
                        >
                          {step}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <details className="group mt-5 pt-4 border-t border-[#E2D8C7] dark:border-[#223A30]">
                  <summary className="list-none cursor-pointer inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C6516] dark:text-[#C99A3B] hover:text-[#0D3B2E] dark:hover:text-[#F3E4BE] select-none py-1">
                    <span className="group-open:hidden">
                      {t.featuresSection.learnMore}
                    </span>
                    <span className="hidden group-open:inline">
                      {t.featuresSection.showLess}
                    </span>
                    <ChevronDown
                      className="w-4 h-4 transition-transform duration-150 group-open:rotate-180"
                      aria-hidden="true"
                    />
                  </summary>

                  <ul className="mt-3 space-y-2 text-xs sm:text-sm text-[#17221E] dark:text-[#F5EFE4] leading-relaxed">
                    {feature.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 rounded-full bg-[#C99A3B] shrink-0"
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </details>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
