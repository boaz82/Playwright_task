import { devices, PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    timeout: 60000,
    retries: 0,
    testDir: 'tests',
    use: {
        headless: true,
        viewport:{ width:1280, height: 720 },
        actionTimeout: 30000,
        ignoreHTTPSErrors: true,
        video: 'retain-on-failure',
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure'
    },
    projects: [
        {
            name: 'Chromium',
            use: { browserName: 'chromium'}
        },
        {
            name: 'Firefox',
            use: { browserName: 'firefox'}
        },
        {
            name: 'Webkit',
            use: { browserName: 'webkit'}
        },
        {
            name: 'iPhone',
            use: {...devices['iPhone 13']}
        },
        {
            name: 'pixel',
            use: {...devices['Pixel 5']}
        }
    ],
    testMatch: '**.spec.ts',
    reporter: [
        ['allure-playwright'],
        ['list'],
        ['junit', { outputFile: `test-results/Junit/test-results-${Date.now()}.xml` }],
      ],
}

export default config