import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Tasks from './components/Tasks';
import FormTask from './components/Tasks/Form';
import About from './page/About';

const App = () => {
  const [tasks, setTasks] = useState([])
  const [showTask, setShowTask] = useState(false);

  useEffect(() => {
    getTasks()
  }, [])

  const getTasks = async () => {
    const res = await fetch('http://localhost:3004/tasks')
    const data = await res.json()
    setTasks(data);
  }

  const getTask = async (id) => {
    const res = await fetch('http://localhost:3004/tasks/' + id)
    const data = await res.json()

    return data;
  }

  const addTask = async (task) => {
    await fetch('http://localhost:3004/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task)
    })

    getTasks();

  }

  const deleteTask = async (id) => {
    await fetch('http://localhost:3004/tasks/' + id, {
      method: "DELETE"
    })
    getTasks();
  }

  const toggleReminder = async (id) => {
    const task = await getTask(id);
    const updateTask = { ...task, reminder: !task.reminder, }
    await fetch('http://localhost:3004/tasks/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateTask)
    })

    getTasks();

  }

  return (
    <>
      <div className='container'>
        <BrowserRouter>
          <Header
            title="Task Tracker"
            showTask={showTask}
            onToggleShowTask={(showTask) => setShowTask(showTask)}
          />

          <Route exact path="/" render={() => {
            return (
              <>
                {
                  showTask && <FormTask addTask={(data) => addTask(data)} />
                }

                {
                  tasks.length ?
                    <Tasks
                      tasks={tasks}
                      toggleReminder={toggleReminder}
                      deleteTask={deleteTask} />
                    : 'No Data Found'
                }
              </>
            )
          }} />
          <Route path="/about" component={About} />
          <Footer />
        </BrowserRouter>

      </div>
    </>
  );
};

export default App;
