import face_recognition
from PIL import Image
import numpy

im = face_recognition.load_image_file('./known_faces/elon.jpg')
im1 = Image.open('./known_faces/elon2.jpg')
im1 = numpy.array(im1)
locs = face_recognition.face_locations(im)
known_dev = face_recognition.face_encodings(im, locs)
test_locs = face_recognition.face_locations(im1)
test_dev = face_recognition.face_encodings(im1, test_locs)
test_dev = numpy.array(test_dev)
test_dev = numpy.append(test_dev, known_dev, axis=0)
print(test_dev)
