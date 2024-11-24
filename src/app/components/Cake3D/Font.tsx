import React, { useEffect, useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

type CakeTextProps = {
  text: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  fontType: string;
  maxCharsPerLine?: number;
  color: string; // New prop for text color
};

const CakeFont: React.FC<CakeTextProps> = ({
  text,
  position = [0, 1.4, -0.2],
  rotation = [Math.PI / 2, Math.PI, 0],
  fontType,
  maxCharsPerLine = 10,
  color = 'black' // Default color
}) => {
  const font = useLoader(FontLoader, `/fonts/${fontType}.typeface.json`);
  const meshRefs = useRef<THREE.Mesh[]>([]);

  // Helper function to split text into lines with a max number of lines limit
  const splitTextIntoLines = (text: string, maxChars: number, maxLines: number) => {
    const words = text.split(" ");
    const lines: string[] = [];
    let currentLine = "";
    let counter = 0;

    words.forEach((word) => {
      if (counter >= maxLines) return; // Skip adding more lines if the limit is reached

      const testLine = currentLine ? `${currentLine} ${word}` : word;
      if (testLine.length > maxChars) {
        lines.push(currentLine);
        lines.push(" ");
        counter++;
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    });

    // Add the last line if there's remaining text and we haven't reached the limit
    if (currentLine && counter < maxLines) {
      lines.push(currentLine);
    }
    
    return lines;
  };

  const lines = splitTextIntoLines(text, maxCharsPerLine, 4);

  useEffect(() => {
    if (font && meshRefs.current) {
      lines.forEach((line, index) => {
        if (meshRefs.current[index]) {
          const textGeometry = new TextGeometry(line, {
            font: font,
            size: 0.3,
            height: 0.03,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.01,
            bevelSegments: 5,
          });
          textGeometry.center();

          meshRefs.current[index].geometry = textGeometry;
          // Set the text color from the color prop
          meshRefs.current[index].material = new THREE.MeshStandardMaterial({ color });
        }
      });
    }

    // Cleanup function to dispose geometries
    return () => {
      meshRefs.current.forEach(mesh => mesh.geometry && mesh.geometry.dispose());
    };
  }, [font, lines, fontType, color]); // Add color to the dependency array

  return (
    <group position={position} rotation={rotation}>
      {lines.map((line, index) => (
        <mesh
          ref={(el) => (meshRefs.current[index] = el!)}
          key={index}
          position={[0, -index * 0.25, 0]} // Adjust the vertical spacing between lines
        />
      ))}
    </group>
  );
};

export default CakeFont;
