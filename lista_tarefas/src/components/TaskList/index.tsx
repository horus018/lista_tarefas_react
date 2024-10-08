'use client';
import TaskItem from '@/components/TaskItem';
import styles from './styles.module.scss';
import { useState } from 'react';
import AddTaskModal from '../Modals/AddTaskModal';
import RemoveTaskModal from '../Modals/RemoveTaskModal';

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
    const [nextId, setNextId] = useState(5);
    const [isAddModalOpen, setAddModalOpen] = useState(false);
    const [isRemoveModalOpen, setRemoveModalOpen] = useState(false);
    const [taskToRemove, setTaskToRemove] = useState<Task | null>(null);

    const addTask = (description: string) => {
        const newTask = {
            id: nextId,
            done: false,
            description,
        };
        setTasks([...tasks, newTask]);
        setNextId(nextId + 1);
    };

    const confirmRemoveTask = () => {
        if (taskToRemove) {
            setTasks(tasks.filter(task => task.id !== taskToRemove.id));
            setTaskToRemove(null);
            setRemoveModalOpen(false);
        }
    };

    const toggleTaskDone = (id: number) => {
        const updatedTasks = tasks.map(task => 
            task.id === id ? { ...task, done: !task.done } : task
        );
        setTasks(updatedTasks);
    };

    const openRemoveModal = (task: Task) => {
        setTaskToRemove(task);
        setRemoveModalOpen(true);
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

            <RemoveTaskModal
                isOpen={isRemoveModalOpen}
                onClose={() => setRemoveModalOpen(false)}
                onConfirm={confirmRemoveTask}
                message="Tem certeza que você deseja deletar essa tarefa?"
            />

            <div className={styles.taskListParent}>
                <div className={styles.taskList}>
                    <h2 className={styles.tasksMessage}>Suas tarefas de hoje</h2>

                    {tasks.length === 0 && <h2 className={styles.tasksMessage}>Você não possui tarefas para hoje</h2>}
                    {pendingTasks.map(task => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            onRemove={() => openRemoveModal(task)}
                            onToggleDone={toggleTaskDone}
                        />
                    ))}

                    <h2 className={styles.tasksMessage}>Tarefas finalizadas</h2>
                    {completedTasks.map(task => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            onRemove={() => openRemoveModal(task)}
                            onToggleDone={toggleTaskDone}
                        />
                    ))}
                </div>
                <button className={styles.addTaskButton} onClick={() => setAddModalOpen(true)}>
                    Adicionar nova tarefa
                </button>
            </div>
        </>
    );
}