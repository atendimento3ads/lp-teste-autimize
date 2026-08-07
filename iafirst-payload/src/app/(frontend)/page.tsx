import configPromise from '@payload-config'
import {
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  Check,
  CircleArrowUp,
  Cpu,
  ExternalLink,
  Layers3,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import { getPayload } from 'payload'

import { defaultLandingPage, type LandingPageData } from '@/data/defaultLandingPage'

import { ApplicationForm } from './ApplicationForm'

export const dynamic = 'force-dynamic'

async function getLandingPage(): Promise<LandingPageData> {
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'landing-pages',
    depth: 2,
    limit: 1,
    pagination: false,
    where: {
      and: [
        {
          slug: {
            equals: 'home',
          },
        },
        {
          _status: {
            equals: 'published',
          },
        },
      ],
    },
  })

  return (result.docs[0] as unknown as LandingPageData | undefined) || defaultLandingPage
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await getLandingPage()

  return {
    description: page.seo.description,
    openGraph: {
      description: page.seo.description,
      images: [{ alt: page.seo.title, height: 909, url: '/og-ai-first.png', width: 1731 }],
      locale: 'pt_BR',
      title: page.seo.title,
      type: 'website',
    },
    title: page.seo.title,
    twitter: {
      card: 'summary_large_image',
      description: page.seo.description,
      images: ['/og-ai-first.png'],
      title: page.seo.title,
    },
  }
}

const outcomeIcons = [BrainCircuit, Workflow, Layers3]

