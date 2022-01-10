import {evaluateTex} from "../index";

test("sanity check", () => {
    expect(3).toBe(3);
})

test("sqrt of perfect square value", () => {
    const result = evaluateTex("\\sqrt{4}", {}).evaluated;
    expect(result).toBe(2);
})

test("sqrt of non-perfect square value", () => {
    const result = Math.round(evaluateTex("\\sqrt{3}", {}).evaluated * 100) / 100;
    expect(result).toBe(1.73);
})

test("nested sqrts", () => {
    const result = evaluateTex("\\sqrt{\\sqrt{\\sqrt{256}}}", {}).evaluated;
    expect(result).toBe(2);
})