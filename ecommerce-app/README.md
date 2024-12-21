# Ecommerce Application

This is an ecommerce web application built using Ionic for the frontend and Java for the backend. The application allows users to browse products, add them to a cart, and manage their orders.

## Project Structure

The project is organized into two main directories: `src` for the frontend and `backend` for the backend services.

### Frontend (Ionic)

- **src/app**: Contains the main application components and modules.
  - `app.component.ts`: Defines the root component.
  - `app.module.ts`: Main module that imports necessary modules and declares components.
  - `app-routing.module.ts`: Sets up routing for the application.

- **src/assets**: Contains static assets such as images and icons.

- **src/environments**: Contains environment-specific settings.
  - `environment.ts`: Development settings.
  - `environment.prod.ts`: Production settings.

- **src/pages**: Contains the different pages of the application.
  - `home`: Home page components.
  - `product`: Product detail page components.
  - `cart`: Shopping cart page components.

- **src/services**: Contains services for data handling.
  - `product.service.ts`: Service for managing product data.

- **src/theme**: Contains global SCSS variables.
  - `variables.scss`: SCSS variables used throughout the application.

- **src/global.scss**: Global styles for the application.

- **src/index.html**: Main HTML file serving as the entry point.

### Backend (Java)

- **backend/src/main/java/com/ecommerce**: Contains the Java backend application code.
  - `EcommerceApplication.java`: Main entry point for the backend application.
  - `controller`: Contains controllers for handling HTTP requests.
    - `ProductController.java`: Manages product-related requests.
  - `model`: Contains data models.
    - `Product.java`: Represents the product entity.
  - `service`: Contains business logic.
    - `ProductService.java`: Manages product operations.

- **backend/src/main/resources**: Contains configuration files.
  - `application.properties`: Configuration properties for the backend application.

- **backend/pom.xml**: Maven configuration file for managing dependencies.

## Getting Started

To run the application, follow these steps:

1. **Frontend Setup**:
   - Navigate to the `src` directory.
   - Install dependencies using `npm install`.
   - Run the application using `ionic serve`.

2. **Backend Setup**:
   - Navigate to the `backend` directory.
   - Build the project using Maven with `mvn clean install`.
   - Run the application using `mvn spring-boot:run`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.