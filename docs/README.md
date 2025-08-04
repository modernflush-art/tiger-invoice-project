# Tiger Invoice - Organized File Structure

## 📁 File Organization

### 🎯 **Main Flow:**
```
main.html → login.html → index.html
```

### 📋 **File Descriptions:**

#### **1. main.html** - Landing Page
- **Purpose:** Marketing/landing page for Tiger Invoice
- **Features:** 
  - Orange theme design
  - Hero section with call-to-action
  - Feature highlights
  - Pricing information
  - Navigation to login
- **Navigation:** All "Sign Up" and "Watch Demo" buttons link to `login.html`

#### **2. login.html** - Authentication Page
- **Purpose:** User registration and login
- **Features:**
  - Email/password authentication
  - Google sign-in
  - Email verification
  - Rate limiting for security
  - Comprehensive error handling
- **Navigation:** Successful login redirects to `index.html`

#### **3. index.html** - Main Dashboard
- **Purpose:** Primary application dashboard
- **Features:**
  - Dashboard with statistics
  - Recent invoices display
  - Create invoice functionality
  - Customer and item management
  - Profile settings
  - Notifications system
- **Navigation:** Links to `customer.html` and `item.html`

#### **4. customer.html** - Customer Management
- **Purpose:** Manage customer data
- **Features:**
  - Add/edit/delete customers
  - Customer database
  - Image upload for customers
  - Search and filter
- **Navigation:** Back button to `index.html`

#### **5. item.html** - Item Management
- **Purpose:** Manage inventory items
- **Features:**
  - Add/edit/delete items
  - Item database
  - Image upload for items
  - Stock management
- **Navigation:** Back button to `index.html`

### 🔗 **Navigation Flow:**

```
main.html (Landing)
    ↓ [Sign Up / Watch Demo]
login.html (Authentication)
    ↓ [Successful Login]
index.html (Dashboard)
    ↓ [Navigation Menu]
customer.html (Customer Management)
item.html (Item Management)
```

### 🎨 **Design Consistency:**
- **Theme:** Orange color scheme (`#f97316`)
- **Font:** Inter font family
- **Responsive:** Mobile-friendly design
- **Dark Mode:** Available across all pages

### 🔧 **Technical Features:**
- **Firebase Integration:** Authentication and Realtime Database
- **Image Storage:** Firebase Storage for customer/item images
- **Real-time Updates:** Live data synchronization
- **Error Handling:** Comprehensive error messages
- **Security:** Rate limiting and input validation

### 📱 **User Journey:**
1. **Landing Page** (`main.html`) - User discovers the app
2. **Authentication** (`login.html`) - User creates account or signs in
3. **Dashboard** (`index.html`) - User manages invoices and data
4. **Management Pages** (`customer.html`, `item.html`) - User manages specific data

### 🚀 **Getting Started:**
1. Open `main.html` in a web browser
2. Click "Sign Up" to create an account
3. Verify your email address
4. Access the dashboard and start managing invoices

---

**Note:** All files are properly linked and the navigation flow is seamless from landing page to full application functionality. 