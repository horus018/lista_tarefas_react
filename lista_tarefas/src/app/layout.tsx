import type { Metadata } from "next";
import '../styles/globals.scss';
import { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Lista de tarefas',
    description: 'Aplicativo para gerenciar uma lista de tarefas',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="pt-BR">
            <head>
            </head>
            <body>
                <div className="app-container">
                    {children}
                </div>
            </body>
        </html>
    );
};

export default RootLayout;