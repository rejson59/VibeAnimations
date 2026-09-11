export type CategoryId =
  | "plynne"
  | "sprezyste"
  | "twarde"
  | "mokre"
  | "rozlewajace"
  | "magnetyczne"
  | "morfujace"
  | "tekstowe"
  | "klimat";

export interface Category {
  id: CategoryId;
  label: string;
  short: string;
  description: string;
  gradient: string;
  glow: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "plynne",
    label: "Płynne",
    short: "Płynne",
    description: "Jedwabiste, oleiste przejścia jak woda i rtęć",
    gradient: "from-cyan-400 to-blue-600",
    glow: "shadow-cyan-500/30",
  },
  {
    id: "sprezyste",
    label: "Sprężyste",
    short: "Sprężyste",
    description: "Żelkowe, gumowe odbicia pełne energii",
    gradient: "from-lime-300 to-emerald-600",
    glow: "shadow-lime-500/30",
  },
  {
    id: "twarde",
    label: "Twarde",
    short: "Twarde",
    description: "Ostre cięcia, glitche i brutalny charakter",
    gradient: "from-red-500 to-orange-500",
    glow: "shadow-red-500/30",
  },
  {
    id: "mokre",
    label: "Mokre / Gooey",
    short: "Mokre",
    description: "Śluz, krople i efekt kleistej cieczy",
    gradient: "from-teal-300 to-cyan-600",
    glow: "shadow-teal-400/30",
  },
  {
    id: "rozlewajace",
    label: "Rozlewające",
    short: "Rozlew",
    description: "Atrament, farba i fale rozchodzące się po ekranie",
    gradient: "from-fuchsia-500 to-purple-700",
    glow: "shadow-fuchsia-500/30",
  },
  {
    id: "magnetyczne",
    label: "Magnetyczne",
    short: "Magneto",
    description: "Interakcje podążające za kursorem",
    gradient: "from-amber-300 to-rose-500",
    glow: "shadow-amber-500/30",
  },
  {
    id: "morfujace",
    label: "Morfujące",
    short: "Morf",
    description: "Kształty zmieniające formę w locie",
    gradient: "from-violet-400 to-indigo-600",
    glow: "shadow-violet-500/30",
  },
  {
    id: "tekstowe",
    label: "Tekstowe",
    short: "Tekst",
    description: "Kinetyczna typografia i efekty na literach",
    gradient: "from-yellow-300 to-orange-600",
    glow: "shadow-yellow-500/30",
  },
  {
    id: "klimat",
    label: "Tła i klimat",
    short: "Klimat",
    description: "Aurory, mgły, ogień i żywioły w tle",
    gradient: "from-sky-400 to-violet-700",
    glow: "shadow-sky-500/30",
  },
];

export interface AnimationIdea {
  id: number;
  title: string;
  category: CategoryId;
  tagline: string;
  description: string;
  prompt: string;
  demo: string;
  colors: string[];
  difficulty: "Łatwy" | "Średni" | "Zaawansowany";
  duration: string;
  tech: string[];
  useCase: string;
  tip: string;
}

