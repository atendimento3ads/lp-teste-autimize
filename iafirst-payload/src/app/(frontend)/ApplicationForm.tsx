'use client'

import { ArrowRight, CheckCircle2, LoaderCircle } from 'lucide-react'
import { FormEvent, useState } from 'react'

type ApplicationFormProps = {
  privacyURL: string
  submitLabel: string
  successMessage: string
  successTitle: string
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function ApplicationForm({
  privacyURL,
  submitLabel,
  successMessage,
  successTitle,
}: ApplicationFormProps) {
  const [status, setStatus] = useState<FormStatus>('idle')

  async function submitApplication(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')

    const form = event.currentTarget
    const formData = new FormData(form)
    const searchParams = new URLSearchParams(window.location.search)
    const payload = Object.fromEntries(formData.entries())

    try {
      const response = await fetch('/forms/apply', {
        body: JSON.stringify({
          ...payload,
          pageURL: window.location.href,
          utmSource: searchParams.get('utm_source') || '',
          utmMedium: searchParams.get('utm_medium') || '',
          utmCampaign: searchParams.get('utm_campaign') || '',
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })

      if (!response.ok) {
        throw new Error('Não foi possível enviar a aplicação.')
      }

      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="form-success" role="status">
        <CheckCircle2 aria-hidden="true" />
        <div>
          <strong>{successTitle}</strong>
          <p>{successMessage}</p>
        </div>
      </div>
    )
  }

  return (
    <form className="application-form" onSubmit={submitApplication}>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input autoComplete="off" id="website" name="website" tabIndex={-1} type="text" />
      </div>

      <label>
        <span>Nome completo</span>
        <input autoComplete="name" name="name" placeholder="Seu nome" required type="text" />
      </label>

      <div className="form-row">
        <label>
          <span>E-mail corporativo</span>
          <input
            autoComplete="email"
            name="email"
            placeholder="voce@empresa.com"
            required
            type="email"
          />
        </label>
        <label>
          <span>Telefone / WhatsApp</span>
          <input
            autoComplete="tel"
            name="phone"
            placeholder="(62) 99999-9999"
            required
            type="tel"
          />
        </label>
      </div>

      <div className="form-row">
        <label>
          <span>Cargo</span>
          <select defaultValue="" name="role" required>
            <option disabled value="">
              Selecione…
            </option>
            <option>CEO / Fundador</option>
            <option>C-Level (CFO, COO, CTO…)</option>
            <option>VP / Diretor Sr.</option>
            <option>Conselheiro</option>
            <option>Outro</option>
          </select>
        </label>
        <label>
          <span>Receita anual</span>
          <select defaultValue="" name="revenue" required>
            <option disabled value="">
              Selecione…
            </option>
            <option>&lt; R$ 50M</option>
            <option>R$ 50M – 200M</option>
            <option>R$ 200M – 1B</option>
            <option>&gt; R$ 1B</option>
          </select>
        </label>
      </div>

      <label>
        <span>O que você quer destravar nos próximos 4 meses?</span>
        <textarea name="goal" placeholder="Uma frase basta." required rows={4} />
      </label>

      <label className="privacy-check">
        <input name="privacyAccepted" required type="checkbox" value="yes" />
        <span>
          Autorizo o contato sobre esta aplicação e concordo com a{' '}
          <a href={privacyURL} rel="noreferrer" target="_blank">
            política de privacidade
          </a>
          .
        </span>
      </label>

      {status === 'error' && (
        <p className="form-error" role="alert">
          Não foi possível enviar agora. Confira os dados ou tente novamente em instantes.
        </p>
      )}

      <button className="button button-primary form-submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? (
          <>
            <LoaderCircle className="spin" aria-hidden="true" /> Enviando…
          </>
        ) : (
          <>
            {submitLabel} <ArrowRight aria-hidden="true" />
          </>
        )}
      </button>

      <p className="form-fineprint">Suas respostas são confidenciais e ficam salvas no painel.</p>
    </form>
  )
}
