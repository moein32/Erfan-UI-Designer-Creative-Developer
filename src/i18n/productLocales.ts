import { Language } from './types';

export interface ProductLocaleOvara {
  header: {
    greeting: string;
    userName: string;
    cartCount: string;
    searchPlaceholder: string;
  };
  navigation: {
    home: string;
    explore: string;
    detail: string;
    cart: string;
    profile: string;
  };
  categories: { id: number; name: string; icon: string }[];
  banner: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  featured: {
    title: string;
    viewAll: string;
    items: {
      id: string;
      title: string;
      brand: string;
      price: string;
      tag: string;
      rating: string;
    }[];
  };
  details: {
    back: string;
    title: string;
    brand: string;
    price: string;
    sizeLabel: string;
    sizes: string[];
    materialLabel: string;
    materials: string;
    specsLabel: string;
    specs: string[];
    addToCart: string;
    instantCheckout: string;
  };
  cart: {
    title: string;
    back: string;
    freeShipping: string;
    subtotalLabel: string;
    subtotalVal: string;
    shippingLabel: string;
    shippingVal: string;
    totalLabel: string;
    totalVal: string;
    checkoutBtn: string;
    items: {
      id: string;
      title: string;
      size: string;
      price: string;
      qty: string;
    }[];
  };
  profile: {
    title: string;
    tier: string;
    ordersLabel: string;
    ordersCount: string;
    wishlistLabel: string;
    wishlistCount: string;
    pointsLabel: string;
    pointsCount: string;
    recentOrderTitle: string;
    orderNumber: string;
    orderStatus: string;
    deliveryTime: string;
    viewReceipt: string;
  };
}

export interface ProductLocaleArven {
  header: {
    greeting: string;
    userName: string;
  };
  tabs: {
    think: string;
    organize: string;
    plan: string;
    create: string;
  };
  think: {
    aiBadge: string;
    insight: string;
    focusScoreLabel: string;
    focusScoreVal: string;
    tasksRemaining: string;
    prioritiesTitle: string;
    viewAll: string;
    priorities: { title: string; tag: string; time: string }[];
    quickAction: string;
  };
  organize: {
    title: string;
    segments: { today: string; upcoming: string; priority: string };
    progressLabel: string;
    tasks: { id: number; title: string; tag: string; tagColor: string }[];
    addTask: string;
  };
  plan: {
    title: string;
    month: string;
    deepWorkBlock: string;
    events: { time: string; title: string; category: string; duration: string }[];
  };
  create: {
    title: string;
    searchDocs: string;
    tags: { id: string; label: string }[];
    nodes: { title: string; desc: string; connections: string; time: string }[];
    newCanvas: string;
  };
}

export interface ProductLocaleNivra {
  header: {
    greeting: string;
    userName: string;
    searchPlaceholder: string;
  };
  tabs: {
    discover: string;
    plan: string;
    explore: string;
    travel: string;
  };
  discover: {
    heroBadge: string;
    heroTitle: string;
    heroSubtitle: string;
    trendingTitle: string;
    viewAll: string;
    destinations: { name: string; spots: string; img: string }[];
    curatedTitle: string;
    curatedCity: string;
    curatedPrice: string;
    curatedRating: string;
  };
  plan: {
    title: string;
    destination: string;
    dates: string;
    days: { day: string; date: string; title: string }[];
    timeline: { time: string; title: string; type: string; location: string }[];
  };
  explore: {
    city: string;
    country: string;
    temp: string;
    weather: string;
    highlightsTitle: string;
    highlights: { title: string; category: string; time: string }[];
    bookExperience: string;
  };
  travel: {
    title: string;
    bookingNumber: string;
    flightRoute: string;
    flightCode: string;
    gate: string;
    seat: string;
    status: string;
    hotelTitle: string;
    hotelNights: string;
    totalAmount: string;
    viewPass: string;
  };
}

export interface ProductLocaleVarya {
  header: {
    greeting: string;
    userName: string;
    date: string;
  };
  tabs: {
    equilibrium: string;
    vitality: string;
    circadian: string;
    intelligence: string;
  };
  equilibrium: {
    scoreLabel: string;
    scoreVal: string;
    status: string;
    vitals: {
      hrv: { label: string; val: string; status: string };
      heartRate: { label: string; val: string; status: string };
      hydration: { label: string; val: string; status: string };
    };
    insight: string;
  };
  vitality: {
    title: string;
    calorieBurn: string;
    activeHours: string;
    flowState: string;
    activitiesTitle: string;
    activities: { title: string; duration: string; burn: string; time: string }[];
  };
  circadian: {
    title: string;
    sleepScore: string;
    sleepDuration: string;
    remCycle: string;
    deepSleep: string;
    efficiency: string;
    chronotypeInsight: string;
  };
  intelligence: {
    title: string;
    coachName: string;
    message: string;
    recommendationTitle: string;
    recommendations: { title: string; duration: string; impact: string }[];
    startSession: string;
  };
}

