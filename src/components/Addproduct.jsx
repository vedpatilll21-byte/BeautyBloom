import { useState } from "react";
import { supabase } from "../supabase.js";
import "./AddProduct.css";

 export function AddProduct() {
  const [pname, setPname] = useState("");
  const [des, setDes] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [img, setImg] = useState("");

async function handleAdd() {
    await supabase.from("products").insert({ pname: pname, des: des, price: price ,category: category, img: img});
    setPname("");
    setDes("");
    setPrice("");
    setCategory("");
    setImg("");
}

  return (
    <div className="add-product-container">
      <h2>Add Product</h2>

      <label>Product Name</label>
      <input
        type="text"
        value={pname}
        onChange={(e) => setPname(e.target.value)}
      />

      <label>Description</label>
      <input
        type="text"
        value={des}
        onChange={(e) => setDes(e.target.value)}
      />

      <label>Price</label>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <label>Category</label>
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <label>Image URL</label>
      <input
        type="text"
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />

      <button onClick={handleAdd}>Add Product</button>
    </div>
  );
}