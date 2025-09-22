# 📖 README – Elf School of Music & Performing Arts Website

## 🎯 Project Overview

This project is a **responsive website** for the **Elf School of Music and Performing Arts**.
It introduces the institution, highlights its services, showcases staff members, and provides a contact form for inquiries.

The website is built using:

* **HTML5** → structure and content
* **CSS3** → styling and layout (in `style.css`)
* **JavaScript (ES6)** → interactive functionality (in `script.js`)

---

## 🖼️ Features

### 1. **Navigation Bar**

* Sticky header navigation with links to: Home, About, Services, Staff, and Contact sections.
* Responsive toggle menu (`☰`) for smaller screens.

### 2. **Hero Section**

* Large introductory banner with a welcome message.
* Call-to-action button that scrolls smoothly to the contact form.

### 3. **About Section**

* Describes the school, its purpose, and mission.
* Structured with subheadings (“Who Are We?” and “Our Mission”).

### 4. **Services Section**

* Grid layout listing the institution’s services:

  * **Talent Scouting**
  * **Training**
  * **Specialization Programs**

### 5. **Staff Section (Image Carousel)**

* Displays profiles of staff members with images and names.
* Navigation buttons:

  * **Previous** → cycles backward through staff
  * **Next** → cycles forward through staff
* Only one staff profile is visible at a time (`.active` class managed by JS).

### 6. **Contact Section**

* A form where users can provide:

  * Name
  * Email
  * Inquiry message
* **Form validation (JavaScript):**

  * Prevents empty submissions
  * Ensures email contains `@`
  * Displays success/error messages dynamically

### 7. **Footer**

* Copyright statement

---

## ⚙️ JavaScript Functionality

The interactivity is handled by `script.js`:

### 1. **Staff Carousel**

* Staff members (`.item`) are cycled through using:

  * `Next` button → moves forward
  * `Previous` button → moves backward
* Controlled with a `current` index and a function `showImages(index)` that updates which staff card is active.

### 2. **Form Validation**

* Listens to `sbmtbtn` click event.
* Prevents form submission (`event.preventDefault()`).
* Validates:

  * Empty name → error
  * Empty email → error
  * Email missing `@` → error
* Displays results inside `#formMessage` with colored feedback (`red` for errors, `green` for success).

---

## 📂 Project Structure

```
elf-school-website/
│
├── index.html        # Main HTML file
├── style.css         # Styling (colors, layout, fonts, etc.)
├── script.js         # Interactive logic (carousel + form validation)
├── ELF.png           # Logo (favicon + header image)
├── principal.png     # Staff member images
├── administrator.png
├── talentrecruiters.png
├── vocalcoach.png
├── theatredep.png
├── dancedep.png
└── README.md         # Project documentation (this file)
```

---

## 🚀 How to Use

1. Clone or download this project folder.
2. Open `index.html` in a browser.
3. Explore:

   * Navigate via header menu
   * Read About & Services
   * Browse staff with **Previous/Next** buttons
   * Fill and test the contact form


---

## 👨‍💻 Author

Developed by **Elf School of Music and Performing Arts Team** (Student Project).

---

👉 Do you want me to make this README in **Markdown style (for GitHub)** like above, or in a **Word-style plain text** format for reports/assignments?

