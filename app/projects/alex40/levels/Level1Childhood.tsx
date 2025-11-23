import React, { useState, useEffect, useCallback } from 'react';
import { LevelProps } from '../types';
import PixelButton from '../components/PixelButton';
import { Flag, Timer, Trophy, X, ArrowLeft, ArrowRight } from 'lucide-react';

const GOAL_DISTANCE = 100;

const Level1Childhood: React.FC<LevelProps> = ({ onComplete, setAudioMood }) => {
  const [distance, setDistance] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [showHandChoice, setShowHandChoice] = useState(false);
  const [handChosen, setHandChosen] = useState<'left' | 'right' | null>(null);
  const [showError, setShowError] = useState(false);
  const [playCheerSound, setPlayCheerSound] = useState(false);

  // Hurdles Logic
  const [isJumping, setIsJumping] = useState(false);
  const [stunned, setStunned] = useState(false);
  const HURDLES = [30, 70]; // Positions in %

  const handleSprint = useCallback(() => {
    if (!started && !finished) setStarted(true);
    if (finished || stunned) return;

    setDistance(prev => {
      const nextDist = Math.min(prev + 2, GOAL_DISTANCE);

      // Check Collision
      const hitHurdle = HURDLES.some(h => Math.abs(nextDist - h) < 2);
      if (hitHurdle && !isJumping) {
        setStunned(true);
        setAudioMood('ERROR');
        setTimeout(() => {
          setStunned(false);
          setAudioMood('DEFAULT');
        }, 1000);
        return prev - 5; // Knockback
      }
      return nextDist;
    });
  }, [started, finished, stunned, isJumping, setAudioMood]);

  const handleJump = useCallback(() => {
    if (finished || stunned || isJumping) return;
    setIsJumping(true);
    setTimeout(() => setIsJumping(false), 600); // Jump duration
  }, [finished, stunned, isJumping]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showHandChoice) {
        // Handle hand choice with arrow keys
        if (e.code === 'ArrowLeft') {
          handleHandChoice('left');
        } else if (e.code === 'ArrowRight') {
          handleHandChoice('right');
        }
      } else if (e.code === 'Space' || e.code === 'ArrowRight' || e.code === 'ArrowLeft') {
        handleSprint();
      } else if (e.code === 'ArrowUp') {
        handleJump();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleSprint, handleJump, showHandChoice]);

  // Timer: Counts UP
  useEffect(() => {
    if (!started || finished) return;
    const timer = setInterval(() => setTimeElapsed(prev => prev + 1), 1000);
    return () => clearInterval(timer);
  }, [started, finished]);

  const handleHandChoice = (hand: 'left' | 'right') => {
    if (handChosen) return; // Already chosen

    setHandChosen(hand);

    if (hand === 'left') {
      // Wrong hand - show error
      setTimeout(() => {
        setAudioMood('ERROR');
        setShowError(true);
      }, 500);

      setTimeout(() => {
        onComplete(Math.max(100, 1000 - (timeElapsed * 10)));
      }, 2500);
    } else {
      // Right hand - success!
      setTimeout(() => {
        onComplete(Math.max(100, 1000 - (timeElapsed * 10)));
      }, 1500);
    }
  };

  // Win Condition Sequence
  useEffect(() => {
    if (distance >= GOAL_DISTANCE && !finished) {
      setFinished(true);

      // 1. Play cheering sound
      setPlayCheerSound(true);
      setAudioMood('FANFARE');

      // 2. Show hand choice after fanfare
      setTimeout(() => {
        setShowHandChoice(true);
        setAudioMood('SILENT');
      }, 2000);
    }
  }, [distance, finished, timeElapsed, setAudioMood]);

  // Cheering sound effect using Web Audio API
  useEffect(() => {
    if (!playCheerSound) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const duration = 2;

    // Create crowd cheering simulation with filtered noise
    const bufferSize = audioContext.sampleRate * duration;
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const data = buffer.getChannelData(0);

    // Generate crowd noise with amplitude modulation
    for (let i = 0; i < bufferSize; i++) {
      const t = i / audioContext.sampleRate;
      const envelope = Math.sin(t * Math.PI / duration) * 0.3;
      data[i] = (Math.random() * 2 - 1) * envelope;
    }

    const source = audioContext.createBufferSource();
    source.buffer = buffer;

    const filter = audioContext.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 800;
    filter.Q.value = 1;

    const gain = audioContext.createGain();
    gain.gain.value = 0.2;

    source.connect(filter).connect(gain).connect(audioContext.destination);
    source.start();

    return () => {
      source.stop();
      audioContext.close();
    };
  }, [playCheerSound]);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-sky-300 relative overflow-hidden border-4 border-black select-none">
      {/* Background Scenery */}
      <div className="absolute bottom-0 w-full h-32 bg-green-600 border-t-4 border-black"></div>

      {/* Left Bleachers */}
      <div className="absolute left-0 bottom-32 w-1/4 h-40">
        {/* Bleacher structure */}
        <div className="absolute bottom-0 left-4 w-full h-8 bg-gray-400 border-2 border-black"></div>
        <div className="absolute bottom-8 left-8 w-5/6 h-8 bg-gray-400 border-2 border-black"></div>
        <div className="absolute bottom-16 left-12 w-4/6 h-8 bg-gray-400 border-2 border-black"></div>
        <div className="absolute bottom-24 left-16 w-3/6 h-8 bg-gray-400 border-2 border-black"></div>

        {/* Spectators - simple circles/ovals with cheering animation */}
        <div className="absolute bottom-2 left-6 w-3 h-3 bg-blue-500 rounded-full border border-black animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="absolute bottom-2 left-10 w-3 h-3 bg-red-500 rounded-full border border-black animate-bounce" style={{ animationDelay: '100ms' }}></div>
        <div className="absolute bottom-2 left-14 w-3 h-3 bg-yellow-500 rounded-full border border-black animate-bounce" style={{ animationDelay: '200ms' }}></div>
        <div className="absolute bottom-10 left-10 w-3 h-3 bg-green-500 rounded-full border border-black animate-bounce" style={{ animationDelay: '300ms' }}></div>
        <div className="absolute bottom-10 left-14 w-3 h-3 bg-purple-500 rounded-full border border-black animate-bounce" style={{ animationDelay: '400ms' }}></div>
        <div className="absolute bottom-18 left-14 w-3 h-3 bg-pink-500 rounded-full border border-black animate-bounce" style={{ animationDelay: '500ms' }}></div>
        <div className="absolute bottom-18 left-18 w-3 h-3 bg-orange-500 rounded-full border border-black animate-bounce" style={{ animationDelay: '600ms' }}></div>
      </div>

      {/* Right Bleachers */}
      <div className="absolute right-0 bottom-32 w-1/4 h-40">
        {/* Bleacher structure */}
        <div className="absolute bottom-0 right-4 w-full h-8 bg-gray-400 border-2 border-black"></div>
        <div className="absolute bottom-8 right-8 w-5/6 h-8 bg-gray-400 border-2 border-black"></div>
        <div className="absolute bottom-16 right-12 w-4/6 h-8 bg-gray-400 border-2 border-black"></div>
        <div className="absolute bottom-24 right-16 w-3/6 h-8 bg-gray-400 border-2 border-black"></div>

        {/* Spectators - simple circles/ovals with cheering animation */}
        <div className="absolute bottom-2 right-6 w-3 h-3 bg-red-500 rounded-full border border-black animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="absolute bottom-2 right-10 w-3 h-3 bg-blue-500 rounded-full border border-black animate-bounce" style={{ animationDelay: '250ms' }}></div>
        <div className="absolute bottom-2 right-14 w-3 h-3 bg-green-500 rounded-full border border-black animate-bounce" style={{ animationDelay: '350ms' }}></div>
        <div className="absolute bottom-10 right-10 w-3 h-3 bg-yellow-500 rounded-full border border-black animate-bounce" style={{ animationDelay: '450ms' }}></div>
        <div className="absolute bottom-10 right-14 w-3 h-3 bg-orange-500 rounded-full border border-black animate-bounce" style={{ animationDelay: '550ms' }}></div>
        <div className="absolute bottom-18 right-14 w-3 h-3 bg-purple-500 rounded-full border border-black animate-bounce" style={{ animationDelay: '650ms' }}></div>
        <div className="absolute bottom-18 right-18 w-3 h-3 bg-pink-500 rounded-full border border-black animate-bounce" style={{ animationDelay: '750ms' }}></div>
      </div>

      <div className="absolute top-20 left-20 w-16 h-16 bg-yellow-300 rounded-full border-4 border-black animate-pulse"></div>

      <div className="absolute top-10 right-10 text-white opacity-80 text-6xl select-none">☁️</div>
      <div className="absolute top-24 left-1/3 text-white opacity-60 text-6xl select-none">☁️</div>

      {/* HUD */}
      <div className="absolute top-4 left-4 bg-black text-white p-2 border-2 border-white z-10">
        <div className="flex items-center gap-2">
          <Timer size={20} />
          <span className="text-xl">{timeElapsed}s</span>
        </div>
      </div>

      {/* Win Sequence Overlay */}
      {showHandChoice && (
        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center z-50">
          <h2 className="text-4xl font-bold text-white mb-8 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">ACCEPT TROPHY WITH...</h2>

          <div className="flex items-center gap-12">
            {/* Left Hand Choice */}
            <button
              onClick={() => handleHandChoice('left')}
              disabled={handChosen !== null}
              className={`flex flex-col items-center p-8 border-4 rounded-lg transition-all ${handChosen === 'left'
                  ? 'bg-red-600 border-red-400 scale-95'
                  : handChosen === 'right'
                    ? 'opacity-30'
                    : 'bg-blue-600 border-blue-400 hover:scale-105 hover:bg-blue-500'
                }`}
            >
              <ArrowLeft size={64} className="text-white mb-4" />
              <span className="text-2xl font-bold text-white">LEFT HAND</span>
            </button>

            {/* The Trophy (Center Stage) */}
            <div className="relative">
              <div className="bg-yellow-400 p-4 rounded-full border-4 border-yellow-600 shadow-[0_0_50px_yellow]">
                <Trophy className="text-yellow-900 w-32 h-32" strokeWidth={2} />
              </div>
              {/* Red X Overlay */}
              {showError && (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <X className="text-red-600 w-48 h-48 animate-ping drop-shadow-lg" strokeWidth={5} />
                </div>
              )}
            </div>

            {/* Right Hand Choice */}
            <button
              onClick={() => handleHandChoice('right')}
              disabled={handChosen !== null}
              className={`flex flex-col items-center p-8 border-4 rounded-lg transition-all ${handChosen === 'right'
                  ? 'bg-green-600 border-green-400 scale-95'
                  : handChosen === 'left'
                    ? 'opacity-30'
                    : 'bg-blue-600 border-blue-400 hover:scale-105 hover:bg-blue-500'
                }`}
            >
              <ArrowRight size={64} className="text-white mb-4" />
              <span className="text-2xl font-bold text-white">RIGHT HAND</span>
            </button>
          </div>

          <p className="text-white mt-8 text-lg drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">Press ← or → arrow keys</p>
        </div>
      )}

      <div className="z-10 text-center mb-8">
        <h2 className="text-4xl font-bold text-black drop-shadow-md mb-2">CAMP OLYMPIC</h2>
        <p className="text-black font-bold bg-white/50 px-2">
          MASH <span className="text-red-600">[SPACE]</span> TO RUN • <span className="text-blue-600">[UP]</span> TO JUMP
        </p>
      </div>

      {/* Track */}
      <div className="w-full max-w-2xl h-16 border-4 border-black bg-orange-200 relative mt-10">
        <div
          className="h-full bg-red-500 border-r-4 border-black transition-all duration-75 ease-linear relative"
          style={{ width: `${distance}%` }}
        >
          {/* Character - Forward facing runner */}
          <div
            className={`absolute right-[-20px] top-[-50px] flex items-center transition-transform duration-200 ${isJumping ? '-translate-y-12' : ''}`}
          >
            <div className="relative">
              {/* Runner facing forward (flipped horizontally) */}
              <div className={`text-5xl ${stunned ? 'animate-spin' : ''}`} style={{ transform: 'scaleX(-1)' }}>
                {stunned ? '💥' : '🏃'}
              </div>

              {/* Trophy Logic - Only show here if NOT in hand choice mode (moved to overlay) */}
              {finished && !showHandChoice && (
                <div className="absolute -right-12 -top-4 bg-yellow-400 p-2 rounded-full border-4 border-yellow-600 shadow-lg animate-pulse">
                  <Trophy className="text-yellow-900" size={48} strokeWidth={3} />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Hurdles */}
        {HURDLES.map(pos => (
          <div
            key={pos}
            className="absolute bottom-0 w-4 h-12 bg-white border-2 border-black flex flex-col justify-between"
            style={{ left: `${pos}%` }}
          >
            <div className="w-full h-2 bg-red-600"></div>
            <div className="w-full h-2 bg-red-600"></div>
            <div className="w-full h-2 bg-red-600"></div>
          </div>
        ))}

        {/* Finish Line */}
        <div className="absolute right-0 top-0 h-full w-8 flex flex-col justify-between border-l-4 border-dashed border-black/50 opacity-50">
          <div className="h-1/2 bg-black/10"></div>
          <div className="h-1/2 bg-black/20"></div>
        </div>
        {/* Flag turns green when finished */}
        <Flag className={`absolute right-[-20px] top-[-50px] transition-colors duration-500 ${finished ? 'text-green-500' : 'text-red-600'}`} size={48} fill={finished ? 'currentColor' : 'none'} />
      </div>

      <div className="mt-12 md:hidden z-20">
        <PixelButton onClick={() => handleSprint()}>TAP RAPIDLY</PixelButton>
      </div>
    </div>
  );
};

export default Level1Childhood;
