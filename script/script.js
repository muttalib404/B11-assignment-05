//link to blog html
 document.getElementById("Discover").addEventListener('click', function(event){
     event.preventDefault();
     window.location.href="./blog.html" 
 })

 //Button disable, Task No. decrease, Marks Increase
 const updateBtns = document.querySelectorAll('.update-btn')
 const marks = document.getElementById('marks')
 const taskFinish = document.getElementById('task-finish')

 const updateBtnsArray = Array.from(updateBtns);

 for (const btn of updateBtnsArray) {
    btn.addEventListener('click', function(event){
        event.preventDefault();
        alert('Board Updated Successfully')
        const updatedMarks = parseInt(marks.innerText);
        marks.innerText = updatedMarks + 1;
        const updatedTask = taskFinish.innerText;
        taskResult = updatedTask - 1;
        taskFinish.innerText = `0${taskResult}`;
        if (taskResult === 0) {
            alert('Congrates! You have completed all the current task.')
        }
        btn.classList.remove('bg-blue-500', 'hover:bg-blue-600');
        btn.classList.add('bg-blue-200', 'text-gray-200', 'cursor-not-allowed');
        btn.disabled = true;

        // Activity add to history log.
        const selectedTitle = `title-${updateBtnsArray.indexOf(btn) + 1}`;
        
        const title = document.getElementById(selectedTitle).innerText;
        const historyContainer = document.getElementById('activity-log-container');

        const getTime = currentTime(new Date());

        const newHistory = document.createElement('div');
        newHistory.innerHTML = `
            <p class="bg-[#b5bbf744] p-3 mb-4 rounded-md shadow-md">
            You have completed the task <span class="font-bold">${title}</span> at ${getTime}
            </p>
        `;

        historyContainer.appendChild(newHistory)
    })
 }

 //Set current time
function currentTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes}:${seconds} ${ampm}`
}

const colors = ['#CEC2F4', '#A6D0CD', '#F4D8B2', '#F4CCB2','#FBE5FA', '#F7E7CB']

let click = 0;
let rotate = 20;
const bgChange = document.getElementById('bg-change');

bgChange.addEventListener('click', function(){
    document.body.style.backgroundColor = colors[click]
    click++
    if (click>= colors.length){
        click = 0;
    }

    bgChange.style.transform = `rotate(${rotate}deg)`
    rotate = rotate + 10;  
    
})

function setCurrentDateByID(id) {
    const today = new Date();

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dayName = days[today.getDay()];
    const date = String(today.getDate()).padStart(2, '0');
    const monthName = months[today.getMonth()];
    const year = today.getFullYear();

    const currentDate = `${dayName}, ${date} ${monthName} ${year}`;

    document.getElementById(id).innerText = currentDate;
}

setCurrentDateByID('display-date');

document.getElementById("clear-history").addEventListener('click', function(){
    document.getElementById("activity-log-container").innerHTML = '';
})




 

