import React from "react";
import Tab from "./Tab/Tab";

function App() {
  const [items, setItems] = React.useState([
    { id: 1, completed: false, title: "kekw" },
    { id: 2, completed: false, title: "kekw" },
    { id: 3, completed: false, title: "kekw" }]
  );
  function toggleItem(id) {
   setItems(
      items.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      })
    );
  }
  return (
    <div className='wrapper'>
      <h1>Get React!</h1>
      <Tab items={items} onToggle={toggleItem}></Tab>
    </div>
  );
}
export default App;

/* class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <h1>Get React!</h1>
        <Tab></Tab>
      </div>
    );
  }
}
*/
