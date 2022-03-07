function run(){

  const template = document.getElementById('output').innerHTML =  
  truncate('We are doing JS string exercises.') + " <br> " + 
  truncate('We are doing JS string exercises.',19) +"<br> "+ 
  truncate('We are doing JS string exercises.',15,'!!');

}

// Use the Tooltip but it showed in the displayed output
//not the specific "..." words 
tippy('#output', {
  content: 'We are doing JS string exercises.',

});


//Shorten the code to save storage
function truncate(str, limit, end) {
  if (limit && end == null) {
      end = '...'
  }
  if (str.length > limit) str = str.substring (0, limit - end.length) + end;
      return str;

};




// First solution coming from https://www.w3resource.com
// I get ideas from different platform

// function truncate(str, length, ending){
//   if (length == null){
//     length = 100;
//   }
//   if(ending == null) {
//     ending = "...";
//   }
//   if(str.length > length) {
//     return str.substring(0, length - ending.length) + ending;
//   }else {
//     return str;
//   }
// };

