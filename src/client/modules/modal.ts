document.addEventListener('DOMContentLoaded', function () {
    let modal = document.getElementById("myModal")
    let btn = document.getElementById("openModal")

    if(modal &&  btn){
        btn.addEventListener('click', () => {
            modal.classList.add("modal-open")
            modal.classList.remove("modal-close")
        })
    
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.add("modal-close")
                modal.classList.remove("modal-open")
            }
        })
    
        window.addEventListener('keydown', (event) => {
            if (event.key === "Escape" && modal.classList.contains("modal-open")) {
                modal.classList.add("modal-close")
                modal.classList.remove("modal-open")
            }
        })
    }

    
})