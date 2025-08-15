import type { Skill } from "@/lib/resume-data";

interface SkillsSectionProps {
  skills: Skill[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <dl className="space-y-2">
      {skills.map((skill, index) => (
        <div key={index} className="text-sm">
          <dt className="font-medium text-gray-900 dark:text-gray-100 inline">
            {skill.category}:
          </dt>{" "}
          <dd className="text-gray-700 dark:text-gray-300 inline">
            {skill.items}
          </dd>
        </div>
      ))}
    </dl>
  );
}
