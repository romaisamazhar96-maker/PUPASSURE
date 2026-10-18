const content=document.getElementById('content')
const ul=document.getElementById('ul')
let stdnts=['Amna','Ayesha','Irha','Ali','Ahmad']
let stdName= stdnts.forEach((std)=>{
    // used forEach value as we dont need return value for we use map
    let list=document.createElement('li')
    list.textContent=std
    ul.appendChild(list)
    // if no parent then call from body as it is by default parent and below Work
    // document.body.appendChild(list)
    console.log(list)
})
function updateStyle(){
    let Name='Romaisa'
    content.innerText='Hello Welcome back     ' + Name, '!';
    content.style.backgroundColor='blue'
    content.style.color='White'
    console.log(content);
}
function hidecontent(){
       content.style.display='none'
}
function showcontent(){
       content.style.display='block'
}

