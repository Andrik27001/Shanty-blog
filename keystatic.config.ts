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
      slugField: "title",
      path: "src/content/categories/*/",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({
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
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*/",
      schema: {
        title: fields.slug({
          name: {
            label: "Title",
          },
        }),
        categories: fields.array(
          fields.relationship({
            label: "Category",
            collection: "categories",
          }),
          {
            label: "Categories",
            itemLabel: (item) => item.value || "N/A",
          }
        ),
      },
    }),
  },
});
