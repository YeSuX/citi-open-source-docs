import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CITI Open Source Program",
  description: "A collection of guidelines and resources from Citi's Open Source Program Office",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Contributor Covenant Code of Conduct', link: '/CODE_OF_CONDUCT' },
      { text: 'DCO', link: '/DCO' },
      { text: 'SECURITY', link: '/SECURITY' },
    ],
    sidebar: [
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Citi' },
      {icon:'twitter',link:'https://twitter.com/citi'},
      {icon:'linkedin',link:'https://www.linkedin.com/company/citi'},
    ],
    footer: {
      message: 'Light tomorrow with today.',
      copyright: '2022-present © suxiong',
    },
    lastUpdatedText: 'Updated Date',
  }
})
