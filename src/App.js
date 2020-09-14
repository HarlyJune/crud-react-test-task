import React, { useEffect } from "react";
import Tab from "./Tab/Tab";
import Context from "./context";

const AddItem = React.lazy(() => import("./Tab/AddItem"));
function App() {
  const [items, setItems] = React.useState([]);
  useEffect(() => {
    fetch("http://178.128.196.163:3000/api/records", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((items) => {
        setItems(items);
      });
  }, []);

  function removeItem(_id) {
    fetch(`http://178.128.196.163:3000/api/records/${_id}`, {
      
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((response) => response.json())
      .then((resault) => {
        setItems(items.filter((item) => item._id !== _id));
      });
  }
  
  function addItem(title) {
    console.log(title)
    var id = Date.now();
    var data = {
          name: title, fio: title, _id: id
      };
    const formData  = new FormData();
    formData.append('data', data)
    fetch(`http://127.0.0.1:3000`, {
      mode: "cors",
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: {data:data}
    
    }).then((response) => console.log(response, response.body, response.json()))
  //   .then((response) => {
  //     setItems(
  //       items.concat(data) 
  //   )})
   }

  return (
    <Context.Provider value={{ removeItem }}>
      <div className='wrapper'>
        <h1>Get React!</h1>
        <React.Suspense fallback={<p>loading</p>}>
          <AddItem onCreate={addItem} />
        </React.Suspense>
        {items.length ? <Tab items={items}></Tab> : <p>nothing here</p>}
      </div>
    </Context.Provider>
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
}*/

/*function toggleItem(id) {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      })
    );
  }*/
/*onToggle={toggleItem}*/
/* completed: false*/
