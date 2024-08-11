import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "../../api/axios";
import "../home/Home.css"; // Import the CSS file

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios('/products').then((response) => {
      setProducts(response.data);
    });
  }, []);
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
<div>
<input  
                    type="text" 
                    placeholder= " 🔍  Search products..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='search-input'
                />
    <div className='home'>
       
      <ul className='product-list'>
        {
          filteredProducts.map((product) => (
            <li key={product.id}>
              <Link to={`/single/${product.id}`}>
                <img src={product.image} alt={product.title} />
              </Link>
              <h2>{product.title}</h2>
              <p className='products-description'>{product.description.slice(0, 60) + "..."}</p>
              <strong>${product.price}</strong>
            </li>
          ))
        }
      </ul>
    </div>
</div>
  );
};

export default Home;
