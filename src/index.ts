function comparerFeuillePierre(m1, m2) {
  return (m1 == "F" && m2 == "P") || (m2 == "F" && m1 == "P");
}

function comparerPierreCiseaux(m1, m2) {
  return (m1 == "C" && m2 == "P") || (m2 == "C" && m1 == "P");
}

export function pfc(m1,m2) {
  if (m1 === m2) return "=";
  if (comparerFeuillePierre(m1, m2)) return "F";
  if (comparerPierreCiseaux(m1, m2)) return "P";
  return "C";
}
