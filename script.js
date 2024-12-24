// Save user data in sessionStorage (simulate cache) for Register Page
// document.getElementById('registerForm')?.addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent default form submission

//     // Get form values
//     const name = document.getElementById('name').value.trim();
//     const username = document.getElementById('username').value.trim();
//     const password = document.getElementById('password').value.trim();

//     if (name && username && password) {
//         // Store data in sessionStorage
//         sessionStorage.setItem('name', name);
//         sessionStorage.setItem('username', username);
//         sessionStorage.setItem('password', password);

//         // Display success message
//         const messageElement = document.getElementById('message');
//         if (messageElement) {
//             messageElement.innerHTML = `
//                 <div class="alert alert-success">Registration successful! Redirecting to login page...</div>
//             `;
//         }

//         // Redirect to Login Page after delay
//         setTimeout(() => {
//             window.location.href = 'login.html';
//         }, 2000);
//     } else {
//         alert('All fields are required!');
//     }
// });

// Validate login data for Login Page
// document.getElementById('loginForm')?.addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent default form submission

//     // Get form values
//     const loginUsername = document.getElementById('loginUsername').value.trim();
//     const loginPassword = document.getElementById('loginPassword').value.trim();

//     // Get stored data
//     const storedUsername = sessionStorage.getItem('username');
//     const storedPassword = sessionStorage.getItem('password');

//     // Ensure sessionStorage data exists and matches the login credentials
//     if (storedUsername && storedPassword && loginUsername === storedUsername && loginPassword === storedPassword) {
//         alert('Login successful! Redirecting to dashboard...');
//         window.location.href = 'dashboard.html'; // Redirect to Dashboard
//     } else {
//         alert('Invalid username or password.');
//     }
// });

// Fetch user data from sessionStorage and show greeting on Dashboard
// const userName = sessionStorage.getItem('name');
// if (document.getElementById('userGreeting')) {
//     if (userName) {
//         document.getElementById('userGreeting').innerText = `Hello, ${userName}!`;
//     } else {
//         window.location.href = 'login.html'; // Redirect to login if no user found
//     }
// }

// Fetch and display list of items in Dashboard with toggleable views
// window.addEventListener('DOMContentLoaded', function () {
//     const userName = sessionStorage.getItem('name');
//     const userGreeting = document.getElementById('userGreeting');
//     const itemContainer = document.getElementById('itemContainer');
//     const listViewBtn = document.getElementById('listViewBtn');
//     const gridViewBtn = document.getElementById('gridViewBtn');

//     // Display user greeting
//     if (userName) {
//         userGreeting.innerHTML = `<h4>Hello, ${userName}!</h4>`;
//     } else {
//         window.location.href = 'login.html'; // Redirect to login if no user found
//     }

//     // Fetch data from API
//     fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-11-24&sortBy=publishedAt&apiKey=36d9bcf955fc4c25a69509277db6476c')
//         .then(response => response.json())
//         .then(data => {
//             const items = data.articles;

//             // Initial display in grid view
//             displayItemsAsGrid(items);

//             // Event listeners for view toggle buttons
//             listViewBtn.addEventListener('click', () => displayItemsAsList(items));
//             gridViewBtn.addEventListener('click', () => displayItemsAsGrid(items));
//         })
//         .catch(error => console.error('Error fetching data:', error));
// });

// Display items as grid
// function displayItemsAsGrid(items) {
//     const itemContainer = document.getElementById('itemContainer');
//     itemContainer.className = 'row'; // Ensure grid layout
//     itemContainer.innerHTML = ''; // Clear container

//     items.forEach(item => {
//         const colDiv = document.createElement('div');
//         colDiv.classList.add('col-md-4', 'mb-4');

//         // Handle image loading and fallback
//         const imgElement = document.createElement('img');
//         imgElement.classList.add('img-fluid', 'card-img-top');
//         imgElement.alt = item.title;

//         const imageUrl = item.urlToImage || 'https://via.placeholder.com/150'; // Fallback image if none available
//         imgElement.src = imageUrl;

//         // Check if the image is valid (simple check by loading it)
//         imgElement.onerror = function() {
//             // Cek apakah gambar memang tidak bisa dimuat, lalu tampilkan gambar pengganti.
//             imgElement.src = 'https://via.placeholder.com/150'; // Gambar pengganti jika gagal
//         };        

//         colDiv.innerHTML = `
//             <div class="card">
//                 ${imgElement.outerHTML}
//                 <div class="card-body">
//                     <h5 class="card-title">${item.title}</h5>
//                     <p class="card-text">${item.description ? item.description.substring(0, 100) + '...' : 'No description available.'}</p>
//                     <a href="detail.html?id=${encodeURIComponent(item.url)}" class="btn btn-primary">View Details</a>
//                 </div>
//             </div>
//         `;

//         itemContainer.appendChild(colDiv);
//     });
// }

// Display items as list
// function displayItemsAsList(items) {
//     const itemContainer = document.getElementById('itemContainer');
//     itemContainer.className = 'list-group'; // Ensure list layout
//     itemContainer.innerHTML = ''; // Clear container

//     items.forEach(item => {
//         const listItem = document.createElement('div');
//         listItem.classList.add('list-group-item', 'd-flex', 'flex-column', 'align-items-center', 'mb-3'); // Added mb-3 for margin between items

//         // Handle image loading and fallback
//         const imgElement = document.createElement('img');
//         imgElement.classList.add('img-fluid', 'mb-3');
//         imgElement.alt = item.title;
        
//         const imageUrl = item.urlToImage || 'https://via.placeholder.com/150'; // Fallback image if none available
//         imgElement.src = imageUrl;

//         // Check if the image is valid (simple check by loading it)
//         imgElement.onerror = function() {
//             imgElement.src = 'https://via.placeholder.com/150'; // Fallback if image fails to load
//         };

//         listItem.appendChild(imgElement);

//         listItem.innerHTML += `
//             <div class="content text-center"> <!-- Added text-center for centering text -->
//                 <h5 class="mb-2" style="font-size: 1.25rem;">${item.title}</h5> <!-- Increased font size for title -->
//                 <p style="font-size: 1.1rem;">${item.description ? item.description.substring(0, 100) + '...' : 'No description available.'}</p> <!-- Increased font size for description -->
//                 <a href="detail.html?id=${encodeURIComponent(item.url)}" class="btn btn-link p-0">View Details</a>
//             </div>
//         `;

//         itemContainer.appendChild(listItem);
//     });
// }

// Get item detail on Detail Page
// if (window.location.pathname.includes('detail.html')) {
//     window.addEventListener('DOMContentLoaded', function () {
//         const urlParams = new URLSearchParams(window.location.search);
//         const itemUrl = urlParams.get('id');

//         if (itemUrl) {
//             fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-11-24&sortBy=publishedAt&apiKey=36d9bcf955fc4c25a69509277db6476c')
//                 .then(response => response.json())
//                 .then(data => {
//                     const item = data.articles.find(article => article.url === decodeURIComponent(itemUrl));

//                     if (item) {
//                         document.getElementById('itemTitle').innerText = item.title || 'No title available';
//                         document.getElementById('itemDescription').innerText = item.description || 'No description available';
//                         document.getElementById('itemImage').src = item.urlToImage || 'placeholder.jpg';
//                     } else {
//                         alert('Item not found.');
//                     }
//                 })
//                 .catch(error => console.error('Error fetching data:', error));
//         }
//     });
// }