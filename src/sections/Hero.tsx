import { useEffect, useRef } from 'react';
import { ArrowRight, TrendingUp, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stats = [
  { icon: TrendingUp, value: '+150%', label: 'Aumento em Conversões' },
  { icon: Users, value: '500+', label: 'Clientes Atendidos' },
  { icon: Target, value: '98%', label: 'Taxa de Satisfação' },
];

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-slate-900">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-slate-300">Agência de Marketing Digital</span>
          </div>

          {/* Title */}
          <h1 className="reveal text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight" style={{ transitionDelay: '100ms' }}>
            Transforme seu Negócio no{' '}
            <span className="gradient-text">Mundo Digital</span>
          </h1>

          {/* Subtitle */}
          <p className="reveal text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto" style={{ transitionDelay: '200ms' }}>
            Estratégias inovadoras de marketing digital que impulsionam seu crescimento, 
            aumentam suas vendas e fortalecem sua marca no mercado.
          </p>

          {/* CTA Buttons */}
          <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4 mb-16" style={{ transitionDelay: '300ms' }}>
            <Button
              size="lg"
              onClick={() => scrollToSection('#contato')}
              className="gradient-bg hover:opacity-90 text-white rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105 glow-hover group"
            >
              Começar Agora
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('#servicos')}
              className="border-slate-600 text-white hover:bg-slate-800 rounded-full px-8 py-6 text-lg font-medium transition-all duration-300"
            >
              Conhecer Serviços
            </Button>
          </div>

          {/* Stats */}
          <div className="reveal grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8" style={{ transitionDelay: '400ms' }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 group"
              >
                <stat.icon className="h-8 w-8 text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-3xl sm:text-4xl font-display font-bold text-white mb-1">
                  {stat.value}
                </span>
                <span className="text-sm text-slate-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-slate-400" />
        </div>
      </div>
    </section>
  );
}
