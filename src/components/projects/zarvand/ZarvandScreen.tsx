import React, { useState } from 'react';
import {
  Bell,
  ArrowUpRight,
  TrendingUp,
  TrendingDown,
  Send,
  Download,
  QrCode,
  CreditCard,
  ChevronRight,
  Plus,
  ArrowLeft,
  Bot,
  Sparkles,
  Lock,
  Globe,
  Sliders,
  ShieldCheck,
  Check,
  Wallet,
} from 'lucide-react';

interface ZarvandScreenProps {
  screenId: 'liquidity' | 'portfolio' | 'analytics' | 'advisor';
  isPersianMode?: boolean;
}

export const ZarvandScreen: React.FC<ZarvandScreenProps> = ({
  screenId,
  isPersianMode = false,
}) => {
  // Screen 4 Security toggles
  const [onlinePay, setOnlinePay] = useState(true);
  const [tempFreeze, setTempFreeze] = useState(false);

  // ----------------------------------------------------
  // CHAPTER 01: LIQUIDITY (Main Treasury & Financial Dashboard)
  // ----------------------------------------------------
  if (screenId === 'liquidity') {
    return (
      <div className="w-full h-full text-[#111827] font-persian flex flex-col justify-between select-none">
        <div className="space-y-3.5">
          {/* Top Bar */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#6366F1] to-[#818CF8] text-white flex items-center justify-center font-black text-xs shadow-xs">
                ع
              </div>
              <div>
                <span className="text-[9px] text-[#9AA2B1] block">
                  {isPersianMode ? 'صبح بخیر' : 'Good Morning'}
                </span>
                <strong className="text-xs font-black text-[#111827] block">
                  {isPersianMode ? 'عرفان معین' : 'Erfan Moein'}
                </strong>
              </div>
            </div>

            <div className="w-7 h-7 rounded-lg border border-[#E7EAF0] bg-white flex items-center justify-center text-[#697386] shadow-xs">
              <Bell size={13} />
            </div>
          </div>

          {/* Master Balance Card */}
          <div className="relative overflow-hidden p-4 rounded-2xl bg-gradient-to-br from-[#2563EB] via-[#3B82F6] to-[#60A5FA] text-white shadow-[0_12px_24px_rgba(37,99,235,0.22)]">
            <div className="absolute -right-8 -bottom-10 w-28 h-28 rounded-full bg-white/10 pointer-events-none" />
            <div className="absolute -left-6 -top-6 w-20 h-20 rounded-full bg-white/10 pointer-events-none" />

            <div className="relative z-10 space-y-1">
              <span className="text-[9px] opacity-80 font-bold block">
                {isPersianMode ? 'موجودی کل حساب‌ها' : 'Total Portfolio Liquidity'}
              </span>

              <div className="flex items-baseline justify-between pt-0.5">
                <div className="text-xl font-mono font-black tracking-tight">
                  345,820,000
                  <span className="text-[9px] font-sans font-normal opacity-85 mr-1.5">
                    {isPersianMode ? 'تومان' : 'TMN'}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/15 text-[8px] font-bold">
                  <TrendingUp size={10} />
                  <span>+۱۲.۴٪</span>
                </div>
                <span className="text-[8px] opacity-75">
                  {isPersianMode ? 'نسبت به ماه گذشته' : 'vs last 30 days'}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Actions 4-Grid */}
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: 'انتقال', labelEn: 'Transfer', icon: Send, color: '#2563EB', bg: '#EFF6FF' },
              { label: 'دریافت', labelEn: 'Receive', icon: Download, color: '#16A34A', bg: '#ECFDF3' },
              { label: 'اسکن QR', labelEn: 'QR Pay', icon: QrCode, color: '#F59E0B', bg: '#FFF7ED' },
              { label: 'کارت‌ها', labelEn: 'Cards', icon: CreditCard, color: '#7C3AED', bg: '#F5F3FF' },
            ].map((act, i) => {
              const Icon = act.icon;
              return (
                <div key={i} className="text-center group cursor-pointer">
                  <div
                    className="w-10 h-10 mx-auto rounded-xl border border-[#E9EDF3] bg-white flex items-center justify-center shadow-xs transition-transform group-hover:scale-105"
                    style={{ color: act.color }}
                  >
                    <Icon size={16} />
                  </div>
                  <span className="text-[8px] font-bold text-[#687285] mt-1 block">
                    {isPersianMode ? act.label : act.labelEn}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Recent Real-time Transactions */}
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center justify-between text-[11px] font-bold px-0.5">
              <span className="text-[#111827]">
                {isPersianMode ? 'تراکنش‌های اخیر' : 'Recent Transactions'}
              </span>
              <span className="text-[#2563EB] text-[9px] cursor-pointer hover:underline">
                {isPersianMode ? 'مشاهده همه' : 'View All'}
              </span>
            </div>

            <div className="p-2 rounded-xl bg-white border border-[#E9EDF3] shadow-xs divide-y divide-[#F0F2F6]">
              {/* Item 1 */}
              <div className="py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#FFF1F2] text-[#EF4444] flex items-center justify-center">
                    <TrendingDown size={13} />
                  </div>
                  <div>
                    <strong className="text-[9px] font-bold text-[#111827] block">
                      {isPersianMode ? 'دیجی‌کالا — خرید آنلاین' : 'Digikala Merchant'}
                    </strong>
                    <span className="text-[7px] text-[#A1A8B5] block">امروز، ۱۸:۴۵</span>
                  </div>
                </div>
                <div className="text-left font-mono">
                  <strong className="text-[10px] font-bold text-[#EF4444] block">-450,000</strong>
                  <span className="text-[6px] text-[#A1A8B5]">TRX-9482</span>
                </div>
              </div>

              {/* Item 2 */}
              <div className="py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#ECFDF3] text-[#16A34A] flex items-center justify-center">
                    <TrendingUp size={13} />
                  </div>
                  <div>
                    <strong className="text-[9px] font-bold text-[#111827] block">
                      {isPersianMode ? 'واریز سود ماهانه صندوق' : 'Treasury Yield Payout'}
                    </strong>
                    <span className="text-[7px] text-[#A1A8B5] block">دیروز، ۰۶:۰۰</span>
                  </div>
                </div>
                <div className="text-left font-mono">
                  <strong className="text-[10px] font-bold text-[#16A34A] block">+2,400,000</strong>
                  <span className="text-[6px] text-[#A1A8B5]">TRX-1029</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // CHAPTER 02: PORTFOLIO (Multi-Asset Sovereign Vault)
  // ----------------------------------------------------
  if (screenId === 'portfolio') {
    return (
      <div className="w-full h-full text-[#111827] font-persian flex flex-col justify-between select-none">
        <div className="space-y-3.5">
          {/* Header */}
          <div className="flex items-center justify-between pt-1">
            <div className="w-7 h-7 rounded-lg border border-[#E7EAF0] bg-white flex items-center justify-center text-[#697386] shadow-xs">
              <ArrowLeft size={13} />
            </div>
            <strong className="text-xs font-black text-[#111827]">
              {isPersianMode ? 'سبد دارایی‌ها' : 'Asset Portfolio'}
            </strong>
            <div className="w-7 h-7 rounded-lg border border-[#E7EAF0] bg-white flex items-center justify-center text-[#2563EB] shadow-xs cursor-pointer">
              <Plus size={14} />
            </div>
          </div>

          {/* Portfolio Total Valuation */}
          <div className="p-3.5 rounded-2xl bg-white border border-[#E8EBF1] shadow-xs space-y-1">
            <span className="text-[9px] text-[#8B94A4] block">
              {isPersianMode ? 'ارزش کل دارایی‌ها' : 'Total Asset Valuation'}
            </span>
            <div className="flex items-baseline justify-between">
              <strong className="text-lg font-mono font-black text-[#111827]">$55,140.00</strong>
              <span className="text-[8px] font-bold text-[#16A34A] bg-[#ECFDF3] px-2 py-0.5 rounded-md">
                +4.8% (24h)
              </span>
            </div>
          </div>

          {/* Asset Rows */}
          <div className="space-y-2">
            {[
              {
                symbol: '₿',
                name: 'بیت‌کوین',
                nameEn: 'Bitcoin',
                amount: '0.4502 BTC',
                usd: '$31,240',
                change: '+2.4%',
                positive: true,
                color: '#F59E0B',
                bg: '#FFF7ED',
              },
              {
                symbol: 'Ξ',
                name: 'اتریوم',
                nameEn: 'Ethereum',
                amount: '4.2000 ETH',
                usd: '$8,650',
                change: '-1.2%',
                positive: false,
                color: '#6366F1',
                bg: '#EEF2FF',
              },
              {
                symbol: '₮',
                name: 'تتر استیبل‌کوین',
                nameEn: 'Tether USD',
                amount: '12,400 USDT',
                usd: '$12,400',
                change: '0.00%',
                positive: true,
                color: '#16A34A',
                bg: '#ECFDF3',
              },
              {
                symbol: '$',
                name: 'دلار بانکی',
                nameEn: 'USD Liquidity',
                amount: '2,850 USD',
                usd: '$2,850',
                change: '+0.3%',
                positive: true,
                color: '#2563EB',
                bg: '#EFF6FF',
              },
            ].map((asset, i) => (
              <div
                key={i}
                className="p-3 rounded-2xl bg-white border border-[#E8EBF1] shadow-xs flex items-center justify-between hover:border-[#CBD5E1] transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm"
                    style={{ backgroundColor: asset.bg, color: asset.color }}
                  >
                    {asset.symbol}
                  </div>
                  <div>
                    <strong className="text-[10px] font-bold text-[#111827] block">
                      {isPersianMode ? asset.name : asset.nameEn}
                    </strong>
                    <span className="text-[7px] text-[#9AA2B0] font-mono block">
                      {asset.amount}
                    </span>
                  </div>
                </div>

                <div className="text-left font-mono">
                  <strong className="text-[10px] font-black text-[#111827] block">
                    {asset.usd}
                  </strong>
                  <small
                    className="text-[8px] font-bold"
                    style={{ color: asset.positive ? '#16A34A' : '#EF4444' }}
                  >
                    {asset.change}
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // CHAPTER 03: ANALYTICS (Budgeting, Burn Rate & Telemetry)
  // ----------------------------------------------------
  if (screenId === 'analytics') {
    return (
      <div className="w-full h-full text-[#111827] font-persian flex flex-col justify-between select-none">
        <div className="space-y-3">
          {/* Header */}
          <div className="flex items-center justify-between pt-1">
            <div className="w-7 h-7" />
            <strong className="text-xs font-black text-[#111827]">
              {isPersianMode ? 'بودجه و تحلیل هزینه‌ها' : 'Expense & Budget Telemetry'}
            </strong>
            <div className="w-7 h-7" />
          </div>

          {/* Radial Donut Analytics Chart */}
          <div className="p-3.5 rounded-2xl bg-white border border-[#E8EBF1] shadow-xs text-center space-y-1">
            <div className="relative w-28 h-28 mx-auto my-1">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="36"
                  fill="none"
                  stroke="#EDF0F5"
                  strokeWidth="11"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="36"
                  fill="none"
                  stroke="#2563EB"
                  strokeWidth="11"
                  strokeLinecap="round"
                  strokeDasharray="226"
                  strokeDashoffset="75"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="36"
                  fill="none"
                  stroke="#7C3AED"
                  strokeWidth="11"
                  strokeLinecap="round"
                  strokeDasharray="226"
                  strokeDashoffset="160"
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-[8px] text-[#9AA2B0]">مصرف این ماه</span>
                <strong className="text-sm font-mono font-black text-[#111827]">12.4M</strong>
                <span className="text-[7px] font-bold text-[#727B8B] bg-[#F3F5F8] px-1.5 py-0.5 rounded-md mt-0.5">
                  آبان ۱۴۰۵
                </span>
              </div>
            </div>
          </div>

          {/* Budget Categories Progress */}
          <div className="space-y-2">
            {/* Category 1 */}
            <div className="p-2.5 rounded-xl bg-white border border-[#E8EBF1] shadow-xs space-y-1">
              <div className="flex items-center justify-between text-[8px]">
                <span className="font-bold text-[#737C8D]">مسکن و قبوض</span>
                <strong className="font-mono text-[#111827]">5,200,000</strong>
              </div>
              <div className="w-full h-1.5 bg-[#EEF1F5] rounded-full overflow-hidden">
                <div className="h-full bg-[#2563EB] rounded-full w-[65%]" />
              </div>
              <div className="flex justify-between text-[7px] text-[#A0A7B3]">
                <span>۶۵٪ مصرف‌شده</span>
                <span>۲,۰۰۰,۰۰۰ تومان مانده</span>
              </div>
            </div>

            {/* Category 2 */}
            <div className="p-2.5 rounded-xl bg-white border border-[#E8EBF1] shadow-xs space-y-1">
              <div className="flex items-center justify-between text-[8px]">
                <span className="font-bold text-[#737C8D]">سرمایه‌گذاری و آموزش</span>
                <strong className="font-mono text-[#111827]">3,100,000</strong>
              </div>
              <div className="w-full h-1.5 bg-[#EEF1F5] rounded-full overflow-hidden">
                <div className="h-full bg-[#7C3AED] rounded-full w-[45%]" />
              </div>
              <div className="flex justify-between text-[7px] text-[#A0A7B3]">
                <span>۴۵٪ مصرف‌شده</span>
                <span>پایدار و بدون محدودیت</span>
              </div>
            </div>

            {/* Category 3 */}
            <div className="p-2.5 rounded-xl bg-white border border-[#E8EBF1] shadow-xs space-y-1">
              <div className="flex items-center justify-between text-[8px]">
                <span className="font-bold text-[#737C8D]">خرید و سرگرمی</span>
                <strong className="font-mono text-[#111827]">2,100,000</strong>
              </div>
              <div className="w-full h-1.5 bg-[#EEF1F5] rounded-full overflow-hidden">
                <div className="h-full bg-[#F59E0B] rounded-full w-[32%]" />
              </div>
              <div className="flex justify-between text-[7px] text-[#A0A7B3]">
                <span>۳۲٪ مصرف‌شده</span>
                <span>۳,۹۰۰,۰۰۰ تومان مانده</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // CHAPTER 04: ADVISOR & SECURITY (AI Agent & Smart Cards)
  // ----------------------------------------------------
  return (
    <div className="w-full h-full text-[#111827] font-persian flex flex-col justify-between select-none">
      <div className="space-y-3">
        {/* Zarvand Midnight Smart Card */}
        <div className="relative overflow-hidden p-3.5 rounded-2xl bg-gradient-to-br from-[#172033] via-[#25334C] to-[#111827] text-white shadow-[0_12px_22px_rgba(15,23,42,0.2)]">
          <div className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-white/5 pointer-events-none" />

          <div className="flex items-center justify-between">
            {/* Metallic Gold Chip */}
            <div className="w-7 h-5 rounded-md bg-gradient-to-br from-[#F6D365] to-[#D7A83D] relative shadow-xs">
              <div className="absolute inset-0.5 border border-[#805000]/30 rounded-xs" />
            </div>
            <strong className="font-mono text-[9px] tracking-widest font-black">
              ZARVAND TITANIUM
            </strong>
          </div>

          <div className="my-2.5 font-mono text-xs tracking-wider text-left font-bold text-[#F1F5F9]">
            5022  2910  8492  0014
          </div>

          <div className="flex items-center justify-between text-[7px] text-[#9CA8BA]">
            <div>
              <span className="block text-[6px]">CARD HOLDER</span>
              <strong className="text-white text-[8px]">ERFAN MOEIN</strong>
            </div>
            <div className="text-right">
              <span className="block text-[6px]">EXPIRES</span>
              <strong className="text-white text-[8px]">12/28</strong>
            </div>
          </div>
        </div>

        {/* AI Advisor Chat Snippet */}
        <div className="p-2.5 rounded-xl bg-white border border-[#E8EDF4] shadow-xs space-y-1.5">
          <div className="flex items-center gap-1.5 pb-1 border-b border-[#F0F2F6]">
            <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-[#7C3AED] to-[#A78BFA] text-white flex items-center justify-center">
              <Sparkles size={11} />
            </div>
            <span className="text-[8px] font-bold text-[#111827]">مشاور هوشمند زروند</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] ml-auto animate-pulse" />
          </div>

          <div className="p-2 rounded-lg bg-[#F8FAFC] border border-[#E8EDF4] text-[8px] leading-relaxed text-[#334155]">
            تحلیل الگوی هزینه‌ها نشان می‌دهد این ماه <strong>۱۵٪</strong> در هزینه‌ها صرفه‌جویی شده. پیشنهاد: انتقال ۱.۵M به صندوق درآمد ثابت با سود <strong>۲۴٪</strong> سالانه.
          </div>
        </div>

        {/* Real-time Hardware Security Toggles */}
        <div className="p-2 rounded-xl bg-white border border-[#E8EDF4] shadow-xs divide-y divide-[#F0F2F6]">
          <div
            className="py-1.5 flex items-center justify-between cursor-pointer"
            onClick={() => setOnlinePay(!onlinePay)}
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-[#F3F5F8] text-[#667085] flex items-center justify-center">
                <Globe size={12} />
              </div>
              <div>
                <strong className="text-[8px] font-bold text-[#111827] block">
                  پرداخت اینترنتی
                </strong>
                <span className="text-[6px] text-[#9AA2B0]">خرید از درگاه‌های آنلاین</span>
              </div>
            </div>
            <div
              className={`w-7 h-4 rounded-full transition-colors relative ${
                onlinePay ? 'bg-[#22C55E]' : 'bg-[#DFE4EB]'
              }`}
            >
              <div
                className={`w-3 h-3 rounded-full bg-white shadow-xs absolute top-0.5 transition-transform ${
                  onlinePay ? 'right-0.5' : 'left-0.5'
                }`}
              />
            </div>
          </div>

          <div
            className="py-1.5 flex items-center justify-between cursor-pointer"
            onClick={() => setTempFreeze(!tempFreeze)}
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-[#F3F5F8] text-[#667085] flex items-center justify-center">
                <Lock size={12} />
              </div>
              <div>
                <strong className="text-[8px] font-bold text-[#111827] block">
                  مسدودسازی موقت
                </strong>
                <span className="text-[6px] text-[#9AA2B0]">غیرفعال‌سازی فوری کارت</span>
              </div>
            </div>
            <div
              className={`w-7 h-4 rounded-full transition-colors relative ${
                tempFreeze ? 'bg-[#EF4444]' : 'bg-[#DFE4EB]'
              }`}
            >
              <div
                className={`w-3 h-3 rounded-full bg-white shadow-xs absolute top-0.5 transition-transform ${
                  tempFreeze ? 'right-0.5' : 'left-0.5'
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
