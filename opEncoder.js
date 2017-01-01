// 0 +[]
var n0 = '+[]';
// 1 +!![]

var n1 = '+!![]';
var n2 = n1 + n1;
var n3 = n1 + n2;
var n4 = n1 + n3;
var n5 = n1 + n4;
var n6 = n1 + n5;
var n7 = n1 + n6;
var n8 = n1 + n7;
var n9 = n1 + n8;

// true !![]+''
var st = !![]+'';

// false ![]+''
var sf = ![]+'';

//[object Object] ({})+''

//undefined ({})[n0]+'' 

//NaN +{}+''


console.log(({})[n0]+'')
console.log((n9+n8))


