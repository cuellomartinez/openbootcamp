import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {
    const defaultTask = new Task('Example','Default description', false, LEVELS.NORMAL);

    const changeSate = (id) => {
        console.log('TODO: Change state a task');
    }
    return (
        <div>
            <div>
               <h1> Your Tasks:</h1>
            </div>
            {/* TODO: Aplite For/Map for to render a list */}
            <TaskComponent task={defaultTask} ></TaskComponent>
        </div>
    );
};

export default TaskListComponent;
