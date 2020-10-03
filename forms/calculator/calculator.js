function addTwo(n1,n2) {
  return Number(n1) + Number(n2)
  }
function multiplyTwo(n1,n2) {
  return n1 * n2
  }
var calculator = 0


btnAdd.onclick=function(){
  lblCalculator.value = addTwo(inptNumber.value,inptNumber2.value)
}

btnMultiply.onclick=function(){
  lblCalculator.value = multiplyTwo(inptNumber.value,inptNumber2.value)
  
}

btnClear.onclick=function(){
  lblCalculator.value = ""
}
