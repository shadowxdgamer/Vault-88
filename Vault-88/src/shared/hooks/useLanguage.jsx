import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    // Main Menu
    mainMenu: {
      title: 'Vault',
      titleAccent: '88',
      subtitle: 'Logic Puzzle',
      play: 'Play',
      playSubtitle: 'Initiate Sequence',
      statistics: 'Statistics',
      roadmap: 'Roadmap',
      buyMeACoffee: 'Buy Me a Coffee',
      sourceCode: 'Source Code',
      settings: 'Settings',
      footer: 'SECURE CONNECTION ESTABLISHED',
      version: 'V 1.0.0',
    },
    
    // Difficulty
    difficulty: {
      title: 'Select Difficulty',
      easy: 'Easy',
      easyDesc: 'Perfect for beginners',
      medium: 'Medium',
      mediumDesc: 'A balanced challenge',
      hard: 'Hard',
      hardDesc: 'For expert hackers',
      digits: 'digits',
      baseScore: 'Base Score',
      points: 'pts',
    },
    
    // Game
    game: {
      title: 'Crack the Code',
      unlock: 'Unlock',
      unlocked: 'UNLOCKED!',
      accessDenied: 'ACCESS DENIED. TRY AGAIN.',
      requestHint: 'Request Hint',
      hintCost: '-25 pts',
      noHints: 'No more hints available!',
      hints: {
        'correct-position': 'Exactly one digit is in the correct position.',
        'correct-wrong-position': 'Single digit needs repositioning.',
        'two-wrong-positions': 'Two digits are present but misplaced.',
        'all-wrong': 'All digits are incorrect.',
      },
    },
    
    // Win Modal
    win: {
      title: 'UNLOCKED!',
      subtitle: 'Security system cracked',
      newHighScore: 'New High Score!',
      finalScore: 'Final Score',
      best: 'Best',
      baseScore: 'Base Score',
      wrongAttempts: 'Wrong Attempts',
      hintsUsed: 'Hints Used',
      timeBonus: 'Time Bonus',
      perfectBonus: 'Perfect Bonus',
      winStreak: 'Win Streak!',
      playAgain: 'Play Again',
      mainMenu: 'Main Menu',
    },
    
    // Pause Menu
    pause: {
      paused: 'PAUSED',
      resume: 'Resume',
      restart: 'Restart',
      exit: 'Exit to Menu',
    },
    
    // Settings
    settings: {
      title: 'Settings',
      audio: 'Audio',
      bgmVolume: 'Background Music',
      sfxVolume: 'Sound Effects',
      language: 'Language',
      selectLanguage: 'Select Language',
      autoSave: 'Changes are saved automatically',
      theme: 'Theme',
      themes: {
        wood: 'Wood',
        cyberpunk: 'Cyberpunk',
        arcane: 'Arcane',
        glass: 'Glass',
      },
    },
    
    // Statistics
    stats: {
      title: 'Statistics',
      gamesPlayed: 'Games Played',
      totalWins: 'Total Wins',
      winRate: 'Win Rate',
      streaks: 'Streaks',
      currentStreak: 'Current Streak',
      bestStreak: 'Best Streak',
      perfectWins: 'Perfect Wins',
      highScores: 'High Scores',
      performanceByDifficulty: 'Performance by Difficulty',
      performance: 'Performance by Difficulty',
      played: 'Played',
      wins: 'Wins',
      achievements: 'Achievements',
    },
    
    // Roadmap
    roadmap: {
      title: 'Roadmap',
      subtitle: 'Exciting features coming to Vault 88! Stay tuned for updates.',
      status: {
        planned: 'Planned',
        'in-progress': 'In Progress',
        completed: 'Completed',
      },
      leaderboards: {
        title: 'Online Leaderboards',
        desc: 'Compete with players worldwide and climb the ranks.',
        feat1: 'Global rankings with real-time updates',
        feat2: 'Daily, weekly, and all-time high scores',
        feat3: 'Country-specific leaderboards',
        feat4: 'Achievement showcases on profiles',
      },
      pvp: {
        title: 'PvP Mode',
        desc: 'Challenge friends or random opponents in real-time battles.',
        feat1: 'Real-time multiplayer head-to-head',
        feat2: 'Matchmaking based on skill level',
        feat3: 'Live spectator mode',
        feat4: 'Ranked competitive seasons',
      },
      modes: {
        title: 'New Game Modes',
        desc: 'Experience Vault 88 in exciting new ways.',
        feat1: 'Time Attack: Solve codes under pressure',
        feat2: 'Zen Mode: Relax without timers',
        feat3: 'Daily Challenge: Unique daily puzzles',
        feat4: 'Marathon: Progressive difficulty',
        feat5: 'Custom Codes: Create your own',
      },
      social: {
        title: 'Social Features',
        desc: 'Connect with friends and share your achievements.',
        feat1: 'Add and challenge friends',
        feat2: 'Share victories on social media',
        feat3: 'Watch replays of top players',
        feat4: 'Community puzzles and contests',
      },
      progression: {
        title: 'Progression System',
        desc: 'Level up and unlock exclusive rewards.',
        feat1: 'Player levels and XP system',
        feat2: 'Unlockable themes and sounds',
        feat3: 'Profile customization options',
        feat4: 'Season pass with rewards',
      },
      footerNote: 'These features are in active development. Follow our GitHub for updates and contribute your ideas!',
    },
  },
  
  ar: {
    // Main Menu
    mainMenu: {
      title: 'قبو',
      titleAccent: '88',
      subtitle: 'لعبة منطقية',
      play: 'العب',
      playSubtitle: 'بدء التسلسل',
      statistics: 'الإحصائيات',      roadmap: 'خارطة الطريق',      buyMeACoffee: 'ادعمني بقهوة',
      sourceCode: 'الكود المصدري',
      settings: 'الإعدادات',
      footer: 'تم إنشاء اتصال آمن',
      version: 'الإصدار 1.0.0',
    },
    
    // Difficulty
    difficulty: {
      title: 'اختر المستوى',
      easy: 'سهل',
      easyDesc: 'مثالي للمبتدئين',
      medium: 'متوسط',
      mediumDesc: 'تحدي متوازن',
      hard: 'صعب',
      hardDesc: 'للهاكرز المحترفين',
      digits: 'أرقام',
      baseScore: 'النقاط الأساسية',
      points: 'نقاط',
    },
    
    // Game
    game: {
      title: 'اكسر الشفرة',
      unlock: 'فتح',
      unlocked: 'تم الفتح!',
      accessDenied: 'تم رفض الوصول. حاول مرة أخرى.',
      requestHint: 'طلب تلميح',
      hintCost: '-25 نقطة',
      noHints: 'لا توجد تلميحات متاحة!',      hints: {
        'correct-position': 'رقم واحد بالضبط في الموضع الصحيح.',
        'correct-wrong-position': 'رقم واحد يحتاج إلى إعادة تموضع.',
        'two-wrong-positions': 'رقمان موجودان لكن في مواضع خاطئة.',
        'all-wrong': 'جميع الأرقام غير صحيحة.',
      },    },
    
    // Win Modal
    win: {
      title: 'تم الفتح!',
      subtitle: 'تم كسر نظام الأمان',
      newHighScore: 'رقم قياسي جديد!',
      finalScore: 'النتيجة النهائية',
      best: 'الأفضل',
      baseScore: 'النقاط الأساسية',
      wrongAttempts: 'المحاولات الخاطئة',
      hintsUsed: 'التلميحات المستخدمة',
      timeBonus: 'مكافأة الوقت',
      perfectBonus: 'مكافأة الكمال',
      winStreak: 'سلسلة انتصارات!',
      playAgain: 'العب مرة أخرى',
      mainMenu: 'القائمة الرئيسية',
    },
    
    // Pause Menu
    pause: {
      paused: 'متوقف',
      resume: 'استئناف',
      restart: 'إعادة',
      exit: 'خروج للقائمة',
    },
    
    // Settings
    settings: {
      title: 'الإعدادات',
      audio: 'الصوت',
      bgmVolume: 'موسيقى الخلفية',
      sfxVolume: 'المؤثرات الصوتية',
      language: 'اللغة',
      selectLanguage: 'اختر اللغة',
      autoSave: 'يتم حفظ التغييرات تلقائياً',
      theme: 'المظهر',
      themes: {
        wood: 'خشبي',
        cyberpunk: 'سايبربانك',
        arcane: 'سحري',
        glass: 'زجاجي',
      },
    },
    
    // Statistics
    stats: {
      title: 'الإحصائيات',
      gamesPlayed: 'الألعاب الملعوبة',
      totalWins: 'إجمالي الانتصارات',
      winRate: 'معدل الفوز',
      streaks: 'السلاسل',
      currentStreak: 'السلسلة الحالية',
      bestStreak: 'أفضل سلسلة',
      perfectWins: 'الانتصارات الكاملة',
      highScores: 'أعلى النقاط',
      performanceByDifficulty: 'الأداء حسب المستوى',
      performance: 'الأداء حسب المستوى',
      played: 'ملعوبة',
      wins: 'انتصارات',
      achievements: 'الإنجازات',
    },
    
    // Roadmap
    roadmap: {
      title: 'خارطة الطريق',
      subtitle: 'ميزات مثيرة قادمة إلى الخزنة 88! ابق على اطلاع.',
      status: {
        planned: 'مخطط',
        'in-progress': 'قيد التطوير',
        completed: 'مكتمل',
      },
      leaderboards: {
        title: 'لوحة المتصدرين',
        desc: 'تنافس مع اللاعبين حول العالم واصعد إلى القمة.',
        feat1: 'ترتيب عالمي بتحديثات فورية',
        feat2: 'نقاط يومية وأسبوعية وعلى مدى الزمن',
        feat3: 'لوحات متصدرين حسب الدولة',
        feat4: 'عرض الإنجازات على الملف الشخصي',
      },
      pvp: {
        title: 'وضع اللعب الجماعي',
        desc: 'تحدى الأصدقاء أو منافسين عشوائيين في معارك فورية.',
        feat1: 'منافسة فورية متعددة اللاعبين',
        feat2: 'موازنة بناءً على مستوى المهارة',
        feat3: 'وضع المشاهدة المباشرة',
        feat4: 'مواسم تنافسية بترتيب',
      },
      modes: {
        title: 'أنماط لعب جديدة',
        desc: 'استمتع بالخزنة 88 بطرق جديدة ومثيرة.',
        feat1: 'هجوم زمني: حل الشفرات تحت ضغط',
        feat2: 'وضع السلام: استرخي بدون مؤقت',
        feat3: 'تحدي يومي: أحجية يومية فريدة',
        feat4: 'ماراثون: صعوبة تصاعدية',
        feat5: 'شفرات مخصصة: أنشئ شفراتك',
      },
      social: {
        title: 'ميزات اجتماعية',
        desc: 'تواصل مع الأصدقاء وشارك إنجازاتك.',
        feat1: 'أضف وتحدى الأصدقاء',
        feat2: 'شارك انتصاراتك على مواقع التواصل',
        feat3: 'شاهد إعادة أفضل اللاعبين',
        feat4: 'أحجية ومسابقات مجتمعية',
      },
      progression: {
        title: 'نظام التقدم',
        desc: 'ارتق في المستوى وافتح مكافآت حصرية.',
        feat1: 'مستويات ونقاط خبرة',
        feat2: 'سمات وأصوات قابلة للفتح',
        feat3: 'خيارات تخصيص الملف',
        feat4: 'بطاقة موسمية مع مكافآت',
      },
      footerNote: 'هذه الميزات قيد التطوير النشط. تابع GitHub للتحديثات وشارك أفكارك!',
    },
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('vault88-language');
    return saved || 'en';
  });

  useEffect(() => {
    localStorage.setItem('vault88-language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) break;
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
