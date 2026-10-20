// ================= HIER ANPASSEN =================
// Eine Zeile pro Station.
//   id          steht im QR-Code hinter dem #  (klein, ohne Umlaute und Leerzeichen)
//   name        wird auf der Seite angezeigt
//   durchmesser Äquatordurchmesser in km (NASA Planetary Fact Sheet)
//
// Die Dateien heißen automatisch wie die id:
//   Modell:     modelle/<id>.glb      z. B. modelle/erde.glb
//   Infotext:   infotexte/<id>.pdf    z. B. infotexte/erde.pdf
const PLANETEN = [
  { id: 'merkur',  name: 'Merkur',  durchmesser: 4879 },
  { id: 'venus',   name: 'Venus',   durchmesser: 12104 },
  { id: 'erde',    name: 'Erde',    durchmesser: 12756 },
  { id: 'mars',    name: 'Mars',    durchmesser: 6792 },
  { id: 'jupiter', name: 'Jupiter', durchmesser: 142984 },
  { id: 'saturn',  name: 'Saturn',  durchmesser: 120536 },
  { id: 'uranus',  name: 'Uranus',  durchmesser: 51118 },
  { id: 'neptun',  name: 'Neptun',  durchmesser: 49528 },
];
const REFERENZ = 'jupiter';   // Bezugsgröße im Größenvergleich (größter Planet)
const START = 'erde';         // wird in der Übersicht (ohne #) zuerst gezeigt
// ==================================================
