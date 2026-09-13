export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'fullCategory',
      title: 'Full Category Name',
      type: 'string',
      options: {
        list: [
          { title: 'Residential', value: 'Residential' },
          { title: 'Commercial', value: 'Commercial' },
          { title: 'Retail & Hospitality', value: 'Retail & Hospitality' },
          { title: 'Interior Decor', value: 'Interior Decor' },
          { title: 'Furniture Design', value: 'Furniture Design' }
        ]
      }
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'year',
      title: 'Completion Year',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Project Description',
      type: 'text',
      rows: 5,
    },
    {
      name: 'keyHighlights',
      title: 'Key Highlights',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'images',
      title: 'Project Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'The first image uploaded will be used as the main cover image.',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'fullCategory',
      media: 'images.0',
    },
  },
};