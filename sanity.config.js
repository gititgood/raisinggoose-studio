import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes/'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list' // Add missing import

export default defineConfig({
  name: 'default',
  title: 'RaisingGoose.com',

  projectId: '8wzkasla',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title('Content')
          .items([
            // Drag-and-drop ordering list
            orderableDocumentListDeskItem({
              type: 'gooseTimelineEntry',
              title: 'Goose Timeline (drag to reorder)',
              S,
              context,
            }), ...S.documentTypeListItems().filter(
              li => li.getId() !== 'gooseTimelineEntry'
            ),
          ]),
    }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
