function resultatDuel(main1: string, main2 : string, c1 : string, c2:string): boolean{
  return (main1 == c1 && main2 == c2) || (main2 == c1 && main1 == c2);
}

function comparerFeuillePierre(main1 : string, main2 : string): boolean {
  return resultatDuel(main1, main2, "Feuille", "Pierre");
}

function comparerPierreCiseaux(main1 : string, main2 : string) : boolean{
  return resultatDuel(main1, main2, "Ciseaux", "Pierre");
}

function comparerFeuilleCiseaux(main1 : string, main2 : string): boolean {
  return resultatDuel(main1, main2, "Feuille", "Ciseaux");
}

export function pfc(main1 : string, main2 : string): string {
  let resultat;
  if (main1 === main2) resultat = "Egalite";
  if (comparerFeuillePierre(main1, main2)) resultat = "Feuille";
  if (comparerPierreCiseaux(main1, main2)) resultat = "Pierre";
  if (comparerFeuilleCiseaux(main1, main2)) resultat = "Ciseaux";
  return resultat;
}

function calculScore(main1 : string, main2 : string) : number[] {
  if (definirGagnant(main1, main2) == "Joueur 1") {
    return [1, -1];
  }
  if (definirGagnant(main1, main2) == "Joueur 2") {
    return [-1, 1];
  }
  return [0, 0];
}

function definirGagnant(main1 : string, main2 : string) : string {
  let resultatDuel = pfc(main1, main2);
  if (main1 == resultatDuel) return "Joueur 1";
  if (main2 == resultatDuel) return "Joueur 2";
  return "Egalite";
}

function ajoutResultatParRound(tableauDesResultats : number[], resultRound : number[]) : number[] {
  return tableauDesResultats.map((scoreActuel, index) => scoreActuel + resultRound[index])
}

export function calculScoreTotal(...coupsJoueurs : string[][]) : number[] {
  if (coupsJoueurs[0].length != coupsJoueurs[1].length) throw new Error("Nombres coups différents");
  let tableauDesResultats = Array(coupsJoueurs.length).fill(0);
  coupsJoueurs[0].map((a,b) => {
    tableauDesResultats = ajoutResultatParRound(tableauDesResultats, calculScore(a,coupsJoueurs[1][b]))
  })
  return tableauDesResultats;
}
