# Rohini Foundation - Patient Management System

## Overview
This project is built using **Next.js**, **Node.js**, **Firebase**, and various necessary libraries. It is designed to automate and streamline the patient data management process for the doctors at **Rohini Foundation**, an NGO that provides healthcare to underprivileged communities. By automating patient records and using AI-driven analytics, the system reduces the need for manual entry, freeing up valuable time for healthcare professionals.

## Features
- **Location-based Patient Management**: Choose the location you are visiting and easily add patient data with minimal fields.
- **Voice Recognition**: Add patient information using voice commands, eliminating the need for manual data entry.
- **AI-driven Patient Analytics**: Get insights into existing patients' health conditions using AI, helping doctors make informed decisions faster.
- **Simple and Intuitive UI**: Designed with ease-of-use in mind to facilitate doctors in low-resource settings.
  
## Tech Stack
- **Frontend**: Next.js
- **Backend**: Node.js
- **Database**: Firebase (Firestore)
- **Voice Recognition**: Web Speech API
- **Data Analytics**: AI models for patient data analysis

## Installation & Setup

### Prerequisites
- **Node.js** and **npm** installed on your local machine
- **Firebase Account** with Firebase Firestore configured

### Steps
1. **Clone the repository**:
    ```bash
    git clone https://github.com/pranjalraj28/rohini.git
    cd rohini
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Firebase Setup**:
    - Create a Firebase project and enable Firestore.
    - Copy your Firebase configuration settings and replace the placeholder in `firebase.js`:
    ```js
    const firebaseConfig = {
      apiKey: "your-api-key",
      authDomain: "your-auth-domain",
      projectId: "your-project-id",
      storageBucket: "your-storage-bucket",
      messagingSenderId: "your-messaging-sender-id",
      appId: "your-app-id"
    };
    ```

4. **Run the Development Server**:
    ```bash
    npm run dev
    ```

5. **Visit**:
    Open [http://localhost:3000](http://localhost:3000) to see the project in action.

## Usage
- **Location Selection**: Choose the location you wish to visit. This step filters the patients associated with that specific area.
- **Add New Patients**: Use the provided form to input patient data. You can also utilize the voice recognition feature to add details without manual typing.
- **Analytics Dashboard**: View summarized analytics and insights about the patients, generated through AI algorithms to assist in rapid diagnosis.

## Screenshots
<img width="1215" alt="Screenshot 2024-09-13 at 12 05 28 AM" src="https://github.com/user-attachments/assets/08594ff0-29a1-40c6-9527-0ae5255a4c08">
<img width="1207" alt="Screenshot 2024-09-13 at 12 05 37 AM" src="https://github.com/user-attachments/assets/7619391b-1215-4b05-bd42-be35e6810671">

<img width="1260" alt="Screenshot 2024-09-13 at 12 06 00 AM" src="https://github.com/user-attachments/assets/e064f650-ee8f-4478-9fc7-474bd19f03fe">
<img width="1137" alt="Screenshot 2024-09-13 at 12 06 12 AM" src="https://github.com/user-attachments/assets/63bcb1f1-bf8b-4905-b96e-07461c7a7227">

<img width="1138" alt="Screenshot 2024-09-13 at 12 06 34 AM" src="https://github.com/user-attachments/assets/32c6ad1c-6681-4239-a6cb-6946c9d8cee0">

## Libraries Used
- **Next.js**: Server-side rendering and static site generation.
- **Firebase Firestore**: Real-time NoSQL database for storing patient information.
- **Web Speech API**: Voice recognition for hands-free data entry.
- **Chart.js**: Visualize patient data in charts and graphs on the Analytics Dashboard.

## Contribution
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

_A project by Pranjal Raj for Rohini Foundation._

