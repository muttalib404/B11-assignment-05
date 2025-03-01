
let increaseNum = 23;
let decreaseNum = 6;

document.getElementById("update-btn").addEventListener('click', function(event){
    event.preventDefault();
    increaseNum++;
    decreaseNum--;

    document.getElementById("increaseNum").innerText = increaseNum;
    document.getElementById("decreaseNum").innerText = decreaseNum;
})



