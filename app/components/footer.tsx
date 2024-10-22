import React from 'react';

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mb-16">
      <div style={{ borderTop: "1px solid #fff" }} className="mt-8" />

      <ul className="font-sm mt-4 flex flex-col justify-center items-center space-y-2 md:flex-row md:space-x-4 md:space-y-0 text-neutral-600 dark:text-neutral-300">
        {[
          {
            href: "https://www.linkedin.com/in/niranjan-fartare/",
            label: "linkedin",
          },
          {
            href: "mailto:me@niranjan.co",
            label: "email",
          },
          {
            href: "https://github.com/niranjan-fartare/",
            label: "github",
          },
          {
            href: "/sitemap.xml",
            label: "sitemap",
          },
        ].map(({ href, label }) => (
          <li key={label}>
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href={href}
            >
              <p className="ml-2 h-7">{label}</p>
              <ArrowIcon />
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-neutral-600 dark:text-neutral-300 text-center">
        © {currentYear}, Niranjan Fartare. <u>Be kind</u>, <u>create</u>, <u>inspire</u>.
      </p>
    </footer>
  );
}
