import tensorflow as tf
import tensorflow_hub as hub
import numpy as np
from tensorflow.keras.models import load_model

# Load the pretrained VGGish model
vggish_model_url = "https://tfhub.dev/google/vggish/1"
vggish_model = hub.load(vggish_model_url)

def extract_audio_features(file_path, max_length=128):
    # Load the audio file
    audio = tf.io.read_file(file_path)
    waveform, sample_rate = tf.audio.decode_wav(audio, desired_channels=1)

    # Preprocess the waveform
    waveform = tf.squeeze(waveform, axis=-1)
    waveform = tf.cast(waveform, tf.float32)

    # Extract audio features using the VGGish model
    embeddings = vggish_model(waveform)

    # Pad or truncate features to a fixed length
    if embeddings.shape[0] < max_length:
        pad_width = max_length - embeddings.shape[0]
        embeddings = tf.pad(embeddings, [[0, pad_width], [0, 0]])
    elif embeddings.shape[0] > max_length:
        embeddings = embeddings[:max_length, :]

    return embeddings.numpy()

model_path = "SMOTE"
model = load_model(model_path)

label_mapping = {
    0: "Healthy",
    1: "Laryngitis",
    2: "Vocal Polyp"
}

def predict(audio_file_path):
    new_audio_embedding = extract_audio_features(audio_file_path)
    max_length = 128
    new_audio_embedding = np.expand_dims(new_audio_embedding, axis=0)
    prediction = model.predict(new_audio_embedding)
    predicted_class = np.argmax(prediction, axis=1)[0]
    predicted_class_label = label_mapping[predicted_class]
    return predicted_class_label

# print(predict('Mar 15, 8.12 PM​.wav'))
# print(predict('Sample_1(vocal polyp).wav'))
