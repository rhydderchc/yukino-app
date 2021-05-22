<p align="center">
    <img src="./resources/large.png" width="50%">
</p>

# Yukino

Yukino lets you read manga or stream anime ad-free from multiple sources. The project's name "Yukino" means "Snow" named after the character "Yukino Yukinoshita" from the anime "Yahari Ore no Seishun Love Comedy wa Machigatteiru".

We do not support piracy or run/serve any illegal or copyrighted contents, everything is acquired from third-party sources.

## Download

You can download the latest version of app from the [releases](https://github.com/zyrouge/yukino-app/releases) tab. Currently it supports only **Windows** and **Linux**. More to be announced after further development.

## Preview

![Home](./screenshots/home.png)
![Search](./screenshots/search.png)
![Anime](./screenshots/anime.png)
![Episodes](./screenshots/episodes.png)
![Sources](./screenshots/sources.png)
![Player](./screenshots/player.png)
![Manga](./screenshots/manga.png)

## Technology

-   [Node.js](https://nodejs.org) (Primary language)
-   [Typescript](https://www.typescriptlang.org/) (Runtime)
-   [Yarn](https://yarnpkg.com/) (Package manager)
-   [Vite](https://vitejs.dev) (Base site)
-   [Electron](https://electronjs.org) (Desktop app)
-   [Tailwind CSS](https://tailwindcss.com/) (Styling)

## Packages

-   [anime-ext](https://zyrouge.github.io/anime-ext) (Module that fetches everything behind-the-scene)

## Code structure

-   `src` - Contains the base of the site
-   `environments/electron` - Contains Electron base files
-   `scripts` - Contains necessary base scripts
-   `resources` - Contains necessary assets

## Contributing

Ways to contribute to this project:

-   Submitting bugs and feature requests in [issues](https://github.com/zyrouge/yukino-app/issues)
-   Opening [pull requests](https://github.com/zyrouge/yukino-app/pulls) containing bug fixes, new features, etc.

## Developer guide

### Cloning & Installing

```bash
git clone https://github.com/zyrouge/yukino-app.git
cd yukino-app
yarn
```

### Running the app in development

```bash
yarn vite:dev # Vite
yarn electron:dev # Electron
```

### Building the app in development

```bash
yarn vite:build # Vite
yarn electron:build # Electron
```

## License

[MIT](./LICENSE)