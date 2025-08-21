import {defineType, defineField} from 'sanity'
export default defineType({
  name: 'observation',
  title: 'Observation',
  type: 'document',
  fields: [
    defineField({ name: 'when', title: 'When', type: 'datetime', initialValue: () => new Date().toISOString() }),
    defineField({ name: 'state', title: 'State', type: 'string', options: { list: ['calm','alert','overstimulated'] }}),
    defineField({ name: 'triggers', title: 'Triggers', type: 'array', of: [{type: 'string'}] }),
    defineField({ name: 'actions', title: 'Actions Taken', type: 'array', of: [{type: 'string'}] }),
    defineField({ name: 'outcome', title: 'Outcome', type: 'text' }),
    defineField({ name: 'media', title: 'Media', type: 'array', of: [{type: 'image'}, {type: 'file'}]}),
  ],
})