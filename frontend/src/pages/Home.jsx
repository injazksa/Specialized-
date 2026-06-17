import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, CheckCircle, Clock, Users, Award, ArrowRight, FileCheck, Shield, Zap, TrendingUp, MapPin, Mail, Send, Menu, X, ArrowUp, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

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
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      title: 'تأشيرات العمل السعودية لجميع المهن',
      description: 'نقوم بإنجاز وتعقيب معاملات تأشيرات العمل السعودية لمختلف المهن والتخصصات، مع تزويد العميل بجميع المتطلبات والأوراق والإجراءات اللازمة وفق أحدث الأنظمة والتعليمات المعتمدة، ومتابعة الطلب خطوة بخطوة حتى استكمال الإجراءات المطلوبة.',
      icon: Award,
      buttonText: 'تواصل معنا لمعرفة الأوراق المطلوبة والإجراءات',
      image: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754',
      keywords: 'تأشيرات العمل السعودية, تأشيرة عمل سعودية, فيزا عمل السعودية'
    },
    {
      title: 'تصديق الشهادات والوثائق الرسمية',
      description: 'نوفر خدمات تصديق مختلف أنواع الوثائق الرسمية والشهادات، بما يشمل: الشهادات الجامعية، الشهادات المدرسية، شهادات الميلاد، عقود الزواج، وثائق الطلاق، الوكالات، السجلات التجارية، والوثائق الرسمية الأخرى. مع مراجعة الأختام والمتطلبات اللازمة قبل التقديم لضمان إنجاز المعاملة بشكل صحيح.',
      icon: Shield,
      buttonText: 'تواصل معنا للتحقق من الأختام والمتطلبات اللازمة',
      image: 'https://images.pexels.com/photos/8815849/pexels-photo-8815849.jpeg',
      keywords: 'تصديق الشهادات, تصديق الوثائق, تصديق شهادات للسعودية'
    },
    {
      title: 'الاعتماد المهني السعودي',
      description: 'نساعد المتقدمين على استكمال إجراءات الاعتماد المهني السعودي سواء للمهن الفنية والعمالية من خلال الفحص المهني، أو للمهن التخصصية والعليا من خلال إجراءات التحقق المهني، مع تقديم الإرشاد الكامل ومتابعة جميع مراحل الطلب لضمان إنجاز الإجراءات بأسرع وقت ممكن.',
      icon: FileCheck,
      buttonText: 'تواصل معنا لمعرفة شروط ومتطلبات الاعتماد المهني',
      image: 'https://images.pexels.com/photos/7876037/pexels-photo-7876037.jpeg',
      keywords: 'الاعتماد المهني السعودي, QVP السعودية, التحقق المهني'
    },
    {
      title: 'خدمات موقع مصادقة السعودي',
      description: 'نقدم المساعدة في رفع وتقديم الشهادات الجامعية عبر منصة مصادقة السعودية بشكل صحيح، ومراجعة البيانات والمستندات المطلوبة، لضمان إتمام إجراءات التحقق من المؤهلات بطريقة دقيقة وآمنة وسريعة.',
      icon: CheckCircle,
      buttonText: 'تواصل معنا لمعرفة آلية التقديم والمتطلبات',
      image: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754',
      keywords: 'مصادقة السعودية, منصة مصادقة, تصديق الشهادات الجامعية'
    }
  ];

  const advantages = [
    {
      icon: Zap,
      title: 'سرعة الإنجاز',
      description: 'ننجز معاملاتك بأسرع وقت ممكن مع الحفاظ على أعلى معايير الجودة والدقة'
    },
    {
      icon: Clock,
      title: 'متابعة مستمرة',
      description: 'نتابع معاملاتك خطوة بخطوة ونبقيك على اطلاع دائم بكل المستجدات والتطورات'
    },
    {
      icon: Users,
      title: 'دعم احترافي',
      description: 'فريق متخصص جاهز لخدمتك والإجابة على جميع استفساراتك على مدار الساعة'
    },
    {
      icon: TrendingUp,
      title: 'أسعار منافسة',
      description: 'نقدم أفضل الأسعار في السوق مع جودة خدمة لا تضاهى وبدون تكاليف خفية'
    },
    {
      icon: Award,
      title: 'خبرة واسعة',
      description: 'أكثر من 15 عاماً من الخبرة في مجال خدمات السفارة السعودية والتصديقات'
    },
    {
      icon: CheckCircle,
      title: 'ثقة وموثوقية',
      description: 'نضع رضاك في المقام الأول ونسعى دائماً لتقديم أفضل تجربة وخدمة متميزة'
    }
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
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <Award className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-base md:text-lg font-bold text-slate-800 leading-tight">الشركة المتخصصة</h1>
                <p className="text-xs text-slate-600 hidden sm:block">لإنجاز معاملات السفارة السعودية</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <a href="#home" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">الرئيسية</a>
              <a href="#services" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">خدماتنا</a>
              <a href="#about" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">من نحن</a>
              <a href="#contact" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">تواصل معنا</a>
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2 shadow-lg shadow-emerald-600/30 transition-all hover:shadow-xl hover:shadow-emerald-600/40">
                <MessageCircle className="w-4 h-4" />
                <span>واتساب</span>
              </Button>
              <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 gap-2 transition-all">
                <Phone className="w-4 h-4" />
                <span>اتصل الآن</span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-emerald-600 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-slate-200 pt-4 animate-fade-in">
              <nav className="flex flex-col gap-4">
                <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">الرئيسية</a>
                <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">خدماتنا</a>
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">من نحن</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">تواصل معنا</a>
                <div className="flex flex-col gap-2 pt-2">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2 w-full">
                    <MessageCircle className="w-4 h-4" />
                    <span>واتساب</span>
                  </Button>
                  <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 gap-2 w-full">
                    <Phone className="w-4 h-4" />
                    <span>اتصل الآن</span>
                  </Button>
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
            src="https://images.unsplash.com/photo-1663900108404-a05e8bf82cda"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <div className="inline-block mb-4 md:mb-6 px-4 md:px-6 py-2 bg-emerald-100 rounded-full">
              <p className="text-emerald-700 font-semibold text-sm">الشريك الموثوق لخدمات السفارة السعودية</p>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight px-4">
              الشركة المتخصصة لإنجاز
              <br />
              <span className="text-emerald-600">معاملات السفارة السعودية</span>
            </h1>
            
            <p className="text-base md:text-xl text-slate-600 mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto px-4">
              نقدم حلولاً احترافية وسريعة لإنجاز معاملات السفارة السعودية والتأشيرات المهنية والاعتماد المهني والتصديقات الرسمية بكل دقة وموثوقية.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-12 md:mb-16 px-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 md:px-8 py-5 md:py-6 text-base md:text-lg shadow-xl shadow-emerald-600/30 hover:shadow-2xl hover:shadow-emerald-600/40 transition-all w-full sm:w-auto">
                تواصل معنا الآن
                <ArrowRight className="w-5 h-5 mr-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 md:px-8 py-5 md:py-6 text-base md:text-lg transition-all w-full sm:w-auto">
                <MessageCircle className="w-5 h-5 ml-2" />
                واتساب مباشر
              </Button>
            </div>
          </div>

          {/* Statistics Cards */}
          <div id="stats-section" className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-5xl mx-auto px-4">
            <Card className="bg-white/80 backdrop-blur-sm border-emerald-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="text-2xl md:text-4xl font-bold text-emerald-600 mb-1 md:mb-2">{counters.transactions.toLocaleString()}+</div>
                <p className="text-xs md:text-base text-slate-600 font-medium">معاملة منجزة</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-emerald-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="text-2xl md:text-4xl font-bold text-emerald-600 mb-1 md:mb-2">{counters.years}+</div>
                <p className="text-xs md:text-base text-slate-600 font-medium">سنة خبرة</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-emerald-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="text-2xl md:text-4xl font-bold text-emerald-600 mb-1 md:mb-2">{counters.speed}</div>
                <p className="text-xs md:text-base text-slate-600 font-medium">ساعة متوسط الإنجاز</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-emerald-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="text-2xl md:text-4xl font-bold text-emerald-600 mb-1 md:mb-2">{counters.satisfaction}%</div>
                <p className="text-xs md:text-base text-slate-600 font-medium">رضا العملاء</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-20 bg-gradient-to-b from-white to-emerald-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">خدماتنا المتخصصة</h2>
            <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto">
              نقدم مجموعة شاملة من الخدمات الاحترافية لتلبية جميع احتياجاتك
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={index}
                  className="group h-full overflow-hidden border-emerald-100 hover:border-emerald-300 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/50 to-transparent"></div>
                    <div className="absolute bottom-4 right-4">
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-xl flex items-center justify-center shadow-lg">
                        <IconComponent className="w-7 h-7 md:w-9 md:h-9 text-emerald-600" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4">{service.title}</h3>
                    <p className="text-sm md:text-base text-slate-600 mb-4 md:mb-6 leading-relaxed">{service.description}</p>
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white w-full md:w-auto text-sm md:text-base">
                      {service.buttonText}
                      <ArrowRight className="w-4 h-4 mr-2" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">لماذا تختارنا؟</h2>
            <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto">
              نتميز بمجموعة من المزايا التي تجعلنا الخيار الأمثل لخدماتك
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <Card
                  key={index}
                  className="group border-emerald-100 hover:border-emerald-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <CardContent className="p-6 md:p-8">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">{advantage.title}</h3>
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/7693692/pexels-photo-7693692.jpeg"
                  alt="About Us"
                  className="w-full h-72 md:h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-emerald-200 to-emerald-300 rounded-2xl -z-10 opacity-50"></div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6">من نحن</h2>
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

              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/30 mt-6 md:mt-8">
                اعرف المزيد عنا
                <ArrowRight className="w-5 h-5 mr-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">تواصل معنا</h2>
            <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto">
              نحن هنا لخدمتك والإجابة على جميع استفساراتك
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto mb-8 md:mb-12">
            <Card className="border-emerald-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Phone className="w-7 h-7 md:w-8 md:h-8 text-emerald-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-sm md:text-base">الهاتف</h3>
                <p className="text-slate-600 dir-ltr text-sm md:text-base">+962 6 123 4567</p>
              </CardContent>
            </Card>

            <Card className="border-emerald-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-emerald-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-sm md:text-base">واتساب</h3>
                <p className="text-slate-600 dir-ltr text-sm md:text-base">+962 79 123 4567</p>
              </CardContent>
            </Card>

            <Card className="border-emerald-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Mail className="w-7 h-7 md:w-8 md:h-8 text-emerald-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-sm md:text-base">البريد الإلكتروني</h3>
                <p className="text-slate-600 text-xs md:text-sm break-all">info@saudi-embassy.jo</p>
              </CardContent>
            </Card>

            <Card className="border-emerald-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Clock className="w-7 h-7 md:w-8 md:h-8 text-emerald-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-sm md:text-base">ساعات العمل</h3>
                <p className="text-slate-600 text-xs md:text-sm">الأحد - الخميس: 9ص - 5م</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-emerald-100 shadow-2xl bg-gradient-to-br from-emerald-600 to-emerald-700">
              <CardContent className="p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">ابدأ معاملتك الآن</h3>
                <p className="text-emerald-50 mb-6 md:mb-8 text-sm md:text-lg">
                  تواصل معنا اليوم ودعنا نساعدك في إنجاز معاملاتك بكل سهولة واحترافية
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                  <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 px-6 md:px-8 py-5 md:py-6 text-base md:text-lg shadow-xl w-full sm:w-auto">
                    <Send className="w-5 h-5 ml-2" />
                    تواصل معنا الآن
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-6 md:px-8 py-5 md:py-6 text-base md:text-lg w-full sm:w-auto">
                    <MessageCircle className="w-5 h-5 ml-2" />
                    واتساب مباشر
                  </Button>
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
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <Award className="w-7 h-7 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold">الشركة المتخصصة</h3>
                  <p className="text-xs md:text-sm text-emerald-200">لإنجاز معاملات السفارة السعودية</p>
                </div>
              </div>
              <p className="text-sm md:text-base text-emerald-100 leading-relaxed">
                شريكك الموثوق لجميع خدمات السفارة السعودية بأعلى معايير الجودة والاحترافية.
              </p>
            </div>

            <div>
              <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4">روابط سريعة</h4>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                <li>
                  <a href="#home" className="text-emerald-100 hover:text-white transition-colors">الرئيسية</a>
                </li>
                <li>
                  <a href="#services" className="text-emerald-100 hover:text-white transition-colors">خدماتنا</a>
                </li>
                <li>
                  <a href="#about" className="text-emerald-100 hover:text-white transition-colors">من نحن</a>
                </li>
                <li>
                  <a href="#contact" className="text-emerald-100 hover:text-white transition-colors">تواصل معنا</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4">خدماتنا</h4>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                <li className="text-emerald-100">تأشيرات العمل السعودية</li>
                <li className="text-emerald-100">تصديق الشهادات والوثائق</li>
                <li className="text-emerald-100">الاعتماد المهني السعودي</li>
                <li className="text-emerald-100">خدمات موقع مصادقة</li>
              </ul>
            </div>

            <div>
              <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4">تواصل معنا</h4>
              <div className="space-y-3 md:space-y-4 text-sm md:text-base">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-emerald-300 flex-shrink-0 mt-1" />
                  <p className="text-emerald-100 dir-ltr">+962 6 123 4567</p>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-emerald-300 flex-shrink-0 mt-1" />
                  <p className="text-emerald-100 dir-ltr">+962 79 123 4567</p>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-emerald-300 flex-shrink-0 mt-1" />
                  <p className="text-emerald-100 text-xs md:text-sm break-all">info@saudi-embassy.jo</p>
                </div>
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

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/962791234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 md:bottom-24 left-4 md:left-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
        <span className="absolute right-full mr-3 bg-slate-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
          تواصل عبر واتساب
        </span>
      </a>

      {/* Floating Phone Button */}
      <a
        href="tel:+96261234567"
        className="fixed bottom-4 md:bottom-6 left-4 md:left-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-emerald-600 hover:bg-emerald-700 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group"
        aria-label="Phone"
      >
        <Phone className="w-7 h-7 md:w-8 md:h-8 text-white" />
        <span className="absolute right-full mr-3 bg-slate-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
          اتصل بنا
        </span>
      </a>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-36 md:bottom-44 right-4 md:right-6 z-50 w-12 h-12 md:w-14 md:h-14 bg-slate-900 hover:bg-slate-800 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 animate-fade-in"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6 md:w-7 md:h-7 text-white" />
        </button>
      )}
    </div>
  );
};

export default Home;