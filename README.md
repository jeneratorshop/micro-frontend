# Microfrontend Ornek Projesi

Bu ornek proje iki uygulamali bir `microfrontend` yapisi kurar:

- `3000`: Host uygulama. Senin ana is ekranlarini gelistirecegin taraf.
- `3001`: Remote uygulama. `navbar`, `sidebar` ve `authentication` burada yonetilir.

## Teknolojiler

- React
- Vite
- `@originjs/vite-plugin-federation`
- npm workspaces

## Kurulum

```bash
npm.cmd install
```

## Calistirma

Tum uygulamalari ayni anda baslatmak icin:

```bash
npm.cmd run dev
```

Not:

- `3000`: Host uygulama
- `3001`: Remote uygulama
- Port doluysa Vite artik baska porta kaymaz; hata vererek seni uyarir.

Tek tek baslatmak icin:

```bash
npm.cmd run dev:remote
npm.cmd run dev:host
```

Remote tarafi dev modda `build + preview` ile calisir. Bunun sebebi `module federation` icin `remoteEntry.js` dosyasinin gercekten uretilmesi gerektigidir.

## Demo Bilgisi

Remote auth panelinde asagidaki hesaplari kullanabilirsin:

- `admin / 123456`
- `editor / 123456`

## Mimari Ozet

- Host uygulama remote taraftan `AuthProvider`, `Navbar`, `Sidebar` ve auth widgetlarini tuketir.
- Remote uygulama tek basina da calisabilir; boylece ortak shell ayri ekip tarafindan gelistirilebilir.
- Auth state remote tarafta tutulur ve host UI bu state'i paylasilan provider uzerinden kullanir.
