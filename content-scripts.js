const SUPPORTED_HOSTS = ["instagram.com", "x.com", "twitter.com"];

const isSupportedFeed = SUPPORTED_HOSTS.some((host) =>
  window.location.hostname === host || window.location.hostname.endsWith(`.${host}`)
);

if (isSupportedFeed) {
  console.log("PureFeed Logic Gate is active.");
}
