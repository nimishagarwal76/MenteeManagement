document.addEventListener('DOMContentLoaded', function (){
const lis=document.querySelector('#menteelist ul');
const list=document.querySelectorAll('#menteelist li');
console.log(list);
var mentee=[];
var ed=0;
var p;
init();

// loading details from local storage
function init(){
	if(localStorage.menteesRecord)
{
	mentee=JSON.parse(localStorage.menteesRecord);
	for(var i=0;i<mentee.length;i++)
	{
      var nm=mentee[i].name;
      var rt=mentee[i].rate;
      var ct=mentee[i].comment;
      var rl=mentee[i].roll;
 	  prepare(nm,rt,ct,rl);

	}
}
}



function pressSave(e){
   var addBtn = e.target.parentElement;
   var addhide = addBtn.querySelector('.addbutton');
   var show = addBtn.querySelector('#hide');

   var forsave =e.target.parentElement.parentElement;
   var saddhide=forsave.querySelector('.addbutton');
   var sshow = forsave.querySelector('#hide');

   var nm=addBtn.querySelector('.input-n').value;
   var rt=addBtn.querySelector('.input-r').value;
   var ct=addBtn.querySelector('.input-c').value;
   var rl=addBtn.querySelector('.input-roll').value;
   prepare(nm,rt,ct,rl);

  
   var stuObj={"name":nm,"rate":rt,"comment":ct,"roll":rl};
  console.log("dsf",stuObj);
   console.log(mentee);
   mentee.push(stuObj);

   localStorage.menteesRecord=JSON.stringify(mentee);
// console.log(mentee.length);


// 
	// console.log("ds");
sshow.style.display='none';
 saddhide.style.display='block';
 
 


//creating a student object






addBtn.querySelector('.input-n').value="";
addBtn.querySelector('.input-r').value="";
addBtn.querySelector('.input-c').value="";
addBtn.querySelector('.input-roll').value="";
}




function remove(e){

console.log("removeeeeeeeeee");
var li = e.target.parentElement;

var nom =li.querySelector(".name");
    
	li.parentNode.removeChild(li);

 mentee=JSON.parse(localStorage.menteesRecord);

for (var i =0; i< mentee.length; i++) {
    var items = mentee[i];
    if (items.name == nom.textContent) {
        mentee.splice(i, 1);
    }
}

localStorage.menteesRecord=JSON.stringify(mentee);
console.log("removeee",mentee);		

}













function prepare(nm,rt,ct,rl)
{
	
console.log("prepare",nm);
	const cli=document.createElement('li');
	const cname=document.createElement('span');
	const cdelete=document.createElement('span');
	const cdown=document.createElement('span');
	const cedit=document.createElement('span');
	const crate=document.createElement('span');
	const ccomment=document.createElement('span');
	const cbr=document.createElement('br');
	const cbr2=document.createElement('br');
	const cp=document.createElement('span');
	const croll=document.createElement('span');

	cli.appendChild(cname);
	cli.appendChild(cdelete);
	cli.appendChild(cedit);
	cli.appendChild(cdown);
	cli.appendChild(cbr);
	cli.appendChild(cp);
	cli.appendChild(crate);
	cli.appendChild(cbr2);
	cli.appendChild(croll);
	cli.appendChild(ccomment);
// 	cli.appendChild(cbr);
	
	lis.appendChild(cli);  

	cname.textContent=nm;
	cdelete.textContent="DELETE";
	cedit.textContent="EDIT";
	crate.textContent=rt;
	ccomment.textContent=ct;
	croll.textContent=rl;
	cdown.textContent="▼"
	cp.textContent="RATING: "


	cname.classList.add('name');
	cdelete.classList.add('delete');
	cedit.classList.add('edit');
	crate.classList.add('rating');
	ccomment.classList.add('collapse');
	cdown.classList.add('down');
	cp.classList.add('para');
	croll.classList.add('rollno')


}

function sortArray()
{
mentee=JSON.parse(localStorage.menteesRecord);
mentee.sort(function compare(c,d)
{
	if (c.rate>d.rate) 
	{
		return -1;
	}
	else if(c.rate<d.rate)
		{return 1;}
	else{
		return 0;
	}

});
// console.log(mentee);
localStorage.menteesRecord=JSON.stringify(mentee);
for(var i=0;i<mentee.length;++i)
  {
  	var temp=mentee[i];
  prepare(temp.name,temp.rate,temp.comment,temp.roll);


  }
	

console.log("imhesre");

}


var sortbtn=document.querySelector('#sort');
sortbtn.addEventListener('click',function(e){
e.preventDefault();
lis.innerHTML="";
sortArray();





})



lis.addEventListener('click',function(e){
	if(e.target.className=='delete')
	{
		remove(e);

}


	else if(e.target.className=='down')
	{
				const sel=e.target.parentElement;
		var lists=document.querySelectorAll('.collapse');
		// console.log(j);
		
		var comp=sel.querySelector('.collapse');
	if(comp.style.display == 'block')
    {
      comp.style.display = 'none';
    }
    else{
      Array.from(lists).forEach(function(l){
           l.style.display="none";


		})


      comp.style.display = 'block';
    }
	}
    
    else if(e.target.className=='edit')
    {
    	
 var foredit =e.target.parentElement;
 var saddhide=document.querySelector('.addbutton');
   var sshow = document.querySelector('#hide');
   saddhide.style.display='none';
sshow.style.display='block';


var nm=foredit.querySelector('.name').textContent;
var rt=foredit.querySelector('.rating').textContent;
var rl=foredit.querySelector('.rollno').textContent;
var ct=foredit.querySelector('.collapse').textContent;
// console.log(a.textContent);


document.querySelector('.input-n').value=nm;
document.querySelector('.input-r').value=rt;
document.querySelector('.input-c').value=ct;
document.querySelector('.input-roll').value=rl;

remove(e);




    }

})
// var eform=document.querySelector('#editform');
// eform.addEventListener('click',function(e){
//    e.preventDefault();
//    if(e.target.className='esavebutton')
//    {
//    	// console.log(p.target.parentElement);
//    	var ab=p.target.parentElement;
//    // ab.querySelector(".name").textContent=eform.querySelector('.einput-n').value;
//    var c =eform.querySelector('.einput-n');
//    console.log(c.value);

//    }




// })



var addForm=document.querySelector('#add');
addForm.addEventListener('click',function(e){
	
	e.preventDefault();
  var addBtn = e.target.parentElement;
  var addhide = addBtn.querySelector('.addbutton');
   var show = addBtn.querySelector('#hide');
   // var forsave =e.target.parentElement.parentElement;
   
 

  if(e.target.className=='addbutton')
  {
  	addhide.style.display='none';
 
  show.style.display='block';}

  


if(e.target.className=='savebutton')
 {
pressSave(e);
}

})



})