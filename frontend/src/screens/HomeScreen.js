import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Rating from '../components/Rating';

function HomeScreen(props) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const category = props.match.params.id ? props.match.params.id : '';
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(listProducts(category));

    return () => {
      //
    };
  }, [category]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };
  const sortHandler = (e) => {
    setSortOrder(e.target.value);
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };

  return (
    
    <>
   
      {category && <h2>{category}</h2>}
      
      <ul className="filter">
        <li>
          <form onSubmit={submitHandler}>
            <input
              name="searchKeyword"
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </li>
        
        <li>
         <b> Sort By{' '}</b>
          <select name="sortOrder" onChange={sortHandler}>
            <option value="">Newest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </li>
        <li>
        <b>State{' '}</b>
          <select name="sortOrder" onChange={sortHandler}>
            <option value="rajasthan">Rajasthan</option>
            <option value="uttarpradesh">UttarPradesh</option>
            <option value="maharashtra">Maharashtra</option>
            <option value="punjab">Punjab</option>
            <option value="tamil nadu">Tamil Nadu</option>
            <option value="karnataka">Karnataka</option>
            <option value="jammu and kashmir">Jammu and Kashmir</option>
            <option value="bihar">Bihar</option>
            <option value="west bengal">West Bengal</option>
            <option value="gujarat">Gujarat</option>
            <option value="andhra pradesh">Andhra Pradesh</option>
            <option value="telangana">Telangana</option>
            <option value="odisha">Odisha</option>
            <option value="haryana">Haryana</option>
          </select>
        </li>
      </ul>
      <div className="OOp" >
        <li>
          SEARCH AS 
        </li>
        <div className="button1" onClick={(e) => setSearchKeyword('boys')}>
          <img src={require('../images/boys.png')}height="100px" width="100px" />
        
        </div>
        
      <div className="button2"onClick={(e) => setSearchKeyword('girls')}>
        <img src={require('../images/girls.png')}height="100px" width="100px" />
      
      </div>
      
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <ul className="products">
          {products.map((product) => (
            <li key={product._id}>
              <div className="product">
                <Link to={'/product/' + product._id}>
                  <img
                    className="product-image"
                    src={product.image}
                    alt="product"
                  />
                </Link>
                <b>
                <div className="product-name" >
                  <Link to={'/product/' + product._id}>{product.name}</Link>
                </div>
                <div className="product-brand">{product.brand}</div>
                <div className="product-price">Rs. {product.price}</div></b>
                <div className="product-rating">
                  <Rating
                    value={product.rating}
                    text={product.numReviews + ' reviews'}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      
    </>
  );
}
export default HomeScreen;