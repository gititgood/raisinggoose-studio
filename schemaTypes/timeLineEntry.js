// /sanity/schemas/gooseTimelineEntry.ts
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
      options: {hotspot: true},
      fields: [
        { name: 'alt', title: 'Alt text', type: 'string' }
      ]
    }),
    defineField({
      name: 'takenAt',
      title: 'Date Photo Taken',
      type: 'date',
    }),
    defineField({
      name: 'ageLabel',
      title: 'Age Label',
      type: 'string',
      description: `Shown on the overlay, e.g. "7 months"`,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug (optional)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    }),
    defineField({
      name: 'linkHref',
      title: 'Overlay Link HREF (optional)',
      type: 'url',
      description: 'If set, the age overlay becomes a link.'
    })
  ],
  preview: {
    select: {title: 'title', media: 'image', subtitle: 'ageLabel'}
  }
})
