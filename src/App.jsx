import React from "react";
import "./index.css";

export default function App() {
  const clinicName = "Alice Clinic Care"; // TROQUE AQUI

  return (
    <div className="page">
      {/* HEADER */}
      <header className="header">
        <h1>{clinicName}</h1>
        <p className="subtitle">Cuidado, movimento e alívio para o seu corpo.</p>
        <a className="cta" href="https://wa.me/5511999999999" target="_blank">
          Agende pelo WhatsApp
        </a>
      </header>

      {/* SERVIÇOS */}
      <section className="services">
        <h2>Serviços</h2>
        <ul>
          <li>Quiropraxia</li>
          <li>Massoterapia</li>
          <li>Fisioterapia</li>
          <li>Liberação Miofascial</li>
          <li>Alongamentos Terapêuticos</li>
        </ul>
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
