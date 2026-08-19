import React, { useState } from 'react';
import {
  Sparkles,
  Check,
  Calendar,
  Plus,
  Search,
  SlidersHorizontal,
  FileText,
  Clock,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Zap,
} from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

interface ArvenScreenProps {
  screenId: 'think' | 'organize' | 'plan' | 'create';
}

export const ArvenScreen: React.FC<ArvenScreenProps> = ({ screenId }) => {
  const { isRTL, formatNumber } = useLanguage();

  // Screen 1 (THINK) State
  const [completedPriorities, setCompletedPriorities] = useState<number[]>([0]);

  // Screen 2 (ORGANIZE) State
  const [activeSegment, setActiveSegment] = useState<'today' | 'upcoming' | 'priority'>('today');
  const [completedTasks, setCompletedTasks] = useState<number[]>([101, 201]);

  // Screen 3 (PLAN) State
  const [selectedDate, setSelectedDate] = useState<number>(25);

  // Screen 4 (CREATE) State
  const [activeTag, setActiveTag] = useState<string>('all');

  const toggleTask = (id: number) => {
    setCompletedTasks((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  const togglePriority = (idx: number) => {
    setCompletedPriorities((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  // ----------------------------------------------------
  // CHAPTER 01: THINK (AI Workspace & Command Center)
  // ----------------------------------------------------
  if (screenId === 'think') {
    const priorities = isRTL
      ? [
          {
            title: 'طراحی معماری سیستم Arven',
            tag: 'طراحی رابط و تجربه کاربری',
            time: '۱۰:۳۰',
          },
          {
            title: 'بررسی گزارش عملکرد و تله‌متری',
            tag: 'تحلیل داده و شاخص‌ها',
            time: '۱۳:۰۰',
          },
          {
            title: 'جلسه هماهنگی تیم محصول',
            tag: 'گوگل میت · آنلاین',
            time: '۱۶:۳۰',
          },
        ]
      : [
          {
            title: 'Design Arven Core System Architecture',
            tag: 'UI/UX Design Tokens',
            time: '10:30 AM',
          },
          {
            title: 'Review Telemetry & Performance Report',
            tag: 'Analytics Engine',
            time: '1:00 PM',
          },
          {
            title: 'Product Design Sync & Review',
            tag: 'Google Meet · Live',
            time: '4:30 PM',
          },
        ];

    const quickCommands = isRTL
      ? [
          { title: 'برنامه‌ریزی روز', sub: 'بلاک‌بندی زمانی هوشمند', icon: Calendar },
          { title: 'خلاصه هوشمند', sub: 'جمع‌بندی داده‌های کاری', icon: Sparkles },
        ]
      : [
          { title: 'Plan Day', sub: 'Smart Time Blocking', icon: Calendar },
          { title: 'AI Summary', sub: 'Context Digest', icon: Sparkles },
        ];

    return (
      <div
        className={`w-full h-full text-[#111426] flex flex-col justify-between select-none ${
          isRTL ? 'font-persian text-right' : 'font-sans text-left'
        }`}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div className="space-y-4">
          {/* Hero Greeting */}
          <div className="flex items-center justify-between pt-1">
            <div>
              <span className="text-[11px] font-medium text-[#73788C]">
                {isRTL ? 'صبح بخیر' : 'Good Morning,'}
              </span>
              <h2 className="text-xl font-black tracking-tight text-[#111426] mt-0.5">
                {isRTL ? 'عرفان عزیز' : 'Erfan Moein'}
              </h2>
            </div>
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#5146E5] to-[#8B5CF6] text-white flex items-center justify-center font-bold text-xs shadow-md shadow-[#5146E5]/25">
              {isRTL ? 'ع' : 'EM'}
            </div>
          </div>

          {/* Neural AI Orb Card */}
          <div className="relative overflow-hidden rounded-3xl p-4 text-white bg-gradient-to-br from-[#3930B8] via-[#5146E5] to-[#4F8CFF] shadow-lg shadow-[#5146E5]/20">
            {/* Ambient inner blur glow */}
            <div className="absolute -right-8 -bottom-12 w-36 h-36 rounded-full bg-[#25B8D9]/40 blur-xl pointer-events-none" />
            <div className="absolute left-2 -top-8 w-28 h-28 rounded-full bg-[#8B5CF6]/50 blur-xl pointer-events-none" />

            <div className="relative z-10 space-y-3">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 border border-white/20 backdrop-blur-md text-[9px] font-bold tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ARVEN NEURAL CORE</span>
                </div>
                <Sparkles size={14} className="text-cyan-300" />
              </div>

              <p className="text-[11px] leading-relaxed font-medium text-white/95 max-w-[240px]">
                {isRTL
                  ? 'برنامه کاری امروز با ۹۰ دقیقه تمرکز عمیق روی پروژه بازطراحی بهینه‌سازی شد.'
                  : 'Daily workflow synthesized with a 90-min deep focus block for system design.'}
              </p>

              <div className="flex items-center gap-2 pt-1">
                <div className="px-2.5 py-1 rounded-lg bg-white/20 text-[9px] font-bold flex items-center gap-1.5 backdrop-blur-xs">
                  <Zap size={11} className="text-yellow-300" />
                  <span>{isRTL ? 'امتیاز تمرکز ۹۲٪' : '92% Focus Score'}</span>
                </div>
                <span className="text-[9px] text-white/70">
                  {isRTL ? '۳ وظیفه با اولویت بالا' : '3 priority tasks'}
                </span>
              </div>
            </div>
          </div>

          {/* Today's Priorities */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs px-1">
              <span className="font-bold text-[#111426]">
                {isRTL ? 'اولویت‌های امروز' : "Today's Priorities"}
              </span>
              <span className="text-[10px] text-[#5146E5] font-bold cursor-pointer">
                {isRTL ? 'مشاهده همه' : 'View all'}
              </span>
            </div>

            <div className="bg-white rounded-2xl border border-[#E7E9F1] shadow-xs divide-y divide-[#F0F2F8] overflow-hidden">
              {priorities.map((item, idx) => {
                const isChecked = completedPriorities.includes(idx);
                return (
                  <div
                    key={idx}
                    onClick={() => togglePriority(idx)}
                    className="p-3 flex items-center justify-between gap-3 cursor-pointer hover:bg-[#F9FAFC] transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all ${
                          isChecked
                            ? 'bg-[#5146E5] text-white'
                            : 'border border-[#C9CDD9] text-transparent hover:border-[#5146E5]'
                        }`}
                      >
                        <Check size={13} strokeWidth={2.5} />
                      </div>
                      <div>
                        <div
                          className={`text-[10.5px] font-bold transition-all ${
                            isChecked ? 'line-through text-[#9BA0B2]' : 'text-[#111426]'
                          }`}
                        >
                          {item.title}
                        </div>
                        <div className="text-[8.5px] text-[#73788C]">{item.tag}</div>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono text-[#9BA0B2]">{item.time}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick AI Commands Grid */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            {quickCommands.map((cmd, i) => {
              const Icon = cmd.icon;
              return (
                <div
                  key={i}
                  className="p-3 rounded-2xl bg-white border border-[#E7E9F1] shadow-xs flex items-center gap-2.5 cursor-pointer hover:border-[#5146E5]/40 transition-colors"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#5146E5]/8 text-[#5146E5] flex items-center justify-center shrink-0">
                    <Icon size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-[#111426]">{cmd.title}</div>
                    <div className="text-[8px] text-[#73788C]">{cmd.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // CHAPTER 02: ORGANIZE (Smart Tasks & Project Engine)
  // ----------------------------------------------------
  if (screenId === 'organize') {
    const segments = isRTL
      ? [
          { id: 'today', label: 'امروز' },
          { id: 'upcoming', label: 'آینده' },
          { id: 'priority', label: 'اولویت' },
        ]
      : [
          { id: 'today', label: 'Today' },
          { id: 'upcoming', label: 'Upcoming' },
          { id: 'priority', label: 'Priority' },
        ];

    const tasks = isRTL
      ? [
          { id: 101, title: 'طراحی ساختار داشبورد', tag: 'تکمیل شد', done: true },
          { id: 102, title: 'سیستم کارت‌ها و توکن‌های بصری', tag: 'امروز · حیاتی', priority: 'high' },
          { id: 103, title: 'ساخت پروتوتایپ تعاملی فاز ۱', tag: 'فردا · متوسط', priority: 'medium' },
        ]
      : [
          { id: 101, title: 'Dashboard UX Architecture', tag: 'Done', done: true },
          { id: 102, title: 'Design Token & Component Library', tag: 'Today · Critical', priority: 'high' },
          { id: 103, title: 'Interactive Motion Prototype', tag: 'Tomorrow · Medium', priority: 'medium' },
        ];

    return (
      <div
        className={`w-full h-full text-[#111426] flex flex-col justify-between select-none ${
          isRTL ? 'font-persian text-right' : 'font-sans text-left'
        }`}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div className="space-y-3.5">
          {/* Top Bar */}
          <div className="flex items-center justify-between pt-1">
            <div>
              <h2 className="text-lg font-black text-[#111426]">
                {isRTL ? 'وظایف هوشمند' : 'Smart Tasks'}
              </h2>
              <span className="text-[10px] text-[#73788C]">
                {isRTL ? '۱۲ کار فعال در جریان' : '12 active tasks in queue'}
              </span>
            </div>
            <button className="w-8 h-8 rounded-xl bg-white border border-[#E7E9F1] shadow-xs text-[#5146E5] flex items-center justify-center">
              <Plus size={16} />
            </button>
          </div>

          {/* Segmented Filter */}
          <div className="grid grid-cols-3 gap-1 p-1 bg-[#ECEEF5] rounded-xl text-[9.5px] font-bold text-center">
            {segments.map((seg) => (
              <button
                key={seg.id}
                onClick={() => setActiveSegment(seg.id as any)}
                className={`py-1.5 rounded-lg transition-all ${
                  activeSegment === seg.id
                    ? 'bg-white text-[#111426] shadow-xs'
                    : 'text-[#73788C] hover:text-[#111426]'
                }`}
              >
                {seg.label}
              </button>
            ))}
          </div>

          {/* AI Task Decomposition Suggestion */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#5146E5]/8 via-[#25B8D9]/5 to-white border border-[#5146E5]/15 space-y-2">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1 text-[8.5px] font-extrabold text-[#5146E5] uppercase tracking-wider">
                <Sparkles size={11} />
                <span>AI TASK SPLIT</span>
              </span>
              <span className="text-[8px] text-[#73788C]">Auto-Decompose</span>
            </div>
            <p className="text-[9.5px] leading-relaxed text-[#555B70]">
              {isRTL
                ? 'پروژه بزرگ «طراحی Prototype» به ۳ زیروظیفه قابل انجام در ۴۵ دقیقه تقسیم شد.'
                : 'Complex task decomposed into 3 bite-sized actionable micro-tasks.'}
            </p>
            <div className="flex items-center justify-between p-2 rounded-xl bg-[#5146E5]/6 text-[8.5px] font-bold text-[#5146E5]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={12} />
                {isRTL ? 'ایجاد خودکار ۳ مرحله کاری' : 'Generated 3 sub-steps'}
              </span>
              {isRTL ? (
                <ArrowLeft size={11} className="rotate-180" />
              ) : (
                <ArrowRight size={11} />
              )}
            </div>
          </div>

          {/* Active Project Card */}
          <div className="p-3.5 rounded-2xl bg-white border border-[#E7E9F1] shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#5146E5]" />
                <span className="text-[11px] font-extrabold text-[#111426]">
                  {isRTL ? 'پروژه طراحی Arven' : 'Arven Product Design'}
                </span>
              </div>
              <span className="text-[9px] font-mono font-bold text-[#5146E5]">
                {isRTL ? '۷۲٪' : '72%'}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-[#ECEEF4] rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#5146E5] to-[#25B8D9] rounded-full w-[72%]" />
            </div>

            {/* Task List */}
            <div className="space-y-2 pt-1 divide-y divide-[#F0F2F8]">
              {tasks.map((t) => {
                const isChecked = completedTasks.includes(t.id);
                return (
                  <div
                    key={t.id}
                    onClick={() => toggleTask(t.id)}
                    className="pt-2 first:pt-0 flex items-center justify-between gap-2 cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] transition-all ${
                          isChecked
                            ? 'bg-[#5146E5] text-white'
                            : 'border border-[#C9CDD9] text-transparent'
                        }`}
                      >
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span
                        className={`text-[9.5px] font-bold ${
                          isChecked ? 'line-through text-[#A0A4B1]' : 'text-[#111426]'
                        }`}
                      >
                        {t.title}
                      </span>
                    </div>

                    {t.priority === 'high' && (
                      <span className="px-1.5 py-0.5 rounded bg-rose-50 text-rose-600 text-[7.5px] font-bold">
                        {isRTL ? 'فوری' : 'HIGH'}
                      </span>
                    )}
                    {t.priority === 'medium' && (
                      <span className="px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 text-[7.5px] font-bold">
                        {isRTL ? 'متوسط' : 'MED'}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // CHAPTER 03: PLAN (Smart Calendar & Focus Timeline)
  // ----------------------------------------------------
  if (screenId === 'plan') {
    const days = isRTL
      ? [
          { day: 'چهارشنبه', date: 22 },
          { day: 'پنجشنبه', date: 23 },
          { day: 'جمعه', date: 24 },
          { day: 'شنبه', date: 25 },
          { day: 'یکشنبه', date: 26 },
        ]
      : [
          { day: 'Wed', date: 22 },
          { day: 'Thu', date: 23 },
          { day: 'Fri', date: 24 },
          { day: 'Sat', date: 25 },
          { day: 'Sun', date: 26 },
        ];

    const timelineEvents = isRTL
      ? [
          {
            time: '۰۹:۰۰',
            title: 'مرور برنامه روزانه و اهداف',
            sub: 'Arven AI · ۳۰ دقیقه',
            color: 'border-r-4 border-r-[#5146E5]',
          },
          {
            time: '۱۰:۰۰',
            title: 'طراحی داشبورد محصول Arven',
            sub: 'تمرکز عمیق · بدون نوتیفیکیشن',
            color: 'border-r-4 border-r-[#25B8D9] bg-[#F4FBFC]',
          },
          {
            time: '۱۲:۰۰',
            title: 'جلسه تیم محصول و بازبینی UX',
            sub: '۴ نفر · ۴۵ دقیقه',
            color: 'border-r-4 border-r-[#8B5CF6]',
          },
          {
            time: '۱۴:۰۰',
            title: 'زمان آزاد شخصی و بازسازی انرژی',
            sub: 'زمان آزاد · ۶۰ دقیقه',
            color: 'border-r-4 border-r-[#20B486]',
          },
        ]
      : [
          {
            time: '09:00',
            title: 'Daily Goal Review & Briefing',
            sub: 'Arven AI · 30 mins',
            color: 'border-l-4 border-l-[#5146E5]',
          },
          {
            time: '10:00',
            title: 'Arven Core Workspace Architecture',
            sub: 'Deep Focus · Zero Notifications',
            color: 'border-l-4 border-l-[#25B8D9] bg-[#F4FBFC]',
          },
          {
            time: '12:00',
            title: 'Design Critique & Engineering Sync',
            sub: '4 Team Members · 45 mins',
            color: 'border-l-4 border-l-[#8B5CF6]',
          },
          {
            time: '14:00',
            title: 'Personal Recharge & Free Reading',
            sub: 'Free Time · 60 mins',
            color: 'border-l-4 border-l-[#20B486]',
          },
        ];

    return (
      <div
        className={`w-full h-full text-[#111426] flex flex-col justify-between select-none ${
          isRTL ? 'font-persian text-right' : 'font-sans text-left'
        }`}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div className="space-y-3">
          {/* Top Bar */}
          <div className="flex items-center justify-between pt-1">
            <div>
              <h2 className="text-lg font-black text-[#111426]">
                {isRTL ? 'تقویم هوشمند' : 'Smart Calendar'}
              </h2>
              <span className="text-[10px] text-[#73788C]">
                {isRTL ? 'شنبه، ۲۵ مرداد ۱۴۰۵' : 'Saturday, Aug 25'}
              </span>
            </div>
            <button className="w-8 h-8 rounded-xl bg-white border border-[#E7E9F1] shadow-xs text-[#5146E5] flex items-center justify-center">
              <Plus size={16} />
            </button>
          </div>

          {/* Date Strip */}
          <div className="flex gap-1.5 justify-between">
            {days.map((d) => {
              const isActive = selectedDate === d.date;
              return (
                <div
                  key={d.date}
                  onClick={() => setSelectedDate(d.date)}
                  className={`flex-1 py-2 px-1 rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all ${
                    isActive
                      ? 'bg-gradient-to-b from-[#5146E5] to-[#6C63EF] text-white shadow-md shadow-[#5146E5]/25'
                      : 'bg-white border border-[#E7E9F1] text-[#818697] hover:border-[#5146E5]/40'
                  }`}
                >
                  <span className="text-[7.5px] opacity-80">{d.day.slice(0, 3)}</span>
                  <span className="text-[13px] font-black">
                    {isRTL ? formatNumber(d.date) : d.date}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Schedule Timeline */}
          <div
            className={`relative ${
              isRTL ? 'pr-7' : 'pl-7'
            } space-y-2 py-1`}
          >
            {/* Vertical Line */}
            <div
              className={`absolute ${
                isRTL ? 'right-3' : 'left-3'
              } top-2 bottom-2 w-px bg-[#E3E5ED]`}
            />

            {timelineEvents.map((ev, i) => (
              <div key={i} className="relative">
                {/* Timeline Dot */}
                <div
                  className={`absolute ${
                    isRTL ? '-right-7' : '-left-7'
                  } top-3 w-2.5 h-2.5 rounded-full bg-[#5146E5] border-2 border-white ring-1 ring-[#5146E5]`}
                />
                <div
                  className={`p-2.5 rounded-xl bg-white border border-[#E7E9F1] shadow-xs ${
                    isRTL ? 'text-right' : 'text-left'
                  } ${ev.color}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[9.5px] font-bold text-[#111426]">{ev.title}</span>
                    <span className="text-[8px] font-mono text-[#9BA0B2]">{ev.time}</span>
                  </div>
                  <span className="text-[8px] text-[#73788C] mt-0.5 block">{ev.sub}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Focus Block Card */}
          <div className="p-3 rounded-2xl bg-white border border-[#E7E9F1] shadow-xs flex items-center justify-between gap-2.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#5146E5]/8 text-[#5146E5] flex items-center justify-center shrink-0">
                <Clock size={16} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-[#111426]">
                  {isRTL ? 'بلاک تمرکز فعال' : 'Focus Block Active'}
                </div>
                <div className="text-[8px] text-[#73788C]">
                  {isRTL ? 'حالت کار عمیق روشن' : 'Deep Work Mode On'}
                </div>
              </div>
            </div>
            <span className="text-[12px] font-mono font-black text-[#5146E5]">
              {isRTL ? '۰۱:۴۲' : '01:42'}
            </span>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // CHAPTER 04: CREATE (Knowledge Synthesis & Copilot)
  // ----------------------------------------------------
  const tags = isRTL
    ? [
        { id: 'all', label: 'همه یادداشت‌ها' },
        { id: 'product', label: 'طراحی محصول' },
        { id: 'ai', label: 'هوش مصنوعی' },
        { id: 'ideas', label: 'ایده‌ها' },
      ]
    : [
        { id: 'all', label: 'All Notes' },
        { id: 'product', label: 'Product UI' },
        { id: 'ai', label: 'AI Systems' },
        { id: 'ideas', label: 'Ideas' },
      ];

  return (
    <div
      className={`w-full h-full text-[#111426] flex flex-col justify-between select-none ${
        isRTL ? 'font-persian text-right' : 'font-sans text-left'
      }`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="space-y-3">
        {/* Top Bar */}
        <div className="flex items-center justify-between pt-1">
          <div>
            <h2 className="text-lg font-black text-[#111426]">
              {isRTL ? 'دانش و یادداشت‌ها' : 'Knowledge & Notes'}
            </h2>
            <span className="text-[10px] text-[#73788C]">
              {isRTL ? '۲۴۸ یادداشت هوشمند' : '248 notes indexed'}
            </span>
          </div>
          <button className="w-8 h-8 rounded-xl bg-white border border-[#E7E9F1] shadow-xs text-[#5146E5] flex items-center justify-center">
            <Plus size={16} />
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-[#E7E9F1] shadow-xs text-xs text-[#73788C]">
          <Search size={14} className="text-[#9BA0B2]" />
          <span className="text-[9.5px] flex-1">
            {isRTL ? 'جستجو در یادداشت‌ها و مستندات...' : 'Search neural knowledge graph...'}
          </span>
          <SlidersHorizontal size={12} className="text-[#9BA0B2]" />
        </div>

        {/* Filter Tags */}
        <div className="flex gap-1.5 overflow-x-auto pb-1 text-[8.5px] font-bold scrollbar-none">
          {tags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => setActiveTag(tag.id)}
              className={`px-3 py-1 rounded-full whitespace-nowrap transition-colors ${
                activeTag === tag.id
                  ? 'bg-[#5146E5] text-white shadow-xs'
                  : 'bg-white border border-[#E7E9F1] text-[#73788C]'
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* Note Card 1 */}
        <div className="p-3.5 rounded-2xl bg-white border border-[#E7E9F1] shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-[#8B5CF6]/10 text-[#8B5CF6] flex items-center justify-center">
                <FileText size={13} />
              </div>
              <span className="text-[10px] font-bold text-[#111426]">
                {isRTL ? 'اصول طراحی نسل جدید UI' : 'Next-Gen Interface Principles'}
              </span>
            </div>
            <span className="text-[8px] text-[#9BA0B2]">{isRTL ? 'امروز' : 'Today'}</span>
          </div>
          <p className="text-[9px] leading-relaxed text-[#73788C]">
            {isRTL
              ? 'تجربه کاربری مدرن باید از پیچیدگی بصری فاصله بگیرد و اطلاعات مهم را در کوتاه‌ترین مسیر ارائه دهد.'
              : 'Modern UX must eliminate unnecessary cognitive friction, providing instant access to synthesized insights.'}
          </p>
          <div className="flex gap-1 pt-1">
            {['UX', 'Product', 'Design'].map((chip) => (
              <span
                key={chip}
                className="px-1.5 py-0.5 rounded bg-[#F3F4F8] text-[#73788C] text-[7.5px] font-bold"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* AI Insight Card */}
        <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#25B8D9]/10 via-[#5146E5]/8 to-white border border-[#5146E5]/15 space-y-2">
          <div className="flex items-center gap-2 text-[#5146E5]">
            <Sparkles size={14} />
            <span className="text-[9.5px] font-black">
              {isRTL ? 'بینش استخراج‌شده توسط Arven AI' : 'Insight synthesized by Arven AI'}
            </span>
          </div>
          <p className="text-[9px] leading-relaxed text-[#555B70]">
            {isRTL
              ? 'الگوی تکرارشونده در یادداشت‌ها: محور تمام ایده‌ها بر «سادگی + اتوماسیون هوشمند» قرار دارد.'
              : 'Pattern discovered across 24 notes: emphasis on frictionless automation and clean typography.'}
          </p>
          <button className="w-full py-1.5 rounded-xl bg-[#5146E5] text-white text-[8.5px] font-bold shadow-xs">
            {isRTL ? 'ساخت نقشه دانش خودکار' : 'Generate Neural Knowledge Map'}
          </button>
        </div>
      </div>
    </div>
  );
};

