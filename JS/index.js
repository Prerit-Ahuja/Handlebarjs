let p_data = await fetch('./js/petdata.json').then((resolve)=>{
  return resolve.json()
}).then(value=>{return value}).catch(value=>console.log(value))
 
console.log(p_data);

  var rawTemplate = document.getElementById("petsTemplate").innerHTML;
  var compiledTemplate = Handlebars.compile(rawTemplate);
  var ourGeneratedHTML = compiledTemplate(p_data);
  console.log(ourGeneratedHTML);

  var petsContainer = document.getElementById("pets-container");
  petsContainer.innerHTML = ourGeneratedHTML;


