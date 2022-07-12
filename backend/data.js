 import bcrypt from 'bcryptjs'
const data = {
    users:[
        {
            name:'Uday',
            email:'admin@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,

        },
        {
            name:'john',
            email:'user@example.com',
            password:  bcrypt.hashSync('123456'),
            isAdmin: false,
        },
    ],
    products: [
        {
            // _id: "1",
            name: 'Nike Slim Shirt',
            slug: 'Nike-Slim-Shirt',
            category: 'Shirts',
            image: '/image/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: "High Quality Shirt",
        },
        {
            // _id: "2",
            name: 'Adidas Fit Shirt',
            slug: 'Adidas-Fit-Shirt',
            category: 'Shirts',
            image: '/image/p2.jpg',
            price: 250,
            countInStock: 20,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 10,
            description: "High Quality Product",
        },
        {
            // _id: "3",
            name: 'Nike Slim Pant',
            slug: 'Nike-Slim Pant',
            category: ' Pants',
            image: '/image/p3.jpg',
            price: 25,
            countInStock: 15,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 14,
            description: "High Quality Product",
        },
        {
            // _id: "4",
            name: 'Adidas Slim Pant',
            slug: 'Adidas-slim Pant',
            category: ' Pants',
            image: '/image/p4.jpg',
            price: 65,
            countInStock: 5,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 10,
            description: "High Quality Product",
        },
    ],
};
export default data;