//alert("Hello, World");
const btn = document.querySelector("button");

//to make text size bigger
function makeBigger(){
    const size ="2em";
    document.getElementById("Text").style.fontSize= size;
    alert("Making font size bigger.");
}
btn.addEventListener("click", makeBigger);

//user choose to make text fancy when radio button is chosen. It will turn the font to bold, 
//blue, and underline
function Fancy(){
    document.getElementById("Text").style.fontStyle="bold";
    document.getElementById("Text").style.color="blue";
    document.getElementById("Text").style.textDecoration="underline";
    alert("Changing to Fancy.");
}
btn.addEventListener("click", Fancy);

//if user choose boringbetty show text as normal, if usere used fancy before it will remove style 
function Betty(){
    document.getElementById("Text").style.fontStyle="normal";
    document.getElementById("Text").style.color="black";
    document.getElementById("Text").style.textDecoration="none";
    alert("Changing it back to boring.");
}
btn.addEventListener("click", Betty);


//this function makes all text in textbox uppercase
function Moo(){
    var textarea = document.getElementById("Text");
    textarea.value = textarea.value.toUpperCase();

//adds moo to last word of sentence. Last word is refered to the word before period
var textarea = document.getElementById("Text");
var sentence = textarea.value.split(".");
for (var i = 0; i < sentence.length; i++) {
  var words = sentence[i].split(" ");
  if (words.length > 0) {
    words[words.length - 1] += "Moo";
  }
  sentence[i] = words.join(" ");
}
textarea.value = sentence.join(". ");
}

btn.addEventListener("click", Moo);
