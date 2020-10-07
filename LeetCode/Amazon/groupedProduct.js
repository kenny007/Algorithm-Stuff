/**
 *  In order to improve customer experience, Amazon has developed a system to provide recommendations to the
customers regarding the items they can purchase. Based on historical customer purchase information, an item
association can be defined as - if an item A is ordered by a customer, then item B is also likely to be
ordered by the same customer (e.g. Book 1 is frequently ordered with Book 2). All items that are linked
together by an item association can be considered to be in the same group. An item without any association
to any other item can be considered to be in its own item association group of size 1.

Given a list of item association relationships (i.e., group of items likely to be ordered together), write
an algorith that outputs the largest item association group. If two groups have the same number of items then
select the group which contains the item that appears first in lexicographic order.

Input
The input to the function/method consists of an argument - itemAssociation, a list containing pairs of items
that are ordered together.

Output
Return a list representing the largest item association group, sorted lexicographically.

Example
Input:
itemAssociation
[[Item1, Item2],
 [Item3, Item4],
 [Item4, Item5]]


Output:
[Item3, Item4, Item5]

Explanation
There are two item association groups:
group1: [Item1, Item2]
group2: [Item3, Item4, Item5]
In the available item associations, group2 has the largest association.
So the output is [Item3, Item4, Item5].
 *
 *
 */
const prAssociation = function (list) {
  let hash = {};

  // We loop through the list and create a hash based on array the items are located
  for (let i = 0; i < list.length; i++) {
    for (let item of list[i]) {
      hash[item] ? hash[item].push(i + 1) : hash[item] = i + 1;
    }

    let biggest = [];

    // We need to get the biggest array from the processing
    for (let key in hash) {
      if (biggest.length < hash[key].length) {
        biggest = hash[key]
      }
    }

    // At this point we try to reconstruct the original position of the array
    let result = [];
    for (let loc of biggest) {
      result = result.concat(list[loc - 1])
    }

    const unique = (value, index, self) => {
      return self.indexOf(value) === index;
    }

    return result.filter(unique);
  }
}




















