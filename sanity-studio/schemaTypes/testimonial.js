export default {
  name: "testimonial",
  title: "Testimonial",
  type: "document",

  fields: [
    {
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule) =>
        Rule.required().min(1).max(5).integer(),
    },

    {
      name: "review",
      title: "Review",
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.required(),
    },

    {
      name: "clientName",
      title: "Client Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "designation",
      title: "Designation",
      type: "string",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "image",
      title: "Client Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],

  preview: {
    select: {
      title: "clientName",
      subtitle: "designation",
      media: "image",
    },
  },
};