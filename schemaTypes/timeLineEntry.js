// /sanity/schemas/gooseTimelineEntry.js
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'gooseTimelineEntry',
  title: 'Goose Timeline Entry',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title (internal)',
      type: 'string',
    }),

    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
        metadata: ['exif', 'location', 'palette', 'lqip'], // capture EXIF + GPS
      },
      fields: [{ name: 'alt', title: 'Alt text', type: 'string' }],
    }),

    defineField({
      name: 'takenAt',
      title: 'Date Photo Taken',
      type: 'date',
      description:
        'Optional manual date. EXIF date is stored on the asset itself.',
    }),

    // Read-only: surface EXIF/GPS values from the asset
    defineField({
      name: 'captureMetadata',
      title: 'Captured Metadata (from EXIF/GPS)',
      type: 'string',
      readOnly: true,
      components: {
        field: (props) => {
                const asset = props?.parent?.image?.asset
                const exifDate = asset?.metadata?.exif?.DateTimeOriginal || '— not found —'
                const loc = asset?.metadata?.location
                const gps = loc ? `lat ${loc.lat}, lng ${loc.lng}` : '— no GPS —'
                return `EXIF Date: ${exifDate} | GPS: ${gps}`
        }
      },
    }),

    defineField({
      name: 'ageLabel',
      title: 'Age Label',
      type: 'string',
      description: 'Shown on the overlay, e.g. "7 months"',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug (optional)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    }),

    defineField({
      name: 'linkHref',
      title: 'Overlay Link HREF (optional)',
      type: 'url',
      description: 'If set, the age overlay becomes a link.',
    }),
  ],

  preview: {
    select: { title: 'title', media: 'image', subtitle: 'ageLabel' },
  },
})
