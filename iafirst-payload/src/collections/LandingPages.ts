import type { CollectionConfig, Field } from 'payload'

import { authenticated } from '../access/authenticated'
import { authenticatedOrPublished } from '../access/authenticatedOrPublished'
import { defaultLandingPage } from '../data/defaultLandingPage'

const sectionIntroFields = ({
  eyebrow,
  headline,
  description,
}: {
  eyebrow: string
  headline: string
  description?: string
}): Field[] => [
  {
    name: 'eyebrow',
    type: 'text',
    label: 'Identificador da seção',
    defaultValue: eyebrow,
    required: true,
  },
  {
    name: 'headline',
    type: 'text',
    label: 'Título',
    defaultValue: headline,
    required: true,
  },
  ...(description
    ? [
        {
          name: 'description',
          type: 'textarea' as const,
          label: 'Descrição',
          defaultValue: description,
          required: true,
        },
      ]
    : []),
]

export const LandingPages: CollectionConfig = {
  slug: 'landing-pages',
  labels: {
    singular: 'Landing page',
    plural: 'Landing pages',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['title', 'slug', '_status', 'updatedAt'],
    description: 'Edite aqui todo o conteúdo exibido na landing page AI FIRST.',
    group: 'Conteúdo',
    livePreview: {
      url: () => '/',
    },
    preview: () => '/',
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Nome interno',
      defaultValue: defaultLandingPage.title,
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Identificador',
      defaultValue: defaultLandingPage.slug,
      index: true,
      required: true,
      unique: true,
      admin: {
        description: 'Use “home” para a página principal.',
        position: 'sidebar',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Abertura',
          fields: [
            {
              name: 'hero',
              type: 'group',
              label: 'Primeira seção',
              fields: [
                {
                  name: 'badge',
                  type: 'text',
                  label: 'Selo',
                  defaultValue: defaultLandingPage.hero.badge,
                  required: true,
                },
                {
                  name: 'headline',
                  type: 'text',
                  label: 'Título principal',
                  defaultValue: defaultLandingPage.hero.headline,
                  required: true,
                },
                {
                  name: 'highlightedHeadline',
                  type: 'text',
                  label: 'Trecho destacado',
                  defaultValue: defaultLandingPage.hero.highlightedHeadline,
                  required: true,
                },
                {
                  name: 'description',
                  type: 'textarea',
                  label: 'Descrição',
                  defaultValue: defaultLandingPage.hero.description,
                  required: true,
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'primaryCTA',
                      type: 'text',
                      label: 'Botão principal',
                      defaultValue: defaultLandingPage.hero.primaryCTA,
                      required: true,
                    },
                    {
                      name: 'secondaryCTA',
                      type: 'text',
                      label: 'Botão secundário',
                      defaultValue: defaultLandingPage.hero.secondaryCTA,
                      required: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Diagnóstico',
          fields: [
            {
              name: 'diagnosis',
              type: 'group',
              label: false,
              fields: [
                ...sectionIntroFields(defaultLandingPage.diagnosis),
                {
                  name: 'stats',
                  type: 'array',
                  label: 'Indicadores',
                  defaultValue: defaultLandingPage.diagnosis.stats,
                  minRows: 1,
                  required: true,
                  fields: [
                    {
                      name: 'value',
                      type: 'text',
                      label: 'Número',
                      required: true,
                    },
                    {
                      name: 'headline',
                      type: 'textarea',
                      label: 'Explicação',
                      required: true,
                    },
                    {
                      name: 'source',
                      type: 'text',
                      label: 'Fonte',
                      required: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Resultados',
          fields: [
            {
              name: 'outcomes',
              type: 'group',
              label: false,
              fields: [
                ...sectionIntroFields(defaultLandingPage.outcomes),
                {
                  name: 'items',
                  type: 'array',
                  label: 'Pilares',
                  defaultValue: defaultLandingPage.outcomes.items,
                  minRows: 1,
                  required: true,
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      label: 'Título',
                      required: true,
                    },
                    {
                      name: 'description',
                      type: 'textarea',
                      label: 'Descrição',
                      required: true,
                    },
                    {
                      name: 'bullets',
                      type: 'array',
                      label: 'Entregas',
                      minRows: 1,
                      required: true,
                      fields: [
                        {
                          name: 'item',
                          type: 'text',
                          label: 'Item',
                          required: true,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Programa',
          fields: [
            {
              name: 'program',
              type: 'group',
              label: false,
              fields: [
                ...sectionIntroFields(defaultLandingPage.program),
                {
                  name: 'modules',
                  type: 'array',
                  label: 'Módulos',
                  defaultValue: defaultLandingPage.program.modules,
                  minRows: 1,
                  required: true,
                  fields: [
                    {
                      name: 'month',
                      type: 'text',
                      label: 'Período',
                      required: true,
                    },
                    {
                      name: 'title',
                      type: 'text',
                      label: 'Título',
                      required: true,
                    },
                    {
                      name: 'description',
                      type: 'textarea',
                      label: 'Descrição',
                      required: true,
                    },
                  ],
                },
              ],
            },
            {
              name: 'tools',
              type: 'group',
              label: 'Ferramentas',
              fields: [
                ...sectionIntroFields(defaultLandingPage.tools),
                {
                  name: 'items',
                  type: 'array',
                  label: 'Lista de ferramentas',
                  defaultValue: defaultLandingPage.tools.items,
                  minRows: 1,
                  required: true,
                  fields: [
                    {
                      name: 'name',
                      type: 'text',
                      label: 'Nome',
                      required: true,
                    },
                  ],
                },
                {
                  name: 'note',
                  type: 'textarea',
                  label: 'Observação',
                  defaultValue: defaultLandingPage.tools.note,
                  required: true,
                },
              ],
            },
          ],
        },
        {
          label: 'Mentores',
          fields: [
            {
              name: 'mentors',
              type: 'group',
              label: false,
              fields: [
                ...sectionIntroFields(defaultLandingPage.mentors),
                {
                  name: 'items',
                  type: 'array',
                  label: 'Mentores',
                  defaultValue: defaultLandingPage.mentors.items,
                  minRows: 1,
                  required: true,
                  fields: [
                    {
                      name: 'name',
                      type: 'text',
                      label: 'Nome',
                      required: true,
                    },
                    {
                      name: 'role',
                      type: 'text',
                      label: 'Cargo e especialidade',
                      required: true,
                    },
                    {
                      name: 'bio',
                      type: 'textarea',
                      label: 'Biografia',
                      required: true,
                    },
                    {
                      name: 'photo',
                      type: 'upload',
                      relationTo: 'media',
                      label: 'Nova foto',
                      admin: {
                        description: 'Opcional. Ao selecionar uma imagem, ela substitui a foto original.',
                      },
                    },
                    {
                      name: 'photoPath',
                      type: 'text',
                      label: 'Foto original',
                      required: true,
                      admin: {
                        description: 'Caminho usado quando nenhuma nova foto foi selecionada.',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Oferta e formulário',
          fields: [
            {
              name: 'offer',
              type: 'group',
              label: false,
              fields: [
                ...sectionIntroFields(defaultLandingPage.offer),
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'price',
                      type: 'text',
                      label: 'Preço',
                      defaultValue: defaultLandingPage.offer.price,
                      required: true,
                    },
                    {
                      name: 'pricePeriod',
                      type: 'text',
                      label: 'Período do preço',
                      defaultValue: defaultLandingPage.offer.pricePeriod,
                      required: true,
                    },
                  ],
                },
                {
                  name: 'priceDetails',
                  type: 'text',
                  label: 'Detalhes do investimento',
                  defaultValue: defaultLandingPage.offer.priceDetails,
                  required: true,
                },
                {
                  name: 'highlights',
                  type: 'array',
                  label: 'Destaques',
                  defaultValue: defaultLandingPage.offer.highlights,
                  minRows: 1,
                  required: true,
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      label: 'Título',
                      required: true,
                    },
                    {
                      name: 'description',
                      type: 'text',
                      label: 'Descrição',
                      required: true,
                    },
                  ],
                },
                {
                  name: 'submitLabel',
                  type: 'text',
                  label: 'Texto do botão',
                  defaultValue: defaultLandingPage.offer.submitLabel,
                  required: true,
                },
                {
                  name: 'successTitle',
                  type: 'text',
                  label: 'Título da confirmação',
                  defaultValue: defaultLandingPage.offer.successTitle,
                  required: true,
                },
                {
                  name: 'successMessage',
                  type: 'text',
                  label: 'Mensagem da confirmação',
                  defaultValue: defaultLandingPage.offer.successMessage,
                  required: true,
                },
              ],
            },
          ],
        },
        {
          label: 'FAQ e rodapé',
          fields: [
            {
              name: 'faq',
              type: 'group',
              label: 'Perguntas frequentes',
              fields: [
                ...sectionIntroFields(defaultLandingPage.faq),
                {
                  name: 'items',
                  type: 'array',
                  label: 'Perguntas',
                  defaultValue: defaultLandingPage.faq.items,
                  minRows: 1,
                  required: true,
                  fields: [
                    {
                      name: 'question',
                      type: 'text',
                      label: 'Pergunta',
                      required: true,
                    },
                    {
                      name: 'answer',
                      type: 'textarea',
                      label: 'Resposta',
                      required: true,
                    },
                  ],
                },
              ],
            },
            {
              name: 'finalCTA',
              type: 'group',
              label: 'Chamada final',
              fields: [
                {
                  name: 'headline',
                  type: 'text',
                  label: 'Título',
                  defaultValue: defaultLandingPage.finalCTA.headline,
                  required: true,
                },
                {
                  name: 'description',
                  type: 'textarea',
                  label: 'Descrição',
                  defaultValue: defaultLandingPage.finalCTA.description,
                  required: true,
                },
                {
                  name: 'buttonLabel',
                  type: 'text',
                  label: 'Texto do botão',
                  defaultValue: defaultLandingPage.finalCTA.buttonLabel,
                  required: true,
                },
              ],
            },
            {
              name: 'contact',
              type: 'group',
              label: 'Contato e rodapé',
              fields: [
                {
                  name: 'tagline',
                  type: 'text',
                  label: 'Assinatura',
                  defaultValue: defaultLandingPage.contact.tagline,
                  required: true,
                },
                {
                  name: 'address',
                  type: 'textarea',
                  label: 'Endereço',
                  defaultValue: defaultLandingPage.contact.address,
                  required: true,
                },
                {
                  name: 'email',
                  type: 'email',
                  label: 'E-mail',
                  defaultValue: defaultLandingPage.contact.email,
                  required: true,
                },
                {
                  name: 'whatsappURL',
                  type: 'text',
                  label: 'Link do WhatsApp',
                  defaultValue: defaultLandingPage.contact.whatsappURL,
                  required: true,
                },
                {
                  name: 'linkedinURL',
                  type: 'text',
                  label: 'Link do LinkedIn',
                  defaultValue: defaultLandingPage.contact.linkedinURL,
                  required: true,
                },
                {
                  name: 'instagramURL',
                  type: 'text',
                  label: 'Link do Instagram',
                  defaultValue: defaultLandingPage.contact.instagramURL,
                  required: true,
                },
                {
                  name: 'privacyURL',
                  type: 'text',
                  label: 'Política de privacidade',
                  defaultValue: defaultLandingPage.contact.privacyURL,
                  required: true,
                },
              ],
            },
          ],
        },
        {
          label: 'SEO',
          fields: [
            {
              name: 'seo',
              type: 'group',
              label: false,
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Título para Google e compartilhamento',
                  defaultValue: defaultLandingPage.seo.title,
                  required: true,
                },
                {
                  name: 'description',
                  type: 'textarea',
                  label: 'Descrição',
                  defaultValue: defaultLandingPage.seo.description,
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  versions: {
    drafts: {
      autosave: {
        interval: 400,
      },
    },
    maxPerDoc: 30,
  },
}
