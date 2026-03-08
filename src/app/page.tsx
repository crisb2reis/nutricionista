import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full bg-[#f6f7f7]/80 dark:bg-[#151d18]/80 backdrop-blur-md border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl">fitness_center</span>
            <span className="text-xl font-bold tracking-tight text-primary">ProTrainer</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#sobre">Sobre</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#servicos">Serviços</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#processo">Processo</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#depoimentos">Depoimentos</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#contato" className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-sm">
              Agendar Avaliação
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Section 1: Hero */}
        <section className="relative py-12 lg:py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit">
                <span className="material-symbols-outlined text-sm">verified</span>
                Personal Trainer Certificado CREF 12345-G
              </div>
              <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight">
                Transforme seu <span className="text-primary">corpo</span> através do treinamento
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl">
                Treinamento personalizado focado em resultados reais para emagrecimento, hipertrofia e definição. Treine com inteligência e alcance seu objetivo.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contato" className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 transition-all">
                  Agendar Avaliação
                </a>
                <a href="#contato" className="flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
                  <span className="material-symbols-outlined text-green-500">chat</span>
                  Falar no WhatsApp
                </a>
              </div>
              <div className="flex items-center gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="size-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <Image src={`https://i.pravatar.cc/150?u=${i}`} alt="Patient profile photo" width={40} height={40} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 text-yellow-400">
                    <span className="material-symbols-outlined fill-primary text-xl">star</span>
                    <span className="material-symbols-outlined fill-primary text-xl">star</span>
                    <span className="material-symbols-outlined fill-primary text-xl">star</span>
                    <span className="material-symbols-outlined fill-primary text-xl">star</span>
                    <span className="material-symbols-outlined fill-primary text-xl">star</span>
                  </div>
                  <p className="text-sm font-medium text-slate-500">Mais de 500 vidas transformadas</p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl group-hover:bg-primary/20 transition-all"></div>
              <div className="relative bg-slate-200 rounded-3xl aspect-[4/5] overflow-hidden shadow-2xl relative">
                <Image src="/images/hero.png" alt="Personal Trainer Coach" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: About */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50" id="sobre">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <div className="order-2 lg:order-1 flex flex-col gap-6">
                <h2 className="text-3xl font-bold">Autoridade e Dedicação</h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg">
                  Sou apaixonado por fitness e acredito que o movimento é a base de uma vida plena. Com pós-graduação em Fisiologia do Exercício e Biomecânica, meu foco é traduzir a ciência do esporte em treinos práticos para a sua rotina.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                    <span className="material-symbols-outlined text-primary text-3xl mb-2">school</span>
                    <h4 className="font-bold">Formação</h4>
                    <p className="text-sm text-slate-500">Graduado em Ed. Física, Pos-graduado USP.</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                    <span className="material-symbols-outlined text-primary text-3xl mb-2">monitoring</span>
                    <h4 className="font-bold">Acompanhamento</h4>
                    <p className="text-sm text-slate-500">Metodologia exclusiva de suporte contínuo.</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 bg-primary/5 p-2 rounded-3xl border border-primary/10">
                <div className="bg-slate-200 rounded-2xl aspect-video relative overflow-hidden">
                  <Image src="/images/training.png" alt="Acompanhamento na prática" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Target Audience */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-4xl font-black mb-4">Como posso te ajudar?</h2>
              <p className="text-slate-500">Estratégias específicas para diferentes objetivos e necessidades.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "scale", title: "Emagrecimento", desc: "Perca gordura de forma sustentável, com treinos eficientes." },
                { icon: "fitness_center", title: "Hipertrofia", desc: "Ganhe massa muscular com um treino otimizado para sua genética." },
                { icon: "accessibility_new", title: "Força Postural", desc: "Aprenda a recrutar os músculos certos e melhore sua postura." },
                { icon: "bolt", title: "Qualidade de Vida", desc: "Aumente sua energia, melhore o sono e a disposição diária." }
              ].map((item, i) => (
                <div key={i} className="group p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-all text-center">
                  <div className="size-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-4xl">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Process */}
        <section className="py-20 bg-background-dark text-white overflow-hidden" id="processo">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4">Sua jornada para o sucesso</h2>
              <p className="text-slate-400 text-lg">Um processo estruturado para garantir sua evolução.</p>
            </div>
            <div className="relative grid md:grid-cols-4 gap-8">
              <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-primary/30"></div>
              {[
                { step: 1, title: "Agendamento", desc: "Escolha o melhor horário via WhatsApp ou formulário." },
                { step: 2, title: "Avaliação", desc: "Análise completa de biomecânica, medidas e histórico." },
                { step: 3, title: "Plano", desc: "Entrega da planilha de treinos 100% individualizada." },
                { step: 4, title: "Resultados", desc: "Acompanhamento e ajustes constantes." }
              ].map((item) => (
                <div key={item.step} className="relative z-10 flex flex-col items-center text-center group">
                  <div className="size-24 rounded-full bg-primary flex items-center justify-center text-white text-3xl font-black mb-6 border-8 border-background-dark shadow-xl group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Benefits */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-slate-200 rounded-3xl aspect-square lg:aspect-auto lg:h-full min-h-[400px] relative overflow-hidden">
              <Image src="/images/training.png" alt="Treinamento com acompanhamento" fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-10">
              <h2 className="text-4xl font-black leading-tight">Por que investir no <span className="text-primary">acompanhamento de um Personal?</span></h2>
              <div className="grid gap-6">
                {[
                  { icon: "done_all", title: "Técnica Perfeita", desc: "Aprenda a recrutar os músculos certos e reduza vertiginosamente o risco de lesões." },
                  { icon: "schedule", title: "Resultados Acelerados", desc: "Pule a fase de tentativa e erro. Chegue no seu objetivo muito mais rápido com a prescrição ideal." },
                  { icon: "sports_score", title: "Foco e Motivação Diária", desc: "Pare de se sabotar, treinar não precisa ser chato se você estiver acompanhado das instruções certas." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">{item.title}</h4>
                      <p className="text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Testimonials */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50" id="depoimentos">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-black text-center mb-16">Histórias que inspiram</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Mariana S.", result: "-12kg em 6 meses", quote: "\"O acompanhamento me ajudou a sair do sedentarismo. Treinar não é mais uma obrigação, sinto falta quando não faço!\"" },
                { name: "Ricardo M.", result: "Ganho de Massa", quote: "\"Meu desempenho no treino mudou completamente. Hoje tenho energia o dia todo e os resultados no espelho são nítidos.\"" },
                { name: "Carla J.", result: "Qualidade de vida", quote: "\"Aumentei minha força e flexibilidade. Acordava todos os dias com dores nas costas e hoje me sinto 10 anos mais nova.\"" },
              ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="size-14 rounded-full bg-slate-200 overflow-hidden relative">
                      <Image src={`https://i.pravatar.cc/150?u=${10 + i}`} alt={item.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold">{item.name}</h4>
                      <p className="text-xs text-primary font-bold uppercase">{item.result}</p>
                    </div>
                  </div>
                  <p className="italic text-slate-600 dark:text-slate-400">{item.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Services */}
        <section className="py-20" id="servicos">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4">Escolha seu plano</h2>
              <p className="text-slate-500">Opções presenciais e online para sua conveniência.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 shadow-xl overflow-hidden group">
                <div className="absolute top-0 right-0 p-4">
                  <span className="material-symbols-outlined text-primary/20 text-6xl">home_health</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Consultoria Online</h3>
                <p className="text-slate-500 mb-8">Ideal para quem já sabe treinar e quer um planejamento profissional focado.</p>
                <ul className="space-y-3 mb-8 text-sm flex-1">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Planilha via Aplicativo</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Vídeos de Execução</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Suporte WhatsApp</li>
                </ul>
                <button className="w-full py-3 bg-slate-100 dark:bg-slate-700 hover:bg-primary hover:text-white rounded-xl font-bold transition-all mt-8">Quero saber mais</button>
              </div>

              <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 border-2 border-primary shadow-2xl overflow-hidden scale-105 z-10 flex flex-col">
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                  Mais Procurado
                </div>
                <h3 className="text-2xl font-bold mb-4">Personal Ao Vivo</h3>
                <p className="text-slate-500 mb-8">Treino por vídeo-chamada com correção síncrona. Excelente para resultados e hipertrofia em casa.</p>
                <ul className="space-y-3 mb-8 text-sm flex-1">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Correção técnica instantânea</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Motivação real</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Horários fixos programados</li>
                </ul>
                <button className="w-full py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all">Começar Agora</button>
              </div>

              <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 shadow-xl overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 p-4">
                  <span className="material-symbols-outlined text-primary/20 text-6xl">sports_gymnastics</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Personal Presencial</h3>
                <p className="text-slate-500 mb-8">Lado a lado em academia ou condomínio (vagas limitadas). Treino 100% otimizado e focado.</p>
                <ul className="space-y-3 mb-8 text-sm flex-1">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Carga extrema com segurança</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Materiais e ajustes dinâmicos</li>
                </ul>
                <button className="w-full py-3 bg-slate-100 dark:bg-slate-700 hover:bg-primary hover:text-white rounded-xl font-bold transition-all mt-auto">Quero saber mais</button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Final CTA & Form */}
        <section className="py-20 bg-primary/5" id="contato">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-8">
              <h2 className="text-5xl font-black leading-tight text-slate-900 dark:text-slate-100">Pronto para dar o primeiro passo?</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">Preencha os dados e entraremos em contato para agendar sua avaliação e alinhar os objetivos.</p>
              <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 w-fit">
                <div className="size-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Dúvidas rápidas?</p>
                  <p className="font-bold">(11) 99999-9999</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Nome Completo</label>
                  <input className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary" placeholder="Seu nome" type="text" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-2">WhatsApp</label>
                    <input className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary" placeholder="(00) 00000-0000" type="tel" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Email</label>
                    <input className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary" placeholder="seu@email.com" type="email" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Qual seu principal objetivo?</label>
                  <select className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary">
                    <option>Emagrecimento</option>
                    <option>Hipertrofia</option>
                    <option>Condicionamento Físico / Performance</option>
                    <option>Qualidade de Vida / Dores</option>
                  </select>
                </div>
                <button className="w-full py-4 bg-primary text-white text-lg font-bold rounded-xl shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all" type="submit">
                  Quero começar a investir em mim
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Section 10: FAQ */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-black text-center mb-12">Perguntas Frequentes</h2>
            <div className="space-y-4">
              {[
                { q: "Preciso morar na academia para ter resultados?", a: "Absolutamente não! Com 3 ou 4 treinos curtos e intensos na semana, o método já gera uma mudança drástica na sua fisiologia." },
                { q: "A consultoria online tem o mesmo efeito?", a: "Sim, os treinos detalhados via aplicativo dão total autonomia para quem já sabe a execução básica. Além disso, você tem vídeos exclusivos para corrigir dúvidas quando tiver!" },
                { q: "Quanto tempo leva para ver resultados musculares?", a: "Em 2 a 4 semanas já perceberá maior turgor muscular e mudanças na força/disposição. Cerca de 8 a 12 semanas são suficientes para o espelho mostrar as reais diferenças fisiológicas de hipertrofia." }
              ].map((faq, i) => (
                <div key={i} className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center p-6 cursor-pointer list-none bg-white dark:bg-slate-800">
                      <span className="font-bold">{faq.q}</span>
                      <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-primary">expand_more</span>
                    </summary>
                    <div className="p-6 pt-0 bg-white dark:bg-slate-800 text-slate-500">{faq.a}</div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background-dark text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6 text-white">
              <span className="material-symbols-outlined text-primary text-3xl">fitness_center</span>
              <span className="text-xl font-bold tracking-tight">ProTrainer</span>
            </div>
            <p className="max-w-sm mb-6">Sua saúde e seu corpo são sua morada eterna. Invista em quem te ensina o caminho com constância, técnica e dedicação.</p>
            <div className="flex gap-4">
              <a className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white" href="#">
                <span className="material-symbols-outlined">social_leaderboard</span>
              </a>
              <a className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white" href="#">
                <span className="material-symbols-outlined">photo_camera</span>
              </a>
              <a className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white" href="#">
                <span className="material-symbols-outlined">mail</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-sm">
              <li><a className="hover:text-primary transition-colors" href="#sobre">Biografia</a></li>
              <li><a className="hover:text-primary transition-colors" href="#servicos">Planos e Valores</a></li>
              <li><a className="hover:text-primary transition-colors" href="#depoimentos">Alunos de Sucesso</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">location_on</span> São Paulo, SP</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">call</span> (11) 99999-9999</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">email</span> contato@protrainer.com.br</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-xs text-center">
          © 2024 ProTrainer. Todos os direitos reservados. CREF 12345-G.
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a className="fixed bottom-6 right-6 z-50 size-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform" href="#contato">
        <svg className="size-8 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.43 5.63 1.43h.008c6.547 0 11.88-5.335 11.883-11.892a11.826 11.826 0 00-3.488-8.412Z">
          </path>
        </svg>
      </a>
    </>
  );
}
