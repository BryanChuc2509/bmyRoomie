# How to execute the project

1. Clone the repository

   ```
   `git clone https`

   ```
2. Move to working directory

   ```
   cd bmyRoomie
   ```
3. Install node modules

   ```
   npm install
   ```
4. Execute the project

   ```
   npm run web
   ```

## Annotations
   ```

C:.
│   +not-found.tsx           # Page  to handle "not found" routes (404)
│   _layout.tsx              # Main layout of the application
│
└───(tabs)                   # Folder containing different tabs or sections of the app
    │   index.tsx            # Main component for the Tab view
    │   _layout.tsx          # Layout specific to the tabs, used to wrap screens inside the tabs
    │
    ├───addHome              # Folder for the 'AddHome' tab or section
    │       index.tsx        # Main page of the 'AddHome' section
    │       _layout.tsx      # Layout specific to the 'AddHome' section
    │
    ├───chats                # Folder for the 'Chats' tab or section
    │       index.tsx        # Main page of the 'Chats' section
    │       _layout.tsx      # Layout specific to the 'Chats' section
    │
    ├───home                 # Folder for the 'Home' tab or section
    │       index.tsx        # Main page of the 'Home' section
    │       [houseId].tsx    # Dynamic route that likely handles details of a specific house (houseId)
    │       _layout.tsx      # Layout specific to the 'Home' section
    │
    └───profile              # Folder for the 'Profile' tab or section
            index.tsx        # Main page of the 'Profile' section
            _layout.tsx      # Layout specific to the 'Profile' section
   ```
