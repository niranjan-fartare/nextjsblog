import React from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      href: "https://archlinux.org/mirrors/niranjan.co/",
      label: "arch linux mirror",
    },
    {
      href: "mailto:me@niranjan.co",
      label: "email",
    },
    {
      href: "https://www.linkedin.com/in/niranjan-fartare/",
      label: "linkedin",
    },
    {
      href: "/sitemap.xml",
      label: "sitemap",
    },
  ];

  return (
    <footer className="mb-16">
      <div style={{ borderTop: "1px solid #fff" }} className="mt-8" />

      <nav className="flex justify-center relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative">
        <div className="flex flex-row space-x-2">
          {footerLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-100 flex align-middle relative py-1 px-2 m-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>

      <p className="mt-8 text-neutral-600 dark:text-neutral-300 text-center">
        © {currentYear}, Niranjan Fartare. <u>Be kind</u>, <u>create</u>, <u>inspire</u>.
      </p>
      
      {/* Cloudflare Script */}
      <Script
        src="https://static.cloudflareinsights.com/beacon.min.js"
        strategy="lazyOnload"
        data-cf-beacon='{"token": "bbd68a963e22437aa650b6109ba8b13a"}'
      />
    </footer>
  );
}
