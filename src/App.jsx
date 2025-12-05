import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";

function App() {
  return (
    <>
      <div className="w-full h-screen flex flex-col">
        <Header />
        <div className="w-full">
          <Hero />
          <About />
        </div>

      </div>
    </>
  )
}
export default App;