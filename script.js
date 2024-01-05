

let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let hrsMob = document.getElementById('hrs_mob');
let minMob = document.getElementById('min_mob');
let secMob = document.getElementById('sec_mob');

setInterval(() => {
    let curretTime = new Date();
    hrs.innerHTML = (curretTime.getHours()<10?'0':'') + curretTime.getHours();
    min.innerHTML = (curretTime.getMinutes()<10?'0':'') + curretTime.getMinutes();
    sec.innerHTML = (curretTime.getSeconds()<10?'0':'') + curretTime.getSeconds();

    hrsMob.innerHTML = (curretTime.getHours()<10?'0':'') + curretTime.getHours();
    minMob.innerHTML = (curretTime.getMinutes()<10?'0':'') + curretTime.getMinutes();
    secMob.innerHTML = (curretTime.getSeconds()<10?'0':'') + curretTime.getSeconds();

},1000)