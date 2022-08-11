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

export function calculScore(main1, main2) {
  if (definirGagnant(main1, main2) == "Joueur 1") {
    return [1, -1];
  }
  if (definirGagnant(main1, main2) == "Joueur 2") {
    return [-1, 1];
  }
  return [0, 0];
}

export function definirGagnant(main1, main2) {
  let resultatDuel = pfc(main1, main2);
  if (main1 == resultatDuel) return "Joueur 1";
  if (main2 == resultatDuel) return "Joueur 2";
  return "Egalite";
}

function ajoutResultatParRound(tableauDesResultats, resultRound) {
  for (let i = 0; i < 2; i++) {
    tableauDesResultats[i] += resultRound[i];
  }
}

export function calculScoreTotal(coupsJoueur1, coupsJoueur2) {
  if (coupsJoueur1.length != coupsJoueur2.length) throw new Error("Nombres coups différents");
  let tableauDesResultats = [0, 0];
  for (let round = 0; round < coupsJoueur1.length; round++) {
    let resultRound = calculScore(coupsJoueur1[round], coupsJoueur2[round]);
    ajoutResultatParRound(tableauDesResultats, resultRound);
  }
  return tableauDesResultats;
}
