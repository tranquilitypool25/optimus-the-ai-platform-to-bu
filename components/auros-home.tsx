"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

const AUROS = "https://www.auros.global";

const navItems = [
  { label: "Proprietary Trading", href: `${AUROS}/proprietary-trading` },
  { label: "Liquidity Solutions", href: `${AUROS}/liquidity-solutions`, dropdown: true },
  { label: "Insights", href: "#insights" },
  { label: "Careers", href: `${AUROS}/careers` },
  { label: "Our Team", href: `${AUROS}/team` },
];

const services = [
  {
    title: "Proprietary Trading",
    description:
      "Rooted in algorithmic precision and powered by advanced technology, Auros Trading has evolved from quantitative trading to become a global liquidity engine driving efficiency and depth across digital asset markets.",
    href: `${AUROS}/proprietary-trading`,
    video: "/auros/video/trading.webm",
  },
  {
    title: "Liquidity Solutions",
    description:
      "Auros Liquidity Solutions provides projects with end-to-end expertise—from venture funding and engineering support to token launch, liquidity strategy, and institutional market expansion.",
    href: `${AUROS}/liquidity-solutions`,
    video: "/auros/video/liquidity.webm",
  },
  {
    title: "Careers",
    description:
      "Join a global team of traders, engineers, and innovators shaping the evolution of decentralised finance. At Auros, every role drives real impact and your ideas will help define the future of decentralised finance.",
    href: `${AUROS}/careers`,
    video: "/auros/video/careers.webm",
  },
];

const partners = [
  {
    quote:
      "Auros has been a key partner since Pyth’s inception, providing top-tier trading data and expertise that were vital to our PYTH token launch and growth.",
    person: "Mike Cahill,\nCEO of Pyth",
    logo: "/auros/logos/pyth.svg",
    alt: "Pyth",
  },
  {
    quote:
      "From early investment to deep collaboration like core build-out support, Auros has been instrumental in GTE’s journey from testnet to mainnet launch.",
    person: "Enzo Coglitore,\nCo-founder of GTE",
    logo: "/auros/logos/gte.svg",
    alt: "GTE",
  },
  {
    quote:
      "Auros is one of our most trusted liquidity partners, supporting ATH token launch success, treasury solutions, and other innovative strategies for ecosystem growth.",
    person: "Dan Wang, Co-Founder\nof Aethir",
    logo: "/auros/logos/aethir.svg",
    alt: "Aethir",
  },
];

const logoRail = [
  { src: "/auros/logos/pyth.svg", alt: "Pyth" },
  { src: "/auros/logos/gte.svg", alt: "GTE" },
  { src: "/auros/logos/aethir.svg", alt: "Aethir" },
  { src: "/auros/logos/drift.svg", alt: "Drift" },
  { src: "/auros/logos/derive.svg", alt: "Derive" },
  { src: "/auros/logos/jupiter.svg", alt: "Jupiter" },
];

