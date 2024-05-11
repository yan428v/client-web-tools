import {Suspense, useContext, useState} from 'react';
import "./styles/index.scss"
import {Routes, Route, Link} from "react-router-dom";
import {MainPageAsync} from "./pages/MainPage/MainPageAsync";
import {AboutPageAsync} from "./pages/AboutPage/AboutPageAsync";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./hekpers/classNames/classNames";



const App = () => {
    const {theme, toggleTheme} = useTheme();
const bool = true;
    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={""}>Главная</Link>
            <Link to={"/about"}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/about"} element={<AboutPageAsync/>}/>
                    <Route path={"/"} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;