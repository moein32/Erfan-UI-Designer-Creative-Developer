import React, { useState } from 'react';
import { Trash2, Plus, Minus, Tag, Zap, CreditCard, ShieldCheck, ChevronRight, CheckCircle2 } from 'lucide-react';

interface OvaraScreenProps {
  onNavigateToProfile?: () => void;
  onBack?: () => void;
}

export const OvaraScreenCart: React.FC<OvaraScreenProps> = ({
  onNavigateToProfile,
  onBack,
}) => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'iPhone 16 Pro Max 256GB',
      variant: 'تیتانیوم طبیعی · گارانتی ۲۴ ماهه',
      price: 154900000,
      qty: 1,
      icon: '📱',
      colorBg: 'bg-[#ECEAE8]',
    },
    {
      id: 2,
      name: 'AirPods Max USB-C',
      variant: 'Midnight · کیس مسافرتی هوشمند',
      price: 32700000,
      qty: 1,
      icon: '🎧',
      colorBg: 'bg-[#1E2026] text-white',
    },
    {
      id: 3,
      name: 'Aesop Tacit Eau de Parfum',
      variant: '50ml · بسته بندی اختصاصی هدیه',
      price: 5250000,
      qty: 1,
      icon: '🌿',
      colorBg: 'bg-[#EAF9F5]',
    },
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState<'express' | 'standard'>('express');
  const [paymentMethod, setPaymentMethod] = useState<'shetab' | 'crypto'>('shetab');
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const updateQty = (id: number, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as typeof items
    );
  };

  const rawSubtotal = items.reduce((acc, it) => acc + it.price * it.qty, 0);
  const discount = promoApplied ? 7850000 : 0;
  const finalTotal = rawSubtotal - discount;

  const handleApplyPromo = () => {
    if (promoCode.trim().length > 0) {
      setPromoApplied(true);
    }
  };

  const handleCheckout = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setOrderComplete(true);
      setTimeout(() => {
        onNavigateToProfile?.();
      }, 1000);
    }, 900);
  };

  return (
    <div className="flex flex-col min-h-full pb-20 font-persian text-[#111116] select-none text-right" dir="rtl">
      {/* Top Header */}
      <div className="flex items-center justify-between pt-1 pb-2">
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-black tracking-tight text-[#111116]">سبد خرید</h2>
          <span className="px-2 py-0.5 bg-[#FFF0ED] text-[#FF5C39] text-[9px] font-black rounded-full">
            {items.length} کالا
          </span>
        </div>
        <button
          onClick={onBack}
          className="text-[9px] text-[#7667F4] font-bold hover:underline"
        >
          ادامه خرید
        </button>
      </div>

      {orderComplete ? (
        <div className="my-auto py-12 flex flex-col items-center justify-center text-center">
          <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3 animate-bounce">
            <CheckCircle2 size={32} />
          </div>
          <h3 className="text-sm font-black text-[#111116]">سفارش شما با موفقیت ثبت شد!</h3>
          <p className="text-[10px] text-[#858791] mt-1 max-w-[200px]">
            کد سفارش: #OV-84219 · در حال هدایت به بخش رهگیری سفارشات...
          </p>
        </div>
      ) : (
        <>
          {/* Cart Items List */}
          <div className="space-y-2 mt-2">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-[#F9F9FB] border border-[#ECECF1] rounded-2xl p-2.5 flex items-center gap-2.5 transition-all shadow-2xs"
              >
                {/* Visual Icon Art */}
                <div
                  className={`w-12 h-12 rounded-xl ${item.colorBg} flex items-center justify-center text-xl shrink-0 shadow-xs`}
                >
                  {item.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-black text-[#111116] truncate">{item.name}</div>
                  <div className="text-[8px] text-[#858791] truncate mt-0.5">{item.variant}</div>
                  
                  <div className="flex items-center justify-between mt-1.5">
                    <span className="text-[10px] font-black text-[#111116]">
                      {(item.price * item.qty).toLocaleString('fa-IR')}{' '}
                      <small className="text-[7px] text-[#858791] font-normal">تومان</small>
                    </span>

                    {/* Quantity Stepper */}
                    <div className="flex items-center gap-1 bg-white border border-[#ECECF1] rounded-lg p-0.5 shadow-2xs">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="w-5 h-5 rounded flex items-center justify-center text-[#555] hover:bg-[#F0F0F0] active:scale-90 text-[10px]"
                      >
                        {item.qty === 1 ? <Trash2 size={10} className="text-rose-500" /> : <Minus size={10} />}
                      </button>
                      <span className="w-4 text-center text-[9px] font-black">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="w-5 h-5 rounded flex items-center justify-center text-[#555] hover:bg-[#F0F0F0] active:scale-90 text-[10px]"
                      >
                        <Plus size={10} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Promo Code Input */}
          <div className="mt-3">
            <div className="flex items-center gap-1.5 bg-[#F6F6F8] border border-[#EDEDF1] rounded-2xl p-1 shadow-2xs">
              <Tag size={13} className="text-[#999] mr-2" />
              <input
                type="text"
                placeholder="کد تخفیف (مثال: OVARA2026)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                disabled={promoApplied}
                className="flex-1 bg-transparent border-none outline-none text-[9px] font-medium text-[#111116] placeholder:text-[#999]"
              />
              <button
                onClick={handleApplyPromo}
                disabled={promoApplied}
                className={`px-3 py-1 rounded-xl text-[9px] font-black transition-all ${
                  promoApplied
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'bg-[#111116] text-white hover:bg-[#333]'
                }`}
              >
                {promoApplied ? 'اعمال شد ✓' : 'ثبت کد'}
              </button>
            </div>
          </div>

          {/* Delivery Method Selection */}
          <div className="mt-3.5 pt-3 border-t border-[#ECECF1]">
            <span className="text-[10px] font-bold text-[#111116] block mb-1.5">روش ارسال:</span>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                onClick={() => setDeliveryMethod('express')}
                className={`p-2 rounded-xl border text-right transition-all flex items-start gap-1.5 ${
                  deliveryMethod === 'express'
                    ? 'border-[#7667F4] bg-[#F0EFFF] text-[#7667F4]'
                    : 'border-[#ECECF1] bg-[#F9F9FB] text-[#666]'
                }`}
              >
                <div className="w-5 h-5 rounded-lg bg-emerald-500 text-white flex items-center justify-center text-[10px] shrink-0">
                  ⚡
                </div>
                <div>
                  <div className="text-[9px] font-black">ارسال اکسپرس</div>
                  <div className="text-[7px] text-emerald-600 font-bold">تحویل فردا · رایگان</div>
                </div>
              </button>

              <button
                onClick={() => setDeliveryMethod('standard')}
                className={`p-2 rounded-xl border text-right transition-all flex items-start gap-1.5 ${
                  deliveryMethod === 'standard'
                    ? 'border-[#7667F4] bg-[#F0EFFF] text-[#7667F4]'
                    : 'border-[#ECECF1] bg-[#F9F9FB] text-[#666]'
                }`}
              >
                <div className="w-5 h-5 rounded-lg bg-[#999] text-white flex items-center justify-center text-[10px] shrink-0">
                  📦
                </div>
                <div>
                  <div className="text-[9px] font-black">ارسال سفارشی</div>
                  <div className="text-[7px] text-[#888]">۲ الی ۳ روز کاری</div>
                </div>
              </button>
            </div>
          </div>

          {/* Financial Breakdown Card */}
          <div className="mt-3.5 bg-[#F6F6F8] border border-[#EDEDF1] rounded-2xl p-3 space-y-1.5 text-[9px]">
            <div className="flex items-center justify-between text-[#666]">
              <span>مجموع قیمت کالاها ({items.length})</span>
              <span className="font-bold">{rawSubtotal.toLocaleString('fa-IR')} تومان</span>
            </div>
            {promoApplied && (
              <div className="flex items-center justify-between text-emerald-600 font-bold">
                <span>تخفیف ویژه جشنواره OVARA</span>
                <span>− {discount.toLocaleString('fa-IR')} تومان</span>
              </div>
            )}
            <div className="flex items-center justify-between text-[#666]">
              <span>هزینه بسته‌بندی و ارسال VIP</span>
              <span className="text-emerald-600 font-bold">رایگان (هدیه اعضا)</span>
            </div>
            <div className="pt-2 border-t border-[#ECECF1] flex items-center justify-between text-[#111116] font-black text-[11px]">
              <span>مبلغ قابل پرداخت</span>
              <span className="text-[#FF5C39] text-xs">
                {finalTotal.toLocaleString('fa-IR')} تومان
              </span>
            </div>
          </div>

          {/* Sticky Checkout CTA */}
          <div className="mt-4 sticky bottom-0 pt-2 pb-1 bg-white/90 backdrop-blur-md border-t border-[#ECECF1]">
            <button
              onClick={handleCheckout}
              disabled={isProcessing}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-black bg-[#111116] hover:bg-[#22222A] text-white flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all"
            >
              {isProcessing ? (
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>در حال اتصال به درگاه امن بانکی...</span>
                </div>
              ) : (
                <>
                  <CreditCard size={14} />
                  <span>پرداخت و ثبت نهایی · {finalTotal.toLocaleString('fa-IR')} تومان</span>
                </>
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
};
