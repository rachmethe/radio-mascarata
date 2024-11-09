import React from 'react';
import AudioPlayer from 'react-audio-player';

const RadioPlayer = () => (
  <AudioPlayer src="http://45.10.43.24:8000/stream" controls autoPlay />
);

export default RadioPlayer;