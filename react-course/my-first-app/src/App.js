import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import ContactComponent from './components/container/ContactComponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Our greeting.jsx component  */}
        {/* <GreetingF name="Myron Next"></GreetingF> */}
        
        {/* Tasks list components */}
        {/* <TaskListComponent></TaskListComponent> */}
        <ContactComponent></ContactComponent>
      </header>
    </div>
  );
}

export default App;
