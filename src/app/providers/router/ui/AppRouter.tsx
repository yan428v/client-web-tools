import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import PageLoader from 'shared/ui/PageLoader/PageLoader';

export default function AppRouter() {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routeConfig).map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <div className="page-wrapper">{element}</div>
                        }
                    />
                ))}
            </Routes>
        </Suspense>
    );
}
