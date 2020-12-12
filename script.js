const panels = document.querySelectorAll('.panel');

/* function removed(){
    for(let i=0; i<panels.length;i++){
            panels[i].classList.remove('active');
    }
}

for(let i=0; i<panels.length;i++){
    panels[i].addEventListener('click',()=>{
        removed();
        panels[i].classList.add('active');
    })
}
 */

panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}