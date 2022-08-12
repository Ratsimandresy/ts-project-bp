function resultatDuel(main1, main2, c1, c2) {
  return (main1 == c1 && main2 == c2) || (main2 == c1 && main1 == c2);
}

function comparerFeuillePierre(main1, main2) {
  return resultatDuel(main1, main2, "Feuille", "Pierre");
}

function comparerPierreCiseaux(main1, main2) {
  return resultatDuel(main1, main2, "Ciseaux", "Pierre");
}

function comparerFeuilleCiseaux(main1, main2) {
  return resultatDuel(main1, main2, "Feuille", "Ciseaux");
}

export function pfc(main1, main2) {
  let resultat;
  if (main1 === main2) resultat = "Egalite";
  if (comparerFeuillePierre(main1, main2)) resultat = "Feuille";
  if (comparerPierreCiseaux(main1, main2)) resultat = "Pierre";
  if (comparerFeuilleCiseaux(main1, main2)) resultat = "Ciseaux";
  return resultat;
}

function calculScore(main1, main2) {
  if (definirGagnant(main1, main2) == "Joueur 1") {
    return [1, -1];
  }
  if (definirGagnant(main1, main2) == "Joueur 2") {
    return [-1, 1];
  }
  return [0, 0];
}

function definirGagnant(main1, main2) {
  let resultatDuel = pfc(main1, main2);
  if (main1 == resultatDuel) return "Joueur 1";
  if (main2 == resultatDuel) return "Joueur 2";
  return "Egalite";
}

function ajoutResultatParRound(tableauDesResultats, resultRound) {
  let nouveauxResultats = [];
  for (let i = 0; i < 2; i++) {
    nouveauxResultats[i] = resultRound[i] + tableauDesResultats[i];
  }
  return nouveauxResultats;
}

export function calculScoreTotal(...coupsJoueurs) {
  if (coupsJoueurs[0].length != coupsJoueurs[1].length) throw new Error("Nombres coups différents");
  let tableauDesResultats = Array(coupsJoueurs.length).fill(0);
  for (let round = 0; round < coupsJoueurs[0].length; round++) {
    let resultRound = calculScore(coupsJoueurs[0][round], coupsJoueurs[1][round]);
    tableauDesResultats =
      ajoutResultatParRound(tableauDesResultats, resultRound);
  }
  return tableauDesResultats;
}
