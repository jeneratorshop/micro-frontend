# Microfrontend Workspace

Bu repo, `3000` portunda host uygulamanin tum routing'i yonettigi ve `3001`
portundaki remote uygulamanin ortak shell bilesenlerini sagladigi bir
microfrontend ornegidir.

Kullanici deneyimi tek bir React SPA gibi davranir:

- Host route'lari: `http://localhost:3000/host/...`
- Remote route'lari: `http://localhost:3000/remote/...`
- Remote preview: `http://localhost:3001/remote/...`

Remote uygulama arka planda su paylasilan alanlari saglar:

- `Navbar`
- `Sidebar`
- `AuthProvider`
- `AuthWidgets`

## Mimari Kurallar

- Tum ana routing host uygulamada kalir.
- Kullaniciya donuk ana port `3000` olur.
- Remote uygulama shell, auth ve ortak navigasyon deneyimini tek kaynaktan verir.
- Domain ekranlari host tarafta gelistirilir.
- UI katmanlari atomic design mantigi ile ayrilir.
- Provider, route, constants ve federation baglantilari `app` ve `shared`
  altinda tutulur.

## Atomic Design Klasor Yapisi

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

- `app/`
  Uygulama seviyesi yapilar. Router, provider, guard, error boundary ve global
  stiller burada durur.
- `components/atoms`
  En kucuk, tekrar kullanilabilir UI parcaciklari.
- `components/molecules`
  Birden fazla atomun veya kucuk UI davranisinin birlesimi.
- `components/organisms`
  Navbar, sidebar, auth panelleri gibi anlamli buyuk bloklar.
- `components/templates`
  Sayfalari tasiyan shell ve layout katmani.
- `pages`
  Route seviyesindeki ekranlar.
- `shared`
  Constants, mock data, federation importlari ve ortak yardimcilar.

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

## Route Haritasi

- `http://localhost:3000/host/dashboard`
- `http://localhost:3000/host/orders`
- `http://localhost:3000/host/roadmap`
- `http://localhost:3000/remote/overview`
- `http://localhost:3000/remote/navigation`
- `http://localhost:3000/remote/authentication`
- `http://localhost:3001/remote/overview`

## Gelistirme Akisi

1. Shell veya auth degisecekse `remote-app` icinde calis.
2. Urun ekranlari gelisecekse `host-app/pages/host` altinda calis.
3. Yeni route ekleyeceksen once `app/routes/routePaths.js` dosyasini guncelle.
4. Layout veya ortak gezinme degisecekse `components/templates` ve
   `components/organisms` altina bak.
5. Provider, constants veya mock data degisecekse `app/providers` ve `shared`
   klasorlerini kullan.

## Kurulum

Kok klasorde:

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
