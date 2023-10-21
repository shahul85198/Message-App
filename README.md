# Message-App

src 
  - components
    -Auth
        - Login.js
        -Signup.js
    - Chat
        - ChatRoom.js
        -MessageInput.js
  - Profile
        - UserProfile.js
        - EditProfile.js
  - Layout
        - Header.js
        - Footer.js

- contexts
        - AuthContext.js
        - ChatContext.js

- services
    - firebase.js
    - authService.js
    - chatService.js


    # tailwind css
      - npm install tailwindcss
      - npx tailwindcss init

   # tailwind.config.js
     - /** @type {import('tailwindcss).Config} */
     module.exports = {
      content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
     }

     # index.css
  -   @tailwind base;
  -    @tailwind components;
   -    @tailwind utilities;