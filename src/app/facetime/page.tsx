"use client";
import React, { useEffect, useRef, useState } from "react";

const FaceTime = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  console.log("stream", stream);
  const getCameraPermission = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      setStream(mediaStream);
      setHasPermission(true);
    } catch (error) {
      setHasPermission(false);
    }
  };
  useEffect(() => {
    getCameraPermission();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream; // Set the video source to the media stream
    }
  }, [stream]); // Run this effect when the stream changes

  const requestPermission = () => {
    setHasPermission(false);
    getCameraPermission();
  };

  return (
    <div className="w-screen h-screen flex">
      <div className="bg-gray-900 text-white h-full p-6 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
            <i className="fas fa-link"></i> Create Link
          </button>
          <button className="bg-green-500 hover:bg-green-400 text-white py-2 px-4 rounded-lg">
            New FaceTime
          </button>
        </div>

        {/* Call List */}
        <div className="space-y-6">
          {/* This Year */}
          <div>
            <h2 className="text-gray-400 mb-4">This Year</h2>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-600 rounded-full h-12 w-12 flex items-center justify-center">
                <i className="fas fa-user text-2xl"></i>
              </div>
              <div>
                <p className="text-lg font-semibold">63xxxxxx</p>
                <p className="text-sm text-gray-400">unknown - 25/04/24</p>
              </div>
            </div>
          </div>

          {/* Last Year */}
          <div>
            <h2 className="text-gray-400 mb-4">Last Year</h2>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-600 rounded-full h-12 w-12 flex items-center justify-center">
                <i className="fas fa-user text-2xl"></i>
              </div>
              <div>
                <p className="text-lg font-semibold">t.y@e.c</p>
                <p className="text-sm text-gray-400">
                  FaceTime Video - 16/10/23
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-yellow-50">
        {hasPermission ? (
          <video ref={videoRef} autoPlay className="w-full h-full" />
        ) : (
          <button
            onClick={requestPermission}
            className="bg-red-500 text-white py-2 px-4 rounded-lg"
          >
            Permission Missing - Click to Retry
          </button>
        )}
      </div>
    </div>
  );
};

export default FaceTime;
