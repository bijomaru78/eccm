# User Manual

This tool helps you visually map, label, and manage Ethernet connections. It runs entirely in your browser, works offline, and saves everything automatically in your profile.  

---

## 📂 Profiles

<img align="right" width="250" alt="image" src="https://github.com/user-attachments/assets/ef2269ef-8c23-462b-8ee2-91ea4771d4b5" />
  
Profiles let you keep different layouts (e.g. home, client A, client B).

- **Create a new profile** → *Profiles* card → **New**  
- **Switch profiles** → Use the dropdown at the top of the *Profiles* card  
- **Rename** → Select a profile, then click **Rename**  
- **Duplicate** → Clone the current profile with **Duplicate**  
- **Delete** → Removes the current profile (at least one profile must exist)  
- **Export** → Save a single profile as a JSON file  
- **Import** → Load a profile from a JSON file

---

## 🖥️ Adding Devices

<img align="right" width="250" alt="image" src="https://github.com/user-attachments/assets/258a22fe-af58-40fc-b814-96d53bfff7c3" />

Each device is shown as a card with its own ports. Using clear names and distinct colours makes layouts easier to read, especially when you have multiple switches or patch panels. You can also edit or delete devices later if your setup changes — everything autosaves. Devices can be linked together through their ports, giving you a live view of how your network fits together.  

- In the *Add device* card, enter a **name** (e.g. *Core Switch A*)  
- Choose the **number of ports** (1–512)  
- Click **Select colour** to assign a colour (helps distinguish devices)  
- Click **Add device**  
- Devices can be reordered by dragging them  

---

## ⚙️ Configuring Devices

<img align="right" width="250" alt="image" src="https://github.com/user-attachments/assets/af86ca1e-664e-4270-94d4-cccc04ef0ddb" />

Configuring the layout makes your map easier to follow, whether you prefer full-width rows, split views, or dual-link ports. These options don’t affect the connections themselves — only how the device is displayed for clarity.  

Click **Layout** on a device to adjust how its ports display:
- **Row width**: full-width (12 ports per row) or half-width (6 ports per row)  
- **13–24 ports**: choose *balanced* (split evenly) or *12 + remainder*  
- **≤12 ports**: choose single row or split into 2 rows  
- **Dual link**: each port can be split into 2 sub-ports  

---

## 🔗 Linking Ports

<img align="right" width="250" alt="image" src="https://github.com/user-attachments/assets/f9948f18-f1ac-48b1-a742-d2c3c002c8fe" />

When linking, you’ll be shown a confirmation prompt with both device names and port numbers, so you can double-check before saving the connection.  

- Click one free port, then another free port → confirm to create a connection  
- Both ends will be coloured with their peer’s device colour  
- Linked ports show an arrow ⇄  

---

## 🏷️ Labelling & Reserving Ports
- **ALT + Click** a port → add or edit a label (alias)  
  - Example: *WAN*, *Printer*, *AP-1*  
- **CTRL + Click** a port → mark it as *reserved* (grey background)  
  - Use for ports connected to devices **outside** this layout (e.g. ISP modem, patch panel, office uplink) - so they appear as connected without having to be linked to another port
  - Combine with ALT-label to describe what’s at the other end  
    - Example: CTRL-reserve port with a label for location, e.g. *Office*  → ALT-label to specify what's connected, e.g. *PC-4*  

---

## 💾 Backup & Restore (all profiles)

<img align="right" width="250" alt="image" src="https://github.com/user-attachments/assets/da133980-4be6-4c4d-b9b6-413cede3510d" />

Backups are useful if you want to move your layouts to another computer or just keep a copy in case your browser storage is cleared. Restoring will overwrite your current profiles, so it’s best to take a fresh backup first if you want to merge changes later. 

- **Backup all** → saves every profile (devices + links) into one JSON file  
- **Restore all** → load a backup and replace everything

---

## 🔍 Finding Connections

<img align="right" width="250" alt="image" src="https://github.com/user-attachments/assets/f0cf1111-f080-49f0-b396-331f0c8940b7" />

This makes it easy to track down a specific cable in larger layouts without scanning visually. You can search by device name, port number, or any custom alias you’ve added.  

- Use the search box (*Find connection* card) to filter by device, port, or alias  
- The *Connections* table shows all links, with both devices, ports, and labels  
- Click a row → highlights both ends of the link  

---

## ❌ Managing Connections

<img align="right" width="150" alt="image" src="https://github.com/user-attachments/assets/8bc8bb52-7854-4274-ae89-5829c1501a01" />

From the *Connections* table:
- **Unlink** → break a connection between two ports  
- **Clear** → clear a Reserved port (can also be cleared by **CTRL + clicking** the reserved port again)

---

## 🖨️ Printing
- Use **Print layout** (top-right) to generate a printable sheet of devices + connections  

---

## 📝 Tips
- Profiles autosave automatically — no need to press “Save”  
- Use colours to quickly group devices by type or rack position  
- Labels + reserved ports are powerful for documenting external links  

---
