import { useState, useEffect } from 'react';

const Logo = () => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [displayedString, setDisplayedString] = useState('');

  const strings = ['... on the way to fullstack'];

  useEffect(() => {
    const currentString = strings[currentStringIndex];

    if (displayedString.length < currentString.length) {
      const timer = setTimeout(() => {
        setDisplayedString(currentString.substring(0, displayedString.length + 1));
      }, 100); // Adjust the typing speed (in milliseconds)

      return () => clearTimeout(timer); // Cleanup timer on component unmount
    }
  }, [currentStringIndex, displayedString, strings]);

  useEffect(() => {
    if (displayedString === strings[currentStringIndex] && currentStringIndex < strings.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStringIndex(currentStringIndex + 1);
      }, 1000); // Adjust the duration between strings (in milliseconds)

      return () => clearTimeout(timer); // Cleanup timer on component unmount
    }
  }, [currentStringIndex, displayedString, strings]);

  return (
    <div>
      <h1>{displayedString}</h1>
    </div>
  );
}

export default Logo;
