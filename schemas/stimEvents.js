import {defineType, defineField} from 'sanity'
export default defineType({
  name: 'stimEvent',
  title: 'Stim Event',
  type: 'document',
  fields: [
    defineField({ name: 'when', title: 'When', type: 'datetime', initialValue: () => new Date().toISOString() }),
    defineField({ name: 'intensity', title: 'Intensity (1-5)', type: 'number', validation: r => r.min(1).max(5) }),
    defineField({ name: 'notes', title: 'Notes', type: 'string' }),
    defineField({ name: 'category', title: 'Category', type: 'string', options: { list: ['start','peak','resolve'] } }),
    defineField({ name: 'duration', title: 'Duration (seconds)', type: 'number', validation: r => r.min(0) }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'timeToCalm', title: 'Time to Calm (seconds)', type: 'number', validation: r => r.min(0) })
  ],
})