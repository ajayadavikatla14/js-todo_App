window.addEventListener('load',()=>{
  const form=document.querySelector('#input');
  const ip=document.querySelector('#input-task');
  const addTaskBtn=document.querySelector('#btn-submit');
  const parent=document.querySelector('.task-list');
  
  console.log(form);
  console.log(ip);
  console.log(addTaskBtn);
  console.log(parent);

    form.addEventListener('submit',(ele)=>{
        ele.preventDefault();

        const ipVal=ip.value;
        if(!ipVal){
            alert('please enter some value');
            return;
        }
        

        let count=0;

        const Tasks_ele=document.createElement('div');
        Tasks_ele.setAttribute('id','Tasks');

        const task_input_ele=document.createElement('div');
        task_input_ele.classList.add('content');
        
        const last_input=document.createElement('input');
        last_input.setAttribute('class','text');
        last_input.setAttribute('id','tasks-input');
        last_input.setAttribute('readonly','readonly');

        const actions=document.createElement('div');
        actions.setAttribute('class','actions');

        const btn_edit=document.createElement('button');
        btn_edit.setAttribute('class','edit');
        btn_edit.innerHTML='Edit';

        const btn_delete=document.createElement('button');
        btn_delete.setAttribute('class','delete');
        btn_delete.innerHTML='Delete';

        actions.appendChild(btn_edit);
        actions.appendChild(btn_delete);

        last_input.value=ipVal;
        
        task_input_ele.appendChild(last_input);
        Tasks_ele.appendChild(task_input_ele);
        Tasks_ele.appendChild(actions);
        parent.appendChild(Tasks_ele);

        console.log(parent);

        btn_edit.addEventListener('click',()=>{
        if(btn_edit.innerHTML=='Edit'){
            last_input.removeAttribute('readonly');
            last_input.focus();
            btn_edit.innerHTML='Save';
        }
        else{
            last_input.setAttribute('readonly','readonly');
            btn_edit.innerHTML='Edit';
        }
        })
         
        // document.body.appendChild(parent);
        btn_delete.addEventListener('click',()=>{
            parent.removeChild(Tasks_ele);
        })
        

    })



})
