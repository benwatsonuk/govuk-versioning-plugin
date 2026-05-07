"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = interpolate;
function evaluateExpression(expression, variables) {
    const keys = Object.keys(variables);
    const values = Object.values(variables);
    try {
        const fn = new Function(...keys, `return ${expression};`);
        const result = fn(...values);
        return String(result);
    }
    catch (error) {
        throw new Error(`Failed to evaluate expression: ${expression}`);
    }
}
function interpolate(input, variables) {
    return input.replace(/\$\{(.*?)\}/g, (_, expression) => evaluateExpression(expression.trim(), variables));
}
