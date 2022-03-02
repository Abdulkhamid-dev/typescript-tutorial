// Return interface type
const increment = (a: number, b: number) => {
  return a + b;
};
// Return annotations type
const decrement = (a: number, b: number): number => {
  return a + b;
};

// void and never type
// If interface type  of function we don't return anything function value type will be VOID
function plus(a: number, b: number) {
  console.log(b);
}
// Annotation type of VOID
function decresse(a: number, b: number): void {
  console.log(b);
}
// Avoid VOID type but function value type will be ANY
function avoidVoid(a: number, b: number) {
  console.log(b);
  return null;
}

// Never
function fail(msg: string): never{
  throw new Error(msg);
}
