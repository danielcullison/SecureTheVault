/* 
Step by Step:
-Create a user message variable that contains the string for the user
-Create three variables, each equaling one of the numbers in the vault combination. Use a different arithmetic operator for each variable.
-Create a template literal that includes the user message and the three variables.
-Use the alert method to display this template literal.
*/

// This is the user message
userMessage = 'You have received this message because you have been chosen to open an important vault. Here is the secret combination : ';

// These are the three variables used to get the combination code
const variableOne = 5 * 2;
const variableTwo = 80 / 2;
const variableThree = 30 + 9;

// This is the template literal used to display the user message with the vault combination
alert(`${userMessage} ${variableOne} - ${variableTwo} - ${variableThree}`);

