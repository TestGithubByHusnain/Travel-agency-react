import * as Sentry from "@sentry/react-router";

Sentry.init({
  dsn: "https://30155a3b9dbb81f4d9517088fd08e19e@o4509215105875968.ingest.de.sentry.io/4509215118655568",
  
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});
