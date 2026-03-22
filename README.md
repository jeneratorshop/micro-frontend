# Microfrontend Workspace

Bu repo, `3000` portunda calisan host uygulamanin tum shell ve routing
sahipligini aldigi, `3001` portundaki remote uygulamanin ise sadece content
modulleri ve sidebar menu kayitlari sagladigi bir microfrontend ornegidir.

Kullanici deneyimi tek bir React SPA gibi davranir:

- Host route'lari `http://localhost:3000/host/...`
- Remote content route'lari `http://localhost:3000/remote/...`
- Remote preview `http://localhost:3001/remote/...`

## Yeni Sorumluluk Dagilimi

### Host uygulama neyi yonetir?

- Navbar
- Sidebar UI
- Authentication state
- Login / logout aksiyonlari
- Ana router
- Sayfa iskeleti ve shell davranisi

### Remote uygulama neyi yonetir?

- Remote content sayfalari
- Host sidebar'ina eklenecek menu kayitlari
- Kendi preview ortami
- Kendi route registry tanimi

Kisa ozet:

- Host shell sahibidir.
- Remote sadece content ve navigation metadata uretir.

## Bu Mimari Neden Iyi?

Bu ayrim sayesinde:

- shell davranisi tek yerde kontrol edilir
- auth mantigi dagilmaz
- remote ekip host shell'i bozmadan yeni sayfa ekleyebilir
- sidebar item eklemek icin sadece remote route registry guncellenir
- kullanici her zaman `3000` portunda kalir

## Atomic Design Nedir?

Atomic design, UI'yi kucukten buyuge dogru katmanlara ayirarak daha
yonetilebilir hale getiren bir yaklasimdir.

Bu projede katmanlar su sekilde kullanilir:

- `atoms`
  En temel UI parcalari. Ornek: route chip, kucuk etiket, link parcasi.
- `molecules`
  Birden fazla atomun birlesimi. Ornek: action link, portal switcher, sidebar item.
- `organisms`
  Sayfada tek basina anlamli buyuk bloklar. Ornek: navbar, sidebar, auth karti.
- `templates`
  Sayfa iskeletini kuran layout katmani.
- `pages`
  Route seviyesinde render edilen ekranlar.

## Neden `app` ve `shared` Ayrica Var?

Atomic design UI hiyerarsisini anlatir. Ama gercek projede router, provider,
guard, federation importlari ve sabitler UI degildir.

Bu nedenle ek olarak su alanlar vardir:

- `app/`
  Uygulama seviyesi kodlar. Router, provider, guard, boundary ve global stil
  kompozisyonu burada tutulur.
- `shared/`
  Sabitler, mock veriler, federation loader'lari ve ortak yardimci kodlar
  burada tutulur.

Bu ayrim sayesinde `components/` klasoru yalnizca UI odakli kalir.

## Klasor Yapisi

### Host App

```text
apps/host-app/src/
  app/
    boundaries/
    providers/
    routes/
    styles/
  components/
    atoms/
    molecules/
    organisms/
      auth/
    templates/
  pages/
    host/
  shared/
    config/
    constants/
    federation/
  App.jsx
  main.jsx
  remote-modules.d.ts
  styles.css
```

### Remote App

```text
apps/remote-app/src/
  app/
    guards/
    registry/
    routes/
    styles/
  components/
    atoms/
    molecules/
    organisms/
    templates/
  pages/
  shared/
    constants/
  RemoteApp.jsx
  main.jsx
  styles.css
```

## Atomic Design Bu Repoda Nasil Uygulaniyor?

### Host tarafi

- `app/providers/AuthProvider.jsx`
  Host auth state burada tutulur.
- `app/providers/RemoteRouteProvider.jsx`
  Remote route registry burada okunur.
- `components/organisms/Navbar.jsx`
  Navbar host tarafinda render edilir.
- `components/organisms/Sidebar.jsx`
  Sidebar host tarafinda render edilir.
- `components/organisms/auth/*`
  Login paneli ve auth durum kartlari host tarafindadir.
- `components/templates/ShellTemplate.jsx`
  Tüm host shell burada birlestirilir.

### Remote tarafi

- `app/registry/routeRegistry.js`
  Remote'un host'a verdigi route ve sidebar metadata kaynagidir.
- `pages/*`
  Remote content ekranlari burada bulunur.
- `components/templates/PreviewShellTemplate.jsx`
  Remote ekibin kendi preview ortami burada kurulur.

## Route Registry Mantigi

Remote uygulama su tipte bir registry export eder:

```js
{
  id: 'remote-overview',
  path: '/remote/overview',
  label: 'Overview',
  description: 'Remote modulun host icindeki icerik girisi',
  sectionTitle: 'Remote Content',
  component: OverviewPage
}
```

Host uygulama bu registry'yi okuyarak:

- route olusturur
- sidebar item olusturur
- remote sayfayi render eder

Yani remote ekip yeni bir sayfa eklediginde host shell kodunu degistirmeden yeni
icerigi gosterebilir.

## One Cikan Dosyalar

- `apps/host-app/src/app/providers/AuthProvider.jsx`
  Host auth burada yonetilir.
- `apps/host-app/src/app/providers/RemoteRouteProvider.jsx`
  Remote route registry burada yuklenir.
- `apps/host-app/src/components/templates/ShellTemplate.jsx`
  Host navbar ve sidebar burada birlesir.
- `apps/host-app/src/app/routes/AppRouter.jsx`
  Local ve remote route'lar burada tek router altinda toplanir.
- `apps/remote-app/src/app/registry/routeRegistry.js`
  Remote sayfa listesi ve sidebar kayitlari burada tanimlanir.
- `apps/remote-app/src/pages/OverviewPage.jsx`
  Host icinde calisacak remote content ornegidir.

## Route Haritasi

- `http://localhost:3000/host/dashboard`
- `http://localhost:3000/host/orders`
- `http://localhost:3000/host/roadmap`
- `http://localhost:3000/remote/overview`
- `http://localhost:3000/remote/navigation`
- `http://localhost:3000/remote/authentication`
- `http://localhost:3001/remote/overview`

## Gelistirme Akisi

1. Navbar, sidebar veya auth degisecekse `host-app` icinde calis.
2. Yeni remote sayfa eklenecekse `remote-app/src/pages` altinda calis.
3. Yeni sidebar elemani eklenecekse `remote-app/src/app/registry/routeRegistry.js` dosyasini guncelle.
4. Yeni host sayfasi eklenecekse `host-app/src/pages/host` altinda calis.
5. Provider, router veya federation davranisi degisecekse `app/` ve `shared/` altinda calis.

## Kurulum

```bash
npm.cmd install
```

## Calistirma

Iki uygulamayi birlikte baslatmak icin:

```bash
npm.cmd run dev
```

Ayri ayri baslatmak icin:

```bash
npm.cmd run dev:host
npm.cmd run dev:remote
```

## Build

```bash
npm.cmd run build
```

## Demo Auth Bilgileri

- `admin / 123456`
- `editor / 123456`

## Notlar

- Ana gelistirme adresi `http://localhost:3000` olmalidir.
- `3001` remote preview ve `remoteEntry.js` yayini icin calisir.
- Remote uygulama dev modda `build --watch + preview` ile ayakta tutulur.
- `react-router-dom` host ve remote tarafinda shared olarak tanimlidir.

## Sonraki Adimlar

- Gercek login API baglantisi eklemek
- Role-based menu yapmak
- Route registry icin tip dogrulamasi eklemek
- Remote content icin feature bazli klasorleme yapmak
- Shared design token yapisi cikarmak
