import './index.css'
import { FaTimes } from 'react-icons/fa';
const Task = ({ task, addTask, deleteTask, toggleReminder }) => {
      return (
            <>
                  <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={(id) => toggleReminder(task.id)}>
                        <h3>{task.text} <FaTimes onClick={(id) => deleteTask(task.id)} style={{ color: 'red' }} /> </h3>
                        <p>{task.body}</p>
                  </div>
            </>
      )
};

export default Task;
