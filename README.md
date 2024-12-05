
# PinDrop

**PinDrop** is a seamless file-sharing service that allows users to share large files and folders effortlessly. With PinDrop, you can quickly and securely transfer files without size constraints, making it ideal for individuals and teams needing reliable file-sharing solutions.

---

## Features

- **Large File Support**: Share files of any size without worrying about limits.
- **Folder Sharing**: Easily upload and share entire folders.
- **Secure Transfers**: Ensure your files remain private and secure during the transfer.
- **User-Friendly Interface**: An intuitive and easy-to-use interface for smooth file sharing.
- **Temporary Links**: Generate time-sensitive download links for added security.
- **Cross-Platform Compatibility**: Share files across multiple devices and operating systems.

---

## How It Works

1. **Upload Files**: Drag and drop your files or folders into the interface.
2. **Generate Link**: A unique download link is created instantly.
3. **Share Link**: Share the link with recipients via email, text, or any messaging platform.
4. **Download**: Recipients can download the files directly from the provided link.

---

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB
- A modern web browser for accessing the service.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/imankii01/PinDrop.git
   cd PinDrop
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Define the following variables:
     ```
     PORT=3000
     MONGO_URI=your_mongo_database_uri
     JWT_SECRET=your_secret_key
     ```

4. Start the application:
   ```bash
   npm start
   ```

5. Visit `http://localhost:3000` in your browser to access the service.

---

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **File Storage**: AWS S3 / Local file storage
- **Authentication**: JWT

---

## Future Enhancements

- End-to-end encryption for file sharing.
- Real-time sharing progress updates.
- Integration with third-party storage services like Google Drive and Dropbox.
- Mobile applications for Android and iOS.

---

## Contributing

We welcome contributions! Follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m "Add feature-name"`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
