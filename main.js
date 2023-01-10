const btn = document.querySelectorAll(".buttons .btn");
const alerts = document.querySelector(".alerts");
const last = document.querySelector(".toast i:last-child");
const acc = document.querySelectorAll(".acc .bx");

const obj = {
    timer: 5000,
    success: {
        icon: 'fa-circle-check',
    },
    error: {
        icon: 'fa-circle-exclamation',
    },
    warning: {
        icon: 'fa-triangle-exclamation',
    },
    info: {
        icon: 'fa-circle-info',
    }
}

const DeleteToast = (toast) => {
    toast.classList.add("hide");
    setTimeout(() => toast.remove(), 500);
}


const clicked = (id) => {
    const { icon } = obj[id];
    const li = document.createElement("li");
    li.className = `toast ${id}`;
    li.innerHTML = ` 
    <div class="col">
    <i class="fa-solid ${icon}"></i>
    <span>${id}: This is a ${id} toast.</span>
    </div>
    <i class="fa-solid fa-xmark" onclick="DeleteToast(this.parentElement)"></i>`;
    alerts.appendChild(li);
    setTimeout(() => DeleteToast(li), obj.timer);
    acc.forEach((e) => {
        e.className = `bx ${id}`;
        if (li.className === "hide");
            e.className = `bx`;
       
   })

};
btn.forEach((e) => {
    e.addEventListener("click", () => clicked(e.id));
})

