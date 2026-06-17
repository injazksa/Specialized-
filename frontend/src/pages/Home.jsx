import React, { useEffect, useState, useCallback } from 'react';
import { Phone, MessageCircle, CheckCircle, Clock, Users, Award, ArrowRight, FileCheck, Shield, Zap, TrendingUp, MapPin, Mail, Send, Menu, X, ChevronUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

// Image optimization helper - adds compression params
const optimizeImage = (url, width = 800, quality = 70) => {
  if (url.includes('unsplash.com')) {
    return `${url}${url.includes('?') ? '&' : '?'}w=${width}&q=${quality}&auto=format&fit=crop`;
  }
  if (url.includes('pexels.com')) {
    return `${url}${url.includes('?') ? '&' : '?'}auto=compress&cs=tinysrgb&w=${width}&dpr=1`;
  }
  return url;
};

// Smooth scroll helper
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 90;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [counters, setCounters] = useState({
    transactions: 0,
    years: 0,
    speed: 0,
    satisfaction: 0
  });

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setScrolled(scrollY > 50);
          setShowBackToTop(scrollY > 600);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const animateCounters = () => {
      const duration = 1800;
      const steps = 50;
      const stepDuration = duration / steps;

      const targets = {
        transactions: 8500,
        years: 15,
        speed: 24,
        satisfaction: 98
      };

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounters({
          transactions: Math.floor(targets.transactions * progress),
          years: Math.floor(targets.years * progress),
          speed: Math.floor(targets.speed * progress),
          satisfaction: Math.floor(targets.satisfaction * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setCounters(targets);
        }
      }, stepDuration);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback((e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    scrollToSection(id);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const services = [
    {
      id: 'service-visa',
      title: 'تأشيرات العمل السعودية لجميع المهن',
      description: 'نقوم بإنجاز وتعقيب معاملات تأشيرات العمل السعودية لمختلف المهن والتخصصات، مع تزويد العميل بجميع المتطلبات والأوراق والإجراءات اللازمة وفق أحدث الأنظمة والتعليمات المعتمدة، ومتابعة الطلب خطوة بخطوة حتى استكمال الإجراءات المطلوبة.',
      icon: Award,
      buttonText: 'تواصل معنا لمعرفة الأوراق المطلوبة',
      image: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754'
    },
    {
      id: 'service-certification',
      title: 'تصديق الشهادات والوثائق الرسمية',
      description: 'نوفر خدمات تصديق مختلف أنواع الوثائق الرسمية والشهادات، بما يشمل: الشهادات الجامعية، الشهادات المدرسية، شهادات الميلاد، عقود الزواج، وثائق الطلاق، الوكالات، السجلات التجارية، والوثائق الرسمية الأخرى. مع مراجعة الأختام والمتطلبات اللازمة قبل التقديم لضمان إنجاز المعاملة بشكل صحيح.',
      icon: Shield,
      buttonText: 'تواصل معنا للتحقق من الأختام والمتطلبات',
      image: 'https://images.pexels.com/photos/8815849/pexels-photo-8815849.jpeg'
    },
    {
      id: 'service-accreditation',
      title: 'الاعتماد المهني السعودي',
      description: 'نساعد المتقدمين على استكمال إجراءات الاعتماد المهني السعودي سواء للمهن الفنية والعمالية من خلال الفحص المهني، أو للمهن التخصصية والعليا من خلال إجراءات التحقق المهني، مع تقديم الإرشاد الكامل ومتابعة جميع مراحل الطلب لضمان إنجاز الإجراءات بأسرع وقت ممكن.',
      icon: FileCheck,
      buttonText: 'تواصل معنا لمعرفة شروط الاعتماد المهني',
      image: 'https://images.pexels.com/photos/7876037/pexels-photo-7876037.jpeg'
    },
    {
      id: 'service-mosadaqah',
      title: 'خدمات موقع مصادقة السعودي',
      description: 'نقدم المساعدة في رفع وتقديم الشهادات الجامعية عبر منصة مصادقة السعودية بشكل صحيح، ومراجعة البيانات والمستندات المطلوبة، لضمان إتمام إجراءات التحقق من المؤهلات بطريقة دقيقة وآمنة وسريعة.',
      icon: CheckCircle,
      buttonText: 'تواصل معنا لمعرفة آلية التقديم',
      image: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754'
    }
  ];

  const advantages = [
    { icon: Zap, title: 'سرعة الإنجاز', description: 'ننجز معاملاتك بأسرع وقت ممكن مع الحفاظ على أعلى معايير الجودة والدقة' },
    { icon: Clock, title: 'متابعة مستمرة', description: 'نتابع معاملاتك خطوة بخطوة ونبقيك على اطلاع دائم بكل المستجدات والتطورات' },
    { icon: Users, title: 'دعم احترافي', description: 'فريق متخصص جاهز لخدمتك والإجابة على جميع استفساراتك على مدار الساعة' },
    { icon: TrendingUp, title: 'أسعار منافسة', description: 'نقدم أفضل الأسعار في السوق مع جودة خدمة لا تضاهى وبدون تكاليف خفية' },
    { icon: Award, title: 'خبرة واسعة', description: 'أكثر من 15 عاماً من الخبرة في مجال خدمات السفارة السعودية والتصديقات' },
    { icon: CheckCircle, title: 'ثقة وموثوقية', description: 'نضع رضاك في المقام الأول ونسعى دائماً لتقديم أفضل تجربة وخدمة متميزة' }
  ];

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-3 group cursor-pointer"
              data-testid="logo-button"
            >
              <div className="w-11 h-11 md:w-12 md:h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <Award className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div className="text-right">
                <h1 className="text-sm md:text-lg font-bold text-slate-800 leading-tight group-hover:text-emerald-600 transition-colors">الشركة المتخصصة</h1>
                <p className="text-[10px] md:text-xs text-slate-600 hidden sm:block">لإنجاز معاملات السفارة السعودية</p>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-slate-700 hover:text-emerald-600 font-medium transition-colors relative group">
                الرئيسية
                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-slate-700 hover:text-emerald-600 font-medium transition-colors relative group">
                خدماتنا
                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#why-us" onClick={(e) => handleNavClick(e, 'why-us')} className="text-slate-700 hover:text-emerald-600 font-medium transition-colors relative group">
                لماذا تختارنا
                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-slate-700 hover:text-emerald-600 font-medium transition-colors relative group">
                من نحن
                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-slate-700 hover:text-emerald-600 font-medium transition-colors relative group">
                تواصل معنا
                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a href="https://wa.me/962791234567" target="_blank" rel="noopener noreferrer">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2 shadow-lg shadow-emerald-600/30 transition-all hover:shadow-xl hover:scale-105">
                  <MessageCircle className="w-4 h-4" />
                  <span>واتساب</span>
                </Button>
              </a>
              <a href="tel:+96261234567">
                <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 gap-2 transition-all hover:scale-105">
                  <Phone className="w-4 h-4" />
                  <span>اتصل الآن</span>
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-emerald-600 transition-colors"
              aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
              data-testid="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-slate-200 pt-4 animate-slide-down">
              <nav className="flex flex-col gap-1">
                <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 font-medium transition-all py-3 px-3 rounded-lg">الرئيسية</a>
                <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 font-medium transition-all py-3 px-3 rounded-lg">خدماتنا</a>
                <a href="#why-us" onClick={(e) => handleNavClick(e, 'why-us')} className="text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 font-medium transition-all py-3 px-3 rounded-lg">لماذا تختارنا</a>
                <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 font-medium transition-all py-3 px-3 rounded-lg">من نحن</a>
                <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 font-medium transition-all py-3 px-3 rounded-lg">تواصل معنا</a>
                <div className="flex flex-col gap-2 pt-3 mt-2 border-t border-slate-200">
                  <a href="https://wa.me/962791234567" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2 w-full">
                      <MessageCircle className="w-4 h-4" />
                      <span>واتساب</span>
                    </Button>
                  </a>
                  <a href="tel:+96261234567">
                    <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 gap-2 w-full">
                      <Phone className="w-4 h-4" />
                      <span>اتصل الآن</span>
                    </Button>
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-28 md:pt-32 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30"></div>
          <img
            src={optimizeImage('https://images.unsplash.com/photo-1663900108404-a05e8bf82cda', 1600, 50)}
            alt="خلفية الموقع"
            className="w-full h-full object-cover opacity-10"
            loading="eager"
            fetchpriority="high"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <button
              onClick={() => scrollToSection('services')}
              className="inline-block mb-4 md:mb-6 px-4 md:px-6 py-2 bg-emerald-100 hover:bg-emerald-200 rounded-full transition-all hover:scale-105 cursor-pointer"
            >
              <p className="text-emerald-700 font-semibold text-sm">الشريك الموثوق لخدمات السفارة السعودية</p>
            </button>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight px-4">
              الشركة المتخصصة لإنجاز
              <br />
              <span className="text-emerald-600">معاملات السفارة السعودية</span>
            </h1>
            
            <p className="text-base md:text-xl text-slate-600 mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto px-4">
              نقدم حلولاً احترافية وسريعة لإنجاز معاملات السفارة السعودية والتأشيرات المهنية والاعتماد المهني والتصديقات الرسمية بكل دقة وموثوقية.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-12 md:mb-16 px-4">
              <button onClick={() => scrollToSection('contact')} className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white px-6 md:px-8 py-4 md:py-5 text-base md:text-lg rounded-lg shadow-xl shadow-emerald-600/30 hover:shadow-2xl hover:shadow-emerald-600/40 transition-all hover:scale-105 font-semibold w-full sm:w-auto">
                تواصل معنا الآن
                <ArrowRight className="w-5 h-5 mr-2" />
              </button>
              <a href="https://wa.me/962791234567" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 md:px-8 py-4 md:py-5 text-base md:text-lg rounded-lg transition-all hover:scale-105 font-semibold w-full sm:w-auto">
                <MessageCircle className="w-5 h-5 ml-2" />
                واتساب مباشر
              </a>
            </div>
          </div>

          {/* Statistics Cards */}
          <div id="stats-section" className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-5xl mx-auto px-4">
            {[
              { value: counters.transactions.toLocaleString() + '+', label: 'معاملة منجزة' },
              { value: counters.years + '+', label: 'سنة خبرة' },
              { value: counters.speed, label: 'ساعة متوسط الإنجاز' },
              { value: counters.satisfaction + '%', label: 'رضا العملاء' }
            ].map((stat, idx) => (
              <Card key={idx} className="bg-white/90 backdrop-blur-sm border-emerald-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="text-2xl md:text-4xl font-bold text-emerald-600 mb-1 md:mb-2">{stat.value}</div>
                  <p className="text-xs md:text-base text-slate-600 font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-20 bg-gradient-to-b from-white to-emerald-50/30">
        <div className="container mx-auto px-4">
          <button onClick={() => scrollToSection('services')} className="block mx-auto text-center mb-12 md:mb-16 group">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">خدماتنا المتخصصة</h2>
            <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto">
              نقدم مجموعة شاملة من الخدمات الاحترافية لتلبية جميع احتياجاتك
            </p>
          </button>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={index}
                  id={service.id}
                  className="group h-full overflow-hidden border-emerald-100 hover:border-emerald-300 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                  onClick={() => scrollToSection('contact')}
                >
                  <div className="relative h-44 md:h-52 overflow-hidden">
                    <img
                      src={optimizeImage(service.image, 800, 65)}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/40 to-transparent"></div>
                    <div className="absolute bottom-4 right-4">
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300">
                        <IconComponent className="w-7 h-7 md:w-9 md:h-9 text-emerald-600" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-5 md:p-7">
                    <h3 className="text-lg md:text-2xl font-bold text-slate-900 mb-3 md:mb-4 group-hover:text-emerald-600 transition-colors">{service.title}</h3>
                    <p className="text-sm md:text-base text-slate-600 mb-4 md:mb-6 leading-relaxed">{service.description}</p>
                    <button
                      onClick={(e) => { e.stopPropagation(); scrollToSection('contact'); }}
                      className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white w-full text-xs md:text-sm py-3 px-4 rounded-lg font-medium transition-all hover:shadow-lg"
                    >
                      {service.buttonText}
                      <ArrowRight className="w-4 h-4 mr-2" />
                    </button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <button onClick={() => scrollToSection('why-us')} className="block mx-auto text-center mb-12 md:mb-16 group">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">لماذا تختارنا؟</h2>
            <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto">
              نتميز بمجموعة من المزايا التي تجعلنا الخيار الأمثل لخدماتك
            </p>
          </button>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <Card
                  key={index}
                  className="group border-emerald-100 hover:border-emerald-300 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                  onClick={() => scrollToSection('contact')}
                >
                  <CardContent className="p-6 md:p-8">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3 group-hover:text-emerald-600 transition-colors">{advantage.title}</h3>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">{advantage.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 md:py-20 bg-gradient-to-b from-emerald-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div className="relative order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={optimizeImage('https://images.pexels.com/photos/7693692/pexels-photo-7693692.jpeg', 900, 70)}
                  alt="من نحن"
                  className="w-full h-72 md:h-96 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-emerald-200 to-emerald-300 rounded-2xl -z-10 opacity-50"></div>
            </div>

            <div className="order-1 md:order-2">
              <button onClick={() => scrollToSection('about')} className="text-right mb-4 md:mb-6 group">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">من نحن</h2>
              </button>
              <div className="space-y-4 text-sm md:text-base text-slate-600 leading-relaxed">
                <p>
                  الشركة المتخصصة لإنجاز معاملات السفارة السعودية هي جهة متخصصة في تقديم خدمات التأشيرات والتصديقات والاعتمادات المهنية المرتبطة بالجهات السعودية، مع التركيز على الدقة والسرعة والمتابعة المستمرة.
                </p>
                <p>
                  نحرص على تقديم تجربة احترافية للعملاء من خلال مراجعة المستندات، توضيح الإجراءات المطلوبة، ومتابعة المعاملات خطوة بخطوة لضمان إنجازها وفق المتطلبات المعتمدة.
                </p>
                <p>
                  نعتمد على الخبرة العملية والتنظيم الدقيق لتقديم خدمات موثوقة تساعد العملاء على توفير الوقت والجهد وتسريع إنجاز معاملاتهم.
                </p>
              </div>

              <button onClick={() => scrollToSection('contact')} className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg shadow-lg shadow-emerald-600/30 mt-6 md:mt-8 font-semibold transition-all hover:scale-105">
                تواصل معنا الآن
                <ArrowRight className="w-5 h-5 mr-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <button onClick={() => scrollToSection('contact')} className="block mx-auto text-center mb-12 md:mb-16 group">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">تواصل معنا</h2>
            <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto">
              نحن هنا لخدمتك والإجابة على جميع استفساراتك
            </p>
          </button>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto mb-8 md:mb-12">
            <a href="tel:+96261234567" className="block">
              <Card className="border-emerald-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full group">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                    <Phone className="w-7 h-7 md:w-8 md:h-8 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 text-sm md:text-base">الهاتف</h3>
                  <p className="text-slate-600 dir-ltr text-sm md:text-base">+962 6 123 4567</p>
                </CardContent>
              </Card>
            </a>

            <a href="https://wa.me/962791234567" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="border-emerald-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full group">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 text-sm md:text-base">واتساب</h3>
                  <p className="text-slate-600 dir-ltr text-sm md:text-base">+962 79 123 4567</p>
                </CardContent>
              </Card>
            </a>

            <a href="mailto:info@saudi-embassy.jo" className="block">
              <Card className="border-emerald-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full group">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                    <Mail className="w-7 h-7 md:w-8 md:h-8 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 text-sm md:text-base">البريد الإلكتروني</h3>
                  <p className="text-slate-600 text-xs md:text-sm break-all">info@saudi-embassy.jo</p>
                </CardContent>
              </Card>
            </a>

            <Card className="border-emerald-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full group">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="w-7 h-7 md:w-8 md:h-8 text-emerald-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-sm md:text-base">ساعات العمل</h3>
                <p className="text-slate-600 text-xs md:text-sm">الأحد - الخميس: 9ص - 5م</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-emerald-100 shadow-2xl bg-gradient-to-br from-emerald-600 to-emerald-700 overflow-hidden">
              <CardContent className="p-8 md:p-12 relative">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">ابدأ معاملتك الآن</h3>
                  <p className="text-emerald-50 mb-6 md:mb-8 text-sm md:text-lg">
                    تواصل معنا اليوم ودعنا نساعدك في إنجاز معاملاتك بكل سهولة واحترافية
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                    <a href="tel:+96261234567" className="inline-flex items-center justify-center bg-white text-emerald-600 hover:bg-emerald-50 px-6 md:px-8 py-4 md:py-5 text-base md:text-lg rounded-lg shadow-xl font-semibold transition-all hover:scale-105">
                      <Send className="w-5 h-5 ml-2" />
                      اتصل بنا الآن
                    </a>
                    <a href="https://wa.me/962791234567" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white/10 px-6 md:px-8 py-4 md:py-5 text-base md:text-lg rounded-lg font-semibold transition-all hover:scale-105">
                      <MessageCircle className="w-5 h-5 ml-2" />
                      واتساب مباشر
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-emerald-800 to-emerald-900 text-white pt-12 md:pt-16 pb-6 md:pb-8">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
            <div>
              <button onClick={scrollToTop} className="flex items-center gap-3 mb-4 md:mb-6 group">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Award className="w-7 h-7 text-emerald-600" />
                </div>
                <div className="text-right">
                  <h3 className="text-base md:text-lg font-bold">الشركة المتخصصة</h3>
                  <p className="text-xs md:text-sm text-emerald-200">لإنجاز معاملات السفارة السعودية</p>
                </div>
              </button>
              <p className="text-sm md:text-base text-emerald-100 leading-relaxed">
                شريكك الموثوق لجميع خدمات السفارة السعودية بأعلى معايير الجودة والاحترافية.
              </p>
            </div>

            <div>
              <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4">روابط سريعة</h4>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-emerald-100 hover:text-white hover:mr-1 transition-all inline-block">الرئيسية</a></li>
                <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-emerald-100 hover:text-white hover:mr-1 transition-all inline-block">خدماتنا</a></li>
                <li><a href="#why-us" onClick={(e) => handleNavClick(e, 'why-us')} className="text-emerald-100 hover:text-white hover:mr-1 transition-all inline-block">لماذا تختارنا</a></li>
                <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-emerald-100 hover:text-white hover:mr-1 transition-all inline-block">من نحن</a></li>
                <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-emerald-100 hover:text-white hover:mr-1 transition-all inline-block">تواصل معنا</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4">خدماتنا</h4>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-emerald-100 hover:text-white hover:mr-1 transition-all inline-block">تأشيرات العمل السعودية</a></li>
                <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-emerald-100 hover:text-white hover:mr-1 transition-all inline-block">تصديق الشهادات والوثائق</a></li>
                <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-emerald-100 hover:text-white hover:mr-1 transition-all inline-block">الاعتماد المهني السعودي</a></li>
                <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-emerald-100 hover:text-white hover:mr-1 transition-all inline-block">خدمات موقع مصادقة</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4">تواصل معنا</h4>
              <div className="space-y-3 md:space-y-4 text-sm md:text-base">
                <a href="tel:+96261234567" className="flex items-start gap-3 group">
                  <Phone className="w-5 h-5 text-emerald-300 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <p className="text-emerald-100 dir-ltr group-hover:text-white transition-colors">+962 6 123 4567</p>
                </a>
                <a href="https://wa.me/962791234567" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                  <MessageCircle className="w-5 h-5 text-emerald-300 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <p className="text-emerald-100 dir-ltr group-hover:text-white transition-colors">+962 79 123 4567</p>
                </a>
                <a href="mailto:info@saudi-embassy.jo" className="flex items-start gap-3 group">
                  <Mail className="w-5 h-5 text-emerald-300 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <p className="text-emerald-100 text-xs md:text-sm break-all group-hover:text-white transition-colors">info@saudi-embassy.jo</p>
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-300 flex-shrink-0 mt-1" />
                  <p className="text-emerald-100 text-sm">جبل عمان - الدوار الأول<br />عمان - الأردن</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-emerald-700 pt-6 md:pt-8">
            <div className="text-center text-emerald-200 text-xs md:text-sm">
              <p>© 2024 الشركة المتخصصة لإنجاز معاملات السفارة السعودية. جميع الحقوق محفوظة.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons - Compact & Elegant */}
      <div className="fixed bottom-4 md:bottom-6 left-4 md:left-6 z-50 flex flex-col gap-3">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/962791234567"
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 md:w-14 md:h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
          aria-label="تواصل عبر واتساب"
          style={{ width: '52px', height: '52px' }}
        >
          <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />
        </a>

        {/* Phone Button */}
        <a
          href="tel:+96261234567"
          className="w-13 h-13 md:w-14 md:h-14 bg-emerald-600 hover:bg-emerald-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
          aria-label="اتصل بنا"
          style={{ width: '52px', height: '52px' }}
        >
          <Phone className="w-6 h-6 md:w-7 md:h-7 text-white" />
        </a>
      </div>

      {/* Back to Top - Elegant & Subtle */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 w-10 h-10 md:w-12 md:h-12 bg-slate-900/70 hover:bg-slate-900 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="العودة للأعلى"
      >
        <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </button>
    </div>
  );
};

export default Home;
