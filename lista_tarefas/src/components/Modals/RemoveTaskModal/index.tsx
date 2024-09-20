import React from 'react';
import commonStyles from '../styles.module.scss';

interface RemoveTaskModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    message: string;
}

const RemoveTaskModal: React.FC<RemoveTaskModalProps> = ({ isOpen, onClose, onConfirm, message }) => {
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
                    <h2 className={commonStyles.modalTitle}>Deletar tarefa</h2>
                </div>
                <div className={commonStyles.modalBody}>
                    <p>{message}</p>
                </div>
                <div className={commonStyles.modalFooter}>
                    <button className={commonStyles.modalButton + ' ' + commonStyles['modalButton--cancel']} onClick={onClose}>Cancelar</button>
                    <button className={commonStyles.modalButton + ' ' + commonStyles['modalButton--secondary']} onClick={onConfirm}>Deletar</button>
                </div>
            </div>
        </div>
    );
};

export default RemoveTaskModal;