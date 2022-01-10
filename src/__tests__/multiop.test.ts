import {evaluateTex} from "../index";

test("sqrt irrational", () => {
    const result = Math.round(evaluateTex("\\sqrt{\\frac{5}{2\\pi}}", {}).evaluated * 100) / 100;
    expect(result).toBe(0.89);
})

test("exponential sqrt", () => {
    const str = "e^{\\sqrt{2}}";
    const result = Math.round(evaluateTex(str, {}).evaluated * 100) / 100;
    expect(result).toBe(4.11);
})

test("exponential sqrt", () => {
    const str = "e^{\\sqrt{2}}";
    const result = Math.round(evaluateTex(str, {}).evaluated * 100) / 100;
    expect(result).toBe(4.11);
})

test("layered sin", () => {
    const str = "\\sin\\left(\\left(\\left(\\left(\\pi\\right)\\right)\\right)\\right)";
    const result = Math.round(evaluateTex(str, {}).evaluated * 100) / 100;
    expect(result).toBe(0);
})

test("layered sin", () => {
    const str = "\\sin\\left(\\left(\\left(\\left(\\pi\\right)\\right)\\right)\\right)";
    const result = Math.round(evaluateTex(str, {}).evaluated * 100) / 100;
    expect(result).toBe(0);
})