const articles = [
  {
    title: "Crypto Rules Are Here, But Regulatory Clarity Alone Isn’t Enough",
    description:
      "Digital asset regulation is entering a more consequential phase. As stablecoin rules, MiCA, and Asia’s virtual asset frameworks move from legal certainty to implementation, the real test becomes market outcomes: liquidity, capital mobility, and cross-border interoperability.",
    date: "August 4, 2026",
    image: "/auros/images/regulation.png",
    href: `${AUROS}/insights/crypto-rules-are-here-but-regulatory-clarity-alone-isnt-enough`,
  },
  {
    title: "Stablecoins Won the Mainstream Adoption Argument. Now Liquidity Has to Catch Up",
    description:
      "As stablecoins become the settlement layer between traditional finance and digital assets, liquidity is fragmenting across exchanges, chains, and payment corridors. Efficient liquidity provision—not issuance—will shape how far stablecoins actually go.",
    date: "July 20, 2026",
    image: "/auros/images/stablecoins.png",
    href: `${AUROS}/insights/stablecoins-won-the-mainstream-adoption-argument-now-liquidity-has-to-catch-up`,
  },
];

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M4 14 14 4M6 4h8v8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
    </svg>
  );
}

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand ${compact ? "brand--compact" : ""}`} aria-label="Auros">
      <svg className="brand__mark" viewBox="0 0 34 28" fill="none" aria-hidden="true">
        <path d="M8 21 15.6 7.5M13.5 23.5 22.2 8M19.2 23.5 27 10.2" stroke="currentColor" strokeWidth="2" />
        <circle cx="7" cy="22" r="3" fill="currentColor" />
        <circle cx="16" cy="6" r="3" fill="currentColor" />
        <circle cx="13" cy="24" r="3" fill="currentColor" />
        <circle cx="23" cy="7" r="3" fill="currentColor" />
        <circle cx="20" cy="24" r="3" fill="currentColor" />
        <circle cx="28" cy="9" r="3" fill="currentColor" />
      </svg>
      <span className="brand__word">AUROS</span>
    </span>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="site-header">
      <a className="site-header__logo" href="#top" aria-label="Auros home" onClick={() => setOpen(false)}>
        <Logo />
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
            {item.dropdown && (
              <svg viewBox="0 0 10 6" aria-hidden="true"><path d="m1 1 4 4 4-4" fill="none" stroke="currentColor" /></svg>
            )}
          </a>
        ))}
      </nav>
      <a className="button button--header desktop-cta" href={`${AUROS}/contact`}>
        Partner With Us <Arrow />
      </a>
      <button
        className={`menu-toggle ${open ? "is-open" : ""}`}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span /><span /><span />
      </button>
      <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {navItems.map((item, index) => (
            <a key={item.label} href={item.href} onClick={() => setOpen(false)} style={{ "--i": index } as CSSProperties}>
              <span>0{index + 1}</span>{item.label}<Arrow />
            </a>
          ))}
          <a className="mobile-menu__cta" href={`${AUROS}/contact`} onClick={() => setOpen(false)} style={{ "--i": 5 } as CSSProperties}>
            <span>06</span>Partner With Us<Arrow />
          </a>
        </nav>
      </div>
    </header>
  );
}

function LiquidCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let pointerX = 0;
    let pointerY = 0;

    type Particle = { x: number; y: number; radius: number; speed: number; phase: number; alpha: number };
    let particles: Particle[] = [];

    const resize = () => {
      const box = canvas.getBoundingClientRect();
      width = box.width;
      height = box.height;
      dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = width < 600 ? 62 : 110;
      particles = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 0.45 + Math.random() * 1.15,
        speed: 0.08 + Math.random() * 0.22,
        phase: index * 0.37 + Math.random() * Math.PI,
        alpha: 0.07 + Math.random() * 0.2,
      }));
    };

    const onPointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerX = (event.clientX - rect.left - width / 2) * 0.025;
      pointerY = (event.clientY - rect.top - height / 2) * 0.025;
    };

    const draw = (time = 0) => {
      context.clearRect(0, 0, width, height);
      const glowX = width * 0.72 + Math.sin(time * 0.00023) * width * 0.08 + pointerX;
      const glowY = height * 0.72 + Math.cos(time * 0.00019) * height * 0.08 + pointerY;
      const gradient = context.createRadialGradient(glowX, glowY, 0, glowX, glowY, Math.max(width, height) * 0.46);
      gradient.addColorStop(0, "rgba(0, 232, 211, 0.28)");
      gradient.addColorStop(0.26, "rgba(0, 173, 159, 0.18)");
      gradient.addColorStop(0.68, "rgba(0, 78, 72, 0.05)");
      gradient.addColorStop(1, "rgba(0, 38, 36, 0)");
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      for (const particle of particles) {
        particle.y -= particle.speed;
        if (particle.y < -4) {
          particle.y = height + 4;
          particle.x = Math.random() * width;
        }
        const drift = Math.sin(time * 0.00045 + particle.phase) * 7;
        context.beginPath();
        context.arc(particle.x + drift, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(222, 255, 251, ${particle.alpha})`;
        context.fill();
      }

      if (!reduced) frame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    window.addEventListener("pointermove", onPointer, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return <canvas ref={ref} className="liquid-canvas" aria-hidden="true" />;
}

function ButtonLink({ children, href, className = "" }: { children: ReactNode; href: string; className?: string }) {
  return (
    <a className={`button ${className}`} href={href}>
      <span>{children}</span><Arrow />
    </a>
  );
}

