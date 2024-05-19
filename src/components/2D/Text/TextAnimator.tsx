import React, { useEffect, useRef } from 'react';
import { init, animateText, formatText } from '../../../../public/assets/animated-text';

interface TextAnimatorProps {
  text: string;
  onComplete?: () => void;
}

const TextAnimator: React.FC<TextAnimatorProps> = ({ text, onComplete }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.innerHTML = '';
      textRef.current.innerHTML = formatText(text);
      init(textRef.current);
      animateText(textRef.current, onComplete);
    }
  }, [text, onComplete]);

  return <div ref={textRef}></div>;
};

export default TextAnimator;
