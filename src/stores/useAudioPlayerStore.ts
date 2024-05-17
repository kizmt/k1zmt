import { create } from 'zustand';

// Define the interface for the state
interface AudioPlayerState {
  currentMusicIndex: number;
  isPlaying: boolean;
  isStopped: boolean;
  setCurrentMusicIndex: (index: number) => void;
  setIsPlaying: (playing: boolean) => void;
  setIsStopped: (stopped: boolean) => void;
}

// Create the Zustand store with explicit types for the parameters
const useAudioPlayerStore = create<AudioPlayerState>((set) => ({
  currentMusicIndex: 0,
  isPlaying: false,
  isStopped: true,
  setCurrentMusicIndex: (index: number) => set({ currentMusicIndex: index }),
  setIsPlaying: (playing: boolean) => set({ isPlaying: playing, isStopped: !playing }),
  setIsStopped: (stopped: boolean) => set({ isStopped: stopped, isPlaying: !stopped }),
}));

export default useAudioPlayerStore;
