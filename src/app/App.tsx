import "./styles/index.scss"
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemePrivider";
import {AppRouter} from './providers/router';
import {Navbar} from "widgets/Navbar";
import Sidebar from "widgets/Sidebar/ui/Sidebar/Sidebar";


const App = () => {
    const {theme} = useTheme();
    
    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar/>
            <div className={"content-page"}>
                <Sidebar/>
                <AppRouter/>
            </div>
            <AppRouter />
        </div>
    );
};

export default App;