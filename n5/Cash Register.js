function checkCashRegister(price, cash, cid) {
    const currencyUnits = {
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.1,
      "QUARTER": 0.25,
      "ONE": 1,
      "FIVE": 5,
      "TEN": 10,
      "TWENTY": 20,
      "ONE HUNDRED": 100
    };
  
    let changeDue = cash - price;
    let totalCid = 0;
  
    const cidHash = {};
    for (let [unit, amount] of cid) {
      cidHash[unit] = amount;
      totalCid += amount;
    }
  
    if (totalCid < changeDue) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  
    if (totalCid === changeDue) {
      return { status: "CLOSED", change: cid };
    }
  
    const change = [];
    const sortedUnits = Object.keys(currencyUnits).reverse(); 
    
    for (let unit of sortedUnits) {
      const value = currencyUnits[unit];
      let availableAmount = cidHash[unit];
      let amountToGive = 0;
  
  
      if (changeDue > 0 && changeDue >= value && availableAmount > 0) {
         while (changeDue >= value && availableAmount > 0) {
             changeDue -= value;
              changeDue = parseFloat(changeDue.toFixed(2))
             availableAmount -=value;
             amountToGive +=value;
             cidHash[unit] -=value
         }
  
          change.push([unit, amountToGive]);
      }
    }
    if(changeDue>0){
          return {status: "INSUFFICIENT_FUNDS", change: []}
      }
    return { status: "OPEN", change: change };
  }