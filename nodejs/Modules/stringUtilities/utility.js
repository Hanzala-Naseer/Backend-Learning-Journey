function capitalizeString(str){
    return str.toUpperCase();
}

function reverseString(str){
     let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

function countCharacters(str){
    return str.length;

}

module.exports={
    capitalizeString,
    reverseString,
    countCharacters
}