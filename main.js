// alert("Hello")
window.addEventListener('load',()=>{
const form =document.querySelector('#new-task-form');
const input =document.querySelector('#new-task-input');
const tasks =document.querySelector('#tasks');

form.addEventListener('submit',(e)=>{
e.preventDefault();

const task=input.value;
if(!task){
    alert("pls enter this is not a joke ");
}
const tsk_el=document.createElement('div');
    tsk_el.classList.add('task');
const cntnt=document.createElement('div');
    cntnt.classList.add('content');
    
const txt=document.createElement('input');
    txt.classList.add('text');
    txt.type='text';
    txt.value=task;
    txt.setAttribute('readonly','readonly');
    cntnt.appendChild(txt);    
    
    tsk_el.appendChild(cntnt);

const actn=document.createElement('div');
    actn.classList.add('actions');
    
const edit=document.createElement('button');
    edit.classList.add('edit');
    edit.innerText='Edit';
    actn.appendChild(edit);
    
const delt=document.createElement('button');
    delt.classList.add('delete');
    delt.innerText='Delete';
    actn.appendChild(delt);
    
    tsk_el.appendChild(actn);
    tasks.appendChild(tsk_el);

input.value='';

delt.addEventListener('click',(e)=>{
    tasks.removeChild(tsk_el);
});

edit.addEventListener('click',(e)=>{

if(edit.innerText.toLowerCase()=='edit')
  {
    // alert("edit");
    txt.removeAttribute('readonly');
    edit.innerText='SAVE';
    txt.focus();
  }
  else{
    edit.innerText='EDIT';
    txt.setAttribute('readonly','readonly');
  }

});

});

});
