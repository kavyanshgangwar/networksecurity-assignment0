var cyphertext = document.getElementById('cyphertext');
var plaintext = document.getElementById('plaintext');
var cyStr = "";
var plStr = "";
const cypherToPlain = function() {
  cyStr = cyphertext.value;
  plStr = "";
  for(var i=0;i<cyStr.length;i++){
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
    plStr+=String.fromCharCode(c);
  }
  plaintext.value = plStr;
}

const plainToCypher = function(){
  plStr = plaintext.value;
  cyStr = "";
  for(var i=0;i<plStr.length;i++){
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
    cyStr+=String.fromCharCode(c);
  }
  cyphertext.value = cyStr;
}
cyphertext.addEventListener('keyup',cypherToPlain);
plaintext.addEventListener('keyup',plainToCypher);
