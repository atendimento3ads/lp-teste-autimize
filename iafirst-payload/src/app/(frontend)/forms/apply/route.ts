import configPromise from '@payload-config'
import { getPayload } from 'payload'

const text = ({ maxLength, value }: { maxLength: number; value: unknown }) =>
  typeof value === 'string' ? value.trim().slice(0, maxLength) : ''

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>

    if (text({ maxLength: 200, value: body.website })) {
      return Response.json({ ok: true }, { status: 201 })
    }

    const data = {
      email: text({ maxLength: 180, value: body.email }).toLowerCase(),
      goal: text({ maxLength: 3000, value: body.goal }),
      name: text({ maxLength: 180, value: body.name }),
      pageURL: text({ maxLength: 600, value: body.pageURL }),
      phone: text({ maxLength: 60, value: body.phone }),
      revenue: text({ maxLength: 120, value: body.revenue }),
      role: text({ maxLength: 120, value: body.role }),
      utmCampaign: text({ maxLength: 180, value: body.utmCampaign }),
      utmMedium: text({ maxLength: 180, value: body.utmMedium }),
      utmSource: text({ maxLength: 180, value: body.utmSource }),
    }

    const isPrivacyAccepted = body.privacyAccepted === 'yes'
    const isValid =
      data.name &&
      data.email.includes('@') &&
      data.phone &&
      data.role &&
      data.revenue &&
      data.goal &&
      isPrivacyAccepted

    if (!isValid) {
      return Response.json({ error: 'Preencha todos os campos obrigatórios.' }, { status: 400 })
    }

    const payload = await getPayload({ config: configPromise })

    await payload.create({
      collection: 'applications',
      data: {
        ...data,
        status: 'new',
      },
      overrideAccess: true,
    })

    return Response.json({ ok: true }, { status: 201 })
  } catch (error) {
    console.error('Application form error', error)
    return Response.json({ error: 'Não foi possível registrar a aplicação.' }, { status: 500 })
  }
}
