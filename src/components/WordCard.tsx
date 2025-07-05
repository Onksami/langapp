import React from 'react';
import type { Word } from '../types/word';

interface Props {
  wordData: Word;
}

const WordCard: React.FC<Props> = ({ wordData }) => {
  return (
    <div className='container-md mx-auto mt-5 position-relative'>
      <div className='bg-white shadow-lg rounded-3 p-5 border border-light position-relative'>
        <span
          className='position-absolute top-0 start-0 m-3 d-flex align-items-center justify-content-center bg-primary text-white rounded-circle'
          style={{ width: '40px', height: '40px', fontWeight: '600' }}
        >
          {wordData.id}
        </span>
        <h2 className='display-4 fw-bold text-center text-primary'>
          {wordData.word}
        </h2>
        <p className='fs-4 text-body mt-4 text-center fst-italic'>
          {wordData.example}
        </p>
        <p className='small text-muted mt-2 text-center'>{wordData.eng}</p>
      </div>
    </div>
  );
};

export default WordCard;
