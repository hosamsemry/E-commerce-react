# QuickShop

QuickShop is a simple e-commerce web application built using **React, Redux Toolkit, and React Bootstrap**. It allows users to browse products, manage their carts, and place orders, while administrators can manage products.

## Features

### General Users (Customers)
- Browse products
- View product details
- Add products to the cart
- Checkout and place orders
- View order history

### Admin
- Add new products
- Edit existing products
- Delete products

## Technologies Used
- **Frontend**: React, Redux Toolkit, React Bootstrap
- **Routing**: React Router
- **State Management**: Redux Toolkit
- **API Handling**: Fetch API / Axios

## Installation & Setup

### Prerequisites
- Node.js (>= 14.x)
- npm or yarn

### Steps to Run the Project

1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-username/the-green-basket.git
   cd the-green-basket
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```
   or using yarn:
   ```sh
   yarn install
   ```

3. **Start the Development Server**
   ```sh
   npm start
   ```
   The application should now be running at `http://localhost:3000/`.

## Folder Structure
```
QuickShop/
│── public/
│── src/
│   ├── api/              # API requests
│   ├── components/       # Reusable components
│   ├── pages/            # Page components
│   ├── store/            # Redux store and slices
│   ├── styles/           # CSS files
│   ├── App.js            # Main component
│   ├── index.js          # Entry point
│── package.json
│── README.md
```

## API Endpoints
The app interacts with a backend API for product and user management. Ensure the backend is running before using the application.

| Endpoint         | Method | Description            |
|-----------------|--------|------------------------|
| `/products`     | GET    | Fetch all products     |
| `/products/:id` | GET    | Fetch a single product |
| `/products`     | POST   | Add a new product (Admin only) |
| `/products/:id` | PUT    | Update a product (Admin only) |
| `/products/:id` | DELETE | Delete a product (Admin only) |

## Future Improvements
- Implement user authentication
- Add payment integration
- Enhance UI/UX with better styling

## License
This project is licensed under the MIT License.

---
**Happy Coding! 🚀**

