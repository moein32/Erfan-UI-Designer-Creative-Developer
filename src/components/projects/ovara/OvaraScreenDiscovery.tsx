import React, { useState } from 'react';
import { Search, SlidersHorizontal, Heart, Sparkles, Check, ArrowUpDown } from 'lucide-react';

interface OvaraScreenProps {
  onNavigateToDetail?: () => void;
  onNavigateToCart?: () => void;
}

export const OvaraScreenDiscovery: React.FC<OvaraScreenProps> = ({
  onNavigateToDetail,
}) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [likedList, setLikedList] = useState<Record<string, boolean>>({
    'p-1': true,
    'p-3': true,
  });

  const toggleWish = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedList((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filterTabs = [
    { id: 'all', label: 'همه' },
    { id: 'popular', label: 'محبوب‌ترین' },
    { id: 'new', label: 'جدیدترین' },
    { id: 'luxury', label: 'منتخب لوکس' },
  ];

  const products = [
    {
      id: 'p-1',
      name: 'iPhone 16 Pro Max',
      specs: '256GB Natural Titanium',
      price: '۱۵۴,۹۰۰,۰۰۰',
      rating: '۴.۹',
      badge: 'پرچمدار',
      art: '📱',
      artBg: 'from-[#EBEAEF] to-[#D1CFDB]',
    },
    {
      id: 'p-2',
      name: 'Sony WH-1000XM6',
      specs: 'Silver Silent Noise Cancel',
      price: '۲۴,۸۰۰,۰۰۰',
      rating: '۴.۸',
      badge: 'جدید',
      art: '🎧',
      artBg: 'from-[#F3F4F6] to-[#E5E7EB]',
    },
    {
      id: 'p-3',
      name: 'Apple Watch Ultra 2',
      specs: '49mm Titanium GPS+Cell',
      price: '۴۱,۹۰۰,۰۰۰',
      rating: '۴.۹',
      badge: 'ویژه',
      art: '⌚',
      artBg: 'from-[#EDE9FE] to-[#DDD6FE]',
    },
    {
      id: 'p-4',
      name: 'Nike Air Max DN8',
      specs: 'All Black Air Core 2026',
      price: '۹,۶۰۰,۰۰۰',
      rating: '۴.۷',
      badge: 'محبوب',
      art: '👟',
      artBg: 'from-[#FEE2E2] to-[#FECACA]',
    },
    {
      id: 'p-5',
      name: 'Aesop Hwyl EDP',
      specs: '50ml Australian Cypress',
      price: '۴,۹۹۰,۰۰۰',
      rating: '۴.۹',
      badge: 'لوکس',
      art: '🌿',
      artBg: 'from-[#D1FAE5] to-[#A7F3D0]',
    },
    {
      id: 'p-6',
      name: 'Galaxy S25 Ultra',
      specs: '512GB Titanium Gray AI',
      price: '۱۲۱,۵۰۰,۰۰۰',
      rating: '۴.۸',
      badge: 'جدید',
      art: '📲',
      artBg: 'from-[#E0E7FF] to-[#C7D2FE]',
    },
  ];

  return (
    <div className="flex flex-col min-h-full pb-16 font-persian text-[#111116] select-none text-right" dir="rtl">
      {/* Editorial Title */}
      <div className="pt-1 pb-2">
        <h2 className="text-sm font-black tracking-tight text-[#111116]">کشف و جستجوی هوشمند</h2>
        <p className="text-[9px] text-[#858791] mt-0.5">آنچه در ذهن داری، با سریع‌ترین دقت در اختیار توست</p>
      </div>

      {/* Search Input Box */}
      <div className="relative mt-2">
        <div className="h-10 flex items-center gap-2 px-3 bg-[#F6F6F8] border border-[#EDEDF1] rounded-2xl text-[#858791] text-[11px] focus-within:border-[#7667F4] focus-within:bg-white transition-all shadow-2xs">
          <Search size={14} className="text-[#A0A1A8]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="آیفون، هدفون، کفش لوکس یا عطر..."
            className="w-full bg-transparent border-none outline-none text-[#111116] text-[10px] font-medium placeholder:text-[#9999A2]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-[10px] text-[#999] bg-[#EAEAEA] rounded-full w-4 h-4 flex items-center justify-center"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 mt-2.5 overflow-x-auto pb-1 scrollbar-none">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id)}
            className={`px-3 py-1.5 rounded-xl text-[9px] font-bold whitespace-nowrap transition-all ${
              activeFilter === tab.id
                ? 'bg-[#111116] text-white shadow-xs'
                : 'bg-[#F2F2F5] text-[#666] hover:bg-[#EAEAEF]'
            }`}
          >
            {tab.label}
          </button>
        ))}
        <button className="p-1.5 rounded-xl bg-[#F2F2F5] text-[#666] hover:bg-[#EAEAEF] shrink-0 mr-auto">
          <SlidersHorizontal size={12} />
        </button>
      </div>

      {/* Results Meta Bar */}
      <div className="flex items-center justify-between mt-3 mb-2 px-0.5">
        <span className="text-[9px] font-bold text-[#555]">۱۲۴ محصول منطبق با سلیقه شما</span>
        <div className="flex items-center gap-1 text-[8px] font-bold text-[#7667F4] cursor-pointer hover:underline">
          <ArrowUpDown size={10} />
          <span>مرتب‌سازی هوشمند</span>
        </div>
      </div>

      {/* 2x3 Products Grid */}
      <div className="grid grid-cols-2 gap-2">
        {products.map((item) => (
          <div
            key={item.id}
            onClick={onNavigateToDetail}
            className="group bg-[#F9F9FB] hover:bg-white border border-[#ECECF1] hover:border-[#D9D9E2] rounded-2xl p-2 cursor-pointer transition-all hover:shadow-xs flex flex-col justify-between relative"
          >
            {/* Wishlist Button */}
            <button
              onClick={(e) => toggleWish(item.id, e)}
              className="absolute top-3 left-3 w-6 h-6 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#FF5C39] shadow-2xs z-10 hover:scale-110 active:scale-95 transition-all"
            >
              <Heart
                size={11}
                fill={likedList[item.id] ? '#FF5C39' : 'none'}
                className={likedList[item.id] ? 'text-[#FF5C39]' : 'text-[#888]'}
              />
            </button>

            {/* Thumbnail Canvas */}
            <div
              className={`h-24 rounded-xl bg-gradient-to-br ${item.artBg} flex items-center justify-center overflow-hidden relative shadow-2xs`}
            >
              <div className="text-2xl transform group-hover:scale-110 transition-transform duration-300">
                {item.art}
              </div>
              <span className="absolute bottom-1.5 right-1.5 px-1 py-0.5 bg-black/40 backdrop-blur-xs text-white text-[7px] font-bold rounded">
                {item.badge}
              </span>
            </div>

            {/* Info */}
            <div className="pt-2 pb-0.5 px-0.5">
              <div className="text-[10px] font-black text-[#111116] truncate">{item.name}</div>
              <div className="text-[8px] text-[#858791] truncate mt-0.5">{item.specs}</div>
              
              <div className="flex items-center justify-between mt-2 pt-1 border-t border-[#ECECF1]/70">
                <div className="text-[10px] font-black text-[#111116]">
                  {item.price} <span className="text-[7px] font-normal text-[#858791]">تومان</span>
                </div>
                <div className="flex items-center text-amber-500 text-[8px] font-bold">
                  ★ {item.rating}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Editor's Pick Gradient Card */}
      <div 
        onClick={onNavigateToDetail}
        className="mt-3.5 relative overflow-hidden rounded-2xl p-3 bg-gradient-to-r from-[#FF6F61] to-[#EE5D8F] text-white cursor-pointer shadow-xs active:scale-[0.99] transition-transform"
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[8px] font-black tracking-wider text-white/80 uppercase">
              OVARA EDITORIAL
            </div>
            <h4 className="text-xs font-black mt-0.5">انتخاب‌های تحریریه لوکس</h4>
            <p className="text-[8px] text-white/80 mt-0.5">ارزش خرید تأییدشده توسط طراحان مد</p>
          </div>
          <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-xs font-black">
            💎
          </div>
        </div>
      </div>
    </div>
  );
};
