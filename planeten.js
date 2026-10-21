// ================= HIER ANPASSEN =================
// Eine Zeile pro Station, sortiert nach Abstand zur Sonne.
//   id          steht im QR-Code hinter dem #  (klein, ohne Umlaute und Leerzeichen)
//   name        wird auf der Seite angezeigt
//   art         Planet, Zwergplanet oder Mond (Überschrift der Gruppe in der Übersicht)
//   durchmesser in km
//   messen      nur bei länglichen Körpern: 'laengste' -> Durchmesser = längste Achse
//
// Die Dateien heißen automatisch wie die id:
//   Modell:     modelle/<id>.glb      z. B. modelle/erde.glb
//   Infotext:   infotexte/<id>.pdf    z. B. infotexte/erde.pdf
//
// Quellen: NASA NSSDC Planetary Fact Sheet (Planeten, Erdmond, Pluto);
// NASA Science (Ceres: Radius 476 km, Makemake: Radius 715 km);
// Eris: Sicardy et al. 2011, Nature 478; Haumea: Ortiz et al. 2017, Nature 550 (2322 x 1704 x 1026 km).
const PLANETEN = [
  { id: 'sonne',    name: 'Sonne',    art: 'Sonne',       durchmesser: 14000000 },
  { id: 'merkur',   name: 'Merkur',   art: 'Planet',      durchmesser: 4879 },
  { id: 'venus',    name: 'Venus',    art: 'Planet',      durchmesser: 12104 },
  { id: 'erde',     name: 'Erde',     art: 'Planet',      durchmesser: 12756 },
  { id: 'mond',     name: 'Erdmond',  art: 'Mond',        durchmesser: 3475 },
  { id: 'mars',     name: 'Mars',     art: 'Planet',      durchmesser: 6792 },
  { id: 'ceres',    name: 'Ceres',    art: 'Zwergplanet', durchmesser: 952 },
  { id: 'jupiter',  name: 'Jupiter',  art: 'Planet',      durchmesser: 142984 },
  { id: 'saturn',   name: 'Saturn',   art: 'Planet',      durchmesser: 120536 },
  { id: 'uranus',   name: 'Uranus',   art: 'Planet',      durchmesser: 51118 },
  { id: 'neptun',   name: 'Neptun',   art: 'Planet',      durchmesser: 49528 },
  { id: 'pluto',    name: 'Pluto',    art: 'Zwergplanet', durchmesser: 2376 },
  { id: 'haumea',   name: 'Haumea',   art: 'Zwergplanet', durchmesser: 2322, messen: 'laengste' },
  { id: 'makemake', name: 'Makemake', art: 'Zwergplanet', durchmesser: 1430 },
  { id: 'eris',     name: 'Eris',     art: 'Zwergplanet', durchmesser: 2326 },
];
const REFERENZ = 'jupiter';   // Bezugsgröße im Größenvergleich (größter Planet)
const START = 'erde';         // wird in der Übersicht (ohne #) zuerst gezeigt
// ==================================================
