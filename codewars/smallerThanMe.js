// https://www.codewars.com/kata/how-many-are-smaller-than-me-ii/javascript

/**
 * @typedef {Object} Tree
 * @property {Tree} left 
 * @property {Tree} right
 * @property {Number} value
 * @property {Number} lesser_cnt
 */

/**
 * @param {Tree} tree
 * @param {Number} value
 */
function calc(tree, value) {
    let sub_tree;
    if (value === tree.value) {
        return tree.lesser_cnt;
    } else if (value > tree.value) {
        return tree.lesser_cnt + calc(tree.right, value);
    } else {
        tree.lesser_cnt--;
        return calc(tree.left, value);
    }
}

/**
 * @param {Tree} tree
 * @param {Number} value
 */
function add_to_tree(tree, value) {
    let tree_to_insert;
    if (value >= tree.value) {
        if (tree.right === undefined) {
            tree.right = { value, lesser_cnt: 0 };
            return;
        }
        tree_to_insert = tree.right;
    } else {
        tree.lesser_cnt++
        if (tree.left === undefined) {
            tree.left = { value, lesser_cnt: 0 };
            return;
        }
        tree_to_insert = tree.left;
    }
    add_to_tree(tree_to_insert, value);
}


function smaller(arr) {
    /** @type {Tree} */
    let root = { value: arr[0], lesser_cnt: 0 };
    for (let i = 1; i < arr.length; ++i) {
        add_to_tree(root, arr[i]);
    }
    return arr.map(el => calc(root, el));
}

console.log(smaller([5, 4, 3, 2, 1])); // [ 4, 3, 2, 1, 0 ]
console.log(smaller([1, 2, 3])); // [ 0, 0, 0 ]
console.log(smaller([1, 2, 0])); // [1, 1, 0]
console.log(smaller([1, 2, 1])); // [ 0, 1, 0 ]
console.log(smaller([1, 1, -1, 0, 0])); // [ 3, 3, 0, 0, 0 ]
console.log(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6])); // [ 4, 1, 5, 5, 0, 0, 0, 0, 0 ]

function inc(i) {
    return { i: i + 1 };
}

for (let i = 0; ({ i } = inc(i)).i < 10;) {
    console.log("qwer");
}