// @ts-check
export function resolve(specifier, context, nextResolve) {
  console.log(`resolve-js2ts: ${specifier}`);
  if (!specifier.endsWith('.js')) {
    return nextResolve(specifier, context);
  }
  return Promise.resolve(nextResolve(specifier, context)).catch((err) => {
    return Promise.resolve(nextResolve(specifier.replace(/\.js$/, '.ts'), context)).catch(() => {
      throw err;
    });
  });
}
