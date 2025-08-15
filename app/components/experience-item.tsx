import type { Experience } from "app/lib/resume-data";

interface ExperienceItemProps {
  experience: Experience;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <article className="space-y-3">
      <header className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
        <div>
          <h3 className="font-medium text-gray-900 dark:text-gray-100">
            {experience.position}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {experience.company} • {experience.location}
          </p>
        </div>
        <time className="text-xs text-gray-500 dark:text-gray-500 sm:text-right whitespace-nowrap">
          {experience.duration}
        </time>
      </header>

      <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
        {experience.responsibilities.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
