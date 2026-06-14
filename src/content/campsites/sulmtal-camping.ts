import type { CampsiteConfig } from "../types";

/**
 * Sulmtal Camping — Pölfing-Brunn, südliche Weststeiermark (Schilcherland).
 * Inhalte zu 100 % aus der eigenen Quelle (raw/digest). Bildlage bleibt dünn:
 * nach dem Nach-Scrape gibt es nur wenige große, scharfe On-Site-Fotos
 * (3 Luft-/Bodenaufnahmen ≥1500px für Hero + CampingFeatures, dazu 4 kleinere
 * echte Wiesen-/Stellplatzfotos für die Galerie). Pillars/Breather bleiben
 * ehrlich leer, statt mit Händler-/Stock-/Kartenbildern zu padden.
 */
const IMG = "/campsites/sulmtal-camping";

const sulmtalCamping: CampsiteConfig = {
  name: "Sulmtal Camping",
  shortName: "Sulmtal",
  slug: "sulmtal-camping",
  ort: "Pölfing-Brunn",
  region: "Steiermark",
  brandKind: "Camping & Appartements",
  // see: bewusst NICHT gesetzt — das Kipferlbad ist ein Naturbadeteich, kein See.
  regionLong: "Steirisches Schilcherland · Weststeiermark · Österreich",

  // Kein theme-Feld (Original-Palette). Hero immer zentriert.
  heroVariant: "center",

  claim: "Dein Urlaub im steirischen Schilcherland",
  claimEmphasis: "Schilcherland",
  emailDetail: "der Naturbadeteich Kipferlbad direkt an der Anlage",
  intro:
    "Eingebettet in die Hügellandschaft der südlichen Weststeiermark findest du eine überschaubare Ferienanlage mit Naturbadeteich, viel Grün und steirischer Gastlichkeit — Komfort und Ruhe für die ganze Familie.",

  logo: { src: `${IMG}/logo.png`, alt: "Sulmtal Camping & Appartements Logo" },

  statement: {
    text: "Bei uns liegt der Naturbadeteich gleich hinter dem Stellplatz.",
    emphasis: "der Naturbadeteich",
  },

  // Keine 3 gleichwertigen On-Site-Motive für Overlay-Kacheln vorhanden →
  // Pillars bleiben leer (BrandStatement blendet sich aus), statt das 3er-Raster
  // mit Händler-/Stock-Bildern halb zu füllen.
  pillars: [],

  usps: [
    "Naturbadeteich Kipferlbad",
    "36 parzellierte Stellplätze",
    "Sanitär mit Fußbodenheizung",
    "WLAN am ganzen Platz",
    "Hunde willkommen",
    "Sulmtal-Radweg vor der Tür",
  ],

  trust: {
    heading: "Klein, grün und gut ausgestattet",
    headingEmphasis: "grün",
    intro:
      "Eine überschaubare Anlage mit hohem Komfort: Naturbadeteich mit Restaurant, Tennis- und Volleyballplätze, der Sulmtal-Radweg und steirische Buschenschankkultur liegen direkt vor der Tür.",
  },

  awards: [],

  hero: {
    aerial: {
      src: `${IMG}/hero-luftaufnahme.webp`,
      alt: "Luftaufnahme der Ferienanlage Sulmtal Camping mit Naturbadeteich Kipferlbad",
    },
  },

  camping: {
    heading: "Dein Platz mitten im Grünen",
    intro:
      "Flaches Wiesengelände, begrünte Schattenplätze und Stromanschluss mit 16 Ampere — dazu moderne Sanitärräume mit Fußbodenheizung und WLAN am ganzen Platz.",
    features: [
      {
        title: "Stellplätze zwischen Wiesen und Hügeln",
        text:
          "36 parzellierte Plätze auf flachem Wiesengelände zwischen Bäumen und steirischen Hügeln — mit Strom und WLAN.",
        image: {
          src: `${IMG}/stellplaetze-luftbild.webp`,
          alt: "Luftbild der parzellierten Stellplätze von Sulmtal Camping",
        },
      },
      {
        title: "Begrünte Schattenplätze",
        text:
          "Großzügige Wiesenplätze mit jungen Bäumen für Schatten — Platz für Wohnwagen, Wohnmobil, Campingbus oder Zelt samt Vorzelt.",
        image: {
          src: `${IMG}/stellplatz-wiese.webp`,
          alt: "Wohnmobil mit Vorzelt auf einem begrünten Stellplatz bei Sulmtal Camping",
        },
      },
    ],
  },

  anreise: {
    heading: "Anfahrt ins Schilcherland",
    modes: [
      {
        title: "Mit dem Auto",
        text:
          "Über die A2 Süd Autobahn bis Graz, weiter über die B76 Richtung Deutschlandsberg und Wies — Pölfing-Brunn liegt im südlichen Schilcherland.",
      },
      {
        title: "Mit der Bahn",
        text:
          "Nächster Bahnhof ist Wies-Eibiswald an der Wieserbahn; von Graz Hauptbahnhof bist du in gut einer Stunde da.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Der Flughafen Graz-Thalerhof liegt rund 45 Autominuten nördlich der Anlage.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke aus dem Sulmtal",
    headingEmphasis: "Sulmtal",
    intro: "Ein paar Aufnahmen von der Anlage mitten im grünen Schilcherland.",
    tag: "Auch im Winter geöffnet",
    images: [
      {
        src: `${IMG}/galerie-wiese-sonnenschirm.webp`,
        alt: "Wohnwagen mit Sonnenschirm auf der grünen Stellplatzwiese von Sulmtal Camping",
      },
      {
        src: `${IMG}/galerie-wohnwagen-wiese.webp`,
        alt: "Wohnwagen und Wohnmobile zwischen jungen Bäumen auf der Wiese bei Sulmtal Camping",
      },
      {
        src: `${IMG}/galerie-stellplatz-zelt.webp`,
        alt: "Stellplätze mit Vorzelt und Campingmöbeln auf der Wiese von Sulmtal Camping",
      },
      {
        src: `${IMG}/galerie-gruene-wiese.webp`,
        alt: "Begrünte Stellplatzwiese mit jungen Bäumen und Wohnwagen bei Sulmtal Camping",
      },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz im Sulmtal",
    headingEmphasis: "deinen Platz",
    intro:
      "Wähle Stellplatz oder Appartement und deinen Zeitraum — wir melden uns persönlich mit Verfügbarkeit und allen Details.",
    pricesArePlaceholder: false,
    priceNote:
      "Stellplatz € 8 plus Campinggebühr € 7,50 pro Erwachsenem/Nacht — zzgl. Strom € 3,90 und Nächtigungsabgabe € 2 pro Person. Basis 2 Erwachsene.",
    highlight: {
      title: "Naturbadeteich am Platz",
      text:
        "Das Kipferlbad — ein Naturbadeteich mit Restaurant und großem Kinderspielbereich — sorgt für erfrischende Sommertage.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 23, perExtraGuest: 7.5 },
      { id: "zelt", label: "Zeltplatz", perNight: 23, perExtraGuest: 7.5 },
      { id: "appartement", label: "Appartement" },
    ],
  },

  kontakt: {
    coords: { lat: 46.723368, lng: 15.292307 },
    tel: "+43 664 4640052",
    telHref: "tel:+436644640052",
    mail: "office@sulmtal-camping.at",
    adresse: "Badstraße 20 · 8544 Pölfing-Brunn · Steiermark",
    // coords: Quelle nennt keine Koordinaten → weggelassen (Geocoding später).
  },

  languages: ["DE"],

  nav: [
    { label: "Stellplätze", href: "#camping" },
    { label: "Anreise", href: "#anreise" },
    { label: "Preise", href: "#booking" },
  ],
};

export default sulmtalCamping;