export default async function HomePage() {
  const page = await getLandingPage()

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <nav className="site-nav" aria-label="Navegação principal">
        <a className="brand" href="#inicio" aria-label="AI FIRST — início">
          <span className="brand-bar" />
          <span>
            <small>MENTORIA</small>
            <strong>
              <b>AI</b> FIRST
            </strong>
            <em>PARA EXECUTIVOS</em>
          </span>
        </a>
        <div className="nav-links">
          <a href="#programa">Programa</a>
          <a href="#mentores">Mentores</a>
          <a href="#investimento">Investimento</a>
          <a href="#faq">FAQ</a>
        </div>
        <a className="button button-small button-primary" href="#aplicar">
          Aplicar <ArrowRight aria-hidden="true" />
        </a>
      </nav>

      <section className="hero section-shell" id="inicio">
        <div className="hero-copy">
          <div className="badge">
            <span /> {page.hero.badge}
          </div>
          <h1>
            {page.hero.headline}{' '}
            <span className="gradient-text">{page.hero.highlightedHeadline}</span>
          </h1>
          <p>{page.hero.description}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#aplicar">
              {page.hero.primaryCTA} <ArrowRight aria-hidden="true" />
            </a>
            <a className="button button-ghost" href="#programa">
              {page.hero.secondaryCTA} <ArrowDown aria-hidden="true" />
            </a>
          </div>
          <div className="trust-line">
            <span>4 meses</span>
            <i />
            <span>16 encontros</span>
            <i />
            <span>4 mentores</span>
            <i />
            <span>1:1</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Arquitetura Executive AI OS">
          <div className="visual-grid" />
          <div className="orbit orbit-large" />
          <div className="orbit orbit-small" />
          <div className="system-core">
            <Sparkles aria-hidden="true" />
            <small>SEU SISTEMA</small>
            <strong>EXECUTIVE</strong>
            <b>AI OS</b>
          </div>
          <div className="system-node node-one">
            <BrainCircuit aria-hidden="true" />
            Decisão
          </div>
          <div className="system-node node-two">
            <Cpu aria-hidden="true" />
            Agentes
          </div>
          <div className="system-node node-three">
            <Workflow aria-hidden="true" />
            Fluxos
          </div>
          <div className="visual-status">
            <span /> Arquitetura aplicada à sua rotina
          </div>
        </div>
      </section>

      <section className="section-shell section-block diagnosis" id="diagnostico">
        <SectionHeading
          description={page.diagnosis.description}
          eyebrow={page.diagnosis.eyebrow}
          headline={page.diagnosis.headline}
        />
        <div className="stats-grid">
          {page.diagnosis.stats.map((stat) => (
            <article className="stat-card" key={`${stat.value}-${stat.headline}`}>
              <strong className="gradient-text">{stat.value}</strong>
              <p>{stat.headline}</p>
              <small>{stat.source}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell section-block" id="resultados">
        <SectionHeading
          description={page.outcomes.description}
          eyebrow={page.outcomes.eyebrow}
          headline={page.outcomes.headline}
        />
        <div className="outcome-grid">
          {page.outcomes.items.map((item, index) => {
            const Icon = outcomeIcons[index] || Sparkles
            return (
              <article className="outcome-card" key={item.title}>
                <div className="card-number">0{index + 1}</div>
                <Icon className="card-icon" aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet.item}>
                      <Check aria-hidden="true" /> {bullet.item}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </section>

      <section className="program section-block" id="programa">
        <div className="section-shell">
          <SectionHeading
            description={page.program.description}
            eyebrow={page.program.eyebrow}
            headline={page.program.headline}
          />
          <div className="program-list">
            {page.program.modules.map((module, index) => (
              <article className="program-item" key={module.title}>
                <div className="module-index">{String(index + 1).padStart(2, '0')}</div>
                <div className="module-time">{module.month}</div>
                <div>
                  <h3>{module.title}</h3>
                  <p>{module.description}</p>
                </div>
                <CircleArrowUp aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-block tools-section" id="ferramentas">
        <SectionHeading
          description={page.tools.description}
          eyebrow={page.tools.eyebrow}
          headline={page.tools.headline}
        />
        <div className="tools-list">
          {page.tools.items.map((tool, index) => (
            <span key={`${tool.name}-${index}`}>{tool.name}</span>
          ))}
        </div>
        <div className="tools-note">
          <ShieldCheck aria-hidden="true" />
          <p>{page.tools.note}</p>
        </div>
      </section>

      <section className="mentors section-block" id="mentores">
        <div className="section-shell">
          <SectionHeading
            description={page.mentors.description}
            eyebrow={page.mentors.eyebrow}
            headline={page.mentors.headline}
          />
          <div className="mentors-grid">
            {page.mentors.items.map((mentor) => {
              const uploadedPhoto =
                typeof mentor.photo === 'object' && mentor.photo?.url ? mentor.photo.url : undefined
              const photo = uploadedPhoto || mentor.photoPath

              return (
                <article className="mentor-card" key={mentor.name}>
                  <div className="mentor-photo">
                    <Image alt={`Retrato de ${mentor.name}`} fill sizes="(max-width: 700px) 100vw, 25vw" src={photo} />
                    <div className="photo-overlay" />
                  </div>
                  <div className="mentor-copy">
                    <h3>{mentor.name}</h3>
                    <strong>{mentor.role}</strong>
                    <p>{mentor.bio}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-shell section-block offer" id="investimento">
        <div className="offer-copy">
          <SectionHeading
            description={page.offer.description}
            eyebrow={page.offer.eyebrow}
            headline={page.offer.headline}
          />
          <div className="price-card">
            <small>INVESTIMENTO</small>
            <div>
              <strong className="gradient-text">{page.offer.price}</strong>
              <span>{page.offer.pricePeriod}</span>
            </div>
            <p>{page.offer.priceDetails}</p>
          </div>
          <div className="offer-highlights">
            {page.offer.highlights.map((highlight) => (
              <div key={highlight.title}>
                <Check aria-hidden="true" />
                <span>
                  <strong>{highlight.title}</strong>
                  <small>{highlight.description}</small>
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="form-panel" id="aplicar">
          <div className="form-panel-header">
            <span>APLICAÇÃO CONFIDENCIAL</span>
            <small>Leva cerca de 3 minutos</small>
          </div>
          <ApplicationForm
            privacyURL={page.contact.privacyURL}
            submitLabel={page.offer.submitLabel}
            successMessage={page.offer.successMessage}
            successTitle={page.offer.successTitle}
          />
        </div>
      </section>

      <section className="section-shell section-block faq" id="faq">
        <SectionHeading eyebrow={page.faq.eyebrow} headline={page.faq.headline} />
        <div className="faq-list">
          {page.faq.items.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {item.question}
                <b>+</b>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta section-shell">
        <Sparkles aria-hidden="true" />
        <h2>{page.finalCTA.headline}</h2>
        <p>{page.finalCTA.description}</p>
        <a className="button button-primary" href="#aplicar">
          {page.finalCTA.buttonLabel} <ArrowRight aria-hidden="true" />
        </a>
      </section>

      <footer className="site-footer">
        <div className="section-shell footer-grid">
          <div>
            <Image alt="3ADS EDU" height={54} src="/logo-3ads-edu.svg" width={200} />
            <p>{page.contact.tagline}</p>
            <small>{page.contact.address}</small>
          </div>
          <div className="footer-links">
            <strong>Contato</strong>
            <a href={`mailto:${page.contact.email}`}>{page.contact.email}</a>
            <a href={page.contact.linkedinURL} rel="noreferrer" target="_blank">
              LinkedIn <ExternalLink aria-hidden="true" />
            </a>
            <a href={page.contact.instagramURL} rel="noreferrer" target="_blank">
              Instagram <ExternalLink aria-hidden="true" />
            </a>
            <a href={page.contact.privacyURL} rel="noreferrer" target="_blank">
              Privacidade <ExternalLink aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="section-shell footer-bottom">
          <span>© 2026 3ADS · AI FIRST. Todos os direitos reservados.</span>
          <span>Mentoria individual · 4 meses · 1:1</span>
        </div>
      </footer>

      <a
        aria-label="Falar no WhatsApp"
        className="whatsapp"
        href={page.contact.whatsappURL}
        rel="noreferrer"
        target="_blank"
      >
        <MessageCircle aria-hidden="true" />
      </a>
    </main>
  )
}

function SectionHeading({
  description,
  eyebrow,
  headline,
}: {
  description?: string
  eyebrow: string
  headline: string
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <div>
        <h2>{headline}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  )
}
