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
      statistics: 'Statistics',
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
      performance: 'Performance by Difficulty',
      played: 'Played',
      wins: 'Wins',
      achievements: 'Achievements',
    },
  },
  
  ar: {
    // Main Menu
    mainMenu: {
      title: 'قبو',
      titleAccent: '88',
      subtitle: 'لعبة منطقية',
      play: 'العب',
      statistics: 'الإحصائيات',
      buyMeACoffee: 'ادعمني بقهوة',
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
      performance: 'الأداء حسب المستوى',
      played: 'ملعوبة',
      wins: 'انتصارات',
      achievements: 'الإنجازات',
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