export const ANIMATIONS: AnimationIdea[] = [
  {
    id: 1,
    title: "Jedwabny Blob Morph",
    category: "plynne",
    tagline: "Organiczny kształt oddycha jak żywa komórka",
    description:
      "Dodaj do sekcji hero organiczny blob, który płynnie mor­fuje swój kształt co 4 sekundy, jakby był kroplą oleju w wodzie. Blob ma mieć żywy gradient i delikatny blur na krawędziach, żeby wyglądał miękko i premium.",
    prompt:
      "Stwórz organiczny blob w hero: div 320px z border-radius animowanym keyframes (30% 70% 70% 30% / 30% 30% 70% 70% → odwrócenie), gradient cyan→blue→violet, filter blur(1px) + wewnętrzny glow, animacja 8s ease-in-out infinite alternate. Dodaj drugi mniejszy blob orbitujący wokół z mix-blend-screen.",
    demo: "blob-morph",
    colors: ["#22d3ee", "#6366f1", "#a855f7"],
    difficulty: "Łatwy",
    duration: "8s loop",
    tech: ["CSS", "border-radius"],
    useCase: "Hero, tła sekcji, awatary",
    tip: "Użyj dwóch blobów z mix-blend-mode: screen dla głębi.",
  },
  {
    id: 2,
    title: "Fala Lawy Gradient",
    category: "plynne",
    tagline: "Gorący gradient płynie jak lawa wulkaniczna",
    description:
      "Wypełnij tło strony animowanym gradientem lawy, który powoli przepływa z fioletu przez magentę do pomarańczu. Przejścia mają być tak płynne, że użytkownik ledwo zauważa moment zmiany koloru.",
    prompt:
      "Zbuduj animowane tło lava-gradient: background: linear-gradient(120deg, #7c3aed, #ec4899, #f97316, #7c3aed), background-size 300% 300%, keyframes przesuwające background-position 0%→100%→0% przez 12s ease infinite. Na wierzch dodaj warstwę noise (SVG feTurbulence, opacity 0.06) dla tekstury.",
    demo: "lava-gradient",
    colors: ["#7c3aed", "#ec4899", "#f97316"],
    difficulty: "Łatwy",
    duration: "12s loop",
    tech: ["CSS", "gradient"],
    useCase: "Tło całej strony, hero, CTA",
    tip: "background-size 300% to sekret płynności — nigdy 100%.",
  },
  {
    id: 3,
    title: "Płynna Zasłona Strony",
    category: "plynne",
    tagline: "Warstwy farby spływają przy zmianie widoku",
    description:
      "Zaimplementuj przejście między podstronami jako trzy nakładające się warstwy farby, które spływają z góry ekranu jedna po drugiej jak gęsta śmietana. Po odsłonięciu nowej treści warstwy odpływają w górę z lekkim opóźnieniem.",
    prompt:
      "Stwórz page-transition z 3 fixed divami (100vw × 100vh, kolory: lime, dark, violet), które wchodzą translateY(-100%→0) ze stagger 120ms i krzywą cubic-bezier(0.76, 0, 0.24, 1), 0.9s. Po 400ms pauzy wychodzą translateY(0→100%). Użyj border-radius 0 0 50% 50% / 0 0 40px 40px podczas ruchu dla efektu cieczy.",
    demo: "page-wipe",
    colors: ["#a3e635", "#1e1b4b", "#8b5cf6"],
    difficulty: "Średni",
    duration: "0.9s",
    tech: ["CSS", "JS", "clip-path"],
    useCase: "Przejścia między stronami, preloader",
    tip: "cubic-bezier(0.76,0,0.24,1) to najlepsza krzywa dla efektu cieczy.",
  },
  {
    id: 4,
    title: "Lewitujące Karty 3D",
    category: "plynne",
    tagline: "Karty unoszą się jak w stanie nieważkości",
    description:
      "Ułóż trzy karty w stos, który delikatnie lewituje — każda karta unosi się w innym rytmie, jakby pływała pod wodą. Po najechaniu stos rozsuwa się wachlarzem z jedwabistym opóźnieniem między kartami.",
    prompt:
      "Zbuduj stos 3 kart (glassmorphism, backdrop-blur) z animacją float: translateY ±10px, rotate ±2deg, każda z innym delay (0s, 0.7s, 1.4s) i czasem 5s ease-in-out infinite. Na hover: karty rozjeżdżają się (translate + rotate wachlarz) z transition 0.7s cubic-bezier(0.22,1,0.36,1) i stagger przez transition-delay.",
    demo: "parallax-cards",
    colors: ["#67e8f9", "#a78bfa", "#f0abfc"],
    difficulty: "Średni",
    duration: "5s loop",
    tech: ["CSS", "3D transform"],
    useCase: "Pricing, features, portfolio",
    tip: "Różne opóźnienia float dają efekt organicznego chaosu.",
  },
  {
    id: 5,
    title: "Aura Kursora",
    category: "plynne",
    tagline: "Świetlista mgła podąża za myszką z opóźnieniem",
    description:
      "Dodaj świetlistą aurę, która podąża za kursorem z miękkim opóźnieniem, jakby była smugą farby w wodzie. Aura ma rozmazywać tło i zostawiać za sobą delikatny, zanikający ślad.",
    prompt:
      "Zaimplementuj cursor-aura: fixed div 400px, radial-gradient(circle, rgba(34,211,238,0.35), transparent 70%), filter blur(40px), pozycja aktualizowana w rAF z lerp 0.08 (pozycja += (cel - pozycja) * 0.08). Dodaj drugi mniejszy ślad z lerp 0.03 dla efektu smugi. Ukryj na touch.",
    demo: "cursor-aura",
    colors: ["#22d3ee", "#818cf8"],
    difficulty: "Średni",
    duration: "ciągła",
    tech: ["JS", "rAF", "lerp"],
    useCase: "Tło hero, landing page, portfolio",
    tip: "Lerp 0.05–0.1 daje idealną oleistość. Użyj rAF, nie mousemove.",
  },
  {
    id: 6,
    title: "Falujące Linie Tła",
    category: "plynne",
    tagline: "Poziomice topograficzne oddychają w rytmie",
    description:
      "Wypełnij tło sekcji cienkimi liniami jak na mapie topograficznej, które falują w rytmie przechodzących fal. Linie mają reagować na scroll, przyspieszając falowanie podczas przewijania.",
    prompt:
      "Stwórz 6 warstw SVG path (fale sine, stroke 1px, opacity 0.15–0.4, stroke cyan/violet), każda animowana translateX -50%→0 loop 8–14s linear z różną prędkością dla paralaksy. Dodaj scroll-listener: prędkość animacji (animation-duration) skraca się proporcjonalnie do velocity scrolla i wraca z transition.",
    demo: "wave-lines",
    colors: ["#22d3ee", "#a78bfa"],
    difficulty: "Średni",
    duration: "10s loop",
    tech: ["SVG", "CSS", "scroll"],
    useCase: "Tła sekcji, footery, dividers",
    tip: "Powiel falę 2× szerokości i przesuwaj o 50% dla seamless loop.",
  },
  {
    id: 7,
    title: "Cieczowe Odkrycie Obrazu",
    category: "plynne",
    tagline: "Zdjęcie wyłania się spod warstwy płynnej farby",
    description:
      "Pokaż zdjęcie tak, jakby wyłaniało się spod warstwy gęstej farby — najpierw kolorowy pasek przepływa przez kadr, a za nim odsłania się obraz z lekkim zoom-out. Całość trwa sekundę i wygląda jak montaż filmowy.",
    prompt:
      "Zbuduj image-reveal: kontener overflow-hidden, obraz startuje scale 1.3 + clip-path inset(0 100% 0 0). Najpierw pasek koloru (scaleX 0→1, origin left, 0.5s), potem obraz clip-path → inset(0 0 0 0) 0.8s cubic-bezier(0.77,0,0.18,1) z delay 0.35s, a pasek znika (origin right, scaleX→0). Trigger przez IntersectionObserver.",
    demo: "image-reveal",
    colors: ["#f472b6", "#1e1b4b"],
    difficulty: "Średni",
    duration: "1.2s",
    tech: ["CSS", "clip-path", "IO"],
    useCase: "Portfolio, blog, galerie zdjęć",
    tip: "Zawsze triggeruj przez IntersectionObserver, nie on-load.",
  },
  {
    id: 8,
    title: "Mleczny Marquee",
    category: "plynne",
    tagline: "Nieskończony pasek tekstu płynie jak wstęga",
    description:
      "Dodaj nieskończony pasek z tekstem, który płynie w kółko z idealną płynnością bez szarpnięć na łączeniu. Po najechaniu pasek miękko zwalnia, jakby poruszał się w miodzie, a po zjechaniu wraca do tempa.",
    prompt:
      "Stwórz marquee: flex z 2 identycznymi kopiami treści, animacja translateX(0→-50%) 20s linear infinite. Na hover kontenera: animation-play-state nie wystarcza — zamiast tego animuj zmienną --speed w JS (lerp do 0.15x na hover) i napędzaj ruch przez rAF z offset += speed. Dodaj mask-image gradient na krawędziach dla miękkiego wejścia.",
    demo: "marquee",
    colors: ["#a3e635", "#22d3ee"],
    difficulty: "Łatwy",
    duration: "20s loop",
    tech: ["CSS", "rAF"],
    useCase: "Logotypy klientów, ticker, stopki",
    tip: "Dwie kopie + przesunięcie o dokładnie 50% = perfekcyjna pętla.",
  },
  {
    id: 9,
    title: "Żelkowy Przycisk",
    category: "sprezyste",
    tagline: "Guzik trzęsie się jak galaretka po kliknięciu",
    description:
      "Stwórz przycisk, który po najechaniu lekko pęcznieje, a po kliknięciu wykonuje żelkowe trzęsienie — rozciąga się i kurczy z gasnącymi drganiami. Efekt ma być tak soczysty, że chce się go klikać dla samej frajdy.",
    prompt:
      "Przycisk z keyframes jelly: scale(1,1)→(1.25,0.75)→(0.75,1.25)→(1.15,0.85)→(0.95,1.05)→(1.05,0.95)→(1,1), czas 0.9s. Hover: scale 1.06 z transition 0.3s cubic-bezier(0.34,1.56,0.64,1) (spring). Active: scale 0.92. Po kliknięciu restartuj animację jelly przez JS (void offsetWidth trick).",
    demo: "jelly-button",
    colors: ["#a3e635", "#16a34a"],
    difficulty: "Łatwy",
    duration: "0.9s",
    tech: ["CSS", "keyframes"],
    useCase: "CTA, przyciski zakupu, formularze",
    tip: "cubic-bezier(0.34,1.56,0.64,1) to gotowa sprężyna CSS.",
  },
  {
    id: 10,
    title: "Sprężyste Odbicie Karty",
    category: "sprezyste",
    tagline: "Karta spada i odbija się jak piłeczka",
    description:
      "Animuj wejście kart na stronę tak, jakby spadały z góry i odbijały się od podłogi dwa razy, zanim znieruchomieją. Każda kolejna karta startuje z opóźnieniem, tworząc falę odbić.",
    prompt:
      "Wejście kart: keyframes bounce-in translateY(-400px)→0 z cubic-bezier(0.34,1.3,0.64,1) i dwoma podbiciami: 0%{-400px} 55%{0} 70%{-28px} 85%{0} 92%{-8px} 100%{0}, czas 1.1s, stagger 120ms przez animation-delay. Dodaj cień, który skaluje się odwrotnie do wysokości (osobny element, scale 0.6→1).",
    demo: "bounce-cards",
    colors: ["#fbbf24", "#f97316"],
    difficulty: "Łatwy",
    duration: "1.1s",
    tech: ["CSS", "stagger"],
    useCase: "Listy produktów, dashboardy, onboarding",
    tip: "Cień skalowany odwrotnie sprzedaje iluzję fizyki.",
  },
  {
    id: 11,
    title: "Gumowa Skala Hover",
    category: "sprezyste",
    tagline: "Element naciąga się za kursorem jak guma",
    description:
      "Zrób ikonę, która po najechaniu naciąga się w stronę kursora, jakby była z gumy, a po zjechaniu strzela z powrotem z drganiem. Kierunek naciągnięcia zależy od tego, z której strony wszedł kursor.",
    prompt:
      "Ikona 64px w wrapperze: na mousemove oblicz wektor (kursor - środek), przesuń ikonę o wektor * 0.25 z transition 0.15s, jednocześnie skew o (vx * 0.05deg). Na mouseleave: transition 0.6s cubic-bezier(0.34,1.8,0.64,1) powrót do 0 — overshoot daje strzał gumy. Ogranicz przesunięcie do 12px.",
    demo: "gum-scale",
    colors: ["#4ade80", "#22d3ee"],
    difficulty: "Średni",
    duration: "0.6s",
    tech: ["JS", "transform"],
    useCase: "Ikony social, menu, dock jak w macOS",
    tip: "Overshoot powyżej 1.5 w bezier daje efekt strzału.",
  },
  {
    id: 12,
    title: "Elastyczny Akordeon",
    category: "sprezyste",
    tagline: "Sekcje rozciągają się jak harmonia",
    description:
      "Zbuduj akordeon FAQ, w którym otwierana sekcja rozciąga się ze sprężystym przeskokiem na końcu — jakby przekroczyła rozmiar i musiała się cofnąć. Zamykane sekcje kurczą się gładko bez odbić.",
    prompt:
      "Akordeon z grid-template-rows: 0fr→1fr transition 0.55s cubic-bezier(0.34,1.3,0.64,1) przy otwieraniu (overshoot), a 0.35s ease przy zamykaniu (osobna klasa). Wewnątrz overflow-hidden + min-height 0. Strzałka rotuje 180° ze springiem 0.5s. Tylko jedna sekcja otwarta — zamykanie poprzedniej bez animacji sprężyny.",
    demo: "accordion",
    colors: ["#c084fc", "#6366f1"],
    difficulty: "Średni",
    duration: "0.55s",
    tech: ["CSS", "grid"],
    useCase: "FAQ, cenniki, specyfikacje",
    tip: "Trik grid 0fr→1fr animuje wysokość bez znania px.",
  },
  {
    id: 13,
    title: "Kulki Bouncy Loader",
    category: "sprezyste",
    tagline: "Trzy kulki skaczą jak na trampolinie",
    description:
      "Pokaż loader z trzema kulkami, które skaczą jedna po drugiej z soczystym zgnieceniem przy lądowaniu — jakby były z ciastoliny. Loader ma wyglądać tak dobrze, że użytkownik nie będzie się denerwował czekaniem.",
    prompt:
      "Loader: 3 kulki 18px (gradienty), keyframes bounce: translateY(0→-28px→0) 0.6s cubic-bezier(0.34,1.56,0.64,1) infinite, delay 0/0.1/0.2s. Przy lądowaniu dodaj squash: osobne keyframes scaleY(1→0.7→1.15→1) zsynchronizowane. Pod kulkami elipsa-cienie skalujące się 1→0.5.",
    demo: "bouncy-loader",
    colors: ["#f472b6", "#a78bfa", "#22d3ee"],
    difficulty: "Łatwy",
    duration: "0.6s loop",
    tech: ["CSS"],
    useCase: "Loadery, stany ładowania, przyciski",
    tip: "Squash & stretch to 12 zasad animacji Disneya — działa.",
  },
  {
    id: 14,
    title: "Glitch Cyberpunk",
    category: "twarde",
    tagline: "Tekst rozpada się na kanały RGB jak zepsuty sygnał",
    description:
      "Zrób nagłówek, który co kilka sekund rozpada się na czerwone i cyjanowe kopie przesunięte w bok, z poziomymi liniami zakłóceń. Efekt ma trwać ułamek sekundy i wyglądać jak błąd transmisji w cyberpunkowym mieście.",
    prompt:
      "Glitch na tekście: element z data-text, ::before i ::after jako kopie (content: attr(data-text), absolute, kolory #ff003c i #00fff9, mix-blend-screen). Keyframes glitch 3s infinite: przez 92% czasu opacity 0, w 93–97% szybkie clip-path slice (inset losowe) + translateX ±6px + skew. Dodaj losowe przesunięcie przez JS co 4–7s (klasa .glitching na 300ms).",
    demo: "glitch",
    colors: ["#ff003c", "#00fff9"],
    difficulty: "Średni",
    duration: "0.3s / 4s",
    tech: ["CSS", "pseudo-elementy"],
    useCase: "Gaming, hero, 404, eventy tech",
    tip: "Glitch działa najlepiej rzadko — co 4–7 sekund, nie ciągle.",
  },
  {
    id: 15,
    title: "Twardy Cut Steps",
    category: "twarde",
    tagline: "Ruch klatkuje jak animacja poklatkowa",
    description:
      "Animuj element tak, żeby poruszał się skokowo w 8 twardych klatkach zamiast płynnie — jak stara kreskówka poklatkowa. Ten surowy ruch świetnie kontrastuje z gładkimi animacjami wokół i przyciąga wzrok.",
    prompt:
      "Kwadrat 60px porusza się po torze: keyframes translateX(0→240px) + rotate(0→360deg), 1.6s steps(8, end) infinite alternate. Steps zamiast ease daje klatkowanie. Dodaj drugi element z steps(4) dla kontrastu rytmu. Opcjonalnie: steps w animacji sprite-sheet (background-position).",
    demo: "hard-steps",
    colors: ["#fb7185", "#f97316"],
    difficulty: "Łatwy",
    duration: "1.6s loop",
    tech: ["CSS", "steps()"],
    useCase: "Pixel-art, retro, ładowanie, ikony",
    tip: "steps(8,end) — im mniej kroków, tym bardziej surowo.",
  },
  {
    id: 16,
    title: "Brutalny Shake",
    category: "twarde",
    tagline: "Błąd formularza szarpie polem jak za kołnierz",
    description:
      "Gdy użytkownik popełni błąd w formularzu, potrząśnij polem twardym, agresywnym ruchem w lewo i prawo z czerwoną poświatą. Trzęsienie ma być krótkie i nerwowe, żeby nie dało się go zignorować.",
    prompt:
      "Klasa .shake: keyframes translateX(0,-10px,10px,-8px,8px,-5px,5px,0) 0.45s cubic-bezier(0.36,0.07,0.19,0.97), odpalana przez JS (dodaj klasę + usuń po animationend). Jednocześnie border → #ef4444 + box-shadow 0 0 0 4px rgba(239,68,68,0.2). Po shake: pole zostaje z czerwoną obwódką do poprawy.",
    demo: "brutal-shake",
    colors: ["#ef4444", "#7f1d1d"],
    difficulty: "Łatwy",
    duration: "0.45s",
    tech: ["CSS", "JS"],
    useCase: "Walidacja formularzy, logowanie, koszyk",
    tip: "Usuń klasę po animationend, żeby dało się odpalić ponownie.",
  },
  {
    id: 17,
    title: "Neonówka Flicker",
    category: "twarde",
    tagline: "Napis mruga jak uszkodzony neon nad barem",
    description:
      "Stwórz nagłówek stylizowany na neon, który co jakiś czas migoce i gaśnie na ułamek sekundy jak stara świetlówka. Jedna litera ma być wiecznie przygaszona — to ona sprzedaje cały klimat.",
    prompt:
      "Napis z fontem + color #fff + text-shadow warstwowy (0 0 7px, 0 0 20px, 0 0 40px w kolorze neonu #f0f). Keyframes flicker 4s infinite: 0–84% pełna jasność, 85% opacity 0.4, 86% 1, 87% 0.3, 88–100% 1. Jedna litera w spanie z osobną animacją (słabszy glow + częstsze gaśnięcie). Tło ciemne #0a0a0a.",
    demo: "flicker",
    colors: ["#e879f9", "#22d3ee"],
    difficulty: "Łatwy",
    duration: "4s loop",
    tech: ["CSS", "text-shadow"],
    useCase: "Klimatyczne hero, kluby, eventy, 404",
    tip: "Jedna zepsuta litera > cały migoczący napis.",
  },
  {
    id: 18,
    title: "Deszcz Matrixa",
    category: "twarde",
    tagline: "Kolumny kodu spadają jak cyfrowy deszcz",
    description:
      "Wypełnij tło sekcji kolumnami spadających znaków jak w Matrixie — każda kolumna ma inną prędkość i jasną głowę. Efekt ma być w tle, przygaszony, żeby nie przeszkadzał w czytaniu treści.",
    prompt:
      "Canvas full-size w tle sekcji: kolumny co 18px, każda z y-losowym, znaki z zestawu katakana + 01, font 14px monospace, kolor #0f0 z alpha zależną od pozycji (głowa jasna #cfc, ogon fade). Rysuj z globalAlpha 0.08 co klatkę + fillRect rgba(0,0,0,0.08) dla smugi. Reset kolumny po wyjściu za ekran z losowym opóźnieniem.",
    demo: "matrix",
    colors: ["#4ade80", "#052e16"],
    difficulty: "Zaawansowany",
    duration: "ciągła",
    tech: ["Canvas", "JS"],
    useCase: "Tła tech, AI, cybersecurity, hackathony",
    tip: "Smuga przez półprzezroczysty fillRect, nie clearRect.",
  },
  {
    id: 19,
    title: "Hard Flip 3D",
    category: "twarde",
    tagline: "Karta obraca się z twardym klaśnięciem",
    description:
      "Zrób kartę, która po kliknięciu obraca się w 3D z twardym, zdecydowanym ruchem i lekkim przeskokiem skali na środku obrotu. Tył karty ma inną treść — idealne na fiszki i karty produktów.",
    prompt:
      "Flip-card: perspektywa 1000px na rodzicu, inner z transform-style preserve-3d + transition 0.6s cubic-bezier(0.3,0.7,0.4,1). Przód i tył absolute, backface-visibility hidden, tył rotateY(180deg). Po kliknięciu toggle .flipped (rotateY 180deg) + w połowie czasu keyframes scale 1→1.06→1 dla klaśnięcia.",
    demo: "flip-3d",
    colors: ["#fb7185", "#4f46e5"],
    difficulty: "Łatwy",
    duration: "0.6s",
    tech: ["CSS", "3D"],
    useCase: "Fiszki, karty produktów, zespół",
    tip: "backface-visibility: hidden na obu stronach to podstawa.",
  },
  {
    id: 20,
    title: "Gooey Menu Blob",
    category: "mokre",
    tagline: "Przyciski odklejają się jak krople śluzu",
    description:
      "Zbuduj menu, w którym opcje wypływają z głównego przycisku jak krople śluzu i odklejają się z kleistym mostkiem. Po zwinięciu krople wracają i wsysają się z powrotem w przycisk.",
    prompt:
      "Kontener z SVG filter goo (feGaussianBlur 10 + feColorMatrix values '1 0 0 0 0 ... 19 -9'). Główny przycisk + 4 opcje absolute w tym samym punkcie. Toggle: opcje dostają translate w kierunkach (0,-70px itd.) z transition 0.5s cubic-bezier(0.34,1.56,0.64,1) i stagger 60ms. Goo filter na rodzicu scala kształty w śluz.",
    demo: "goo-menu",
    colors: ["#2dd4bf", "#0d9488"],
    difficulty: "Średni",
    duration: "0.5s",
    tech: ["SVG filter", "CSS"],
    useCase: "Menu mobilne, FAB, akcje kontekstowe",
    tip: "Filtr goo: blur 10 + alpha contrast 19/-9 — zapisz sobie.",
  },
  {
    id: 21,
    title: "Mokre Krople Loader",
    category: "mokre",
    tagline: "Kropla pęcznieje i odrywa się w dół",
    description:
      "Pokaż loader, w którym kropla zbiera się na górze, pęcznieje, a potem odrywa się i spada z kleistym ogonkiem. Po upadku kropla rozpryskuje się w małą kałużę i cykl zaczyna się od nowa.",
    prompt:
      "Loader z goo filtrem: górna plama (scale pulsing 1→1.2, 1s) + kropla (circle 16px) animowana: faza 1 — wisi i rośnie (scaleY 1→1.6, 0.6s), faza 2 — spada translateY 0→90px 0.35s cubic-bezier(0.5,0,1,0.5), faza 3 — kałuża scaleX 0→1 + fade. Całość 1.6s infinite. Kolor: gradient teal→cyan.",
    demo: "drops-loader",
    colors: ["#2dd4bf", "#22d3ee"],
    difficulty: "Średni",
    duration: "1.6s loop",
    tech: ["SVG goo", "CSS"],
    useCase: "Loadery, upload plików, pogoda, eco",
    tip: "Goo filter + scaleY kropli = przekonujący śluz.",
  },
  {
    id: 22,
    title: "Śluzowy Przycisk",
    category: "mokre",
    tagline: "Blob wypełza spod przycisku po najechaniu",
    description:
      "Stwórz przycisk, pod którym kryje się śluzowy blob — po najechaniu blob wypływa do góry i zalewa tło guzika kleistą falą. Krawędź fali jest organiczna i faluje podczas zalewania.",
    prompt:
      "Przycisk overflow-hidden, w środku absolute blob (200% szerokości, border-radius 40% na górze) startujący translateY(110%). Hover: blob translateY(20%) 0.5s cubic-bezier(0.22,1,0.36,1), a jego górna krawędź faluje (osobne keyframes border-radius morph 2s infinite). Tekst ma z-index powyżej i zmienia kolor na biały z transition.",
    demo: "slime-button",
    colors: ["#14b8a6", "#0f766e"],
    difficulty: "Średni",
    duration: "0.5s",
    tech: ["CSS", "overflow"],
    useCase: "CTA, przyciski premium, linki",
    tip: "Blob 200% szerokości + zaokrąglona góra = fala.",
  },
  {
    id: 23,
    title: "Przyciąganie Blobów",
    category: "mokre",
    tagline: "Dwie krople pełzną ku sobie i łączą się",
    description:
      "Umieść dwa bloby, które pełzną ku sobie, wyciągają kleiste mostki i łączą się w jeden kształt, a potem znów się rozdzielają. To hipnotyzująca pętla idealna jako żywe tło.",
    prompt:
      "Dwa koła 70px w kontenerze z goo filtrem (blur 12, contrast 20/-10). Keyframes 5s ease-in-out infinite alternate: lewe translateX(0→60px) + scaleX(1→1.3) (rozciąganie), prawe symetrycznie. W środku cyklu (50%) nakładają się w jeden kształt. Tło ciemne, bloby w gradiencie lime→teal z blur(0.5px).",
    demo: "goo-attract",
    colors: ["#a3e635", "#2dd4bf"],
    difficulty: "Łatwy",
    duration: "5s loop",
    tech: ["SVG goo", "CSS"],
    useCase: "Tła, dividery, animacje ładowania",
    tip: "Rozciąganie scaleX przed połączeniem sprzedaje fizykę.",
  },
  {
    id: 24,
    title: "Bąbelki Szampana",
    category: "mokre",
    tagline: "Bąbelki powietrza perlistą w górę ekranu",
    description:
      "Wypełnij sekcję bąbelkami, które rodzą się na dole i perlą w górę z różną prędkością, lekko kołysząc się na boki. Największe bąbelki mają w środku odbicie światła, jak prawdziwe krople.",
    prompt:
      "15 divów-bąbelków (border-radius 50%, border 1.5px rgba(255,255,255,0.4), ::after jako refleks: małe białe kółko w lewym górnym rogu) losowanych w JS: left 0–100%, size 6–34px, czas 4–9s linear infinite, delay ujemny losowy. Keyframes: translateY(110%→-20vh) + sway przez osobną animację translateX ±15px ease-in-out alternate.",
    demo: "bubbles",
    colors: ["#67e8f9", "#a5f3fc"],
    difficulty: "Średni",
    duration: "4–9s loop",
    tech: ["CSS", "JS random"],
    useCase: "Tła, napoje, wellness, celebracje",
    tip: "Ujemny animation-delay losuje fazę bez czekania.",
  },
  {
    id: 25,
    title: "Mokra Plama Tła",
    category: "mokre",
    tagline: "Plama farby oddycha i pulsuje organicznie",
    description:
      "Dodaj za nagłówkiem dużą plamę farby, która powoli pulsuje i zmienia obrys jak żywy organizm. Plama ma miękkie, rozmyte krawędzie i subtelną wewnętrzną teksturę ziarna.",
    prompt:
      "Plama: div 420px z border-radius organiczny (60% 40% 55% 45%/50% 60% 40% 50%), gradient radial teal→transparent, filter blur(30px), keyframes morph 7s ease-in-out infinite alternate (3 zestawy radius) + scale 1→1.08. Wewnątrz warstwa SVG noise opacity 0.1. Za treścią (z-index -1), parallax na scroll (translateY * 0.15).",
    demo: "wet-stain",
    colors: ["#5eead4", "#0e7490"],
    difficulty: "Łatwy",
    duration: "7s loop",
    tech: ["CSS", "blur"],
    useCase: "Tła nagłówków, karty, banery",
    tip: "Blur 30px + radial gradient = mokra krawędź.",
  },
  {
    id: 26,
    title: "Atramentowa Plama",
    category: "rozlewajace",
    tagline: "Kropla atramentu rozlewa się po papierze",
    description:
      "Zasymuluj kroplę atramentu spadającą na środek sekcji i rozlewającą się we wszystkie strony z organicznymi wypustkami. Plama rośnie szybko na początku, a potem zwalnia, jakby wsiąkała w papier.",
    prompt:
      "Plama: środek z kroplą (scale 0→1, 0.3s), potem ekspansja: scale 1→3 z cubic-bezier(0.16,1,0.3,1) 1.4s + border-radius morph dla organicznych krawędzi. Wypustki: 6 małych blobów wystrzeliwujących radialnie (translate + scale 0→1, stagger 80ms). Całość z filtrem blur(0.5px) + contrast dla chropowatości. Trigger: scroll lub co 5s loop.",
    demo: "ink-bleed",
    colors: ["#1e1b4b", "#7c3aed", "#ec4899"],
    difficulty: "Średni",
    duration: "1.7s",
    tech: ["CSS", "JS trigger"],
    useCase: "Przejścia, reveal sekcji, sztuka, tatuaze",
    tip: "cubic-bezier(0.16,1,0.3,1) = szybki start, miękkie lądowanie.",
  },
  {
    id: 27,
    title: "Wędrujący Gradient Border",
    category: "rozlewajace",
    tagline: "Światło obiega ramkę karty jak energia",
    description:
      "Otocz kartę ramką, po której bez przerwy krąży jasna smuga światła, jakby energia płynęła obwodem. Reszta ramki jest przygaszona, więc smuga wyraźnie się wyróżnia i prowadzi wzrok.",
    prompt:
      "Karta z padding 2px + border-radius 20px, tło: conic-gradient(from var(--angle), transparent 0 70%, #22d3ee 85%, #a78bfa 90%, transparent 100%). Animuj --angle 0→360deg 3s linear infinite przez @property --angle (fallback: rotujący pseudo-element z maską). Wewnątrz content z tłem #0a0a0a i radius 18px.",
    demo: "gradient-border",
    colors: ["#22d3ee", "#a78bfa"],
    difficulty: "Średni",
    duration: "3s loop",
    tech: ["CSS", "@property"],
    useCase: "Karty premium, AI features, CTA",
    tip: "@property --angle umożliwia animację conic-gradient.",
  },
  {
    id: 28,
    title: "Fala Ripple Click",
    category: "rozlewajace",
    tagline: "Kliknięcie rozchodzi się falą jak kamień w wodzie",
    description:
      "Po każdym kliknięciu w przycisk z punktu kliknięcia rozchodzi się okrągła fala, która rozszerza się i znika. Fala ma startować dokładnie tam, gdzie był kursor, a nie ze środka.",
    prompt:
      "Przycisk position relative overflow-hidden. Na click JS tworzy span.ripple w punkcie (clientX-rect.left): size = max(w,h)*2, border-radius 50%, background radial rgba(255,255,255,0.5)→transparent, keyframes scale 0→1 + opacity 1→0, 0.7s ease-out. Usuń span po animationend. Obsłuż wiele klików (wiele spanów naraz).",
    demo: "ripple",
    colors: ["#818cf8", "#c7d2fe"],
    difficulty: "Łatwy",
    duration: "0.7s",
    tech: ["JS", "CSS"],
    useCase: "Wszystkie przyciski, listy, karty klikalne",
    tip: "Pozycja fali z clientX - rect.left to cała magia.",
  },
  {
    id: 29,
    title: "Kurtyna Rozsuwana",
    category: "rozlewajace",
    tagline: "Dwie połowy ekranu rozjeżdżają się jak kurtyna",
    description:
      "Odsłoń treść tak, jakby dwie połowy kurtyny rozjeżdżały się na boki z miękkim, falującym brzegiem. Brzeg kurtyny nie jest prosty — wygina się jak tkanina w ruchu.",
    prompt:
      "Dwie połowy (left/right, 50vw) z krzywą SVG na wewnętrznym brzegu (fala). Odsłonięcie: translateX(0→∓100%) 1.2s cubic-bezier(0.76,0,0.24,1) + fala SVG animowana (d morph lub skewY oscylacja podczas ruchu). Pod spodem hero content z fade-up stagger. Opcja: kurtyna wraca przy wyjściu ze strony.",
    demo: "curtain",
    colors: ["#312e81", "#a78bfa"],
    difficulty: "Zaawansowany",
    duration: "1.2s",
    tech: ["SVG", "CSS"],
    useCase: "Intro strony, premiery, portfolio",
    tip: "Falujący brzeg SVG odróżnia premium od taniego wipe.",
  },
  {
    id: 30,
    title: "Rozrost Okręgu Hover",
    category: "rozlewajace",
    tagline: "Kolor wylewa się z punktu najechania",
    description:
      "Po najechaniu na kartę spod kursora wylewa się okrąg koloru, który rośnie i zalewa całe tło. Po zjechaniu kolor cofa się do punktu wyjścia, jakby był wciągany z powrotem.",
    prompt:
      "Karta overflow-hidden, w środku absolute circle (scale 0) pozycjonowany w JS na mouseenter (x,y kursora). Hover: circle scale 0→3 (pokrywa kartę) 0.45s cubic-bezier(0.22,1,0.36,1). Mouseleave: przenieś circle do punktu wyjścia i scale →0. Tekst ma mix-blend-mode: difference dla czytelności na obu tłach.",
    demo: "circle-grow",
    colors: ["#a3e635", "#1a2e05"],
    difficulty: "Średni",
    duration: "0.45s",
    tech: ["JS", "CSS"],
    useCase: "Karty usług, przyciski, nawigacja",
    tip: "mix-blend-difference na tekście ratuje kontrast.",
  },
  {
    id: 31,
    title: "Spray Reveal",
    category: "rozlewajace",
    tagline: "Obraz wyłania się spod kropel sprayu",
    description:
      "Odkryj obraz tak, jakby ktoś psiknął sprayem — najpierw pojawiają się pojedyncze kropki, które gęstnieją, aż odsłonią cały obraz. Efekt jest ziarnisty i organiczny, jak graffiti.",
    prompt:
      "Obraz z maską: radial-gradient dots (background-image: radial-gradient(circle, #000 2px, transparent 2.5px), size 12px) jako mask-image. Animuj mask-size 200px→8px + opacity 0→1 przez 1.2s steps(12) — kroki dają ziarnistość sprayu. Dodaj drugą warstwę większych kropek z opóźnieniem. Trigger: hover lub scroll.",
    demo: "spray-reveal",
    colors: ["#f0abfc", "#7c3aed"],
    difficulty: "Zaawansowany",
    duration: "1.2s",
    tech: ["CSS mask", "steps"],
    useCase: "Streetwear, sztuka, muzyka, młodzieżowe",
    tip: "steps(12) w masce daje autentyczne ziarno sprayu.",
  },
  {
    id: 32,
    title: "Kałuża Pod Kursorem",
    category: "rozlewajace",
    tagline: "Kolor zbiera się pod myszką jak kałuża",
    description:
      "Pod kursorem zbiera się kolorowa kałuża, która rozlewa się, gdy myszka stoi, i rozciąga w smugę, gdy myszka się porusza. Kałuża zostawia za sobą ślad, który powoli wysycha i znika.",
    prompt:
      "Canvas lub divy: główna kałuża (elipsa, blur 20px) podąża za kursorem z lerp 0.2; jej scale rośnie, gdy prędkość myszki < 5px/frame (stoi → rozlewa się do 1.5x), maleje przy szybkim ruchu + rozciąga w kierunku ruchu (rotate do velocity + scaleX 1.6). Ślad: co 60ms zostawiaj fading kropkę (opacity 0.5→0, 1.2s).",
    demo: "puddle",
    colors: ["#f472b6", "#8b5cf6"],
    difficulty: "Zaawansowany",
    duration: "ciągła",
    tech: ["JS", "Canvas"],
    useCase: "Kreatywne portfolio, strony dla dzieci, art",
    tip: "Prędkość myszki = rozmiar kałuży. Prosta fizyka.",
  },
  {
    id: 33,
    title: "Magnetyczny Przycisk",
    category: "magnetyczne",
    tagline: "Guzik lgnie do kursora jak magnes",
    description:
      "Zrób przycisk, który wyczuwa kursor z odległości i przesuwa się w jego stronę, jakby był magnetyczny. Po kliknięciu przycisk na chwilę ucieka, a potem wraca z soczystym drganiem.",
    prompt:
      "Wrapper z paddingiem 40px (strefa magnetyczna). Na mousemove w strefie: przycisk translate o (wektor do kursora * 0.35) z transition 0.2s ease-out. Na leave: powrót 0.5s cubic-bezier(0.34,1.56,0.64,1) (spring). Tekst w środku porusza się mocniej (* 0.5) dla paralaksy. Siła magnesu słabnie z odległością (falloff).",
    demo: "magnetic-button",
    colors: ["#fbbf24", "#ea580c"],
    difficulty: "Średni",
    duration: "ciągła",
    tech: ["JS", "transform"],
    useCase: "CTA premium, portfolio, agencje",
    tip: "Tekst poruszony mocniej niż tło = głębia 3D.",
  },
  {
    id: 34,
    title: "Tilt Karty 3D",
    category: "magnetyczne",
    tagline: "Karta pochyla się za kursorem z refleksem",
    description:
      "Karta pochyla się w 3D podążając za kursorem, a po jej powierzchni przesuwa się świetlny refleks jak na karcie holograficznej. Krawędzie karty łapią kolorowe światło zależnie od kąta.",
    prompt:
      "Karta z perspective 800px: na mousemove rotateX/Y = (pozycja - 0.5) * 18deg, transition 0.1s. Refleks: ::after z radial-gradient w pozycji kursora (zmienne --mx/--my aktualizowane w JS), mix-blend-overlay. Ramka: border z gradientem zależnym od kąta. Na leave: reset 0.6s spring. Dodaj translateZ dla warstw (parallax wnętrza).",
    demo: "tilt-3d",
    colors: ["#93c5fd", "#6366f1", "#f0abfc"],
    difficulty: "Średni",
    duration: "ciągła",
    tech: ["JS", "3D"],
    useCase: "Karty produktów, NFT, team, pricing",
    tip: "Zmienne --mx/--my + radial-gradient = refleks za darmo.",
  },
  {
    id: 35,
    title: "Latarka Spotlight",
    category: "magnetyczne",
    tagline: "Ciemność rozświetla się tylko wokół kursora",
    description:
      "Przykryj sekcję ciemnością, przez którą przebija się snop światła podążający za kursorem jak latarka. Pod światłem ukryta treść staje się czytelna, reszta tonie w mroku.",
    prompt:
      "Sekcja z treścią + overlay (bg rgba(0,0,0,0.92)) z maską: radial-gradient 240px w pozycji kursora (mask-image, aktualizowane przez JS zmienne --x/--y). Alternatywnie: overlay z background: radial-gradient(circle 240px at var(--x) var(--y), transparent, rgba(0,0,0,0.94)). Ruch wygładzony lerp 0.15 w rAF. Dodaj poświatę wokół latarki (drugi gradient, blur).",
    demo: "spotlight",
    colors: ["#fef08a", "#0a0a0a"],
    difficulty: "Średni",
    duration: "ciągła",
    tech: ["JS", "mask"],
    useCase: "Sekcje tajemnicy, gry, oferty premium",
    tip: "mask-image z radial-gradient = latarka w 3 linijkach.",
  },
  {
    id: 36,
    title: "Oczy Za Kursorem",
    category: "magnetyczne",
    tagline: "Para oczu śledzi każdy ruch myszki",
    description:
      "Dodaj parę kreskówkowych oczu, których źrenice śledzą kursor po całym ekranie i rozszerzają się, gdy kursor jest blisko. Gdy kursor znika, oczy mrugają i rozglądają się nerwowo.",
    prompt:
      "Dwoje oczu: białko (elipsa) + źrenica (koło) + refleks. W rAF: kąt = atan2(kursor - środek oka), źrenica translate o (cos, sin) * min(odległość/8, 12px). Skala źrenicy: 1 + (1 - odległość/max) * 0.4. Mruganie: co 3–6s scaleY oczu 1→0.1→1 (0.15s). Idle: gdy brak ruchu 3s, oczy wykonują losowe saccade.",
    demo: "eyes",
    colors: ["#ffffff", "#0a0a0a"],
    difficulty: "Średni",
    duration: "ciągła",
    tech: ["JS", "rAF"],
    useCase: "Maskotki, 404, strony dla dzieci, SaaS",
    tip: "Mruganie co 3–6s ożywia oczy bardziej niż śledzenie.",
  },
  {
    id: 37,
    title: "Magnetyczna Nawigacja",
    category: "magnetyczne",
    tagline: "Podkreślenie ślizga się między linkami",
    description:
      "W nawigacji aktywny link ma podkreślenie-pigułkę, która ślizga się między pozycjami z elastycznym wyprzedzeniem. Pigułka rozciąga się w kierunku ruchu, jakby była z gumy.",
    prompt:
      "Nav z relative + absolute pill (bg gradient, radius full) pozycjonowana przez JS (FLIP: left/width aktywnego linka). Przejście: left/width 0.45s cubic-bezier(0.34,1.3,0.64,1) + scaleX 1→1.25→1 w połowie (rozciągnięcie w kierunku ruchu — kierunek z porównania pozycji). Hover nieaktywnego: mini-podkreślenie scaleX 0→1.",
    demo: "magnetic-links",
    colors: ["#a3e635", "#22d3ee"],
    difficulty: "Średni",
    duration: "0.45s",
    tech: ["JS FLIP", "CSS"],
    useCase: "Nawigacje, taby, filtry, menu",
    tip: "Technika FLIP: zmierz → ustaw → animuj różnicę.",
  },
  {
    id: 38,
    title: "Smuga Kursora",
    category: "magnetyczne",
    tagline: "Kursor zostawia tęczowy ogon komety",
    description:
      "Za kursorem ciągnie się smuga małych kropek, które gonią myszkę jak ogon komety i znikają jedna po drugiej. Smuga zmienia kolor wzdłuż ogona, tworząc tęczowy gradient.",
    prompt:
      "20 kropek (div 12→2px malejące) w tablicy pozycji. W rAF: każda kropka lerp do poprzedniej (0.35), pierwsza do kursora (0.5). Kolor: hsl(180 + i*8, 90%, 60%) dla tęczy. Opacity maleje wzdłuż ogona. Optymalizacja: transform translate3d + will-change, pauza gdy brak ruchu (rAF i tak leci, ale tanie).",
    demo: "trail",
    colors: ["#22d3ee", "#a78bfa", "#f472b6"],
    difficulty: "Średni",
    duration: "ciągła",
    tech: ["JS", "rAF"],
    useCase: "Kreatywne strony, eventy, landingi",
    tip: "Łańcuch lerp: kropka goni poprzednią, nie kursor.",
  },
  {
    id: 39,
    title: "Morf Kształtu SVG",
    category: "morfujace",
    tagline: "Kwadrat rozpływa się w gwiazdę i kroplę",
    description:
      "Animuj kształt SVG, który płynnie przechodzi od kwadratu przez gwiazdę do kropli wody w nieskończonej pętli. Każda forma trzyma się chwilę, jakby kształt zastanawiał się, kim chce być.",
    prompt:
      "SVG z jednym path + 3 definicje d (kwadrat, gwiazda, kropla) o tej samej liczbie punktów (użyj narzędzia do normalizacji lub animuj przez CSS border-radius + rotate jako fallback). Animacja: SMIL <animate attributeName='d' values='d1;d2;d3;d1' dur='9s' repeatCount='indefinite'/> z keyTimes '0;0.33;0.66;1'. Wypełnienie gradient + drop-shadow.",
    demo: "svg-morph",
    colors: ["#8b5cf6", "#ec4899"],
    difficulty: "Zaawansowany",
    duration: "9s loop",
    tech: ["SVG", "SMIL/JS"],
    useCase: "Logo animowane, ikony, dividery",
    tip: "Ścieżki muszą mieć tę samą liczbę punktów do morfu.",
  },
  {
    id: 40,
    title: "Morf Ikony Burger",
    category: "morfujace",
    tagline: "Hamburger składa się w X jak origami",
    description:
      "Przycisk menu morphuje z trzech kresek w X z płynnym wyginaniem linii — środkowa linia rozpływa się, a skrajne obracają i schodzą do środka. Animacja działa w obie strony z tą samą elegancją.",
    prompt:
      "Burger: 3 spany (24×2px, gap 5px) w buttonie 40px. Toggle .open: górny translateY(7px)+rotate(45deg), dolny translateY(-7px)+rotate(-45deg), środkowy scaleX(0)+opacity 0 — wszystko 0.4s cubic-bezier(0.68,-0.4,0.27,1.4) (overshoot). Dodaj koło tła scale 1→1.1 na czas morfu.",
    demo: "icon-morph",
    colors: ["#e2e8f0", "#a3e635"],
    difficulty: "Łatwy",
    duration: "0.4s",
    tech: ["CSS"],
    useCase: "Menu mobilne, toggle, zamykanie modali",
    tip: "Overshoot w bezier daje efekt origami, nie mechaniki.",
  },
  {
    id: 41,
    title: "Tekstowy Morf Blur",
    category: "morfujace",
    tagline: "Słowa rozpływają się jedno w drugie",
    description:
      "Rotuj słowa w nagłówku tak, że stare słowo rozmywa się i rozpływa, a nowe wyostrza się z mgły w tym samym miejscu. Przejście wygląda jak ostrość aparatu łapiąca nowy obiekt.",
    prompt:
      "Kontener relative z 2 spanami absolute (te same wymiary). Cykl JS co 2.5s: wychodzące: blur 0→12px + opacity 1→0 + scale 1→1.1 + translateY 0→-12px (0.5s ease-in); wchodzące: blur 12→0 + opacity 0→1 + scale 0.9→1 (0.5s ease-out, delay 0.15s). Goo-ish: dodaj kontrast filtru na rodzicu dla kleistości.",
    demo: "text-morph",
    colors: ["#f0abfc", "#818cf8"],
    difficulty: "Średni",
    duration: "0.6s / 2.5s",
    tech: ["JS", "filter"],
    useCase: "Hero rotujące słowa, slogany, CTA",
    tip: "Blur + scale razem = przekonujące ostrzenie.",
  },
  {
    id: 42,
    title: "Koło w Pigułkę",
    category: "morfujace",
    tagline: "Okrągły przycisk rozciąga się w pasek",
    description:
      "Okrągły przycisk z ikoną po kliknięciu rozciąga się w szeroką pigułkę odsłaniając tekst, jakby pęczniał. Po zakończeniu akcji pigułka kurczy się z powrotem do koła.",
    prompt:
      "Przycisk 56px circle → 200px pill: width 56→200px 0.5s cubic-bezier(0.34,1.3,0.64,1), border-radius 50%→28px. Ikona zostaje z lewej, tekst (opacity 0, width 0) rozwija się z delay 0.15s. Loader: podczas akcji ikona rotuje (spinner). Sukces: tło → zielone + ikona morph w check (SVG stroke-dashoffset).",
    demo: "shape-button",
    colors: ["#6366f1", "#22d3ee"],
    difficulty: "Średni",
    duration: "0.5s",
    tech: ["CSS", "JS stan"],
    useCase: "Przyciski akcji, wysyłanie, odtwarzanie",
    tip: "Tekst rozwijany z opóźnieniem 0.15s po szerokości.",
  },
  {
    id: 43,
    title: "Kinetyczna Typografia",
    category: "tekstowe",
    tagline: "Gigantyczne słowa przelatują przez ekran",
    description:
      "Wypełnij sekcję gigantycznymi słowami, które przelatują przez ekran w przeciwnych kierunkach z różną prędkością, reagując na scroll. Słowa na przemian są pełne i obrysowe.",
    prompt:
      "3 wiersze ogromnego tekstu (clamp 80–180px, font-black, uppercase): wiersz 1 i 3 jadą w lewo, wiersz 2 w prawo — marquee 30s/24s/36s linear infinite. Scroll: velocity dodaje do offsetu (rAF, offset += base + scrollV * 2). Na przemian: solid + -webkit-text-stroke 2px transparent fill. Lekki skew na tekście zależny od prędkości.",
    demo: "kinetic-type",
    colors: ["#f8fafc", "#a3e635"],
    difficulty: "Średni",
    duration: "30s loop",
    tech: ["CSS", "scroll"],
    useCase: "Hero agencji, festiwale, manifesty",
    tip: "Skew zależny od velocity sprzedaje prędkość.",
  },
  {
    id: 44,
    title: "Litery Stagger Up",
    category: "tekstowe",
    tagline: "Litery wyskakują jedna po drugiej jak fale",
    description:
      "Nagłówek wjeżdża litera po literze od dołu, każda z małym podbiciem i falowym opóźnieniem. Litery wyłaniają się zza maski, więc wyglądają jakby wypływały spod linii.",
    prompt:
      "Podziel nagłówek na spany-literki w overflow-hidden wrapperach (JS split). Każda literka: translateY(110%)→0 + rotate(6deg→0), 0.7s cubic-bezier(0.22,1,0.36,1), delay = i * 35ms. Trigger IntersectionObserver raz. Opcjonalnie: hover na literce → podskok (translateY -8px spring).",
    demo: "stagger-letters",
    colors: ["#fef08a", "#f97316"],
    difficulty: "Łatwy",
    duration: "0.7s + stagger",
    tech: ["JS split", "CSS"],
    useCase: "Nagłówki hero, tytuły sekcji, CTA",
    tip: "35ms między literami to złoty środek fali.",
  },
  {
    id: 45,
    title: "Neonowy Typewriter",
    category: "tekstowe",
    tagline: "Tekst pisze się sam z migoczącym kursorem",
    description:
      "Zasymuluj pisanie na maszynie z neonowym kursorem-blokiem, który miga podczas pisania i znika na końcu. Tempo pisania jest ludzkie — nierówne, z pauzami na spacjach i kropkach.",
    prompt:
      "Typewriter w JS: tablica fraz, pisanie znak po znaku z losowym delay 40–120ms (dłuższy po . , ! — 300ms). Kursor: span-blok (bg lime, blink 0.8s steps(2)). Po frazie: pauza 1.8s, kasowanie szybkie (20ms/znak), następna fraza. Cursor glow: box-shadow 0 0 12px lime. prefers-reduced-motion: pokaż pełny tekst.",
    demo: "typewriter",
    colors: ["#a3e635", "#052e16"],
    difficulty: "Łatwy",
    duration: "ciągła",
    tech: ["JS"],
    useCase: "Hero dev, terminale, chatboty, bio",
    tip: "Losowy delay 40–120ms brzmi jak człowiek.",
  },
  {
    id: 46,
    title: "Tekst na Fali",
    category: "tekstowe",
    tagline: "Litery tańczą na sinusoidalnej fali",
    description:
      "Każda litera napisu unosi się i opada w rytmie fali przechodzącej przez tekst w nieskończoność. Fala przyspiesza po najechaniu, jakby tekst się ekscytował.",
    prompt:
      "Litery jako spany: keyframes wave translateY(0→-14px→0) 1.6s ease-in-out infinite, delay = i * 80ms (fala). Hover kontenera: animation-duration → 0.7s przez CSS var (--wave-speed, transition na var nie działa — przełącz klasę). Dodaj gradient na literach (background-clip: text) + co druga litera inny kolor dla rytmu.",
    demo: "wave-text",
    colors: ["#67e8f9", "#f0abfc"],
    difficulty: "Łatwy",
    duration: "1.6s loop",
    tech: ["CSS"],
    useCase: "Logotypy, nagłówki zabawowe, loader tekstowy",
    tip: "80ms między literami tworzy widoczną falę.",
  },
  {
    id: 47,
    title: "Shine Przebłysk",
    category: "tekstowe",
    tagline: "Smuga światła przelatuje przez napis",
    description:
      "Przez nagłówek co kilka sekund przelatuje smuga światła jak refleks na metalu. Reszta czasu tekst jest stonowany, więc przebłysk wyraźnie przyciąga wzrok.",
    prompt:
      "Tekst z background: linear-gradient(110deg, #475569 40%, #fff 50%, #475569 60%), background-size 250% 100%, background-clip: text, color transparent. Keyframes shine: background-position 100%→-100% 1.2s ease, z długą pauzą (animacja 5s, shine tylko w 0–24%). Odpal też na hover (restart animacji).",
    demo: "shine-text",
    colors: ["#e2e8f0", "#ffffff"],
    difficulty: "Łatwy",
    duration: "1.2s / 5s",
    tech: ["CSS", "background-clip"],
    useCase: "Nagłówki premium, ceny, logo, CTA",
    tip: "Shine w 24% czasu animacji = długa elegancka pauza.",
  },
  {
    id: 48,
    title: "Rozsypane Litery",
    category: "tekstowe",
    tagline: "Napis rozpada się w locie jak piasek",
    description:
      "Po najechaniu na nagłówek jego litery rozpryskują się we wszystkie strony z rotacją i fade-out, a po zjechaniu wracają na miejsce jak przyciągane magnesem. Efekt wygląda jak wybuch typografii.",
    prompt:
      "Litery spany: hover kontenera → każda literka dostaje losowy translate (JS: ±40px x, -30–20px y) + rotate (±40deg) + opacity 0.6, transition 0.4s ease-out. Leave: powrót 0.7s cubic-bezier(0.34,1.56,0.64,1) (spring wraca z podbiciem). Losuj wektory w JS przy każdym hover dla różnorodności.",
    demo: "scatter-letters",
    colors: ["#fda4af", "#fb7185"],
    difficulty: "Średni",
    duration: "0.4s / 0.7s",
    tech: ["JS", "CSS"],
    useCase: "Kreatywne nagłówki, 404, hero art",
    tip: "Powrót ze springiem wygląda jak magnes — kluczowe.",
  },
  {
    id: 49,
    title: "Zorza Polarna",
    category: "klimat",
    tagline: "Kurtyny światła tańczą na nocnym niebie",
    description:
      "Stwórz tło jak zorza polarna — miękkie kurtyny zieleni, fioletu i cyjanu falują powoli na ciemnym niebie z gwiazdami. Całość porusza się tak wolno, że działa uspokajająco.",
    prompt:
      "Tło #020617 + 3 warstwy aurora (divy 120% szerokości, gradient linear transparent→emerald/violet/cyan→transparent, blur 60px, skewX -12deg, maska: linear-gradient do dołu fade). Animacje: translateX ±10% + skew ±4deg, czasy 14/18/22s ease-in-out infinite alternate. Gwiazdy: 60 kropek (box-shadow trick lub JS) z twinkle 2–4s losowo.",
    demo: "aurora",
    colors: ["#34d399", "#a78bfa", "#22d3ee"],
    difficulty: "Średni",
    duration: "18s loop",
    tech: ["CSS", "blur"],
    useCase: "Tła premium, SaaS, wellness, nocne",
    tip: "3 warstwy o różnych czasach = głębia nieba.",
  },
  {
    id: 50,
    title: "Konfetti Fizyka",
    category: "klimat",
    tagline: "Wybuch konfetti z prawdziwą grawitacją",
    description:
      "Po kliknięciu przycisku sukcesu z miejsca kliknięcia wybucha fontanna konfetti z grawitacją, obrotem i oporem powietrza. Kawałki wirują, migoczą i opadają naturalnie na dół ekranu.",
    prompt:
      "Canvas-confetti własny lub lib: na click spawn 120 cząsteczek w punkcie (x,y): prędkość radialna losowa 4–12, kąt -180–0 (fontanna w górę), grawitacja 0.25, drag 0.99, rotacja losowa + rotV, kolory z palety + prostokąty 6×10. Update w rAF, usuwanie po y > h+20 lub life > 3s. Burst + side-cannons dla bogactwa.",
    demo: "confetti",
    colors: ["#f472b6", "#a3e635", "#22d3ee", "#fbbf24"],
    difficulty: "Średni",
    duration: "3s",
    tech: ["Canvas", "JS"],
    useCase: "Sukces zakupu, onboarding, urodziny, gry",
    tip: "Fontanna w górę + grawitacja = naturalny wybuch.",
  },
  {
    id: 51,
    title: "Mgła i Dym",
    category: "klimat",
    tagline: "Warstwy mgły pełzną po dole ekranu",
    description:
      "Po dole sekcji pełzną dwie warstwy półprzezroczystej mgły w przeciwnych kierunkach, jakby scena stała w chmurach. Mgła jest na tyle subtelna, że dodaje klimatu nie zasłaniając treści.",
    prompt:
      "2 warstwy mgły: divy z background z rozmytych radial-gradientów (PNG chmury lub SVG turbulence, opacity 0.5), width 200%, height 220px, bottom 0, blur 2px. Animacje: translateX(0→-50%) 40s linear infinite i odwrotnie 55s. Maska: linear-gradient(transparent, black 40%) żeby góra mgły znikała. pointer-events none.",
    demo: "fog",
    colors: ["#cbd5e1", "#7c8db0"],
    difficulty: "Łatwy",
    duration: "40s loop",
    tech: ["CSS", "PNG/SVG"],
    useCase: "Horror, myster, hero koncertów, góry",
    tip: "Dwie warstwy w przeciwnych kierunkach = głębia.",
  },
  {
    id: 52,
    title: "Holograficzny Shine",
    category: "klimat",
    tagline: "Tęczowa folia przesuwa się po karcie",
    description:
      "Karta ma powłokę jak holograficzna karta Pokemon — tęczowy gradient przesuwa się po niej wraz z ruchem kursora. Kolory zmieniają się w zależności od kąta patrzenia.",
    prompt:
      "Karta z warstwą holo: background: linear-gradient(115deg, transparent, rgba(255,0,128,0.25), rgba(0,255,255,0.25), transparent) + conic tęcza, background-size 250%, mix-blend-mode: color-dodge, opacity 0.6. Pozycja gradientu = --mx/--my z JS (background-position). Dodaj siatkę micro-linii (repeating-linear-gradient) opacity 0.15 dla faktury folii.",
    demo: "holo-shine",
    colors: ["#ff0080", "#00ffff", "#ffff00"],
    difficulty: "Średni",
    duration: "ciągła",
    tech: ["JS", "blend-mode"],
    useCase: "Karty kolekcjonerskie, NFT, premium",
    tip: "color-dodge na tęczy daje prawdziwy hologram.",
  },
  {
    id: 53,
    title: "Neonowa Ramka Nitro",
    category: "klimat",
    tagline: "Światło pędzi po obwodzie jak w grze",
    description:
      "Wokół przycisku lub obrazu pędzą dwa świetlne punkty w przeciwnych kierunkach, zostawiając za sobą neonowy ślad. Wygląda jak obwód w grze wyścigowej na pełnym nitro.",
    prompt:
      "Ramka: kontener relative, 2 spany-komety (12px kropki z box-shadow glow) animowane po obwodzie przez offset-path: path('M...') prostokąt z zaokrągleniami, offset-distance 0→100%, 2s linear infinite (druga z delay -1s + reverse). Ślad: ::after z tym samym offset-path, gradient trail przez maskę. Alternatywa bez offset-path: 4 krawędzie z osobnymi animacjami.",
    demo: "neon-border",
    colors: ["#22d3ee", "#f0f"],
    difficulty: "Zaawansowany",
    duration: "2s loop",
    tech: ["CSS offset-path"],
    useCase: "CTA gaming, stream, przyciski akcji",
    tip: "offset-path z path() prowadzi kropkę po ramce.",
  },
  {
    id: 54,
    title: "Synthwave Grid",
    category: "klimat",
    tagline: "Siatka perspektywy pędzi ku horyzontowi",
    description:
      "Na dole sekcji rozciąga się siatka w perspektywie, która pędzi ku horyzontowi jak w synthwave'owych teledyskach. Nad horyzontem wisi wielkie słońce z poziomymi cięciami.",
    prompt:
      "Grid: div z background (linear-gradient linie poziome + pionowe, magenta/cyan), transform: perspective(300px) rotateX(60deg), scale 2. Animacja: background-position-y 0→40px 1s linear infinite (ruch ku widzowi). Słońce: koło z gradientem yellow→pink + maska z poziomymi paskami (repeating-linear-gradient) grubszymi ku dołowi. Gwiazdy + scanlines overlay.",
    demo: "synth-grid",
    colors: ["#ff2a6d", "#05d9e8", "#f9f002"],
    difficulty: "Średni",
    duration: "1s loop",
    tech: ["CSS", "perspective"],
    useCase: "Retro gaming, synthwave, eventy 80s",
    tip: "rotateX(60deg) + ruch backgroundu = jazda w nieskończoność.",
  },
  {
    id: 55,
    title: "Ziarno Filmu",
    category: "klimat",
    tagline: "Analogowe ziarno drży na całej stronie",
    description:
      "Nałóż na stronę subtelne, poruszające się ziarno filmu jak z analogowej kamery — dodaje tekstury i kinowego charakteru. Ziarno jest ledwo widoczne, ale zmienia całe odczucie strony.",
    prompt:
      "Overlay fixed inset -100% (większy niż ekran), background-image: SVG feTurbulence noise jako data-URI, opacity 0.07, pointer-events none, z-index 9999. Animacja: steps(8) skoki translate co 0.4s (keyframes z 8 losowymi pozycjami ±5%). steps zamiast smooth = autentyczne drżenie kliszy. Opcja: intensity slider (opacity 0.03–0.15).",
    demo: "grain",
    colors: ["#a8a29e", "#57534e"],
    difficulty: "Łatwy",
    duration: "0.4s loop",
    tech: ["SVG", "CSS"],
    useCase: "Cała strona, portfolio foto, kino, moda",
    tip: "inset -100% ukrywa krawędzie podczas skoków.",
  },
  {
    id: 56,
    title: "Płynny Chrom",
    category: "klimat",
    tagline: "Ciekły metal faluje jak rtęć",
    description:
      "Stwórz powierzchnię z ciekłego chromu, która faluje i odbija wygięte światło jak kropla rtęci. Refleksy przesuwają się leniwie, a powierzchnia nigdy nie stoi w miejscu.",
    prompt:
      "Chrom: div z conic-gradient (silver, #111, silver, #444, silver) + blur(1px) + SVG filter feTurbulence + feDisplacementMap (scale 40) dla falowania. Animuj baseFrequency lub seed w rAF dla ruchu cieczy. Połysk: ::after z linear white-transparent gradient, mix-blend-overlay, przesuwany 6s. Border-radius organiczny morph.",
    demo: "chrome",
    colors: ["#e2e8f0", "#64748b", "#0f172a"],
    difficulty: "Zaawansowany",
    duration: "6s loop",
    tech: ["SVG filter", "CSS"],
    useCase: "Logo Y2K, moda, muzyka, awangarda",
    tip: "feDisplacementMap na gradiencie = ciekły metal.",
  },
  {
    id: 57,
    title: "Tunel Portalu",
    category: "klimat",
    tagline: "Pierścienie wciągają w głąb ekranu",
    description:
      "Zbuduj hipnotyzujący tunel z koncentrycznych pierścieni, które lecą w stronę widza i wciągają w głąb ekranu. Środek tunelu pulsuje światłem, jakby portal był aktywny.",
    prompt:
      "Tunel: 8 pierścieni (border 2px cyan/violet, border-radius 50%) absolute centered. Keyframes: scale 0.1→1.5 + opacity 0→1→0, 3s linear infinite, delay = i * -0.375s (równomierne rozłożenie). Środek: jasny rdzeń (radial white→transparent, pulse 2s). Rotacja całości wolna 30s. Tło #020617. Na hover: przyspieszenie (duration 1.2s).",
    demo: "tunnel",
    colors: ["#22d3ee", "#a78bfa"],
    difficulty: "Łatwy",
    duration: "3s loop",
    tech: ["CSS"],
    useCase: "Sci-fi, loading, warp, wejścia na stronę",
    tip: "Ujemne opóźnienia rozkładają pierścienie w tunelu.",
  },
  {
    id: 58,
    title: "Falująca Siatka Kropek",
    category: "klimat",
    tagline: "Kropki tańczą falę jak stadion",
    description:
      "Siatka kropek wykonuje falę jak kibice na stadionie — wybrzuszenia podróżują po siatce w rytmie przechodzących fal. Fala podąża też za kursorem, rozpychając kropki.",
    prompt:
      "Grid 12×8 kropek (div 8px, radius full, bg slate). Fala CSS: każda kropka animationDelay = (x + y) * 90ms, keyframes scale 1→1.8 + bg → cyan 2s ease-in-out infinite. Interakcja: na mousemove oblicz odległość kropki od kursora → scale = 1 + 2*exp(-d/80) w JS (rAF, transform tylko). Połącz: fala bazowa CSS + push JS.",
    demo: "dots-grid",
    colors: ["#22d3ee", "#475569"],
    difficulty: "Średni",
    duration: "2s loop",
    tech: ["CSS", "JS"],
    useCase: "Tła tech, AI, hero SaaS, footery",
    tip: "Delay (x+y)*90ms tworzy falę diagonalną.",
  },
  {
    id: 59,
    title: "Ogień i Iskry",
    category: "klimat",
    tagline: "Płomienie liżą w górę z fontanną iskier",
    description:
      "Na dole sekcji tańczą stylizowane płomienie z gradientu, a nad nimi wznosi się fontanna iskier. Ogień kołysze się na boki, jakby podwiewał go wiatr.",
    prompt:
      "Płomienie: 5 warstw (border-radius 50% 50% 50% 50% / 60% 60% 40% 40% → kropla do góry) z gradientami yellow→orange→red→transparent, blur rosnąco ku górze, keyframes: scaleY 1→1.15 + skewX ±4deg, 0.5–0.9s losowo alternate + goo filter dla zlania. Iskry: 20 cząsteczek JS/Canvas wznoszących się (vy -1–-3, sway sine, fade). Wiatr: globalna zmienna sway.",
    demo: "fire",
    colors: ["#fbbf24", "#f97316", "#ef4444"],
    difficulty: "Zaawansowany",
    duration: "0.7s loop",
    tech: ["CSS goo", "Canvas"],
    useCase: "Gaming, ognisko, energia, promocje hot",
    tip: "Goo filter zlewa płomienie w jeden ogień.",
  },
  {
    id: 60,
    title: "Wodny Refleks (Caustics)",
    category: "klimat",
    tagline: "Światło tańczy jak na dnie basenu",
    description:
      "Nałóż na sekcję wzór świetlnych refleksów jak na dnie basenu — jasne, organiczne linie światła powoli pełzną i przecinają się. Efekt jest kojący i luksusowy jak w spa.",
    prompt:
      "Caustics: 2 nakładające się warstwy SVG turbulence (feTurbulence fractalNoise baseFrequency 0.012 + feColorMatrix do wyciągnięcia jasnych linii + feComposite), blend screen, opacity 0.5. Animuj baseFrequency/seed w rAF (powolny drift) lub przesuwaj 2 duże PNG caustics (background, 60s przeciwne kierunki, blend overlay). Kolor światła: #7dd3fc na tle deep blue.",
    demo: "caustics",
    colors: ["#7dd3fc", "#0c4a6e"],
    difficulty: "Zaawansowany",
    duration: "ciągła",
    tech: ["SVG", "blend"],
    useCase: "Spa, baseny, luksus, wellness, travel",
    tip: "Dwie warstwy w przeciwnych kierunkach = głębia wody.",
  },
  {
    id: 61,
    title: "Helisa DNA Loader",
    category: "plynne",
    tagline: "Podwójna helisa wiruje jak w laboratorium",
    description:
      "Zbuduj loader jako wirującą helisę DNA — dwie sinusoidy kropek obracają się wokół wspólnej osi, a kropki z tyłu są mniejsze i przygaszone. Wygląda naukowo i hipnotyzująco.",
    prompt:
      "Helisa: 2× 12 kropek (absolute w kontenerze 200×80). W rAF: dla i-tej kropki: x = i*16, y = sin(t*3 + i*0.5)*30, scale = 0.5+0.5*cos(t*3+i*0.5), opacity = scale. Druga nić przesunięta o PI. Połącz pary linią (SVG line aktualizowana w rAF, opacity = min obu). Kolory: cyan + magenta, tło dark.",
    demo: "dna",
    colors: ["#22d3ee", "#f472b6"],
    difficulty: "Zaawansowany",
    duration: "ciągła",
    tech: ["JS", "rAF", "SVG"],
    useCase: "Bio-tech, medycyna, nauka, loadery",
    tip: "Sinus + cosinus na skali daje głębię 3D.",
  },
  {
    id: 62,
    title: "Orbity Planet Nav",
    category: "magnetyczne",
    tagline: "Linki krążą po orbitach wokół logo-słońca",
    description:
      "Zbuduj nawigację jak układ słoneczny — logo jest słońcem w centrum, a linki to planety krążące po orbitach. Po najechaniu planeta zatrzymuje się i puchnie, pokazując etykietę.",
    prompt:
      "Nav-orbit: centrum (logo-słońce z glow pulse) + 3 orbity (border circle dashed, radii 70/110/150). Planety: absolute na orbicie, animowane rotate kontenera orbity 12/20/30s linear infinite (planeta kontr-rotuje żeby nie wirować). Hover planety: animation-play-state paused na orbicie + planeta scale 1.4 + tooltip label fade-in. Aktywna planeta ma pierścień.",
    demo: "orbit",
    colors: ["#fbbf24", "#22d3ee", "#f472b6"],
    difficulty: "Zaawansowany",
    duration: "12–30s loop",
    tech: ["CSS", "JS"],
    useCase: "Kreatywne nav, space, festiwale, dzieci",
    tip: "Kontr-rotacja planety utrzymuje ją w pionie.",
  },
];

export const CATEGORY_MAP: Record<CategoryId, Category> = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c])
) as Record<CategoryId, Category>;
