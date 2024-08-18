let main = document.getElementById("main");
let arr = ["https://i.pinimg.com/564x/d5/b8/68/d5b868f5d1a24e6a01de8779de3c38c7.jpg","https://i.pinimg.com/564x/4a/c4/58/4ac458b8bc53756a40af5c1c947e4a5d.jpg","https://i.pinimg.com/564x/d0/ac/ce/d0acce9a6d7675875bc9b6562c44b5ea.jpg","https://i.pinimg.com/564x/f7/30/c8/f730c879cfe65438987c19dd147d4512.jpg","https://i.pinimg.com/564x/a5/15/b8/a515b867a5cafe7d3216b0cb9e9ca465.jpg","https://i.pinimg.com/564x/49/e2/73/49e2735da4c7afd5f1e7323000994fa8.jpg", "https://i.pinimg.com/564x/d7/7f/2e/d77f2e15f15e88fbe1e074ca62fc4ddd.jpg"];
let c ="";
for (let i =1; i<=60;i++) {
    let r = Math.floor(Math.random()*arr.length);
    c += `<div class="card">
    <img src=${arr[r]}>
    </div>`;
}
main.innerHTML = c;