import React, { useState } from 'react';
import { Search, Bell, Sparkles, ChevronLeft, Star, Heart } from 'lucide-react';

interface OvaraScreenProps {
  onNavigateToDetail?: () => void;
  onNavigateToCart?: () => void;
  isPersianMode?: boolean;
}

export const OvaraScreenHome: React.FC<OvaraScreenProps> = ({
  onNavigateToDetail,
  onNavigateToCart,
}) => {
  const [selectedCat, setSelectedCat] = useState(0);
  const [likedItems, setLikedItems] = useState<Record<string, boolean>>({
    'shoe-1': true,
  });

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const categories = [
    { id: 0, name: 'مد و پوشاک', en: 'Apparel', bg: 'bg-[#F0EFFF]', text: 'text-[#7667F4]', icon: '👔' },
    { id: 1, name: 'دیجیتال', en: 'Digital', bg: 'bg-[#FFF0ED]', text: 'text-[#FF5C39]', icon: '📱' },
    { id: 2, name: 'ساعت و جواهر', en: 'Watches', bg: 'bg-[#EDF5FF]', text: 'text-[#3D8DFF]', icon: '⌚' },
    { id: 3, name: 'عطر و لوکس', en: 'Fragrance', bg: 'bg-[#EAF9F5]', text: 'text-[#31AD82]', icon: '✨' },
  ];

  return (
    <div className="flex flex-col min-h-full pb-16 font-persian text-[#111116] select-none text-right" dir="rtl">
      {/* Top Header */}
      <div className="flex items-center justify-between pt-1 pb-3 px-1">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-[#FBD4CD] to-[#FFF2EF] flex items-center justify-center font-bold text-[#A7463C] text-sm shadow-sm">
            ع
          </div>
          <div>
            <div className="text-[10px] text-[#858791]">روز بخیر،</div>
            <div className="text-xs font-black tracking-tight text-[#111116]">عرفان معین</div>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button 
            onClick={onNavigateToCart}
            className="w-8 h-8 rounded-xl bg-white border border-[#ECECF1] flex items-center justify-center text-[#202126] shadow-xs active:scale-95 transition-transform relative"
          >
            <span className="text-xs">🛍️</span>
            <span className="absolute -top-1 -left-1 w-3.5 h-3.5 bg-[#FF5C39] text-white text-[8px] font-black rounded-full flex items-center justify-center">
              ۳
            </span>
          </button>
          <button className="w-8 h-8 rounded-xl bg-white border border-[#ECECF1] flex items-center justify-center text-[#202126] shadow-xs active:scale-95 transition-transform">
            <Bell size={14} className="text-[#555]" />
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative mt-1 mb-3">
        <div className="h-10 flex items-center gap-2 px-3 bg-[#F6F6F8] border border-[#EDEDF1] rounded-2xl text-[#858791] text-[11px] shadow-2xs">
          <Search size={14} className="text-[#A0A1A8]" />
          <span className="text-[#9999A2] font-medium">جستجو در بین ۴,۵۰۰ کالای لوکس...</span>
        </div>
      </div>

      {/* Categories Carousel */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCat(cat.id)}
            className={`flex-1 min-w-[62px] py-2 px-1.5 rounded-2xl flex flex-col items-center gap-1 transition-all border ${
              selectedCat === cat.id
                ? 'bg-white border-[#7667F4]/30 shadow-xs scale-[1.02]'
                : 'bg-[#F9F9FB] border-transparent hover:bg-white'
            }`}
          >
            <div className={`w-9 h-9 rounded-xl ${cat.bg} flex items-center justify-center text-sm shadow-2xs`}>
              {cat.icon}
            </div>
            <span className="text-[9px] font-bold text-[#444] whitespace-nowrap">{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Curated Editorial Banner */}
      <div 
        onClick={onNavigateToDetail}
        className="mt-3.5 relative overflow-hidden rounded-2xl p-3.5 bg-gradient-to-br from-[#171821] via-[#3E3A70] to-[#7466EF] text-white cursor-pointer shadow-md active:scale-[0.99] transition-transform"
      >
        <div className="absolute -left-10 -top-10 w-28 h-28 rounded-full bg-white/10 blur-xl pointer-events-none" />
        <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-[#FF5C39]/20 blur-xl pointer-events-none" />
        
        <div className="flex items-center gap-1.5 text-[8px] font-bold tracking-wider text-[#FFD188] uppercase">
          <Sparkles size={10} />
          <span>OVARA ATELIER DROP 09</span>
        </div>
        <h4 className="mt-1 text-sm font-black leading-snug">
          مجموعه تیتانیوم پاییز ۲۰۲۶
        </h4>
        <p className="text-[9px] text-white/70 mt-0.5 max-w-[170px] leading-relaxed">
          دسترسی زودهنگام اعضای وفادار با تحویل VIP رایگان
        </p>
        <div className="mt-2.5 inline-flex items-center gap-1 px-2.5 py-1 bg-white text-[#171821] text-[9px] font-black rounded-lg shadow-sm">
          <span>مشاهده و سفارش</span>
          <ChevronLeft size={10} />
        </div>
      </div>

      {/* Section 1: Curated Drops */}
      <div className="mt-4">
        <div className="flex items-center justify-between mb-2 px-0.5">
          <h3 className="text-xs font-black text-[#111116]">کالکشن منتخب امروز</h3>
          <span className="text-[9px] font-bold text-[#7667F4] hover:underline cursor-pointer">مشاهده همه</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {/* Card 1: New Balance */}
          <div 
            onClick={onNavigateToDetail}
            className="group bg-[#F9F9FB] hover:bg-white border border-[#ECECF1] rounded-2xl p-2 cursor-pointer transition-all hover:shadow-sm"
          >
            <div className="relative h-24 rounded-xl bg-gradient-to-br from-[#EAEBF0] to-[#DCDFE6] flex items-center justify-center overflow-hidden">
              <button
                onClick={(e) => toggleLike('shoe-1', e)}
                className="absolute top-1.5 left-1.5 w-6 h-6 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-[#FF5C39] shadow-2xs z-10"
              >
                <Heart size={11} fill={likedItems['shoe-1'] ? '#FF5C39' : 'none'} />
              </button>
              {/* Product Artwork representation */}
              <div className="w-16 h-9 rounded-full bg-gradient-to-r from-white to-[#CBD1DC] transform -rotate-12 shadow-sm flex items-center justify-center border border-white/60">
                <span className="text-[8px] font-mono font-bold text-[#555]">NB 9060</span>
              </div>
            </div>
            <div className="pt-2 pb-0.5 px-0.5">
              <div className="text-[10px] font-bold text-[#111116] truncate">New Balance 9060 Sea Salt</div>
              <div className="flex items-center gap-1 mt-0.5">
                <div className="flex text-amber-400 text-[8px]">★ 4.8</div>
                <span className="text-[8px] text-[#999]">(۱۴۲ نظر)</span>
              </div>
              <div className="mt-1 text-[11px] font-black text-[#111116]">
                ۷,۹۸۰,۰۰۰ <span className="text-[8px] font-normal text-[#858791]">تومان</span>
              </div>
            </div>
          </div>

          {/* Card 2: Aesop Fragrance */}
          <div 
            onClick={onNavigateToDetail}
            className="group bg-[#F9F9FB] hover:bg-white border border-[#ECECF1] rounded-2xl p-2 cursor-pointer transition-all hover:shadow-sm"
          >
            <div className="relative h-24 rounded-xl bg-gradient-to-br from-[#E7FAF6] to-[#D1F2EA] flex items-center justify-center overflow-hidden">
              <button
                onClick={(e) => toggleLike('perfume-1', e)}
                className="absolute top-1.5 left-1.5 w-6 h-6 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-[#FF5C39] shadow-2xs z-10"
              >
                <Heart size={11} fill={likedItems['perfume-1'] ? '#FF5C39' : 'none'} />
              </button>
              {/* Product Art */}
              <div className="w-7 h-16 rounded-md bg-gradient-to-b from-[#A9E7DF] via-white to-[#7ECBC0] shadow-sm flex flex-col items-center justify-between p-1 border border-white">
                <div className="w-3 h-2 bg-[#2D443E] rounded-xs" />
                <span className="text-[6px] font-mono font-bold text-[#2D443E]">TACIT</span>
              </div>
            </div>
            <div className="pt-2 pb-0.5 px-0.5">
              <div className="text-[10px] font-bold text-[#111116] truncate">Aesop Tacit EDP 50ml</div>
              <div className="flex items-center gap-1 mt-0.5">
                <div className="flex text-amber-400 text-[8px]">★ 4.9</div>
                <span className="text-[8px] text-[#999]">(۸۹ نظر)</span>
              </div>
              <div className="mt-1 text-[11px] font-black text-[#111116]">
                ۵,۲۵۰,۰۰۰ <span className="text-[8px] font-normal text-[#858791]">تومان</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Smart Recommendations */}
      <div className="mt-4">
        <div className="flex items-center justify-between mb-2 px-0.5">
          <div>
            <h3 className="text-xs font-black text-[#111116]">پیشنهاد مخصوص تو</h3>
            <span className="text-[8px] text-[#858791]">هماهنگ با سلیقه و کاوش‌های اخیر</span>
          </div>
          <span className="text-[9px] font-bold text-[#7667F4] hover:underline cursor-pointer">تازه‌سازی</span>
        </div>

        {/* Featured Large Horizontal Card: AirPods Max */}
        <div 
          onClick={onNavigateToDetail}
          className="bg-white border border-[#ECECF1] rounded-2xl p-2.5 flex items-center gap-3 cursor-pointer shadow-2xs hover:shadow-xs transition-all"
        >
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#1E2026] to-[#0D0E12] flex items-center justify-center text-white shrink-0 shadow-inner">
            <span className="text-xl">🎧</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="px-1.5 py-0.5 bg-[#FFF0ED] text-[#FF5C39] text-[7px] font-black rounded-sm">
                پرفروش
              </span>
              <span className="text-[8px] text-[#858791]">Apple Audio</span>
            </div>
            <div className="text-[11px] font-black text-[#111116] mt-0.5 truncate">
              AirPods Max USB-C Midnight
            </div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-xs font-black text-[#FF5C39]">
                ۳۲,۷۰۰,۰۰۰ <small className="text-[8px] text-[#858791] font-normal">تومان</small>
              </span>
              <span className="text-[8px] text-emerald-600 font-bold bg-emerald-50 px-1 py-0.5 rounded">
                موجود در انبار
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
