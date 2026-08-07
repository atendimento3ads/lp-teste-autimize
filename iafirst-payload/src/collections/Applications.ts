import type { CollectionConfig } from 'payload'

import { authenticated } from '../access/authenticated'

export const Applications: CollectionConfig = {
  slug: 'applications',
  labels: {
    singular: 'Aplicação',
    plural: 'Aplicações',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'email', 'role', 'status', 'createdAt'],
    description: 'Leads enviados pelo formulário da landing page.',
    group: 'Comercial',
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'status',
      type: 'select',
      label: 'Status',
      defaultValue: 'new',
      options: [
        { label: 'Nova', value: 'new' },
        { label: 'Em contato', value: 'contacted' },
        { label: 'Qualificada', value: 'qualified' },
        { label: 'Arquivada', value: 'archived' },
      ],
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'name',
      type: 'text',
      label: 'Nome completo',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      label: 'E-mail corporativo',
      index: true,
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Telefone / WhatsApp',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      label: 'Cargo',
      required: true,
    },
    {
      name: 'revenue',
      type: 'text',
      label: 'Receita anual',
      required: true,
    },
    {
      name: 'goal',
      type: 'textarea',
      label: 'Objetivo para os próximos 4 meses',
      required: true,
    },
    {
      type: 'collapsible',
      label: 'Origem da campanha',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'pageURL',
          type: 'text',
          label: 'Página de origem',
        },
        {
          name: 'utmSource',
          type: 'text',
          label: 'utm_source',
        },
        {
          name: 'utmMedium',
          type: 'text',
          label: 'utm_medium',
        },
        {
          name: 'utmCampaign',
          type: 'text',
          label: 'utm_campaign',
        },
      ],
    },
  ],
  timestamps: true,
}
