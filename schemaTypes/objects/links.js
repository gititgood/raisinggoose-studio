// /sanity/schemas/objects/link.js (NEW)
export const link = {
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    { name: 'href', title: 'URL', type: 'url' },
    { name: 'label', title: 'Label (optional)', type: 'string' },
    { name: 'newTab', title: 'Open in new tab', type: 'boolean', initialValue: false },
  ],
}