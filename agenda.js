/*

1) vrtw React 
2) generate react cli ======> npx generate-react-cli component Product
3)"customTemplates": {
        "component": "templates/TemplateName.jsx",
        "style": "templates/TemplateName.module.css",
        "test": "templates/TemplateName.test.js"
      },
4) React Router Dom
5) formik
6)yup
      repassword use oneOf
7) form isvalid and dirty
8) usenavigate




https://gang0x99.postman.co/workspace/a24609f1-844e-4a91-b833-9b3312252391/request/34994899-1b9f5788-041b-4d20-8218-1dbf0829a1aa?sideView=agentMode&tab=body
https://ecommerce.routemisr.com/

<body class="min-h-screen flex flex-col bg-white text-gray-800 font-sans">

  <!-- Navbar -->
  <nav class="flex items-center justify-between px-8 py-4 border-b border-gray-100">
    <div class="flex items-center gap-2">
      <span class="text-green-500 text-2xl"><i class="fas fa-shopping-cart"></i></span>
      <span class="text-2xl font-bold text-gray-900">FreshCart</span>
    </div>
    <div class="flex items-center gap-4 text-gray-500">
      <a href="#" class="hover:text-gray-800 transition-colors"><i class="fab fa-instagram text-lg"></i></a>
      <a href="#" class="hover:text-gray-800 transition-colors"><i class="fab fa-facebook text-lg"></i></a>
      <a href="#" class="hover:text-gray-800 transition-colors"><i class="fab fa-tiktok text-lg"></i></a>
      <a href="#" class="hover:text-gray-800 transition-colors"><i class="fab fa-twitter text-lg"></i></a>
      <a href="#" class="hover:text-gray-800 transition-colors"><i class="fab fa-linkedin text-lg"></i></a>
      <a href="#" class="hover:text-gray-800 transition-colors"><i class="fab fa-youtube text-lg"></i></a>
      <a href="#" class="ml-2 text-gray-700 text-sm hover:text-gray-900 transition-colors">Login</a>
      <a href="#" class="text-gray-700 text-sm hover:text-gray-900 transition-colors">Register</a>
    </div>
  </nav>

  <!-- Main Content -->
  <main class="flex-1 px-44 py-10">
    <h1 class="text-2xl font-normal text-gray-800 mb-6">Register Now :</h1>

    <div class="flex flex-col gap-4 max-w-3xl">

      <div>
        <label class="block text-sm text-gray-700 mb-1">name :</label>
        <input type="text" class="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-gray-500 transition-colors" />
      </div>

      <div>
        <label class="block text-sm text-gray-700 mb-1">email :</label>
        <input type="email" class="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-gray-500 transition-colors" />
      </div>

      <div>
        <label class="block text-sm text-gray-700 mb-1">password :</label>
        <input type="password" id="pwd" class="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-gray-500 transition-colors" />
      </div>

      <div>
        <label class="block text-sm text-gray-700 mb-1">rePassword :</label>
        <input type="password" id="repwd" class="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-gray-500 transition-colors" />
      </div>

      <div>
        <label class="block text-sm text-gray-700 mb-1">phone :</label>
        <input type="tel" class="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-gray-500 transition-colors" />
      </div>

      <div class="flex justify-end">
        <button onclick="handleSubmit()" class="bg-green-500 hover:bg-green-600 active:scale-95 text-white text-sm px-6 py-2 rounded transition-all">
          Register
        </button>
      </div>

    </div>
  </main>

  <!-- Footer -->
  <footer class="bg-gray-100 mt-auto">
    <div class="px-8 py-8 border-b border-gray-200">
      <h2 class="text-xl font-semibold text-gray-800 mb-1">Get the FreshCart app</h2>
      <p class="text-sm text-gray-500 mb-4">We will send you a link, open it on your phone to download the app.</p>
      <div class="flex gap-3">
        <input type="email" placeholder="Email .." class="flex-1 border border-gray-300 rounded px-4 py-2 text-sm outline-none focus:border-gray-400 bg-white" />
        <button class="bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-6 py-2 rounded transition-colors whitespace-nowrap">
          Share App Link
        </button>
      </div>
    </div>

    <div class="px-8 py-4 flex items-center justify-between flex-wrap gap-4">
      <div class="flex items-center gap-3 flex-wrap">
        <span class="text-sm text-gray-600 font-medium">Payment Partners</span>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Amazon_Pay_logo.svg/200px-Amazon_Pay_logo.svg.png" alt="Amazon Pay" class="h-5 object-contain" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/60px-American_Express_logo_%282018%29.svg.png" alt="Amex" class="h-5 object-contain" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/200px-Mastercard_2019_logo.svg.png" alt="Mastercard" class="h-5 object-contain" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/200px-PayPal.svg.png" alt="PayPal" class="h-5 object-contain" />
      </div>
      <div class="flex items-center gap-2">
        <span class="text-sm text-gray-600">Get deliveries with FreshCart</span>
        <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/200px-Download_on_the_App_Store_Badge.svg.png" alt="App Store" class="h-8 object-contain" /></a>
        <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/200px-Google_Play_Store_badge_EN.svg.png" alt="Google Play" class="h-8 object-contain" /></a>
      </div>
    </div>
  </footer>

  <!-- Toast -->
  <div id="toast" class="hidden fixed bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm px-5 py-2.5 rounded-lg z-50"></div>


      */