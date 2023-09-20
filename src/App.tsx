import Home from "./components/Home";
import ThemeContextProvider from "./components/context/themeContext";

function App() {
  return (
    <ThemeContextProvider>
      <div className="  bg-white dark:bg-mainDark  ">
        <Home />
      </div>
      ;
    </ThemeContextProvider>
  );
}

export default App;
