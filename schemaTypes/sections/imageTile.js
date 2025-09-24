// /sanity/schemas/sections/imageTile.js (NEW)
export const imageTile = {
  name: 'imageTile',
  title: 'Image Tile',
  type: 'object',
  fields: [
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    {
      name: 'perOverlay',
      title: 'Per-Image Overlay Text',
      type: 'array',
      of: [{
        type: 'block',
        styles: [{ title: 'Normal', value: 'normal' }],
        lists: [{ title: 'Bullet', value: 'bullet' }],
        marks: { decorators: [{ title: 'Bold', value: 'strong' }, { title: 'Italic', value: 'em' }] },
      }],
    },
    { name: 'perOverlayColor', title: 'Per-Image Overlay Color', type: 'string' },
    { name: 'perOverlayBg', title: 'Per-Image Overlay Background', type: 'string' },
    { name: 'perOverlayAlign', title: 'Per-Image Overlay Alignment', type: 'string', options: { list: [
      { title: 'Center', value: 'center' },
      { title: 'Top Left', value: 'top-left' },
      { title: 'Top Right', value: 'top-right' },
      { title: 'Bottom Left', value: 'bottom-left' },
      { title: 'Bottom Right', value: 'bottom-right' },
    ], layout: 'radio', direction: 'horizontal' }, initialValue: 'center' },
    { name: 'perLink', title: 'Per-Image Link', type: 'link' },
  ],
  preview: { select: { media: 'image' }, prepare({ media }) { return { title: 'Image Tile', media } } },
}