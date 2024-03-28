# Ridley's Fullstack .NET/React Template

## Description

This is a full-stack web application built with .NET Core 8 (LTS) on the backend, serving a React frontend. The project utilizes various libraries to enhance development experience including Entity Framework Core as an ORM and AutoMapper for streamlined mapping operations. It follows the Repository Pattern for efficient database management, with a service layer housing the business logic and controllers routing API calls.

One of the standout features of this project is its innovative use of Generics and inheritance concepts to automate CRUD (Create, Read, Update, Delete) operations. By simply injecting the appropriate DTO (Data Transfer Object) models and inheriting from the root classes in the Repository, Service, and Controller layers, a basic CRUD functionality is automatically generated. This significantly reduces development time for common CRUD operations such as GetAll, GetById, Create, Update, and Delete.

To further streamline development, the project includes a pre-configured CRUD example for a Company entity. Users can easily replicate the model files (Company, CompanyCreateDTO, CompanyGetDTO, and CompanyUpdateDTO), create and inject the necessary classes (emulating the structure of the provided CompanyController, CompanyService, and CompanyRepository), and configure the entity for the new table. The new layers will inherit the CRUD functionality, simplifying the process for adding new entities.

On the client-side, the project provides a clean `<App />` component for rendering, along with an example of how a request would be made. MaterialUI v5 is incorporated for added convenience in styling and UI components.

**Note**: Don't forget to set your connection string in `appsettings.json`.

## Installation

1. Clone the repository.
2. Open solution with Visual Studio or your IDE of choice.
3. Edit appsettings.json and change the DefaultConnection string value to your connection.
4. Run the app.
5. After dependencies resolve (could take a while depending on internet speed) two pages should load, swagger doc and your react frontend.

## Usage

1. Navigate through the provided example CRUD functionality for the Company entity to understand the project structure and implementation.
2. Replicate the steps followed for the Company entity to add CRUD functionality for new entities.
3. Utilize MaterialUI v5 components for styling and UI enhancements.
4. Make API requests from the React frontend to interact with the backend services.
5. Customize and extend the project as per your requirements.

## Credits

This project was developed by [Marcos Ridley](https://www.linkedin.com/in/marcosridley/). Forks and added functionality is definitely welcomed, this was initially done for my convenience but I was convinced by a friend to share it with the community.

## Acknowledgements

Special thanks to the creators and maintainers of .NET Core, React, Entity Framework Core, AutoMapper, MaterialUI, and other libraries used in this project. Their efforts have greatly contributed to the development of this application.

## To-Do // Roadmap

1. Add out of the box JWT functionality for the frontend and backend.

