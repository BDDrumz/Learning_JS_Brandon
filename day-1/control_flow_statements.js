//control flow with if else statements 
/*
if (condition1) {
    statement1;
  } else if (condition2) {
    statement2;
  } else if (conditionN) {
    statementN;
  } else {
    statementLast;
  }
*/
//example
function checkData() {
    if (document.form1.threeChar.value.length === 3) {
      return true;
    } else {
      alert(
        `Enter exactly three characters. ${document.form1.threeChar.value} is not valid.`,
      );
      return false;
    }
  }
  
  

  
