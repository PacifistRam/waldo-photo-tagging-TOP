import TestApp from "./components/TestApp"
import Timer from "./components/Timer"


function App() {
 

  return (
    <div className="dark:bg-secondary-color dark:text-primary-color flex flex-col gap-3 justify-center items-center min-h-screen  max-w-[1440px] mx-auto ">
      <h1>Hello World</h1>
      <Timer />
      <TestApp />
    </div>
  )
}

export default App
