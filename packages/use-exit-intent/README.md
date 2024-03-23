<p align="center">
  <a href="#use-exit-intent">
    <img alt="preview" src="https://github.com/daltonmenezes/use-exit-intent/raw/main/apps/web/public/banner.svg" width="100%">
  </a>
</p>

<h3 align="center"><strong>useExitIntent</strong>: 🐠 A React Hook to handle exit intent strategies</h3>

<p align="center">
  <!-- GitHub -->
  <a href="https://github.com/sponsors/daltonmenezes">
    <img alt="github url" src="https://img.shields.io/badge/support%20on-github-1C1E26?style=for-the-badge&labelColor=1C1E26&color=646cff"/>
  </a>
  <!-- Patreon -->
  <a href="https://www.patreon.com/daltonmenezes">
    <img alt="patreon url" src="https://img.shields.io/badge/support%20on-patreon-1C1E26?style=for-the-badge&labelColor=1C1E26&color=646cff"/>
  </a>
  <!-- Version -->
  <a href="https://github.com/daltonmenezes/use-exit-intent/releases">
     <img alt="releases url" src="https://img.shields.io/npm/v/use-exit-intent.svg?style=for-the-badge&labelColor=1C1E26&color=646cff"/>
  </a>  
  <!-- License -->
  <a href="https://github.com/daltonmenezes/use-exit-intent/blob/main/LICENSE">
    <img alt="license url" src="https://img.shields.io/badge/license%20-MIT-1C1E26?style=for-the-badge&labelColor=1C1E26&color=646cff"/>
  </a>
</p>

> The Exit Intent strategy is a great way to increase your conversion rate. That strategy is commonly used to show a modal/popup when the user is about to leave your website.

# 🐠 Features
- 🚀 Multiple handlers can be registred
- 🔥 Highly configurable
- 🧠 Different strategies for Desktop and Mobile
- ⛔️ Unsubscription support with cookies
- 🎉 Built with TypeScript

# 🐠 Installation
In your terminal, run:
```bash
yarn add use-exit-intent

# OR

npm i use-exit-intent
```

# 🐠 Usage

In your React component:

```tsx
import { useExitIntent } from 'use-exit-intent'

export function App() {
  const { registerHandler } = useExitIntent()

  registerHandler({
    id: 'openModal',
    handler: () => console.log('Hello from handler!')
  })

  // ...
}
```

# 🐠 Knowledge
- [Docs](https://use-exit-intent.daltonmenezes.com/docs/getting-started/overview)
- [Playground](https://use-exit-intent.daltonmenezes.com/#playground)


# 🐠 Contributing
> **Note**: contributions are always welcome, but always **ask first**, — please — before work on a PR.

That said, there's a bunch of ways you can contribute to this project, like by:

- :beetle: Reporting a bug
- :page_facing_up: Improving this documentation
- :rotating_light: Sharing this project and recommending it to your friends
- :dollar: Supporting this project on GitHub Sponsors or Patreon
- :star2: Giving a star on this repository

# License

[MIT © Dalton Menezes](https://github.com/daltonmenezes/use-exit-intent/blob/main/LICENSE)
