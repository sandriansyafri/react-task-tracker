
import PropTypes from 'prop-types';
import Task from './Task';

const Tasks = ({ tasks, addTask, deleteTask, toggleReminder }) => {
      return (
            <>
                  {
                        tasks.map((task) => <Task key={task.id} task={task} toggleReminder={(id) => toggleReminder(id)} deleteTask={(id) => deleteTask(id)} />)
                  }
            </>
      )
};

Tasks.propTypes = {
      tasks: PropTypes.array.isRequired
};

export default Tasks;