function KineticWords() {
  const sectionRef = useRef<HTMLElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const render = () => {
      raf = 0;
      const rect = section.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (rect.height + window.innerHeight)));
      const distance = window.innerWidth * (window.innerWidth < 600 ? 0.68 : 0.42);
      if (topRef.current) topRef.current.style.transform = `translate3d(${(0.52 - progress) * distance}px,0,0)`;
      if (bottomRef.current) bottomRef.current.style.transform = `translate3d(${(-0.52 + progress) * distance}px,0,0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(render);
    };
    render();
    if (!reduced) window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="kinetic" ref={sectionRef} aria-label="We Drive Liquidity">
      <div className="kinetic__sticky">
        <div className="kinetic__line kinetic__line--top" ref={topRef}>We Drive</div>
        <div className="kinetic__line kinetic__line--bottom" ref={bottomRef}>Liquidity</div>
      </div>
    </section>
  );
}

function Interlude({ children }: { children: ReactNode }) {
  return (
    <section className="interlude">
      <p data-reveal>{children}</p>
    </section>
  );
}

function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <header className="section-heading" data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {body && <p className="section-heading__body">{body}</p>}
    </header>
  );
}

function ExploreSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((value) => (value + 1) % services.length), 6500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="content-section explore" id="explore">
      <div className="container">
        <SectionHeader eyebrow="Explore" title="Explore Auros" />
        <div className="explore__desktop" data-reveal>
          <div className="explore__list">
            {services.map((service, index) => (
              <a
                className={`explore__item ${active === index ? "is-active" : ""}`}
                href={service.href}
                key={service.title}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
              >
                <span className="explore__item-top"><h3>{service.title}</h3><span className="square-arrow"><Arrow /></span></span>
                <p>{service.description}</p>
              </a>
            ))}
          </div>
          <div className="explore__visual" aria-live="polite">
            <video key={services[active].video} autoPlay loop muted playsInline preload="auto">
              <source src={services[active].video} type="video/webm" />
            </video>
          </div>
        </div>
        <div className="touch-carousel explore__mobile" aria-label="Explore Auros services">
          {services.map((service) => (
            <article className="explore-card" key={service.title}>
              <div className="explore-card__media">
                <video autoPlay loop muted playsInline preload="metadata">
                  <source src={service.video} type="video/webm" />
                </video>
              </div>
              <div className="explore-card__body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ButtonLink href={service.href}>Learn More</ButtonLink>
              </div>
            </article>
          ))}
        </div>
        <div className="carousel-hint explore__mobile" aria-hidden="true"><span /></div>
      </div>
    </section>
  );
}

function CountUp({ to, prefix = "", suffix = "", decimals = 0 }: { to: number; prefix?: string; suffix?: string; decimals?: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      if (reduced) {
        setValue(to);
        return;
      }
      const start = performance.now();
      const duration = 1500;
      const tick = (now: number) => {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 4);
        setValue(to * eased);
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.35 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [to]);

  return <span ref={ref}>{prefix}{value.toFixed(decimals)}{suffix}</span>;
}

function StatsSection() {
  return (
    <section className="content-section stats" id="stats">
      <div className="container">
        <SectionHeader
          eyebrow="Stats"
          title="Auros in numbers"
          body="Three interconnected divisions driving liquidity, innovation, and market efficiency across the digital economy."
        />
        <div className="stats__grid" data-reveal>
          <article className="stat-card stat-card--primary">
            <p>Total Trading<br />Volume (YTD)</p>
            <strong><CountUp to={1.3} prefix="$" suffix="T+" decimals={1} /></strong>
          </article>
          <article className="stat-card stat-card--wide">
            <p>Peak Daily<br />Trading Volume</p>
            <strong><CountUp to={18.21} prefix="$" suffix="B" decimals={2} /></strong>
          </article>
          <article className="stat-card">
            <p>Team Size</p>
            <strong><CountUp to={150} suffix="+" /></strong>
          </article>
          <article className="stat-card">
            <p>Connected<br />Venues</p>
            <strong><CountUp to={40} suffix="+" /></strong>
          </article>
        </div>
      </div>
    </section>
  );
}

function GlobeSection() {
  return (
    <section className="content-section globe-section">
      <div className="container">
        <div className="globe-card" data-reveal>
          <div className="globe-card__content">
            <p className="eyebrow">Network</p>
            <h2>Global presence</h2>
            <p>Our decentralized workforce provides clients round-the-clock support 24 hours a day, 7 days a week, 365 days a year.</p>
            <ButtonLink href={`${AUROS}/careers`} className="button--small">Join Our Team</ButtonLink>
          </div>
          <img src="/auros/images/globe.avif" alt="Abstract dotted globe showing Auros's global presence" />
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  return (
    <section className="content-section partners">
      <div className="container">
        <SectionHeader eyebrow="Trust" title="What our partners say" />
        <div className="partners__grid touch-carousel" data-reveal>
          {partners.map((partner) => (
            <article className="partner-card" key={partner.alt}>
              <blockquote>“{partner.quote}”</blockquote>
              <div>
                <p>{partner.person}</p>
                <img src={partner.logo} alt={`${partner.alt} logo`} />
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="carousel-hint partners__hint" aria-hidden="true"><span /></div>
      <div className="logo-rail" aria-label="Auros partners">
        <div className="logo-rail__track">
          {[...logoRail, ...logoRail].map((logo, index) => (
            <img key={`${logo.alt}-${index}`} src={logo.src} alt={index < logoRail.length ? logo.alt : ""} aria-hidden={index >= logoRail.length} />
          ))}
        </div>
      </div>
    </section>
  );
}

function InsightsSection() {
  return (
    <section className="content-section insights" id="insights">
      <div className="container">
        <SectionHeader
          eyebrow="Insights"
          title="Insights and Perspectives"
          body="Explore thought pieces, market perspectives, and the latest from Auros."
        />
        <div className="insights__list touch-carousel" data-reveal>
          {articles.map((article) => (
            <a className="insight-card" href={article.href} key={article.title}>
              <div className="insight-card__image"><img src={article.image} alt="" /></div>
              <div className="insight-card__content">
                <span className="square-arrow"><Arrow /></span>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <time>{article.date}</time>
              </div>
            </a>
          ))}
        </div>
        <div className="carousel-hint insights__hint" aria-hidden="true"><span /></div>
        <div className="insights__cta"><ButtonLink href={`${AUROS}/insights`}>View All Articles</ButtonLink></div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <h2>Making digital<br />markets liquid</h2>
          <div className="footer__contact">
            <p>Connect with our team</p>
            <ButtonLink href={`${AUROS}/contact`}>Get In Touch</ButtonLink>
          </div>
        </div>
        <div className="footer__middle">
          <nav aria-label="Footer navigation">
            <a href={`${AUROS}/proprietary-trading`}>Proprietary Trading</a>
            <a href={`${AUROS}/liquidity-solutions`}>Liquidity Solutions</a>
            <a href={`${AUROS}/careers`}>Careers</a>
            <a href={`${AUROS}/brand-assets`}>Brand Assets</a>
            <a href={`${AUROS}/privacy-policy`}>Privacy Policy</a>
          </nav>
          <div className="footer__socials">
            <a href="https://x.com/Auros_global" aria-label="Auros on X">X</a>
            <a href="https://www.linkedin.com/company/aurosglobal" aria-label="Auros on LinkedIn">in</a>
          </div>
        </div>
        <div className="footer__bottom">
          <a href="https://otherlife.xyz/">Built by Otherlife</a>
          <a href="#top">©2026 Auros</a>
        </div>
      </div>
    </footer>
  );
}

export function AurosHome() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8%" });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <main id="top" className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <section className="hero" id="main-content">
        <LiquidCanvas />
        <div className="hero__grain" aria-hidden="true" />
        <div className="hero__content">
          <p className="eyebrow hero__eyebrow">Auros</p>
          <h1>Making Digital<br />Markets Liquid</h1>
          <p className="hero__body">Building next-gen liquidity infrastructure for the crypto economy.</p>
          <ButtonLink href={`${AUROS}/liquidity-solutions`}>Unlock Liquidity</ButtonLink>
        </div>
      </section>
      <KineticWords />
      <Interlude>Auros is a global trading<br />firm and liquidity provider.</Interlude>
      <ExploreSection />
      <StatsSection />
      <Interlude>We’re shaping the<br />next generation of<br />decentralized finance.</Interlude>
      <GlobeSection />
      <Interlude>Helping institutions<br />operate with confidence.</Interlude>
      <PartnersSection />
      <Interlude>Building systems that<br />keep value moving.</Interlude>
      <InsightsSection />
      <Footer />
    </main>
  );
}
