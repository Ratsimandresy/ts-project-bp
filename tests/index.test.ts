import {pfc} from "../src";

describe("pierre, feuille, ciseaux", () => {
  it("doit retourner feuille", () => {
    expect(pfc("P", "F")).toEqual("F");
    expect(pfc("F", "P")).toEqual("F");
  });

  it("doit retourner égalité", () => {
    expect(pfc("P", "P")).toEqual("=");
    expect(pfc("F", "F")).toEqual("=");
    expect(pfc("C", "C")).toEqual("=");
  });

  it('doit retourner pierre',  () => {
    expect(pfc("P","C")).toEqual("P");
    expect(pfc("C","P")).toEqual("P");
  });

  it('doit retourner ciseaux',  () => {
    expect(pfc("F","C")).toEqual("C");
    expect(pfc("C","F")).toEqual("C");
  });
})
