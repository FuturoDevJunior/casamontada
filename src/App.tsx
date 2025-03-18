import {
  ChevronRight,
  Clock,
  CreditCard,
  MapPin,
  PenTool as Tool,
  Phone,
  Shield,
  Star,
  Truck,
} from 'lucide-react';

function App() {
  // WhatsApp message templates
  const whatsappMessages = {
    header: "Olá! Gostaria de um orçamento para montagem/desmontagem de móveis. 😊\n\n",
    default: "Olá! Gostaria de um orçamento para montagem/desmontagem de móveis. 😊\n\nPreciso de ajuda com:",
    quote: "Olá! Gostaria de um orçamento para móveis. 😊\n\nPreciso de:\n- Montagem/Desmontagem\n- Bairro: \n- Data preferencial: \n\nPoderia me ajudar?",
    urgent: "Olá! Preciso de um serviço urgente de montagem/desmontagem. 🆘\n\nPoderia me ajudar?",
  };

  const getWhatsAppLink = (message: string) => {
    return `https://wa.me/5521979155398?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            CASA <span className="text-orange-500">MONTADA</span>
          </h1>
          <a
            href={getWhatsAppLink(whatsappMessages.header)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all"
          >
            <Phone size={20} /> Fale Conosco
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="pt-32 pb-20 px-4 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("/images/montagem-moveis-1.jpg")',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        <div className="container mx-auto relative">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Montagem e Desmontagem de Móveis
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Serviço profissional com <span className="text-orange-400 font-semibold">90 dias de garantia</span> no Rio de Janeiro
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={getWhatsAppLink(whatsappMessages.quote)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all text-lg"
              >
                Solicitar Orçamento <ChevronRight size={20} />
              </a>
              <a
                href={getWhatsAppLink(whatsappMessages.urgent)}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all backdrop-blur-sm text-lg"
              >
                <Phone size={20} /> Atendimento Urgente
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
              <Shield className="w-16 h-16 text-orange-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">90 Dias de Garantia</h3>
              <p className="text-gray-600 text-lg">
                Garantia em todos os serviços de montagem e desmontagem. Sua satisfação é nossa prioridade.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
              <Tool className="w-16 h-16 text-orange-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Profissionais Qualificados</h3>
              <p className="text-gray-600 text-lg">
                Equipe experiente e especializada em montagem e desmontagem de móveis.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
              <CreditCard className="w-16 h-16 text-orange-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Pagamento Facilitado</h3>
              <p className="text-gray-600 text-lg">
                Aceitamos cartões, PIX e dinheiro. Parcele em até 12x no cartão.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Nossos Serviços
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-xl">
              <img 
                src="/images/montagem-moveis-2.jpg" 
                alt="Montagem de Móveis no Rio de Janeiro" 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Montagem de Móveis</h3>
                  <p className="text-gray-200">Montagem profissional de qualquer tipo de móvel</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <img 
                src="/images/montagem-moveis-3.jpg" 
                alt="Montagem de Móveis Residenciais" 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Móveis Residenciais</h3>
                  <p className="text-gray-200">Montagem de móveis para sua casa</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <img 
                src="/images/montagem-moveis-4.jpg" 
                alt="Desmontagem de Móveis Rio de Janeiro" 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Desmontagem de Móveis</h3>
                  <p className="text-gray-200">Desmontagem segura para mudanças</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Por que Escolher a CASA MONTADA?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Clock className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Pontualidade</h3>
              <p className="text-gray-600">Respeitamos seu tempo com agendamento preciso</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Star className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Qualidade Garantida</h3>
              <p className="text-gray-600">Serviço impecável com garantia estendida</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Truck className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Atendimento em Todo RJ</h3>
              <p className="text-gray-600">Cobertura completa na região metropolitana</p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Atendemos em toda Região do Rio
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Zona Sul',
              'Zona Norte',
              'Zona Oeste',
              'Centro',
              'Barra da Tijuca',
              'Copacabana',
              'Ipanema',
              'Tijuca',
              'Botafogo',
              'Flamengo',
              'Leblon',
              'Méier'
            ].map((area) => (
              <div key={area} className="flex items-center gap-3 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all">
                <MapPin className="text-orange-500" size={24} />
                <span className="text-lg">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Precisando montar ou desmontar seus móveis?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
            Entre em contato agora e solicite um orçamento sem compromisso. 
            Atendemos em todo Rio de Janeiro!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getWhatsAppLink(whatsappMessages.quote)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-lg font-semibold transition-all text-lg"
            >
              <Phone size={24} /> Falar no WhatsApp
            </a>
            <a
              href={getWhatsAppLink(whatsappMessages.urgent)}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 px-8 py-4 rounded-lg font-semibold transition-all backdrop-blur-sm text-lg"
            >
              <Phone size={24} /> Atendimento Urgente
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            CASA <span className="text-orange-500">MONTADA</span>
          </h2>
          <p className="text-gray-400 text-lg mb-6 max-w-xl mx-auto">
            Montagem e desmontagem de móveis no Rio de Janeiro.
            Qualidade, garantia e profissionalismo.
          </p>
          <div className="h-px w-32 bg-gray-800 mx-auto mb-6" />
          <p className="text-sm text-gray-500">
            © 2024 CASA MONTADA. Desenvolvido por{' '}
            <a
              href="https://www.linkedin.com/in/DevFerreiraG"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-400"
            >
              Gabriel Ferreira
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;