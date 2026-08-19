import React, { useState } from 'react';
import {
  Activity,
  Heart,
  Droplets,
  Smile,
  Moon,
  Sparkles,
  Check,
  ChevronRight,
  ChevronLeft,
  Clock,
  Dumbbell,
  Footprints,
  Apple,
  Bot,
  Zap,
} from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

interface VaryaScreenProps {
  screenId: 'equilibrium' | 'vitality' | 'circadian' | 'intelligence';
}

export const VaryaScreen: React.FC<VaryaScreenProps> = ({ screenId }) => {
  const { isRTL, formatNumber } = useLanguage();

  // Screen 1 (Equilibrium / Dashboard) State
  const [goals, setGoals] = useState([
    {
      id: 'water',
      labelFa: 'نوشیدن آب',
      labelEn: 'Hydration Intake',
      valueFa: '۱.۶ از ۲ لیتر',
      valueEn: '1.6 / 2.0 L',
      done: true,
      color: 'mint',
    },
    {
      id: 'steps',
      labelFa: 'حرکت روزانه',
      labelEn: 'Daily Movement',
      valueFa: '۷,۸۴۲ از ۱۰,۰۰۰ قدم',
      valueEn: '7,842 / 10,000 steps',
      done: true,
      color: 'lavender',
    },
    {
      id: 'breath',
      labelFa: 'تنفس آگاهانه',
      labelEn: 'Mindful Breathwork',
      valueFa: '۱۰ دقیقه تمرین',
      valueEn: '10 min session',
      done: true,
      color: 'cyan',
    },
    {
      id: 'screen',
      labelFa: 'زمان بدون صفحه',
      labelEn: 'Screen-Free Rest',
      valueFa: '۴۰ دقیقه باقی‌مانده',
      valueEn: '40 min remaining',
      done: false,
      color: 'peach',
    },
  ]);

  // Screen 2 (Vitality / Activity) State
  const [timeframe, setTimeframe] = useState<'week' | 'month' | 'year'>('week');

  // Screen 4 (Intelligence / AI) State
  const [selectedAction, setSelectedAction] = useState<number | null>(null);

  const toggleGoal = (id: string) => {
    setGoals((prev) =>
      prev.map((g) => (g.id === id ? { ...g, done: !g.done } : g))
    );
  };

  // ----------------------------------------------------
  // CHAPTER 01: EQUILIBRIUM (Wellness Dashboard)
  // ----------------------------------------------------
  if (screenId === 'equilibrium') {
    return (
      <div
        className={`w-full h-full text-[#171827] flex flex-col justify-between select-none ${
          isRTL ? 'font-persian text-right' : 'font-sans text-left'
        }`}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div className="space-y-3.5">
          {/* Header */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#6F62E8] to-[#A697FF] text-white flex items-center justify-center font-bold text-xs shadow-md shadow-[#6F62E8]/20 border-2 border-white">
                {isRTL ? 'ع' : 'EM'}
              </div>
              <div>
                <span className="text-[10px] text-[#8B8DA1]">
                  {isRTL ? 'صبح بخیر، عرفان' : 'Good Morning, Erfan'}
                </span>
                <h2 className="text-xs font-black text-[#171827]">
                  {isRTL ? 'امروز حالت چطوره؟' : 'Circadian Equilibrium'}
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 border border-[#E9E9F1] shadow-xs text-[10px] font-bold text-[#6F62E8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#55C99B] animate-pulse" />
              <span>{isRTL ? 'همگام‌سازی' : 'Synced'}</span>
            </div>
          </div>

          {/* Bioluminescent Wellness Score Card */}
          <div className="relative overflow-hidden p-4 rounded-2xl bg-gradient-to-br from-white via-[#F8F7FF] to-[#EEEAFF]/60 border border-white/90 shadow-xs">
            <div className="absolute -left-10 -bottom-10 w-28 h-28 rounded-full bg-[#83DFF1]/20 blur-xl pointer-events-none" />
            <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-[#BCAEFF]/30 blur-lg pointer-events-none" />

            <div className="relative flex items-center justify-between z-10">
              <div className="space-y-1 max-w-[140px]">
                <span className="text-[9px] font-bold text-[#8B8DA1] block uppercase tracking-wider">
                  {isRTL ? 'امتیاز سلامت امروز' : 'Daily Bio-Score'}
                </span>
                <h3 className="text-xl font-extrabold text-[#171827] tracking-tight">
                  {isRTL ? 'عالیه!' : 'Optimal!'}
                </h3>
                <p className="text-[9px] text-[#8B8DA1] leading-tight">
                  {isRTL
                    ? 'بدنت امروز در وضعیت متعادل و ریکاوری پایدار قرار دارد.'
                    : 'Your body is in harmonious circadian balance.'}
                </p>
              </div>

              {/* Conic Ring 88% */}
              <div
                className="w-18 h-18 rounded-full p-[6px] flex items-center justify-center relative shadow-xs shrink-0"
                style={{
                  background: 'conic-gradient(#6F62E8 88%, #ECEBF5 0)',
                }}
              >
                <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center text-center shadow-inner">
                  <strong className="text-base font-black text-[#171827] leading-none font-mono">
                    {isRTL ? '۸۸' : '88'}
                  </strong>
                  <span className="text-[7px] text-[#8B8DA1] mt-0.5">
                    {isRTL ? 'از ۱۰۰' : '/ 100'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 2x2 Real-time Biometrics Grid */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-bold px-0.5">
              <span className="text-[#171827]">{isRTL ? 'وضعیت امروز' : 'Live Biometrics'}</span>
              <span className="text-[#6F62E8] text-[9px] cursor-pointer hover:underline">
                {isRTL ? 'جزئیات' : 'Details'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {/* Metric 1: Activity */}
              <div className="p-2.5 rounded-xl bg-white/90 border border-white shadow-xs">
                <div className="flex items-center justify-between">
                  <div className="w-6 h-6 rounded-lg bg-[#EEEAFF] text-[#6F62E8] flex items-center justify-center">
                    <Activity size={12} />
                  </div>
                  <span className="text-[8px] font-bold text-[#8B8DA1]">
                    {isRTL ? 'فعالیت' : 'Steps'}
                  </span>
                </div>
                <div className="mt-2 flex items-baseline justify-between font-mono">
                  <strong className="text-xs font-black text-[#171827]">
                    {isRTL ? '۷,۸۴۲' : '7,842'}
                  </strong>
                  <span className="text-[7px] text-[#8B8DA1]">10k</span>
                </div>
                <div className="w-full h-1 bg-[#EEEEF4] rounded-full mt-1.5 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#6F62E8] to-[#A79CFF] rounded-full w-[78%]" />
                </div>
              </div>

              {/* Metric 2: Resting Heart Rate */}
              <div className="p-2.5 rounded-xl bg-white/90 border border-white shadow-xs">
                <div className="flex items-center justify-between">
                  <div className="w-6 h-6 rounded-lg bg-[#FFF0E6] text-[#D98555] flex items-center justify-center">
                    <Heart size={12} className="fill-current" />
                  </div>
                  <span className="text-[8px] font-bold text-[#8B8DA1]">
                    {isRTL ? 'ضربان' : 'HRV'}
                  </span>
                </div>
                <div className="mt-2 flex items-baseline justify-between font-mono">
                  <strong className="text-xs font-black text-[#171827]">
                    {isRTL ? '۷۲' : '72'}{' '}
                    <span className="text-[8px] font-normal text-[#8B8DA1]">BPM</span>
                  </strong>
                  <span className="text-[7px] text-[#55C99B] font-sans font-bold">
                    {isRTL ? 'طبیعی' : 'Optimal'}
                  </span>
                </div>
                <div className="w-full h-1 bg-[#EEEEF4] rounded-full mt-1.5 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#D98555] to-[#FFB992] rounded-full w-[64%]" />
                </div>
              </div>

              {/* Metric 3: Hydration */}
              <div className="p-2.5 rounded-xl bg-white/90 border border-white shadow-xs">
                <div className="flex items-center justify-between">
                  <div className="w-6 h-6 rounded-lg bg-[#E6F8FC] text-[#38AECA] flex items-center justify-center">
                    <Droplets size={12} />
                  </div>
                  <span className="text-[8px] font-bold text-[#8B8DA1]">
                    {isRTL ? 'آب' : 'Water'}
                  </span>
                </div>
                <div className="mt-2 flex items-baseline justify-between font-mono">
                  <strong className="text-xs font-black text-[#171827]">
                    {isRTL ? '۱.۶' : '1.6'}{' '}
                    <span className="text-[8px] font-normal text-[#8B8DA1]">L</span>
                  </strong>
                  <span className="text-[7px] text-[#8B8DA1]">2.0 L</span>
                </div>
                <div className="w-full h-1 bg-[#EEEEF4] rounded-full mt-1.5 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#38AECA] to-[#83DFF1] rounded-full w-[80%]" />
                </div>
              </div>

              {/* Metric 4: Mindful Mood */}
              <div className="p-2.5 rounded-xl bg-white/90 border border-white shadow-xs">
                <div className="flex items-center justify-between">
                  <div className="w-6 h-6 rounded-lg bg-[#E5FAF3] text-[#34A97F] flex items-center justify-center">
                    <Smile size={12} />
                  </div>
                  <span className="text-[8px] font-bold text-[#8B8DA1]">
                    {isRTL ? 'مود' : 'Mood'}
                  </span>
                </div>
                <div className="mt-2 flex items-baseline justify-between">
                  <strong className="text-xs font-black text-[#171827]">
                    {isRTL ? 'آرام' : 'Calm'}
                  </strong>
                  <span className="text-[7px] text-[#34A97F] font-mono font-bold">
                    {isRTL ? '۸۶٪' : '86%'}
                  </span>
                </div>
                <div className="w-full h-1 bg-[#EEEEF4] rounded-full mt-1.5 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#34A97F] to-[#8DE5C8] rounded-full w-[86%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Daily Goals Checklist */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-bold px-0.5">
              <span className="text-[#171827]">
                {isRTL ? 'اهداف روزانه' : 'Daily Rituals'}
              </span>
              <span className="text-[#6F62E8] text-[9px] font-mono font-bold">
                {isRTL ? '۳ از ۴' : '3 / 4'}
              </span>
            </div>

            <div className="p-2 rounded-xl bg-white/90 border border-white shadow-xs divide-y divide-[#F0F0F5]">
              {goals.map((g) => (
                <div
                  key={g.id}
                  onClick={() => toggleGoal(g.id)}
                  className="py-1.5 flex items-center justify-between cursor-pointer group"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] ${
                        g.color === 'mint'
                          ? 'bg-[#E5FAF3] text-[#34A97F]'
                          : g.color === 'lavender'
                          ? 'bg-[#EEEAFF] text-[#6F62E8]'
                          : g.color === 'cyan'
                          ? 'bg-[#E6F8FC] text-[#38AECA]'
                          : 'bg-[#FFF0E6] text-[#D98555]'
                      }`}
                    >
                      {g.color === 'mint' && <Droplets size={12} />}
                      {g.color === 'lavender' && <Activity size={12} />}
                      {g.color === 'cyan' && <Sparkles size={12} />}
                      {g.color === 'peach' && <Clock size={12} />}
                    </div>
                    <div>
                      <strong className="text-[9px] font-bold text-[#171827] block">
                        {isRTL ? g.labelFa : g.labelEn}
                      </strong>
                      <span className="text-[7px] text-[#8B8DA1] block">
                        {isRTL ? g.valueFa : g.valueEn}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`w-4 h-4 rounded-full flex items-center justify-center transition-all ${
                      g.done
                        ? 'bg-[#55C99B] text-white shadow-xs'
                        : 'bg-[#E8E8EF] text-transparent'
                    }`}
                  >
                    <Check size={10} strokeWidth={3} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // CHAPTER 02: VITALITY (Activity & Fitness Engine)
  // ----------------------------------------------------
  if (screenId === 'vitality') {
    const daysFa = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];
    const daysEn = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    const heights = ['45%', '64%', '52%', '80%', '60%', '92%', '74%'];

    return (
      <div
        className={`w-full h-full text-[#171827] flex flex-col justify-between select-none ${
          isRTL ? 'font-persian text-right' : 'font-sans text-left'
        }`}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div className="space-y-3.5">
          {/* Header */}
          <div className="flex items-center justify-between pt-1">
            <div>
              <span className="text-[10px] text-[#8B8DA1]">
                {isRTL ? 'فعالیت امروز' : 'Vitality & Movement'}
              </span>
              <h2 className="text-xs font-black text-[#171827]">
                {isRTL ? 'بدنت در حرکته' : 'Kinetic Energy Flow'}
              </h2>
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#6F62E8] to-[#A697FF] text-white flex items-center justify-center font-bold text-xs shadow-xs border border-white">
              {isRTL ? 'ع' : 'EM'}
            </div>
          </div>

          {/* Timeframe Segmented Control */}
          <div className="flex p-1 rounded-xl bg-[#EEEEF4] gap-1">
            {(['week', 'month', 'year'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTimeframe(t)}
                className={`flex-1 py-1 text-[9px] font-bold rounded-lg transition-all ${
                  timeframe === t
                    ? 'bg-white text-[#171827] shadow-xs'
                    : 'text-[#8B8DA1] hover:text-[#171827]'
                }`}
              >
                {t === 'week'
                  ? (isRTL ? 'هفته' : 'Week')
                  : t === 'month'
                  ? (isRTL ? 'ماه' : 'Month')
                  : (isRTL ? 'سال' : 'Year')}
              </button>
            ))}
          </div>

          {/* 7-Day Caloric Burn Bar Chart */}
          <div className="p-3.5 rounded-2xl bg-white/90 border border-white shadow-xs space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[9px] text-[#8B8DA1] block">
                  {isRTL ? 'کالری مصرف‌شده هفتگی' : 'Weekly Caloric Burn'}
                </span>
                <strong className="text-sm font-black text-[#171827] font-mono">
                  {isRTL ? '۳,۸۴۰' : '3,840'}{' '}
                  <span className="text-[9px] font-normal text-[#8B8DA1]">kcal</span>
                </strong>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#E5FAF3] text-[#34A97F] text-[8px] font-bold">
                {isRTL ? '+۱۲٪ نسبت به هفته پیش' : '+12% vs last week'}
              </span>
            </div>

            {/* Bars */}
            <div className="h-20 flex items-end justify-between gap-1.5 pt-2">
              {heights.map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
                  <div className="w-full bg-[#EEEEF4] rounded-t-md h-full relative overflow-hidden flex items-end">
                    <div
                      className="w-full rounded-t-md bg-gradient-to-t from-[#6F62E8] to-[#A89CFF] transition-all group-hover:brightness-110"
                      style={{ height: h }}
                    />
                  </div>
                  <span className="text-[8px] text-[#8B8DA1] font-mono">
                    {isRTL ? daysFa[i] : daysEn[i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 3 Activity Mini Rings */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { labelFa: 'حرکت', labelEn: 'Move', val: 82, color: '#6F62E8' },
              { labelFa: 'تمرین', labelEn: 'Exercise', val: 64, color: '#34A97F' },
              { labelFa: 'کالری', labelEn: 'Burn', val: 91, color: '#D98555' },
            ].map((ring, idx) => (
              <div key={idx} className="p-2 rounded-xl bg-white/90 border border-white shadow-xs text-center">
                <div
                  className="w-11 h-11 mx-auto rounded-full p-[4px] flex items-center justify-center"
                  style={{
                    background: `conic-gradient(${ring.color} ${ring.val}%, #EEEEF4 0)`,
                  }}
                >
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <strong className="text-[9px] font-black text-[#171827] font-mono">
                      {isRTL ? `${formatNumber(ring.val)}٪` : `${ring.val}%`}
                    </strong>
                  </div>
                </div>
                <span className="text-[8px] font-bold text-[#8B8DA1] mt-1.5 block">
                  {isRTL ? ring.labelFa : ring.labelEn}
                </span>
              </div>
            ))}
          </div>

          {/* Recent Workouts Log */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-bold px-0.5">
              <span className="text-[#171827]">{isRTL ? 'جلسات تمرین اخیر' : 'Recent Workouts'}</span>
              <span className="text-[#6F62E8] text-[9px] cursor-pointer hover:underline">
                {isRTL ? 'مشاهده همه' : 'View All'}
              </span>
            </div>

            <div className="space-y-1.5">
              <div className="p-2.5 rounded-xl bg-white/90 border border-white shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-[#EEEAFF] text-[#6F62E8] flex items-center justify-center shrink-0">
                    <Dumbbell size={15} />
                  </div>
                  <div>
                    <strong className="text-[10px] font-bold text-[#171827] block">
                      {isRTL ? 'تمرین قدرتی بالاتنه' : 'Upper Body Hypertrophy'}
                    </strong>
                    <span className="text-[7px] text-[#8B8DA1]">
                      {isRTL ? 'امروز · ۳۲ دقیقه' : 'Today · 32 mins'}
                    </span>
                  </div>
                </div>
                <div className={isRTL ? 'text-left' : 'text-right'}>
                  <strong className="text-[10px] font-black text-[#171827] block font-mono">
                    {isRTL ? '۲۸۶' : '286'}
                  </strong>
                  <span className="text-[7px] text-[#8B8DA1]">kcal</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/90 border border-white shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-[#E5FAF3] text-[#34A97F] flex items-center justify-center shrink-0">
                    <Footprints size={15} />
                  </div>
                  <div>
                    <strong className="text-[10px] font-bold text-[#171827] block">
                      {isRTL ? 'پیاده‌روی ریکاوری در طبیعت' : 'Nature Recovery Walk'}
                    </strong>
                    <span className="text-[7px] text-[#8B8DA1]">
                      {isRTL ? 'دیروز · ۴۵ دقیقه' : 'Yesterday · 45 mins'}
                    </span>
                  </div>
                </div>
                <div className={isRTL ? 'text-left' : 'text-right'}>
                  <strong className="text-[10px] font-black text-[#171827] block font-mono">
                    {isRTL ? '۳۴۱' : '341'}
                  </strong>
                  <span className="text-[7px] text-[#8B8DA1]">kcal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // CHAPTER 03: CIRCADIAN (Sleep Architecture & Recovery)
  // ----------------------------------------------------
  if (screenId === 'circadian') {
    return (
      <div
        className={`w-full h-full text-[#171827] flex flex-col justify-between select-none ${
          isRTL ? 'font-persian text-right' : 'font-sans text-left'
        }`}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div className="space-y-3.5">
          {/* Header */}
          <div className="flex items-center justify-between pt-1">
            <div>
              <span className="text-[10px] text-[#8B8DA1]">
                {isRTL ? 'خواب دیشب' : 'Circadian Sanctuary'}
              </span>
              <h2 className="text-xs font-black text-[#171827]">
                {isRTL ? 'آرام‌تر از همیشه' : 'Deep Sleep & Recovery'}
              </h2>
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#6F62E8] to-[#A697FF] text-white flex items-center justify-center font-bold text-xs shadow-xs border border-white">
              {isRTL ? 'ع' : 'EM'}
            </div>
          </div>

          {/* Moon Sleep Hero Banner */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-br from-white via-[#F8F7FF] to-[#EEEAFF]/80 border border-white shadow-xs space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#6F62E8] to-[#9C91F6] text-white flex items-center justify-center shadow-md shadow-[#6F62E8]/20 shrink-0">
                  <Moon size={20} className="fill-current" />
                </div>
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <strong className="text-xl font-black text-[#171827] font-mono">
                      {isRTL ? '۸۲' : '82'}
                    </strong>
                    <span className="text-[9px] font-bold text-[#55C99B] bg-[#E5FAF3] px-2 py-0.5 rounded-full">
                      {isRTL ? 'خواب عالی' : 'Optimal Sleep'}
                    </span>
                  </div>
                  <span className="text-[8px] text-[#8B8DA1] block mt-0.5">
                    {isRTL ? 'مدت زمان: ۷ ساعت و ۴۸ دقیقه' : 'Duration: 7h 48m'}
                  </span>
                </div>
              </div>
            </div>

            {/* Sleep Stages Timeline Visualization */}
            <div className="space-y-1 pt-1">
              <div className="flex items-center justify-between text-[8px] text-[#8B8DA1] font-mono">
                <span>{isRTL ? '۲۳:۲۰' : '23:20'}</span>
                <span>{isRTL ? 'مراحل خواب شبانه' : 'Sleep Stages Graph'}</span>
                <span>{isRTL ? '۰۷:۰۸' : '07:08'}</span>
              </div>
              <div className="h-6 flex items-end gap-1 rounded-lg p-1 bg-white/70 border border-[#EEEEF4]">
                {[
                  { type: 'deep', h: '90%', bg: '#6457C8' },
                  { type: 'rem', h: '65%', bg: '#9288E8' },
                  { type: 'light', h: '45%', bg: '#BCB5EF' },
                  { type: 'deep', h: '85%', bg: '#6457C8' },
                  { type: 'rem', h: '70%', bg: '#9288E8' },
                  { type: 'light', h: '50%', bg: '#BCB5EF' },
                  { type: 'rem', h: '80%', bg: '#9288E8' },
                  { type: 'light', h: '40%', bg: '#BCB5EF' },
                ].map((s, idx) => (
                  <div
                    key={idx}
                    className="flex-1 rounded-xs transition-all"
                    style={{ height: s.h, backgroundColor: s.bg }}
                  />
                ))}
              </div>
              <div className="flex justify-around text-[7px] text-[#8B8DA1] pt-0.5">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6457C8]" />
                  {isRTL ? 'عمیق (۱س ۵۵د)' : 'Deep (1h 55m)'}
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9288E8]" />
                  {isRTL ? 'REM (۱س ۳۷د)' : 'REM (1h 37m)'}
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BCB5EF]" />
                  {isRTL ? 'سبک (۴س ۱۶د)' : 'Light (4h 16m)'}
                </span>
              </div>
            </div>
          </div>

          {/* Biological Readiness / Recovery Card */}
          <div className="p-3 rounded-2xl bg-white/90 border border-white shadow-xs flex items-center gap-3">
            <div
              className="w-13 h-13 shrink-0 rounded-full p-[4px] flex items-center justify-center shadow-xs"
              style={{
                background: 'conic-gradient(#54C89A 84%, #E7F2EE 0)',
              }}
            >
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <strong className="text-xs font-black text-[#171827] font-mono">
                  {isRTL ? '۸۴٪' : '84%'}
                </strong>
              </div>
            </div>
            <div className="space-y-0.5">
              <strong className="text-[10px] font-black text-[#171827] block">
                {isRTL ? 'بدنت آماده است' : 'High Biological Readiness'}
              </strong>
              <p className="text-[8px] text-[#8B8DA1] leading-relaxed">
                {isRTL
                  ? 'سطح انرژی و شاخص HRV بسیار مناسب است. امروز پتانسیل یک جلسه تمرین با شدت بالا را داری.'
                  : 'Energy and recovery levels are optimal for peak cognitive and physical focus.'}
              </p>
            </div>
          </div>

          {/* Circadian Recommendation */}
          <div className="p-3 rounded-xl bg-gradient-to-r from-[#EFFCF8] to-[#F8FFFD] border border-[#DDF5EB] text-[9px] space-y-1">
            <div className="flex items-center gap-1.5 text-[#34A97F] font-bold">
              <Sparkles size={13} />
              <span>{isRTL ? 'پیشنهاد خواب امشب: ۲۳:۱۵' : 'Optimal Bedtime: 23:15'}</span>
            </div>
            <p className="text-[#6E7E78] text-[8px] leading-relaxed">
              {isRTL
                ? 'برای تجربه حداکثر موج ریکاوری دلتا، ۳۰ دقیقه قبل از خواب نور صفحه‌ها را کاهش دهید.'
                : 'Dim ambient screens 30m prior to sleep to maximize restorative delta wave cycles.'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // CHAPTER 04: INTELLIGENCE (AI Wellness Coach & Nutrition)
  // ----------------------------------------------------
  return (
    <div
      className={`w-full h-full text-[#171827] flex flex-col justify-between select-none ${
        isRTL ? 'font-persian text-right' : 'font-sans text-left'
      }`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="space-y-3.5">
        {/* Header */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#6F62E8] via-[#9C91F6] to-[#6DD7B8] text-white flex items-center justify-center shadow-md shadow-[#6F62E8]/20">
              <Bot size={16} />
            </div>
            <div>
              <span className="text-[10px] text-[#8B8DA1]">
                {isRTL ? 'مربی هوشمند وِیرا' : 'Veyra AI Companion'}
              </span>
              <h2 className="text-xs font-black text-[#171827]">
                {isRTL ? 'سلام عرفان، آماده‌ای؟' : 'Personalized Insights'}
              </h2>
            </div>
          </div>
          <span className="w-2 h-2 rounded-full bg-[#55C99B] animate-ping" />
        </div>

        {/* AI Insight Chat Bubbles */}
        <div className="p-3 rounded-2xl bg-white/90 border border-white shadow-xs space-y-2">
          <div className="p-2 rounded-xl bg-[#F8F8FC] border border-[#EEEEF3] text-[9px] text-[#171827] leading-relaxed">
            {isRTL ? (
              <>
                امروز امتیاز ریکاوری تو <strong className="text-[#6F62E8]">۸۴٪</strong> است. با توجه به خواب ۷:۴۸ دیشب، بدنت در بالاترین سطح انرژی هفته قرار دارد.
              </>
            ) : (
              <>
                Recovery index is <strong className="text-[#6F62E8]">84%</strong>. Biometrics confirm peak cognitive and physical readiness.
              </>
            )}
          </div>

          <div
            className={`p-2 rounded-xl bg-[#6F62E8] text-white text-[9px] leading-relaxed ${
              isRTL ? 'mr-auto' : 'ml-auto'
            } max-w-[85%]`}
          >
            {isRTL ? 'برای امشب چه برنامه‌ای پیشنهاد می‌کنی؟' : 'What is your evening recommendation?'}
          </div>

          <div className="p-2 rounded-xl bg-[#F8F8FC] border border-[#EEEEF3] text-[9px] text-[#171827] leading-relaxed">
            {isRTL ? (
              <>
                ساعت ۲۳:۱۵ به رختخواب برو. یک کشش سبک ۱۰ دقیقه‌ای و یک لیوان آب قبل از خواب، ریتم شبانه‌روزی‌ات را بهینه‌تر می‌کند.
              </>
            ) : (
              <>
                Aim for 23:15 lights out. A 10-minute stretch with hydration will stabilize sleep onset latency.
              </>
            )}
          </div>
        </div>

        {/* Nutrition Overview Donut & Macros */}
        <div className="p-3 rounded-2xl bg-white/90 border border-white shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[8px] text-[#8B8DA1] block">
                {isRTL ? 'تغذیه هوشمند امروز' : 'Mindful Nutrition'}
              </span>
              <strong className="text-xs font-black text-[#171827] font-mono">
                {isRTL ? '۱,۴۸۰' : '1,480'}{' '}
                <span className="text-[8px] font-normal text-[#8B8DA1]">
                  {isRTL ? '/ ۲,۲۰۰ kcal' : '/ 2,200 kcal'}
                </span>
              </strong>
            </div>
            <div
              className="w-10 h-10 rounded-full p-[3px] flex items-center justify-center"
              style={{
                background: 'conic-gradient(#7063E8 0 52%, #85DCC2 52% 78%, #82D9ED 78% 92%, #ECEBF3 92%)',
              }}
            >
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-mono">
                <strong className="text-[8px] font-bold text-[#171827]">
                  {isRTL ? '۶۷٪' : '67%'}
                </strong>
              </div>
            </div>
          </div>

          <div className="space-y-1 pt-1">
            <div className="flex justify-between text-[7px] text-[#8B8DA1]">
              <span>{isRTL ? 'پروتئین (۸۲g)' : 'Protein (82g)'}</span>
              <span>{isRTL ? 'کربوهیدرات (۱۶۸g)' : 'Carbs (168g)'}</span>
              <span>{isRTL ? 'چربی (۴۶g)' : 'Fat (46g)'}</span>
            </div>
            <div className="h-1.5 w-full bg-[#EEEEF4] rounded-full flex overflow-hidden">
              <div className="h-full bg-[#7467E8] w-[45%]" />
              <div className="h-full bg-[#84D9ED] w-[35%]" />
              <div className="h-full bg-[#83D5B9] w-[20%]" />
            </div>
          </div>
        </div>

        {/* AI Action Cards */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[11px] font-bold px-0.5">
            <span className="text-[#171827]">
              {isRTL ? 'پیشنهادهای فعال' : 'Active Interventions'}
            </span>
            <span className="text-[#6F62E8] text-[9px] font-bold">
              {isRTL ? '۳ مورد' : '3 Actions'}
            </span>
          </div>

          <div className="space-y-1.5">
            {[
              {
                id: 1,
                titleFa: 'ریکاوری ۱۰ دقیقه‌ای',
                titleEn: '10-Min Recovery Stretch',
                descFa: 'کشش آرام عضلانی برای کاهش هورمون کورتیزول',
                descEn: 'Gentle myofascial release to lower evening cortisol',
                icon: Zap,
                color: 'lav',
              },
              {
                id: 2,
                titleFa: 'میان‌وعده انرژی‌بخش',
                titleEn: 'Equilibrium Clean Snack',
                descFa: 'یک مشت مغزها و میوه برای انرژی پایدار',
                descEn: 'Handful of almonds & berries for steady glucose',
                icon: Apple,
                color: 'mint',
              },
            ].map((action) => {
              const Icon = action.icon;
              return (
                <div
                  key={action.id}
                  onClick={() => setSelectedAction(action.id)}
                  className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    selectedAction === action.id
                      ? 'bg-[#EEEAFF] border-[#6F62E8] shadow-xs'
                      : 'bg-white/90 border-white hover:border-[#E9E9F1]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs shrink-0 ${
                        action.color === 'lav'
                          ? 'bg-[#EEEAFF] text-[#6F62E8]'
                          : 'bg-[#E5FAF3] text-[#34A97F]'
                      }`}
                    >
                      <Icon size={14} />
                    </div>
                    <div>
                      <strong className="text-[9px] font-bold text-[#171827] block">
                        {isRTL ? action.titleFa : action.titleEn}
                      </strong>
                      <span className="text-[7px] text-[#8B8DA1] block">
                        {isRTL ? action.descFa : action.descEn}
                      </span>
                    </div>
                  </div>
                  {isRTL ? (
                    <ChevronLeft size={14} className="text-[#AAA9B8]" />
                  ) : (
                    <ChevronRight size={14} className="text-[#AAA9B8]" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
