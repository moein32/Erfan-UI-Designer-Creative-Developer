import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Heart, Share2, ShieldCheck, Truck, Star, Check, Sparkles } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

interface OvaraScreenProps {
  onBack?: () => void;
  onNavigateToCart?: () => void;
}

export const OvaraScreenDetails: React.FC<OvaraScreenProps> = ({
  onBack,
  onNavigateToCart,
}) => {
  const { isRTL, formatNumber } = useLanguage();
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedStorage, setSelectedStorage] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(true);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const colors = isRTL
    ? [
        { name: 'تیتانیوم طبیعی', hex: '#C5BFB8', border: 'border-[#9E958C]' },
        { name: 'مشکی فضایی', hex: '#2A2A2E', border: 'border-[#1E1E22]' },
        { name: 'سفید صدفی', hex: '#F0EFEA', border: 'border-[#DCDAD2]' },
        { name: 'آبی صحرایی', hex: '#B8C1CD', border: 'border-[#8F9AA9]' },
      ]
    : [
        { name: 'Natural Titanium', hex: '#C5BFB8', border: 'border-[#9E958C]' },
        { name: 'Space Black', hex: '#2A2A2E', border: 'border-[#1E1E22]' },
        { name: 'White Titanium', hex: '#F0EFEA', border: 'border-[#DCDAD2]' },
        { name: 'Desert Blue', hex: '#B8C1CD', border: 'border-[#8F9AA9]' },
      ];

  const storages = isRTL
    ? ['۲۵۶ گیگابایت', '۵۱۲ گیگابایت', '۱ ترابایت']
    : ['256 GB', '512 GB', '1 TB'];

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => {
      onNavigateToCart?.();
    }, 600);
  };

  return (
    <div
      className={`flex flex-col min-h-full pb-20 text-[#111116] select-none ${
        isRTL ? 'font-persian text-right' : 'font-sans text-left'
      }`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Detail Top Navigation */}
      <div className="flex items-center justify-between pt-1 pb-2">
        <button
          onClick={onBack}
          className="w-8 h-8 rounded-xl bg-white border border-[#ECECF1] flex items-center justify-center text-[#202126] shadow-xs active:scale-90 transition-transform"
        >
          {isRTL ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
        <span className="text-[11px] font-black text-[#111116]">
          {isRTL ? 'جزئیات محصول' : 'Product Details'}
        </span>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className="w-8 h-8 rounded-xl bg-white border border-[#ECECF1] flex items-center justify-center text-[#FF5C39] shadow-xs active:scale-90 transition-transform"
          >
            <Heart size={14} fill={isWishlisted ? '#FF5C39' : 'none'} />
          </button>
          <button className="w-8 h-8 rounded-xl bg-white border border-[#ECECF1] flex items-center justify-center text-[#555] shadow-xs active:scale-90 transition-transform">
            <Share2 size={13} />
          </button>
        </div>
      </div>

      {/* 3D Gallery Frame */}
      <div className="relative mt-1 mb-3 rounded-2xl bg-gradient-to-b from-[#F2F2F6] to-[#E6E7EE] border border-[#ECECF1] p-4 flex flex-col items-center justify-center overflow-hidden min-h-[170px] shadow-inner">
        {/* Visual Badge */}
        <div
          className={`absolute top-2.5 ${
            isRTL ? 'right-2.5' : 'left-2.5'
          } px-2 py-0.5 bg-black/70 backdrop-blur-md text-white text-[8px] font-black rounded-full flex items-center gap-1`}
        >
          <Sparkles size={9} className="text-amber-400" />
          <span>{isRTL ? 'تیتانیوم گرید ۵ فضایی' : 'Aerospace Grade 5 Titanium'}</span>
        </div>

        {/* Dynamic Mock of the Luxury Product */}
        <div className="relative my-2 transform hover:scale-105 transition-transform duration-500 flex items-center justify-center">
          <div 
            className="w-20 h-36 rounded-2xl shadow-xl border-2 flex flex-col items-center justify-between p-1.5 transition-colors duration-300"
            style={{ 
              backgroundColor: colors[selectedColor].hex,
              borderColor: '#E5E5EA',
              boxShadow: '0 20px 35px -10px rgba(0,0,0,0.3)'
            }}
          >
            <div className="w-8 h-2.5 bg-black rounded-full" />
            <div className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center bg-black/10">
              <span className="text-[9px]">🍎</span>
            </div>
            <div className="w-6 h-1 bg-black/30 rounded-full" />
          </div>
        </div>

        {/* Gallery Dots */}
        <div className="flex items-center gap-1 mt-2">
          {[0, 1, 2, 3].map((dot) => (
            <button
              key={dot}
              onClick={() => setActivePhotoIdx(dot)}
              className={`h-1.5 rounded-full transition-all ${
                activePhotoIdx === dot ? 'w-5 bg-[#111116]' : 'w-1.5 bg-[#BBB]'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Product Title & Ratings */}
      <div className="px-0.5">
        <div className="flex items-center gap-2">
          <span className="px-1.5 py-0.5 bg-[#FFF0ED] text-[#FF5C39] text-[8px] font-black rounded">
            {isRTL ? 'گارانتی ۱۸ ماهه شرکتی' : '18-Month Official Warranty'}
          </span>
          <div className="flex items-center gap-1 text-amber-500 text-[9px] font-bold">
            <Star size={10} fill="currentColor" />
            <span>{isRTL ? '۴.۹' : '4.9'}</span>
            <span className="text-[#858791] font-normal">
              {isRTL ? '(۳۸۲ نظر ثبت‌شده)' : '(382 verified reviews)'}
            </span>
          </div>
        </div>

        <h1 className="text-sm font-black text-[#111116] mt-1 leading-snug">
          iPhone 16 Pro Max Natural Titanium
        </h1>
        <p className="text-[9px] text-[#858791] mt-0.5">
          {isRTL
            ? 'تراشه ۳ نانومتری Apple A18 Pro · بدنه تیتانیومی فوق سبک با کنترل لمسی دوربین'
            : 'Apple A18 Pro 3nm Silicon · Ultra-light Titanium Frame with Camera Control'}
        </p>

        {/* Price Box */}
        <div className="mt-2.5 flex items-baseline gap-2">
          <span className="text-base font-black text-[#111116]">
            {isRTL ? '۱۵۴,۹۰۰,۰۰۰' : '$1,199.00'}
          </span>
          {isRTL && <span className="text-[10px] text-[#858791]">تومان</span>}
          <span
            className={`${
              isRTL ? 'mr-auto' : 'ml-auto'
            } text-[9px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full`}
          >
            {isRTL ? 'ارسال اکسپرس امروز' : 'Express Delivery Today'}
          </span>
        </div>
      </div>

      {/* Color Selector */}
      <div className="mt-3.5 pt-3 border-t border-[#ECECF1]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold text-[#111116]">
            {isRTL ? 'رنگ بدنه:' : 'Finish Color:'}
          </span>
          <span className="text-[9px] font-black text-[#7667F4]">{colors[selectedColor].name}</span>
        </div>
        <div className="flex items-center gap-2">
          {colors.map((col, idx) => (
            <button
              key={col.name}
              onClick={() => setSelectedColor(idx)}
              className={`flex-1 py-1.5 px-1 rounded-xl border flex items-center justify-center gap-1.5 transition-all ${
                selectedColor === idx
                  ? 'border-[#111116] bg-white shadow-xs'
                  : 'border-[#ECECF1] bg-[#F9F9FB] hover:border-[#CCC]'
              }`}
            >
              <div
                className="w-3 h-3 rounded-full border border-black/10"
                style={{ backgroundColor: col.hex }}
              />
              <span className="text-[8px] font-bold text-[#444] truncate">{col.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Storage Selector */}
      <div className="mt-3 pt-3 border-t border-[#ECECF1]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold text-[#111116]">
            {isRTL ? 'ظرفیت حافظه:' : 'Storage Tier:'}
          </span>
          <span className="text-[9px] font-black text-[#7667F4]">{storages[selectedStorage]}</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {storages.map((cap, idx) => (
            <button
              key={cap}
              onClick={() => setSelectedStorage(idx)}
              className={`py-1.5 rounded-xl border text-[9px] font-bold transition-all text-center ${
                selectedStorage === idx
                  ? 'border-[#7667F4] bg-[#F0EFFF] text-[#7667F4] shadow-2xs'
                  : 'border-[#ECECF1] bg-[#F9F9FB] text-[#666] hover:bg-white'
              }`}
            >
              {cap}
            </button>
          ))}
        </div>
      </div>

      {/* Value Badges */}
      <div className="mt-3.5 bg-[#F6F6F8] rounded-2xl p-2.5 space-y-2 border border-[#EDEDF1]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
            <Truck size={12} />
          </div>
          <div className="text-[9px]">
            <strong className="text-[#111116] block">
              {isRTL ? 'ارسال سریع OVARA Express' : 'OVARA White-Glove Dispatch'}
            </strong>
            <span className="text-[#858791]">
              {isRTL ? 'تحویل رایگان فردا در سراسر کشور' : 'Complimentary insured next-day courier'}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
            <ShieldCheck size={12} />
          </div>
          <div className="text-[9px]">
            <strong className="text-[#111116] block">
              {isRTL ? 'اصالت قطعی ۱۰۰٪ با بارکد گمرکی' : '100% Verified Atelier Authenticity'}
            </strong>
            <span className="text-[#858791]">
              {isRTL ? '۷ روز مهلت تعویض و بازگشت بی‌قید و شرط' : '7-day unconditional returns guarantee'}
            </span>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Action */}
      <div className="mt-4 sticky bottom-0 pt-2 pb-1 bg-white/90 backdrop-blur-md border-t border-[#ECECF1]">
        <button
          onClick={handleAddToCart}
          className={`w-full py-2.5 px-4 rounded-xl text-xs font-black flex items-center justify-center gap-2 transition-all shadow-md active:scale-98 ${
            isAdded
              ? 'bg-emerald-600 text-white'
              : 'bg-[#111116] hover:bg-[#22222A] text-white'
          }`}
        >
          {isAdded ? (
            <>
              <Check size={14} />
              <span>{isRTL ? 'به سبد خرید افزوده شد!' : 'Added to Bag!'}</span>
            </>
          ) : (
            <>
              <span>
                {isRTL
                  ? 'افزودن به سبد خرید · ۱۵۴,۹۰۰,۰۰۰ تومان'
                  : 'Add to Bag · $1,199.00'}
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

