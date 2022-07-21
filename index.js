const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
let firstPass=document.getElementById("firstpass");
let secondPass=document.getElementById("secondpass");
function getRandomIndex()
{
    return (Math.floor(Math.random()*characters.length));
}
let btn =document.getElementById("btn");
btn.addEventListener("click",setPassword)
function  getStr()
{
    let str=""
    for(let i=0;i<15;i++) 
        {
            str +=characters[getRandomIndex()]
        }
    return str
}
function setPassword()
{
    
    firstPass.textContent=getStr()
    secondPass.textContent=getStr()
}
firstPass.addEventListener('click',firstPassCopy)
function firstPassCopy()
{
    navigator.clipboard.writeText(firstPass.textContent);
    alert("Copied the text: " + firstPass.textContent);
}
secondPass.addEventListener('click',secondPassCopy)
function secondPassCopy()
{
    navigator.clipboard.writeText(secondPass.textContent);
    alert("Copied the text: " + secondPass.textContent);
}