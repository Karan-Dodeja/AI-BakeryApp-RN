# BakeryApp API Documentation

## Endpoints
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
