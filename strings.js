// const string = prompt("Enter a Potential Palindrome");

// //function checkPalindrome(string) {
//     const stringValue = string.split ('');
//     console.log(stringValue);

//     const reverseStringValues = stringValue.reverse();
//     console.log(reverseStringValues);

//     const joinedString = reverseStringValues.join('');
//     console.log(joinedString);

//     if(string == joinedString){
//         console.log("It is a palindrome!");
//     }
//     else{
//         console.log("It is not a palindrome");
//     }
// }

//checkPalindrome(string);

function validateForm(){
    const FirstName= document.getElementById('First Name').value;
    const LastName = document.getElementById('Last Name').value;
    const FullName= FirstName+LastName;
    console.log(FullName)
    const ZipCode = document.getElementById('Zip Code').value;

    if(FullName >= 21)
    {
        if (ZipCode >5) { 
            alert("Too Many Characters");
            return;
        }
        alert("Success!");
        document.getElementById('registrationForm').submit ();
    }
}
debugger

