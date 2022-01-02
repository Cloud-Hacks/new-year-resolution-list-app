import React, {useState, useEffect} from 'react';
import EditTask from '../modals/EditTask'

const Card = ({taskObj, index, deleteTask, updateListArray}) => {
    const [modal, setModal] = useState(false);
    const [todo, setTodo] = useState('');

    useEffect(() => setTodo ({
        message: {
          body: JSON.stringify(`*${taskObj.Name}*-->📗${taskObj.Description}`)
        },
        submitting: false,
        error: false
      }),[]);

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (taskObj) => {
        updateListArray(taskObj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    const handleNotify = async (e) => {
        e.preventDefault()
        await fetch('/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo.message)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setTodo({
                        error: false,
                        submitting: false,
                        message: {
                            body: ''
                        }
                    });
                } else {
                    setTodo({
                        error: true,
                        submitting: false
                    });
                }
            });
            window.alert("Notification Sent Successfully")
    }

    return (
        <div class = "card-wrapper mr-5">
            <div class = "card-top" style={{"background-color": colors[index%5].primaryColor}}></div>
            <div class = "task-holder">
                <span class = "card-header" style={{"background-color": colors[index%5].secondaryColor, "border-radius": "10px"}}>{taskObj.Name}</span>
                <p className = "mt-3">{taskObj.Description}</p>

                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i class = "far fa-edit mr-3" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {() => setModal(true)}></i>
                    <i class="fas fa-trash-alt mr-3" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}></i>
                    <i class="fas fa-bell" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {handleNotify}></i>
                </div>
        </div>
        <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </div>
    );
};

export default Card;