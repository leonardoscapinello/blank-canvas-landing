import { createFileRoute } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  Flame,
  Gem,
  HelpCircle,
  LockKeyhole,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Video,
  WandSparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Taro da Vida Real | Imersao ao vivo" },
      {
        name: "description",
        content:
          "Uma nova landing para a imersao Taro da Vida Real, com metodo, seguranca e aplicacao pratica.",
      },
    ],
  }),
  component: Index,
});

const checkoutUrl = "https://pay.hotmart.com/";
const whatsappUrl = "https://wa.me/";

const heroStats = [
  { icon: CalendarDays, label: "6 e 7 de Junho" },
  { icon: Clock3, label: "10h as 16h" },
  { icon: Video, label: "Ao vivo no Zoom" },
];

const audienceSignals = [
  "Sente um chamado pelas cartas, mas ainda nao sabe por onde comecar.",
  "Ja estudou significados e mesmo assim trava quando precisa conduzir uma leitura.",
  "Tem sensibilidade e intuicao, mas quer estrutura para aplicar com seguranca.",
  "Quer parar de ler de graca e entender como cobrar com consciencia.",
  "Quer transformar interesse em uma habilidade concreta, sem misticismo complicado.",
  "Quer descobrir se o taro pode virar renda extra ou ate renda principal.",
];

const wrongWay = [
  "Carta por carta",
  "Positivo ou negativo",
  "Apostila solta",
  "Decoreba",
  "Depende da intuicao",
];

const consequences = [
  "A pessoa trava.",
  "Se sente insegura.",
  "Nao sabe conduzir a leitura.",
  "Nao organiza o pensamento.",
  "Nao sabe cobrar.",
];

const methodPillars = [
  {
    title: "Estrutura",
    text: "Voce aprende uma forma de pensar a leitura, nao uma colecao de frases prontas.",
  },
  {
    title: "Raciocinio",
    text: "O simbolo vira comportamento, e o comportamento vira orientacao pratica.",
  },
  {
    title: "Conducao",
    text: "Da pergunta inicial ao fechamento, voce sabe como guiar a consulta com direcao.",
  },
];

const applications = [
  "Tomar decisoes com clareza",
  "Ajudar amigas com mais responsabilidade",
  "Cobrar por consultas",
  "Criar uma renda extra",
  "Construir uma renda principal com consistencia",
];

const agenda = [
  {
    day: "Dia 1",
    title: "Fundamentos do Taro da Vida Real",
    items: [
      "Como estudar sem se perder em significados soltos.",
      "Como interpretar os Arcanos Maiores aplicados a vida real.",
      "Como parar de depender de decoreba e raciocinar com as cartas.",
      "Como transformar simbolo em comportamento e orientacao clara.",
    ],
    finish:
      "No final do Dia 1, voce nao esta estudando carta. Voce entende como o taro funciona na pratica.",
  },
  {
    day: "Dia 2",
    title: "Aplicacao, seguranca e potencial de renda",
    items: [
      "Estrutura completa de tiragem, do inicio ao fim.",
      "Como fazer perguntas que geram respostas claras.",
      "Como conduzir uma leitura com direcao e autoridade.",
      "Como ganhar seguranca para ler para outras pessoas.",
      "Como comecar a cobrar com consciencia e posicionamento.",
    ],
    finish: "Quando voce sabe aplicar, voce pode cobrar.",
  },
];

const timeline = [
  ["10h00", "Inicio"],
  ["12h00", "Almoco"],
  ["13h30", "Retorno"],
  ["16h00", "Encerramento*"],
];

const faqs = [
  {
    question: "E se eu nao puder assistir ao vivo?",
    answer:
      "A imersao e ao vivo. A gravacao pode ser adquirida separadamente no checkout, caso voce queira garantir o acesso depois.",
  },
  {
    question: "Preciso saber taro para participar?",
    answer:
      "Nao. A imersao foi criada tanto para quem nunca estudou quanto para quem ja tentou aprender e se sentiu insegura.",
  },
  {
    question: "Esse evento e so para quem quer virar tarologa?",
    answer:
      "Nao. Voce pode usar o metodo para si, para ajudar outras pessoas, para renda extra ou para transformar isso em renda principal.",
  },
  {
    question: "Preciso ter um baralho?",
    answer:
      "Se tiver, otimo. Se ainda nao tiver, pode participar normalmente e sair sabendo por onde comecar.",
  },
  {
    question: "Por que essa imersao e diferente?",
    answer:
      "Porque aqui voce nao aprende so significado. Voce aprende estrutura, raciocinio e conducao aplicados a vida real.",
  },
  {
    question: "E se eu nao gostar?",
    answer:
      "Voce tem garantia incondicional de 2 dias apos o encerramento. Se nao fizer sentido, recebe 100% do valor de volta.",
  },
];

