# E-Commerce Store

## 📌 Project Overview

This is an **E-Commerce Store** built using **Node.js, Express, MongoDB, and Pug**. It features product listings, an admin panel for product management, and a clean, minimalistic design using CSS

## 🚀 Features

- **Home Page** with product categories
- **Product Listing Page** (Dynamic data fetched from MongoDB)
- **Add/Delete Products** via an admin panel
- **Session-Based Authentication** (Login required for admin actions)
- **RESTful API Endpoints** for product management
- **Responsive UI** with Bootstrap

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** Pug, CSS
- **Database:** MongoDB (using Mongoose ODM)
- **Authentication:** Express Sessions

## 🔧 Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/SarrahGandhi/Assignment1.git
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 4️⃣ Run the Application

```sh
npm run dev
```

The server will run on **http://localhost:3005**

## 📂 Project Structure

```
/Assignment1
│── /components
│    ├── /admin
│    │    ├── model.js
│    │    ├── controller.js
│    │    ├── routes.js
│    ├── /products
│    │    ├── routes.js
│    │    ├── model.js
│    │    ├── controller.js
│    ├── /furniture
│    │    ├── controller.js
│    │    ├── routes.js
│    │    ├── models.js
│── /public (Static assets)
│── /views (Pug templates)
│── index.js
│── db.js
│── .env
│── package.json
│── README.md
```

## 📌 API Endpoints

| Method | Endpoint               | Description              |
| ------ | ---------------------- | ------------------------ |
| GET    | `/`                    | Home Page                |
| GET    | `/products/list`       | List all products        |
| GET    | `/products/add`        | Show add product form    |
| POST   | `/products/add/submit` | Add a new product        |
| GET    | `/products/delete/:id` | Delete a product         |
| GET    | `/api/list`            | Get all products as JSON |

## 👨‍💻 Author

**Sarrah Gandhi**

## ⚡ Future Enhancements

- Add user authentication & authorization
- Implement product categories & filtering
- Improve UI with animations & better UX
- Add payment gateway integration

## 📜 License
