import { useSound } from '../../shared/hooks/useSound';
import { useLanguage } from '../../shared/hooks/useLanguage';
import './Roadmap.css';

export function RoadmapScreen({ onBack }) {
  const { playClick } = useSound();
  const { t } = useLanguage();

  const handleBack = () => {
    playClick();
    onBack();
  };

  const roadmapItems = [
    {
      id: 'leaderboards',
      icon: 'emoji_events',
      title: t('roadmap.leaderboards.title'),
      description: t('roadmap.leaderboards.desc'),
      status: 'planned',
      features: [
        t('roadmap.leaderboards.feat1'),
        t('roadmap.leaderboards.feat2'),
        t('roadmap.leaderboards.feat3'),
        t('roadmap.leaderboards.feat4'),
      ]
    },
    {
      id: 'pvp',
      icon: 'sports_esports',
      title: t('roadmap.pvp.title'),
      description: t('roadmap.pvp.desc'),
      status: 'planned',
      features: [
        t('roadmap.pvp.feat1'),
        t('roadmap.pvp.feat2'),
        t('roadmap.pvp.feat3'),
        t('roadmap.pvp.feat4'),
      ]
    },
    {
      id: 'modes',
      icon: 'extension',
      title: t('roadmap.modes.title'),
      description: t('roadmap.modes.desc'),
      status: 'planned',
      features: [
        t('roadmap.modes.feat1'),
        t('roadmap.modes.feat2'),
        t('roadmap.modes.feat3'),
        t('roadmap.modes.feat4'),
        t('roadmap.modes.feat5'),
      ]
    },
    {
      id: 'social',
      icon: 'group',
      title: t('roadmap.social.title'),
      description: t('roadmap.social.desc'),
      status: 'planned',
      features: [
        t('roadmap.social.feat1'),
        t('roadmap.social.feat2'),
        t('roadmap.social.feat3'),
        t('roadmap.social.feat4'),
      ]
    },
    {
      id: 'progression',
      icon: 'trending_up',
      title: t('roadmap.progression.title'),
      description: t('roadmap.progression.desc'),
      status: 'planned',
      features: [
        t('roadmap.progression.feat1'),
        t('roadmap.progression.feat2'),
        t('roadmap.progression.feat3'),
        t('roadmap.progression.feat4'),
      ]
    },
  ];

  return (
    <div className="roadmap-screen">
      {/* Background */}
      <div className="roadmap-background">
        <img
          alt="Background"
          className="roadmap-background-image"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNTosZ9_7WuEyufglHnWkO-HeAbAK7Fag8VY0f64Wz8POUE9GRNCdgxOjt4uT0AdgVWVQ6164JCCKkl5X-Ctka3Oe2-iDyXx54EJcVBewgq5mpHMB-Ky40Ghs53HDHsngmfJ5B0iILfNAmRr76f6W6MlrB8m5exZ5GFipuzghSdj0yrGuqsrSYTI4PgsJPKKhJia8ynMwGdry86FBUFEzLu6JqujNpfDfWD1FZ37LcFxDxcR7Z-rJqxvPxRnKmGiDJEYTCTS650QY"
        />
        <div className="roadmap-background-overlay"></div>
      </div>

      {/* Main Container */}
      <div className="roadmap-container">
        {/* Header */}
        <header className="roadmap-header">
          <button className="back-button" onClick={handleBack}>
            <span className="material-icons-round">arrow_back</span>
          </button>
          <h1 className="roadmap-title">{t('roadmap.title')}</h1>
          <div style={{ width: '40px' }}></div>
        </header>

        {/* Content */}
        <main className="roadmap-main custom-scrollbar">
          <div className="roadmap-intro">
            <p className="roadmap-subtitle">{t('roadmap.subtitle')}</p>
          </div>

          <div className="roadmap-grid">
            {roadmapItems.map((item) => (
              <div key={item.id} className="roadmap-card glass-panel">
                <div className="roadmap-card-header">
                  <div className="roadmap-card-icon-container">
                    <span className="material-icons-round roadmap-card-icon">
                      {item.icon}
                    </span>
                  </div>
                  <div className="roadmap-card-title-section">
                    <h3 className="roadmap-card-title">{item.title}</h3>
                    <span className={`roadmap-status ${item.status}`}>
                      {t(`roadmap.status.${item.status}`)}
                    </span>
                  </div>
                </div>
                <p className="roadmap-card-description">{item.description}</p>
                <ul className="roadmap-card-features">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="roadmap-feature-item">
                      <span className="material-icons-round feature-check">check_circle</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="roadmap-footer-note glass-panel">
            <span className="material-icons-round">info</span>
            <p>{t('roadmap.footerNote')}</p>
          </div>
        </main>
      </div>
    </div>
  );
}
