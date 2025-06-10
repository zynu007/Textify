𝗧𝗲𝘅𝘁𝗶𝗳𝘆 – Media Transcription Tool 🎙️➡️📄

Textify is a simple yet powerful web application that transcribes audio and video files into text. Built with Django and powered by OpenAI's Whisper model, it provides a clean interface for users to upload their media and receive a downloadable text transcription.



✨ Features

- Audio & Video Support: Transcribe a wide range of media formats, including .mp3, .wav, .mp4, .mov, and more.

- Drag & Drop Interface: A user-friendly interface to drag and drop files or select them from your device.

- AI-Powered Transcription: Utilizes OpenAI's powerful Whisper model to generate accurate transcriptions.

- Download Transcriptions: Easily download the generated transcription as a .txt file.

Secure & Efficient: The original media file is automatically deleted from the server after the transcription is completed to ensure privacy and save storage.

Responsive Design: A clean and functional UI that works on different screen sizes.

🛠️ Tech Stack

- Backend: Python, Django
- Transcription: openai-whisper
- Frontend: HTML, CSS, JavaScript (vanilla)
- Database: SQLite (default)
- Core Dependency: FFmpeg
- 
🚀 Getting Started
Follow these instructions to set up and run the project locally on your machine.

Prerequisites
This project has a critical dependency on FFmpeg. You must have it installed on your system and accessible.

Download FFmpeg: If you don't have it, download it from the official website: ffmpeg.org

Note the Path: Unzip the file and note the path to the ffmpeg.exe file inside the bin folder. You will need this path for the configuration step.
Installation

Clone the repository:

Bash

git clone https://github.com/your-username/textify.git
cd textify
Create and activate a virtual environment:

Bash

# For Windows
python -m venv venv
.\venv\Scripts\activate

# For macOS/Linux
python3 -m venv venv
source venv/bin/activate
Install the required packages:

Bash

pip install -r requirements.txt
Configure FFmpeg Path:
This is the most important step.

Open the textify/settings.py file.
Find the FFMPEG_PATH setting.
Replace the placeholder path with the absolute path to the ffmpeg.exe file you noted earlier.
<!-- end list -->

Python

# textify/settings.py

# IMPORTANT: Update this path to your local ffmpeg.exe location
FFMPEG_PATH = os.getenv("FFMPEG_PATH", r"C:\path\to\your\ffmpeg\bin\ffmpeg.exe")
Apply database migrations:

 python manage.py migrate
```

Run the development server:

Bash

python manage.py runserver
The application should now be running at http://127.0.0.1:8000/.

Usage
Open your web browser and navigate to http://127.0.0.1:8000/.
Drag and drop an audio or video file onto the upload area, or click "Select File" to choose a file from your computer.
Click the "Start Transcription" button.
Please wait for the transcription process to complete. The time it takes will depend on the file size.
Once finished, a "Download" button will appear. Click it to save the transcription as a text file.
📝 License
This project is open-source and available under the MIT License. See the LICENSE file for more info.
