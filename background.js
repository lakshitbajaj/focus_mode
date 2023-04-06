let redirectIndex = 0;
const redirectUrls = [
  'https://www.interviewquery.com/',
  'https://drive.google.com/file/d/1In31kP92SW0KTlMqluVGoyEBm7fSRoL3/view?usp=share_link',
  'https://www.linkedin.com/in/lakshitbajaj'
];

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    if (hours >= 12 && hours < 21) {
      if (
        details.url.includes('www.youtube.com') ||
        details.url.includes('twitter.com') ||
        details.url.includes('www.reddit.com') ||
        details.url.includes('www.instagram.com') ||
        details.url.includes('www.netflix.com') ||
        details.url.includes('www.primevideo.com')
      ) {
        const redirectUrl = redirectUrls[redirectIndex];
        redirectIndex = (redirectIndex + 1) % redirectUrls.length;
        return { redirectUrl: redirectUrl };
      }
    }
  },
  { urls: ['<all_urls>'] },
  ['blocking']
);