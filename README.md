### 🚀 My VS Code Setup  

This repository contains my personal VS Code configuration, including settings, extensions, and custom styles.  

![image](https://github.com/user-attachments/assets/14f81909-7c39-44bf-bffa-ac6ea399287f)

## 📦 Files Included  
- **`settings.json`** – My VS Code settings configuration.  
- **`extensions.list`** – A list of my installed extensions.  
- **`custom-style.css` & `custom-style.js`** – Custom UI modifications for a better look.  

## 🔧 Installation  

### 1️⃣ Install VS Code  
[Download VS Code](https://code.visualstudio.com/) and install it on your system.  

### 2️⃣ Install Extensions  
Run the following command in your terminal to install all extensions from `extensions.list`:  

```sh
 cat extensions.list |% { code --install-extension $_}
```

### 3️⃣ Apply Settings  
Copy `settings.json` to your VS Code user settings folder:  

- **Windows:** `%APPDATA%\Code\User\settings.json`  
- **Linux & macOS:** `~/.config/Code/User/settings.json`  

### 4️⃣ Enable Custom Styles  
To apply the custom styles:  
1. Install the **Custom CSS and JS Loader** extension:  
   ```sh
   code --install-extension be5invis.vscode-custom-css
   ```
2. Open VS Code settings (`Ctrl + Shift + P` → "Preferences: Open Settings (JSON)") and add:  
   ```json
   "vscode_custom_css.imports": [
       "file:///absolute/path/to/custom-style.css",
       "file:///absolute/path/to/custom-style.js"
   ]
   ```
3. Restart VS Code with:  
   ```sh
   code --disable-extensions && code
   ```

## 🎨 Themes & Icons  
- **VS Code Theme:** [React Theme](https://marketplace.visualstudio.com/items?itemName=mikaelkristiansson87.react-theme-vscode)  
- **Icons:** [Catppuccin Icons](https://marketplace.visualstudio.com/items?itemName=catppuccin.catppuccin-vsc-icons)  

## 📷 Preview  
![image](https://github.com/user-attachments/assets/cc098942-7abe-4513-9e5d-96f265b6ed91)
![image](https://github.com/user-attachments/assets/3959e8e7-d31f-4722-9a3e-2301588af91f)


---
