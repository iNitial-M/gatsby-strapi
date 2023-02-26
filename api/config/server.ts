export default ({ env }) => ({
  host: env('STRAPI_HOST'),
  port: env.int('PORT'),
  app: {
    keys: env.array('STRAPI_APP_KEYS'),
  },
});
