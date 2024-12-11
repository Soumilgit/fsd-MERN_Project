
# Folder structure:
Here's the folder structure of the repository :
```

LICENSE
README.md
backend
│  ├─ Main-Files
│  │  ├─ dbConnection.js
│  │  ├─ error.js
│  │  ├─ reservation.js
│  │  ├─ reservation1.js
│  │  └─ reservationRoute.js
│  ├─ app.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ server.js
│  └─ vercel.json
└─ frontend
   ├─ .eslintrc.cjs
   ├─ .gitignore
   ├─ README.md
   ├─ eslint.config.js
   ├─ index.html
   ├─ package-lock.json
   ├─ package.json
   ├─ public
   │  ├─ about.png
   │  ├─ anish.png
   │  ├─ background.svg
   │  ├─ breakfast1.png
   │  ├─ brownie.png
   │  ├─ butterchicken.png
   │  ├─ butternaan.png
   │  ├─ butterpaneer.png
   │  ├─ butterroti.png
   │  ├─ center.svg
   │  ├─ dalmakhani.jpeg
   │  ├─ dinner1.jpeg
   │  ├─ dinner2.png
   │  ├─ dinner3.png
   │  ├─ dinner4.png
   │  ├─ dinner5.png
   │  ├─ dinner6.png
   │  ├─ fast_delivery.svg
   │  ├─ hero1.png
   │  ├─ hero2.png
   │  ├─ logo.png
   │  ├─ logo.svg
   │  ├─ logo1.png
   │  ├─ logo_noBg.png
   │  ├─ lunch1.png
   │  ├─ muttonrogan.png
   │  ├─ notFound.svg
   │  ├─ quality_food.svg
   │  ├─ rasmalai.png
   │  ├─ reservation.png
   │  ├─ reservation_bg.png
   │  ├─ reserve.svg
   │  ├─ review_1.png
   │  ├─ review_2.png
   │  ├─ review_3.png
   │  ├─ rohan.png
   │  ├─ sandwich.png
   │  ├─ super_taste.svg
   │  ├─ tastyfood.png
   │  ├─ team_member_1.png
   │  ├─ team_member_2.png
   │  ├─ team_member_3.png
   │  ├─ team_member_4.png
   │  ├─ threelines.svg
   │  ├─ vite.svg
   │  └─ whoweare.png
   ├─ src
   │  ├─ App.css
   │  ├─ App.jsx
   │  ├─ Pages
   │  │  ├─ AF.jsx
   │  │  ├─ AboutReadMore.css
   │  │  ├─ AboutReadMore.jsx
   │  │  ├─ AuthForm.css
   │  │  ├─ ContactForm.css
   │  │  ├─ Contactus.jsx
   │  │  ├─ Home
   │  │  │  └─ Home.jsx
   │  │  ├─ Login.css
   │  │  ├─ Login.jsx
   │  │  ├─ Register.css
   │  │  ├─ Register.jsx
   │  │  └─ Success
   │  │     └─ Success.jsx
   │  ├─ assets
   │  │  └─ react.svg
   │  ├─ components
   │  │  ├─ About.jsx
   │  │  ├─ Footer.jsx
   │  │  ├─ Getnewsandoffers.jsx
   │  │  ├─ HeroSection.jsx
   │  │  ├─ Menu.jsx
   │  │  ├─ Navbar.jsx
   │  │  ├─ Qualities.jsx
   │  │  ├─ Reservation.jsx
   │  │  ├─ SubscribeSection.css
   │  │  ├─ Success.jsx
   │  │  └─ TopBar.jsx
   │  ├─ main.jsx
   │  └─ restApi.json
   └─ vite.config.js
```

  <br>Setup Instructions</br>
<br>1. Backend Configuration:</br>
<br>o Navigate to the backend folder and create a folder named config.</br>
<br>o Inside the config folder, create a file named config.env.</br>
<br>o Add the following environment variables in config.env:</br>
<br> PORT: Port on which the backend server will run (e.g., 4000).</br>
<br>MONGO_URI: MongoDB connection URI.</br>
<br>FRONTEND_URL: URL of the frontend application (e.g.,
http://localhost:5173).</br>
</p>
<p>
<br>2. Install Dependencies:</br>
<br>o Run npm install in both the frontend and backend folders to install the
necessary dependencies.</br>
</p>
<p>
<br>3. Run the Application:</br>
<br>o Start the backend server by running npm start in the backend folder.</br>
<br>o Start the frontend server by running npm run dev in the frontend folder.</br>
</p>
<p>
4. Open the application in your browser at http://localhost:5173.
</p>
