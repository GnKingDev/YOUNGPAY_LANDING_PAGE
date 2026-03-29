import { useState, useEffect, useRef } from 'react';

const features = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="4" y="10" width="40" height="28" rx="4" stroke="currentColor" strokeWidth="2.5" />
        <line x1="4" y1="20" x2="44" y2="20" stroke="currentColor" strokeWidth="2.5" />
        <rect x="8" y="26" width="12" height="4" rx="1" fill="currentColor" opacity="0.4" />
        <rect x="8" y="32" width="8" height="2" rx="1" fill="currentColor" opacity="0.25" />
      </svg>
    ),
    title: 'Carte Visa virtuelle & physique',
    text: 'Votre carte bancaire Visa en 5 minutes. Payez en ligne, retirez aux GAB et achetez en magasin partout dans le monde.',
    tag: 'Visa',
    accent: 'blue',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="6" y="6" width="36" height="36" rx="8" stroke="currentColor" strokeWidth="2.5" />
        <path d="M18 18h12v12H18z" fill="currentColor" opacity="0.3" />
        <circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M15 15l4 4M29 15l-4 4M15 33l4-4M29 33l-4-4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Cartes cadeaux digitales',
    text: 'iTunes, Netflix, PlayStation, Steam, Google Play : rechargez vos plateformes préférées instantanément, sans carte étrangère, directement en GNF.',
    tag: 'Gift Cards',
    accent: 'teal',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M8 38V16l16-8 16 8v22" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <rect x="18" y="26" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="18" r="3" fill="currentColor" opacity="0.4" />
        <path d="M4 38h40" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    ),
    title: 'Billetterie & événements',
    text: 'Concerts, matchs, festivals en Guinée : achetez vos billets en quelques secondes et recevez votre QR code directement sur YoungPay.',
    tag: 'Tickets',
    accent: 'amber',
  },
];

const stats = [
  { value: '100%', label: 'Made in Guinea' },
  { value: '99.9%', label: 'Disponibilite' },
  { value: '<5min', label: 'Carte virtuelle prete' },
  { value: '0 GNF', label: "Frais d'ouverture" },
];

const faqs = [
  { q: 'Comment recharger mon portefeuille ?', a: 'Depuis votre tableau de bord, choisissez Orange Money, entrez le montant et confirmez. Votre solde est credite instantanement.' },
  { q: 'Combien coute une carte virtuelle ?', a: "L'emission d'une carte virtuelle Visa coute 50 000 GNF. Elle est prete en moins de 5 minutes apres la demande." },
  { q: 'Comment obtenir une carte physique ?', a: 'Commandez depuis le menu Cartes, renseignez votre adresse de livraison. La carte est livree sous 5 a 7 jours ouvrables.' },
  { q: "J'ai oublie mon code PIN, que faire ?", a: "Allez dans Securite puis Modifier le code PIN. Une verification biometrique ou par SMS vous permettra d'en definir un nouveau." },
  { q: 'Comment verifier mon compte (KYC) ?', a: "Depuis votre profil, ouvrez Verification d'identite. Envoyez votre document d'identite guineen et un selfie. La validation est rapide." },
];

const steps = [
  { num: '01', title: 'Creez votre compte', desc: 'Inscription en 2 minutes avec votre numero guineen.', icon: '→' },
  { num: '02', title: 'Verifiez votre identite', desc: "Envoyez votre piece d'identite et un selfie.", icon: '→' },
  { num: '03', title: 'Rechargez via Orange Money', desc: 'Alimentez votre portefeuille instantanement.', icon: '→' },
  { num: '04', title: 'Payez partout', desc: 'Utilisez votre carte Visa dans le monde entier.', icon: '✓' },
];

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function FaqItem({ q, a, idx }) {
  const [open, setOpen] = useState(idx === 0);
  return (
    <div className={`faq-card${open ? ' open' : ''}`} onClick={() => setOpen(!open)}>
      <div className="faq-q">
        <span>{q}</span>
        <div className="faq-chevron">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <div className="faq-a"><p>{a}</p></div>
    </div>
  );
}

