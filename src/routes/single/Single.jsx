import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from '../../api/axios';
import "../single/Single.css"; // Import the CSS file
// import Loading from "../../assets/Loading.mp4"

const Single = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios(`/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching product data');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h1 style={{color:"white"}} className='loading'>Loading...</h1>;
  if (error) return <p>{error}</p>;

  return (
    <div className="single-container">
      <img className='single-img'
        src={product.image}
        alt={product.title}
      />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <strong>${product.price}</strong>
      <br />
      <Link className='single-btn' to="/home">Go Back</Link>
    </div>
  );
};

export default Single;
