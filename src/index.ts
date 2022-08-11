function resultatDuel(m1, m2, c1, c2) {
  return (m1 == c1 && m2 == c2) || (m2 == c1 && m1 == c2);
}

function comparerFeuillePierre(m1, m2) {
  return resultatDuel(m1, m2, "F", "P");
}

function comparerPierreCiseaux(m1, m2) {
  return resultatDuel(m1, m2, "C", "P");
}

function comparerFeuilleCiseaux(m1, m2) {
  return resultatDuel(m1, m2, "F", "C");
}

export function pfc(m1,m2) {
  let resultat;
  if (m1 === m2) resultat = "=";
  if (comparerFeuillePierre(m1, m2)) resultat = "F";
  if (comparerPierreCiseaux(m1, m2)) resultat = "P";
  if (comparerFeuilleCiseaux(m1, m2)) resultat = "C";
  return resultat;
}

export function definirGagnant(m1,m2) {
  return "J2";
}

