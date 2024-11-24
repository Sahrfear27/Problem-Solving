/**
 Declare a 2-dimensional array, arr, of n empty arrays. All arrays are zero indexed.
Declare an integer, lastAnswer, and initialize it to 0.

There are 2 types of queries, given as an array of strings for you to parse:

Query: 1 x y
Let idx =((x))
Append the integer  to .
Query: 2 x y
Let .
Assign the value  to .
Store the new value of  to an answers array.
There are 2 types of queries, given as an array of strings for you to parse:
1. Query: 1 x y
1. Let idx = ( (x bitwise xor lastAnswer) % n).
2. Append the integer y to arr idx .
2. Query: 2 x y
1. Let idx = ( (x bitwise xor lastAnswer) %n).
2. Assign the value arr|idx][ly % size (arr[idx])] to lastAnswer.
3. Store the new value of last Answer to an answers array.
Note: ® is the bitwise XOR operation, which corresponds to the ^ operator in most languages. Learn more about it on Wikipedia. % is the modulo
operator.
Finally, size(arrlidx!) is the number of elements in arrlidx!
Function Description
Complete the dynamicArray function below.
dynamicArray has the following parameters:
- int n: the number of empty arrays to initialize in arr
- string queries|q]: query strings that contain 3 space-separated integers
Returns
• intl: the results of each type 2 query in the order they are presented

Input Format

The first line contains two space-separated integers, , the size of  to create, and , the number of queries, respectively.
Each of the  subsequent lines contains a query string, .

Constraints

It is guaranteed that query type  will never query an empty array or index.
 * */