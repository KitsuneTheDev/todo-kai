import './App.css'
import BelowBar from "./components/BelowBar.jsx";
import Footer from "./components/Footer.jsx";
import LeftSidebar from "./components/leftsidebar/LeftSidebar.jsx";
import RightSidebar from "./components/rightsidebar/RightSidebar.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {

  const handleAddClick = () => {
    console.log("hello");
  }

  return (
    <div className="grid grid-cols-6 grid-rows-12 gap-1 h-screen w-screen bg-green-300 overflow-hidden p-2 text-center">
      <LeftSidebar />
      <TodoList onAddClick={handleAddClick} />
      <RightSidebar />
      <BelowBar />
      <Footer />
    </div>
  );
}

export default App
