import React from 'react';
import { Text3D } from '@react-three/drei';

type CakeTextProps = {
  text: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  maxCharsPerLine?: number;
  color?: string;
  fontSize?: number;
  fontPath: string; // Path to font JSON file
};

const CakeFont: React.FC<CakeTextProps> = ({
  text,
  position = [0, 1.4, -0.2],
  rotation = [Math.PI / 2, Math.PI, 0],
  maxCharsPerLine = 10,
  color = 'black',
  fontSize = 0.35,
  fontPath = '/fonts/helvetiker_regular.typeface.json',
}) => {
  // Helper function to split text into lines with a max number of lines limit
  const splitTextIntoLines = (text: string, maxChars: number, maxLines: number) => {
    const words = text.split(' ');
    const lines: string[] = [];
    let currentLine = '';
    let counter = 0;

    words.forEach((word) => {
      if (counter >= maxLines) return;

      const testLine = currentLine ? `${currentLine} ${word}` : word;
      if (testLine.length > maxChars) {
        lines.push(currentLine);
        counter++;
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    });

    if (currentLine && counter < maxLines) {
      lines.push(currentLine);
    }

    return lines;
  };

  const lines = splitTextIntoLines(text, maxCharsPerLine, 4);

  return (
    <group position={position} rotation={rotation}>
      {lines.map((line, index) => (
        <Text3D
          key={index}
          font={fontPath}
          size={fontSize}
          height={0.05}
          curveSegments={8}
          bevelEnabled
          bevelThickness={0.01}
          bevelSize={0.01}
          bevelSegments={5}
          position={[
            -line.length * (fontSize / 4), // Center horizontally by adjusting X position
            -index * (fontSize + 0.1), // Adjust vertical spacing
            0,
          ]}
        >
          {line}
          <meshStandardMaterial attach="material" color={color} />
        </Text3D>
      ))}
    </group>
  );
};

export default CakeFont;
