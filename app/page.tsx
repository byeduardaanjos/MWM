import {
  ArrowRight,
  Camera,
  DoorOpen,
  Instagram,
  KeyRound,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Siren,
  Video,
  Zap,
} from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";
import { MotionEffects } from "@/components/MotionEffects";

const services = [
  {
    title: "Câmeras e monitoramento",
    text: "Monitoramento residencial e comercial com acesso às imagens pelo celular.",
    icon: Camera,
  },
  {
    title: "Alarmes",
    text: "Sistemas eficientes para reforçar a segurança do seu espaço.",
    icon: Siren,
  },
  {
    title: "Cerca elétrica",
    text: "Proteção perimetral para residências e estabelecimentos.",
    icon: Zap,
  },
  {
    title: "Interfones e vídeo porteiros",
    text: "Mais controle e praticidade para identificar quem chega ao seu imóvel.",
    icon: Video,
  },
  {
    title: "Automação de portões",
    text: "Instalação e configuração para entradas mais práticas e seguras.",
    icon: DoorOpen,
  },
  {
    title: "Controle de acesso",
    text: "Soluções para organizar e proteger o acesso de pessoas ao seu espaço.",
    icon: KeyRound,
  },
];

export default function Home() {
  return (
    <main>
      <MotionEffects />
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="MWM Segurança - início">
          <strong>MWM</strong>
          <small>SEGURANÇA<br />ELETRÔNICA</small>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="#servicos">Serviços</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="header-contact" href="#contato">
          Solicitar orçamento
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-photo" role="img" aria-label="MWM Segurança Eletrônica e equipamentos de segurança" />
        <div className="hero-content">
          <div className="hero-heading">
            <p className="label"><span /> MWM SEGURANÇA ELETRÔNICA</p>
            <h1>Proteção em<br />outro <span>nível.</span></h1>
          </div>
          <div className="hero-summary">
            <p>
              Câmeras, alarmes e cerca elétrica com projeto personalizado para toda a Grande Florianópolis.
            </p>
            <a className="button" href="#contato">
              Solicitar orçamento
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="services" id="servicos">
        <div className="section-title">
          <p className="label"><span /> SOLUÇÕES MWM</p>
          <h2>Segurança planejada<br />para cada espaço.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
            <article key={service.title}>
              <div className="service-icon">
                <Icon size={25} strokeWidth={1.6} aria-hidden="true" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
            );
          })}
        </div>
      </section>

      <section className="signature">
        <div className="signature-line" />
        <p>Precisão na instalação.<br />Tranquilidade todos os dias.</p>
        <div className="signature-details">
          <span><MessageCircle size={15} aria-hidden="true" /> Atendimento próximo</span>
          <span><ShieldCheck size={15} aria-hidden="true" /> Projeto personalizado</span>
        </div>
      </section>

      <section className="instagram-showcase" aria-labelledby="instagram-title">
        <div>
          <p className="label"><span /> MWM NO INSTAGRAM</p>
          <h2 id="instagram-title">Acompanhe nossos<br />trabalhos de perto.</h2>
        </div>
        <div className="instagram-copy">
          <p>Veja instalações, soluções e novidades da MWM Segurança Eletrônica.</p>
          <a href="https://www.instagram.com/mwm.seg" target="_blank" rel="noopener noreferrer">
            <Instagram size={18} aria-hidden="true" />
            <span>@mwm.seg</span>
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="contact" id="contato">
        <div className="contact-intro">
          <p className="label"><span /> FALE COM A MWM</p>
          <h2>Conte o que você precisa.</h2>
          <p className="contact-copy">
            Preencha os dados abaixo e receba um atendimento mais rápido e personalizado.
          </p>
          <div className="contact-meta">
            <a href="mailto:mwm.seg@gmail.com"><Mail size={15} aria-hidden="true" /> mwm.seg@gmail.com</a>
            <span><Phone size={15} aria-hidden="true" /> (48) 99911-9358</span>
            <span><MapPin size={15} aria-hidden="true" /> Grande Florianópolis e regiões</span>
          </div>
        </div>
        <QuoteForm />
      </section>

      <footer>
        <strong>MWM <small>SEGURANÇA ELETRÔNICA</small></strong>
        <a href="https://www.instagram.com/mwm.seg" target="_blank" rel="noopener noreferrer">
          <Instagram size={15} aria-hidden="true" /> @mwm.seg
        </a>
        <span>© 2026 · Grande Florianópolis e regiões</span>
      </footer>

      <a className="floating-whatsapp" href="#contato" aria-label="Ir para o formulário de orçamento">
        <MessageCircle size={23} strokeWidth={1.8} aria-hidden="true" />
      </a>
    </main>
  );
}
