import React from 'react';

const products = [
  {
    id: 1,
    name: 'Chocolate Bar',
    cost: '$5.99',
    image: 'https://example.com/chocolate1.jpg',
  },
  {
    id: 2,
    name: 'Dark Chocolate',
    cost: '$7.99',
    image: 'https://example.com/chocolate2.jpg',
  },
  {
    id: 3,
    name: 'Milk Chocolate',
    cost: '$6.49',
    image: 'https://example.com/chocolate3.jpg',
  },
  // Add more products as needed
];

const ProductsPart = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-6">
      {products.map((product) => (
        <div key={product.id} className="max-w-xs rounded-lg shadow-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.cost}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsPart;
