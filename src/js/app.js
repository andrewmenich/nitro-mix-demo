import './components/test';

if(module.hot){
  module.hot.accept();
}

const string = "change me!";
console.log(string);

if(document.getElementById("confetti")){
  const welcome = import(/* webpackChunkName: "ConfettiDemo" */"./components/ConfettiDemo").then(vm => {
    console.log(vm)
  }); 
  
}

if (document.getElementById("document-portal")) {
  import(/* webpackChunkName: "VueDemo" */"./components/VueDemo").then(initDocumentPortal => {
    console.log(initDocumentPortal)
  });
}