export interface ProductLocaleZarvand {
  header: {
    portfolioName: string;
    networkStatus: string;
  };
  tabs: {
    liquidity: string;
    portfolio: string;
    analytics: string;
    intelligence: string;
  };
  liquidity: {
    balanceLabel: string;
    balanceVal: string;
    change24h: string;
    quickActions: { send: string; receive: string; swap: string; bridge: string };
    routingTitle: string;
    routers: { rail: string; status: string; latency: string; volume: string }[];
  };
  portfolio: {
    title: string;
    totalAUM: string;
    assets: { symbol: string; name: string; allocation: string; val: string; change: string }[];
  };
  analytics: {
    title: string;
    monthlyInflow: string;
    monthlyOutflow: string;
    budgetBounds: string;
    categories: { name: string; percent: string; val: string; color: string }[];
  };
  intelligence: {
    title: string;
    aiAuditBadge: string;
    auditStatus: string;
    riskScore: string;
    multiSigStatus: string;
    quorum: string;
    titaniumCard: { title: string; holder: string; limit: string; freeze: string };
  };
}

export const PRODUCT_LOCALES = {
  ovara: {
    fa: {
      header: {
        greeting: 'روز بخیر،',
        userName: 'عرفان معین',
        cartCount: '۳',
        searchPlaceholder: 'جستجو در بین ۴,۵۰۰ کالای لوکس...',
      },
      navigation: {
        home: 'خانه',
        explore: 'کاوش',
        detail: 'محصول',
        cart: 'سبد خرید',
        profile: 'پروفایل',
      },
      categories: [
        { id: 0, name: 'مد و پوشاک', icon: '👔' },
        { id: 1, name: 'دیجیتال', icon: '📱' },
        { id: 2, name: 'ساعت و جواهر', icon: '⌚' },
        { id: 3, name: 'عطر و لوکس', icon: '✨' },
      ],
      banner: {
        badge: 'اووارا · نسخه اختصاصی پاییز',
        title: 'مجموعه تیتانیوم پاییز ۲۰۲۶',
        subtitle: 'دسترسی زودهنگام اعضای وفادار با تحویل VIP رایگان',
        cta: 'مشاهده و سفارش',
      },
      featured: {
        title: 'کالکشن منتخب امروز',
        viewAll: 'مشاهده همه',
        items: [
          {
            id: 'nb-9060',
            title: 'کتانی نایک ویپورفلای نکس',
            brand: 'Nike Lab',
            price: '۱۲,۴۰۰,۰۰۰ تومان',
            tag: 'نسخه محدود',
            rating: '۴.۹',
          },
          {
            id: 'zenith-chrono',
            title: 'ساعت کرونوگراف تیتانیوم',
            brand: 'Zenith Studio',
            price: '۸۸,۰۰۰,۰۰۰ تومان',
            tag: 'سوئیسی',
            rating: '۵.۰',
          },
        ],
      },
      details: {
        back: 'بازگشت',
        title: 'کتانی لوکس دست‌دوز سری پریمیوم',
        brand: 'Ovara Atelier Limited',
        price: '۲۴,۵۰۰,۰۰۰ تومان',
        sizeLabel: 'انتخاب سایز (EU):',
        sizes: ['۴۰', '۴۱', '۴۲', '۴۳', '۴۴'],
        materialLabel: 'مشخصات متریال:',
        materials: 'چرم طبیعی ایتالیایی دست‌دوز با کفی ارگونومیک جاذب ضربه',
        specsLabel: 'ویژگی‌های انحصاری:',
        specs: [
          'گواهی اصالت بین‌المللی با کد QR',
          'جعبه چوبی دست‌ساز با حک نام خریدار',
          'تحویل فوری VIP توسط سفیر اووارا',
        ],
        addToCart: 'افزودن به سبد خرید',
        instantCheckout: 'خرید سریع با یک لمس',
      },
      cart: {
        title: 'سبد خرید لوکس',
        back: 'بازگشت به ویترین',
        freeShipping: 'ارسال با سفیر VIP رایگان فعال شد',
        subtotalLabel: 'جمع کل اقلام:',
        subtotalVal: '۱۲۴,۹۰۰,۰۰۰ تومان',
        shippingLabel: 'هزینه ارسال VIP:',
        shippingVal: 'رایگان',
        totalLabel: 'مبلغ قابل پرداخت:',
        totalVal: '۱۲۴,۹۰۰,۰۰۰ تومان',
        checkoutBtn: 'تکمیل سفارش و پرداخت',
        items: [
          { id: '1', title: 'ساعت کرونوگراف تیتانیوم', size: '۴۲ میلی‌متر', price: '۸۸,۰۰۰,۰۰۰ تومان', qty: '۱' },
          { id: '2', title: 'کتانی لوکس چرم دست‌دوز', size: 'سایز ۴۲', price: '۲۴,۵۰۰,۰۰۰ تومان', qty: '۱' },
          { id: '3', title: 'عطر اختصاصی اووارا نوآر', size: '۱۰۰ میل', price: '۱۲,۴۰۰,۰۰۰ تومان', qty: '۱' },
        ],
      },
      profile: {
        title: 'پروفایل مشتری VIP',
        tier: 'عضو الماس اووارا (Black Tier)',
        ordersLabel: 'سفارش‌ها',
        ordersCount: '۱۲ سفارش',
        wishlistLabel: 'علاقه‌مندی‌ها',
        wishlistCount: '۲۸ کالا',
        pointsLabel: 'امتیاز باشگاه',
        pointsCount: '۴,۸۵۰ امتیاز',
        recentOrderTitle: 'آخرین سفارش در حال ارسال',
        orderNumber: 'سفارش #OV-84219',
        orderStatus: 'در دست سفیر VIP',
        deliveryTime: 'تحویل امروز تا ساعت ۱۸:۰۰',
        viewReceipt: 'مشاهده فاکتور و رهگیری زنده',
      },
    },
    en: {
      header: {
        greeting: 'Good morning,',
        userName: 'Erfan Moein',
        cartCount: '3',
        searchPlaceholder: 'Search 4,500+ luxury items...',
      },
      navigation: {
        home: 'Home',
        explore: 'Explore',
        detail: 'Detail',
        cart: 'Cart',
        profile: 'Profile',
      },
      categories: [
        { id: 0, name: 'Apparel', icon: '👔' },
        { id: 1, name: 'Digital', icon: '📱' },
        { id: 2, name: 'Watches', icon: '⌚' },
        { id: 3, name: 'Fragrance', icon: '✨' },
      ],
      banner: {
        badge: 'OVARA · AUTUMN DROP 09',
        title: 'Titanium Fall 2026 Collection',
        subtitle: 'Early access for members with complimentary VIP courier delivery',
        cta: 'Explore & Order',
      },
      featured: {
        title: 'Curated Drops Today',
        viewAll: 'View all',
        items: [
          {
            id: 'nb-9060',
            title: 'Nike Vaporfly Next% Limited',
            brand: 'Nike Lab',
            price: '$340.00',
            tag: 'Limited Drop',
            rating: '4.9',
          },
          {
            id: 'zenith-chrono',
            title: 'Zenith Chronomaster Titanium',
            brand: 'Zenith Studio',
            price: '$2,450.00',
            tag: 'Swiss Made',
            rating: '5.0',
          },
        ],
      },
      details: {
        back: 'Back',
        title: 'Handcrafted Atelier Leather Sneaker',
        brand: 'Ovara Atelier Limited',
        price: '$680.00',
        sizeLabel: 'Select Size (EU):',
        sizes: ['40', '41', '42', '43', '44'],
        materialLabel: 'Material Composition:',
        materials: 'Hand-burnished Italian calfskin with shock-absorbing ergonomic sole',
        specsLabel: 'Exclusive Inclusions:',
        specs: [
          'Cryptographic authenticity certificate with NFC chip',
          'Bespoke cedarwood storage box with engraved monogram',
          'Complimentary White-Glove VIP courier handover',
        ],
        addToCart: 'Add to Bag',
        instantCheckout: 'Express One-Swipe Checkout',
      },
      cart: {
        title: 'Express Shopping Bag',
        back: 'Back to Atelier',
        freeShipping: 'Complimentary VIP Courier Active',
        subtotalLabel: 'Subtotal:',
        subtotalVal: '$3,470.00',
        shippingLabel: 'VIP Shipping:',
        shippingVal: 'Free',
        totalLabel: 'Total Amount:',
        totalVal: '$3,470.00',
        checkoutBtn: 'Proceed to Secure Checkout',
        items: [
          { id: '1', title: 'Zenith Chronomaster Titanium', size: '42mm Case', price: '$2,450.00', qty: '1' },
          { id: '2', title: 'Atelier Leather Sneaker', size: 'Size 42', price: '$680.00', qty: '1' },
          { id: '3', title: 'Ovara Noir Extrait De Parfum', size: '100ml', price: '$340.00', qty: '1' },
        ],
      },
      profile: {
        title: 'VIP Client Profile',
        tier: 'Ovara Black Diamond Tier',
        ordersLabel: 'Orders',
        ordersCount: '12 Orders',
        wishlistLabel: 'Saved',
        wishlistCount: '28 Items',
        pointsLabel: 'Atelier Points',
        pointsCount: '4,850 Pts',
        recentOrderTitle: 'Active VIP Dispatch in Transit',
        orderNumber: 'Order #OV-84219',
        orderStatus: 'With VIP Courier',
        deliveryTime: 'Estimated delivery today by 18:00',
        viewReceipt: 'View Invoice & Live Telemetry',
      },
    },
  },

  arven: {
    fa: {
      header: {
        greeting: 'صبح بخیر،',
        userName: 'عرفان معین',
      },
      tabs: {
        think: 'تفکر',
        organize: 'مدیریت',
        plan: 'برنامه‌ریزی',
        create: 'سنتز داده',
      },
      think: {
        aiBadge: 'هسته عصبی هوشمند ARVEN',
        insight: 'جریان کاری امروز با ۹۰ دقیقه تمرکز عمیق روی معماری سیستم بهینه‌سازی شد.',
        focusScoreLabel: 'امتیاز تمرکز ذهنی',
        focusScoreVal: '۹۲٪',
        tasksRemaining: '۳ وظیفه اولویت‌دار',
        prioritiesTitle: 'اولویت‌های امروز',
        viewAll: 'مشاهده همه',
        priorities: [
          { title: 'طراحی معماری سیستم Arven', tag: 'طراحی رابط کاربری', time: '۱۰:۳۰' },
          { title: 'بررسی گزارش عملکرد و تله‌متری', tag: 'تحلیل داده', time: '۱۳:۰۰' },
          { title: 'جلسه هماهنگی تیم محصول', tag: 'جلسه آنلاین', time: '۱۶:۳۰' },
        ],
        quickAction: 'اجرای دستور هوشمند صوتی',
      },
      organize: {
        title: 'مدیریت وظایف هوشمند',
        segments: { today: 'امروز', upcoming: 'آینده', priority: 'مهم‌ترین‌ها' },
        progressLabel: 'پیشرفت اهداف روزانه: ۷۵٪',
        tasks: [
          { id: 101, title: 'تدوین راهنمای توکن‌های رنگی و متریال گلس', tag: 'سیستم دیزاین', tagColor: 'bg-indigo-50 text-indigo-700' },
          { id: 102, title: 'بررسی فیدبک‌های تست کاربردپذیری فاز اول', tag: 'تحقیق UX', tagColor: 'bg-emerald-50 text-emerald-700' },
          { id: 103, title: 'بهینه‌سازی زمان پاسخ‌دهی انیمیشن‌ها در موبایل', tag: 'فرانت‌اند', tagColor: 'bg-amber-50 text-amber-700' },
        ],
        addTask: 'افزودن وظیفه هوشمند با AI',
      },
      plan: {
        title: 'تقویم شناختی و بلوک‌های تمرکز',
        month: 'فروردین ۱۴۰۵',
        deepWorkBlock: 'بلوک تمرکز عمیق (Deep Work)',
        events: [
          { time: '۰۹:۰۰ - ۱۰:۳۰', title: 'مرور استراتژی طراحی رابط', category: 'طراحی', duration: '۹۰ دقیقه' },
          { time: '۱۱:۰۰ - ۱۲:۳۰', title: 'طراحی تعاملات پیشرفته Arven', category: 'تمرکز بالا', duration: '۹۰ دقیقه' },
          { time: '۱۴:۰۰ - ۱۵:۰۰', title: 'بررسی مدل هوش مصنوعی مولد', category: 'هوش مصنوعی', duration: '۶۰ دقیقه' },
        ],
      },
      create: {
        title: 'شبکه دانش و مستندات متصل',
        searchDocs: 'جستجو در یادداشت‌ها و گراف داده‌ها...',
        tags: [
          { id: 'all', label: 'همه اسناد' },
          { id: 'design', label: 'سیستم دیزاین' },
          { id: 'ai', label: 'الگوریتم‌ها' },
          { id: 'code', label: 'کدهای فرانت‌اند' },
        ],
        nodes: [
          { title: 'سند معماری سیستم Arven 2.0', desc: 'مستندات کامل توکن‌ها، متغیرهای متریال و رفتارهای حرکتی', connections: '۸ گره مرتبط', time: '۲ ساعت پیش' },
          { title: 'سنتز تحلیلی رفتارهای شناختی کاربر', desc: 'خلاصه بینش‌های هوش مصنوعی از ۲۴۰ جلسه تست عمیق', connections: '۵ گره مرتبط', time: 'دیروز' },
        ],
        newCanvas: 'ایجاد بوم طراحی و یادداشت جدید',
      },
    },
    en: {
      header: {
        greeting: 'Good morning,',
        userName: 'Erfan Moein',
      },
      tabs: {
        think: 'Think',
        organize: 'Organize',
        plan: 'Plan',
        create: 'Synthesize',
      },
      think: {
        aiBadge: 'ARVEN NEURAL CORE',
        insight: 'Daily workflow synthesized with a 90-min deep focus block for system design.',
        focusScoreLabel: 'Focus Score',
        focusScoreVal: '92%',
        tasksRemaining: '3 priority tasks',
        prioritiesTitle: "Today's Priorities",
        viewAll: 'View all',
        priorities: [
          { title: 'Design Arven Core System Architecture', tag: 'UI/UX Design', time: '10:30 AM' },
          { title: 'Review Telemetry & Performance Report', tag: 'Analytics', time: '01:00 PM' },
          { title: 'Product Design Sync & Review', tag: 'Team Sync', time: '04:30 PM' },
        ],
        quickAction: 'Run AI Neural Prompt',
      },
      organize: {
        title: 'Cognitive Task Breakdown',
        segments: { today: 'Today', upcoming: 'Upcoming', priority: 'High Priority' },
        progressLabel: 'Daily Target Progress: 75%',
        tasks: [
          { id: 101, title: 'Document Color Tokens & Glass Material Specs', tag: 'Design System', tagColor: 'bg-indigo-50 text-indigo-700' },
          { id: 102, title: 'Analyze Usability Test Feedback Batch 01', tag: 'UX Research', tagColor: 'bg-emerald-50 text-emerald-700' },
          { id: 103, title: 'Optimize Mobile Transition Latency < 16ms', tag: 'Frontend', tagColor: 'bg-amber-50 text-amber-700' },
        ],
        addTask: 'Add AI Smart Task',
      },
      plan: {
        title: 'Cognitive Time-Blocking',
        month: 'April 2026',
        deepWorkBlock: 'Scheduled Deep Work Block',
        events: [
          { time: '09:00 - 10:30 AM', title: 'Product Vision & UI Architecture', category: 'Design', duration: '90 mins' },
          { time: '11:00 - 12:30 PM', title: 'Advanced Interaction Engineering', category: 'Deep Focus', duration: '90 mins' },
          { time: '02:00 - 03:00 PM', title: 'Generative Synthesis Engine Sync', category: 'AI Lab', duration: '60 mins' },
        ],
      },
      create: {
        title: 'Connected Knowledge Graph',
        searchDocs: 'Search semantic notes & nodes...',
        tags: [
          { id: 'all', label: 'All Docs' },
          { id: 'design', label: 'Design Systems' },
          { id: 'ai', label: 'AI Algorithms' },
          { id: 'code', label: 'Frontend Specs' },
        ],
        nodes: [
          { title: 'Arven 2.0 System Architecture Blueprint', desc: 'Comprehensive token definitions, glass matrices & motion curves', connections: '8 linked nodes', time: '2h ago' },
          { title: 'Cognitive Ergonomics & Focus Telemetry', desc: 'AI synthesis summary from 240 in-depth session recordings', connections: '5 linked nodes', time: 'Yesterday' },
        ],
        newCanvas: 'New Cognitive Canvas',
      },
    },
  },

  nivra: {
    fa: {
      header: {
        greeting: 'صبح بخیر،',
        userName: 'عرفان معین',
        searchPlaceholder: 'جستجو در کشورها، شهرها و اقامتگاه‌ها...',
      },
      tabs: {
        discover: 'کاوش',
        plan: 'برنامه سفر',
        explore: 'راهنمای شهر',
        travel: 'رزرو و بلیت',
      },
      discover: {
        heroBadge: 'مقصد برتر هفته',
        heroTitle: 'کشف جزیره رویایی سانتورینی',
        heroSubtitle: 'سفری میان معماری سفید و آبی اژه با چشم‌انداز غروب طلایی',
        trendingTitle: 'مقصدهای محبوب مسافران',
        viewAll: 'مشاهده همه',
        destinations: [
          { name: 'استانبول', spots: '۴۲ اقامتگاه', img: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=300&q=80' },
          { name: 'رم', spots: '۳۸ اقامتگاه', img: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=300&q=80' },
          { name: 'بالی', spots: '۳۱ اقامتگاه', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=300&q=80' },
          { name: 'پاریس', spots: '۲۷ اقامتگاه', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=300&q=80' },
        ],
        curatedTitle: 'پیشنهاد ویژه نیورا برای شما',
        curatedCity: 'ویلای صخره‌ای آکروتیری، سانتورینی',
        curatedPrice: 'شبی ۳۲۰ دلار',
        curatedRating: '۴.۹۵ ★ (۱۲۸ نظر)',
      },
      plan: {
        title: 'برنامه زمانی هوشمند سفر',
        destination: 'سفر به سانتورینی و آتن',
        dates: '۱۵ تا ۲۲ اردیبهشت (۷ شب)',
        days: [
          { day: 'روز ۱', date: '۱۵ اردیبهشت', title: 'ورود و اقامت در اویا' },
          { day: 'روز ۲', date: '۱۶ اردیبهشت', title: 'گشت‌وگذار در سواحل صخره‌ای' },
          { day: 'روز ۳', date: '۱۷ اردیبهشت', title: 'تور قایق‌رانی در دهانه آتشفشان' },
        ],
        timeline: [
          { time: '۰۸:۴۵', title: 'پرواز TK-1845 به مقصد آتن', type: 'پرواز هوایی', location: 'فرودگاه بین‌المللی' },
          { time: '۱۴:۳۰', title: 'ترانسفر اختصاصی و تحویل ویلا', type: 'اقامتگاه VIP', location: 'اویا، سانتورینی' },
          { time: '۱۹:۰۰', title: 'رزرو شام در تراس غروب آفتاب', type: 'تجربه غذایی', location: 'رستوران صخره‌ای' },
        ],
      },
      explore: {
        city: 'سانتورینی',
        country: 'یونان',
        temp: '۲۴°C',
        weather: 'آفتابی و نسیم معتدل اژه',
        highlightsTitle: 'جاذبه‌های منتخب این مقصد',
        highlights: [
          { title: 'روستای تاریخی اویا و گنبدهای آبی', category: 'معماری و عکاسی', time: 'صبح زود' },
          { title: 'ساحل شنی قرمز آکروتیری', category: 'طبیعت‌گردی', time: 'ظهر' },
          { title: 'قلعه تاریخی و تماشای غروب خورشید', category: 'میراث فرهنگی', time: 'عصر' },
        ],
        bookExperience: 'رزرو تور اختصاصی این تجربه',
      },
      travel: {
        title: 'بلیت و کارت پرواز دیجیتال',
        bookingNumber: 'کد رهگیری: NV-94812',
        flightRoute: 'تهران (IKA) ➔ آتن (ATH)',
        flightCode: 'پرواز A3-840',
        gate: 'گیت B14',
        seat: 'صندلی 2A (بیزنس)',
        status: 'تایید شده و آماده پرواز',
        hotelTitle: 'ویلای لوکس صخره‌ای گرند کالدرا',
        hotelNights: '۵ شب اقامت با صبحانه اختصاصی',
        totalAmount: 'مبلغ کل پرداخت‌شده: ۱,۸۵۰ دلار',
        viewPass: 'مشاهده کارت پرواز در Apple Wallet',
      },
    },
    en: {
      header: {
        greeting: 'Good morning,',
        userName: 'Erfan Moein',
        searchPlaceholder: 'Search destinations, hotels & experiences...',
      },
      tabs: {
        discover: 'Discover',
        plan: 'Itinerary',
        explore: 'City Guide',
        travel: 'Booking',
      },
      discover: {
        heroBadge: 'DESTINATION OF THE WEEK',
        heroTitle: 'Discover Breathtaking Santorini',
        heroSubtitle: 'Explore whitewashed cliffs, sapphire waters and golden sunset vistas',
        trendingTitle: 'Trending Destinations',
        viewAll: 'View all',
        destinations: [
          { name: 'Istanbul', spots: '42 Stays', img: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=300&q=80' },
          { name: 'Rome', spots: '38 Stays', img: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=300&q=80' },
          { name: 'Bali', spots: '31 Stays', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=300&q=80' },
          { name: 'Paris', spots: '27 Stays', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=300&q=80' },
        ],
        curatedTitle: 'Nivra Curated Recommendation',
        curatedCity: 'Cliffside Caldera Villa, Santorini',
        curatedPrice: '$320 / night',
        curatedRating: '4.95 ★ (128 reviews)',
      },
      plan: {
        title: 'Smart Expedition Itinerary',
        destination: 'Santorini & Athens Expedition',
        dates: 'May 15 – May 22 (7 Nights)',
        days: [
          { day: 'Day 1', date: 'May 15', title: 'Arrival & Oia Check-in' },
          { day: 'Day 2', date: 'May 16', title: 'Caldera Cliffside Trek' },
          { day: 'Day 3', date: 'May 17', title: 'Volcanic Catamaran Cruise' },
        ],
        timeline: [
          { time: '08:45 AM', title: 'Flight TK-1845 to Athens', type: 'Aviation', location: 'Intl Airport' },
          { time: '02:30 PM', title: 'Private Helicopter Transfer to Oia', type: 'VIP Transit', location: 'Caldera Helipad' },
          { time: '07:00 PM', title: 'Sunset Cliffside Dinner Reservation', type: 'Culinary', location: 'Panorama Cliff' },
        ],
      },
      explore: {
        city: 'Santorini',
        country: 'Greece',
        temp: '24°C',
        weather: 'Sunny & Gentle Aegean Breeze',
        highlightsTitle: 'Curated Landmarks',
        highlights: [
          { title: 'Historic Oia Village & Blue Domes', category: 'Architecture', time: 'Morning' },
          { title: 'Akrotiri Volcanic Red Sand Beach', category: 'Nature', time: 'Afternoon' },
          { title: 'Byzantine Castle Sunset Viewpoint', category: 'Heritage', time: 'Evening' },
        ],
        bookExperience: 'Book Private Guided Experience',
      },
      travel: {
        title: 'Digital Boarding & Stay Confirmation',
        bookingNumber: 'Ref: NV-94812',
        flightRoute: 'London (LHR) ➔ Athens (ATH)',
        flightCode: 'Flight A3-840',
        gate: 'Gate B14',
        seat: 'Seat 2A (Business)',
        status: 'Confirmed & Boarding Ready',
        hotelTitle: 'Grand Caldera Luxury Cliff Villa',
        hotelNights: '5 Nights with Private Gourmet Breakfast',
        totalAmount: 'Total Amount Paid: $1,850.00',
        viewPass: 'Add to Apple Wallet',
      },
    },
  },

  varya: {
    fa: {
      header: {
        greeting: 'صبح بخیر،',
        userName: 'عرفان معین',
        date: 'چهارشنبه، ۲۵ فروردین',
      },
      tabs: {
        equilibrium: 'تعادل زیستی',
        vitality: 'فعالیت بدنی',
        circadian: 'ریتم خواب',
        intelligence: 'مربی هوشمند',
      },
      equilibrium: {
        scoreLabel: 'شاخص تعادل و ریکاوری زیستی',
        scoreVal: '۹۴٪',
        status: 'تعادل عالی سیستم عصبی خودمختار',
        vitals: {
          hrv: { label: 'تغییرپذیری ضربان (HRV)', val: '۷۸ میلی‌ثانیه', status: 'عالی' },
          heartRate: { label: 'ضربان استراحت (RHR)', val: '۵۴ bpm', status: 'بهینه' },
          hydration: { label: 'سطح آب‌رسانی سلولی', val: '۲.۴ لیتر', status: 'هدف تکمیل' },
        },
        insight: 'سطح آمادگی فیزیولوژیک شما برای جلسات تمرکز عمیق و فعالیت پرانرژی بسیار ایده‌آل است.',
      },
      vitality: {
        title: 'فعالیت و مصرف انرژی روزانه',
        calorieBurn: '۷۸۰ کیلوکالری',
        activeHours: '۱۱ ساعت فعالیت',
        flowState: '۱۴۰ دقیقه غوطه‌وری',
        activitiesTitle: 'جلسات ثبت‌شده امروز',
        activities: [
          { title: 'پیاده‌روی صبحگاهی و تمرین تنفس', duration: '۴۵ دقیقه', burn: '۲۴۰ کالری', time: '۰۷:۳۰' },
          { title: 'تمرین کششی و یوگای بازیابی', duration: '۳۰ دقیقه', burn: '۱۸۰ کالری', time: '۱۲:۱۵' },
        ],
      },
      circadian: {
        title: 'معماری خواب و ریتم شبانه‌روزی',
        sleepScore: '۹۲ امتیاز خواب',
        sleepDuration: '۷ ساعت و ۴۵ دقیقه',
        remCycle: '۲ ساعت و ۱۰ دقیقه (REM)',
        deepSleep: '۱ ساعت و ۵۰ دقیقه (خواب عمیق)',
        efficiency: 'کارایی خواب: ۹۶٪',
        chronotypeInsight: 'ریتم ملاتونین شما با چرخه ۲۴ ساعته طبیعی کاملاً همگام است.',
      },
      intelligence: {
        title: 'راهنمای هوشمند تندرستی Veyra',
        coachName: 'دستیار بیومتریک AI',
        message: 'بر اساس بررسی HRV و شاخص خستگی، پیشنهاد می‌شود ساعت ۱۶:۰۰ یک استراحت ۵ دقیقه‌ای برای تمرین تنفس پرانایاما داشته باشید.',
        recommendationTitle: 'پیشنهادهای شخصی‌سازی‌شده',
        recommendations: [
          { title: 'تنفس ۴-۷-۸ برای کاهش هورمون کورتیزول', duration: '۵ دقیقه', impact: 'کاهش ۲۸٪ استرس' },
          { title: 'کشش ملایم مهره‌ها و شانه', duration: '۸ دقیقه', impact: 'بهبود گردش خون' },
        ],
        startSession: 'شروع جلسه تمرین با راهنمای صوتی',
      },
    },
    en: {
      header: {
        greeting: 'Good morning,',
        userName: 'Erfan Moein',
        date: 'Wednesday, Apr 15',
      },
      tabs: {
        equilibrium: 'Equilibrium',
        vitality: 'Vitality',
        circadian: 'Circadian',
        intelligence: 'AI Coach',
      },
      equilibrium: {
        scoreLabel: 'Circadian Equilibrium Score',
        scoreVal: '94%',
        status: 'Optimal Autonomic Balance',
        vitals: {
          hrv: { label: 'Heart Rate Variability', val: '78 ms', status: 'Prime' },
          heartRate: { label: 'Resting Heart Rate', val: '54 bpm', status: 'Optimal' },
          hydration: { label: 'Cellular Hydration', val: '2.4 L', status: 'Goal Met' },
        },
        insight: 'Physiological readiness is at peak state for high-cognitive focus and creative output.',
      },
      vitality: {
        title: 'Kinetic Flow & Energy Output',
        calorieBurn: '780 kcal',
        activeHours: '11 Active Hours',
        flowState: '140 mins Flow',
        activitiesTitle: 'Logged Sessions Today',
        activities: [
          { title: 'Morning Sunlight Walk & Breathwork', duration: '45 mins', burn: '240 kcal', time: '07:30 AM' },
          { title: 'Restorative Spinal Mobility & Flow', duration: '30 mins', burn: '180 kcal', time: '12:15 PM' },
        ],
      },
      circadian: {
        title: 'Sleep Architecture & Recovery',
        sleepScore: '92 Sleep Score',
        sleepDuration: '7h 45m Total Rest',
        remCycle: '2h 10m REM Cycle',
        deepSleep: '1h 50m Delta Deep Sleep',
        efficiency: '96% Sleep Efficiency',
        chronotypeInsight: 'Your melatonin and cortisol cycles are synchronized with solar daylight.',
      },
      intelligence: {
        title: 'Veyra Biometric Companion',
        coachName: 'AI Wellness Guide',
        message: 'Based on your HRV readiness and screen exposure, a 5-minute diaphragmatic breathing reset at 4:00 PM will optimize evening recovery.',
        recommendationTitle: 'Prescriptive Interventions',
        recommendations: [
          { title: '4-7-8 Parasympathetic Vagal Reset', duration: '5 mins', impact: '-28% Stress Index' },
          { title: 'Postural Spine & Scapula Mobility', duration: '8 mins', impact: '+35% Circulation' },
        ],
        startSession: 'Begin Guided Audio Session',
      },
    },
  },

  zarvand: {
    fa: {
      header: {
        portfolioName: 'خزانه‌داری سازمانی زاروند',
        networkStatus: 'شبکه امن متصل · امنیت سطح ۳',
      },
      tabs: {
        liquidity: 'نقدینگی',
        portfolio: 'دارایی‌ها',
        analytics: 'تحلیل بودجه',
        intelligence: 'امنیت و کارت',
      },
      liquidity: {
        balanceLabel: 'مجموع دارایی‌های خزانه‌داری',
        balanceVal: '۴,۸۹۲,۱۲۰.۰۰ دلار',
        change24h: '+۳.۲۴٪ (۲۴ ساعت گذشته)',
        quickActions: { send: 'انتقال امن', receive: 'دریافت دارایی', swap: 'تبدیل آنی', bridge: 'پل بین‌شبکه‌ای' },
        routingTitle: 'مسیرهای نقدینگی و تسویه بلادرنگ',
        routers: [
          { rail: 'کانال نقدینگی بیت‌کوین (BTC Vault)', status: 'فعال', latency: '۴ میلی‌ثانیه', volume: '۲,۴۵۰,۰۰۰ دلار' },
          { rail: 'خزانه استیکینگ اتریوم (ETH Staking)', status: 'سودآور', latency: '۲ میلی‌ثانیه', volume: '۱,۲۴۰,۰۰۰ دلار' },
          { rail: 'استخر استیبل‌کوین سازمانی (USDT/USDC)', status: 'فعال', latency: '۱ میلی‌ثانیه', volume: '۱,۲۰۲,۱۲۰ دلار' },
        ],
      },
      portfolio: {
        title: 'تخصیص سبد دارایی‌های دیجیتال',
        totalAUM: 'کل دارایی تحت مدیریت: ۴.۸۹ میلیون دلار',
        assets: [
          { symbol: 'BTC', name: 'بیت‌کوین خزانه‌داری', allocation: '۵۰.۱٪', val: '$۲,۴۵۰,۰۰۰', change: '+۴.۲٪' },
          { symbol: 'ETH', name: 'اتریوم اعتبارسنجی', allocation: '۲۵.۳٪', val: '$۱,۲۴۰,۰۰۰', change: '+۲.۸٪' },
          { symbol: 'USDT', name: 'ذخیره دلاری آنی', allocation: '۲۴.۶٪', val: '$۱,۲۰۲,۱۲۰', change: '۰.۰٪' },
        ],
      },
      analytics: {
        title: 'تله‌متری جریان نقدینگی و هزینه‌ها',
        monthlyInflow: 'ورودی ماهانه: ۸۴۰,۰۰۰ دلار',
        monthlyOutflow: 'خروجی ماهانه: ۳۲۰,۰۰۰ دلار',
        budgetBounds: 'محدوده بودجه عملیاتی: بهینه',
        categories: [
          { name: 'ذخیره دارایی خزانه‌داری', percent: '۵۰٪', val: '$۲,۴۵۰,۰۰۰', color: '#D97706' },
          { name: 'عملیات شبکه و کارمزد', percent: '۲۵٪', val: '$۱,۲۴۰,۰۰۰', color: '#2563EB' },
          { name: 'تسویه نقدینگی شرکتی', percent: '۲۵٪', val: '$۱,۲۰۲,۱۲۰', color: '#10B981' },
        ],
      },
      intelligence: {
        title: 'مرکز امنیت چندامضایی و کارت تیتانیوم',
        aiAuditBadge: 'قراردادهای هوشمند تاییدشده',
        auditStatus: 'بدون ریسک امنیتی (Audit: 100%)',
        riskScore: 'شاخص ریسک سیستم: صفر',
        multiSigStatus: 'تایید چندامضایی ۳ از ۵ فعال',
        quorum: 'حدنصاب امضاکنندگان سازمانی برقرار است',
        titaniumCard: {
          title: 'کارت فیزیکی تیتانیوم زاروند',
          holder: 'ERFAN MOEIN · PRINCIPAL',
          limit: 'سقف تراکنش روزانه: ۵۰۰,۰۰۰ دلار',
          freeze: 'قفل امنیتی آنی کارت',
        },
      },
    },
    en: {
      header: {
        portfolioName: 'ZARVAND TREASURY CONSOLE',
        networkStatus: 'Hardware Enclave Active · Tier 3 Multi-Sig',
      },
      tabs: {
        liquidity: 'Liquidity',
        portfolio: 'Portfolio',
        analytics: 'Analytics',
        intelligence: 'Security & Card',
      },
      liquidity: {
        balanceLabel: 'Total Treasury Reserve Balance',
        balanceVal: '$4,892,120.00',
        change24h: '+3.24% (24h yield)',
        quickActions: { send: 'Transfer', receive: 'Deposit', swap: 'Instant Swap', bridge: 'Bridge' },
        routingTitle: 'Real-Time Multi-Rail Liquidity Routing',
        routers: [
          { rail: 'Institutional Bitcoin Vault (BTC)', status: 'Active', latency: '4ms', volume: '$2,450,000' },
          { rail: 'Ethereum Staking Node Quorum', status: 'Yielding', latency: '2ms', volume: '$1,240,000' },
          { rail: 'Institutional Stable Pool (USDC/USDT)', status: 'Active', latency: '1ms', volume: '$1,202,120' },
        ],
      },
      portfolio: {
        title: 'Institutional Asset Allocation',
        totalAUM: 'Total AUM: $4.89M Sovereign Reserve',
        assets: [
          { symbol: 'BTC', name: 'Bitcoin Reserve Vault', allocation: '50.1%', val: '$2,450,000', change: '+4.2%' },
          { symbol: 'ETH', name: 'Ethereum Staking Nodes', allocation: '25.3%', val: '$1,240,000', change: '+2.8%' },
          { symbol: 'USDT', name: 'Instant Dollar Reserve', allocation: '24.6%', val: '$1,202,120', change: '0.0%' },
        ],
      },
      analytics: {
        title: 'Cashflow & Budget Telemetry',
        monthlyInflow: 'Monthly Inflow: $840,000',
        monthlyOutflow: 'Monthly Outflow: $320,000',
        budgetBounds: 'Operational Budget Bounds: Optimal',
        categories: [
          { name: 'Sovereign Treasury Vault', percent: '50%', val: '$2,450,000', color: '#D97706' },
          { name: 'Network Infrastructure', percent: '25%', val: '$1,240,000', color: '#2563EB' },
          { name: 'Corporate Liquidity Rail', percent: '25%', val: '$1,202,120', color: '#10B981' },
        ],
      },
      intelligence: {
        title: 'Multi-Signature Governance & Titanium Card',
        aiAuditBadge: 'Smart Contracts Verified',
        auditStatus: 'Formal Audit Passed: 100%',
        riskScore: 'System Threat Level: 0.0%',
        multiSigStatus: '3-of-5 Multi-Sig Authorization',
        quorum: 'Governance Quorum Met',
        titaniumCard: {
          title: 'Zarvand Titanium Black Card',
          holder: 'ERFAN MOEIN · PRINCIPAL',
          limit: 'Daily Limit: $500,000 USD',
          freeze: 'Emergency Hardware Freeze',
        },
      },
    },
  },
};

export const getProductLocale = (lang: Language) => {
  return {
    ovara: PRODUCT_LOCALES.ovara[lang],
    arven: PRODUCT_LOCALES.arven[lang],
    nivra: PRODUCT_LOCALES.nivra[lang],
    varya: PRODUCT_LOCALES.varya[lang],
    zarvand: PRODUCT_LOCALES.zarvand[lang],
  };
};
