// Stack -- Using string
// LIFO - Last In First Out
// Push - add item to the end of the Stack
// Pop - remove the last item from the Stack
var Stack = function(){
  this.storage = "";
};

Stack.prototype.push = function(value){
  this.storage = this.storage.concat("*", value )
};

Stack.prototype.pop = function(){
  let lastDelimiter = this.storage.lastIndexOf("*");
  // slice off the last characters up until ***
  let str = this.storage.slice(lastDelimiter);
  // updating the new stack without the last item
  this.storage = this.storage.substring(0, lastDelimiter);
  // return the last item
  return str;
};

Stack.prototype.size = function(){
  let size = 0
  for(let i of this.storage){
    if (i === "*"){
      size += 1;
    }
  }
  return size;
}
