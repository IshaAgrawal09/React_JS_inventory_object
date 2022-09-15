import "./App.css";
import React, { useState } from "react";
function App() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState([]);

  const addProduct = () => {
    if (id === "" || name === "" || price === "" || quantity === "") {
      setError("Fields can't be Empty!");
    } else {
      setResult([
        ...result,
        {
          id: id,
          name: name,
          price: price,
          quantity: quantity,
        },
      ]);
      setId("");
      setName("");
      setPrice("");
      setQuantity("");
      setError("");
    }
  };
  const remove = (index) => {
    setResult(
      result.filter((item, ind) => {
        if (index == ind) {
          return false;
        }
        return item;
      })
    );
  };
  console.log(result);
  return (
    <div className="App">
      <div className="takeInputs">
        <table>
          <tbody>
            <tr>
              <td>Product ID</td>
              <td>
                <input
                  type="text"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Product Name</td>
              <td>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Product Price</td>
              <td>
                <input
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </td>
            </tr>
            <td>Quantity</td>
            <td>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </td>
          </tbody>
        </table>
        <button onClick={addProduct}>ADD PRODUCT</button>
      </div>
      <p id="error">{error}</p>
      <div className="showData">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {result.map((item, index) => {
              return (
                <>
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>${item.price}.00</td>
                    <td contentEditable="true" id="quantity">
                      {item.quantity}
                    </td>
                    <td id="delete" onClick={() => remove(index)}>
                      X
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
