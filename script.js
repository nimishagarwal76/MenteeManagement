document.addEventListener('DOMContentLoaded', function (){
const lis=document.querySelector('#menteelist ul');
const list=document.querySelectorAll('#menteelist li');
console.log(list);

lis.addEventListener('click',function(e){
	if(e.target.className=='delete')
	{var li = e.target.parentElement;
	li.parentNode.removeChild(li);}
	else if(e.target.className=='down')
	{
		const sel=e.target.parentElement;
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


var addForm=document.querySelector('#add');
addForm.addEventListener('click',function(e){
	// console.log(e.target.className);
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
 	// console.log('da');
 var forsave =e.target.parentElement.parentElement;
 var saddhide=forsave.querySelector('.addbutton');
   var sshow = forsave.querySelector('#hide');
// console.log(sshow);


// create a element
 	const cli=document.createElement('li');
 const cname=document.createElement('span');
const cdelete=document.createElement('span');
const cdown=document.createElement('span');
const cedit=document.createElement('span');
const crate=document.createElement('span');
const ccomment=document.createElement('span');
const cbr=document.createElement('br');
const cp=document.createElement('span');

cli.appendChild(cname);
cli.appendChild(cdelete);
cli.appendChild(cedit);
cli.appendChild(cdown);
cli.appendChild(cbr);
cli.appendChild(cp);
cli.appendChild(crate);
cli.appendChild(ccomment);
lis.appendChild(cli);






// 
	// console.log("ds");
sshow.style.display='none';
 saddhide.style.display='block';
 var nm=addBtn.querySelector('.input-n').value;
 var rt=addBtn.querySelector('.input-r').value;
 var ct=addBtn.querySelector('.input-c').value;
 

 cname.textContent=nm;
 cdelete.textContent="DELETE";
 cedit.textContent="EDIT";
 crate.textContent=rt;
 ccomment.textContent=ct;
 cdown.textContent="▼"
cp.textContent="RATING: "


 cname.classList.add('name');
cdelete.classList.add('delete');
cedit.classList.add('edit');
crate.classList.add('rating');
ccomment.classList.add('collapse');
cdown.classList.add('down');
cp.classList.add('para');

addBtn.querySelector('.input-n').value="";
addBtn.querySelector('.input-r').value="";
addBtn.querySelector('.input-c').value="";

 console.log(nm);
  console.log(rt);
console.log(ct);


}
// })



})



})