"use";
var _buttons = document.getElementsByTagName("button"),
    _length = _buttons.length,
    i=0;

_output = document.getElementById("output");

for(i=0; i<_length; i++){
  _buttons[i].onclick = calculate;
  
}

function calculate(){
  var _value = this.innerHTML;
  if(_value== "="){
    try {
      _output. value = eval(_output.value);
      
    }
    catch (e){
      _output.value="0";
    }
    return;sonuç
  }
  _output.value +=_value;
}