function Index() {
  return (
    <main className="tarot-page min-h-screen overflow-hidden text-white">
      <AmbientScene />
      <Hero />
      <ProofStrip />
      <AudienceSection />
      <ProblemSection />
      <MethodSection />
      <AgendaSection />
      <StarterSection />
      <MoneySection />
      <GuaranteeSection />
      <MentorSection />
      <FaqSection />
      <FinalCta />
    </main>
  );
}

function AmbientScene() {
  return (
    <div className="ambient-scene" aria-hidden="true">
      <span className="aurora aurora-one" />
      <span className="aurora aurora-two" />
      <span className="glass-orbit orbit-one" />
      <span className="glass-orbit orbit-two" />
      <span className="grain" />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative px-5 pb-12 pt-5 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <nav className="glass-nav reveal-up" aria-label="Informacoes da imersao">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-yellow-200">
            <Sparkles className="h-4 w-4" />
            Taro da Vida Real
          </div>
          <div className="flex flex-wrap gap-2">
            {heroStats.map((stat) => (
              <span key={stat.label} className="nav-chip">
                <stat.icon className="h-4 w-4" />
                {stat.label}
              </span>
            ))}
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy reveal-up">
            <div className="scarcity-pill">
              <Flame className="h-4 w-4" />
              Lote 0 ativo
              <span>75% vendido</span>
            </div>
            <h1>Taro aplicado. Leitura segura. Renda real.</h1>
            <p>
              Uma imersao ao vivo de 2 dias para parar de decorar cartas,
              conduzir leituras com clareza e se posicionar como tarologa de
              alto nivel.
            </p>
            <div className="hero-actions">
              <CtaButton label="Garantir meu ingresso" />
              <div className="hero-price" aria-label="Preco promocional">
                <span>de R$147</span>
                <strong>por R$23</strong>
              </div>
            </div>
          </div>

          <div className="hero-visual reveal-up delay-1">
            <div className="liquid-frame">
              <img
                src="https://v3.vitorviajante.com/wp-content/uploads/2026/06/videoframe_01.webp"
                alt="Mesa cinematografica com cartas de taro e atmosfera mistica"
              />
              <div className="hero-caption">
                <div>
                  <ShieldCheck className="h-5 w-5" />
                  <span>Risco zero por 2 dias</span>
                </div>
                <strong>Entrada do Lote 0 por R$23</strong>
                <div className="progress-track">
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProofStrip() {
  const proofImages = [
    "frame1597883336.webp",
    "frame1597883337.webp",
    "frame1597883338.webp",
    "frame1597883339.webp",
  ];

  return (
    <section className="proof-showcase">
      <div className="proof-lightfield" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="proof-stage">
          <div className="proof-copy reveal-up">
            <span className="eyebrow">Prova social</span>
            <h2>Seguranca aparece quando o metodo entra.</h2>
            <p>
              Antes era significado solto. Depois, leitura conduzida, clareza
              para atender e primeiros resultados financeiros.
            </p>
            <div className="proof-result">
              <strong>R$ 4 mil</strong>
              <span>em atendimentos apenas de taro, segundo relato de aluna.</span>
            </div>
          </div>

          <div className="proof-evidence reveal-up delay-1" aria-label="Resultados de alunas">
            <div className="proof-featured">
              <span className="proof-tag">relato em destaque</span>
              <img
                src="https://v3.vitorviajante.com/wp-content/uploads/2026/06/frame1597883336.webp"
                alt="Depoimento de aluna sobre atendimentos com taro"
              />
            </div>
            <div className="proof-ribbon">
              {proofImages.slice(1).map((image, index) => (
                <figure key={image} style={{ "--i": index } as CSSProperties}>
                  <img
                    src={`https://v3.vitorviajante.com/wp-content/uploads/2026/06/${image}`}
                    alt="Depoimento de aluna"
                  />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section className="section-band cream">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div className="sticky-copy reveal-up">
          <span className="eyebrow dark">Para quem e</span>
          <h2>So continue lendo se voce quer sair do interesse e entrar na pratica.</h2>
          <p>
            Este convite foi feito para quem sente que existe algo nas cartas,
            mas sabe que sensibilidade sem metodo vira inseguranca.
          </p>
        </div>
        <div className="signal-grid">
          {audienceSignals.map((signal, index) => (
            <div className="signal-card reveal-up" style={{ "--i": index } as CSSProperties} key={signal}>
              <Check className="h-5 w-5" />
              <span>{signal}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="section-band dark-split">
      <div className="problem-shell mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="problem-intro reveal-up">
          <span className="eyebrow">O problema</span>
          <h2>O erro nao e falta de talento. E falta de metodo.</h2>
          <p>
            Quando o ensino vira decoreba, a leitura trava. O comparativo e
            simples: a forma como voce aprende define o que acontece na hora de
            atender.
          </p>
        </div>
        <div className="problem-compare reveal-up delay-1">
          <EditorialList eyebrow="Como ensinam" title="A maioria aprende assim" items={wrongWay} tone="purple" />
          <div className="compare-flow" aria-hidden="true">
            <span>gera</span>
            <WandSparkles className="h-10 w-10" />
          </div>
          <EditorialList eyebrow="Na pratica" title="E o que acontece" items={consequences} tone="obsidian" />
        </div>
      </div>
    </section>
  );
}

function MethodSection() {
  return (
    <section className="section-band method">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="method-layout">
          <div className="method-visual reveal-up">
            <img
              src="https://v3.vitorviajante.com/wp-content/uploads/2026/06/magical-book-with-glowing-aura1.webp"
              alt="Livro aberto com brilho magico representando metodo aplicado"
            />
          </div>
          <div className="reveal-up delay-1">
            <span className="eyebrow">O metodo</span>
            <h2>O Taro da Vida Real troca significado solto por raciocinio aplicado.</h2>
            <p className="lead">
              Aqui voce aprende a ler simbolos como comportamento, transformar
              comportamento em orientacao e conduzir uma leitura do inicio ao fim.
            </p>
            <div className="pillar-grid">
              {methodPillars.map((pillar) => (
                <article className="pillar-card" key={pillar.title}>
                  <Star className="h-5 w-5" />
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
        <div className="applications reveal-up">
          <span>Quando voce sabe aplicar, pode usar isso para:</span>
          <div>
            {applications.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AgendaSection() {
  return (
    <section className="section-band agenda">
      <div className="agenda-glow" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="section-heading reveal-up">
          <span className="eyebrow">Plano de 2 dias</span>
          <h2>Voce sai da teoria, entra no jogo e aprende a cobrar com consciencia.</h2>
        </div>
        <div className="agenda-scroll">
          {agenda.map((day, index) => (
            <article className="agenda-card agenda-rise" style={{ "--i": index } as CSSProperties} key={day.day}>
              <div className="agenda-card-index">0{index + 1}</div>
              <div className="agenda-card-content">
                <span className="day-badge">{day.day}</span>
                <h3>{day.title}</h3>
                <ul>
                  {day.items.map((item) => (
                    <li key={item}>
                      <ChevronRight className="h-4 w-4" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p>{day.finish}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="schedule-block">
          <div className="schedule-heading">
            <span className="eyebrow">Cronograma</span>
            <p>Uma sequencia ao vivo para aprender, pausar, voltar e aplicar.</p>
          </div>
          <div className="time-rail">
          {timeline.map(([time, title]) => (
            <div className="time-step" key={time}>
              <strong>{time}</strong>
              <span>{title}</span>
            </div>
          ))}
          </div>
        </div>
        <div className="center-action reveal-up">
          <CtaButton label="Quero dominar o taro em 2 dias" />
        </div>
      </div>
    </section>
  );
}

function StarterSection() {
  return (
    <section className="section-band compact">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-8">
        <div className="glass-statement reveal-up">
          <Gem className="mx-auto h-8 w-8 text-yellow-200" />
          <h2>E se eu nunca estudei nada?</h2>
          <p>
            Melhor ainda. Voce comeca do jeito certo: sem excesso de teoria, sem
            confusao, sem misticismo complicado. Com metodo.
          </p>
        </div>
      </div>
    </section>
  );
}

function MoneySection() {
  return (
    <section className="section-band money" id="checkout">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div className="reveal-up">
          <span className="eyebrow">Dinheiro com maturidade</span>
          <h2>Uma consulta hoje custa entre R$150 e R$300.</h2>
          <p className="lead">
            Com poucas leituras no mes, voce ja cria renda extra. Com
            consistencia, pode virar renda principal. Nao e promessa milagrosa:
            e consequencia de metodo aplicado.
          </p>
          <CtaButton label="Garantir meu ingresso | Lote 0" />
        </div>
        <div className="price-panel reveal-up delay-1">
          <CircleDollarSign className="h-9 w-9 text-emerald-200" />
          <span>Menos que uma pizza</span>
          <strong>R$23</strong>
          <p>Por uma habilidade que pode te dar clareza, seguranca, posicionamento e renda.</p>
          <div className="mini-meter">
            <span />
          </div>
          <small>75% dos ingressos vendidos nesse valor</small>
        </div>
      </div>
    </section>
  );
}

function GuaranteeSection() {
  return (
    <section className="section-band guarantee">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
        <div className="seal reveal-up">
          <img
            src="https://v3.vitorviajante.com/wp-content/uploads/2026/06/selo.webp"
            alt="Selo de garantia incondicional"
          />
        </div>
        <div className="reveal-up delay-1">
          <span className="eyebrow dark">Garantia incondicional</span>
          <h2>Entre tranquila. Participe, aplique e teste.</h2>
          <p>
            Se ao final do evento voce sentir que nao foi para voce, envie um
            email em ate 2 dias apos o encerramento e receba 100% do dinheiro de
            volta. Sem burocracia, sem justificativa constrangedora, sem ninguem
            tentando te convencer a ficar.
          </p>
          <div className="risk-zero">
            <LockKeyhole className="h-5 w-5" />
            O risco e zero.
          </div>
        </div>
      </div>
    </section>
  );
}

function MentorSection() {
  return (
    <section className="section-band mentor">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div className="mentor-image reveal-up">
          <img
            src="https://v3.vitorviajante.com/wp-content/uploads/2026/06/freepik__image-type-cinematic-natural-portraitsubject-young__437941.webp"
            alt="Retrato cinematografico do mentor da imersao"
          />
        </div>
        <div className="mentor-copy reveal-up delay-1">
          <span className="eyebrow">Quem vai guiar voce</span>
          <h2>Meu nome e Vitor Viajante.</h2>
          <p>
            Antes de viajar o mundo com o taro, quase ninguem acreditava que isso
            podia ser uma profissao de verdade. Eu tambem duvidei. Fui aprovado
            em Psicologia, tinha um caminho seguro, mas queria liberdade, queria
            entender pessoas e trabalhar de qualquer lugar.
          </p>
          <p>
            Foi no taro que encontrei isso. Nao como misticismo, mas como
            ferramenta real de clareza, direcao e transformacao. Hoje, ensino
            mulheres a usarem o taro para si, para outras pessoas e para criar
            renda.
          </p>
          <div className="mentor-proof">
            <span>+1300 alunas</span>
            <span>Metodo aplicado</span>
            <span>Liberdade com posicionamento</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="section-band faq">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="section-heading reveal-up">
          <span className="eyebrow">FAQ</span>
          <h2>Perguntas frequentes</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details className="faq-item reveal-up" style={{ "--i": index } as CSSProperties} key={faq.question}>
              <summary>
                <HelpCircle className="h-5 w-5" />
                {faq.question}
                <ChevronRight className="summary-arrow h-5 w-5" />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="section-band final">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-8">
        <div className="final-panel reveal-up">
          <Sparkles className="mx-auto h-9 w-9 text-yellow-200" />
          <h2>Ou voce sai dominando o metodo, ou sai com seu dinheiro de volta.</h2>
          <p>
            Garanta o Lote 0 enquanto o ingresso esta por R$23 e entre nos 2 dias
            ao vivo para aprender o taro da vida real.
          </p>
          <div className="final-actions">
            <CtaButton label="Garantir meu ingresso agora" />
            <a className="support-link" href={whatsappUrl}>
              <MessageCircle className="h-5 w-5" />
              Falar com a Isa
            </a>
          </div>
        </div>
        <footer>Vitor Viajante © 2026 | Todos os direitos reservados.</footer>
      </div>
    </section>
  );
}

function CtaButton({ label }: { label: string }) {
  return (
    <a className="cta-button" href={checkoutUrl}>
      <span>{label}</span>
      <ArrowRight className="h-5 w-5" />
    </a>
  );
}

function EditorialList({
  eyebrow,
  title,
  items,
  tone,
}: {
  eyebrow: string;
  title: string;
  items: string[];
  tone: "purple" | "obsidian";
}) {
  return (
    <article className={`editorial-list reveal-up ${tone}`}>
      <span className="compare-eyebrow">{eyebrow}</span>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <span />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
