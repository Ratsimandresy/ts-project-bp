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
  if (definirGagnant(main1, main2) == "Joueur 1"){
    return [1,-1];
  }
  return [-1, 1];
}

export function definirGagnant(main1,main2) {
  if (main1 == "Feuille") return "Joueur 1";
  return "Joueur 2";
}
