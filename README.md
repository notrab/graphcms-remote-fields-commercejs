# graphcms-remote-fields-commercejs

> Query product data from [Commerce.js](https://commercejs.com) using GraphCMS [Remote Fields](https://graphcms.com/docs/schema/field-types#remote).

# Usage

1. Clone the project, and install the project dependencies.

```bash
npx degit notrab/graphcms-remote-fields-commercejs
cd graphcms-remote-fields-commercejs
npm install
```

2. Add a `.env` file with your API keys.

```bash
cp .env.sample .env
vim .env
```

3. Run the migration to create the project schema + remote field types.

```bash
npm run migrate
```

4. Publish one or more content entries for the `Page` model, and enable Public API permissions to fetch from the published stage by default, from your project settings.

```bash
open https://app.graphcms.com
```

5. Start the project!

```bash
npm run dev
```
