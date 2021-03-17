require("dotenv").config();

const { newMigration, FieldType } = require("@graphcms/management");

// Create a new `migration` instance
const migration = newMigration({
  authToken: process.env.GRAPHCMS_MANAGEMENT_TOKEN,
  endpoint: process.env.GRAPHCMS_ENDPOINT,
});

// Create the type definitions for objects returned from the Stripe API
migration.createRemoteTypeDefinition({
  definition:
    "type ChecProductPrice { raw: Int!, formatted: String!, formatted_with_symbol: String!, formatted_with_code: String! }",
  displayName: "Chec Product Price",
  description: "Fields belonging to the Chec Product Price",
});

migration.createRemoteTypeDefinition({
  definition: "type ChecProductMedia { type: String, source: String }",
  displayName: "Chec Product Media",
  description: "Fields belonging to the Chec Product Media",
});

migration.createRemoteTypeDefinition({
  definition:
    "type ChecProduct { id: ID! name: String!, permalink: String!, price: ChecProductPrice!, media: ChecProductMedia }",
  displayName: "Chec Product",
  description: "Fields belonging to the Chec Product",
});

// Create a new `Page` model, with associated fields
const pageModel = migration.createModel({
  apiId: "Page",
  apiIdPlural: "Pages",
  displayName: "Page",
});

pageModel.addSimpleField({
  apiId: "title",
  displayName: "Title",
  description: "Give your page a title",
  type: FieldType.String,
  isRequired: true,
});

pageModel.addSimpleField({
  apiId: "content",
  displayName: "Content",
  type: FieldType.Richtext,
});

pageModel.addSimpleField({
  apiId: "checProductId",
  displayName: "Chec Product ID",
  description: "The ID of the Chec product this page relates to",
  type: FieldType.String,
});

// Create the necessary Remote Fields to fetch data from Chec, including authorization header
pageModel.addRemoteField({
  apiId: "checProduct",
  displayName: "Chec Product",
  remoteConfig: {
    url: "https://api.chec.io/v1/products/{checProductId}",
    headers: {
      "X-Authorization": process.env.NUXT_ENV_CHEC_PUBLIC_API_KEY,
    },
    method: "GET",
    returnType: "ChecProduct",
  },
});

migration.run();
