import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, CheckCircle, Clock, Users, Award, ArrowRight, FileCheck, Shield, Zap, TrendingUp, MapPin, Mail, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [counters, setCounters] = useState({
    transactions: 0,
    years: 0,
    speed: 0,
    satisfaction: 0
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
        transactions: 5000,
        years: 15,
        speed: 48,
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

  const services = [
    {
      title: 'الاعتماد المهني QVP',
      description: 'نوفر خدمات الاعتماد المهني للكوادر الطبية والهندسية والتقنية للعمل في المملكة العربية السعودية بكل احترافية وسرعة.',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1454496406107-dc34337da8d6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwzfHx2aXNhJTIwcGFzc3BvcnR8ZW58MHx8fHwxNzgxNzEyNjgzfDA&ixlib=rb-4.1.0&q=85'
    },
    {
      title: 'DataFlow Verification',
      description: 'خدمات التحقق من الشهادات والوثائق الطبية عبر نظام DataFlow المعتمد للمؤسسات والأفراد الراغبين بالعمل في السعودية.',
      icon: FileCheck,
      image: 'https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDZ8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBkb2N1bWVudHN8ZW58MHx8fHwxNzgxNzEyNjc3fDA&ixlib=rb-4.1.0&q=85'
    },
    {
      title: 'تصديق الشهادات',
      description: 'تصديق الشهادات الجامعية والمهنية من وزارة الخارجية والسفارة السعودية لاستخدامها في المملكة.',
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1553697388-94e804e2f0f6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHw0fHx2aXNhJTIwcGFzc3BvcnR8ZW58MHx8fHwxNzgxNzEyNjgzfDA&ixlib=rb-4.1.0&q=85'
    },
    {
      title: 'توثيق العقود',
      description: 'توثيق عقود العمل والاتفاقيات التجارية لدى الجهات الرسمية والسفارة السعودية بكل دقة واحترافية.',
      icon: FileCheck,
      image: 'https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDZ8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBkb2N1bWVudHN8ZW58MHx8fHwxNzgxNzEyNjc3fDA&ixlib=rb-4.1.0&q=85'
    },
    {
      title: 'تأشيرات العمل السعودية',
      description: 'استخراج ومتابعة تأشيرات العمل للمملكة العربية السعودية بأسرع وقت وبأعلى معايير الجودة والموثوقية.',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1454496406107-dc34337da8d6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwzfHx2aXNhJTIwcGFzc3BvcnR8ZW58MHx8fHwxNzgxNzEyNjgzfDA&ixlib=rb-4.1.0&q=85'
    },
    {
      title: 'الاستشارات المهنية',
      description: 'نقدم استشارات متخصصة في مجال الإجراءات والمتطلبات اللازمة للعمل في المملكة العربية السعودية.',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1562564055-71e051d33c19?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHwxfHxjb25zdWx0YXRpb24lMjBwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzgxNzEyNjgzfDA&ixlib=rb-4.1.0&q=85'
    }
  ];

  const advantages = [
    {
      icon: Zap,
      title: 'سرعة الإنجاز',
      description: 'ننجز معاملاتك بأسرع وقت ممكن مع الحفاظ على أعلى معايير الجودة'
    },
    {
      icon: Clock,
      title: 'متابعة مستمرة',
      description: 'نتابع معاملاتك خطوة بخطوة ونبقيك على اطلاع دائم بكل المستجدات'
    },
    {
      icon: Users,
      title: 'دعم احترافي',
      description: 'فريق متخصص جاهز لخدمتك والإجابة على جميع استفساراتك'
    },
    {
      icon: TrendingUp,
      title: 'أسعار منافسة',
      description: 'نقدم أفضل الأسعار في السوق مع جودة خدمة لا تضاهى'
    },
    {
      icon: Award,
      title: 'خبرة واسعة',
      description: 'أكثر من 15 عاماً من الخبرة في مجال خدمات السفارة السعودية'
    },
    {
      icon: CheckCircle,
      title: 'خدمة عملاء متميزة',
      description: 'نضع رضاك في المقام الأول ونسعى دائماً لتقديم أفضل تجربة'
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'استلام الطلب',
      description: 'نستقبل طلبك ونحدد الخدمة المطلوبة والمتطلبات اللازمة'
    },
    {
      step: '2',
      title: 'مراجعة المستندات',
      description: 'نراجع جميع المستندات للتأكد من استيفاء جميع الشروط'
    },
    {
      step: '3',
      title: 'تنفيذ الإجراءات',
      description: 'نبدأ بتنفيذ الإجراءات اللازمة لدى الجهات المختصة'
    },
    {
      step: '4',
      title: 'متابعة الطلب',
      description: 'نتابع سير المعاملة ونبقيك على اطلاع بكل التطورات'
    },
    {
      step: '5',
      title: 'إنجاز المعاملة',
      description: 'نسلمك المعاملة منجزة بالكامل مع جميع الوثائق المطلوبة'
    }
  ];

  const testimonials = [
    {
      name: 'أحمد محمود',
      role: 'مهندس مدني',
      content: 'خدمة ممتازة وسريعة. أنجزوا معاملة الاعتماد المهني في وقت قياسي. أنصح بالتعامل معهم بشدة.',
      rating: 5
    },
    {
      name: 'سارة العلي',
      role: 'طبيبة',
      content: 'احترافية عالية في التعامل ومتابعة مستمرة. حصلت على تأشيرة العمل بكل سهولة بفضل جهودهم.',
      rating: 5
    },
    {
      name: 'محمد الخطيب',
      role: 'مدير شركة',
      content: 'تعاملت معهم لتوثيق عقود العمل وتصديق الشهادات. خدمة متميزة وأسعار معقولة جداً.',
      rating: 5
    },
    {
      name: 'ليلى حسن',
      role: 'صيدلانية',
      content: 'فريق محترف وسريع الاستجابة. أنجزوا معاملة DataFlow بكل دقة واحترافية.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-white/80 backdrop-blur-sm py-5'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <Award className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-800 leading-tight">الشركة المتخصصة</h1>
                <p className="text-xs text-slate-600">لإنجاز معاملات السفارة السعودية</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">الرئيسية</Link>
              <Link to="/services" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">الخدمات</Link>
              <a href="#about" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">من نحن</a>
              <a href="#contact" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">اتصل بنا</a>
            </nav>

            <div className="flex items-center gap-3">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2 shadow-lg shadow-emerald-600/30 transition-all hover:shadow-xl hover:shadow-emerald-600/40">
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline">واتساب</span>
              </Button>
              <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 gap-2 transition-all">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">اتصل الآن</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30"></div>
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidWlsZGluZ3xlbnwwfHx8fDE3ODE3MTI2ODl8MA&ixlib=rb-4.1.0&q=85"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block mb-6 px-6 py-2 bg-emerald-100 rounded-full">
              <p className="text-emerald-700 font-semibold text-sm">الشريك الموثوق لخدمات السفارة السعودية</p>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              الشركة المتخصصة لإنجاز
              <br />
              <span className="text-emerald-600">معاملات السفارة السعودية</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              نقدم حلولاً احترافية وسريعة لإنجاز معاملات السفارة السعودية والتأشيرات المهنية والاعتماد المهني والتصديقات الرسمية بكل دقة وموثوقية.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-16">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg shadow-xl shadow-emerald-600/30 hover:shadow-2xl hover:shadow-emerald-600/40 transition-all">
                تواصل معنا الآن
                <ArrowRight className="w-5 h-5 mr-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-6 text-lg transition-all">
                <MessageCircle className="w-5 h-5 ml-2" />
                واتساب مباشر
              </Button>
            </div>
          </div>

          {/* Statistics Cards */}
          <div id="stats-section" className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-emerald-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">{counters.transactions.toLocaleString()}+</div>
                <p className="text-slate-600 font-medium">معاملة منجزة</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-emerald-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">{counters.years}+</div>
                <p className="text-slate-600 font-medium">سنة خبرة</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-emerald-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">{counters.speed}</div>
                <p className="text-slate-600 font-medium">ساعة متوسط الإنجاز</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-emerald-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">{counters.satisfaction}%</div>
                <p className="text-slate-600 font-medium">رضا العملاء</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Slider Section */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">خدماتنا المتخصصة</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              نقدم مجموعة شاملة من الخدمات الاحترافية لتلبية جميع احتياجاتك
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
              direction: "rtl"
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="group h-full overflow-hidden border-emerald-100 hover:border-emerald-300 shadow-lg hover:shadow-2xl transition-all duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent"></div>
                        <div className="absolute bottom-4 right-4">
                          <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg">
                            <IconComponent className="w-8 h-8 text-emerald-600" />
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                        <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
                        <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 p-0 h-auto font-semibold group/btn">
                          اعرف المزيد
                          <ArrowRight className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="-right-12 border-emerald-600 text-emerald-600 hover:bg-emerald-50" />
            <CarouselNext className="-left-12 border-emerald-600 text-emerald-600 hover:bg-emerald-50" />
          </Carousel>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">لماذا تختارنا؟</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              نتميز بمجموعة من المزايا التي تجعلنا الخيار الأمثل لخدماتك
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <Card
                  key={index}
                  className="group border-emerald-100 hover:border-emerald-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{advantage.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{advantage.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-20 bg-gradient-to-b from-emerald-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">كيف نعمل؟</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              عملية واضحة ومنظمة لضمان إنجاز معاملاتك بكل سهولة
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute right-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-200 via-emerald-400 to-emerald-200"></div>

              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative mb-12 md:flex md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Step Number Circle */}
                  <div className="hidden md:flex absolute right-1/2 transform translate-x-1/2 w-16 h-16 bg-emerald-600 rounded-full items-center justify-center shadow-lg z-10">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>

                  {/* Content Card */}
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <Card className="border-emerald-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-3 md:hidden">
                          <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                            <span className="text-xl font-bold text-white">{step.step}</span>
                          </div>
                          <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                        </div>
                        <h3 className="hidden md:block text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MHx8fHwxNzgxNzEyNjc3fDA&ixlib=rb-4.1.0&q=85"
                  alt="About Us"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-gradient-to-br from-emerald-200 to-emerald-300 rounded-2xl -z-10 opacity-50"></div>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">من نحن</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                الشركة المتخصصة لإنجاز معاملات السفارة السعودية تقدم خدمات احترافية للأفراد والشركات في مجالات التأشيرات المهنية، الاعتماد المهني، تصديق الوثائق، وإنجاز مختلف المعاملات المرتبطة بالسفارة السعودية، مع الالتزام بالدقة والسرعة والاحترافية.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">خبرة طويلة</h4>
                    <p className="text-slate-600">أكثر من 15 عاماً في خدمة العملاء وإنجاز المعاملات</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">فريق متخصص</h4>
                    <p className="text-slate-600">نخبة من الخبراء والمتخصصين في إجراءات السفارة السعودية</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">ثقة العملاء</h4>
                    <p className="text-slate-600">آلاف العملاء الراضين عن خدماتنا المتميزة</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/30">
                اعرف المزيد عنا
                <ArrowRight className="w-5 h-5 mr-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20 bg-gradient-to-b from-emerald-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">خدمات السفارة السعودية الشاملة</h2>
              <p className="text-xl text-slate-600">
                شريكك الموثوق لجميع معاملات السفارة السعودية في الأردن
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">الاعتماد المهني QVP للسعودية</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  نقدم خدمات الاعتماد المهني (Qualification Verification Process) للكوادر الطبية والهندسية والتقنية الراغبة بالعمل في المملكة العربية السعودية. نساعدك في إتمام جميع إجراءات الاعتماد المهني بكل سهولة ويسر، مع متابعة حثيثة لضمان إنجاز معاملتك في أسرع وقت ممكن.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">خدمات DataFlow للتحقق من الشهادات</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  نوفر خدمات DataFlow Verification المعتمدة للتحقق من الشهادات الطبية والأكاديمية. سواء كنت طبيباً أو ممرضاً أو صيدلانياً أو من أي تخصص طبي آخر، نساعدك في إتمام إجراءات DataFlow بكل احترافية للعمل في المملكة العربية السعودية.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">تصديق الشهادات والوثائق الرسمية</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  نقدم خدمات تصديق الشهادات الجامعية والمهنية والوثائق الرسمية من وزارة الخارجية الأردنية والسفارة السعودية. نضمن لك إنجاز معاملات التصديق بكل دقة وسرعة، مع الالتزام بأعلى معايير الجودة والموثوقية.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">تأشيرات العمل السعودية</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  نساعدك في استخراج ومتابعة تأشيرات العمل للمملكة العربية السعودية بكل أنواعها. فريقنا المتخصص يتابع معاملتك خطوة بخطوة لضمان حصولك على تأشيرة العمل في أقصر وقت ممكن.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">آراء عملائنا</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              ما يقوله عملاؤنا الكرام عن خدماتنا
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
              direction: "rtl"
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2">
                  <Card className="border-emerald-100 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-slate-700 mb-6 leading-relaxed text-lg">"{testimonial.content}"</p>
                      <div>
                        <p className="font-bold text-slate-900">{testimonial.name}</p>
                        <p className="text-sm text-slate-600">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-right-12 border-emerald-600 text-emerald-600 hover:bg-emerald-50" />
            <CarouselNext className="-left-12 border-emerald-600 text-emerald-600 hover:bg-emerald-50" />
          </Carousel>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-emerald-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">تواصل معنا</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              نحن هنا لخدمتك والإجابة على جميع استفساراتك
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            <Card className="border-emerald-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">الهاتف</h3>
                <p className="text-slate-600 dir-ltr">+962 6 123 4567</p>
              </CardContent>
            </Card>

            <Card className="border-emerald-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">واتساب</h3>
                <p className="text-slate-600 dir-ltr">+962 79 123 4567</p>
              </CardContent>
            </Card>

            <Card className="border-emerald-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">البريد الإلكتروني</h3>
                <p className="text-slate-600 text-sm">info@saudi-embassy.jo</p>
              </CardContent>
            </Card>

            <Card className="border-emerald-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">ساعات العمل</h3>
                <p className="text-slate-600 text-sm">الأحد - الخميس: 9ص - 5م</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-emerald-100 shadow-2xl bg-gradient-to-br from-emerald-600 to-emerald-700">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold text-white mb-4">ابدأ معاملتك الآن</h3>
                <p className="text-emerald-50 mb-8 text-lg">
                  تواصل معنا اليوم ودعنا نساعدك في إنجاز معاملاتك بكل سهولة واحترافية
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-6 text-lg shadow-xl">
                    <Send className="w-5 h-5 ml-2" />
                    تواصل معنا الآن
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                    <MessageCircle className="w-5 h-5 ml-2" />
                    واتساب مباشر
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">موقعنا</h2>
              <p className="text-xl text-slate-600">
                جبل عمان - الدوار الأول - عمان - الأردن
              </p>
            </div>

            <Card className="overflow-hidden shadow-2xl border-emerald-100">
              <div className="bg-emerald-50 p-12 flex flex-col items-center justify-center min-h-96">
                <MapPin className="w-20 h-20 text-emerald-600 mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">خريطة الموقع</h3>
                <p className="text-slate-600 text-center max-w-md">
                  جبل عمان - الدوار الأول - عمان - الأردن
                </p>
                <Button className="mt-6 bg-emerald-600 hover:bg-emerald-700 text-white">
                  عرض الموقع على خرائط جوجل
                  <ArrowRight className="w-4 h-4 mr-2" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-emerald-800 to-emerald-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <Award className="w-7 h-7 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">الشركة المتخصصة</h3>
                  <p className="text-sm text-emerald-200">لإنجاز معاملات السفارة السعودية</p>
                </div>
              </div>
              <p className="text-emerald-100 leading-relaxed">
                شريكك الموثوق لجميع خدمات السفارة السعودية بأعلى معايير الجودة والاحترافية.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">روابط سريعة</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-emerald-100 hover:text-white transition-colors">الرئيسية</Link>
                </li>
                <li>
                  <Link to="/services" className="text-emerald-100 hover:text-white transition-colors">الخدمات</Link>
                </li>
                <li>
                  <a href="#about" className="text-emerald-100 hover:text-white transition-colors">من نحن</a>
                </li>
                <li>
                  <a href="#contact" className="text-emerald-100 hover:text-white transition-colors">اتصل بنا</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">خدماتنا</h4>
              <ul className="space-y-3">
                <li className="text-emerald-100">الاعتماد المهني QVP</li>
                <li className="text-emerald-100">DataFlow Verification</li>
                <li className="text-emerald-100">تصديق الشهادات</li>
                <li className="text-emerald-100">تأشيرات العمل السعودية</li>
                <li className="text-emerald-100">الاستشارات المهنية</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">تواصل معنا</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-emerald-300 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-emerald-100 dir-ltr">+962 6 123 4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-emerald-300 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-emerald-100 dir-ltr">+962 79 123 4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-emerald-300 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-emerald-100 text-sm break-all">info@saudi-embassy.jo</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-300 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-emerald-100">جبل عمان - الدوار الأول<br />عمان - الأردن</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-emerald-700 pt-8">
            <div className="text-center text-emerald-200">
              <p>© 2024 الشركة المتخصصة لإنجاز معاملات السفارة السعودية. جميع الحقوق محفوظة.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;