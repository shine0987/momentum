const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    
    clock.innerText = `${hours}:${minutes}`;
    // clock.innerText = `${hours}:${minutes}:${seconds}`; // seconds 버전
} // padStart(2, "0") : 길이가 2인 string이 있을 때 padding을 써서 string의 앞쪽 문자를 "0"으로 늘린다.

getClock();
setInterval(getClock, 1000);
