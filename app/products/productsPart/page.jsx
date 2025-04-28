import React from 'react';

const products = [
  {
    id: 1,
    name: 'Ferrero Rosher',
    cost: '$20.99',
    image: '/image/ferrero.jpg',
  },
  {
    id: 2,
    name: 'Dubai Chocolate',
    cost: '$50.99',
    image: '/image/dubai.jpg',
  },
  {
    id: 3,
    name: 'Celebration',
    cost: '$21.49',
    image: '/image/celebration.jpg',
  },
  {
    id: 4,
    name: 'Bounty',
    cost: '$10.49',
    image: '/image/bounty.jpg',
  },
  {
    id: 5,
    name: 'Mars',
    cost: '$10.49',
    image: '/image/mars.jpg',
  },
  {
    id: 6,
    name: 'Snickers',
    cost: '$10.49',
    image: '/image/snickers.jpg',
  },
  {
    id: 7,
    name: 'Rafaello',
    cost: '$18.49',
    image: '/image/rafaello.jpg',
  },
  {
    id: 8,
    name: 'Mone',
    cost: '$6.49',
    image: '/image/mone.jpg',
  },
  {
    id: 9,
    name: 'Alyonka',
    cost: '$14.49',
    image: '/image/alenka.jpg',
  },
  {
    id: 10,
    name: 'Kinder',
    cost: '$18.49',
    image: '/image/kinder.jpg',
  },
  {
    id: 11,
    name: 'Merci',
    cost: '$8.49',
    image: '/image/merci.jpg',
  },
  {
    id: 12,
    name: 'Ritter Sport',
    cost: '$22.49',
    image: '/image/ritter.jpg',
  },

];

const ProductsPart = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-6">
      {products.map((product) => (
        <div key={product.id}  className="w-[300px] border border-white text-center pb-2 rounded-lg shadow-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-[#E2603B] font-semibold">{product.name}</h3>
            <p className="text-[#F9E0D9]">{product.cost}</p>
          </div>
          <button className="w-[160px] h-[50px] text-[18px] border bg-gradient-to-r from-[#E2603B] via-[#89393B] rounded-tr-[60px] text-[#F9E0D9] rounded-bl-[60px] hover:bg-[#E2603B] duration-300 cursor-pointer max-sm:mx-auto">Add Product</button>
        </div>
      ))}
    </div>
  );
};

export default ProductsPart;
