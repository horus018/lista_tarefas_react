import React, { useState } from 'react';
import commonStyles from '../styles.module.scss';

interface AddTaskModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAdd: (description: string) => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ isOpen, onClose, onAdd }) => {
    const [description, setDescription] = useState('');

    const handleAddClick = () => {
        onAdd(description);
        setDescription('');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className={commonStyles.modalBackdrop}>
            <div className={commonStyles.modal}>
                <div className={commonStyles.modalHeader}>
                    <h2 className={commonStyles.modalTitle}>Adicionar Tarefa</h2>
                    <button className={commonStyles.modalClose} onClick={onClose}>X</button>
                </div>
                <div className={commonStyles.modalBody}>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Descrição da tarefa"
                    />
                </div>
                <div className={commonStyles.modalFooter}>
                    <button className={commonStyles.modalButton + ' ' + commonStyles['modalButton--cancel']} onClick={onClose}>Cancelar</button>
                    <button className={commonStyles.modalButton + ' ' + commonStyles['modalButton--primary']} onClick={handleAddClick}>Adicionar</button>
                </div>
            </div>
        </div>
    );
};

export default AddTaskModal;