// keystatic.config.ts
import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  ui: {
    brand: {
      name: "Shanty Blog",
    },
  },
  collections: {
    categories: collection({
      label: "Categories",
      slugField: "name",
      path: "src/content/categories/*/",
      format: { contentField: "content" },
      schema: {
        name: fields.slug({
          name: {
            label: "Name",
            description: "This field will set the category name",
          },
        }),
        image: fields.image({
          label: "Image",
          description: "This field will set the category image",
          directory: "/public/images/categories",
          publicPath: "/images/categories",
        }),
        content: fields.markdoc({ label: "Content" }),
      },
    }),
  },
});
