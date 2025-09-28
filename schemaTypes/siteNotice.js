import {defineType, defineField} from "sanity";

export default defineType({
  name: "siteNotice",
  title: "Site Notice (Overlay)",
  type: "document",
  fields: [
    defineField({ name: "enabled", title: "Enabled", type: "boolean", initialValue: true }),
    defineField({
      name: "version",
      title: "Version key",
      type: "string",
      initialValue: "v1",
      description: "Bump this to re-show after users have dismissed."
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Under construction",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "text",
      rows: 3,
      initialValue:
        "I’m actively building Raising Goose, so a few things may be missing or in-progress. Thanks for your patience!",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {hotspot: true},
      fields: [{ name: "alt", title: "Alt text", type: "string" }]
    }),
    defineField({
      name: "accentHex",
      title: "Accent Hex",
      type: "string",
      initialValue: "#8b0000",
      description: "Brand color for border/button."
    })
  ]
});
