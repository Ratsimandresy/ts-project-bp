import { pfc, calculScoreTotal} from "../src";

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


  it('calculer score 2 rounds joueur 1 gagnant', function () {
    expect(calculScoreTotal(["Pierre","Ciseaux"], ["Ciseaux", "Feuille"])).toEqual([2,-2]);
  });

  it('calculer score 4 rounds  egalité  2 joueurs', function () {
    expect(calculScoreTotal(["Pierre","Ciseaux", "Feuille", "Ciseaux"], ["Ciseaux", "Feuille", "Ciseaux","Pierre"]))
      .toEqual([0,0]);
  });

  it('nombre de coups différents entre les joueurs', function () {
    expect(() => calculScoreTotal(["Pierre","Ciseaux", "Feuille", "Ciseaux"], ["Ciseaux", "Feuille", "Ciseaux"]))
      .toThrowError("Nombres coups différents")
  });

  it.skip('calculer score 1 round, 3 joueurs, égalité ', function () {
    expect(calculScoreTotal(["Pierre"],["Pierre"],["Pierre"])).toEqual([0,0,0])
  });
})
