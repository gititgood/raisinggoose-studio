// /sanity/schemas/sections/imageOverlaySection.js (UPDATED)
export default {
  name: 'imageOverlaySection',
  title: 'Image Overlay Section',
  type: 'object',
  fields: [
    {
      name: 'overlayMode',
      title: 'Overlay Mode',
      type: 'string',
      options: {
        list: [
          { title: 'Global overlay (across all images)', value: 'global' },
          { title: 'Per-image overlays', value: 'per-image' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'global',
    },
    {
      name: 'images',
      title: 'Images (up to 4)',
      type: 'array',
      of: [
        { type: 'image' },
        { type: 'imageTile' },
      ],
      validation: (Rule) => Rule.max(4),
      description: 'Use Image Tile for per-image overlays/links; plain Image for simple strips.',
    },

    // Global overlay controls
    {
      name: 'overlay',
      title: 'Global Overlay Text',
      type: 'array',
      of: [{
        type: 'block',
        styles: [{ title: 'Normal', value: 'normal' }],
        lists: [{ title: 'Bullet', value: 'bullet' }],
        marks: { decorators: [{ title: 'Bold', value: 'strong' }, { title: 'Italic', value: 'em' }] },
      }],
      hidden: ({ parent }) => parent?.overlayMode === 'per-image',
    },
    { name: 'overlayColor', title: 'Global Overlay Color', type: 'string', initialValue: '#ffffff', hidden: ({ parent }) => parent?.overlayMode === 'per-image' },
    { name: 'overlayBg', title: 'Global Overlay Background', type: 'string', initialValue: '#00000080', hidden: ({ parent }) => parent?.overlayMode === 'per-image' },
    { name: 'overlayAlign', title: 'Global Overlay Alignment', type: 'string', options: { list: [
      { title: 'Center', value: 'center' },
      { title: 'Top Left', value: 'top-left' },
      { title: 'Top Right', value: 'top-right' },
      { title: 'Bottom Left', value: 'bottom-left' },
      { title: 'Bottom Right', value: 'bottom-right' },
    ], layout: 'radio', direction: 'horizontal' }, initialValue: 'center', hidden: ({ parent }) => parent?.overlayMode === 'per-image' },
    { name: 'overlayLink', title: 'Global Overlay Link', type: 'link', hidden: ({ parent }) => parent?.overlayMode === 'per-image' },
  ],
  preview: { select: { media: 'images[0]' }, prepare({ media }) { return { title: 'Image Overlay Section', media } } },
}