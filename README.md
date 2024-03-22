# Book Store Node.js Application

Welcome to the Book Store Node.js Application! This web application is built using Node.js, Express.js, EJS templating engine, and MongoDB. Users can register, login, browse books, add books to their cart, and make purchases. The application features user authentication using JWT tokens, user profile management, and password reset functionality using OTP via email.

## Email Service Configuration

You can configure the email service used for sending OTPs by modifying the `emailService.js` file. Make sure to replace the `EMAIL` and `PASSWORD` placeholders with your email address and SMTP password, respectively.

## Features

- **User Registration:** Users can sign up for an account by providing necessary details.
- **User Authentication:** Authentication is required to access most of the application's features. JWT tokens are used for session management.
- **Book Management:** Admin users can add new books to the store.
- **Shopping Cart:** Users can add books to their cart for purchase.
- **User Profile:** Users can view and edit their profile information.
- **Password Reset:** Users can reset their password using OTP sent to their registered email address.
- **Logging out:** Users can log out of their account securely.

## Screenshots

![App Screenshot](https://github.com/puran66/Book-Store-NodeJs/blob/main/public/images/login.png)
![App Screenshot](https://github.com/puran66/Book-Store-NodeJs/blob/main/public/images/home.png)
![App Screenshot](https://github.com/puran66/Book-Store-NodeJs/blob/main/public/images/addBook.png)
![App Screenshot](https://github.com/puran66/Book-Store-NodeJs/blob/main/public/images/cart.png)
![App Screenshot](https://github.com/puran66/Book-Store-NodeJs/blob/main/public/images/payment.png)
![App Screenshot](https://github.com/puran66/Book-Store-NodeJs/blob/main/public/images/profile.png)
![App Screenshot](https://github.com/puran66/Book-Store-NodeJs/blob/main/public/images/otp.png)
![App Screenshot](https://github.com/puran66/Book-Store-NodeJs/blob/main/public/images/password.png)

## Routes

### User Routes (`user.route.js`)

- `GET /signUp:` Render sign-up page.
- `POST /signUp:` Register a new user.
- `GET /login:` Render login page.
- `POST /login:` Log in existing user.
- `GET /logout:` Log out user.

### Book Store Routes (`bookStore.route.js`)

- `GET /book-store:` View the book store.
- `GET /addBook:` Render page for adding a new book.
- `POST /addBook:` Add a new book to the store.
- `GET /profile:` View user profile.
- `GET /edit-profile:` Render page for editing user profile.
- `POST /update-profile:` Update user profile.
- `GET /otpValidate:` Render OTP validation page.
- `GET /generate_otp:` Generate and send OTP to user's email.
- `POST /change_password:` Render page for changing password.
- `POST /new_password:` Change user password.
- `GET /cart:` View shopping cart.
- `GET /addCartItems/:id:` Add book to cart.
- `GET /cart-quantity-plus/:id:` Increase quantity of book in cart.
- `GET /cart-quantity-minus/:id:` Decrease quantity of book in cart.
- `GET /delete-cart-item/:id:` Remove item from cart.
- `GET /payment:` Render payment page.
- `GET /thank-you:` Render thank you page after successful purchase.


## Technologies Used

- Node.js
- Express.js
- MongoDB
- EJS
- JWT (JSON Web Tokens)
- Nodemailer (for sending emails)
- Multer (for handling file uploads)

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you encounter any problems or have suggestions for improvements.


