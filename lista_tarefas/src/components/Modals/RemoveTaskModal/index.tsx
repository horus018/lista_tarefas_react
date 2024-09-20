import React from 'react';
import commonStyles from '../styles.module.scss';

interface DeleteConfirmModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    message: string;
}

const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({ isOpen, onClose, onConfirm, message }) => {
    if (!isOpen) return null;

    return (
        <div className={commonStyles.modalBackdrop}>
            <div className={commonStyles.modal}>
                <div className={commonStyles.modalHeader}>
                    <h2 className={commonStyles.modalTitle}>Confirmar Remoção</h2>
                    <button className={commonStyles.modalClose} onClick={onClose}>X</button>
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

export default DeleteConfirmModal;