# 🏗️ Tiger Invoice - Organized Project Structure

## 📁 **Complete Directory Structure:**

```
Tiger Invoice/
├── 📄 index.html                    # Root entry point
├── 📁 pages/                        # All HTML pages
│   ├── 🎯 start.html               # Welcome page
│   ├── 📄 main.html                # Landing page
│   ├── 🔐 login.html               # Authentication
│   ├── 🏠 index.html               # Dashboard
│   ├── 👥 customer.html            # Customer management
│   ├── 📦 item.html                # Item management
│   └── 🧪 test.html                # Test page
├── 📁 styles/                       # CSS files
│   └── 🎨 theme.css                # Theme styles
├── 📁 scripts/                      # JavaScript files
│   └── ⚙️ theme.js                 # Theme functionality
├── 📁 assets/                       # Assets and images
│   └── 📁 image/                   # Image files
├── 📁 docs/                         # Documentation
│   ├── 📋 README.md                # Main documentation
│   ├── 📁 FILE_STRUCTURE.md        # File structure guide
│   ├── 🔧 firebase-migration-config.md
│   └── 🔒 firebase-security-rules.md
└── 📁 src/                         # Alternative structure (backup)
    ├── 📁 pages/
    ├── 📁 components/
    ├── 📁 assets/
    ├── 📁 styles/
    └── 📁 scripts/
```

## 🎯 **Navigation Flow:**

### **Primary Flow:**
```
index.html (Root Entry)
    ↓ [Auto Redirect]
pages/main.html (Landing - First Page)
    ↓
pages/login.html (Authentication)
    ↓
pages/index.html (Dashboard)
    ↓
pages/customer.html (Customer Management)
pages/item.html (Item Management)
```

### **Direct Access Options:**
- **`index.html`** → Root entry point (auto-redirects to main.html)
- **`pages/main.html`** → Direct landing page access (first page)
- **`pages/login.html`** → Direct authentication access
- **`pages/start.html`** → Welcome page (alternative entry)

## 📋 **File Descriptions:**

### **🏠 Root Files:**
- **`index.html`** - Main entry point with navigation options

### **📄 Pages Directory:**
- **`start.html`** - Welcome page with guided flow
- **`main.html`** - Marketing landing page (orange theme)
- **`login.html`** - User authentication and registration
- **`index.html`** - Main dashboard application
- **`customer.html`** - Customer data management
- **`item.html`** - Inventory item management
- **`test.html`** - Testing page

### **🎨 Styles Directory:**
- **`theme.css`** - Theme and styling files

### **⚙️ Scripts Directory:**
- **`theme.js`** - Theme functionality and utilities

### **📁 Assets Directory:**
- **`image/`** - Image assets and resources

### **📚 Docs Directory:**
- **`README.md`** - Complete project documentation
- **`FILE_STRUCTURE.md`** - File structure guide
- **`firebase-migration-config.md`** - Firebase configuration
- **`firebase-security-rules.md`** - Security rules

## 🔗 **Navigation Links:**

### **Root Navigation:**
- `index.html` → `pages/main.html` (Auto-redirect)
- `pages/main.html` → `pages/login.html` (Sign Up)
- `pages/login.html` → `pages/index.html` (After authentication)

### **Page Navigation:**
- `pages/start.html` → `pages/main.html`
- `pages/main.html` → `pages/login.html`
- `pages/login.html` → `pages/index.html` (after auth)
- `pages/index.html` → `pages/customer.html`
- `pages/index.html` → `pages/item.html`

## 🎨 **Design Features:**
- **Orange Theme:** `#f97316` primary color
- **Responsive Design:** Mobile-friendly
- **Dark Mode:** Available across pages
- **Professional UI:** Consistent styling

## 🔧 **Technical Features:**
- **Firebase Integration:** Authentication & Database
- **Real-time Updates:** Live data synchronization
- **Image Storage:** Firebase Storage integration
- **Error Handling:** Comprehensive error messages
- **Security:** Rate limiting and validation

## 🚀 **Getting Started:**

### **Option 1 - Auto-Redirect (Recommended):**
1. Open `index.html` in browser
2. Automatically redirects to `pages/main.html`
3. Click "Sign Up" to create account
4. Access dashboard

### **Option 2 - Direct Access:**
1. Open `pages/main.html` directly
2. Click "Sign Up" to create account
3. Access dashboard

### **Option 3 - Quick Login:**
1. Open `pages/login.html` directly
2. Sign in with existing account
3. Access dashboard

## 📱 **User Journey:**
1. **Entry Point** → User opens `index.html`
2. **Auto-Redirect** → Automatically goes to `pages/main.html`
3. **Landing Page** → User sees Tiger Invoice landing page
4. **Sign Up** → Clicks "Sign Up" → `pages/login.html`
5. **Dashboard** → After login → `pages/index.html`
6. **Management** → Navigate to customer/item pages

---

**🎯 Organized and Professional Structure Ready!** 