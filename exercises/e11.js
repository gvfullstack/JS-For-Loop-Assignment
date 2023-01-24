// EXERCISE 11
// Return an array of withdrawal sums of each bank account
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 43242.34, 23432]

export function getAllWithdrawals(array) {
  // Your code goes here...
  let withdrawalSums = [];
  
  for(let i = 0; i < array.length; i++){
    let curCustWidrawal = array[i].withdrawals
    let curCust = array[i]  
   	let sumOfClientWithdrawals = 0;
    if(!curCustWidrawal){
      withdrawalSums.push(sumOfClientWithdrawals)}
    else{
      	sumOfClientWithdrawals = 0 
        for(let j = 0; j < curCustWidrawal.length; j++){
          sumOfClientWithdrawals += curCustWidrawal[j]
    	}
      
    withdrawalSums.push(sumOfClientWithdrawals)
      }
  }

  return withdrawalSums
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
