import React, { useState, ChangeEvent, useEffect, useRef } from 'react';
import { useMemo } from 'react';

const SingleCharInput: React.FC = () => {
  const targetChar = useMemo(() => {
    return ['uchukita-', 'bokenasukita-', 'kusahukahi', 'kusoge-','koregajinsei','orenodensetu','pugya-','ou','re-suhakurumagadaijiyanai','sonnabananajyu-su'
    ,'omaetensaiyana','darekono','tensaiteki','ge-mutukuttano','ore','wwwwww','nanigawwwyanenn','ahoaka','kocchihasinkennnannya']  }, []);
  const [count1, setCount1] = useState(0); // 現在の文字列のインデックス
  const [charArray, setCharArray] = useState(targetChar[count1].split('')); // 現在の文字列を文字の配列に分割
  const [count, setCount] = useState(0); // 現在の文字のインデックス
  const [inputValue, setInputValue] = useState(''); // 入力された文字
  const [isCorrect, setIsCorrect] = useState(false); // 入力の正誤を保持
  const inputRef = useRef<HTMLInputElement>(null); // input要素への参照

  useEffect(() => {
    const inputElement = inputRef.current;
    if (inputElement) {
      inputElement.focus();
      const keepFocus = () => inputElement.focus();
      inputElement.addEventListener('blur', keepFocus);

      return () => inputElement.removeEventListener('blur', keepFocus);
    }
  }, []);

  useEffect(() => {
    if (count1 < targetChar.length) {
      setCharArray(targetChar[count1].split(''));
      setCount(0);
    }
  }, [count1,targetChar]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const expectedChar = charArray[count];

    if (value === expectedChar) {
      setIsCorrect(true);
      setCount(prev => prev + 1);
      if (count + 1 === charArray.length) {
        if (count1 + 1 < targetChar.length) {
          setCount1(prev => prev + 1); // 次の文字列に進む
        } else {
          alert('全て正しく入力されました！');
        }
      }
    } else {
      setIsCorrect(false);
      setInputValue(''); // 入力フィールドをクリア
    }
  };

  return (
    <div>
      {charArray.map((char, index) => (
        <span key={index} style={{ color: index < count ? 'green' : 'black' }}>
          {char}
        </span>
      ))}
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={handleChange}
        maxLength={1}
        style={{ display: 'block', marginTop: '20px', marginBottom: '20px' }}
      />
    </div>
  );
};

export default SingleCharInput;
