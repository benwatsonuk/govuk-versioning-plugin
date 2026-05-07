

function evaluateExpression(
  expression: string,
  variables: Record<string, string>
): string {
  const keys = Object.keys(variables);
  const values = Object.values(variables);

  try {
    const fn = new Function(
      ...keys,
      `return ${expression};`
    );

    const result = fn(...values);

    return String(result);
  } catch (error) {
    throw new Error(
      `Failed to evaluate expression: ${expression}`
    );
  }
}

export default function interpolate(
  input: string,
  variables: Record<string, string>
): string {
  return input.replace(
    /\$\{(.*?)\}/g,
    (_, expression) =>
      evaluateExpression(
        expression.trim(),
        variables
      )
  );
}