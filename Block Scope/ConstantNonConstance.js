/* Problem Statement
Block scope.2:
Constant non-constance
Does the fact that account is constant mean that we can't update password? Why, or why not? And if not, how could we make it so that we can't?
*/


/* Given Code

const account = {
  username: "marijn",
  password: "xyzzy"
}

account.password = "s3cret" // (*much* more secure)

console.log(account.password)

*/

// Solution

// Ans: It does, we cant get modified, also you can add new properties to account object like favQuestion but you can' make account a string or array.

