# Ecommerce Backend

This is the backend for the Ecommerce application built using Java. The backend is responsible for handling business logic, data management, and serving API requests to the frontend.

## Project Structure

- `src/main/java/com/ecommerce/`: Contains the main Java application code.
  - `EcommerceApplication.java`: The entry point of the application.
  - `controller/`: Contains controllers that handle HTTP requests.
    - `ProductController.java`: Manages product-related requests.
  - `model/`: Contains the data models.
    - `Product.java`: Represents the product entity.
  - `service/`: Contains services that implement business logic.
    - `ProductService.java`: Handles product-related operations.
  
- `src/main/resources/`: Contains configuration files.
  - `application.properties`: Configuration settings for the application.

## Getting Started

1. **Prerequisites**: Ensure you have Java and Maven installed on your machine.
2. **Clone the repository**: 
   ```
   git clone <repository-url>
   ```
3. **Navigate to the backend directory**:
   ```
   cd ecommerce-app/backend
   ```
4. **Build the project**:
   ```
   mvn clean install
   ```
5. **Run the application**:
   ```
   mvn spring-boot:run
   ```

## API Endpoints

- **GET /products**: Retrieve a list of all products.
- **GET /products/{id}**: Retrieve a specific product by ID.
- **POST /products**: Create a new product.
- **PUT /products/{id}**: Update an existing product.
- **DELETE /products/{id}**: Delete a product.

## License

This project is licensed under the MIT License. See the LICENSE file for details.