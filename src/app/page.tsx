import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden font-sans">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#1e230f]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-3xl">fitness_center</span>
              <h2 className="text-xl font-bold tracking-tight">PRO<span className="text-primary">TRAINER</span></h2>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#sobre">Sobre</a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#resultados">Resultados</a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#servicos">Serviços</a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#faq">FAQ</a>
            </nav>
            <div className="flex items-center gap-4">
              <button className="bg-primary text-[#1e230f] px-6 py-2 rounded-lg text-sm font-bold hover:brightness-110 transition-all shadow-lg shadow-primary/20">
                Agendar Agora
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium w-fit">
                <span className="material-symbols-outlined text-sm">verified</span> Resultados comprovados
              </div>
              <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tighter">
                Transforme seu corpo com <span className="text-primary italic">acompanhamento</span> profissional
              </h1>
              <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                Alcance sua melhor versão com treinos sob medida e suporte constante. Resultados reais para pessoas reais, comprovados por mais de 200 alunos satisfeitos.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary text-[#1e230f] px-8 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-transform shadow-xl shadow-primary/25">
                  Agendar avaliação gratuita
                </button>
                <button className="bg-white/5 border border-white/10 px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/10 transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined">chat</span> Falar no WhatsApp
                </button>
              </div>
              <div className="flex items-center gap-6 mt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-[#1e230f] bg-slate-800 flex items-center justify-center overflow-hidden">
                      <Image 
                        src={`https://i.pravatar.cc/150?u=${i}`} 
                        alt="User" 
                        width={48} 
                        height={48} 
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex text-primary">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i} className="material-symbols-outlined fill-1 text-sm">star</span>
                    ))}
                  </div>
                  <span className="text-sm text-slate-400 font-medium">4.9/5 de 200+ alunos</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image 
                  src="/images/hero.png" 
                  alt="Personal Trainer" 
                  width={800} 
                  height={1000} 
                  className="w-full h-full object-cover aspect-[4/5]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white/5" id="sobre">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
                <Image 
                  src="/images/training.png" 
                  alt="Acompanhamento" 
                  width={800} 
                  height={1000} 
                  className="w-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 flex flex-col gap-6">
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm">Minha Trajetória</h2>
              <h3 className="text-4xl font-bold leading-tight">Autoridade em Performance e Saúde</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Com mais de 10 anos de experiência no mercado fitness, ajudei centenas de pessoas a recuperarem sua autoestima e saúde através de métodos cientificamente comprovados.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-xl bg-[#1e230f] border border-white/5 flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary">workspace_premium</span>
                  <div>
                    <h4 className="font-bold">Certificação Internacional</h4>
                    <p className="text-sm text-slate-500">Fisiologia do Exercício Avançada</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#1e230f] border border-white/5 flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary">groups</span>
                  <div>
                    <h4 className="font-bold">+200 Alunos</h4>
                    <p className="text-sm text-slate-500">Transformações reais comprovadas</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border-l-4 border-primary">
                  <span className="material-symbols-outlined text-primary">fitness_center</span>
                  <span className="font-medium text-slate-200 uppercase tracking-wide">Treino Personalizado</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border-l-4 border-primary">
                  <span className="material-symbols-outlined text-primary">support_agent</span>
                  <span className="font-medium text-slate-200 uppercase tracking-wide">Acompanhamento Individual</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Por que treinar comigo?</h2>
          <p className="text-slate-400">Muito além da estética, entregamos qualidade de vida.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: "monitor_weight", title: "Emagrecimento", desc: "Protocolos focados em queima calórica e aceleração metabólica." },
            { icon: "exercise", title: "Ganho de Massa", desc: "Hipertrofia estratégica com periodização de cargas." },
            { icon: "accessibility_new", title: "Postura", desc: "Fortalecimento do core e correção de desequilíbrios." },
            { icon: "bolt", title: "Disposição", desc: "Melhora do condicionamento físico para o dia a dia." }
          ].map((benefit, i) => (
            <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 transition-all text-center group">
              <span className="material-symbols-outlined text-5xl text-primary mb-6 group-hover:scale-110 transition-transform block">{benefit.icon}</span>
              <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
              <p className="text-slate-400 text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-primary/5" id="resultados">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 italic underline decoration-primary underline-offset-8">Transformações Reais</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-[#1e230f] rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                <div className="grid grid-cols-2 bg-slate-800 h-48">
                  <div className="bg-slate-700 animate-pulse"></div>
                  <div className="bg-slate-600 animate-pulse border-l border-white/20"></div>
                </div>
                <div className="p-6">
                  <div className="flex gap-1 text-primary mb-2">
                    {[1, 2, 3, 4, 5].map((s) => <span key={s} className="material-symbols-outlined text-xs fill-1">star</span>)}
                  </div>
                  <h4 className="font-bold text-lg mb-2">Aluno {i}</h4>
                  <p className="text-slate-400 text-sm italic">"Resultados incríveis em apenas 12 semanas. Recomendo muito!"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24" id="servicos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Escolha sua Modalidade</h2>
          <p className="text-slate-400">Temos o plano ideal para a sua rotina e objetivos.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          <ServiceCard 
            title="Presencial" 
            desc="Acompanhamento de perto em academia parceira ou condomínio." 
            features={["Foco total na execução", "Material incluso"]}
            buttonText="Quero saber mais"
          />
          <ServiceCard 
            title="Online (Personal)" 
            desc="Treino ao vivo via vídeo-chamada. Onde você estiver." 
            features={["Liberdade geográfica", "Gravação das aulas"]}
            highlighted
            buttonText="Quero saber mais"
          />
          <ServiceCard 
            title="Consultoria" 
            desc="Planilha personalizada via App + suporte via WhatsApp." 
            features={["Treine no seu horário", "App exclusivo"]}
            buttonText="Quero saber mais"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 overflow-hidden relative">
        <div className="absolute inset-0 bg-primary/10 -skew-y-3"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-[#1e230f] border border-primary/30 rounded-3xl p-8 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Agende sua primeira avaliação <span className="text-primary italic">totalmente gratuita</span></h2>
            <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto mb-12">
              <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">analytics</span> análise de composição corporal</div>
              <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">target</span> metas realistas</div>
              <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">calendar_today</span> planejamento de rotina</div>
              <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> sem compromisso</div>
            </div>
            <button className="bg-primary text-[#1e230f] px-12 py-5 rounded-2xl text-2xl font-black hover:scale-105 transition-all shadow-2xl shadow-primary/40 uppercase">
              Quero começar agora
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white/5" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            <FAQItem question="Preciso já estar treinando?" answer="Não! Atendo todos os níveis, do iniciante ao atleta." />
            <FAQItem question="Como funciona o online?" answer="Chamadas de vídeo em tempo real com acompanhamento total." />
            <FAQItem question="Quanto tempo para ver resultados?" answer="Disposição melhora em 4 semanas; física entre 8-12 semanas." />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">fitness_center</span>
              <h2 className="text-lg font-bold tracking-tight">PRO<span className="text-primary">TRAINER</span></h2>
            </div>
            <div className="text-sm text-slate-500">© 2024 ProTrainer. Todos os direitos reservados.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ title, desc, features, highlighted = false, buttonText }: any) {
  return (
    <div className={`relative p-8 rounded-3xl border transition-all flex flex-col h-full ${highlighted ? 'bg-primary text-[#1e230f] scale-105 z-10 border-transparent shadow-2xl shadow-primary/20' : 'bg-white/5 border-white/10 hover:border-primary'}`}>
      {highlighted && <div className="absolute top-4 right-4 bg-[#1e230f] text-primary px-3 py-1 rounded-full text-xs font-bold">MAIS POPULAR</div>}
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className={`mb-8 flex-grow ${highlighted ? 'text-[#1e230f]/80' : 'text-slate-400'}`}>{desc}</p>
      <ul className="mb-8 space-y-3">
        {features.map((f: string, i: number) => (
          <li key={i} className="flex items-center gap-2 text-sm font-medium">
            <span className={`material-symbols-outlined text-sm ${highlighted ? 'text-[#1e230f]' : 'text-primary'}`}>check_circle</span> {f}
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 font-bold rounded-xl transition-all ${highlighted ? 'bg-[#1e230f] text-primary hover:brightness-125' : 'border border-primary text-primary hover:bg-primary hover:text-[#1e230f]'}`}>{buttonText}</button>
    </div>
  );
}

function FAQItem({ question, answer }: any) {
  return (
    <details className="group bg-[#1e230f] rounded-xl border border-white/10 overflow-hidden">
      <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold">
        {question}
        <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
      </summary>
      <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">{answer}</div>
    </details>
  );
}
