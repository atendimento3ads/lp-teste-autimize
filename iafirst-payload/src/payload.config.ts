import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { pt } from '@payloadcms/translations/languages/pt'
import sharp from 'sharp'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import { Applications } from './collections/Applications'
import { LandingPages } from './collections/LandingPages'
import { Media } from './collections/Media'
import { Users } from './collections/Users'
import { defaultLandingPage } from './data/defaultLandingPage'
import { getServerSideURL } from './utilities/getURL'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      description: 'Administração da landing page Mentoria AI FIRST',
      titleSuffix: ' · AI FIRST',
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  editor: lexicalEditor(),
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL || '',
    },
  }),
  collections: [LandingPages, Applications, Media, Users],
  cors: [getServerSideURL()].filter(Boolean),
  i18n: {
    fallbackLanguage: 'pt',
    supportedLanguages: { pt },
  },
  onInit: async (payload) => {
    const existingLandingPage = await payload.find({
      collection: 'landing-pages',
      limit: 1,
      pagination: false,
      where: {
        slug: {
          equals: defaultLandingPage.slug,
        },
      },
    })

    if (existingLandingPage.docs.length === 0) {
      const mentorItems = defaultLandingPage.mentors.items.map(
        ({ photo: _unusedPhoto, ...mentor }) => mentor,
      )

      await payload.create({
        collection: 'landing-pages',
        data: {
          ...defaultLandingPage,
          mentors: {
            ...defaultLandingPage.mentors,
            items: mentorItems,
          },
          _status: 'published',
        },
      })
    }
  },
  secret: process.env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
