import { useEffect, useRef } from 'react';
import { Check, Lightbulb, Heart, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const diferenciais = [
  {
    icon: Lightbulb,
    title: 'Estratégia Personalizada',
    description: 'Cada negócio é único. Criamos estratégias sob medida para seus objetivos.',
  },
  {
    icon: Heart,
    title: 'Relacionamento de Valor',
    description: 'Construímos parcerias duradouras baseadas em resultados e confiança.',
  },
  {
    icon: Rocket,
    title: 'Inovação Constante',
    description: 'Sempre atualizados com as últimas tendências do mercado digital.',
  },
];

const checkItems = [
 'Equipe especializada e certificada',
  'Mais de 10 anos de experiência',
  'Atendimento personalizado',
  'Relatórios detalhados e transparentes',
  'Foco em resultados mensuráveis',
];

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
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
      id="sobre"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <div className="reveal">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
                Sobre Nós
              </span>
            </div>
            
            <h2 className="reveal text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6" style={{ transitionDelay: '100ms' }}>
              Invista em{' '}
              <span className="gradient-text">Inovação</span>
            </h2>
            
            <p className="reveal text-slate-400 text-lg mb-8" style={{ transitionDelay: '200ms' }}>
              Nosso foco é aprimorar e proporcionar os serviços de marketing digital da sua empresa. 
              Auxiliamos na criação de uma relação mais sólida com seu público-alvo, por meio de 
              propostas inovadoras e experiências criativas.
            </p>

            <div className="reveal space-y-4 mb-8" style={{ transitionDelay: '300ms' }}>
              {checkItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-blue-500" />
                  </div>
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="reveal" style={{ transitionDelay: '400ms' }}>
              <Button
                onClick={() => scrollToSection('#servicos')}
                className="gradient-bg hover:opacity-90 text-white rounded-full px-8 transition-all duration-300 hover:scale-105"
              >
                Conhecer Serviços
              </Button>
            </div>
          </div>

          {/* Right Content - Cards */}
          <div className="space-y-6">
            {diferenciais.map((item, index) => (
              <div
                key={index}
                className="reveal group p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:translate-y-[-4px]"
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
