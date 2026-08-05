"use client";

import type { FormEvent } from "react";
import { ArrowRight, Clock3, Send, ShieldCheck } from "lucide-react";

export function QuoteForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const message = [
      "Olá, vim pelo site da MWM e gostaria de solicitar um orçamento.",
      "",
      `Nome: ${data.get("name")}`,
      `Serviço: ${data.get("service")}`,
      `Tipo de imóvel: ${data.get("property")}`,
      `Cidade/Bairro: ${data.get("location")}`,
      `Detalhes: ${data.get("details") || "Não informado"}`,
    ].join("\n");

    window.open(
      `https://wa.me/5548999119358?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <span><ShieldCheck size={16} aria-hidden="true" /> ORÇAMENTO PERSONALIZADO</span>
        <small><Clock3 size={14} aria-hidden="true" /> Leva menos de 1 minuto</small>
      </div>
      <div className="form-grid">
        <label className="field">
          <span>Seu nome</span>
          <input name="name" type="text" placeholder="Como podemos chamar você?" required />
        </label>
        <label className="field">
          <span>Serviço desejado</span>
          <select name="service" defaultValue="" required>
            <option value="" disabled>Selecione o serviço</option>
            <option>Câmeras e monitoramento</option>
            <option>Alarmes</option>
            <option>Cerca elétrica</option>
            <option>Interfones e vídeo porteiros</option>
            <option>Automação de portões</option>
            <option>Controle de acesso</option>
            <option>Mais de um serviço</option>
          </select>
        </label>
        <label className="field">
          <span>Tipo de imóvel</span>
          <select name="property" defaultValue="" required>
            <option value="" disabled>Selecione o imóvel</option>
            <option>Residência</option>
            <option>Comércio</option>
            <option>Condomínio</option>
            <option>Empresa</option>
            <option>Outro</option>
          </select>
        </label>
        <label className="field">
          <span>Cidade ou bairro</span>
          <input name="location" type="text" placeholder="Onde será a instalação?" required />
        </label>
        <label className="field field-full">
          <span>O que você precisa?</span>
          <textarea name="details" rows={4} placeholder="Conte brevemente sobre o local e sua necessidade." />
        </label>
      </div>
      <button className="form-submit" type="submit">
        <span><Send size={16} aria-hidden="true" /> Enviar solicitação pelo WhatsApp</span>
        <ArrowRight size={18} aria-hidden="true" />
      </button>
      <p className="form-note">Sua mensagem será organizada e aberta no WhatsApp.</p>
    </form>
  );
}
