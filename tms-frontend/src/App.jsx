import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FooterComponents from "./components/FooterComponents";
import HeaderComponent from "./components/HeaderComponent";
import ListTodoComponent from "./components/ListTodoComponent";

function App() {
  return (
    <>
      <HeaderComponent />
      <BrowserRouter>
        <Routes>
          {/* // http://localhost:3000 */}
          <Route path="/" element={<ListTodoComponent />}></Route>
          {/* // http://localhost:3000/todos */}
          <Route path="/todos" element={<ListTodoComponent />}></Route>
        </Routes>
      </BrowserRouter>
      <FooterComponents />
    </>
  );
}

export default App;
