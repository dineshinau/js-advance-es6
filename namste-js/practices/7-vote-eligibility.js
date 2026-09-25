function checkVotingEligibility(age) {
  if(parseInt(age)<18){
    return 'Not eligible to vote.\nExplanation: The age is below 18, so person cannot vote yet.';
  }
  return 'Eligible to vote';
}

const input1 = 0;
const input2 = 18;
const input3 = 17;
const input4 = 90;

const res1 = checkVotingEligibility(input1)
const res2 = checkVotingEligibility(input2)
const res3 = checkVotingEligibility(input3)
const res4 = checkVotingEligibility(input4)
// const res5 = checkVotingEligibility(input5)

console.log(res1); // Output: [1, 2, 3, 4]
console.log(res2); // Output: ["a", "b","c"]
console.log(res3); // Output: [1,"1"]
console.log(res4); // Output: []
// console.log(res5); // Output: [true, false]
