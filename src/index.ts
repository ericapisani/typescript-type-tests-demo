function add(a: Number, b: Number): Number;
function add(a: String, b: String): String;

function add(a: Number | String, b: Number | String): Number | String {
  return 42;
}
