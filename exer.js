function run(){

  document.getElementById('output').innerHTML =  
  truncate('We are doing JS string exercises.') + " <br> " + 
  truncate('We are doing JS string exercises.',19) +"<br> "+ 
  truncate('We are doing JS string exercises.',15,'!!');

}


// First solution but the ... is not count as an array
// function truncate(str, limit){
//   if(str.length >= limit){
//     return str.substring(0, limit) + "..."
//   }else{
//     return str;
//   }
// }


//Shorten the code and put an additional condition

function truncate(str, limit, ending) {
  if (limit && ending == null) {
    ending = '...';
  }
  if (str.length > limit) str = str.substring(0, limit - ending.length) + ending;
  return str;
};


