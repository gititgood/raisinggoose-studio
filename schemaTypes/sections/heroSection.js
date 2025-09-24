export default {
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    { name: 'title', title: 'Title (H2)', type: 'string' },
    {
      name: 'copy',
      title: 'Copy',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
          },
        },
      ],
      description: 'Supports bold, italics, and bullet lists.',
    },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    {
      name: 'imagePosition',
      title: 'Image Position',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'right',
      description: 'Swap image to the left or right of the copy.',
    },
  ],
  preview: {
    select: { title: 'title', media: 'image', imagePosition: 'imagePosition' },
    prepare({ title, media, imagePosition }) {
      return { title: `Hero: ${title || '(untitled)'} — img ${imagePosition || 'right'}`, media };
    },
  },
}