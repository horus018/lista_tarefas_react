'use client';
import TrashIcon from '../Icons/Trash';
import styles from './styles.module.scss';

interface Task {
    id: number;
    done: boolean;
    description: string;
}

interface TaskItemProps {
    task: Task;
    onRemove: () => void;
    onToggleDone: (id: number) => void;
}

export default function TaskItem({ task, onRemove, onToggleDone }: TaskItemProps) {
    const handleCheckboxChange = () => {
        onToggleDone(task.id);
    };

    return (
        <div className={styles.taskItem}>
            <div onClick={handleCheckboxChange} className={styles.checkboxContainer}>
                <input
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={task.done}
                    className={styles.checkbox}
                />
                <label className={task.done ? styles.taskDone : ''}>{task.description}</label>
            </div>
            <button onClick={onRemove} className={styles.trashButton}>
                <TrashIcon />
            </button>
        </div>
    );
}