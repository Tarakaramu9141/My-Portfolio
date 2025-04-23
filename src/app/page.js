'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [text, setText] = useState('');
  const roles = ["I'm Data Scientist", "I'm Data Analyst"];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  useEffect(() => {
    function type() {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        setText(currentRole.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setText(currentRole.substring(0, charIndex + 1));
        charIndex++;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => (isDeleting = true), 1000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }

      const typingSpeed = isDeleting ? 50 : 100;
      setTimeout(type, typingSpeed);
    }

    type();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center py-20 relative particle-bg">
      <div className="container mx-auto p-6 flex flex-col md:flex-row items-center">
        <div className="flex-1 flex justify-center md:justify-start">
          <div className="floating relative">
            <a href="/resume.pdf" download>
              <Image
                src="/profile.png"
                alt="K Taraka Ramu"
                width={350}
                height={350}
                className="rounded-full border-4 border-green-500"
              />
            </a>
          </div>
        </div>
        <div className="flex-1 text-center md:text-left mt-6 md:mt-0">
          <h1 className="text-5xl font-bold mb-4 text-white">Hi, I'm K Taraka Ramu</h1>
          <p className="text-lg mb-4 text-gray-200 typing-effect">{text}</p>
          <p className="text-sm text-gray-300 mb-4">Wanna check resume, press the image</p>
          <p className="text-lg text-gray-200">
            I am a data professional proficient in SQL, Python, and advanced machine learning, dedicated to unlocking data's potential for impactful decisions. I analyze complex datasets, create insightful visualizations, and build predictive models to drive strategic optimization and deliver measurable results.
          </p>
        </div>
      </div>
    </div>
  );
}
