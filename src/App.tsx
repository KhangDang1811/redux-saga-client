import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { createProduct } from './actions';
import { FetchProduct, createProductRequest } from './store/todo/action';
import { useSelector } from 'react-redux';
import { getProductState } from './store/todo/selector';

const CreateProductForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  const product = useSelector(getProductState)
  //  console.log("bb",product);
  
  React.useEffect(() => {
    dispatch(FetchProduct());
  }, [dispatch,product]);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createProductRequest({title}));

  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      
      <button type="submit">Create Product</button>
    </form>
    <h2> List</h2>
    {
      product?.map((x:any) =>(
        <ul>
          <li>{x.title}</li>
        </ul>
      ))
    }
     
    </div>
  );
};

export default CreateProductForm;
