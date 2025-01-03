# BakeryApp API Documentation

## Endpoints

### 1. Create a new bakery item
- **HTTP Method**: POST
- **URL**: `/api/bakery/items`
- **Request Body**:
  ```json
  {
    "name": "Chocolate Cake",
    "price": 15.99,
    "description": "Delicious chocolate cake",
    "category": "Cakes"
  }
  ```
- **Response**:
  - **201 Created**:
    ```json
    {
      "id": 1,
      "name": "Chocolate Cake",
      "price": 15.99,
      "description": "Delicious chocolate cake",
      "category": "Cakes"
    }
    ```
  - **400 Bad Request**: Invalid input data

### 2. Get all bakery items
- **HTTP Method**: GET
- **URL**: `/api/bakery/items`
- **Response**:
  - **200 OK**:
    ```json
    [
      {
        "id": 1,
        "name": "Chocolate Cake",
        "price": 15.99,
        "description": "Delicious chocolate cake",
        "category": "Cakes"
      },
      {
        "id": 2,
        "name": "Blueberry Muffin",
        "price": 3.99,
        "description": "Fresh blueberry muffin",
        "category": "Muffins"
      }
    ]
    ```

### 3. Get a specific bakery item
- **HTTP Method**: GET
- **URL**: `/api/bakery/items/{id}`
- **Response**:
  - **200 OK**:
    ```json
    {
      "id": 1,
      "name": "Chocolate Cake",
      "price": 15.99,
      "description": "Delicious chocolate cake",
      "category": "Cakes"
    }
    ```
  - **404 Not Found**: Item not found

### 4. Update a bakery item
- **HTTP Method**: PUT
- **URL**: `/api/bakery/items/{id}`
- **Request Body**:
  ```json
  {
    "name": "Updated Chocolate Cake",
    "price": 17.99,
    "description": "Even more delicious chocolate cake",
    "category": "Cakes"
  }
  ```
- **Response**:
  - **200 OK**:
    ```json
    {
      "id": 1,
      "name": "Updated Chocolate Cake",
      "price": 17.99,
      "description": "Even more delicious chocolate cake",
      "category": "Cakes"
    }
    ```
  - **400 Bad Request**: Invalid input data
  - **404 Not Found**: Item not found

### 5. Delete a bakery item
- **HTTP Method**: DELETE
- **URL**: `/api/bakery/items/{id}`
- **Response**:
  - **204 No Content**: Item deleted successfully
  - **404 Not Found**: Item not found

### 6. User Registration
- **HTTP Method**: POST
- **URL**: `/api/users/register`
- **Request Body**:
  ```json
  {
    "username": "john_doe",
    "password": "password123",
    "email": "john@example.com"
  }
  ```
- **Response**:
  - **201 Created**:
    ```json
    {
      "id": 1,
      "username": "john_doe",
      "email": "john@example.com"
    }
    ```
  - **400 Bad Request**: Invalid input data

### 7. User Login
- **HTTP Method**: POST
- **URL**: `/api/users/login`
- **Request Body**:
  ```json
  {
    "username": "john_doe",
    "password": "password123"
  }
  ```
- **Response**:
  - **200 OK**:
    ```json
    {
      "token": "jwt_token_here"
    }
    ```
  - **401 Unauthorized**: Invalid credentials

### 8. Get User Profile
- **HTTP Method**: GET
- **URL**: `/api/users/profile`
- **Headers**:
  - **Authorization**: Bearer `jwt_token_here`
- **Response**:
  - **200 OK**:
    ```json
    {
      "id": 1,
      "username": "john_doe",
      "email": "john@example.com"
    }
    ```
  - **401 Unauthorized**: Invalid or missing token

### 9. Update User Profile
- **HTTP Method**: PUT
- **URL**: `/api/users/profile`
- **Headers**:
  - **Authorization**: Bearer `jwt_token_here`
- **Request Body**:
  ```json
  {
    "username": "john_doe_updated",
    "email": "john_updated@example.com"
  }
  ```
- **Response**:
  - **200 OK**:
    ```json
    {
      "id": 1,
      "username": "john_doe_updated",
      "email": "john_updated@example.com"
    }
    ```
  - **400 Bad Request**: Invalid input data
  - **401 Unauthorized**: Invalid or missing token

### 10. Logout User
- **HTTP Method**: POST
- **URL**: `/api/users/logout`
- **Headers**:
  - **Authorization**: Bearer `jwt_token_here`
- **Response**:
  - **200 OK**: User logged out successfully
  - **401 Unauthorized**: Invalid or missing token

### 11. Create a new order
- **HTTP Method**: POST
- **URL**: `/api/orders`
- **Headers**:
  - **Authorization**: Bearer `jwt_token_here`
- **Request Body**:
  ```json
  {
    "items": [
      {
        "itemId": 1,
        "quantity": 2
      },
      {
        "itemId": 2,
        "quantity": 1
      }
    ],
    "totalPrice": 35.97
  }
  ```
