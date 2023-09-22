document.getElementById("closeMenuProject1").addEventListener("click", () => {
    const menuProject1 = document.getElementById("menuProject1");
    const kanan = document.getElementById("kanan");
    
    kanan.classList.toggle("overflow-y-hidden",);
    kanan.classList.toggle("overflow-y-auto");

    menuProject1.classList.toggle("w-0");
    menuProject1.classList.toggle("w-full");
});

// menuProject1
document.getElementById("project1").addEventListener("click", () => {
    console.log("menuProject1");
    const menuProject1 = document.getElementById("menuProject1");
    const kanan = document.getElementById("kanan");
    
    kanan.classList.toggle("overflow-y-hidden",);
    kanan.classList.toggle("overflow-y-auto");
    
    menuProject1.classList.toggle("w-0");
    menuProject1.classList.toggle("w-full");
});