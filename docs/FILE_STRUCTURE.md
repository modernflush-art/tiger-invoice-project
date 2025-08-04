# 📁 Tiger Invoice - File Structure

## 🎯 **Organized Flow:**

```
start.html (Entry Point)
    ↓
main.html (Landing Page)
    ↓ [Sign Up / Watch Demo]
login.html (Authentication)
    ↓ [Successful Login]
index.html (Dashboard)
    ↓ [Navigation]
customer.html (Customer Management)
item.html (Item Management)
```

## 📋 **File Details:**

### **Entry Point:**
- **`start.html`** - Welcome page with "Get Started" button

### **Main Flow:**
1. **`main.html`** - Marketing landing page (orange theme)
2. **`login.html`** - User authentication and registration
3. **`index.html`** - Main dashboard application

### **Management Pages:**
4. **`customer.html`** - Customer data management
5. **`item.html`** - Inventory item management

### **Supporting Files:**
- **`README.md`** - Complete documentation
- **`FILE_STRUCTURE.md`** - This file structure overview
- **`image/`** - Image assets directory
- **`theme.css`** & **`theme.js`** - Theme management files

## 🔗 **Navigation Flow:**

### **User Journey:**
1. **Start** → User opens `start.html`
2. **Landing** → Clicks "Get Started" → `main.html`
3. **Sign Up** → Clicks "Sign Up" → `login.html`
4. **Dashboard** → After login → `index.html`
5. **Management** → Navigate to `customer.html` or `item.html`

### **Direct Access:**
- **`main.html`** → Can be accessed directly
- **`login.html`** → Can be accessed directly
- **`index.html`** → Requires authentication
- **`customer.html`** → Requires authentication
- **`item.html`** → Requires authentication

## 🎨 **Design Consistency:**
- **Color Scheme:** Orange (`#f97316`)
- **Font:** Inter/Segoe UI
- **Theme:** Light/Dark mode support
- **Responsive:** Mobile-friendly

## 🔧 **Technical Features:**
- **Firebase Auth:** User authentication
- **Realtime Database:** Data storage
- **Firebase Storage:** Image uploads
- **Error Handling:** Comprehensive error messages
- **Rate Limiting:** Security measures

---

**To start the application:**
1. Open `start.html` in a web browser
2. Follow the flow: Landing → Login → Dashboard
3. Or directly open `main.html` to skip the welcome page 