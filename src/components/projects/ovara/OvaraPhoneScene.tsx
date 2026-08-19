import React, { useState, useEffect } from 'react';
import { Wifi, Battery, Signal, Home, Search, ShoppingBag, User, Sparkles } from 'lucide-react';
import { OvaraScreenHome } from './OvaraScreenHome';
import { OvaraScreenDiscovery } from './OvaraScreenDiscovery';
import { OvaraScreenDetails } from './OvaraScreenDetails';
import { OvaraScreenCart } from './OvaraScreenCart';
import { OvaraScreenProfile } from './OvaraScreenProfile';

interface OvaraPhoneSceneProps {
  activeScreenIndex: number;
  onScreenChange: (index: number) => void;
  className?: string;
  isInteractive?: boolean;
}

export const OvaraPhoneScene: React.FC<OvaraPhoneSceneProps> = ({
  activeScreenIndex,
  onScreenChange,
  className = '',
  isInteractive = true,
}) => {
  const [islandState, setIslandState] = useState<'idle' | 'expanded'>('idle');

  // Dynamic Island status text corresponding to current screen
  const getIslandInfo = () => {
    switch (activeScreenIndex) {
      case 0:
        return { title: 'Ovara Atelier', sub: 'Live Drop Online', badge: 'VIP' };
      case 1:
        return { title: 'Smart Search', sub: '124 Items Synced', badge: 'AI' };
      case 2:
        return { title: '3D Inspector', sub: 'Titanium Grade 5', badge: 'AR' };
      case 3:
        return { title: 'Express Bag', sub: '3 Items · Free VIP', badge: 'Cart' };
      case 4:
        return { title: 'Order #OV-84219', sub: 'Courier In Transit', badge: 'Live' };
      default:
        return { title: 'OVARA', sub: 'Luxury Experience', badge: 'Pro' };
    }
  };

  const island = getIslandInfo();

  const navItems = [
    { id: 0, label: 'خانه', en: 'Home', icon: Home },
    { id: 1, label: 'کاوش', en: 'Explore', icon: Search },
    { id: 2, label: 'محصول', en: 'Detail', icon: Sparkles },
    { id: 3, label: 'سبد خرید', en: 'Cart', icon: ShoppingBag, badge: 3 },
    { id: 4, label: 'پروفایل', en: 'Profile', icon: User },
  ];

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Exterior Ambient Studio Glow */}
      <div className="absolute inset-0 -m-8 rounded-[64px] bg-gradient-to-tr from-[#FF5C39]/15 via-[#7667F4]/10 to-transparent blur-2xl pointer-events-none" />

      {/* Titanium iPhone 16 Pro Chassis */}
      <div 
        className="relative w-[320px] sm:w-[350px] md:w-[370px] h-[720px] rounded-[52px] p-[10px] bg-gradient-to-b from-[#E7E9ED] via-[#B8BCC6] to-[#D5D8E0] shadow-[0_35px_80px_-15px_rgba(20,24,40,0.3),0_12px_24px_-8px_rgba(20,24,40,0.18)] transition-transform duration-500"
        style={{
          boxShadow: '0 30px 70px -10px rgba(17, 24, 39, 0.28), inset 0 1px 2px rgba(255,255,255,0.9), inset 0 -1px 2px rgba(0,0,0,0.25)',
        }}
      >
        {/* Inner Black Bezel Frame */}
        <div className="relative w-full h-full rounded-[44px] bg-[#090A0E] p-[3px] overflow-hidden shadow-inner border border-black/40">
          
          {/* Active Screen Viewport */}
          <div className="relative w-full h-full rounded-[41px] bg-white overflow-hidden flex flex-col">
            
            {/* Status Bar */}
            <div className="relative z-30 h-11 px-6 flex items-center justify-between text-[11px] font-bold text-[#111116] bg-transparent">
              <span className="font-mono text-xs">9:41</span>

              {/* Dynamic Island */}
              <div 
                onClick={() => setIslandState(islandState === 'idle' ? 'expanded' : 'idle')}
                className={`absolute top-2 left-1/2 -translate-x-1/2 rounded-full bg-[#09090B] text-white flex items-center justify-between px-3 cursor-pointer transition-all duration-300 shadow-md ${
                  islandState === 'expanded'
                    ? 'w-[210px] h-8 bg-black/95 scale-105'
                    : 'w-[100px] h-6 hover:w-[110px]'
                }`}
              >
                {islandState === 'expanded' ? (
                  <div className="w-full flex items-center justify-between text-[9px] px-0.5">
                    <span className="text-[#FF5C39] font-black">{island.title}</span>
                    <span className="text-[8px] text-white/70">{island.sub}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                ) : (
                  <div className="w-full flex items-center justify-between px-0.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#1A1A1E] flex items-center justify-center">
                      <span className="w-1 h-1 rounded-full bg-[#FF5C39]" />
                    </div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#1A1A1E] flex items-center justify-center">
                      <span className="w-1 h-1 rounded-full bg-emerald-400" />
                    </div>
                  </div>
                )}
              </div>

              {/* Right Status Icons */}
              <div className="flex items-center gap-1.5 text-[#111116]">
                <Signal size={12} strokeWidth={2.5} />
                <Wifi size={12} strokeWidth={2.5} />
                <Battery size={13} strokeWidth={2.5} />
              </div>
            </div>

            {/* Scrollable Screen Content Container */}
            <div className="flex-1 overflow-y-auto px-4 pt-1 pb-16 scrollbar-none">
              {activeScreenIndex === 0 && (
                <OvaraScreenHome
                  onNavigateToDetail={() => onScreenChange(2)}
                  onNavigateToCart={() => onScreenChange(3)}
                />
              )}
              {activeScreenIndex === 1 && (
                <OvaraScreenDiscovery
                  onNavigateToDetail={() => onScreenChange(2)}
                  onNavigateToCart={() => onScreenChange(3)}
                />
              )}
              {activeScreenIndex === 2 && (
                <OvaraScreenDetails
                  onBack={() => onScreenChange(1)}
                  onNavigateToCart={() => onScreenChange(3)}
                />
              )}
              {activeScreenIndex === 3 && (
                <OvaraScreenCart
                  onBack={() => onScreenChange(0)}
                  onNavigateToProfile={() => onScreenChange(4)}
                />
              )}
              {activeScreenIndex === 4 && (
                <OvaraScreenProfile
                  onNavigateToHome={() => onScreenChange(0)}
                />
              )}
            </div>

            {/* App Floating Dock / Tab Bar */}
            <div className="absolute bottom-4 left-4 right-4 z-40 bg-white/85 backdrop-blur-xl border border-[#ECECF1] rounded-2xl p-1 shadow-[0_8px_25px_rgba(0,0,0,0.08)] flex items-center justify-around">
              {navItems.map((tab) => {
                const IconComponent = tab.icon;
                const isActive = activeScreenIndex === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => onScreenChange(tab.id)}
                    className={`relative py-1.5 px-2.5 rounded-xl flex flex-col items-center gap-0.5 transition-all duration-200 ${
                      isActive
                        ? 'text-[#111116] font-black'
                        : 'text-[#8A8B95] hover:text-[#444]'
                    }`}
                  >
                    <IconComponent
                      size={17}
                      strokeWidth={isActive ? 2.6 : 1.8}
                      className={isActive ? 'text-[#FF5C39]' : ''}
                    />
                    <span className="text-[8px] font-persian leading-none">{tab.label}</span>
                    {tab.badge && !isActive && (
                      <span className="absolute 1 top-0 right-1 w-3.5 h-3.5 bg-[#FF5C39] text-white text-[7px] font-black rounded-full flex items-center justify-center shadow-xs">
                        {tab.badge}
                      </span>
                    )}
                    {isActive && (
                      <span className="w-1 h-1 rounded-full bg-[#FF5C39] mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Home Indicator Bar */}
            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 rounded-full bg-[#111116]/80 z-50 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Screen Selector Pills (Outside Mockup for Quick Interactive Navigation) */}
      {isInteractive && (
        <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5 max-w-sm">
          {navItems.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onScreenChange(tab.id)}
              className={`px-3 py-1 rounded-full text-xs font-bold font-mono transition-all flex items-center gap-1.5 ${
                activeScreenIndex === tab.id
                  ? 'bg-[#111116] text-[#F7F7F5] shadow-xs'
                  : 'bg-white/80 hover:bg-white text-[#666] border border-[#E5E5E2]'
              }`}
            >
              <span>0{tab.id + 1}</span>
              <span className="font-sans font-medium">{tab.en}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
