import {definirGagnant, pfc} from "../src";

describe("pierre, feuille, ciseaux", () => {
  it("feuille gagne sur pierre", () => {
    expect(pfc("P", "F")).toEqual("F");
    expect(pfc("F", "P")).toEqual("F");
  });

  it("cas égalité, (pierre VS pierre)", () => {
    expect(pfc("P", "P")).toEqual("=");
    expect(pfc("F", "F")).toEqual("=");
    expect(pfc("C", "C")).toEqual("=");
  });

  it('pierre gagne sur ciseaux',  () => {
    expect(pfc("P","C")).toEqual("P");
    expect(pfc("C","P")).toEqual("P");
  });

  it('ciseaux gagne sur feuille',  () => {
    expect(pfc("F","C")).toEqual("C");
    expect(pfc("C","F")).toEqual("C");
  });

})
