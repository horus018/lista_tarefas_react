import React, { useState } from 'react';
import commonStyles from '../styles.module.scss';

interface AddTaskModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAdd: (description: string) => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ isOpen, onClose, onAdd }) => {
    const [description, setDescription] = useState('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isTouched, setIsTouched] = useState(false);

    const handleAddClick = () => {
        setIsTouched(true);

        if (!description.trim()) {
            setErrorMessage('Título da tarefa não pode estar vazio');
            return;
        }

        onAdd(description);
        setDescription('');
        setErrorMessage(null);
        setIsTouched(false);
        onClose();
    };

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className={commonStyles.modalBackdrop} onClick={handleBackdropClick}>
            <div className={commonStyles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={commonStyles.modalHeader}>
                    <h2 className={commonStyles.modalTitle}>Nova Tarefa</h2>
                </div>
                <div className={commonStyles.modalBody}>
                    <label>Título</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Digite"
                    />
                    
                    {isTouched && !description.trim() && (
                        <p className={commonStyles.errorMessage}>{errorMessage}</p>
                    )}
                </div>
                <div className={commonStyles.modalFooter}>
                    <button
                        className={commonStyles.modalButton + ' ' + commonStyles['modalButton--cancel']}
                        onClick={onClose}
                    >
                        Cancelar
                    </button>
                    <button
                        className={commonStyles.modalButton + ' ' + commonStyles['modalButton--primary']}
                        onClick={handleAddClick}
                    >
                        Adicionar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddTaskModal;