let empty_array = []; // literan notation for array definition
empty_array[1] = 10;

let empty_object = {}; // literal notation for object definition
empty_object["pervoe svoystvo"] = "10";

console.log(empty_object);

let non_empty = { 'pervoe svoystvo': '10' };

console.log(non_empty["pervoe svoystvo"]); // read property

let jopa = "guy";
non_empty["jopa"] = "qwer"; // change property
non_empty.jopa = "qwer";

// non_empty.jopa =========тождественно=========== non_empty["jopa"]

var p1 = { at: 20, hp: 100, armor: 10 };
var p2 = { at: 1, hp: 1000, armor: 20 };

console.log(p1["hp"]);
console.log(p2["at"]);
p1["hp"] = p1["hp"] - 10;
console.log(p1["hp"]);

while (p1["hp"] > 0 && p2["hp"] > 0) {
    p2["hp"] = p2["hp"] - p1["at"];
    p1["hp"] = p1["hp"] - p2["at"];
}

console.log(p1);
console.log(p2);
