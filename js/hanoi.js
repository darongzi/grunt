/*var hanoi = function(disc){
    if(disc > 0){

        hanoi(disc - 1);
        console.log('Move disc :' + disc );
        hanoi(disc - 1);
    }
}
hanoi(3,'Src','Aux','Dst');*/

var hanoi = function(disc,src){
  if(disc > 0){
    hanoi(disc - 1,'_1');
    console.log('Move disc "' + disc + '" from hanoi' + src);
    hanoi(disc - 1,'_2');
  }
}
hanoi(3,'_0');