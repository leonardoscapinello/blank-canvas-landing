import { createFileRoute } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  HeartHandshake,
  MessageCircle,
  Moon,
  Play,
  Quote,
  ShieldCheck,
  Sparkles,
  TimerReset,
  Users,
  X,
} from "lucide-react";

export const Route = createFileRoute("/high-ticket-sem-call")({
  head: () => ({
    meta: [
      { title: "High Ticket Sem Call | Liz Valz" },
      {
        name: "description",
        content:
          "Uma página de venda para o método High Ticket Sem Call, com VSL, prova, oferta, bônus e garantia.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap",
      },
    ],
  }),
  component: HighTicketSemCallPage,
});

const assetBase = "https://highticketsemcall.lovable.app/assets";
const checkoutHref = "#oferta";

const painPoints = [
  {
    title: "Cansada",
    text: "de vender agenda cheia como se fosse liberdade.",
    image: "pain-tired-D1wm6FOM.jpg",
  },
  {
    title: "Presas em reuniões",
    text: "que terminam em 'vou pensar' e nenhum pagamento.",
    image: "pain-meeting-CTAAgXKJ.jpg",
  },
  {
    title: "Sem margem emocional",
    text: "porque cada venda depende da sua energia ao vivo.",
    image: "pain-exhausted-Dd9ibj0B.jpg",
  },
  {
    title: "Tentando desconto",
    text: "quando o problema real é clareza, desejo e diferenciação.",
    image: "pain-discount-Bgj9q-4T.jpg",
  },
];

const methodPhases = [
  {
    number: "01",
    title: "Fundamentos",
    text: "Antes de vender sem call, você precisa parar de tratar sua oferta como uma explicação longa. Aqui nasce a base: posicionamento, clareza e segurança para cobrar alto valor sem se justificar o tempo todo.",
    passage: "Você deixa de se apresentar como alguém que precisa convencer e começa a ser percebida como alguém que conduz.",
    image: "phase-1-BwsVAJxj.jpg",
  },
  {
    number: "02",
    title: "Oferta desejável",
    text: "Depois da base, vem a virada de percepção. Sua entrega passa a ser embalada em uma promessa mais nítida, com linguagem que aproxima a cliente do desejo em vez de empurrá-la para uma reunião.",
    passage: "O que antes parecia complexo começa a caber em uma frase que a cliente entende e sente.",
    image: "phase-2-B0Yjz2U4.jpg",
  },
  {
    number: "03",
    title: "Venda mais preparada",
    text: "A terceira fase organiza os pontos de contato que educam, aquecem e conduzem a decisão. A conversa deixa de começar do zero, porque a cliente já chega com contexto.",
    passage: "A venda começa antes do inbox, antes da call, antes da objeção aparecer.",
    image: "phase-3-CCvcUOi3.jpg",
  },
  {
    number: "04",
    title: "Clientes que voltam",
    text: "Por fim, a venda deixa de ser um evento isolado. A experiência pós-compra sustenta confiança, indicação e novas decisões com menos esforço.",
    passage: "Você não constrói apenas uma venda. Constrói continuidade.",
    image: "phase-4-ppwDPfDa.jpg",
  },
];

const testimonials = [
  {
    name: "Mariana",
    image: "depoimento-mariana-BWgjcm6x.jpeg",
  },
  {
    name: "Natalia",
    image: "depoimento-natalia-eux5Hxv8.jpeg",
  },
  {
    name: "Sol",
    image: "depoimento-sol-DNYdFCXE.jpeg",
  },
  {
    name: "Carol",
    image: "depoimento-carol-CwsUFNsI.jpeg",
  },
];

const bonuses = [
  {
    title: "Script de fechamento via chat",
    value: "R$147",
    image: "bonus-chat-E8d03-dJ.jpg",
  },
  {
    title: "Roteiro de apresentação individual",
    value: "R$97",
    image: "bonus-presentation-CqMZBGu-.jpg",
  },
  {
    title: "Mapa de criação da oferta premium",
    value: "R$197",
    image: "bonus-product-ewexqK9c.jpg",
  },
];

const offerItems = [
  "High Ticket Sem Call completo",
  "Script de fechamento via chat",
  "Roteiro de apresentação individual",
  "Mapa de criação da oferta premium",
  "Acesso aos módulos e materiais de apoio",
  "Garantia incondicional de 7 dias",
];

