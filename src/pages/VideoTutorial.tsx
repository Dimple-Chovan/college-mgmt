import React, { useState, useContext } from 'react';
import Layout from '../components/Layout'; // Adjust the import path as needed
import { FormContext } from '../context/FormContext';

const VideoTutorial: React.FC = () => {
  
  const { videoProgress, setVideoProgress, notes, setNotes } = useContext(FormContext);

  const [currentNotes, setCurrentNotes] = useState(notes);
  const [transcript, setTranscript] = useState('This is a placeholder transcript for the video.');
  const [currentVideo, setCurrentVideo] = useState('https://www.w3schools.com/html/mov_bbb.mp4');

  const videos = [
    { title: 'Video 1', url: 'https://www.w3schools.com/html/mov_bbb.mp4', thumbnail: 'https://via.placeholder.com/150' },
    { title: 'Video 2', url: 'https://www.w3schools.com/html/movie.mp4', thumbnail: 'https://via.placeholder.com/150' },
    { title: 'Video 3', url: 'https://www.w3schools.com/html/mov_bbb.mp4', thumbnail: 'https://via.placeholder.com/150' },
    { title: 'Video 4', url: 'https://www.w3schools.com/html/movie.mp4', thumbnail: 'https://via.placeholder.com/150' },
    { title: 'Video 5', url: 'https://www.w3schools.com/html/mov_bbb.mp4', thumbnail: 'https://via.placeholder.com/150' },
    { title: 'Video 6', url: 'https://www.w3schools.com/html/movie.mp4', thumbnail: 'https://via.placeholder.com/150' },
    // Add more videos here
  ];

  const handleProgress = (event: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = event.currentTarget;
    const progressValue = (video.currentTime / video.duration) * 100;
    setVideoProgress((prevProgress) => ({
      ...prevProgress,
      [currentVideo]: progressValue,
    }));
  };

  const handleNotesChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentNotes(event.target.value);
  };

  const handleVideoChange = (url: string) => {
    setCurrentVideo(url);
    setTranscript('This is a placeholder transcript for the video.'); // Update transcript as needed
  };

  const handleSaveNotes = () => {
    setNotes(currentNotes);
    console.log('Notes saved:', currentNotes);
  };

  return (
    <Layout>
      <div className="flex flex-col md:flex-row p-6 bg-white rounded-lg shadow-md">
        <div className="flex-1 ">
          <video
            key={currentVideo}
            controls
            onTimeUpdate={handleProgress}
            className="w-full rounded-lg mb-4 md:mb-0"
          >
            <source src={currentVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="mt-2">
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
              <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${videoProgress[currentVideo] || 0}%` }}></div>
            </div>
            <div className="text-sm font-medium text-gray-600">
              Progress: {Math.round(videoProgress[currentVideo] || 0)}%
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Transcript</h3>
            <p className="text-gray-700">{transcript}</p>
          </div>
        </div>
        <div className="flex-1 md:ml-7 overflow-y-auto h-80">
          <ul className="space-y-4">
          <h3 className="text-xl font-semibold mb-2">Video List</h3>
            {videos.map((video) => (
              <li key={video.url} className="mb-2">
                <button
                  onClick={() => handleVideoChange(video.url)}
                  className="flex items-center space-x-4 text-left"
                >
                  <img src={video.thumbnail} alt={video.title} className="w-16 h-16 rounded" />
                  <div>
                    <div className="text-blue-500 hover:underline">{video.title}</div>
                    <div className="text-sm text-gray-600">
                      Progress: {Math.round(videoProgress[video.url] || 0)}%
                    </div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Notes</h3>
        <textarea
          value={currentNotes}
          onChange={handleNotesChange}
          className="w-full h-64 p-2 border border-gray-300 rounded"
          placeholder="Take notes here..."
        ></textarea>
        <button
          onClick={handleSaveNotes}
          className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Save Notes
        </button>
      </div>
    </Layout>
  );
};

export default VideoTutorial;