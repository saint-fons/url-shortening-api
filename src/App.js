import ShortingComponent from "./components/ShortingComponent";
import s from "./App.module.css"
import MenuComponent from "./components/MenuComponent";

function App() {
    return (
        <div className={s.AppContainer}>
            <MenuComponent/>
            <ShortingComponent/>
        </div>
    );
}

export default App;