const faqs = [
  {
    question: "Como é o curso por dentro?",
    answer:
      "A formação é organizada em fases para você evoluir da base da oferta até uma venda mais clara, preparada e menos dependente de reunião.",
  },
  {
    question: "Eu preciso estar vendendo agora?",
    answer:
      "Não. A página conversa tanto com quem já vende alto valor quanto com quem precisa estruturar uma oferta premium antes de escalar.",
  },
  {
    question: "Funciona para serviços?",
    answer:
      "Sim. A proposta é especialmente forte para especialistas, profissionais liberais, mentoras e prestadoras de serviço.",
  },
  {
    question: "Vou precisar fazer call depois?",
    answer:
      "A proposta é criar clareza e desejo antes da conversa. A call deixa de ser o centro da venda.",
  },
  {
    question: "Por quanto tempo tenho acesso?",
    answer:
      "Esse detalhe deve ser confirmado na oferta final antes da publicação.",
  },
];

function HighTicketSemCallPage() {
  return (
    <main className="htsc-page">
      <HtscAmbient />
      <HtscHero />
      <PainSection />
      <OriginStory />
      <MethodReveal />
      <ComparisonSection />
      <ProofSection />
      <PhasesSection />
      <BonusSection />
      <OfferSection />
      <MentorSection />
      <GuaranteeSection />
      <FaqSection />
      <FinalSection />
    </main>
  );
}

function HtscAmbient() {
  return (
    <div className="htsc-ambient" aria-hidden="true">
      <span className="htsc-haze htsc-haze-one" />
      <span className="htsc-haze htsc-haze-two" />
      <span className="htsc-paper" />
    </div>
  );
}

