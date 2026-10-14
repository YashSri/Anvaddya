export function SectionIndex({
  active = 1,
  className = "",
}: {
  active?: number;
  className?: string;
}) {
  const indices = [
    { num: "01", label: "Ecosystem" },
    { num: "02", label: "Curriculum" },
    { num: "03", label: "Domains" },
    { num: "04", label: "Partnership" },
  ];

  return (
    <div className={`hidden xl:flex items-center gap-6 font-mono text-[0.72rem] text-[#6B7280] ${className}`}>
      {indices.map((item, idx) => {
        const isActive = idx + 1 === active;
        return (
          <div key={item.num} className="flex items-center gap-2">
            <span
              className={`transition-colors font-semibold ${
                isActive ? "text-[#FF6A00]" : "text-[#6B7280]"
              }`}
            >
              {item.num}
            </span>
            <span className={isActive ? "text-[#111111]" : "text-[#6B7280]"}>
              {item.label}
            </span>
            {idx < indices.length - 1 && (
              <span className="text-[#E5E7EB] ml-3">/</span>
            )}
          </div>
        );
      })}
    </div>
  );
}
