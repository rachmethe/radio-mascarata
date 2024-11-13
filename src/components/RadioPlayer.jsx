import React from 'react';
import AudioPlayer from 'react-audio-player';

const RadioPlayer = () => (
  <AudioPlayer src="http://mascarata.space:8000/stream" controls autoPlay />
);

export default RadioPlayer;