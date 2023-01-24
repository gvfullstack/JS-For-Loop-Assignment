// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastBalance(array) {
  // Your code goes here...
  let clientWithLowest = [array[0]];
  
  for(let i = 1; i < array.length; i++){
    let curCustBal = array[i].balance
    let curCust = array[i]
    	    
    if(clientWithLowest.balance === 0){
          clientWithLowest = [curCust]
    }
    
    if(curCustBal > 0 && clientWithLowest[0].balance > curCustBal){
    clientWithLowest = [curCust]
    }
  }

  return clientWithLowest
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
