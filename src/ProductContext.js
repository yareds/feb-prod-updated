import axios from "axios";
import React, { useState, createContext , useEffect} from "react";
import { useNavigate } from "react-router-dom";


export const ProductContext = createContext();

export function ProductProvider(props) {
  const navigate = useNavigate();
  const [newproducts, setNewProducts] = useState([
 
  ]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
  });
    const fetchProductData = async () => {
    const response = await axios.get ("http://localhost:5000/api/products/allproducts");

      setNewProducts (response.data);
  };

  useEffect (() => {
   fetchProductData();
  }, [])


  // This function will add products into the newproducts array
  const addProduct = (name, price) => {
    // add the logic to insert the product information
    setNewProducts([...newproducts, { id: newproducts.length + 1, name, price },
    ]);
  };

  const { name, price } = newProduct;

  const handleSubmit = async (event) => {
    if (name === "" || price ===""){
      return;
    }

    event.preventDefault();
    addProduct(name, price);
    
     await axios.post ("http://localhost:5000/api/products/addproducts", newProduct)
    // console.log("clear the user input");
    
    setNewProduct({
      name: "",
      price: "",
    });
    navigate("/product-list");
  };

  const handleChange = (event) => {
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
  };

  const handleDelete = (id) => {
      setNewProducts(newproducts.filter((prod) => prod.id !== id));
  };

 
  const handleFilter = (filterCriteria) => {
  // TODO: Add another filter method for sorting stationary and clothing catagories

    filterCriteria === "Price"&&
    setNewProducts(newproducts.filter((product) => product.price > 20))
  
    filterCriteria === "Stationary"&&
    setNewProducts(newproducts.filter((product) => product.catagory ==="Stationary"  ))
  
    filterCriteria === "Clothing"&&
  setNewProducts(newproducts.filter((product) => product.catagory ==="Clothing"  ))
};

  const buttonValue = "X";

  return (
    <ProductContext.Provider
      value={{
        newproducts,
        newProduct,
        handleChange,
        handleSubmit,
        buttonValue,
        handleDelete,
        handleFilter,
       
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
