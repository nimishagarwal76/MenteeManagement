document.addEventListener('DOMContentLoaded', function (){
var list=document.querySelectorAll('#menteelist ul');
list.forEach(function(list){
list.addEventListener('click',function(e){
	if(e.target.className=='delete')
	{const li = e.target.parentElement;
	li.parentNode.removeChild(li);}
	else 
	{
		var sel=e.target.parentElement;
		var comp=sel.querySelector('.collapse');
	if(comp.style.display == 'block')
    {
      comp.style.display = 'none';
    }
    else{
      comp.style.display = 'block';
    }
	}
})


});
var addForm=document.querySelector('#add');
addForm.addEventListener('click',function(e){
	console.log(e.target.className);
	e.preventDefault();
  var addBtn= e.target.parentElement;
  var addhide=addBtn.querySelector('.addbutton');
   var show = addBtn.querySelector('#hide');
   // var forsave =e.target.parentElement.parentElement;
   
 

  if(e.target.className=='addbutton')
  {
  	addhide.style.display='none';
 
  show.style.display='block';}

  

// document.addEventListener('DOMContentLoaded', function (){

  if(e.target.className=='savebutton')
 {
 	console.log('da');
 var forsave =e.target.parentElement.parentElement;
 var saddhide=forsave.querySelector('.addbutton');
   var sshow = forsave.querySelector('#hide');
console.log(sshow);


// create a element
//  	const cli=document.createElement('li');
//  const cname=document.createElement('span');
// const cdelete=document.createElement('span');
// const cedit=document.createElement('span');
// const crate=document.createElement('span');
// const ccomment=document.createElement('span');
// cli.appendChild(cname);
// cli.appendChild(cdelete);
// cli.appendChild(cedit);
// cli.appendChild(crate);
// cli.appendChild(ccomment);
// list.appendChild(cli);


	console.log("ds");
sshow.style.display='none';
 saddhide.style.display='block';
 var nm=addBtn.querySelector('.input-n').value;
 var rt=addBtn.querySelector('.input-r').value;
 var ct=addBtn.querySelector('.input-c').value;

 
  



}
// })



})



})