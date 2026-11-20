// Loose vs Strict Equality

// 1) Console.log(codeA == CodeB);
// Predicted Output: 
true

// Explanation: When this code is run, it will give and output of "true". This is because the comparism used here is a loose equality. A loose equality only compares the values of two variables and since both variables share a value of 100, the ouput becomes true.


// 2) Console.log(codeA === CodeB);
// Predicted Output: 
false

// Explanation: When this code is run, it will give and output of "false". This is because the comparism used here is a strict equality. A strict equality compares both the values and data type of two variables. Since the datatype for code A is string and the datatype for code B is number, the output becomes false.

// 3) Console.log(codeA != CodeB);
// Predicted Output: 
false

// Explanation: When this code is run, it will give and output of "false". This is because the comparism used here is a loose equality. When the code is run, the compiler checks the value of codeA and then codeB. Since both values are the same and the loose equality used is "!=", then the output becomes false.

// 4) Console.log(codeA !== CodeB);
// Predicted Output: 
true

// Explanation: When this code is run, it will give and output of "true". This is because the comparism used here is a strict equality. When the code is run, the compiler checks  both the value and datatype of codeA and  codeB. Since the values are the same but the data types are different, using a strict equality, the output becomes true.





