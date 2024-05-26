import './styles/index.scss';
import React, { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemePrivider';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from 'app/providers/router';

function App() {
    const { theme } = useTheme();

    useEffect(() => {
        if (Math.random() < 0.5) {
            throw new Error();
        }
    }, []);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
                <AppRouter />
            </Suspense>
        </div>
    );
}

export default App;
