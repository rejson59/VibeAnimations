# ✦ VibeAnimations

Galeria nieziemskich i genialnych pomysłów na wygląd Twoich przyszłych stron i aplikacji.
**62 animacje CSS/JS** — każda z żywym podglądem, kategorią, poziomem trudności
i opisem gotowym do wklejenia prosto do promptu AI.

Znajdź ruch, który ożywia strony: płynne, sprężyste, twarde, mokre, rozlewające się,
magnetyczne, morfujące, tekstowe i klimatyczne.

---

## 🚀 GitHub Pages — gotowe do wrzucenia

Cały serwis buduje się do **jednego samodzielnego pliku `index.html`**
(`vite-plugin-singlefile` inline'uje JS i CSS), a `base` jest ustawiony na `"./"`.
Dzięki temu strona działa pod **każdym** adresem — również pod
`https://<user>.github.io/<nazwa-repo>/` — i nie psuje się przy zmianie nazwy repozytorium.

Masz dwie drogi. Wybierz jedną.

### Wariant A — bez Actions, natychmiast ✅ najprostszy

Zbudowana strona jest już **wgrana do repo** w katalogu `docs/`, więc działa od ręki:

1. Wejdź w **Settings → Pages**
2. *Build and deployment* → **Source: `Deploy from a branch`**
3. **Branch: `main`**, folder **`/docs`** → *Save*
4. Po minucie strona jest pod `https://<user>.github.io/<nazwa-repo>/`

> Po każdej zmianie w kodzie odśwież `docs/` komendą `npm run build:pages`
> i wrzuć commit na `main`.

### Wariant B — automatyczny (GitHub Actions)

Workflow leży w repo jako **`.github/deploy-pages.yml.example`**, bo bot CI nie ma
uprawnienia `workflows` i nie mógł zapisać pliku w `.github/workflows/`.
Aktywuj go raz (30 sekund):

1. Na GitHubie: **Add file → Create new file**
2. Nazwa: `.github/workflows/deploy.yml`
3. Wklej treść z pliku `.example` (bez nagłówkowego komentarza) → **Commit changes**
4. **Settings → Pages → Source: `GitHub Actions`**
5. Od teraz każdy push na `main` buduje i publikuje stronę automatycznie

Lokalnie:

```bash
mkdir -p .github/workflows
cp .github/deploy-pages.yml.example .github/workflows/deploy.yml
git add .github/workflows/deploy.yml && git commit -m "Add Pages workflow" && git push
```

---

## 🔤 Zmiana nazwy repozytorium na `VibeAnimations`

Nazwa strony, tytuł karty, meta/opengraph i branding w aplikacji są już zmienione
na **VibeAnimations**. Samo repozytorium musisz przemianować ręcznie
(bot CI nie ma do tego uprawnień admina):

1. **Settings → General → Repository name** → wpisz `VibeAnimations` → **Rename**
2. GitHub sam przekieruje stare linki i ruch `git`-owy, ale warto zaktualizować remote:

```bash
git remote set-url origin https://github.com/rejson59/VibeAnimations.git
```

3. Ewentualnie zaktualizuj **Settings → Pages**, jeśli była już skonfigurowana.
4. (Opcjonalnie) ustaw opis repo i *homepage* na nowy adres strony.

---

## 💻 Praca lokalna

```bash
npm install          # instalacja zależności
npm run dev          # serwer deweloperski (http://localhost:5173)
npm run typecheck    # kontrola typów TypeScript
npm run build        # build produkcyjny → dist/
npm run build:pages  # build do folderu docs/ (dla Wariantu B)
npm run preview      # podgląd zbudowanej strony
```

## 🛠 Stack

| Technologia | Rola |
| --- | --- |
| React 19 | UI |
| TypeScript 5.9 | typy (`strict`) |
| Vite 7 | bundler / dev server |
| Tailwind CSS 4 | style utility (`@tailwindcss/vite`) |
| `vite-plugin-singlefile` | cały build w jednym `index.html` |
| `lucide-react` | ikony |
| `clsx` + `tailwind-merge` | helper `cn()` do klas CSS |

## 📁 Struktura projektu

```
.
├── .github/deploy-pages.yml.example  # workflow Pages (przenieś do .github/workflows/)
├── docs/                          # gotowy build pod "Deploy from a branch"
│   └── index.html
├── index.html                     # szablon HTML (tytuł/meta/favicon)
├── package.json
├── vite.config.ts                 # base: "./" + singlefile
├── tsconfig.json
└── src/
    ├── App.tsx                    # nawigacja, hero, filtry, siatka, modal
    ├── main.tsx                   # entrypoint Reacta
    ├── index.css                  # Tailwind + ~55 kB animacji CSS (keyframes)
    ├── components/
    │   └── AnimationDemo.tsx      # żywe podglądy wszystkich 62 animacji
    ├── data/
    │   └── animations.ts          # definicje animacji: tytuły, prompty, tagi
    └── utils/
        └── cn.ts                  # helper do łączenia klas
```

## ✨ Co potrafi strona

- **62 żywe podglądy** renderowane w czystym CSS/JS (bez wideo i GIF-ów)
- **9 kategorii** i filtry: kategoria, trudność, wyszukiwarka pełnotekstowa
- **Kopiowanie promptu** jednym klikiem (z fallbackiem dla starszych przeglądarek)
- **Ulubione** zapisywane w `localStorage`
- **Losuj pomysł**, globalna pauza wszystkich animacji, nawigacja strzałkami w modalu
- Pełny **responsive** + animacje odsłaniania przy przewijaniu
