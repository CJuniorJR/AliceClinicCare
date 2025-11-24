import React from "react";
import "./index.css";

export default function App() {
  const clinicName = "Alice Clinic Care"; // TROQUE AQUI

  return (
    <div className="page">
      {/* HEADER */}
      <header className="header">
        <div class="container">
          <h1 class="logo">Alice Clinic Care</h1>

          <nav class="menu">
            <a href="#especialidades">Especialidades</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
            <a href="#agendamento" class="btn-whatsapp">Agendar</a>
          </nav>
        </div>

        <h1>{clinicName}</h1>
        <p className="subtitle">Cuidado, movimento e alívio para o seu corpo.</p>
        <a className="cta" href="https://wa.me/5511999999999" target="_blank">
          Agende pelo WhatsApp
        </a>
      </header>

      {/* SERVIÇOS */}
      <section className="services-grid">
  <h2>Especialidades</h2>
  <div className="services-items">
    <div className="service-card">
      <img src="https://img.icons8.com/ios/50/spine.png" alt="Quiropraxia" />
      <h3>Quiropraxia</h3>
      <p>Alinhamento da coluna, alívio de dores e melhora na qualidade de vida.</p>
    </div>
    <div className="service-card">
      <img src="https://img.icons8.com/ios/50/massage.png" alt="Massoterapia" />
      <h3>Massoterapia</h3>
      <p>Relaxamento, alívio muscular e bem-estar através de técnicas manuais.</p>
    </div>
    <div className="service-card">
      <img src="https://img.icons8.com/ios/50/physiotherapy.png" alt="Fisioterapia" />
      <h3>Fisioterapia</h3>
      <p>Tratamento e prevenção de lesões, fortalecimento e reabilitação.</p>
    </div>
    <div className="service-card">
      <img src="https://img.icons8.com/ios/50/leg.png" alt="Liberação Miofascial" />
      <h3>Liberação Miofascial</h3>
      <p>Redução de tensões e melhora da mobilidade com técnicas manuais.</p>
    </div>
    <div className="service-card">
      <img src="https://img.icons8.com/ios/50/lotus-position.png" alt="Alongamentos Terapêuticos" />
      <h3>Alongamentos Terapêuticos</h3>
      <p>Postura, flexibilidade e saúde muscular com alongamentos guiados.</p>
    </div>
  </div>
</section>

      {/* SOBRE */}
      <section className="about">
        <h2>Sobre a Clínica</h2>
        <p>
          Nossa missão é restaurar o equilíbrio corporal, aliviar dores e
          promover bem-estar através de terapias manuais e movimento.
          Cada atendimento é personalizado para respeitar o ritmo e a necessidade
          do seu corpo.
        </p>
      </section>

      {/* CONTATO */}
      <section className="contact">
        <h2>Contato</h2>
        <p>Agende sua sessão e cuide do seu corpo com quem entende.</p>
        <p><strong>WhatsApp:</strong> (41) 99999-9999</p>
        <p><strong>Endereço:</strong> Rua Exemplo, 123 – Sabará</p>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} {clinicName} — Todos os direitos reservados.
      </footer>
    </div>
  );
}
