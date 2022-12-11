interface SectionName {
  sectionName: string;
}

export default function Border({ sectionName }: SectionName) {
  return (
    <div className="relative py-6">
      <div
        className="absolute inset-0 flex items-center px-8"
        aria-hidden="true"
      >
        <div className="w-full border-t border-gray-500" />
      </div>
      <div className="relative py-6 px-2 sm:py-8 sm:px-6 lg:px-8">
        <span
          id={sectionName.toLowerCase()}
          className="bg-slate-900 pr-3 pl-3 text-lg font-medium text-gray-500"
        >
          {sectionName}
        </span>
      </div>
    </div>
  );
}
