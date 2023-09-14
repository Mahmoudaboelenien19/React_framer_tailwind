import Home from "./components/Home";
import ThemeContextProvider from "./components/context/themeContext";

function App() {
  return (
    <ThemeContextProvider>
      <div className="h-[200vh]">
        <Home />
      </div>
      ;
    </ThemeContextProvider>
  );
}

export default App;
