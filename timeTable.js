const Sunday =[
    {   
        time: 'Sunday',
        roomNumber: 'Holiday',
        subject: 'No class Available',
        type: ''
    }
]
const Monday =[
    {   
        time: '09-10 AM',
        roomNumber: 'EOSC420',
        subject: 'COGS6969',
        type: 'Lecture'
    },
    {   
        time: '10-11 AM',
        roomNumber: '38-718',
        subject: 'MTH166',
        type: 'Tutorial'
    },
    {   
        time: '12-01 PM',
        roomNumber: '38-718',
        subject: 'NS200',
        type: 'Lecture'
    }
]
const Tuesday =[
    {   
        time: '09-10 AM',
        roomNumber: 'EOSC420',
        subject: 'COGS6969',
        type: 'Lecture'
    },
    {   
        time: '09-10 AM',
        roomNumber: 'EOSC420',
        subject: 'COGS6969',
        type: 'Lecture'
    },
    {   
        time: '09-10 AM',
        roomNumber: 'EOSC420',
        subject: 'COGS6969',
        type: 'Lecture'
    }
]

const Wednesday =[
    {   
        time: '09-10 AM',
        roomNumber: 'EOSC420',
        subject: 'COGS6969',
        type: 'Lecture'
    },
    {   
        time: '09-10 AM',
        roomNumber: 'EOSC420',
        subject: 'COGS6969',
        type: 'Lecture'
    },
    {   
        time: '09-10 AM',
        roomNumber: 'EOSC420',
        subject: 'COGS6969',
        type: 'Lecture'
    }
]

const Thursday =[
    {   
        time: '09-10 AM',
        roomNumber: 'EOSC420',
        subject: 'COGS6969',
        type: 'Lecture'
    },
    {   
        time: '09-10 AM',
        roomNumber: 'EOSC420',
        subject: 'COGS6969',
        type: 'Lecture'
    },
    {   
        time: '09-10 AM',
        roomNumber: 'EOSC420',
        subject: 'COGS6969',
        type: 'Lecture'
    }
]

const Friday =[
    {   
        time: '09-10 AM',
        roomNumber: 'EOSC420',
        subject: 'COGS6969',
        type: 'Lecture'
    },
    {   
        time: '09-10 AM',
        roomNumber: 'EOSC420',
        subject: 'COGS6969',
        type: 'Lecture'
    },
    {   
        time: '09-10 AM',
        roomNumber: 'EOSC420',
        subject: 'COGS6969',
        type: 'Lecture'
    }

]

const Saturday =[
    {   
        time: '09-10 AM',
        roomNumber: 'EOSC420',
        subject: 'COGS6969',
        type: 'Lecture'
    },
    {   
        time: '09-10 AM',
        roomNumber: 'EOSC420',
        subject: 'COGS6969',
        type: 'Lecture'
    },
    {   
        time: '09-10 AM',
        roomNumber: 'EOSC420',
        subject: 'COGS6969',
        type: 'Lecture'
    }
]
const days = [Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday];
let currentDay = new Date().getDay();

function loadTimetable(day) {
    currentDay = day;
    const timetableBody = document.getElementById('timetableBody');
    timetableBody.innerHTML = '';

    days[day].forEach(slot => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${slot.time}</td>
            <td>${slot.roomNumber}</td>
            <td>${slot.subject}</td>
            <td>${slot.type}</td>
        `;
        timetableBody.appendChild(row);
    });

    const timetableTitle = document.getElementById('timetableTitle');
    timetableTitle.textContent = `${getDayName(day)}'s Timetable`;
}

function changeDay(offset) {
    currentDay = (currentDay + offset + 7) % 7;
    loadTimetable(currentDay);
}

function getDayName(day) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[day];
}

document.addEventListener('DOMContentLoaded', () => {
    loadTimetable(currentDay);
});