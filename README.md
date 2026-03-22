# Microfrontend Workspace

Bu repo, `3000` portunda calisan host uygulamanin tum routing'i yonettigi ve
`3001` portundaki remote uygulamanin ortak shell bilesenlerini sagladigi bir
microfrontend ornegidir.

Kullanici tarafi tek bir React SPA gibi davranir:

- Host route'lari `http://localhost:3000/host/...`
- Remote route'lari `http://localhost:3000/remote/...`
- Remote preview `http://localhost:3001/remote/...`

Remote uygulama su paylasilan alanlari saglar:

- `Navbar`
- `Sidebar`
- `AuthProvider`
- `AuthWidgets`

## Mimari Ozet

- Tum ana routing host uygulamada kalir.
- Kullaniciya donuk ana port her zaman `3000` olur.
- Remote uygulama shell, auth ve ortak navigasyon deneyimini tek kaynaktan verir.
- Domain ekranlari host tarafta gelistirilir.
- UI bilesenleri atomic design mantigi ile ayrilir.
- Provider, router, guard, constants ve federation kodlari atomic katmandan ayri tutulur.

## Atomic Design Nedir?

Atomic design, arayuzu kucukten buyuge dogru katmanlara ayirarak gelistirmeyi
kolaylastiran bir yaklasimdir. Amac, bir bilesenin hangi sorumluluga sahip
oldugunu netlestirmek ve tekrar kullanilabilirligi artirmaktir.

Bu projede katmanlar su sekilde kullanilir:

- `atoms`
  Tek bir gorevi olan, en temel UI bilesenleri.
- `molecules`
  Birden fazla atomun birlesimiyle olusan kucuk ama anlamli UI bloklari.
- `organisms`
  Ekranda gercek bir alan temsil eden buyuk bilesenler.
- `templates`
  Sayfa iskeletini ve layout akisini kuran katman.
- `pages`
  Route seviyesinde acilan ekranlar.

Kisa ornek:

- Atom: route chip, badge, kucuk link parcasi
- Molecule: action link, sidebar section, portal switcher
- Organism: navbar, sidebar, sign in panel
- Template: host shell, remote preview shell
- Page: dashboard, orders, authentication

## Neden `app` ve `shared` Ayrica Var?

Atomic design sadece UI hiyerarsisini anlatir. Gercek projede provider,
router, guard, constants veya remote import gibi yapilar UI bileseni degildir.
Bu nedenle bu repoda iki ek alan daha vardir:

- `app/`
  Uygulama seviyesi kodlar burada durur. Router, provider, guard, boundary ve
  global stil kompozisyonu bu katmandadir.
- `shared/`
  Sabitler, mock veriler, federation importlari ve yardimci moduller burada
  tutulur.

Bu ayrim sayesinde `components/` sadece UI odakli kalir ve kod yonetimi daha
okunur olur.

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
    templates/
  pages/
    host/
    remote/
  shared/
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
  shared/
    config/
    constants/
  RemoteApp.jsx
  main.jsx
  styles.css
```

## Klasor Sorumluluklari

- `app/boundaries`
  Error boundary gibi uygulama guvenlik katmani.
- `app/providers`
  Auth, router veya uygulama seviyesindeki provider bilesimi.
- `app/routes`
  Route path'leri, navigation config ve router tanimlari.
- `components/atoms`
  En kucuk tekrar kullanilabilir UI bilesenleri.
- `components/molecules`
  Kucuk UI kombinasyonlari.
- `components/organisms`
  Sayfanin anlamli buyuk bolumleri.
- `components/templates`
  Layout ve shell akisi.
- `pages`
  Route bazli ekranlar.
- `shared/constants`
  Port, origin veya sabit degiskenler.
- `shared/federation`
  Remote modulleri host tarafinda cagiran katman.
- `shared/config`
  Demo veri veya uygulama konfigurasyonu.

## Bu Repoda Atomic Design Nasil Uygulaniyor?

- Host tarafta is ekranlari `pages/host` altinda bulunur.
- Host, remote'dan gelen UI parcalarini `components/templates/ShellTemplate.jsx`
  icinde birlestirir.
- Remote tarafta `Navbar`, `Sidebar` ve auth bilesenleri organism seviyesinde tutulur.
- Auth state UI icine gomulmez; `app/providers/AuthProvider.jsx` altinda ayrica yonetilir.
- Demo kullanici listesi provider icinde degil, `shared/config/demoUsers.js`
  dosyasinda tutulur.

## Onerilen Gelistirme Akisi

1. Shell veya auth degisecekse `remote-app` icinde calis.
2. Urun ekranlari gelisecekse `apps/host-app/src/pages/host` altinda calis.
3. Yeni route ekleyeceksen once route path dosyalarini guncelle.
4. UI tekrar kullanilabilir olacaksa once `atoms`, sonra `molecules`, sonra
   gerekirse `organisms` seviyesinde tasarla.
5. Provider veya router degisiyorsa `app/` altinda tut; UI klasorune koyma.
6. Sabit veri veya mock bilgi gerekiyorsa `shared/` altina koy.

## One Cikan Dosyalar

- `apps/host-app/src/app/routes/AppRouter.jsx`
  Host uygulamanin tum route kararlarini toplar.
- `apps/host-app/src/app/providers/RemoteShellProvider.jsx`
  Remote `AuthProvider`'i host shell'e baglar.
- `apps/host-app/src/components/templates/ShellTemplate.jsx`
  Remote `Navbar` ve `Sidebar` ile host sayfalarini sarar.
- `apps/remote-app/src/app/providers/AuthProvider.jsx`
  Auth state yonetimi burada tutulur.
- `apps/remote-app/src/components/organisms/Navbar.jsx`
  Paylasilan ust gezinme alani.
- `apps/remote-app/src/components/organisms/Sidebar.jsx`
  Paylasilan yan navigasyon alani.
- `apps/remote-app/src/shared/config/demoUsers.js`
  Demo auth kullanicilari burada tutulur.

## Route Haritasi

- `http://localhost:3000/host/dashboard`
- `http://localhost:3000/host/orders`
- `http://localhost:3000/host/roadmap`
- `http://localhost:3000/remote/overview`
- `http://localhost:3000/remote/navigation`
- `http://localhost:3000/remote/authentication`
- `http://localhost:3001/remote/overview`

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
- Ortak design token yapisi cikarmak
- `pages` altina yeni domain modulleri eklemek
- Shared UI'lari bagimsiz paket haline getirmek
