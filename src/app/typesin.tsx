import { randomInt } from 'crypto';
import React, { useState, useEffect,useRef } from 'react';
import { useRouter } from "next/navigation";
import Image from 'next/image';
import { useMemo } from 'react';

const VRInputComponent = () => {
  const targetChar = useMemo(() => {
    return ['uchukita-', 'bokenasukita-', 'kusahukahi', 'kusoge-','koregajinsei','orenodensetu','pugya-','ou','re-suhakurumagadaijiyanai','sonnabananajyu-su'
    ,'omaetensaiyana','darekono','tensaiteki','ge-mutukuttano','ore','wwwwww','nanigawwwyanenn','ahoaka','kocchihasinkennnannya']  }, []);
 const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [charArray, setCharArray] = useState(targetChar[currentPhraseIndex].split(''));
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [count, setCount] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(40);
  const [missCount,setMissCount] = useState<number>(0);
  const params = new URLSearchParams();
  const router = useRouter();

  // 最新のcountとmissCountを保持するref
  const countRef = useRef(count);
  const missCountRef = useRef(missCount);
  const audioRef = useRef<HTMLAudioElement | null>(null);




  useEffect(() => {
    // オーディオ再生を試みる関数
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(error => {
          console.error('Error attempting to play:', error);
        });
      }
    };

    // ページロード時にオーディオを再生
    playAudio();
  }, []);
  useEffect(() => {
    setIsRunning(true);
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          setIsRunning(false);
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // currentPhraseIndexが変わるたびにcharArrayを更新
  useEffect(() => {
    if (currentPhraseIndex < targetChar.length) {
      setCharArray(targetChar[currentPhraseIndex].split(''));
      setCurrentCharIndex(0); // 新しいフレーズの最初の文字から始める
    }
  }, [currentPhraseIndex,targetChar]);
  useEffect(() => {
    countRef.current = count;
    missCountRef.current = missCount;
  }, [count, missCount]);

  // タイマーを設定して、41秒後にページ遷移
  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams();
      params.append("key1", `${missCountRef.current}`);
      params.append("key2", `${countRef.current}`);
      const href = `/finish/?${params}`;
      router.push(href);
    }, 41000); // 41秒後に実行
    return () => clearTimeout(timer); // クリーンアップタイムアウト
  }, [router]); // 初回レンダリング時にのみ実行

  useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (!isRunning) {

          return;
        }
      const inputChar = event.key.toLowerCase();
      const expectedChar = charArray[currentCharIndex]?.toLowerCase();
      if (inputChar === expectedChar) {
        setCount(prevcount => prevcount+1);
        setIsCorrect(true);
        setCurrentCharIndex((prev) => prev + 1);
        if (currentCharIndex + 1 === charArray.length) {
          if (currentPhraseIndex + 1 < targetChar.length) {
            setCurrentPhraseIndex((prevcurrent) => prevcurrent + 1);
          } else {
            setIsRunning(false);
          }
        }
      } else {
        setMissCount(prevmiss=>prevmiss + 1);
        setIsCorrect(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isRunning, currentCharIndex, charArray, currentPhraseIndex,targetChar.length]);
  
    const imageRef = useRef<HTMLImageElement>(null);
    const imageRef2 = useRef<HTMLImageElement>(null);
    const imageRef3 = useRef<HTMLImageElement>(null);
    const imageRef4 = useRef<HTMLImageElement>(null);
    const imageRef5 = useRef<HTMLImageElement>(null);
    const imageRef6 = useRef<HTMLImageElement>(null);
    const imageRef7 = useRef<HTMLImageElement>(null);
    const imageRef8 = useRef<HTMLImageElement>(null);
    const imageRef9 = useRef<HTMLImageElement>(null);

    useEffect(() => {
      const image = imageRef.current;
      if (image) {

        setTimeout(() => {
          image.setAttribute('visible', 'true');
          

          image.setAttribute('animation__position', 'property: position; to: 0 2 -7; dur: 300; easing: linear; loop: false');
  
          setTimeout(() => {
            image.setAttribute('animation__rotation', 'property: rotation; to: 0 360 0; dur: 300; easing: linear; loop: true');
          }, 5000);
          setTimeout(() => {
            image.setAttribute('visible','false');
          }, 9000);
        }, 3000);
        
      }
    }, []);
    useEffect(() => {
      const image = imageRef2.current;
      if (image) {

        setTimeout(() => {
          image.setAttribute('visible', 'true');
          

          image.setAttribute('animation__position', 'property: position; to: -8 -1 -6; dur: 6000; easing: linear; loop: false');
          image.setAttribute('scale', '3 3 3');

  
          setTimeout(() => {
            image.setAttribute('animation__rotation', 'property: rotation; to: 0 360 360; dur: 6000; easing: linear; loop: true');

          }, 5000);
          setTimeout(() => {
            image.setAttribute('visible','false');
          }, 11000);
        }, 12001);
        
      }
    }, []);
    useEffect(() => {
      const image = imageRef3.current;
      const image2 = imageRef9.current;

      if (image && image2) {

        setTimeout(() => {
          image.setAttribute('visible', 'true');
          image2.setAttribute('visible', 'true');


          image.setAttribute('animation__position', 'property: position; to: 8 -1 10; dur: 3000; easing: linear; loop: false');
          image.setAttribute('scale', '3 3 3');

          image2.setAttribute('animation__position', 'property: position; to: -8 4 10; dur: 3000; easing: linear; loop: false');
          image2.setAttribute('scale', '3 3 3');

  
          setTimeout(() => {
            image.setAttribute('animation__rotation', 'property: rotation; to: 0 360 360; dur: 3000; easing: linear; loop: true');

          }, 5000);
          
          setTimeout(() => {
            image2.setAttribute('animation__rotation', 'property: rotation; to: 0 360 360; dur: 3000; easing: linear; loop: true');

          }, 5000);
          setTimeout(() => {
            image.setAttribute('visible','false');
          }, 8000);
        }, 23002);
        
      }
    }, []);
    useEffect(() => {
      const image4 = imageRef4.current;
      const image5 = imageRef5.current;
      const image6 = imageRef6.current;
      const image7 = imageRef7.current;
      const image8 = imageRef8.current;

      if (image4 && image5 && image6 && image7 && image8) {

        setTimeout(() => {
          setTimeout(() => {
            image4.setAttribute('visible', 'true');

          }, 500);
          setTimeout(() => {
            image5.setAttribute('visible', 'true');

          }, 1000);
          setTimeout(() => {
            image6.setAttribute('visible', 'true');

          }, 1500);
          setTimeout(() => {
            image7.setAttribute('visible', 'true');

          }, 2000);
          setTimeout(() => {
            image8.setAttribute('visible', 'true');

          }, 2500);

          setTimeout(() => {
            image8.setAttribute('animation__rotation', 'property: rotation; to: 0 360 0; dur: 300; easing: linear; loop: true');

          }, 3000);

          setTimeout(() => {
            image4.setAttribute('visible','false');
            image5.setAttribute('visible','false');

            image6.setAttribute('visible','false');

            image7.setAttribute('visible','false');
            image8.setAttribute('visible','false');


          }, 7000);
        }, 31003);
        
      }
    }, []);


    
  return (

    <a-scene keyboard-shortcuts="enterVR: false; exitVR: false">

        <a-camera wasd-controls="enabled: false"></a-camera>
        <a-assets>
        <audio id="myAudio" src="/main.mp3" ref={audioRef} autoPlay loop></audio>
      </a-assets>

        <a-assets timeout="10000">
            <Image id="my-image" src="/univ.jpeg" alt=""/>
            <Image id="new-image" src="/ham.png" alt=""/>
            <Image id="inseki-image" src="/inseki.png" alt=""/>
            <Image id="inseki2-image" src="/inseki2.png" alt=""/>

            <Image id="nasu-image" src="/nasu.png" alt=""/>
            <Image id="flying-image" src="/susi.png" alt=""/>
            <Image id="input-image" src="/input.png" alt=""/>
            <Image id="hito1-image" src="/hito1.png" alt=""/>
            <Image id="hito2-image" src="/hito2.png" alt=""/>
            <Image id="hito3-image" src="/hito3.png" alt=""/>
            <Image id="hito4-image" src="/hito4.png" alt=""/>
        </a-assets>
        <a-sky src="#my-image" width="1" height="5"></a-sky>

         
        <a-image src="#new-image" ref={imageRef} id="animated-image" visible={false} position="0 0 -60" scale="3 3 3"></a-image>
        <a-image src="#nasu-image" ref={imageRef2} id="animated-image2" visible={false} position="0 0 -60" scale="3 3 3"></a-image>
        <a-image src="#inseki-image" ref={imageRef3} id="animated-image3" visible={false} position="0 0 -60" scale="3 3 3"></a-image>
        <a-image src="#hito1-image" ref={imageRef4} id="animated-image4" visible={false} position="-35 -6 -60" scale="4 4 4"></a-image>
        <a-image src="#hito2-image" ref={imageRef5} id="animated-image5" visible={false} position="-20 -3 -50" scale="5 5 5"></a-image>
        <a-image src="#hito3-image" ref={imageRef6} id="animated-image6" visible={false} position="-5 0 -40" scale="6 6 6"></a-image>
        <a-image src="#hito4-image" ref={imageRef7} id="animated-image7" visible={false} position="10 3 -30" scale="7 7 7"></a-image>
        <a-image src="#new-image" ref={imageRef8} id="animated-image8" visible={false} position="25 6 -20" scale="9 9 9"></a-image>
        <a-image src="#inseki2-image" ref={imageRef9} id="animated-image9" visible={false} position="0 0 -60" scale="3 3 3"></a-image>

        <a-light type="ambient" color="#445451"></a-light>

        <a-entity position="0 0 0">
<a-image src="#input-image" width="10" height="2" visible={true} position="0 -0.7 -7"></a-image>
        {charArray.map((char, index) => (
            
            <a-text key={index}
                    value={char}
                    text="font: https://cdn.aframe.io/fonts/Exo2Bold.fnt"
                    color={index < currentCharIndex ? 'gray' : 'white'}
                    position={`${(( -charArray.length/2  + index))*0.5}  0 -5`}
                    scale="3 3 3"
                    >                    
            </a-text>
        ))}

    </a-entity>


    <a-entity position="0 0 -4">

        {timeLeft > 0 ? (
          <a-text 
            value={`${timeLeft}`} 
            color="white" 
            position="0 -0.5 0" 
            align="center"
            width="6"
          ></a-text>
        ) : (
          <a-text 
            value={`${timeLeft}`} 
            color="white" 
            position="0 -0.5 0" 
            align="center"
            width="6"
          ></a-text>
        )}
      </a-entity>


    </a-scene>
  );
};

export default VRInputComponent;
