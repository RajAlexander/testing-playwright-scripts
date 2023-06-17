import { firefox, webkit, chromium, ChromiumBrowser, WebKitBrowser, FirefoxBrowser, LaunchOptions } from "@playwright/test";

let browser: ChromiumBrowser | WebKitBrowser | FirefoxBrowser;

const browserOptions: LaunchOptions = {
  // wfretail-qa.wildfork.ca environment is slow, so we had to increase the timeout
  slowMo: 3000, // + process.env.SLOWMO, // 2000, //
  headless: true, // !!process.env.HEADLESS,  // false, // true, //
  args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'],
  firefoxUserPrefs: {
    'media.navigator.streams.fake': true,
    'media.navigator.permission.disabled': true,
  },
};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BROWSER: 'chromium' | 'firefox' | 'webkit';
      ENV: 'dev' | 'test' | 'prod';
      BASE_URL: string;
      BASE_API_URL: string;
      HEADLESS: string;
      SLOWMO: string;
    }
  }
}

export const launchBrowser = async () => {
  switch (process.env.BROWSER || 'chromium') {
    case 'firefox':
      browser = await firefox.launch(browserOptions);
      break;
    case 'webkit':
      browser = await webkit.launch(browserOptions);
      break;
    default:
      browser = await chromium.launch(browserOptions);
  }
  return browser;
}