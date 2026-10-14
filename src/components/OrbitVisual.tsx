import { Icon, type IconName } from "./Icon";

const chips: { label: string; icon: IconName; pos: string }[] = [
  { label: "Prototype", icon: "wrench", pos: "left-[2%] top-[18%]" },
  { label: "Sensor data", icon: "signal", pos: "right-[0%] top-[30%]" },
  { label: "Portfolio", icon: "folder", pos: "left-[34%] bottom-[0%]" },
];

/**
 * Hero illustration: the Curiosity → Capability → Evidence orbit.
 * Pure SVG + CSS so it stays crisp and light without stock photography.
 */
export function OrbitVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[34rem]" aria-hidden>
      {/* rings */}
      <div className="absolute inset-[4%] rounded-full border border-brand-200" />
      <div className="absolute inset-[17%] rounded-full border border-brand-200" />
      <div className="absolute inset-[31%] rounded-full border border-dashed border-brand-300" />

      {/* rotating outer ring with nodes */}
      <div className="absolute inset-[4%] animate-orbit">
        <span className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500 shadow-[0_0_0_6px_rgb(249_115_22/0.15)]" />
        <span className="absolute bottom-[14%] left-[3%] h-2.5 w-2.5 rounded-full bg-night-900" />
      </div>
      <div className="absolute inset-[17%] animate-orbit-reverse">
        <span className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 translate-x-1/2 rounded-full bg-brand-700" />
      </div>

      {/* core */}
      <div className="absolute inset-[38%] flex items-center justify-center rounded-full bg-brand-500 shadow-2xl shadow-brand-500/30">
        <div className="text-center leading-tight text-ink">
          <span className="block text-[0.6rem] font-bold uppercase tracking-[0.2em] sm:text-[0.65rem]">Classes</span>
          <span className="display block text-3xl sm:text-4xl">1–12</span>
        </div>
      </div>

      {/* stage labels */}
      <span className="absolute left-1/2 top-[11%] -translate-x-1/2 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-ink shadow-sm">
        Curiosity
      </span>
      <span className="absolute bottom-[24%] right-[9%] rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-ink shadow-sm">
        Capability
      </span>
      <span className="absolute bottom-[24%] left-[12%] rounded-full bg-night-900 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-sm">
        Evidence
      </span>

      {/* floating artefact chips */}
      {chips.map((c) => (
        <span
          key={c.label}
          className={`absolute ${c.pos} hidden items-center gap-2 rounded-xl border border-line bg-white/95 px-3 py-2 text-sm font-semibold text-ink shadow-lg shadow-brand-900/5 sm:inline-flex`}
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
            <Icon name={c.icon} className="h-4 w-4" />
          </span>
          {c.label}
        </span>
      ))}
    </div>
  );
}
