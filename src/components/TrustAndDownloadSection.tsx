import React, { useState } from 'react';
import {
  AlertCircle,
  Check,
  Copy,
  Download,
  Lock,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';
import { APP_CONFIG } from '../config/siteConfig';
import { LocaleStrings } from '../data/translations';
import { GirihPattern } from './GirihPattern';

interface TrustAndDownloadSectionProps {
  t: LocaleStrings;
}

export const TrustAndDownloadSection: React.FC<TrustAndDownloadSectionProps> = ({
  t,
}) => {
  const [copiedSha, setCopiedSha] = useState(false);
  const [showPlaceholderMessage, setShowPlaceholderMessage] = useState(false);

  const handleCopySha = async () => {
    try {
      await navigator.clipboard.writeText(APP_CONFIG.sha256);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = APP_CONFIG.sha256;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
      } finally {
        document.body.removeChild(textarea);
      }
    }
    setCopiedSha(true);
    window.setTimeout(() => setCopiedSha(false), 2000);
  };

  const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (APP_CONFIG.isPlaceholderRelease || APP_CONFIG.apkDownloadUrl.startsWith('{')) {
      e.preventDefault();
      setShowPlaceholderMessage(true);
    }
  };

  return (
    <>
      {/* H. Privacy & Trust Section */}
      <section
        id="privacy"
        className="py-16 md:py-24 bg-[#FAF6EE] dark:bg-[#091511] border-b border-[#E2D8C7] dark:border-[#223A30]"
      >
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <div className="max-w-2xl mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#0D3B2E] dark:text-[#F5EFE4] [text-wrap:balance]">
              {t.privacySection.heading}
            </h2>
            <p className="mt-4 text-base text-[#4A5A52] dark:text-[#B7C4BD] leading-relaxed">
              {t.privacySection.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.privacySection.cards.map((card, index) => (
              <article
                key={card.title}
                className="rounded-2xl bg-white dark:bg-[#11231C] border border-[#E2D8C7] dark:border-[#223A30] p-6 surface-shadow-sm space-y-3"
              >
                <div className="flex items-center gap-2.5 text-[#0D3B2E] dark:text-[#F3E4BE]">
                  {index % 2 === 0 ? (
                    <ShieldCheck className="w-5 h-5 text-[#C99A3B] shrink-0" aria-hidden="true" />
                  ) : (
                    <Lock className="w-5 h-5 text-[#C99A3B] shrink-0" aria-hidden="true" />
                  )}
                  <h3 className="font-display text-lg font-semibold">
                    {card.title}
                  </h3>
                </div>
                <p className="text-sm text-[#4A5A52] dark:text-[#B7C4BD] leading-relaxed">
                  {card.body}
                </p>
                {index === 4 && (
                  <p className="text-[11px] font-mono text-[#8C6516] dark:text-[#C99A3B]" dir="ltr">
                    Owner confirmation slot: {APP_CONFIG.confirmNoAds}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Download APK Section */}
      <section
        id="download"
        className="relative scroll-mt-16 overflow-hidden py-16 md:py-24 bg-[#0D3B2E] text-[#F5EFE4] border-b border-[#223A30]"
      >
        <GirihPattern className="text-[#C99A3B]" opacityClass="opacity-[0.06]" />

        <div className="relative mx-auto max-w-[1200px] px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Download Card & SHA Checksum */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-4">
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F5EFE4] [text-wrap:balance]">
                  {t.downloadSection.heading}
                </h2>
                <p className="text-base text-[#B7C4BD] leading-relaxed">
                  {t.downloadSection.subheading}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 rounded-2xl bg-[#07241C] border border-[#C99A3B]/35 p-5">
                <div>
                  <p className="text-xs text-[#B7C4BD]">{t.downloadSection.versionLabel}</p>
                  <p className="mt-1 text-sm font-mono font-semibold text-[#F3E4BE]" dir="ltr">
                    {APP_CONFIG.version}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#B7C4BD]">{t.downloadSection.sizeLabel}</p>
                  <p className="mt-1 text-sm font-mono font-semibold text-[#F3E4BE]" dir="ltr">
                    {APP_CONFIG.apkSize}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#B7C4BD]">{t.downloadSection.minAndroidLabel}</p>
                  <p className="mt-1 text-sm font-medium text-[#F5EFE4]" dir="ltr">
                    {APP_CONFIG.minSdk}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#B7C4BD]">{t.downloadSection.ramLabel}</p>
                  <p className="mt-1 text-sm font-medium text-[#F5EFE4]" dir="ltr">
                    {APP_CONFIG.ramBaseline}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={APP_CONFIG.apkDownloadUrl}
                  download="Noor-e-Zindagi.apk"
                  rel="noopener noreferrer"
                  onClick={handleDownloadClick}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#C99A3B] text-[#07241C] font-semibold text-base hover:bg-[#F3E4BE] transition-colors min-h-[52px]"
                >
                  <Download className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span>{t.downloadSection.downloadButton}</span>
                </a>

                <div className="flex items-center gap-2 text-xs text-[#F3E4BE]">
                  <Smartphone className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Android APK · Karachi Default</span>
                </div>
              </div>

              {showPlaceholderMessage && (
                <div
                  role="status"
                  aria-live="polite"
                  className="rounded-xl bg-[#07241C] border border-[#C99A3B] p-4 text-xs text-[#F3E4BE] flex items-start gap-2.5"
                >
                  <AlertCircle className="w-4 h-4 text-[#C99A3B] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{t.downloadSection.placeholderNotice}</span>
                </div>
              )}

              {/* SHA-256 verification */}
              <div className="rounded-xl bg-[#07241C] border border-[#223A30] p-4 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[11px] text-[#B7C4BD]">
                    {t.downloadSection.shaLabel}
                  </p>
                  <p className="text-xs font-mono text-[#F5EFE4] truncate" dir="ltr">
                    {APP_CONFIG.sha256}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleCopySha}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#C99A3B]/45 text-xs font-medium text-[#F3E4BE] hover:bg-[#145341] shrink-0 min-h-[38px]"
                >
                  {copiedSha ? (
                    <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                  )}
                  <span>
                    {copiedSha ? t.downloadSection.copiedSha : t.downloadSection.copySha}
                  </span>
                </button>
              </div>
            </div>

            {/* Right Permissions & Install Guide */}
            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-2xl bg-[#07241C] border border-[#223A30] p-6 space-y-4">
                <h3 className="font-display text-xl font-semibold text-[#F3E4BE]">
                  {t.downloadSection.permissionsHeading}
                </h3>
                <ul className="space-y-3">
                  {t.downloadSection.permissions.map((perm) => (
                    <li
                      key={perm.name}
                      className="pb-3 border-b border-[#223A30] last:border-b-0 last:pb-0"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold text-[#F5EFE4]">
                          {perm.name}
                        </span>
                        <span className="text-xs font-medium text-[#C99A3B]">
                          {perm.status}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-[#B7C4BD] leading-relaxed">
                        {perm.reason}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-[#07241C] border border-[#223A30] p-6 space-y-3">
                <h3 className="font-display text-lg font-semibold text-[#F3E4BE]">
                  {t.downloadSection.stepsHeading}
                </h3>
                <ol className="space-y-2 text-xs sm:text-sm text-[#B7C4BD] leading-relaxed">
                  {t.downloadSection.steps.map((step, i) => (
                    <li key={step} className="flex items-start gap-2.5">
                      <span className="font-semibold tabular-nums text-[#C99A3B] shrink-0">
                        {i + 1}.
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-2xl bg-[#145341]/55 border border-[#C99A3B]/40 p-5">
                <p className="text-xs font-semibold text-[#F3E4BE]">
                  {t.downloadSection.notAppHeading}
                </p>
                <p className="mt-1 text-xs text-[#F5EFE4]/90 leading-relaxed">
                  {t.downloadSection.notAppBody}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
