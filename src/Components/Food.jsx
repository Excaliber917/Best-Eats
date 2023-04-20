import React, { useState } from 'react'
import { data } from '../data/data'

const Food = () => {
    const [food, setFood] = useState(data)
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(null);



    //filter food

    const filterFood = (category, price) => {
        setFood(
            data.filter((item) =>
                (category === null || item.category === category) &&
                (price === null || item.price === price)
            )
        )
        setSelectedCategory(category);
        setSelectedPrice(price);
    }

    return (
        <div className='max-w-[1640px] mx-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-2xl text-center lg:text-4xl md:text-3xl'>Top rated menu items</h1>
            {/* filter row */}
            <div className='flex flex-col lg:flex-row justify-between'>
                {/* filter items */}
                <div>
                    <p className='font-bold text-gray-700'>Item Type</p>
                    <div className='flex justify-center lg:justify-between md:justify-between flex-wrap'>
                        <button className={`border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white ${selectedCategory === null && 'bg-black'}`} onClick={() => filterFood(null, null)}>All</button>
                        <button className={`border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white ${selectedCategory === 'burger' && 'bg-black'}`} onClick={() => filterFood('burger', selectedPrice)}>Burger</button>
                        <button className={`border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white ${selectedCategory === 'pizza' && 'bg-black'}`} onClick={() => filterFood('pizza', selectedPrice)}>Pizza</button>
                        <button className={`border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white ${selectedCategory === 'salad' && 'bg-black'}`} onClick={() => filterFood('salad', selectedPrice)}>Salad</button>
                        <button className={`border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white ${selectedCategory === 'chicken' && 'bg-black'}`} onClick={() => filterFood('chicken', selectedPrice)}>Chicken</button>
                        <button className={`border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white ${selectedCategory === 'chinese' && 'bg-black'}`} onClick={() => filterFood('chinese', selectedPrice)}>Chinese</button>
                    </div>
                </div>
                {/* filter prices */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Price</p>
                    <div className='flex justify-between max-w-[390px] w-full'>
                        <button className={`border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white ${selectedPrice === '$' && 'bg-black'}`} onClick={() => filterFood(selectedCategory, '$')}>$</button>
                        <button className={`border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white ${selectedPrice === '$$' && 'bg-black'}`} onClick={() => filterFood(selectedCategory, '$$')}>$$</button>
                        <button className={`border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white ${selectedPrice === '$$$' && 'bg-black'}`} onClick={() => filterFood(selectedCategory, '$$$')}>$$$</button>
                        <button className={`border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white ${selectedPrice === '$$$$' && 'bg-black'}`} onClick={() => filterFood(selectedCategory, '$$$$')}>$$$$</button>
                    </div>
                </div>
            </div>


            {/* dispaly foods */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {
                    food.map((item, index) => (
                        <div key={index} className='border shadow-lg hover:scale-105 duration-300 rounded-lg'>
                            <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg' />
                            <div className='flex justify-between px-2 py-4'>
                                <p className='font-bold'>{item.name}</p>
                                <p><span className='bg-orange-600 text-white p-1 rounded-full cursor-pointer'>{item.price}</span></p>
                            </div>

                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Food
