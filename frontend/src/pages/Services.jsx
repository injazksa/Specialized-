import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Award, FileCheck, Shield, Users, Clock, CheckCircle, ArrowRight, Mail, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const Services = () => {
  const services = [
    {
      title: 'الاعتماد المهني QVP',
      icon: Award,
      description: 'نوفر خدمات الاعتماد المهني (Qualification Verification Process) للكوادر الطبية والهندسية والتقنية للعمل في المملكة العربية السعودية.',
      longDescription: 'الاعتماد المهني QVP هو إجراء إلزامي للمهنيين الراغبين بالعمل في المملكة العربية السعودية. نقدم خدمة شاملة تشمل التقديم والمتابعة وضمان إنجاز المعاملة في أسرع وقت ممكن. فريقنا المتخصص يتابع كل خطوة لضمان نجاح العملية.',
      benefits: [
        'متابعة حثيثة لجميع مراحل الاعتماد',
        'إرشاد كامل للمستندات المطلوبة',
        'سرعة في الإنجاز',
        'دعم فني متخصص'
      ],
      documents: [
        'الشهادة الجامعية مصدقة',
        'كشف علامات مصدق',
        'شهادة خبرة إن وجدت',
        'نسخة من جواز السفر',
        'صورة شخصية'
      ],
      duration: '7-14 يوم عمل',
      image: 'https://images.unsplash.com/photo-1454496406107-dc34337da8d6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwzfHx2aXNhJTIwcGFzc3BvcnR8ZW58MHx8fHwxNzgxNzEyNjgzfDA&ixlib=rb-4.1.0&q=85'
    },
    {
      title: 'DataFlow Verification',
      icon: FileCheck,
      description: 'خدمات التحقق من الشهادات والوثائق الطبية عبر نظام DataFlow المعتمد للمؤسسات والأفراد الراغبين بالعمل في السعودية.',
      longDescription: 'DataFlow هو النظام المعتمد للتحقق من الشهادات الطبية والأكاديمية للعاملين في القطاع الصحي. نقدم خدمة متكاملة تشمل التقديم لنظام DataFlow ومتابعة العملية حتى صدور التقرير النهائي.',
      benefits: [
        'خبرة واسعة في نظام DataFlow',
        'متابعة يومية للطلبات',
        'ضمان دقة البيانات المقدمة',
        'إرشاد شامل للإجراءات'
      ],
      documents: [
        'الشهادة الجامعية الأصلية',
        'كشف العلامات الأصلي',
        'شهادة التخرج',
        'رخصة مزاولة المهنة',
        'جواز السفر'
      ],
      duration: '10-21 يوم عمل',
      image: 'https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDZ8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBkb2N1bWVudHN8ZW58MHx8fHwxNzgxNzEyNjc3fDA&ixlib=rb-4.1.0&q=85'
    },
    {
      title: 'تصديق الشهادات',
      icon: Shield,
      description: 'تصديق الشهادات الجامعية والمهنية من وزارة الخارجية والسفارة السعودية لاستخدامها في المملكة.',
      longDescription: 'نقدم خدمات تصديق الشهادات والوثائق الرسمية من وزارة الخارجية الأردنية والسفارة السعودية. نضمن لك تصديق شهاداتك بكل دقة وسرعة وفق الإجراءات الرسمية المعتمدة.',
      benefits: [
        'تصديق من جميع الجهات الرسمية',
        'سرعة في الإنجاز',
        'دقة في المعاملة',
        'أسعار تنافسية'
      ],
      documents: [
        'الشهادة الأصلية',
        'كشف العلامات الأصلي',
        'نسخة من جواز السفر',
        'صورة شخصية',
        'وكالة إن لزم الأمر'
      ],
      duration: '5-10 أيام عمل',
      image: 'https://images.unsplash.com/photo-1553697388-94e804e2f0f6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHw0fHx2aXNhJTIwcGFzc3BvcnR8ZW58MHx8fHwxNzgxNzEyNjgzfDA&ixlib=rb-4.1.0&q=85'
    },
    {
      title: 'توثيق العقود',
      icon: FileCheck,
      description: 'توثيق عقود العمل والاتفاقيات التجارية لدى الجهات الرسمية والسفارة السعودية بكل دقة واحترافية.',
      longDescription: 'نقدم خدمات توثيق العقود والاتفاقيات لدى الجهات الرسمية المختصة والسفارة السعودية. نضمن لك توثيق عقودك وفق الأصول القانونية والإجراءات المعتمدة.',
      benefits: [
        'توثيق رسمي معتمد',
        'خدمة سريعة',
        'استشارة قانونية',
        'متابعة شاملة'
      ],
      documents: [
        'العقد الأصلي',
        'نسخة من هويات الأطراف',
        'وكالة رسمية إن لزم',
        'مستندات داعمة حسب نوع العقد'
      ],
      duration: '3-7 أيام عمل',
      image: 'https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDZ8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBkb2N1bWVudHN8ZW58MHx8fHwxNzgxNzEyNjc3fDA&ixlib=rb-4.1.0&q=85'
    },
    {
      title: 'تأشيرات العمل السعودية',
      icon: Award,
      description: 'استخراج ومتابعة تأشيرات العمل للمملكة العربية السعودية بأسرع وقت وبأعلى معايير الجودة والموثوقية.',
      longDescription: 'نساعدك في استخراج تأشيرات العمل للمملكة العربية السعودية بجميع أنواعها. فريقنا المتخصص يتابع معاملتك من البداية حتى حصولك على التأشيرة.',
      benefits: [
        'خبرة طويلة في إجراءات التأشيرات',
        'متابعة مستمرة',
        'سرعة في الإنجاز',
        'دعم كامل'
      ],
      documents: [
        'جواز سفر ساري المفعول',
        'صورة شخصية',
        'الشهادات المطلوبة',
        'عقد العمل',
        'تقرير طبي'
      ],
      duration: '7-14 يوم عمل',
      image: 'https://images.unsplash.com/photo-1454496406107-dc34337da8d6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwzfHx2aXNhJTIwcGFzc3BvcnR8ZW58MHx8fHwxNzgxNzEyNjgzfDA&ixlib=rb-4.1.0&q=85'
    },
    {
      title: 'الاستشارات المهنية',
      icon: Users,
      description: 'نقدم استشارات متخصصة في مجال الإجراءات والمتطلبات اللازمة للعمل في المملكة العربية السعودية.',
      longDescription: 'نوفر استشارات متخصصة لكل من يرغب بالعمل في المملكة العربية السعودية. نساعدك في فهم جميع المتطلبات والإجراءات اللازمة لضمان نجاح مسيرتك المهنية.',
      benefits: [
        'استشاريون متخصصون',
        'معلومات دقيقة ومحدثة',
        'خطة عمل واضحة',
        'متابعة مستمرة'
      ],
      documents: [
        'السيرة الذاتية',
        'الشهادات الأكاديمية',
        'شهادات الخبرة',
        'أي مستندات ذات صلة'
      ],
      duration: 'حسب الحاجة',
      image: 'https://images.unsplash.com/photo-1562564055-71e051d33c19?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHwxfHxjb25zdWx0YXRpb24lMjBwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzgxNzEyNjgzfDA&ixlib=rb-4.1.0&q=85'
    }
  ];

  const faqs = [
    {
      question: 'ما هو الاعتماد المهني QVP؟',
      answer: 'الاعتماد المهني (QVP) هو عملية التحقق من مؤهلاتك المهنية والأكاديمية من قبل الجهات المختصة في المملكة العربية السعودية. هذا الإجراء إلزامي للعديد من المهن خاصة في القطاعات الطبية والهندسية والتقنية.'
    },
    {
      question: 'كم يستغرق إجراء DataFlow؟',
      answer: 'عادة يستغرق إجراء DataFlow من 10 إلى 21 يوم عمل حسب الجامعة والدولة الصادرة منها الشهادة. نحن نتابع طلبك بشكل يومي ونبقيك على اطلاع بكل المستجدات.'
    },
    {
      question: 'ما هي المستندات المطلوبة لتصديق الشهادات؟',
      answer: 'تحتاج إلى الشهادة الأصلية، كشف العلامات الأصلي، نسخة من جواز السفر، صورة شخصية، ووكالة إن لزم الأمر. نقوم بإرشادك لجميع المتطلبات بالتفصيل عند التواصل معنا.'
    },
    {
      question: 'هل تقدمون خدمة المتابعة المستمرة؟',
      answer: 'نعم، نوفر متابعة مستمرة لجميع معاملاتك. فريقنا المتخصص يتابع كل خطوة من خطوات إنجاز معاملتك ويبقيك على اطلاع دائم بكل التطورات.'
    },
    {
      question: 'كيف يمكنني التواصل معكم؟',
      answer: 'يمكنك التواصل معنا عبر الهاتف أو واتساب أو البريد الإلكتروني. نحن متاحون خلال ساعات العمل من الأحد إلى الخميس من 9 صباحاً حتى 5 مساءً.'
    },
    {
      question: 'ما هي تكلفة الخدمات؟',
      answer: 'تختلف التكلفة حسب نوع الخدمة المطلوبة. نقدم أسعاراً تنافسية في السوق مع الحفاظ على أعلى معايير الجودة. يرجى التواصل معنا للحصول على عرض سعر مفصل.'
    }
  ];

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg py-3">
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
              <Link to="/services" className="text-emerald-600 font-medium">الخدمات</Link>
              <a href="/#about" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">من نحن</a>
              <a href="/#contact" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">اتصل بنا</a>
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

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">خدماتنا المتخصصة</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              نقدم مجموعة شاملة من الخدمات الاحترافية لتلبية جميع احتياجاتك المتعلقة بمعاملات السفارة السعودية
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto ${isEven ? '' : 'md:flex-row-reverse'}`}>
                  <div className={`${isEven ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent"></div>
                      <div className="absolute bottom-6 right-6">
                        <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
                          <IconComponent className="w-10 h-10 text-emerald-600" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`${isEven ? 'md:order-2' : 'md:order-1'}`}>
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">{service.title}</h2>
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">{service.longDescription}</p>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-emerald-600" />
                          المزايا:
                        </h4>
                        <ul className="space-y-2 mr-7">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="text-slate-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                          <FileCheck className="w-5 h-5 text-emerald-600" />
                          المستندات المطلوبة:
                        </h4>
                        <ul className="space-y-2 mr-7">
                          {service.documents.map((doc, idx) => (
                            <li key={idx} className="text-slate-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span>
                              {doc}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center gap-2 text-slate-700">
                        <Clock className="w-5 h-5 text-emerald-600" />
                        <span className="font-semibold">مدة الإنجاز:</span>
                        <span>{service.duration}</span>
                      </div>

                      <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/30">
                        اطلب الخدمة الآن
                        <ArrowRight className="w-5 h-5 mr-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-emerald-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">الأسئلة الشائعة</h2>
              <p className="text-xl text-slate-600">
                إجابات على أكثر الأسئلة شيوعاً حول خدماتنا
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white border-emerald-100 rounded-2xl px-6 shadow-lg">
                  <AccordionTrigger className="text-right text-lg font-semibold text-slate-900 hover:text-emerald-600 py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-emerald-100 shadow-2xl bg-gradient-to-br from-emerald-600 to-emerald-700 overflow-hidden">
              <CardContent className="p-12 md:p-16 text-center relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    هل أنت مستعد للبدء؟
                  </h2>
                  <p className="text-xl text-emerald-50 mb-10 max-w-2xl mx-auto leading-relaxed">
                    تواصل معنا اليوم واحصل على استشارة مجانية. فريقنا المتخصص جاهز لمساعدتك في إنجاز معاملاتك بكل سهولة واحترافية.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 px-10 py-7 text-lg shadow-2xl">
                      <Phone className="w-5 h-5 ml-2" />
                      اتصل بنا الآن
                    </Button>
                    <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-10 py-7 text-lg">
                      <MessageCircle className="w-5 h-5 ml-2" />
                      واتساب مباشر
                    </Button>
                  </div>
                </div>
              </CardContent>
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
                  <a href="/#about" className="text-emerald-100 hover:text-white transition-colors">من نحن</a>
                </li>
                <li>
                  <a href="/#contact" className="text-emerald-100 hover:text-white transition-colors">اتصل بنا</a>
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

export default Services;