function HtscHero() {
  return (
    <section className="htsc-hero">
      <div className="htsc-shell">
        <nav className="htsc-nav" aria-label="High Ticket Sem Call">
          <img src={`${assetBase}/htsc-logo-DmYL6zn9.png`} alt="High Ticket Sem Call" />
          <div>
            <span>
              <Moon aria-hidden="true" />
              Formação Liz Valz
            </span>
            <a href="#metodo">Ver método</a>
          </div>
        </nav>

        <div className="htsc-hero-grid">
          <div className="htsc-hero-copy htsc-rise">
            <span className="htsc-label">High Ticket sem depender de call</span>
            <h1>
              Venda alto valor sem viver presa em reuniões.
            </h1>
            <p>
              Uma formação para estruturar uma oferta premium com mais clareza,
              desejo e autonomia, sem colocar todo o peso do fechamento na sua
              agenda.
            </p>
            <div className="htsc-hero-actions">
              <a className="htsc-cta" href={checkoutHref}>
                Quero vender sem call
                <ArrowRight aria-hidden="true" />
              </a>
              <div className="htsc-soft-price">
                <span>acesso por</span>
                <strong>12x de R$29,99</strong>
              </div>
            </div>
          </div>

          <div className="htsc-video-column htsc-rise" style={{ "--i": 1 } as CSSProperties}>
            <div className="htsc-video-shell">
              <div className="htsc-video-aspect">
                <button className="htsc-play" type="button" aria-label="Player da VSL">
                  <Play fill="currentColor" aria-hidden="true" />
                </button>
                <div>
                  <span>VSL principal</span>
                  <strong>Assista antes de decidir</strong>
                </div>
              </div>
              <div className="htsc-video-note">
                <TimerReset aria-hidden="true" />
                <span>
                  A aula apresenta a lógica por trás da venda sem call e mostra
                  por que a clareza da oferta vem antes da conversa.
                </span>
              </div>
            </div>
            <div className="htsc-hero-proof">
              <span>Oferta desejável</span>
              <span>Clareza de valor</span>
              <span>Venda com autonomia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PainSection() {
  return (
    <section className="htsc-section htsc-warm">
      <div className="htsc-shell htsc-two-col">
        <div className="htsc-sticky">
          <span className="htsc-label">O custo invisível</span>
          <h2>Agenda cheia pode parecer sucesso. Até virar uma prisão bonita.</h2>
          <p>
            A call estratégica coloca o peso da venda no seu tempo, na sua energia
            e na sua capacidade de convencer uma pessoa por vez.
          </p>
        </div>
        <div className="htsc-pain-list">
          {painPoints.map((pain, index) => (
            <article className="htsc-pain-row htsc-rise" style={{ "--i": index } as CSSProperties} key={pain.title}>
              <img src={`${assetBase}/${pain.image}`} alt="" />
              <div>
                <span>{pain.title}</span>
                <p>{pain.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function OriginStory() {
  return (
    <section className="htsc-section htsc-story">
      <div className="htsc-shell htsc-story-grid">
        <figure className="htsc-story-image htsc-rise">
          <img src={`${assetBase}/liz-beginning-KWWBUyqJ.jpg`} alt="Liz Valz no início da jornada" />
          <figcaption>Antes da virada, a venda também dependia demais dela.</figcaption>
        </figure>
        <div className="htsc-story-copy htsc-rise" style={{ "--i": 1 } as CSSProperties}>
          <span className="htsc-label">A virada</span>
          <h2>Liz não saiu do caos trabalhando mais. Ela saiu tornando a oferta mais fácil de desejar.</h2>
          <p>
            Depois de tentar cursos, fórmulas e promessas que não sustentavam a
            rotina, a descoberta foi simples e profunda: um produto premium não
            precisa ser explicado em uma reunião se a oferta já nasce com clareza.
          </p>
          <blockquote>
            <Quote aria-hidden="true" />
            O jogo muda quando a cliente entende o valor antes de pedir seu tempo.
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function MethodReveal() {
  return (
    <section className="htsc-section htsc-method" id="metodo">
      <div className="htsc-shell">
        <div className="htsc-center-copy">
          <span className="htsc-label">O método</span>
          <h2>O HTSC organiza sua venda em três movimentos naturais.</h2>
          <p>
            Sem agressividade, sem empurrar urgência artificial e sem depender de
            uma conversa longa para provar que você vale o que cobra.
          </p>
        </div>
        <div className="htsc-method-river">
          <article>
            <span>01</span>
            <h3>Uma oferta mais clara</h3>
            <p>A pessoa entende rápido o que você resolve e por que aquilo importa agora.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Um valor mais fácil de perceber</h3>
            <p>Você para de parecer mais uma opção parecida no mercado.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Uma decisão mais preparada</h3>
            <p>A página, a narrativa e os materiais fazem o trabalho pesado antes do contato.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="htsc-section htsc-compare">
      <div className="htsc-shell">
        <div className="htsc-compare-head">
          <span className="htsc-label">Comparativo</span>
          <h2>O ponto não é vender menos no pessoal. É depender menos dele.</h2>
        </div>
        <div className="htsc-compare-grid">
          <div className="htsc-compare-side htsc-muted-side">
            <span>Venda por call</span>
            <ul>
              <li>
                <X aria-hidden="true" />
                Agenda cheia como principal ativo
              </li>
              <li>
                <X aria-hidden="true" />
                A cliente entende valor só depois da reunião
              </li>
              <li>
                <X aria-hidden="true" />
                Energia emocional em cada fechamento
              </li>
            </ul>
          </div>
          <div className="htsc-compare-line" aria-hidden="true">
            <span>troca por</span>
          </div>
          <div className="htsc-compare-side htsc-active-side">
            <span>High Ticket Sem Call</span>
            <ul>
              <li>
                <Check aria-hidden="true" />
                Oferta educa, diferencia e conduz
              </li>
              <li>
                <Check aria-hidden="true" />
                Cliente chega mais consciente
              </li>
              <li>
                <Check aria-hidden="true" />
                Venda ganha escala sem perder sofisticação
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProofSection() {
  return (
    <section className="htsc-section htsc-proof">
      <div className="htsc-shell">
        <div className="htsc-proof-layout">
          <div className="htsc-proof-copy">
            <span className="htsc-label">Prova</span>
            <h2>Quando a oferta fica clara, a conversa muda de temperatura.</h2>
            <p>
              Os depoimentos entram como evidência visual, não como enfeite. Eles
              mostram que a promessa central é compreensível: vender com mais
              clareza, margem e previsibilidade.
            </p>
          </div>
          <div className="htsc-testimonial-flow">
            {testimonials.map((testimonial, index) => (
              <figure className="htsc-testimonial htsc-rise" style={{ "--i": index } as CSSProperties} key={testimonial.name}>
                <img src={`${assetBase}/${testimonial.image}`} alt={`Depoimento de ${testimonial.name}`} />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PhasesSection() {
  return (
    <section className="htsc-section htsc-phases">
      <div className="htsc-shell">
        <div className="htsc-center-copy htsc-phase-intro">
          <span className="htsc-label">4 fases</span>
          <h2>Da oferta confusa à venda que amadurece antes da conversa.</h2>
          <p>
            Não é uma sequência de aulas soltas. É uma travessia: primeiro você
            organiza a base, depois torna a oferta mais desejável, em seguida
            prepara a decisão e, por fim, cria continuidade.
          </p>
        </div>
        <div className="htsc-phase-stack">
          {methodPhases.map((phase, index) => (
            <article className="htsc-phase" style={{ "--i": index } as CSSProperties} key={phase.title}>
              <div className="htsc-phase-marker" aria-hidden="true">
                <span>{phase.number}</span>
              </div>
              <img src={`${assetBase}/${phase.image}`} alt="" />
              <div className="htsc-phase-copy">
                <span>Fase {phase.number}</span>
                <h3>{phase.title}</h3>
                <p>{phase.text}</p>
                <strong>{phase.passage}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BonusSection() {
  return (
    <section className="htsc-section htsc-bonus">
      <div className="htsc-shell htsc-two-col">
        <div className="htsc-sticky">
          <span className="htsc-label">Bônus</span>
          <h2>Materiais para encurtar o caminho entre interesse e decisão.</h2>
          <p>
            Os bônus entram como ferramentas de venda, não como brindes soltos.
            Cada um apoia uma etapa da decisão.
          </p>
        </div>
        <div className="htsc-bonus-list">
          {bonuses.map((bonus, index) => (
            <article className="htsc-bonus-row htsc-rise" style={{ "--i": index } as CSSProperties} key={bonus.title}>
              <img src={`${assetBase}/${bonus.image}`} alt="" />
              <div>
                <h3>{bonus.title}</h3>
                <span>valor {bonus.value}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function OfferSection() {
  return (
    <section className="htsc-section htsc-offer" id="oferta">
      <div className="htsc-shell htsc-offer-grid">
        <div className="htsc-offer-copy">
          <span className="htsc-label">Entrando agora</span>
          <h2>Você recebe a formação, os bônus e a estrutura para vender com mais autonomia.</h2>
          <ul>
            {offerItems.map((item) => (
              <li key={item}>
                <BadgeCheck aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="htsc-offer-panel">
          <img src={`${assetBase}/course-mockup-BDuvm1QR.jpg`} alt="Mockup do curso High Ticket Sem Call" />
          <div className="htsc-price-block">
            <span>De R$938 por</span>
            <strong>12x de R$29,99</strong>
            <a className="htsc-cta" href="#final">
              Quero minha vaga
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function MentorSection() {
  return (
    <section className="htsc-section htsc-mentor">
      <div className="htsc-shell htsc-mentor-grid">
        <figure className="htsc-mentor-image">
          <img src={`${assetBase}/liz-professional-real-D0g8fZV2.jpg`} alt="Liz Valz" />
        </figure>
        <div className="htsc-mentor-copy">
          <span className="htsc-label">A mentora</span>
          <h2>Liz Valz, a musa por trás do método.</h2>
          <p>
            Mãe, esposa e empresária, Liz posiciona o HTSC como uma forma de vender
            alto valor com mais tempo, margem e leveza. A autoridade vem da
            experiência real: parar de carregar a venda nas costas e criar uma
            oferta que prepara a decisão antes do contato.
          </p>
          <div className="htsc-mentor-stats">
            <span>
              <Users aria-hidden="true" />
              Especialistas
            </span>
            <span>
              <CircleDollarSign aria-hidden="true" />
              Alto valor
            </span>
            <span>
              <Clock3 aria-hidden="true" />
              Mais tempo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function GuaranteeSection() {
  return (
    <section className="htsc-section htsc-guarantee">
      <div className="htsc-shell htsc-guarantee-grid">
        <img src={`${assetBase}/guarantee-badge-BpCRa4pf.png`} alt="Garantia de 7 dias" />
        <div>
          <span className="htsc-label">Garantia incondicional</span>
          <h2>Teste por 7 dias. Decida com calma.</h2>
          <p>
            A garantia não precisa ser dramatizada como presente. Ela reduz risco
            e deixa a decisão mais limpa: entrou, assistiu, não fez sentido,
            solicita reembolso.
          </p>
          <div className="htsc-guarantee-note">
            <ShieldCheck aria-hidden="true" />
            Sem burocracia e sem pressão para ficar.
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="htsc-section htsc-faq">
      <div className="htsc-shell htsc-faq-shell">
        <div className="htsc-center-copy">
          <span className="htsc-label">FAQ</span>
          <h2>Antes de entrar</h2>
        </div>
        <div className="htsc-faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>
                <span>{faq.question}</span>
                <ChevronDown aria-hidden="true" />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalSection() {
  return (
    <section className="htsc-section htsc-final" id="final">
      <div className="htsc-shell">
        <div className="htsc-final-inner">
          <span className="htsc-label">Última chamada</span>
          <h2>Você pode continuar vendendo uma por uma. Ou construir uma venda que trabalha antes de você.</h2>
          <p>
            Entre no High Ticket Sem Call e comece a estruturar uma oferta que
            vende com desejo, clareza e autonomia.
          </p>
          <div className="htsc-final-actions">
            <a className="htsc-cta" href={checkoutHref}>
              Entrar no HTSC
              <ArrowRight aria-hidden="true" />
            </a>
            <a className="htsc-soft-link" href="#metodo">
              <HeartHandshake aria-hidden="true" />
              Rever método
            </a>
          </div>
        </div>
        <footer className="htsc-footer">
          <Sparkles aria-hidden="true" />
          High Ticket Sem Call
          <MessageCircle aria-hidden="true" />
        </footer>
      </div>
    </section>
  );
}
