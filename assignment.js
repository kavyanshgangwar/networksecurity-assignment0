// area from which i have to convert to cypher text
var cyphertext = document.getElementById('cyphertext');
// area from which i have to convert to plain text
var plaintext = document.getElementById('plaintext');
// cypher text variable
var cyStr = "";
// plain text variable
var plStr = "";
// function to convert cypher text to plain text
const cypherToPlain = function() {
  // take input of user
  cyStr = cyphertext.value;
  // intialize the palin text
  plStr = "";
  // for every character in input use the algo for conversion
  for(var i=0;i<cyStr.length;i++){
    // gets the ascii value of the character of string at index i
    var c = cyStr.charCodeAt(i);
    if(c>96 && c<123){
      c -= 97;
      c = 25-c;
      c+=97;
    }else if(c>64 && c<91){
      c -= 65;
      c = 25-c;
      c+=65;
    }
    // converts ascii value to character
    plStr+=String.fromCharCode(c);
  }
  // display the value obtained;
  plaintext.value = plStr;
}
// function to convert plain text to cypher text
const plainToCypher = function(){
  // take input of user
  plStr = plaintext.value;

  // intialize the cypher text
  cyStr = "";
  // for every character in input use the algo for conversion
  for(var i=0;i<plStr.length;i++){
    // gets the ascii value of the character of string at index i
    var c = plStr.charCodeAt(i);
    if(c>96 && c<123){
      c -= 97;
      c = 25-c;
      c+=97;
    }else if(c>64 && c<91){
      c -= 65;
      c = 25-c;
      c+=65;
    }
    // converts ascii value to character
    cyStr+=String.fromCharCode(c);
  }
  // display the value obtained;
  cyphertext.value = cyStr;
}

// adds an event listener to for conversion
cyphertext.addEventListener('keyup',cypherToPlain);

// adds an event listener to for conversion
plaintext.addEventListener('keyup',plainToCypher);
