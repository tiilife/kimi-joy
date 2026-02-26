import { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const portfolioItems = [
  {
    id: 1,
    title: 'Campanha de Lançamento',
    category: 'Redes Sociais',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    description: 'Estratégia completa de lançamento que gerou 300% de aumento em vendas.',
  },
  {
    id: 2,
    title: 'Identidade Visual',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    description: 'Criação de identidade visual completa para startup de tecnologia.',
  },
  {
    id: 3,
    title: 'Site Institucional',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
    description: 'Desenvolvimento de site responsivo com foco em conversão.',
  },
  {
    id: 4,
    title: 'Gestão de Tráfego',
    category: 'Ads',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    description: 'Campanhas de Google Ads e Meta Ads com ROI de 500%.',
  },
  {
    id: 5,
    title: 'SEO Estratégico',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80',
    description: 'Otimização que levou o cliente à primeira página do Google.',
  },
  {
    id: 6,
    title: 'Campanha de Engajamento',
    category: 'Redes Sociais',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80',
    description: 'Aumento de 200% no engajamento orgânico em 3 meses.',
  },
];

const categories = ['Todos', 'Redes Sociais', 'Branding', 'Web Design', 'Ads', 'SEO'];

export function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

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

  const filteredItems = selectedCategory === 'Todos' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="reveal">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium mb-6">
              Portfólio
            </span>
          </div>
          
          <h2 className="reveal text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6" style={{ transitionDelay: '100ms' }}>
            Nossos{' '}
            <span className="gradient-text">Trabalhos</span>
          </h2>
          
          <p className="reveal text-slate-400 text-lg" style={{ transitionDelay: '200ms' }}>
            Conheça alguns dos projetos que desenvolvemos e os resultados que alcançamos.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="reveal flex flex-wrap justify-center gap-2 mb-12" style={{ transitionDelay: '300ms' }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'gradient-bg text-white'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="reveal group relative overflow-hidden rounded-2xl cursor-pointer"
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              onClick={() => setSelectedItem(item)}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-display font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-4xl bg-slate-900 border-slate-800 p-0 overflow-hidden">
          {selectedItem && (
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-square md:aspect-auto">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium mb-4 w-fit">
                  {selectedItem.category}
                </span>
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  {selectedItem.title}
                </h3>
                <p className="text-slate-400 mb-6">
                  {selectedItem.description}
                </p>
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Solicitar orçamento
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
