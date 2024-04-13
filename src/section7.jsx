import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addBasket } from './Slice/BasketSlice';

const Section7 = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => { 
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/products');
                setData(response.data.slice(2,6));
            } catch (error) {
                console.error('Veri alınırken hata oluştu:', error);
            }
        };

        fetchData();
    }, []);

    const dispatch = useDispatch();

    const addedBasket = (product) => {
        dispatch(addBasket(product));
    }

    return (
        <div className='lastproduct flex justify-center gap-6 flex-wrap text-center'>
            {data.map((product) => (
                <p key={product.id}>
                    <img className='w-[330px]' src={product.ProductImage} alt={product.Name} />
                    <h4 className='font-semibold'>{product.Name}</h4>
                    <p className='text-green font-bold'>${product.Price}</p>
                    <button className='productbuton' onClick={() => addedBasket(product)}>Add To Card </button>
                </p>
            ))}
        </div>
    );
};

export default Section7;
