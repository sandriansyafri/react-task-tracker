import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.css'

const FormTask = ({ addTask }) => {
      const [text, setText] = useState('');
      const [day, setDay] = useState('');
      const [reminder, setReminder] = useState(false);

      const onSubmit = (e) => {
            e.preventDefault();

            addTask({ text, day, reminder });

            setText('')
            setDay('')
            setReminder(false)

      }

      return (
            <>
                  <form onSubmit={onSubmit} className='add-form'>
                        <div className='form-control'>
                              <label for="">Task</label>
                              <input value={text} name='text' type="text" onChange={(e) => setText(e.target.value)} />
                        </div>
                        <div className='form-control'>
                              <label for="">Day & Time</label>
                              <input value={day} type="text" onChange={(e) => setDay(e.target.value)} />
                        </div>
                        <div className='form-control form-control-check'>
                              <label for="">Set Reminder</label>
                              <input value={reminder} type="checkbox" onChange={(e) => setReminder(e.target.checked)} />
                        </div>
                        <input type="submit" value="Add Task" className='btn btn-block' />
                  </form>
            </>
      );
};
FormTask.defaultProps = {}
FormTask.propTypes = {};

export default FormTask;
