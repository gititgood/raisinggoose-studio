export default {
  name: 'carousel',
  title: 'Carousel',
  type: 'document',
  fields: [
    { name: 'title', title: 'Admin Title', type: 'string', validation: Rule => Rule.required() },
    {
      name: 'key',
      title: 'Key (e.g. "goose")',
      type: 'string',
      options: { hotspot: true },
      description: 'Unique handle used by the front-end.',
      validation: Rule => Rule.required().regex(/^[a-z0-9\-]+$/)
    },
    {
      name: 'slides',
      title: 'Slides',
      type: 'array',
      of: [{
        type: 'object',
        name: 'slide',
        fields: [
          { name: 'image', title: 'Image', type: 'image', options: { hotspot: true }, validation: Rule => Rule.required() },
          { name: 'alt', title: 'Alt Text', type: 'string' },
          { name: 'heading', title: 'Heading', type: 'string' },
          { name: 'subheading', title: 'Subheading', type: 'string' },
          { name: 'body', title: 'Body', type: 'text' },
          { name: 'ctaLabel', title: 'CTA Label', type: 'string' },
          { name: 'ctaHref', title: 'CTA Link', type: 'url' },
          { name: 'sort', title: 'Sort Order', type: 'number' }
        ],
        preview: { select: { title: 'heading', media: 'image', subtitle: 'subheading' } }
      }]
    }
  ],
  preview: { select: { title: 'title', subtitle: 'key' } }
}
