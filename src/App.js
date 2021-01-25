import ShortingComponent from "./components/ShortingComponent";
import s from "./App.module.css"
import MenuComponent from "./components/MenuComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
    return (
        <div className={s.AppContainer}>
            <MenuComponent/>
            <ShortingComponent/>
            <FooterComponent />
        </div>
    );
}

export default App;
