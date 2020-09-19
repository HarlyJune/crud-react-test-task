import React, { useEffect } from "react";
import Tab from "./Tab/Tab";
import Context from "./context";
const AddItem = React.lazy(() => import("./Tab/AddItem"));

function App() {
  const [items, setItems] = React.useState([]);
  const [keys, setKeys] = React.useState([]);

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
        resetKeys(items);
        setItems(items);
      });
  }, []);

  function unique(array){
      return array.filter((v, i, a) => a.indexOf(v) === i)
  }

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

  function addItem(data) {
    fetch(`http://localhost:3000/api/records`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: data
      }),
    }).then((resp) =>
    resp.json().then((newItem) => {    
        var newItems = [...items, newItem];
        resetKeys(newItems);
        setItems(newItems);
      })
    );
  }

  function resetKeys(newItems){
    var newKeys = [];
    newItems.forEach((item) => {
      if(item.data){
        Object.keys(item.data).forEach((key) => newKeys.push(key));
      }
    });
    setKeys(unique(newKeys));
  }

  function EditItems(_id, data) {
    fetch(`http://localhost:3000/api/records/${_id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: data,
      }),
    }).then((resp) =>
      resp.json().then((newItem) => {
        items
          .filter((item) => item._id === _id)     //??
          .forEach((item) => (item.data = newItem.data));
        resetKeys(items);
        setItems([...items]);
      })
    );
  }


  // function callFunction(fun){
  //   var a = 4;
  //   var b = 5;
  //   return fun(a, b);
  // }

  // var f = (arg1) => arg1 + "some";

  // var result = callFunction(f);
  // result == "4some"



  return (
    <Context.Provider value={{ removeItem, EditItems }}>
      <div className='wrapper'>
        <h1>Get React!</h1>
        <React.Suspense fallback={<p>loading</p>}>
          <AddItem onCreate={addItem} keys={keys} setKeys={setKeys} />
        </React.Suspense>
        {items.length ? <Tab items={items} keys={keys} ></Tab> : <p>nothing here</p>}    {/* ??  */}
      </div>
    </Context.Provider>
  );
}
export default App;
