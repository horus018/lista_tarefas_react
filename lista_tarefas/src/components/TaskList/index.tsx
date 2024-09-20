'use client';
import TaskItem from '@/components/TaskItem';
import styles from './styles.module.scss';
import { useState } from 'react';
import AddTaskModal from '../Modals/AddTaskModal';

interface Task {
    id: number;
    done: boolean;
    description: string;
}

export default function TaskList() {
    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, done: false, description: 'Lavar as mãos' },
        { id: 2, done: false, description: 'Fazer um bolo' },
        { id: 3, done: false, description: 'Lavar a louça' },
        { id: 4, done: true, description: 'Levar o lixo para fora' },
    ]);
    const [isAddModalOpen, setAddModalOpen] = useState(false);

    const addTask = (description: string) => {
        const newTask = {
            id: tasks.length + 1,
            done: false,
            description,
        };
        setTasks([...tasks, newTask]);
    };

    const removeTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toggleTaskDone = (id: number) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const completedTasks = tasks.filter(task => task.done);
    const pendingTasks = tasks.filter(task => !task.done);

    return (
        <>
            <AddTaskModal
                isOpen={isAddModalOpen}
                onClose={() => setAddModalOpen(false)}
                onAdd={addTask}
            />
            <>

                <div className={styles.taskListParent}>
                    <div className={styles.taskList}>
                        <h2 className={styles.tasksMessage}>Suas tarefas de hoje</h2>

                        {tasks.length === 0 && <h2 className={styles.tasksMessage}>Você não possui tarefas para hoje</h2>}
                        {pendingTasks.map(task => (
                            <TaskItem
                                key={task.id}
                                task={task}
                                onRemove={removeTask}
                                onToggleDone={toggleTaskDone}
                            />
                        ))}

                        {completedTasks.length > 0 && <h2 className={styles.tasksMessage}>Tarefas finalizadas</h2>}

                        {completedTasks.map(task => (
                            <TaskItem
                                key={task.id}
                                task={task}
                                onRemove={removeTask}
                                onToggleDone={toggleTaskDone}
                            />
                        ))}
                    </div>
                    <button className={styles.addTaskButton} onClick={() => setAddModalOpen(true)}>Adicionar nova tarefa</button>
                </div>
            </>
        </>
    );
}