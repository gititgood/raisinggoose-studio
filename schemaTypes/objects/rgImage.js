// /schemas/objects/rgImage.js
import React from 'react'
import {defineType} from 'sanity'

export default defineType({
  name: 'rgImage',
  title: 'Image (with EXIF/Location)',
  type: 'image',
  options: {
    hotspot: true,
    metadata: ['exif', 'location', 'palette', 'lqip'], // <-- EXIF & GPS
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alt text',
    },
  ],
})
