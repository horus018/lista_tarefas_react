'use client';
import TrashIcon from '../Icons/Trash';
import styles from './styles.module.scss';
import { useState } from 'react';
import DeleteConfirmModal from '../Modals/RemoveTaskModal';

interface Task {
    id: number;
    done: boolean;
    description: string;
}

interface TaskItemProps {
    task: Task;
    onRemove: (id: number) => void;
    onToggleDone: (id: number) => void;
}

export default function TaskItem({ task, onRemove, onToggleDone }: TaskItemProps) {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleRemoveClick = () => {
        setModalOpen(true);
    };

    const handleConfirmRemove = () => {
        onRemove(task.id);
        setModalOpen(false);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleCheckboxChange = () => {
        onToggleDone(task.id);
    };

    return (
        <div className={styles.taskItem}>
            <div>
                <input
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={task.done}
                />
                <label>{task.description}</label>
            </div>
            <button onClick={handleRemoveClick} className={styles.trashButton}>
                <TrashIcon />
            </button>

            <DeleteConfirmModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onConfirm={handleConfirmRemove}
                message="Você tem certeza que deseja deletar esta tarefa?"
            />
        </div>
    );
}