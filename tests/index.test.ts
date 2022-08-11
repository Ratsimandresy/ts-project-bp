import {definirGagnant, pfc, calculScore} from "../src";

describe("pierre, feuille, ciseaux", () => {
  it("feuille gagne sur pierre", () => {
    expect(pfc("Pierre", "Feuille")).toEqual("Feuille");
    expect(pfc("Feuille", "Pierre")).toEqual("Feuille");
  });

  it("cas égalité, (pierre VS pierre)", () => {
    expect(pfc("Pierre", "Pierre")).toEqual("Egalite");
    expect(pfc("Feuille", "Feuille")).toEqual("Egalite");
    expect(pfc("Ciseaux", "Ciseaux")).toEqual("Egalite");
  });

  it('pierre gagne sur ciseaux',  () => {
    expect(pfc("Pierre","Ciseaux")).toEqual("Pierre");
    expect(pfc("Ciseaux","Pierre")).toEqual("Pierre");
  });

  it('ciseaux gagne sur feuille',  () => {
    expect(pfc("Feuille","Ciseaux")).toEqual("Ciseaux");
    expect(pfc("Ciseaux","Feuille")).toEqual("Ciseaux");
  });

  it('récupérer le gagnant Joueur 2', function () {
    expect(definirGagnant("Ciseaux","Pierre")).toEqual("Joueur 2");
  });

  it('récupérer le gagnant Joueur 1', function () {
    expect(definirGagnant("Feuille","Pierre")).toEqual("Joueur 1");
  });

  it('calculer score joueur 1', function () {
    expect(calculScore("Feuille","Pierre")).toEqual([1,-1]);
  });

  it('calculer score joueur 2', function () {
    expect(calculScore("Ciseaux","Pierre")).toEqual([-1,1]);
  });
})
