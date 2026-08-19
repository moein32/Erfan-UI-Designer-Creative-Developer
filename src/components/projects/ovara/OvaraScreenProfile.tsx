import React from 'react';
import { Settings, Package, Heart, Award, CheckCircle2, Truck, Phone, ChevronLeft, MapPin } from 'lucide-react';

interface OvaraScreenProps {
  onNavigateToHome?: () => void;
}

export const OvaraScreenProfile: React.FC<OvaraScreenProps> = ({
  onNavigateToHome,
}) => {
  const steps = [
    { label: 'ثبت سفارش', done: true, time: '۱۰:۲۴ ق.ظ' },
    { label: 'پردازش و بسته‌بندی', done: true, time: '۱۱:۴۵ ق.ظ' },
    { label: 'تحویل به سفیر اختصاصی', done: true, time: '۱۲:۳۰ ب.ظ' },
    { label: 'تحویل به مشتری', done: false, time: 'تخمین: ۱۷:۰۰' },
  ];

  return (
    <div className="flex flex-col min-h-full pb-16 font-persian text-[#111116] select-none text-right" dir="rtl">
      {/* Profile Header */}
      <div className="pt-1 pb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#111116] to-[#3B3A4A] flex items-center justify-center text-white text-base font-black shadow-md border-2 border-white">
            ع
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h2 className="text-xs font-black text-[#111116]">عرفان معین</h2>
              <span className="px-1.5 py-0.2 bg-[#FFF0ED] text-[#FF5C39] text-[7px] font-black rounded-full">
                عضو طلایی VIP
              </span>
            </div>
            <p className="text-[8px] text-[#858791] mt-0.5">عضو خانواده OVARA از شهریور ۱۴۰۴</p>
          </div>
        </div>

        <button className="w-8 h-8 rounded-xl bg-white border border-[#ECECF1] flex items-center justify-center text-[#555] shadow-xs active:scale-95 transition-transform">
          <Settings size={14} />
        </button>
      </div>

      {/* 3 Metrics Cards */}
      <div className="grid grid-cols-3 gap-2 mt-1">
        <div className="bg-[#F9F9FB] border border-[#ECECF1] rounded-2xl p-2 text-center">
          <div className="text-sm font-black text-[#111116]">۱۲</div>
          <div className="text-[8px] text-[#858791] mt-0.5">سفارش تکمیل‌شده</div>
        </div>
        <div className="bg-[#F9F9FB] border border-[#ECECF1] rounded-2xl p-2 text-center">
          <div className="text-sm font-black text-[#FF5C39]">۸</div>
          <div className="text-[8px] text-[#858791] mt-0.5">علاقه‌مندی‌ها</div>
        </div>
        <div className="bg-[#F9F9FB] border border-[#ECECF1] rounded-2xl p-2 text-center">
          <div className="text-sm font-black text-[#7667F4]">۲۴۰</div>
          <div className="text-[8px] text-[#858791] mt-0.5">امتیاز باشگاه</div>
        </div>
      </div>

      {/* Live Order Card */}
      <div className="mt-4">
        <div className="flex items-center justify-between mb-2 px-0.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <h3 className="text-xs font-black text-[#111116]">رهگیری سفارش فعال</h3>
          </div>
          <span className="text-[8px] font-bold text-[#7667F4]">جزئیات بارکد</span>
        </div>

        <div className="bg-white border-2 border-[#111116] rounded-2xl p-3 shadow-sm">
          <div className="flex items-center justify-between pb-2 border-b border-[#ECECF1]">
            <div>
              <span className="text-[9px] font-black text-[#111116]">سفارش #OV-84219</span>
              <div className="text-[8px] text-[#858791]">ارسال با ناوگان اختصاصی OVARA</div>
            </div>
            <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[8px] font-black rounded-full">
              در حال انتقال به مقصد
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
            <div className="mr-1">
              <div className="text-[9px] font-black text-[#111116]">۲ قلم کالای لوکس تیتانیوم</div>
              <div className="text-[8px] text-[#858791]">تحویل امروز عصر تا ساعت ۱۷:۰۰</div>
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
                  {step.done ? '✓' : idx + 1}
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
                س
              </div>
              <div className="text-[8px]">
                <strong className="block text-[#111116]">سفیر تحویل: سهراب کیانی</strong>
                <span className="text-[#888]">پلاک ۲۳۴ ط ۲۲ · ون اکسپرس</span>
              </div>
            </div>
            <button className="px-2.5 py-1 bg-[#111116] text-white text-[8px] font-bold rounded-lg flex items-center gap-1 shadow-xs">
              <Phone size={9} />
              <span>تماس</span>
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
          <strong className="block text-[#111116] text-[9px]">آدرس تحویل منتخب:</strong>
          <span className="text-[#666] truncate block">تهران، زعفرانیه، خیابان آصف، برج آسمان، طبقه ۸</span>
        </div>
      </div>

      {/* Home Return CTA */}
      <div className="mt-3 text-center">
        <button
          onClick={onNavigateToHome}
          className="text-[9px] font-bold text-[#7667F4] hover:underline"
        >
          بازگشت به صفحه اصلی فروشگاه
        </button>
      </div>
    </div>
  );
};
