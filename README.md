# Microfrontend Workspace

Bu repo, var olan bir host uygulamaya sonradan ayri bir codebase olarak yeni bir
modul entegre ediyormus gibi davranan microfrontend ornegidir.

Senaryo su:

- `host-app`
  Zaten yazilmis, kendi ekranlari olan ana uygulama
- `remote-app`
  Ayrica gelistirilen yeni modul

Kullanici her seyi tek uygulama gibi gorur ve ana deneyim `3000` portunda
yasar.

## Portlar

- `3000`
  Mevcut host uygulama
- `3001`
  Yeni modulun preview ve federation yayini

## Bu Ornekte Kim Neyi Yonetiyor?

### Host uygulama

- Navbar
- Sidebar UI
- Authentication
- Ana router
- Shell davranisi
- Kendi mevcut content ekranlari

### Remote uygulama

- Yeni modul sayfalari
- Host sidebar'ina eklenecek menu kayitlari
- Kendi preview ortami
- Route registry

Kisa ozet:

- Host mevcut urundur.
- Remote sonradan takilan moduldur.

## Gercek Hayatta Neye Benziyor?

Bu yapi, su senaryoya benzer:

1. Elinde zaten yazilmis bir backoffice uygulamasi var.
2. Bu uygulamanin dashboard, orders, auth, navbar ve sidebar'i zaten calisiyor.
3. Sen yeni bir modul gelistiriyorsun.
4. Bu modul ayri bir repo veya ayri bir ekip tarafindan gelistiriliyor.
5. Ama son kullanici bu modulu ana uygulamanin icinde goruyor.

Bu repo tam olarak bu dusunceyle duzenlendi.

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

Atomic design UI katmanlarini anlatir. Ama router, provider, federation
loader, constants veya guard gibi yapilar UI bileseni degildir.

Bu nedenle ek olarak su alanlar vardir:

- `app/`
  Uygulama seviyesi kodlar. Router, provider, registry, boundary ve global stil
  kompozisyonu burada tutulur.
- `shared/`
  Sabitler, mock veriler, federation loader'lari ve yardimci kodlar burada
  tutulur.

Bu ayrim sayesinde `components/` yalnizca UI odakli kalir.

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

## Atomic Design Bu Repoda Nasil Kullaniliyor?

### Host tarafi

- `components/organisms/Navbar.jsx`
  Mevcut uygulamanin navbar'i
- `components/organisms/Sidebar.jsx`
  Mevcut uygulamanin sidebar'i
- `components/organisms/auth/*`
  Mevcut uygulamanin auth bilesenleri
- `pages/host/*`
  Zaten var olan host ekranlari
- `app/providers/RemoteRouteProvider.jsx`
  Yeni modulun route registry'si burada okunur

### Remote tarafi

- `app/registry/routeRegistry.js`
  Yeni modulun host'a verdigi route ve menu metadata kaynagi
- `pages/*`
  Yeni modul ekranlari
- `components/templates/PreviewShellTemplate.jsx`
  Modul ekibinin kendi preview ortami

## Route Registry Mantigi

Remote uygulama su tipte kayitlar doner:

```js
{
  id: 'remote-overview',
  path: '/remote/overview',
  label: 'Modul Overview',
  description: 'Yeni modulun host icindeki ilk ekrani',
  sectionTitle: 'Yeni Modul / Ayri Codebase',
  component: OverviewPage
}
```

Host uygulama bunu okuyarak:

- route olusturur
- sidebar item ekler
- sayfayi kendi shell'i icinde render eder

Yani yeni modul ayri codebase gibi gelisir ama mevcut uygulamanin icinde
gorunur.

## One Cikan Dosyalar

- `apps/host-app/src/app/providers/AuthProvider.jsx`
  Mevcut uygulamanin auth sahipligi burada
- `apps/host-app/src/app/providers/RemoteRouteProvider.jsx`
  Yeni modul registry'si burada yuklenir
- `apps/host-app/src/components/templates/ShellTemplate.jsx`
  Mevcut uygulamanin shell'i burada kurulur
- `apps/host-app/src/pages/host/HostOrdersPage.jsx`
  Zaten var olan host content ornegi
- `apps/remote-app/src/app/registry/routeRegistry.js`
  Yeni modulun route ve menu kayitlari
- `apps/remote-app/src/pages/OverviewPage.jsx`
  Ayri ekipten gelen modul content ornegi

## Route Haritasi

### Mevcut host ekranlari

- `http://localhost:3000/host/dashboard`
- `http://localhost:3000/host/orders`
- `http://localhost:3000/host/roadmap`

### Yeni modul ekranlari

- `http://localhost:3000/remote/overview`
- `http://localhost:3000/remote/navigation`
- `http://localhost:3000/remote/authentication`

### Modul preview

- `http://localhost:3001/remote/overview`

## Gelistirme Akisi

1. Navbar, sidebar veya auth degisecekse `host-app` icinde calis.
2. Mevcut urunun yeni sayfasi yazilacaksa `host-app/src/pages/host` altinda calis.
3. Yeni modul sayfasi yazilacaksa `remote-app/src/pages` altinda calis.
4. Yeni modul sidebar'a bir menu ekleyecekse `remote-app/src/app/registry/routeRegistry.js` dosyasini guncelle.
5. Federation veya router davranisi degisecekse `app/` ve `shared/` altinda calis.

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
- `3001` sadece modul preview ve `remoteEntry.js` yayini icin calisir.
- Remote uygulama dev modda `build --watch + preview` ile ayakta tutulur.
- `@originjs/vite-plugin-federation` ile remote tarafta native HMR yerine dev-only otomatik full reload kullanilir.
- `react-router-dom` host ve remote tarafinda shared olarak tanimlidir.

## Sonraki Adimlar

- Yeni modul icin gercek API entegrasyonu eklemek
- Route registry'yi feature bazli klasorlemek
- Host shell icin role-based menu eklemek
- Remote modul sayfalarini feature modullerine ayirmak
- Gercek monorepo disi entegrasyon senaryosu icin CI/CD ornegi eklemek
