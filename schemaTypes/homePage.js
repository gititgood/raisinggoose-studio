import carousel from "./carousel";
import heroImage from "./heroImage";
import heroSection from "./sections/heroSection";
import imageOverlaySection from "./sections/imageOverlaySection";

export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        { type: 'heroSection' },
        { type: 'imageOverlaySection' },
        { type: 'carousel' }, // NEW
      ],
      description: 'Drag to reorder. This order is used on the site.',
    },
  ],
}