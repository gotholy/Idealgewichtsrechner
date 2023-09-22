// ! ===== IDEALGEWICHTSRECHNER ===== //
// - 1: Daten und Input auslesen
// - 2: Outpus erstellen

function berechnen() {
  // // Inputs und Daten auslesen
  const größe = Number(document.querySelector("#körpergröße").value);
  const alter = Number(document.querySelector("#alter").value);
  const gewicht = Number(document.querySelector("#gewicht").value);
  const körperbau = document.querySelector(
    `input[name="körperbau"]:checked`
  ).value;
  // // Berechnungen für Variablen die evlt noch wo anders gebraucht werden
  const grundKcalFrau = 655.1 + 9.6 * gewicht + 1.8 * größe - 4.7 * alter;
  const grundKjFrau = grundKcalFrau * 4.184;
  const grundKcalMann = 66.47 + 13.7 * gewicht + 5 * größe - 6.8 * alter;
  const grundKjMann = grundKcalMann * 4.184;

  // // Outputs
  const arbeit = document.querySelector("#arbeit").value;
  const kcal = document.querySelector(".kcal");
  const kj = document.querySelector(".kj");
  const grundumsatz = document.querySelector(".grundumsatz");
  const gesamtumsatz = document.querySelector(".gesamtumsatz");
  const outputGrundKcal = document.querySelector(".outputGrundKcal");
  const outputGrundKJ = document.querySelector(".outputGrundKJ");
  const outputGesamtKcal = document.querySelector(".outputGesamtKcal");
  const outputGesamtKJ = document.querySelector(".outputGesamtKJ");

  if (körperbau === "frau") {
    kcal.innerHTML = "kcal";
    kj.innerHTML = "KJ";
    grundumsatz.innerHTML = "Grundumsatz";
    gesamtumsatz.innerHTML = "Gesamtumsatz";
    outputGrundKcal.innerHTML = grundKcalFrau.toFixed(0);
    outputGrundKJ.innerHTML = grundKjFrau.toFixed(0);
    outputGesamtKcal.innerHTML = (grundKcalFrau * arbeit).toFixed(0);
    outputGesamtKJ.innerHTML = (grundKjFrau * arbeit).toFixed(0);
  } else {
    kcal.innerHTML = "kcal";
    kj.innerHTML = "KJ";
    grundumsatz.innerHTML = "Grundumsatz";
    gesamtumsatz.innerHTML = "Gesamtumsatz";
    outputGrundKcal.innerHTML = grundKcalMann.toFixed(0);
    outputGrundKJ.innerHTML = grundKjMann.toFixed(0);
    outputGesamtKcal.innerHTML = (grundKcalMann * arbeit).toFixed(0);
    outputGesamtKJ.innerHTML = (grundKjMann * arbeit).toFixed(0);
  }
}
