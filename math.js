let secret = 42;
export function add(a, b){
    return a + b;
}
export const pi = 3.14;
export function area(r){}
/** or we can write 
 * const pi = 3.14;
 * function area(r){}
 * export { pi, area };
 */
export default function multiply(a, b){
    return a * b;
}