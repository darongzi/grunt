var hanoi = function(disc,src){
  if(disc > 0){
    hanoi(disc - 1,'_1');
    console.log('Move disc "' + disc + '" from hanoi' + src);
    hanoi(disc - 1,'_2');
  }
}
hanoi(3,'_0');

