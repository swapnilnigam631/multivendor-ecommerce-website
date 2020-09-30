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
              onChange={(e) => setSearchKeyword(e.target.value)}/>
            <button type="submit">Search</button>
          </form>
        </li>
        
        <li>
         <b> Sort By{''}</b>
          <select name="sortOrder" onChange={sortHandler}>
            <option value="newest">Newest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </li>
        <li>
        <b>State{' '}</b>
          <select name="sortOrder" onChange={sortHandler}>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
<option value="Daman and Diu">Daman and Diu</option>
<option value="Delhi">Delhi</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Puducherry">Puducherry</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jammu and Kashmir">Jammu and Kashmir</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="West Bengal">West Bengal</option>
          </select>
        </li>
      </ul>
      
      <div className="LOGO">
         <img src={require('../images/logo.png')}height="150px" width="250px" />
        </div>
        
      <div className="OOp" >
      <div className="containers">
      <div className="gal ">
        <h1><u>GALLERY</u></h1>
     
       <ul className="slides">
    <input type="radio" name="radio-btn" id="img-1" checked />
    <li className="slide-container">
    <div className="slide">
      <img src="../images/d1.jpg" />
        </div>
    <div className="nav">
      <label for="img-6" className="prev">&#x2039;</label>
      <label for="img-2" className="next">&#x203a;</label>
    </div>
    </li>

    <input type="radio" name="radio-btn" id="img-2" />
    <li className="slide-container">
        <div className="slide">
          <img src="../images/d2.jpg" />
        </div>
    <div className="nav">
      <label for="img-1" className="prev">&#x2039;</label>
      <label for="img-3" className="next">&#x203a;</label>
    </div>
    </li>

    <input type="radio" name="radio-btn" id="img-3" />
    <li className="slide-container">
        <div className="slide">
          <img src="../images/d3.jpg" />
        </div>
    <div className="nav">
      <label for="img-2" className="prev">&#x2039;</label>
      <label for="img-4" className="next">&#x203a;</label>
    </div>
    </li>

    <input type="radio" name="radio-btn" id="img-4" />
    <li className="slide-container">
        <div className="slide">
          <img src="../images/d1.jpg" />
        </div>
    <div className="nav">
      <label for="img-3" className="prev">&#x2039;</label>
      <label for="img-5" className="next">&#x203a;</label>
    </div>
    </li>

    <input type="radio" name="radio-btn" id="img-5" />
    <li className="slide-container">
        <div className="slide">
          <img src="../images/d2.jpg" />
        </div>
    <div className="nav">
      <label for="img-4" className="prev">&#x2039;</label>
      <label for="img-6" className="next">&#x203a;</label>
    </div>
    </li>

    <input type="radio" name="radio-btn" id="img-6" />
    <li className="slide-container">
        <div className="slide">
          <img src="../images/d3.jpg" />
        </div>
    <div className="nav">
      <label for="img-5" className="prev">&#x2039;</label>
      <label for="img-1" className="next">&#x203a;</label>
    </div>
    </li>

    <li className="nav-dots">
      <label for="img-1" className="nav-dot" id="img-dot-1"></label>
      <label for="img-2" className="nav-dot" id="img-dot-2"></label>
      <label for="img-3" className="nav-dot" id="img-dot-3"></label>
      <label for="img-4" className="nav-dot" id="img-dot-4"></label>
      <label for="img-5" className="nav-dot" id="img-dot-5"></label>
      <label for="img-6" className="nav-dot" id="img-dot-6"></label>
    </li>
</ul>

      </div>
    </div>

      
      </div>
      <p><h1>Properties</h1></p>
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
      <div className="c1">
     
       <div className="containers">
       

      <div className="products">
       
        <div className="card">
  <img src="../images/d3.jpg"/>
  <div className="container d-sm-block d-none">
    <h4><b>RAJA Park Hostel</b></h4>
    <p>2BHK</p>
    <p>Rs.51,000/month</p>
  </div>
</div>
<div className="card">
  <img src="../images/d2.jpg"/>
  <div className="container d-sm-block d-none">
    
  <h4><b>RAJA Park Hostel</b></h4>
    <p>2BHK</p>
    <p>Rs.51,000/month</p>
    </div>
</div>
<div className="card">
  <img src="../images/d1.jpg"/>
  <div className="container d-sm-block d-none">
    
  <h4><b>RAJA Park Hostel</b></h4>
    <p>2BHK</p>
    <p>Rs.51,000/month</p>
  </div>
</div>
</div> 
        </div> 
        </div>     
    </>
  );
}
export default HomeScreen;