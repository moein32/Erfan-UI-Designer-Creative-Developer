import React, { useState } from 'react';
import {
  Bell,
  TrendingUp,
  TrendingDown,
  Send,
  Download,
  QrCode,
  CreditCard,
  Plus,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Lock,
  Globe,
} from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

interface ZarvandScreenProps {
  screenId: 'liquidity' | 'portfolio' | 'analytics' | 'advisor';
}

export const ZarvandScreen: React.FC<ZarvandScreenProps> = ({ screenId }) => {
  const { isRTL, formatNumber } = useLanguage();

  // Screen 4 Security toggles
  const [onlinePay, setOnlinePay] = useState(true);
  const [tempFreeze, setTempFreeze] = useState(false);

  // ----------------------------------------------------
  // CHAPTER 01: LIQUIDITY (Main Treasury & Financial Dashboard)
  // ----------------------------------------------------
  if (screenId === 'liquidity') {
    const quickActions = isRTL
      ? [
          { label: 'انتقال', icon: Send, color: '#2563EB', bg: '#EFF6FF' },
          { label: 'دریافت', icon: Download, color: '#16A34A', bg: '#ECFDF3' },
          { label: 'اسکن QR', icon: QrCode, color: '#F59E0B', bg: '#FFF7ED' },
          { label: 'کارت‌ها', icon: CreditCard, color: '#7C3AED', bg: '#F5F3FF' },
        ]
      : [
          { label: 'Transfer', icon: Send, color: '#2563EB', bg: '#EFF6FF' },
          { label: 'Receive', icon: Download, color: '#16A34A', bg: '#ECFDF3' },
          { label: 'QR Pay', icon: QrCode, color: '#F59E0B', bg: '#FFF7ED' },
          { label: 'Cards', icon: CreditCard, color: '#7C3AED', bg: '#F5F3FF' },
        ];

    return (
      <div
        className={`w-full h-full text-[#111827] flex flex-col justify-between select-none ${
          isRTL ? 'font-persian text-right' : 'font-sans text-left'
        }`}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div className="space-y-3.5">
          {/* Top Bar */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#6366F1] to-[#818CF8] text-white flex items-center justify-center font-black text-xs shadow-xs">
                {isRTL ? 'ع' : 'EM'}
              </div>
              <div>
                <span className="text-[9px] text-[#9AA2B1] block">
                  {isRTL ? 'صبح بخیر' : 'Good Morning,'}
                </span>
                <strong className="text-xs font-black text-[#111827] block">
                  {isRTL ? 'عرفان معین' : 'Erfan Moein'}
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
                {isRTL ? 'موجودی کل حساب‌ها' : 'Total Portfolio Liquidity'}
              </span>

              <div className="flex items-baseline justify-between pt-0.5 font-mono">
                <div className="text-xl font-black tracking-tight">
                  {isRTL ? '۳۴۵,۸۲۰,۰۰۰' : '$128,450.00'}
                  <span className="text-[9px] font-sans font-normal opacity-85 mx-1.5">
                    {isRTL ? 'تومان' : 'USD'}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/15 text-[8px] font-bold">
                  <TrendingUp size={10} />
                  <span>{isRTL ? '+۱۲.۴٪' : '+12.4%'}</span>
                </div>
                <span className="text-[8px] opacity-75">
                  {isRTL ? 'نسبت به ماه گذشته' : 'vs last 30 days'}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Actions 4-Grid */}
          <div className="grid grid-cols-4 gap-2">
            {quickActions.map((act, i) => {
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
                    {act.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Recent Real-time Transactions */}
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center justify-between text-[11px] font-bold px-0.5">
              <span className="text-[#111827]">
                {isRTL ? 'تراکنش‌های اخیر' : 'Recent Transactions'}
              </span>
              <span className="text-[#2563EB] text-[9px] cursor-pointer hover:underline">
                {isRTL ? 'مشاهده همه' : 'View All'}
              </span>
            </div>

            <div className="p-2 rounded-xl bg-white border border-[#E9EDF3] shadow-xs divide-y divide-[#F0F2F6]">
              {/* Item 1 */}
              <div className="py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#FFF1F2] text-[#EF4444] flex items-center justify-center shrink-0">
                    <TrendingDown size={13} />
                  </div>
                  <div>
                    <strong className="text-[9px] font-bold text-[#111827] block">
                      {isRTL ? 'دیجی‌کالا — خرید آنلاین' : 'Apple Store Merchant'}
                    </strong>
                    <span className="text-[7px] text-[#A1A8B5] block">
                      {isRTL ? 'امروز، ۱۸:۴۵' : 'Today, 18:45'}
                    </span>
                  </div>
                </div>
                <div className={`${isRTL ? 'text-left' : 'text-right'} font-mono`}>
                  <strong className="text-[10px] font-bold text-[#EF4444] block">
                    {isRTL ? '-۴۵۰,۰۰۰' : '-$349.00'}
                  </strong>
                  <span className="text-[6px] text-[#A1A8B5]">TRX-9482</span>
                </div>
              </div>

              {/* Item 2 */}
              <div className="py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#ECFDF3] text-[#16A34A] flex items-center justify-center shrink-0">
                    <TrendingUp size={13} />
                  </div>
                  <div>
                    <strong className="text-[9px] font-bold text-[#111827] block">
                      {isRTL ? 'واریز سود ماهانه صندوق' : 'Treasury Yield Payout'}
                    </strong>
                    <span className="text-[7px] text-[#A1A8B5] block">
                      {isRTL ? 'دیروز، ۰۶:۰۰' : 'Yesterday, 06:00'}
                    </span>
                  </div>
                </div>
                <div className={`${isRTL ? 'text-left' : 'text-right'} font-mono`}>
                  <strong className="text-[10px] font-bold text-[#16A34A] block">
                    {isRTL ? '+۲,۴۰۰,۰۰۰' : '+$1,850.00'}
                  </strong>
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
    const assets = [
      {
        symbol: '₿',
        nameFa: 'بیت‌کوین',
        nameEn: 'Bitcoin',
        amount: '0.4502 BTC',
        usd: '$31,240.00',
        changeFa: '+۲.۴٪',
        changeEn: '+2.4%',
        positive: true,
        color: '#F59E0B',
        bg: '#FFF7ED',
      },
      {
        symbol: 'Ξ',
        nameFa: 'اتریوم',
        nameEn: 'Ethereum',
        amount: '4.2000 ETH',
        usd: '$8,650.00',
        changeFa: '-۱.۲٪',
        changeEn: '-1.2%',
        positive: false,
        color: '#6366F1',
        bg: '#EEF2FF',
      },
      {
        symbol: '₮',
        nameFa: 'تتر استیبل‌کوین',
        nameEn: 'Tether USD',
        amount: '12,400 USDT',
        usd: '$12,400.00',
        changeFa: '۰.۰۰٪',
        changeEn: '0.00%',
        positive: true,
        color: '#16A34A',
        bg: '#ECFDF3',
      },
      {
        symbol: '$',
        nameFa: 'دلار نقدی بانکی',
        nameEn: 'USD Liquidity',
        amount: '2,850 USD',
        usd: '$2,850.00',
        changeFa: '+۰.۳٪',
        changeEn: '+0.3%',
        positive: true,
        color: '#2563EB',
        bg: '#EFF6FF',
      },
    ];

    return (
      <div
        className={`w-full h-full text-[#111827] flex flex-col justify-between select-none ${
          isRTL ? 'font-persian text-right' : 'font-sans text-left'
        }`}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div className="space-y-3.5">
          {/* Header */}
          <div className="flex items-center justify-between pt-1">
            <div className="w-7 h-7 rounded-lg border border-[#E7EAF0] bg-white flex items-center justify-center text-[#697386] shadow-xs">
              {isRTL ? <ArrowRight size={13} /> : <ArrowLeft size={13} />}
            </div>
            <strong className="text-xs font-black text-[#111827]">
              {isRTL ? 'سبد دارایی‌ها' : 'Asset Portfolio'}
            </strong>
            <div className="w-7 h-7 rounded-lg border border-[#E7EAF0] bg-white flex items-center justify-center text-[#2563EB] shadow-xs cursor-pointer">
              <Plus size={14} />
            </div>
          </div>

          {/* Portfolio Total Valuation */}
          <div className="p-3.5 rounded-2xl bg-white border border-[#E8EBF1] shadow-xs space-y-1">
            <span className="text-[9px] text-[#8B94A4] block">
              {isRTL ? 'ارزش کل دارایی‌ها' : 'Total Asset Valuation'}
            </span>
            <div className="flex items-baseline justify-between">
              <strong className="text-lg font-mono font-black text-[#111827]">
                {isRTL ? '$۵۵,۱۴۰.۰۰' : '$55,140.00'}
              </strong>
              <span className="text-[8px] font-bold text-[#16A34A] bg-[#ECFDF3] px-2 py-0.5 rounded-md font-mono">
                {isRTL ? '+۴.۸٪ (۲۴س)' : '+4.8% (24h)'}
              </span>
            </div>
          </div>

          {/* Asset Rows */}
          <div className="space-y-2">
            {assets.map((asset, i) => (
              <div
                key={i}
                className="p-3 rounded-2xl bg-white border border-[#E8EBF1] shadow-xs flex items-center justify-between hover:border-[#CBD5E1] transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm shrink-0"
                    style={{ backgroundColor: asset.bg, color: asset.color }}
                  >
                    {asset.symbol}
                  </div>
                  <div>
                    <strong className="text-[10px] font-bold text-[#111827] block">
                      {isRTL ? asset.nameFa : asset.nameEn}
                    </strong>
                    <span className="text-[7px] text-[#9AA2B0] font-mono block">
                      {asset.amount}
                    </span>
                  </div>
                </div>

                <div className={`${isRTL ? 'text-left' : 'text-right'} font-mono`}>
                  <strong className="text-[10px] font-black text-[#111827] block">
                    {asset.usd}
                  </strong>
                  <small
                    className="text-[8px] font-bold"
                    style={{ color: asset.positive ? '#16A34A' : '#EF4444' }}
                  >
                    {isRTL ? asset.changeFa : asset.changeEn}
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
      <div
        className={`w-full h-full text-[#111827] flex flex-col justify-between select-none ${
          isRTL ? 'font-persian text-right' : 'font-sans text-left'
        }`}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div className="space-y-3">
          {/* Header */}
          <div className="flex items-center justify-between pt-1">
            <div className="w-7 h-7" />
            <strong className="text-xs font-black text-[#111827]">
              {isRTL ? 'بودجه و تحلیل هزینه‌ها' : 'Expense & Budget Telemetry'}
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
                <span className="text-[8px] text-[#9AA2B0]">
                  {isRTL ? 'مصرف این ماه' : 'Monthly Burn'}
                </span>
                <strong className="text-sm font-mono font-black text-[#111827]">
                  {isRTL ? '۱۲.۴M' : '$4,280'}
                </strong>
                <span className="text-[7px] font-bold text-[#727B8B] bg-[#F3F5F8] px-1.5 py-0.5 rounded-md mt-0.5 font-mono">
                  {isRTL ? 'آبان ۱۴۰۵' : 'Nov 2026'}
                </span>
              </div>
            </div>
          </div>

          {/* Budget Categories Progress */}
          <div className="space-y-2">
            {/* Category 1 */}
            <div className="p-2.5 rounded-xl bg-white border border-[#E8EBF1] shadow-xs space-y-1">
              <div className="flex items-center justify-between text-[8px]">
                <span className="font-bold text-[#737C8D]">
                  {isRTL ? 'مسکن و قبوض شهری' : 'Housing & Utilities'}
                </span>
                <strong className="font-mono text-[#111827]">
                  {isRTL ? '۵,۲۰۰,۰۰۰' : '$2,100.00'}
                </strong>
              </div>
              <div className="w-full h-1.5 bg-[#EEF1F5] rounded-full overflow-hidden">
                <div className="h-full bg-[#2563EB] rounded-full w-[65%]" />
              </div>
              <div className="flex justify-between text-[7px] text-[#A0A7B3]">
                <span>{isRTL ? '۶۵٪ مصرف‌شده' : '65% Utilized'}</span>
                <span>{isRTL ? '۲,۰۰۰,۰۰۰ تومان مانده' : '$1,100 remaining'}</span>
              </div>
            </div>

            {/* Category 2 */}
            <div className="p-2.5 rounded-xl bg-white border border-[#E8EBF1] shadow-xs space-y-1">
              <div className="flex items-center justify-between text-[8px]">
                <span className="font-bold text-[#737C8D]">
                  {isRTL ? 'سرمایه‌گذاری و آموزش' : 'Investments & Education'}
                </span>
                <strong className="font-mono text-[#111827]">
                  {isRTL ? '۳,۱۰۰,۰۰۰' : '$1,450.00'}
                </strong>
              </div>
              <div className="w-full h-1.5 bg-[#EEF1F5] rounded-full overflow-hidden">
                <div className="h-full bg-[#7C3AED] rounded-full w-[45%]" />
              </div>
              <div className="flex justify-between text-[7px] text-[#A0A7B3]">
                <span>{isRTL ? '۴۵٪ مصرف‌شده' : '45% Utilized'}</span>
                <span>{isRTL ? 'پایدار و بدون ریسک' : 'On-target & healthy'}</span>
              </div>
            </div>

            {/* Category 3 */}
            <div className="p-2.5 rounded-xl bg-white border border-[#E8EBF1] shadow-xs space-y-1">
              <div className="flex items-center justify-between text-[8px]">
                <span className="font-bold text-[#737C8D]">
                  {isRTL ? 'خرید و سرگرمی' : 'Lifestyle & Dining'}
                </span>
                <strong className="font-mono text-[#111827]">
                  {isRTL ? '۲,۱۰۰,۰۰۰' : '$730.00'}
                </strong>
              </div>
              <div className="w-full h-1.5 bg-[#EEF1F5] rounded-full overflow-hidden">
                <div className="h-full bg-[#F59E0B] rounded-full w-[32%]" />
              </div>
              <div className="flex justify-between text-[7px] text-[#A0A7B3]">
                <span>{isRTL ? '۳۲٪ مصرف‌شده' : '32% Utilized'}</span>
                <span>{isRTL ? '۳,۹۰۰,۰۰۰ تومان مانده' : '$1,500 remaining'}</span>
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
    <div
      className={`w-full h-full text-[#111827] flex flex-col justify-between select-none ${
        isRTL ? 'font-persian text-right' : 'font-sans text-left'
      }`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
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

          <div className="my-2.5 font-mono text-xs tracking-wider text-left font-bold text-[#F1F5F9]" dir="ltr">
            5022  2910  8492  0014
          </div>

          <div className="flex items-center justify-between text-[7px] text-[#9CA8BA]" dir="ltr">
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
            <span className="text-[8px] font-bold text-[#111827]">
              {isRTL ? 'مشاور هوشمند زروند' : 'Zarvand AI Wealth Advisor'}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] ml-auto animate-pulse" />
          </div>

          <div className="p-2 rounded-lg bg-[#F8FAFC] border border-[#E8EDF4] text-[8px] leading-relaxed text-[#334155]">
            {isRTL ? (
              <>
                تحلیل الگوی هزینه‌ها نشان می‌دهد این ماه <strong>۱۵٪</strong> در هزینه‌ها صرفه‌جویی شده. پیشنهاد: انتقال ۱.۵M به صندوق درآمد ثابت با سود <strong>۲۴٪</strong> سالانه.
              </>
            ) : (
              <>
                Cash-flow analysis confirms a <strong>15%</strong> surplus this cycle. Recommended: Allocate $1,500 to the fixed-yield treasury vault earning <strong>7.2% APY</strong>.
              </>
            )}
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
                  {isRTL ? 'پرداخت اینترنتی' : 'Online E-Commerce Payments'}
                </strong>
                <span className="text-[6px] text-[#9AA2B0]">
                  {isRTL ? 'خرید از درگاه‌های آنلاین' : 'Permit domestic & global online checkouts'}
                </span>
              </div>
            </div>
            <div
              className={`w-7 h-4 rounded-full transition-colors relative ${
                onlinePay ? 'bg-[#22C55E]' : 'bg-[#DFE4EB]'
              }`}
            >
              <div
                className={`w-3 h-3 rounded-full bg-white shadow-xs absolute top-0.5 transition-transform ${
                  onlinePay ? (isRTL ? 'left-0.5' : 'right-0.5') : (isRTL ? 'right-0.5' : 'left-0.5')
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
                  {isRTL ? 'مسدودسازی موقت' : 'Instant Freeze Protection'}
                </strong>
                <span className="text-[6px] text-[#9AA2B0]">
                  {isRTL ? 'غیرفعال‌سازی فوری کارت' : 'Lock card instantly across all networks'}
                </span>
              </div>
            </div>
            <div
              className={`w-7 h-4 rounded-full transition-colors relative ${
                tempFreeze ? 'bg-[#EF4444]' : 'bg-[#DFE4EB]'
              }`}
            >
              <div
                className={`w-3 h-3 rounded-full bg-white shadow-xs absolute top-0.5 transition-transform ${
                  tempFreeze ? (isRTL ? 'left-0.5' : 'right-0.5') : (isRTL ? 'right-0.5' : 'left-0.5')
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
