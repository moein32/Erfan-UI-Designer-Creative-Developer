import React from 'react';
import { Settings, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

interface OvaraScreenProps {
  onNavigateToHome?: () => void;
}

export const OvaraScreenProfile: React.FC<OvaraScreenProps> = ({
  onNavigateToHome,
}) => {
  const { isRTL, formatNumber } = useLanguage();

  const steps = isRTL
    ? [
        { label: 'ثبت سفارش', done: true, time: '۱۰:۲۴ ق.ظ' },
        { label: 'پردازش و بسته‌بندی', done: true, time: '۱۱:۴۵ ق.ظ' },
        { label: 'تحویل به سفیر اختصاصی', done: true, time: '۱۲:۳۰ ب.ظ' },
        { label: 'تحویل به مشتری', done: false, time: 'تخمین: ۱۷:۰۰' },
      ]
    : [
        { label: 'Order Confirmed', done: true, time: '10:24 AM' },
        { label: 'Atelier Packaging', done: true, time: '11:45 AM' },
        { label: 'Dispatched to Courier', done: true, time: '12:30 PM' },
        { label: 'Out for Delivery', done: false, time: 'Est. 5:00 PM' },
      ];

  return (
    <div
      className={`flex flex-col min-h-full pb-16 text-[#111116] select-none ${
        isRTL ? 'font-persian text-right' : 'font-sans text-left'
      }`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Profile Header */}
      <div className="pt-1 pb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#111116] to-[#3B3A4A] flex items-center justify-center text-white text-base font-black shadow-md border-2 border-white">
            {isRTL ? 'ع' : 'EM'}
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h2 className="text-xs font-black text-[#111116]">
                {isRTL ? 'عرفان معین' : 'Erfan Moein'}
              </h2>
              <span className="px-1.5 py-0.2 bg-[#FFF0ED] text-[#FF5C39] text-[7px] font-black rounded-full">
                {isRTL ? 'عضو طلایی VIP' : 'VIP Gold Member'}
              </span>
            </div>
            <p className="text-[8px] text-[#858791] mt-0.5">
              {isRTL
                ? 'عضو خانواده OVARA از شهریور ۱۴۰۴'
                : 'OVARA Atelier Patron since 2024'}
            </p>
          </div>
        </div>

        <button className="w-8 h-8 rounded-xl bg-white border border-[#ECECF1] flex items-center justify-center text-[#555] shadow-xs active:scale-95 transition-transform">
          <Settings size={14} />
        </button>
      </div>

      {/* 3 Metrics Cards */}
      <div className="grid grid-cols-3 gap-2 mt-1">
        <div className="bg-[#F9F9FB] border border-[#ECECF1] rounded-2xl p-2 text-center">
          <div className="text-sm font-black text-[#111116]">
            {isRTL ? '۱۲' : '12'}
          </div>
          <div className="text-[8px] text-[#858791] mt-0.5">
            {isRTL ? 'سفارش تکمیل‌شده' : 'Completed'}
          </div>
        </div>
        <div className="bg-[#F9F9FB] border border-[#ECECF1] rounded-2xl p-2 text-center">
          <div className="text-sm font-black text-[#FF5C39]">
            {isRTL ? '۸' : '8'}
          </div>
          <div className="text-[8px] text-[#858791] mt-0.5">
            {isRTL ? 'علاقه‌مندی‌ها' : 'Wishlist'}
          </div>
        </div>
        <div className="bg-[#F9F9FB] border border-[#ECECF1] rounded-2xl p-2 text-center">
          <div className="text-sm font-black text-[#7667F4]">
            {isRTL ? '۲۴۰' : '240'}
          </div>
          <div className="text-[8px] text-[#858791] mt-0.5">
            {isRTL ? 'امتیاز باشگاه' : 'Club Pts'}
          </div>
        </div>
      </div>

      {/* Live Order Card */}
      <div className="mt-4">
        <div className="flex items-center justify-between mb-2 px-0.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <h3 className="text-xs font-black text-[#111116]">
              {isRTL ? 'رهگیری سفارش فعال' : 'Active Order Tracking'}
            </h3>
          </div>
          <span className="text-[8px] font-bold text-[#7667F4]">
            {isRTL ? 'جزئیات بارکد' : 'Live Tracking'}
          </span>
        </div>

        <div className="bg-white border-2 border-[#111116] rounded-2xl p-3 shadow-sm">
          <div className="flex items-center justify-between pb-2 border-b border-[#ECECF1]">
            <div>
              <span className="text-[9px] font-black text-[#111116]">
                {isRTL ? 'سفارش #OV-84219' : 'Order #OV-84219'}
              </span>
              <div className="text-[8px] text-[#858791]">
                {isRTL ? 'ارسال با ناوگان اختصاصی OVARA' : 'Dispatched via OVARA VIP Fleet'}
              </div>
            </div>
            <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[8px] font-black rounded-full">
              {isRTL ? 'در حال انتقال به مقصد' : 'In Transit'}
            </span>
          </div>

          {/* Product Previews */}
          <div className="flex items-center gap-2 py-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#EBEAEF] flex items-center justify-center text-sm shadow-2xs">
              📱
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#1E2026] text-white flex items-center justify-center text-sm shadow-2xs">
              🎧
            </div>
            <div className={isRTL ? 'mr-1' : 'ml-1'}>
              <div className="text-[9px] font-black text-[#111116]">
                {isRTL ? '۲ قلم کالای لوکس تیتانیوم' : '2x Luxury Titanium Items'}
              </div>
              <div className="text-[8px] text-[#858791]">
                {isRTL ? 'تحویل امروز عصر تا ساعت ۱۷:۰۰' : 'Estimated delivery today by 5:00 PM'}
              </div>
            </div>
          </div>

          {/* Stepper Progress */}
          <div className="pt-2 border-t border-[#ECECF1] space-y-2">
            {steps.map((step, idx) => (
              <div key={step.label} className="flex items-center gap-2 text-[8px]">
                <div
                  className={`w-4 h-4 rounded-full flex items-center justify-center font-bold text-[8px] ${
                    step.done
                      ? 'bg-emerald-500 text-white'
                      : 'border border-[#CCC] text-[#999]'
                  }`}
                >
                  {step.done ? '✓' : (isRTL ? formatNumber(idx + 1) : idx + 1)}
                </div>
                <span className={`flex-1 font-bold ${step.done ? 'text-[#111116]' : 'text-[#888]'}`}>
                  {step.label}
                </span>
                <span className="text-[#999] text-[7px]">{step.time}</span>
              </div>
            ))}
          </div>

          {/* Courier Call Bar */}
          <div className="mt-3 pt-2.5 border-t border-[#ECECF1] flex items-center justify-between bg-[#F9F9FB] -mx-3 -mb-3 p-2.5 rounded-b-2xl">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-xl bg-[#E0E0E5] flex items-center justify-center text-[10px] font-black text-[#333]">
                {isRTL ? 'س' : 'SK'}
              </div>
              <div className="text-[8px]">
                <strong className="block text-[#111116]">
                  {isRTL ? 'سفیر تحویل: سهراب کیانی' : 'Courier: Sohrab Kiani'}
                </strong>
                <span className="text-[#888]">
                  {isRTL ? 'پلاک ۲۳۴ ط ۲۲ · ون اکسپرس' : 'Plate 234-T22 · Express Van'}
                </span>
              </div>
            </div>
            <button className="px-2.5 py-1 bg-[#111116] text-white text-[8px] font-bold rounded-lg flex items-center gap-1 shadow-xs">
              <Phone size={9} />
              <span>{isRTL ? 'تماس' : 'Call'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Destination Address Card */}
      <div className="mt-3.5 bg-[#F9F9FB] border border-[#ECECF1] rounded-2xl p-2.5 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-[#EDF5FF] text-[#3D8DFF] flex items-center justify-center shrink-0">
          <MapPin size={14} />
        </div>
        <div className="flex-1 min-w-0 text-[8px]">
          <strong className="block text-[#111116] text-[9px]">
            {isRTL ? 'آدرس تحویل منتخب:' : 'Delivery Destination:'}
          </strong>
          <span className="text-[#666] truncate block">
            {isRTL
              ? 'قزوین، خیابان ملاصدرا، برج کاسپین، طبقه ۵'
              : '5th Floor, Caspian Tower, Mollsada St, Qazvin'}
          </span>
        </div>
      </div>

      {/* Home Return CTA */}
      <div className="mt-3 text-center">
        <button
          onClick={onNavigateToHome}
          className="text-[9px] font-bold text-[#7667F4] hover:underline"
        >
          {isRTL ? 'بازگشت به صفحه اصلی فروشگاه' : 'Back to Storefront'}
        </button>
      </div>
    </div>
  );
};

