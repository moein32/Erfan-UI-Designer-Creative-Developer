import React, { useState } from 'react';
import { ProjectData } from '../types';
import {
  Battery,
  Wifi,
  Signal,
  ShoppingBag,
  Sparkles,
  Plane,
  Heart,
  TrendingUp,
  Sliders,
  CheckCircle2,
  ChevronRight,
  Zap,
  Search,
  Bookmark,
  Layers,
  Activity,
  Compass,
} from 'lucide-react';

interface IphoneMockupProps {
  project: ProjectData;
  activeScreenIndex?: number;
  onScreenChange?: (index: number) => void;
  className?: string;
  isInteractive?: boolean;
}

export const IphoneMockup: React.FC<IphoneMockupProps> = ({
  project,
  activeScreenIndex = 0,
  onScreenChange,
  className = '',
  isInteractive = true,
}) => {
  const [currentTab, setCurrentTab] = useState(activeScreenIndex);
  const [liked, setLiked] = useState(false);
  const [cartCount, setCartCount] = useState(1);
  const [activeChip, setActiveChip] = useState(0);

  const handleTabClick = (idx: number) => {
    setCurrentTab(idx);
    onScreenChange?.(idx);
  };

  // Dynamic Island configuration per project
  const getDynamicIslandContent = () => {
    switch (project.id) {
      case 'ovara':
        return {
          icon: <ShoppingBag size={12} className="text-[#FF5C39]" />,
          text: 'Ovara Atelier · Order #8921 Dispatched',
          subtext: 'قزوین، ملاصدرا',
          badgeColor: 'bg-[#FF5C39]/20 text-[#FF5C39]',
        };
      case 'arven':
        return {
          icon: <Sparkles size={12} className="text-emerald-400" />,
          text: 'Neural Agent · 42 Nodes Synthesized',
          subtext: 'Context synced',
          badgeColor: 'bg-emerald-500/20 text-emerald-400',
        };
      case 'nivra':
        return {
          icon: <Plane size={12} className="text-sky-400" />,
          text: 'Gate B14 · Flight NV-402 Boarding',
          subtext: '45m to Departure',
          badgeColor: 'bg-sky-500/20 text-sky-400',
        };
      case 'veyra':
        return {
          icon: <Heart size={12} className="text-violet-400" />,
          text: 'Circadian Peak · 68 bpm · Optimal HRV',
          subtext: 'Recovery 94%',
          badgeColor: 'bg-violet-500/20 text-violet-400',
        };
      case 'zarvand':
        return {
          icon: <TrendingUp size={12} className="text-amber-400" />,
          text: 'Treasury Quorum · $4.89M Vault Settled',
          subtext: 'Multi-Sig Validated',
          badgeColor: 'bg-amber-500/20 text-amber-400',
        };
      default:
        return {
          icon: <Activity size={12} className="text-white" />,
          text: 'Active Experience',
          subtext: 'Live Session',
          badgeColor: 'bg-white/20 text-white',
        };
    }
  };

  const island = getDynamicIslandContent();

  return (
    <div
      className={`relative select-none ${className}`}
      style={{
        width: '100%',
        maxWidth: '340px',
        aspectRatio: '9 / 19.2',
      }}
    >
      {/* Titanium Exterior Chassis */}
      <div className="relative w-full h-full rounded-[50px] p-[10px] bg-gradient-to-b from-[#3A393E] via-[#1E1E22] to-[#2B2A2F] titanium-edge shadow-[0_30px_70px_-15px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.12)_inset] transition-transform duration-500">
        
        {/* Hardware side buttons simulation */}
        <div className="absolute -left-[12px] top-[100px] w-[3px] h-[26px] bg-[#3E3D42] rounded-l-sm" /> {/* Action Button */}
        <div className="absolute -left-[12px] top-[140px] w-[3px] h-[48px] bg-[#3E3D42] rounded-l-sm" /> {/* Volume Up */}
        <div className="absolute -left-[12px] top-[198px] w-[3px] h-[48px] bg-[#3E3D42] rounded-l-sm" /> {/* Volume Down */}
        <div className="absolute -right-[12px] top-[130px] w-[3px] h-[75px] bg-[#3E3D42] rounded-r-sm" /> {/* Power Button */}

        {/* Ultra-thin Inner Bezel */}
        <div className="relative w-full h-full rounded-[42px] overflow-hidden bg-[#0A0A0C] border-[3px] border-[#0A0A0C] flex flex-col justify-between shadow-inner">
          
          {/* Top Status Bar & Dynamic Island */}
          <div className="relative z-30 pt-3 px-6 pb-2 flex items-center justify-between text-[11px] font-semibold text-white/90">
            <span>09:41</span>

            {/* Dynamic Island Capsule */}
            <div className="absolute left-1/2 -translate-x-1/2 top-2.5 bg-black text-white px-3 py-1 rounded-full flex items-center gap-2 border border-white/10 shadow-lg min-w-[125px] justify-center transition-all duration-300 hover:scale-105 cursor-pointer dynamic-island-active">
              <div className="w-2.5 h-2.5 rounded-full bg-white/10 flex items-center justify-center">
                {island.icon}
              </div>
              <span className="text-[10px] font-mono tracking-tight truncate max-w-[120px]">
                {island.text.split('·')[0]}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            </div>

            <div className="flex items-center gap-1.5">
              <Signal size={11} />
              <Wifi size={11} />
              <Battery size={13} className="text-white fill-white" />
            </div>
          </div>

          {/* SCREEN CONTENT BY PROJECT */}
          <div className="relative z-10 flex-1 px-4 py-2 overflow-y-auto scrollbar-none flex flex-col text-left">
            {project.id === 'ovara' && (
              <div className="flex flex-col gap-3 h-full animate-in fade-in duration-300">
                {/* Brand Header */}
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-[#FF5C39] uppercase font-bold">
                      AUTUMN COUTURE
                    </span>
                    <h4 className="text-base font-display font-bold text-white tracking-tight">
                      Ovara Atelier
                    </h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setLiked(!liked)}
                      className={`p-1.5 rounded-full border border-white/10 transition-colors ${
                        liked ? 'bg-[#FF5C39] text-white' : 'bg-white/5 text-white/70'
                      }`}
                    >
                      <Bookmark size={13} />
                    </button>
                    <div className="relative p-1.5 rounded-full bg-white/5 border border-white/10 text-white">
                      <ShoppingBag size={13} />
                      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#FF5C39] text-[9px] font-bold rounded-full flex items-center justify-center">
                        {cartCount}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Persian Luxury Feature Card */}
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#201A24] via-[#141218] to-[#100E14] border border-white/10 p-3.5 text-white">
                  <div className="flex justify-between items-start mb-2">
                    <span className="px-2 py-0.5 rounded-md bg-[#FF5C39]/20 text-[#FF5C39] text-[10px] font-mono font-medium">
                      LIMITED DROP · ۱۲ عدد باقی‌مانده
                    </span>
                    <span className="text-[11px] font-persian text-white/70">کالکشن ابریشم</span>
                  </div>

                  <div className="h-28 rounded-xl bg-gradient-to-tr from-[#311F2E] to-[#45273F] flex items-center justify-center relative overflow-hidden my-2">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,92,57,0.35),transparent_70%)]" />
                    <div className="relative text-center">
                      <div className="text-3xl font-display font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFDDD6] to-[#FF5C39]">
                        OVARA
                      </div>
                      <span className="text-[10px] font-persian text-white/80">شنل دست‌دوز کشمیر و ابریشم خالص</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/10">
                    <div>
                      <span className="text-[10px] text-white/50 block">قیمت پایه / Price</span>
                      <span className="text-sm font-bold font-mono text-white">$1,850 · ۷۲ م.ت</span>
                    </div>
                    <button
                      onClick={() => setCartCount((c) => c + 1)}
                      className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#FF5C39] to-[#6366F1] text-white text-[11px] font-bold shadow-md active:scale-95 transition-transform flex items-center gap-1"
                    >
                      <span>افزودن به سبد</span>
                      <ChevronRight size={12} />
                    </button>
                  </div>
                </div>

                {/* Sub category chips */}
                <div className="flex gap-1.5 overflow-x-auto pb-1">
                  {['کالکشن جدید', 'پالتو و بارانی', 'چرم دست‌دوز', 'اکسسوری'].map((chip, idx) => (
                    <button
                      key={chip}
                      onClick={() => setActiveChip(idx)}
                      className={`px-2.5 py-1 rounded-full text-[10px] font-persian whitespace-nowrap transition-all ${
                        activeChip === idx
                          ? 'bg-white text-black font-semibold'
                          : 'bg-white/5 text-white/60 border border-white/5'
                      }`}
                    >
                      {chip}
                    </button>
                  ))}
                </div>

                {/* Quick metrics row */}
                <div className="grid grid-cols-2 gap-2 text-[10px]">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-white/40 block">تحویل اکسپرس</span>
                    <span className="text-white font-medium">اکسپرس در قزوین</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-white/40 block">اصالت کالا</span>
                    <span className="text-emerald-400 font-medium flex items-center gap-1">
                      <CheckCircle2 size={10} /> ۱۰۰٪ تضمین شده
                    </span>
                  </div>
                </div>
              </div>
            )}

            {project.id === 'arven' && (
              <div className="flex flex-col gap-3 h-full animate-in fade-in duration-300">
                {/* AI Agent Header */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <Sparkles size={13} />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-emerald-400 font-bold">ARVEN OS v3.2</span>
                      <h4 className="text-sm font-bold text-white tracking-tight">Cognitive Canvas</h4>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-white/50 bg-white/5 px-2 py-0.5 rounded-full">
                    99.4% Idle Free
                  </span>
                </div>

                {/* Live AI Synthesis Box */}
                <div className="p-3 rounded-2xl bg-gradient-to-b from-[#111827] to-[#0B0F17] border border-emerald-500/20 shadow-lg">
                  <div className="flex items-center justify-between text-[10px] text-white/50 mb-1.5 font-mono">
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                      AUTONOMOUS BRIEF
                    </span>
                    <span>12:00 PM</span>
                  </div>
                  <p className="text-[11px] text-white/90 leading-relaxed font-sans">
                    "Synthesized 14 project commits and client feedback into high-priority actionable milestones for Q4 launch."
                  </p>
                  <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between">
                    <div className="flex -space-x-1.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/30 border border-black text-[8px] flex items-center justify-center text-emerald-300">A</div>
                      <div className="w-4 h-4 rounded-full bg-indigo-500/30 border border-black text-[8px] flex items-center justify-center text-indigo-300">E</div>
                      <div className="w-4 h-4 rounded-full bg-purple-500/30 border border-black text-[8px] flex items-center justify-center text-purple-300">R</div>
                    </div>
                    <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                      ⚡ 3.4x Faster
                    </span>
                  </div>
                </div>

                {/* Tasks Graph */}
                <div className="space-y-1.5">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-[11px] text-white font-medium">Design Token Generator</span>
                    </div>
                    <span className="text-[9px] font-mono text-white/40">COMPLETED</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                      <span className="text-[11px] text-white font-medium">Spatial Motion Mapping</span>
                    </div>
                    <span className="text-[9px] font-mono text-indigo-400">IN PROGRESS</span>
                  </div>
                </div>
              </div>
            )}

            {project.id === 'nivra' && (
              <div className="flex flex-col gap-3 h-full animate-in fade-in duration-300">
                {/* Trip Card */}
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <span className="text-[9px] font-mono tracking-wider text-sky-400 font-bold uppercase">
                      ACTIVE EXPEDITION
                    </span>
                    <h4 className="text-base font-bold text-white tracking-tight">Reykjavik & Fjords</h4>
                  </div>
                  <span className="text-[10px] font-mono bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded-full border border-sky-400/30">
                    Day 3 of 7
                  </span>
                </div>

                {/* Boarding & Flight Card */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#0F2A4A] to-[#071322] border border-sky-400/30 text-white shadow-xl">
                  <div className="flex justify-between items-center text-xs font-mono mb-2">
                    <span className="text-lg font-black text-sky-300">THR</span>
                    <Plane size={14} className="text-sky-400 rotate-90" />
                    <span className="text-lg font-black text-amber-300">KEF</span>
                  </div>
                  <div className="flex justify-between text-[10px] text-white/60 mb-2 font-mono">
                    <span>Tehran IKA</span>
                    <span>Reykjavik Int'l</span>
                  </div>
                  <div className="p-2 rounded-xl bg-black/30 border border-white/5 flex items-center justify-between text-[10px]">
                    <div>
                      <span className="text-white/40 block">Seat / Class</span>
                      <span className="text-white font-bold font-mono">02A · Business</span>
                    </div>
                    <div>
                      <span className="text-white/40 block">Gate</span>
                      <span className="text-emerald-400 font-bold font-mono">B14 · Priority</span>
                    </div>
                    <div>
                      <span className="text-white/40 block">Weather</span>
                      <span className="text-sky-300 font-bold font-mono">11°C Clear</span>
                    </div>
                  </div>
                </div>

                {/* Itinerary Preview */}
                <div className="space-y-1.5">
                  <span className="text-[9px] font-mono tracking-wider text-white/50 block">UPCOMING HIGHLIGHT</span>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-white block">Glacier Lagoon Kayak Trek</span>
                      <span className="text-[9px] text-white/50">14:30 · Private Guide Confirmed</span>
                    </div>
                    <span className="text-xs text-sky-400 font-mono">4.9 ★</span>
                  </div>
                </div>
              </div>
            )}

            {project.id === 'veyra' && (
              <div className="flex flex-col gap-3 h-full animate-in fade-in duration-300">
                {/* Circadian Header */}
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-violet-400 font-bold uppercase">
                      BIOMETRIC RECOVERY
                    </span>
                    <h4 className="text-base font-bold text-white tracking-tight">Circadian Balance</h4>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-violet-500/20 border border-violet-400/40 flex items-center justify-center text-violet-300">
                    <Heart size={14} className="animate-pulse" />
                  </div>
                </div>

                {/* Bioluminescent Circadian Ring Widget */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-b from-[#1C152E] to-[#0E0C18] border border-violet-500/30 text-center relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-violet-500/20 rounded-full blur-2xl pointer-events-none" />
                  <div className="relative inline-flex items-center justify-center my-1">
                    {/* Ring simulation */}
                    <div className="w-20 h-20 rounded-full border-4 border-violet-500/20 border-t-violet-400 border-r-emerald-400 flex flex-col items-center justify-center">
                      <span className="text-xl font-display font-extrabold text-white">94%</span>
                      <span className="text-[8px] font-mono text-emerald-400">OPTIMAL</span>
                    </div>
                  </div>
                  <div className="flex justify-around text-[10px] mt-2 pt-2 border-t border-white/10">
                    <div>
                      <span className="text-white/40 block">Sleep Score</span>
                      <span className="text-white font-bold font-mono">92 / 100</span>
                    </div>
                    <div>
                      <span className="text-white/40 block">HRV Level</span>
                      <span className="text-violet-300 font-bold font-mono">68 ms</span>
                    </div>
                    <div>
                      <span className="text-white/40 block">Resting HR</span>
                      <span className="text-emerald-400 font-bold font-mono">54 bpm</span>
                    </div>
                  </div>
                </div>

                {/* Mindful soundscape banner */}
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-violet-400" />
                    <div>
                      <span className="text-[11px] font-medium text-white block">Nordic Pine Soundscape</span>
                      <span className="text-[9px] text-white/50">Circadian Wind-Down · 15 min</span>
                    </div>
                  </div>
                  <button className="px-2 py-1 rounded-md bg-violet-600/60 text-white text-[10px] font-mono hover:bg-violet-600 transition-colors">
                    PLAY
                  </button>
                </div>
              </div>
            )}

            {project.id === 'zarvand' && (
              <div className="flex flex-col gap-3 h-full animate-in fade-in duration-300">
                {/* Fintech Header */}
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-amber-400 font-bold uppercase">
                      INSTITUTIONAL VAULT
                    </span>
                    <h4 className="text-base font-bold text-white tracking-tight">Zarvand Treasury</h4>
                  </div>
                  <span className="text-[9px] font-mono bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-400/30">
                    SOC-2 SECURE
                  </span>
                </div>

                {/* Vault Balance Card */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#1C1813] to-[#0D0B08] border border-amber-500/30 text-white shadow-xl">
                  <span className="text-[10px] text-white/50 font-mono block">TOTAL RESERVES (USD)</span>
                  <div className="text-xl font-bold font-mono text-amber-400 my-0.5">$4,892,120.00</div>
                  <div className="flex items-center gap-2 text-[10px] text-emerald-400 font-mono">
                    <TrendingUp size={11} />
                    <span>+$142,390 (3.2%) 24h Yield</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-3 pt-2 border-t border-white/10 text-[9px] font-mono">
                    <div>
                      <span className="text-white/40 block">Cold Storage</span>
                      <span className="text-white">88.4% Protected</span>
                    </div>
                    <div>
                      <span className="text-white/40 block">Latency</span>
                      <span className="text-emerald-400">&lt; 12ms High-Freq</span>
                    </div>
                  </div>
                </div>

                {/* Multi-Sig Quorum Status */}
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center justify-between text-[10px] mb-1">
                    <span className="text-white/70 font-mono">Multi-Sig Quorum</span>
                    <span className="text-amber-400 font-mono font-bold">3 / 3 Signed</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-amber-400 h-full w-full rounded-full" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Dock Navigation inside Phone */}
          <div className="relative z-20 pb-4 pt-2 px-6 bg-[#0A0A0C]/90 backdrop-blur-md border-t border-white/10 flex items-center justify-between text-white/40">
            <button
              onClick={() => handleTabClick(0)}
              className={`flex flex-col items-center gap-0.5 transition-colors ${
                currentTab === 0 ? 'text-white' : 'hover:text-white/70'
              }`}
            >
              <Layers size={14} />
              <span className="text-[8px] font-mono">Overview</span>
            </button>
            <button
              onClick={() => handleTabClick(1)}
              className={`flex flex-col items-center gap-0.5 transition-colors ${
                currentTab === 1 ? 'text-white' : 'hover:text-white/70'
              }`}
            >
              <Activity size={14} />
              <span className="text-[8px] font-mono">Telemetry</span>
            </button>
            <button
              onClick={() => handleTabClick(2)}
              className={`flex flex-col items-center gap-0.5 transition-colors ${
                currentTab === 2 ? 'text-white' : 'hover:text-white/70'
              }`}
            >
              <Compass size={14} />
              <span className="text-[8px] font-mono">Inspect</span>
            </button>
          </div>

          {/* Home indicator bar */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/40 rounded-full z-30" />
        </div>
      </div>
    </div>
  );
};
