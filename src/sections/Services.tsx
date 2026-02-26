import { useEffect, useRef } from 'react';
import { 
  Globe, 
  Share2, 
  FileEdit, 
  Search, 
  TrendingUp, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Criação de Sites',
    description: 'Tenha um site profissional e atualizado no mercado digital. Design moderno, responsivo e otimizado para conversões.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Share2,
    title: 'Gestão de Redes Sociais',
    description: 'Tenha uma conexão efetiva com seus clientes. Estratégias de conteúdo que engajam e convertem.',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: FileEdit,
    title: 'Edição de Conteúdo',
    description: 'Atuamos na edição e atualização dos conteúdos da sua empresa. Textos profissionais que comunicam valor.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Search,
    title: 'Otimização e SEO',
    description: 'Garantimos que seu site tenha visibilidade nos maiores sites de pesquisas do mundo. Alcance o topo do Google.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: TrendingUp,
    title: 'Tráfego Pago',
    description: 'Promova sua empresa nas maiores redes sociais do mundo com uma gestão eficaz e excelentes resultados.',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: MessageSquare,
    title: 'Consultoria',
    description: 'Oferecemos soluções de consultoria de marketing para sua empresa. Estratégias personalizadas para seu negócio.',
    color: 'from-red-500 to-orange-500',
  },
];

export function Services() {
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

  return (
    <section
      id="servicos"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-slate-900"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal">
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium mb-6">
              Nossos Serviços
            </span>
          </div>
          
          <h2 className="reveal text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6" style={{ transitionDelay: '100ms' }}>
            Soluções Completas em{' '}
            <span className="gradient-text">Marketing Digital</span>
          </h2>
          
          <p className="reveal text-slate-400 text-lg" style={{ transitionDelay: '200ms' }}>
            Oferecemos um conjunto completo de serviços para impulsionar sua presença digital 
            e alcançar resultados extraordinários.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="reveal group relative p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:translate-y-[-8px] overflow-hidden"
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Hover Gradient */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${service.color}`} />
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-slate-400 mb-5 leading-relaxed">
                {service.description}
              </p>

              {/* Link */}
              <a 
                href="#contato" 
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group/link"
              >
                Saiba mais
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
