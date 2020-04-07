import * as Sentry from "@sentry/browser";

function init() {
  return Sentry.init({
    dsn:
      "https://4a11904bcac6459ab2b90528824dd49a@o224552.ingest.sentry.io/5191689",
  });
}

export default {
  init,
};