- **Response**:
  - **201 Created**:
    ```json
    {
      "orderId": 1,
      "userId": 1,
      "items": [
        {
          "itemId": 1,
          "quantity": 2
        },
        {
          "itemId": 2,
          "quantity": 1
        }
      ],
      "totalPrice": 35.97,
      "status": "Pending"
    }
    ```
  - **400 Bad Request**: Invalid input data
  - **401 Unauthorized**: Invalid or missing token

### 12. Get all orders
- **HTTP Method**: GET
- **URL**: `/api/orders`
- **Headers**:
  - **Authorization**: Bearer `jwt_token_here`
- **Response**:
  - **200 OK**:
    ```json
    [
      {
        "orderId": 1,
        "userId": 1,
        "items": [
          {
            "itemId": 1,
            "quantity": 2
          },
          {
            "itemId": 2,
            "quantity": 1
          }
        ],
        "totalPrice": 35.97,
        "status": "Pending"
      }
    ]
    ```

### 13. Get a specific order
- **HTTP Method**: GET
- **URL**: `/api/orders/{orderId}`
- **Headers**:
  - **Authorization**: Bearer `jwt_token_here`
- **Response**:
  - **200 OK**:
    ```json
    {
      "orderId": 1,
      "userId": 1,
      "items": [
        {
          "itemId": 1,
          "quantity": 2
        },
        {
          "itemId": 2,
          "quantity": 1
        }
      ],
      "totalPrice": 35.97,
      "status": "Pending"
    }
    ```
  - **404 Not Found**: Order not found
  - **401 Unauthorized**: Invalid or missing token

### 14. Update an order status
- **HTTP Method**: PUT
- **URL**: `/api/orders/{orderId}`
- **Headers**:
  - **Authorization**: Bearer `jwt_token_here`
- **Request Body**:
  ```json
  {
    "status": "Completed"
  }
  ```
- **Response**:
  - **200 OK**:
    ```json
    {
      "orderId": 1,
      "userId": 1,
      "items": [
        {
          "itemId": 1,
          "quantity": 2
        },
        {
          "itemId": 2,
          "quantity": 1
        }
      ],
      "totalPrice": 35.97,
      "status": "Completed"
    }
    ```
  - **400 Bad Request**: Invalid input data
  - **404 Not Found**: Order not found
  - **401 Unauthorized**: Invalid or missing token

### 15. Delete an order
- **HTTP Method**: DELETE
- **URL**: `/api/orders/{orderId}`
- **Headers**:
  - **Authorization**: Bearer `jwt_token_here`
- **Response**:
  - **204 No Content**: Order deleted successfully
  - **404 Not Found**: Order not found
  - **401 Unauthorized**: Invalid or missing token

### 16. Create a new category
- **HTTP Method**: POST
- **URL**: `/api/categories`
- **Headers**:
  - **Authorization**: Bearer `jwt_token_here`
- **Request Body**:
  ```json
  {
    "name": "Cakes"
  }
  ```
- **Response**:
  - **201 Created**:
    ```json
    {
      "categoryId": 1,
      "name": "Cakes"
    }
    ```
  - **400 Bad Request**: Invalid input data
  - **401 Unauthorized**: Invalid or missing token

### 17. Get all categories
- **HTTP Method**: GET
- **URL**: `/api/categories`
- **Response**:
  - **200 OK**:
    ```json
    [
      {
        "categoryId": 1,
        "name": "Cakes"
      },
      {
        "categoryId": 2,
        "name": "Muffins"
      }
    ]
    ```

### 18. Get a specific category
- **HTTP Method**: GET
- **URL**: `/api/categories/{categoryId}`
- **Response**:
  - **200 OK**:
    ```json
    {
      "categoryId": 1,
      "name": "Cakes"
    }
    ```
  - **404 Not Found**: Category not found

### 19. Update a category
- **HTTP Method**: PUT
- **URL**: `/api/categories/{categoryId}`
- **Headers**:
  - **Authorization**: Bearer `jwt_token_here`
- **Request Body**:
  ```json
  {
    "name": "Updated Cakes"
  }
  ```
- **Response**:
  - **200 OK**:
    ```json
    {
      "categoryId": 1,
      "name": "Updated Cakes"
    }
    ```
  - **400 Bad Request**: Invalid input data
  - **404 Not Found**: Category not found
  - **401 Unauthorized**: Invalid or missing token

### 20. Delete a category
- **HTTP Method**: DELETE
- **URL**: `/api/categories/{categoryId}`
- **Headers**:
  - **Authorization**: Bearer `jwt_token_here`
- **Response**:
  - **204 No Content**: Category deleted successfully
  - **404 Not Found**: Category not found
  - **401 Unauthorized**: Invalid or missing token
