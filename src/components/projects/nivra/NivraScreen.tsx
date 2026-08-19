import React, { useState } from 'react';
import {
  Compass,
  MapPin,
  Calendar,
  Sparkles,
  Plane,
  Bed,
  Utensils,
  Ticket,
  Search,
  SlidersHorizontal,
  Sun,
  Star,
  ShieldCheck,
  CreditCard,
  Luggage,
  ArrowRight,
  ArrowLeft,
  Clock,
  Heart,
  Check,
} from 'lucide-react';

interface NivraScreenProps {
  screenId: 'discover' | 'plan' | 'explore' | 'travel';
  isPersianMode?: boolean;
}

export const NivraScreen: React.FC<NivraScreenProps> = ({ screenId, isPersianMode = false }) => {
  // Screen 1 (DISCOVER) State
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Screen 2 (PLAN) State
  const [activeDayIndex, setActiveDayIndex] = useState<number>(1);

  // Screen 3 (EXPLORE) State
  const [isLiked, setIsLiked] = useState<boolean>(true);

  // Screen 4 (TRAVEL / BOOKING) State
  const [isPaid, setIsPaid] = useState<boolean>(false);

  // ----------------------------------------------------
  // CHAPTER 01: DISCOVER (Destinations & Inspiration)
  // ----------------------------------------------------
  if (screenId === 'discover') {
    return (
      <div className="w-full h-full text-[#10212B] font-persian flex flex-col justify-between select-none">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#168DF5] to-[#18C5BD] text-white flex items-center justify-center font-bold text-xs shadow-md shadow-[#168DF5]/20">
                EM
              </div>
              <div>
                <span className="text-[10px] text-[#71818A]">
                  {isPersianMode ? 'صبح بخیر' : 'Good Morning'}
                </span>
                <h2 className="text-xs font-black text-[#10212B]">
                  {isPersianMode ? 'عرفان معین' : 'Erfan Moein'}
                </h2>
              </div>
            </div>

            <button className="w-8 h-8 rounded-xl bg-white border border-[#E4EDF1] shadow-xs text-[#168DF5] flex items-center justify-center">
              <Compass size={16} />
            </button>
          </div>

          {/* Search Bar */}
          <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-white border border-[#E4EDF1] shadow-xs text-[#71818A]">
            <Search size={15} className="text-[#168DF5]" />
            <span className="text-[10px] font-medium flex-1">
              {isPersianMode
                ? 'جستجو در کشورها، شهرها و تجربه‌ها...'
                : 'Search countries, cities & stays...'}
            </span>
            <SlidersHorizontal size={13} className="text-[#82939B]" />
          </div>

          {/* Hero Destination Banner: Santorini */}
          <div className="relative h-44 rounded-3xl overflow-hidden shadow-md shadow-[#168DF5]/15 text-white flex flex-col justify-end p-3.5 group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=700&q=80"
              alt="Santorini Greece"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#031823]/85 via-[#031823]/30 to-transparent" />

            <div className="relative z-10 space-y-1">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-white/20 backdrop-blur-md text-[8.5px] font-bold">
                <Sparkles size={10} className="text-cyan-300" />
                <span>مقصد برتر هفته</span>
              </span>
              <h3 className="text-base font-black tracking-tight">کشف جزیره سانتورینی</h3>
              <p className="text-[9px] text-white/90">سفری میان معماری سفید و آبی اژه با چشم‌انداز غروب</p>
            </div>
          </div>

          {/* Horizontal Destination Row */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs px-1">
              <span className="font-bold text-[#10212B]">
                {isPersianMode ? 'مقصدهای محبوب' : 'Trending Destinations'}
              </span>
              <span className="text-[10px] text-[#168DF5] font-bold cursor-pointer">
                {isPersianMode ? 'مشاهده همه' : 'View all'}
              </span>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
              {[
                { name: 'استانبول', spots: '۴۲ مقصد', img: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=300&q=80' },
                { name: 'رم', spots: '۳۸ مقصد', img: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=300&q=80' },
                { name: 'بالی', spots: '۳۱ مقصد', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=300&q=80' },
                { name: 'پاریس', spots: '۲۷ مقصد', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=300&q=80' },
              ].map((dest, i) => (
                <div
                  key={i}
                  className="relative w-24 h-28 rounded-2xl overflow-hidden shrink-0 shadow-xs cursor-pointer"
                >
                  <img src={dest.img} alt={dest.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <div className="absolute bottom-2 right-2 text-white text-right">
                    <div className="text-[11px] font-black">{dest.name}</div>
                    <div className="text-[8px] opacity-80">{dest.spots}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Curated Trip Card */}
          <div className="p-3 rounded-2xl bg-white border border-[#E4EDF1] shadow-xs flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=200&q=80"
              alt="Istanbul"
              className="w-14 h-14 rounded-xl object-cover"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-[10.5px] font-bold text-[#10212B]">استانبول؛ دو قاره</span>
                <span className="flex items-center gap-1 text-[9px] font-bold text-amber-500">
                  <Star size={10} className="fill-amber-400" />
                  ۴.۸
                </span>
              </div>
              <span className="text-[8.5px] text-[#71818A] block">ترکیه • ۴ شب اقامت لوکس</span>
              <span className="text-[10px] font-extrabold text-[#168DF5] mt-1 block">
                از ۱۴,۹۰۰,۰۰۰ تومان
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // CHAPTER 02: PLAN (Personalized Itinerary & Timeline)
  // ----------------------------------------------------
  if (screenId === 'plan') {
    return (
      <div className="w-full h-full text-[#10212B] font-persian flex flex-col justify-between select-none">
        <div className="space-y-3.5">
          {/* Header */}
          <div className="flex items-center justify-between pt-1">
            <div>
              <span className="text-[10px] text-[#71818A]">
                {isPersianMode ? 'برنامه سفر هوشمند' : 'Smart Itinerary'}
              </span>
              <h2 className="text-sm font-black text-[#10212B]">
                {isPersianMode ? 'استانبول · ۵ روز' : 'Istanbul · 5 Days'}
              </h2>
            </div>
            <button className="w-8 h-8 rounded-xl bg-white border border-[#E4EDF1] shadow-xs text-[#168DF5] flex items-center justify-center">
              <Sparkles size={16} />
            </button>
          </div>

          {/* Travel Progress Banner */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#168DF5] to-[#18C5BD] text-white shadow-md shadow-[#168DF5]/20 space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[9px] text-white/80">پیشرفت برنامه سفر</div>
                <div className="text-base font-black mt-0.5">روز ۲ از ۵</div>
              </div>
              <span className="text-xl font-black">۴۰٪</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/25 overflow-hidden">
              <div className="h-full bg-white rounded-full w-[40%]" />
            </div>
          </div>

          {/* Interactive Timeline */}
          <div className="relative pl-6 space-y-3 py-1">
            <div className="absolute left-2.5 top-2 bottom-2 w-px bg-[#E4EDF1]" />

            {/* Day 1 Section */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#18C5BD]" />
                <span className="text-[9.5px] font-bold text-[#10212B]">روز اول · ورود به شهر</span>
                <span className="text-[8px] text-[#24B985] font-bold bg-[#EAF9F4] px-1.5 py-0.5 rounded">
                  تکمیل شد
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-[#E4EDF1] shadow-xs flex items-center justify-between text-right">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-[#168DF5]/10 text-[#168DF5] flex items-center justify-center">
                    <Plane size={13} />
                  </div>
                  <div>
                    <div className="text-[9.5px] font-bold text-[#10212B]">پرواز تهران → استانبول</div>
                    <div className="text-[8px] text-[#71818A]">TK879 • فرودگاه استانبول</div>
                  </div>
                </div>
                <span className="text-[9px] font-mono text-[#82939B]">07:30</span>
              </div>
            </div>

            {/* Day 2 Section (Active) */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#168DF5] animate-pulse" />
                <span className="text-[9.5px] font-bold text-[#10212B]">روز دوم · بافت تاریخی</span>
                <span className="text-[8px] text-[#168DF5] font-bold bg-[#E7F4FF] px-1.5 py-0.5 rounded">
                  امروز
                </span>
              </div>

              {[
                { title: 'مسجد ایاصوفیه', sub: 'تور خصوصی · ورودی سریع', time: '10:00', icon: Compass },
                { title: 'ناهار در Karaköy', sub: 'پیشنهاد اختصاصی NIVRA', time: '13:30', icon: Utensils },
                { title: 'کروز غروب بسفر', sub: 'Golden Horn · VIP Deck', time: '18:20', icon: Ticket },
              ].map((act, i) => {
                const Icon = act.icon;
                return (
                  <div
                    key={i}
                    className="p-2.5 rounded-xl bg-white border border-[#E4EDF1] shadow-xs flex items-center justify-between text-right hover:border-[#168DF5]/40 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-[#18C5BD]/10 text-[#18C5BD] flex items-center justify-center">
                        <Icon size={13} />
                      </div>
                      <div>
                        <div className="text-[9.5px] font-bold text-[#10212B]">{act.title}</div>
                        <div className="text-[8px] text-[#71818A]">{act.sub}</div>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono text-[#168DF5] font-bold">{act.time}</span>
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
  // CHAPTER 03: EXPLORE (Destination Detail & Experiences)
  // ----------------------------------------------------
  if (screenId === 'explore') {
    return (
      <div className="w-full h-full text-[#10212B] font-persian flex flex-col justify-between select-none">
        <div className="space-y-3">
          {/* Hero Banner with Floating Header */}
          <div className="relative h-44 rounded-3xl overflow-hidden shadow-md shadow-[#168DF5]/15 text-white flex flex-col justify-between p-3">
            <img
              src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=85"
              alt="Rome Italy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#041922]/90 via-[#041922]/20 to-black/30" />

            {/* Top Bar Floating Controls */}
            <div className="relative z-10 flex items-center justify-between">
              <button className="w-7 h-7 rounded-xl bg-white/30 backdrop-blur-md text-white flex items-center justify-center">
                <ArrowRight size={14} />
              </button>
              <button
                onClick={() => setIsLiked(!isLiked)}
                className="w-7 h-7 rounded-xl bg-white/30 backdrop-blur-md text-white flex items-center justify-center"
              >
                <Heart size={14} className={isLiked ? 'fill-rose-400 text-rose-400' : ''} />
              </button>
            </div>

            {/* Place Title */}
            <div className="relative z-10 space-y-0.5">
              <div className="flex items-center gap-1 text-[8.5px] font-bold text-amber-300">
                <Star size={10} className="fill-amber-300" />
                <span>۴.۹ · مقصد برگزیده مسافران</span>
              </div>
              <h2 className="text-lg font-black">رم، ایتالیا</h2>
              <p className="text-[9px] text-white/90">تاریخ، هنر و طعم زندگی در قلب اروپا</p>
            </div>
          </div>

          {/* Floating Weather Card */}
          <div className="p-3 rounded-2xl bg-white border border-[#E4EDF1] shadow-xs flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Sun size={24} className="text-amber-500" />
              <div>
                <div className="text-sm font-black text-[#10212B]">۲۳°C</div>
                <div className="text-[8.5px] text-[#71818A]">آفتابی · مناسب پیاده‌روی</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[9.5px] font-bold text-[#10212B]">امروز</div>
              <div className="text-[8px] text-[#71818A]">کمینه ۱۶°</div>
            </div>
          </div>

          {/* 4 Feature Mini-Cards Grid */}
          <div className="grid grid-cols-2 gap-2">
            {[
              { title: 'جاذبه‌ها', count: '۲۸ مکان دیدنی', icon: Compass },
              { title: 'هتل‌ها', count: '۴۸۰ اقامتگاه', icon: Bed },
              { title: 'رستوران‌ها', count: '۳۴۰ انتخاب', icon: Utensils },
              { title: 'فعالیت‌ها', count: '۸۷ تجربه خاص', icon: Ticket },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className="p-2.5 rounded-xl bg-white border border-[#E4EDF1] shadow-xs flex items-center gap-2 cursor-pointer hover:border-[#168DF5]/40 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#168DF5]/10 text-[#168DF5] flex items-center justify-center shrink-0">
                    <Icon size={14} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-[#10212B]">{card.title}</div>
                    <div className="text-[8px] text-[#71818A]">{card.count}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Must Visit Attraction: Colosseum */}
          <div className="p-2.5 rounded-xl bg-white border border-[#E4EDF1] shadow-xs flex items-center gap-2.5">
            <img
              src="https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=200&q=80"
              alt="Colosseum"
              className="w-12 h-12 rounded-xl object-cover"
            />
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-bold text-[#10212B]">کولوسئوم باستان</div>
              <div className="text-[8px] text-[#71818A]">نماد تاریخی رم · تور ۲ ساعته اختصاصی</div>
              <div className="text-[9.5px] font-black text-[#168DF5] mt-0.5">از ۳۸ یورو</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // CHAPTER 04: TRAVEL (Booking, Pricing & Confirmation)
  // ----------------------------------------------------
  return (
    <div className="w-full h-full text-[#10212B] font-persian flex flex-col justify-between select-none">
      <div className="space-y-3">
        {/* Header */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2">
            <button className="w-7 h-7 rounded-xl bg-white border border-[#E4EDF1] shadow-xs text-[#71818A] flex items-center justify-center">
              <ArrowRight size={14} />
            </button>
            <h2 className="text-xs font-black text-[#10212B]">
              {isPersianMode ? 'تکمیل رزرو سفر' : 'Confirm Reservation'}
            </h2>
          </div>
          <span className="text-[8.5px] font-bold text-[#24B985] bg-[#EAF9F4] px-2 py-0.5 rounded-full">
            تأیید فوری
          </span>
        </div>

        {/* Hotel Booking Summary */}
        <div className="p-3 rounded-2xl bg-white border border-[#E4EDF1] shadow-xs flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=250&q=80"
            alt="The Stay Bosphorus"
            className="w-14 h-14 rounded-xl object-cover"
          />
          <div className="flex-1 min-w-0">
            <div className="text-[10.5px] font-extrabold text-[#10212B]">The Stay Bosphorus</div>
            <div className="text-[8.5px] text-[#71818A] flex items-center gap-1 mt-0.5">
              <MapPin size={10} className="text-[#168DF5]" />
              استانبول · بشیکتاش
            </div>
            <div className="flex items-center gap-1 text-[8.5px] font-bold text-amber-500 mt-1">
              <Star size={10} className="fill-amber-400" />
              ۴.۸ (۲۴۰ دیدگاه مسافران)
            </div>
          </div>
        </div>

        {/* Details Selector Rows */}
        <div className="bg-white rounded-2xl border border-[#E4EDF1] shadow-xs divide-y divide-[#F0F4F8] overflow-hidden text-[9px]">
          <div className="p-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar size={13} className="text-[#168DF5]" />
              <div>
                <span className="font-bold text-[#10212B] block">تاریخ اقامت</span>
                <span className="text-[#71818A] text-[8px]">۲۵ تا ۲۹ شهریور · ۴ شب</span>
              </div>
            </div>
            <ArrowLeft size={12} className="text-[#82939B]" />
          </div>

          <div className="p-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Luggage size={13} className="text-[#168DF5]" />
              <div>
                <span className="font-bold text-[#10212B] block">مسافران</span>
                <span className="text-[#71818A] text-[8px]">۲ بزرگسال · ۱ اتاق اختصاصی</span>
              </div>
            </div>
            <ArrowLeft size={12} className="text-[#82939B]" />
          </div>

          <div className="p-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CreditCard size={13} className="text-[#168DF5]" />
              <div>
                <span className="font-bold text-[#10212B] block">روش پرداخت</span>
                <span className="text-[#71818A] text-[8px]">کارت بانکی •••• ۴۸۲۱</span>
              </div>
            </div>
            <ArrowLeft size={12} className="text-[#82939B]" />
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="p-3 rounded-2xl bg-white border border-[#E4EDF1] shadow-xs space-y-1.5 text-[8.5px]">
          <div className="flex justify-between text-[#71818A]">
            <span>اقامت · ۴ شب</span>
            <span className="font-mono">۲۶,۴۰۰,۰۰۰</span>
          </div>
          <div className="flex justify-between text-[#71818A]">
            <span>مالیات و خدمات هتل</span>
            <span className="font-mono">۱,۳۲۰,۰۰۰</span>
          </div>
          <div className="flex justify-between text-[#24B985] font-bold">
            <span>تخفیف ویژه NIVRA+</span>
            <span className="font-mono">−۸۵۰,۰۰۰</span>
          </div>
          <div className="pt-1.5 border-t border-[#E4EDF1] flex justify-between text-[#10212B] font-extrabold text-[10px]">
            <span>مبلغ قابل پرداخت</span>
            <span className="text-[#168DF5]">۲۶,۸۷۰,۰۰۰ تومان</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => setIsPaid(!isPaid)}
          className={`w-full py-2.5 rounded-xl font-bold text-[10px] text-white transition-all shadow-md ${
            isPaid
              ? 'bg-[#24B985] shadow-[#24B985]/20'
              : 'bg-gradient-to-r from-[#168DF5] to-[#18C5BD] shadow-[#168DF5]/25'
          }`}
        >
          {isPaid ? 'رزرو با موفقیت ثبت شد ✓' : 'پرداخت و تأیید رزرو'}
        </button>

        {/* Trust Badges */}
        <div className="flex items-center justify-center gap-1.5 text-[8px] text-[#71818A]">
          <ShieldCheck size={11} className="text-[#24B985]" />
          <span>پرداخت امن با رمزنگاری سرتاسری NIVRA · لغو رایگان ۲۴ ساعته</span>
        </div>
      </div>
    </div>
  );
};
