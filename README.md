# Face Recognition App - Full Stack Documentation

## Overview

The Face Recognition App is a full-stack application designed for face recognition and login functionality. The application utilizes a Flask backend for RESTful API services and a React frontend for a responsive user interface.It Uses YOLOV3 based Image Recognition and Haar Cascade Based model trained on Kaggles Wide Faces Dataset which is also a standalone App to recoginse your face in video motion

## Backend - Flask REST Service

The backend is implemented using Flask, a lightweight and flexible Python web framework. The key features include:

- **Decoding with Pillow:**
  The server-side application, powered by Flask, employs Python's Pillow library to decode base64-encoded images received in HTTP requests.

- **YOLOv3 Integration:**
  The Flask backend seamlessly integrates a YOLOv3-based deep learning model for object detection. This model processes decoded images, identifying objects and providing associated predictions.

- **RESTful Endpoints:**
  Flask defines RESTful endpoints to handle various stages of the image processing pipeline, including image upload, decoding, and object detection. Each endpoint is tailored for specific functionality.

- **Scalability and Concurrent Requests:**
  Flask's WSGI compatibility ensures the backend can handle multiple concurrent HTTP requests, making it scalable for real-time processing and responsiveness.

## Frontend - React Application

The frontend is built using React to provide a responsive and user-friendly interface for the face recognition app.

## Usage
### For the Full Stack App
1. **Create a Virtual Environment**
    - `py -m venv .`
    - `cd .\Scripts`
    - `.\activate`

2. **Installing Libraries**
    - `cd ../`
    - `pip install -r requirements.txt`

3. **Running the Application**

    - **Start Flask Backend:**
      ```bash
        py .\app.py 
      ```

    - **Start React Frontend:**
      ```bash
      cd frontend
      npm start
      ```

    - **Access the App:**
      Open your web browser and go to [http://localhost:3000](http://localhost:3000).

    - **Testing Face Recognition:**
      - Hit the [http://localhost:3000/register].
      - Give Permission for camera and Click on Register.
      - The backend will decode the image and pass it through the YOLOv3 model for face detection.
      - The frontend will display the results that is Login You if You are Registered.
### For the StandAlone Haar Cascade Classifier 
1. **Create a Virtual Environment**
    - `py -m venv .`
    - `cd .\Scripts`
    - `.\activate`

2. **Installing Libraries**
    - `cd ../`
    - `pip install -r requirements.txt`

3. **Running the Application**

    - **Start Flask Backend:**
      ```bash
        py .\cam.py 
      ```
4. **Testing Face Recognition:**
      
      - Your Camera will draw a Blue Reactangle around your face 
      - The frontend will display the results that is Login You if You are Registered.

## Additional Information

- The app can be extended with features such as user registration, database integration, and more.
- Ensure that required dependencies are installed using the provided `requirements.txt` file.

## References

- Flask Documentation: [https://flask.palletsprojects.com/](https://flask.palletsprojects.com/)
- React Documentation: [https://reactjs.org/docs/getting-started.html](https://reactjs.org/docs/getting-started.html)
- YOLOv3 Documentation: [https://pjreddie.com/darknet/yolo/](https://pjreddie.com/darknet/yolo/)
- Pillow Documentation: [https://pillow.readthedocs.io/en/stable/](https://pillow.readthedocs.io/en/stable/)

