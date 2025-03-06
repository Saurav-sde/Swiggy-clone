# 🍕 Swiggy Clone - React 19 Project  

## 🚀 Overview  
Swiggy Clone is a **food delivery web application** built using **React 19**. It fetches **live restaurant and menu data from Swiggy's API**, allowing users to browse restaurants, view their menus, and add food items to their cart.  

This project helped me learn **React Router, Redux, API handling, and state management** while overcoming challenges like CORS issues and complex API structures.  

---

## 🔥 Features  
✅ **Home Page** - Displays a list of restaurants and food categories.  
✅ **Restaurant Page** - Shows the menu items of a selected restaurant.  
✅ **React Routing** - Smooth navigation between pages.  
✅ **Cart Functionality** - Users can add/remove items using **Redux for state management**.  
✅ **API Integration** - Fetches real-time restaurant and food data from Swiggy.  

---

## 🛠 Tech Stack  
- **Frontend:** React 19, Redux, Tailwind CSS  
- **State Management:** Redux Toolkit  
- **Routing:** React Router  
- **Data Fetching:** Fetch API (`useEffect`)  
- **Styling:** Tailwind CSS  

---

## 🛑 Challenges & Solutions  

### 1️⃣ **Handling State for Individual Food Items**  
Using `useState` for each food item made state management complex.  
✅ **Solution:** Implemented **Redux Toolkit** for a **centralized cart state**.  

### 2️⃣ **Fetching Data from a Complex API**  
Swiggy’s API structure was **deeply nested**, making it hard to extract relevant data.  
✅ **Solution:** Used `useEffect` for structured API calls and optimized JSON parsing.  

### 3️⃣ **CORS Issue While Fetching API Data**  
Swiggy blocks direct API access due to **CORS restrictions**.  
✅ **Solution:** Used a **third-party proxy** (only for learning purposes).  

### 4️⃣ **Re-fetching Data on Navigation**  
Data was **re-fetched every time a user navigated back**, slowing the experience.  
✅ **Solution:** Plan to store **fetched data in Redux** to avoid unnecessary API calls.  

---

## 🎯 Future Improvements  
🚀 **Optimize API Calls** - Store data globally in Redux to reduce redundant requests.  
🎨 **Improve UI & User Experience** - Enhance **design, animations, and interactivity**.  
🛒 **Checkout Page** - Implement a **payment simulation** for a complete order experience.  

---

## 📂 Installation & Setup  

### 1️⃣ Clone the Repository  
```sh
git clone [Your GitHub Repo Link]
cd swiggy-clone
