interface SectionHeaderProps {
  title: string;
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <>
      <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
        {title}
      </h2>
      <div className="w-12 h-px bg-gray-300 dark:bg-gray-600 mb-6" />
    </>
  );
}