export default function App() {
  const [heroRef, heroVis] = useInView(0.05);
  const [featRef, featVis] = useInView();
  const [stepsRef, stepsVis] = useInView();
  const [statsRef, statsVis] = useInView();
  const [faqRef, faqVis] = useInView();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <div className="page">
      {/* ── NAV ── */}
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <a href="#" className="nav-logo">
          <img src="/assets/images/logo_full.png" alt="YoungPay" />
        </a>
        <div className="nav-links">
          <a href="#features">Services</a>
          <a href="#steps">Comment ca marche</a>
          <a href="#faq">FAQ</a>
        </div>
        <a href="#download" className="nav-cta">
          <span>Telecharger l'app</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8.5h10M9.5 5l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className={`hero${heroVis ? ' in' : ''}`} ref={heroRef}>
        {/* decorative blobs */}
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-dot-grid" />

        <div className="hero-content">
          <h1>
            Gerez vos cartes<br />
            virtuelles et physiques avec <span className="h1-accent">simplicite</span>
          </h1>
          <p className="hero-desc">
            Carte Visa, cartes digitales, billets d'evenements : payez et achetez partout, depuis une seule application.
          </p>
          <div className="hero-actions">
            <a href="#app-store" className="btn-store">
              <svg className="btn-store-icon" viewBox="0 0 24 24"><path d="M16.7 12.8c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.7-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8-.8 0-1.9-.8-3.1-.8-1.6 0-3 .9-3.8 2.2-1.7 2.8-.4 7 1.2 9.2.8 1.1 1.7 2.2 2.9 2.1 1.1 0 1.6-.7 3-.7 1.4 0 1.9.7 3 .7 1.2 0 2-.9 2.8-2 .9-1.2 1.3-2.4 1.3-2.5 0 0-2.6-1-2.6-3.9zM14.5 6.2c.6-.7 1-1.7.9-2.7-.9 0-2 .6-2.7 1.3-.6.7-1.1 1.7-1 2.7 1 .1 2.1-.5 2.8-1.3z" fill="currentColor"/></svg>
              <div><small>Telecharger sur</small><strong>App Store</strong></div>
            </a>
            <a href="#google-play" className="btn-store btn-store-outline">
              <svg className="btn-store-icon" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734c0-.382.218-.72.609-.92z" fill="#4285F4"/>
                <path d="M17.727 8.273L13.792 12l3.935 3.727 4.453-2.48c.503-.28.82-.752.82-1.247s-.317-.966-.82-1.247l-4.453-2.48z" fill="#FBBC05"/>
                <path d="M3.609 1.814L13.792 12l3.935-3.727L4.554 1.068c-.327-.182-.665-.17-.945.746z" fill="#34A853"/>
                <path d="M13.792 12L3.609 22.186c.28.2.618.21.945.03l13.173-7.489L13.792 12z" fill="#EA4335"/>
              </svg>
              <div><small>Disponible sur</small><strong>Google Play</strong></div>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="phone">
            <div className="phone-inner">
              <div className="phone-notch" />
              <div className="phone-screen">
                <div className="scr-top">
                  <div className="scr-avatar" />
                  <div className="scr-greeting">
                    <strong>Bonjour, Amadou</strong>
                    <small>Compte verifie</small>
                  </div>
                </div>
                <div className="scr-balance">
                  <span>Solde disponible</span>
                  <strong>1 250 000 GNF</strong>
                </div>
                <div className="scr-quick">
                  <div className="scr-qbtn"><div className="scr-qicon">↑</div><span>Envoyer</span></div>
                  <div className="scr-qbtn"><div className="scr-qicon">↓</div><span>Recevoir</span></div>
                  <div className="scr-qbtn"><div className="scr-qicon">+</div><span>Recharger</span></div>
                  <div className="scr-qbtn"><div className="scr-qicon">◎</div><span>Scanner</span></div>
                </div>
                <div className="scr-visa">
                  <div className="scr-visa-row"><span className="scr-chip" /><span className="scr-visa-txt">VISA</span></div>
                  <div className="scr-visa-num">•••• •••• •••• 4521</div>
                  <div className="scr-visa-bot"><span>AMADOU DIALLO</span><span>12/27</span></div>
                </div>
              </div>
            </div>
          </div>

          <div className="notif notif-1">
            <div className="notif-dot notif-dot-blue" />
            <div><strong>Paiement reussi</strong><span>-45 000 GNF</span></div>
          </div>
          <div className="notif notif-2">
            <div className="notif-dot notif-dot-green" />
            <div><strong>Recharge recue</strong><span className="green">+500 000 GNF</span></div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className={`stats${statsVis ? ' in' : ''}`} ref={statsRef}>
        <div className="stats-inner">
          {stats.map((s, i) => (
            <div className="stat" key={i} style={{ '--delay': `${i * 0.08}s` }}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className={`feat${featVis ? ' in' : ''}`} id="features" ref={featRef}>
        <div className="sect-head">
          <span className="sect-tag">Services</span>
          <h2>Nos services,<br />pensés pour vous.</h2>
        </div>
        <div className="feat-grid">
          {features.map((f, i) => (
            <article className={`feat-card accent-${f.accent}`} key={i} style={{ '--delay': `${i * 0.1}s` }}>
              <div className="feat-icon-wrap">{f.icon}</div>
              <span className="feat-label">{f.tag}</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
              <div className="feat-arrow">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── STEPS ── */}
      <section className={`how${stepsVis ? ' in' : ''}`} id="steps" ref={stepsRef}>
        <div className="sect-head">
          <span className="sect-tag">Comment ca marche</span>
          <h2>Pret en 4 etapes simples</h2>
        </div>
        <div className="how-grid">
          {steps.map((s, i) => (
            <div className="how-card" key={i} style={{ '--delay': `${i * 0.1}s` }}>
              <div className="how-num">{s.num}</div>
              <div className="how-line" />
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={`faq${faqVis ? ' in' : ''}`} id="faq" ref={faqRef}>
        <div className="sect-head centered">
          <span className="sect-tag">FAQ</span>
          <h2>Questions frequentes</h2>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => <FaqItem key={i} idx={i} q={f.q} a={f.a} />)}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta" id="download">
        <div className="cta-inner">
          <div className="cta-blob" />
          <h2>Pret a simplifier vos cartes virtuelles et physiques ?</h2>
          <p>Rejoignez des milliers d'utilisateurs guineens qui font confiance a YoungPay.</p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <a href="#app-store" className="btn-store btn-store-white">
              <svg className="btn-store-icon" viewBox="0 0 24 24"><path d="M16.7 12.8c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.7-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8-.8 0-1.9-.8-3.1-.8-1.6 0-3 .9-3.8 2.2-1.7 2.8-.4 7 1.2 9.2.8 1.1 1.7 2.2 2.9 2.1 1.1 0 1.6-.7 3-.7 1.4 0 1.9.7 3 .7 1.2 0 2-.9 2.8-2 .9-1.2 1.3-2.4 1.3-2.5 0 0-2.6-1-2.6-3.9zM14.5 6.2c.6-.7 1-1.7.9-2.7-.9 0-2 .6-2.7 1.3-.6.7-1.1 1.7-1 2.7 1 .1 2.1-.5 2.8-1.3z" fill="currentColor"/></svg>
              <div><small>Telecharger sur</small><strong>App Store</strong></div>
            </a>
            <a href="#google-play" className="btn-store btn-store-white">
              <svg className="btn-store-icon" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734c0-.382.218-.72.609-.92z" fill="#4285F4"/>
                <path d="M17.727 8.273L13.792 12l3.935 3.727 4.453-2.48c.503-.28.82-.752.82-1.247s-.317-.966-.82-1.247l-4.453-2.48z" fill="#FBBC05"/>
                <path d="M3.609 1.814L13.792 12l3.935-3.727L4.554 1.068c-.327-.182-.665-.17-.945.746z" fill="#34A853"/>
                <path d="M13.792 12L3.609 22.186c.28.2.618.21.945.03l13.173-7.489L13.792 12z" fill="#EA4335"/>
              </svg>
              <div><small>Disponible sur</small><strong>Google Play</strong></div>
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="contact" id="contact">
        <div className="contact-inner">
          <div className="sect-head" style={{ marginBottom: '40px' }}>
            <span className="sect-tag">Contact</span>
            <h2>Nous sommes<br />disponibles pour vous.</h2>
          </div>
          <div className="contact-cards">
            <a href="tel:+224625233995" className="contact-card">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="contact-info">
                <span className="contact-label">Telephone</span>
                <strong>+224 625 233 995</strong>
              </div>
              <svg className="contact-arrow" viewBox="0 0 20 20" fill="none" width="18" height="18"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="mailto:contact@young-pay.net" className="contact-card">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
                  <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M2 8l10 6 10-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="contact-info">
                <span className="contact-label">Email</span>
                <strong>contact@young-pay.net</strong>
              </div>
              <svg className="contact-arrow" viewBox="0 0 20 20" fill="none" width="18" height="18"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="foot">
        <div className="foot-top">
          <div className="foot-brand">
            <img src="/assets/images/logo_full.png" alt="YoungPay" />
            <p>Vos cartes, simplifiees.</p>
          </div>
          <div className="foot-cols">
            <div className="foot-col">
              <h5>Produit</h5>
              <a href="#features">Carte Visa</a>
              <a href="#features">Cartes digitales</a>
              <a href="#features">Billetterie</a>
            </div>
            <div className="foot-col">
              <h5>Entreprise</h5>
              <a href="#faq">FAQ</a>
              <a href="mailto:support@youngpay.gn">Contact</a>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>&copy; 2026 YoungPay. Tous droits reserves.</span>
          <div className="foot-social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24"><path d="M13.5 22v-8.1h2.7l.4-3.1h-3.1V8.8c0-.9.2-1.5 1.5-1.5h1.7V4.5c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.4v2.4H8.1v3.1h2.5V22h2.9Z" fill="currentColor"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" fill="none"/><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" fill="none"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
