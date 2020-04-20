export function add(a: Number, b: Number): Number;
export function add(a: String, b: String): String;

export function add(a: Number | String, b: Number | String): Number | String {
  const isAAString = Object.prototype.toString.call(a) === "[object String]";
  const isBAString = Object.prototype.toString.call(b) === "[object String]";

  if (isAAString && isBAString) {
    return `${a}${b}`;
  } else {
    return Number(a) + Number(b);
  }
}
