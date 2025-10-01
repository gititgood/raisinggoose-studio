import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'memorialCard',
  title: 'Memorial Card (Homepage)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Headline',
      type: 'string',
      initialValue: 'In Loving Memory of Sami',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{type: 'block'}]
    }),
    defineField({
        name: 'cardBg',
        title: 'Card Background (hex)',
        type: 'string',
        initialValue: '#ffffff',
        validation: Rule => Rule.regex(/^#([0-9A-F]{3}){1,2}$/i)
    }),
defineField({
      name: 'useSingleImage',
      title: 'Use Single Image Layout',
      type: 'boolean',
      initialValue: false,
      description: 'When enabled, shows one centered 350×400 image above the headline.'
    }),
    defineField({
      name: 'singleImage',
      title: 'Single Image (350×400 recommended)',
      type: 'object',
      options: {collapsible: true, collapsed: true},
      fields: [
        {name: 'image', title: 'Image', type: 'image', options: {hotspot: true}},
        {name: 'alt', title: 'Alt Text', type: 'string'}
      ],
      // If toggle is on, require an image
      validation: Rule => Rule.custom((val, ctx) => {
        const on = ctx?.parent?.useSingleImage
        if (on && !val?.image) return 'Please add a single image.'
        return true
      })
    }),
    defineField({
      name: 'images',
      title: 'Polaroid Images (max 3)',
      type: 'array',
      validation: Rule => Rule.max(3),
      of: [
        {
          type: 'object',
          fields: [
            {name: 'image', title: 'Image', type: 'image', options: {hotspot: true}},
            {name: 'alt', title: 'Alt Text', type: 'string'},
            {name: 'label', title: 'Caption / Label', type: 'string'}
          ],
          preview: {
            select: {media: 'image', title: 'label', subtitle: 'alt'}
          }
        }
      ]
    }),
    defineField({
      name: 'accentColor',
      title: 'Accent Color (hex)',
      type: 'string',
      initialValue: '#8b0000',
      validation: Rule => Rule.regex(/^#([0-9A-F]{3}){1,2}$/i, {name: 'hex color'})
    }),
    defineField({
      name: 'mode',
      title: 'Display Mode',
      type: 'string',
      options: {list: ['overlay', 'inline'], layout: 'radio'},
      initialValue: 'overlay'
    }),
    // Optional: let editors tune the arc without code changes
    defineField({
      name: 'layout',
      title: 'Layout (Advanced)',
      type: 'object',
      options: {collapsible: true, collapsed: true},
      fields: [
        {name: 'radius', title: 'Arc Radius (px)', type: 'number', initialValue: 220},
        {name: 'verticalOffset', title: 'Vertical Offset (px)', type: 'number', initialValue: 60},
        {
          name: 'angles',
          title: 'Angles (degrees)',
          type: 'array',
          of: [{type: 'number'}],
          initialValue: [210, 270, 330],
          validation: Rule => Rule.length(3)
        }
      ]
    })
  ]
})
