function run(){

  const template = document.getElementById('output').innerHTML =  
  truncate('We are doing JS string exercises.') + " <br> " + 
  truncate('We are doing JS string exercises.',19) +"<br> "+ 
  truncate('We are doing JS string exercises.',15,'!!') +"<br> "+ 
  truncate('We are doing JS string exercises.',31);

}

// Use the Tooltip but it showed in the displayed output
//not the specific "..." words 
tippy('#output', {
  content: 'We are doing JS string exercises.',

});


//Shorten the code and put an additional condition
function truncate(str, limit, ending) {
  if (limit && ending == null) {
      ending = '...';
     
  }
  if (str.length > limit) str = str.substring
     (0, limit - ending.length) + ending;
      return str;

};






// First solution but the ... is not count as an array
// function truncate(str, limit){
//   if(str.length >= limit){
//     return str.substring(0, limit) + "..."
//   }else{
//     return str; 
//   }
// }

