import React, { useEffect, useState } from 'react';
import WordCard from './components/WordCard';
import Footer from './components/Footer';
import type { Word } from './types/word';

const App: React.FC = () => {
  const [words, setWords] = useState<Word[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data: Word[]) => setWords(data))
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  const handleNext = () => {
    if (words.length === 0) return;

    let newIndex = currentIndex;

    // Farklı bir kelime gelene kadar tekrar et
    while (newIndex === currentIndex) {
      // Rastgele index seç (0 ile words.length - 1 arası)
      newIndex = Math.floor(Math.random() * words.length);
    }

    setCurrentIndex(newIndex);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + words.length) % words.length
    );
  };

  return (
    <>
      <div className='min-vh-100 bg-light d-flex flex-column align-items-center justify-content-center gap-5 p-4 pb-5'>
        {words.length > 0 ? (
          <>
            <WordCard wordData={words[currentIndex]} />
            <div className='d-flex gap-4'>
              <button
                onClick={handlePrev}
                className='px-4 py-2 bg-primary text-white fw-semibold rounded-3 shadow hover-bg-primary active-scale'
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                className='px-4 py-2 bg-primary text-white fw-semibold rounded-3 shadow hover-bg-primary active-scale'
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default App;
