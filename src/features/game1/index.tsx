"use client";

import { randomInt } from "crypto";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const VRInputComponent: React.FC = () => {
  const targetChar = useMemo(() => {
    return [
      "uchukita-",
      "bokenasukita-",
      "kusahukahi",
      "kusoge-",
      "koregajinsei",
      "orenodensetu",
      "pugya-",
      "ou",
      "re-suhakuruma",
      "sonnabanana",
      "omaetensaiyana",
      "darekono",
      "tensaiteki",
      "ge-mutukuttano",
      "ore",
      "wwwwww",
      "nanigawwwyanenn",
      "ahoka",
      "sinkendesu",
    ];
  }, []);
  const searchParams = useSearchParams();

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [charArray, setCharArray] = useState(
    targetChar[currentPhraseIndex].split("")
  );
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [count, setCount] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [timeLeft, setTimeLeft] = useState<number>(40);
  const [missCount, setMissCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const [gamestart, setGameStart] = useState("PRESS SPACE KEY  ");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioRef2 = useRef<HTMLAudioElement | null>(null);

  // 最新のcountとmissCountを保持するref
  const countRef = useRef(count);
  const missCountRef = useRef(missCount);
  const imageRef = useRef<HTMLImageElement>(null);
  const imageRef2 = useRef<HTMLImageElement>(null);
  const imageRef3 = useRef<HTMLImageElement>(null);
  const imageRef4 = useRef<HTMLImageElement>(null);
  const imageRef5 = useRef<HTMLImageElement>(null);
  const imageRef6 = useRef<HTMLImageElement>(null);
  const imageRef7 = useRef<HTMLImageElement>(null);
  const imageRef8 = useRef<HTMLImageElement>(null);
  const imageRef9 = useRef<HTMLImageElement>(null);
  const params = new URLSearchParams();
  params.append("key1", `${missCountRef.current}`);
  params.append("key2", `${countRef.current}`);
  const href = `/finish/?${params}`;
  useEffect(() => {
    const handleSpacePress = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        setIsRunning(true);
        setTimeLeft(40);
        setGameStart("");
        if (audioRef.current && searchParams.get("playSound") === "true") {
          audioRef.current.play().catch((error) => {
            console.error("Error attempting to play:", error);
          });
        }
        // スペースキーが押されたときにページ遷移タイマーを開始
        const pageTransitionTimer = setTimeout(() => {
          router.push(href);
        }, 41000); // 41秒後に実行

        // スペースキーのイベントリスナーを削除
        window.removeEventListener("keydown", handleSpacePress);

        return () => clearTimeout(pageTransitionTimer);
      }
    };

    window.addEventListener("keydown", handleSpacePress);
    return () => window.removeEventListener("keydown", handleSpacePress);
  }, [router]);

  useEffect(() => {
    const handleKeyPress = () => {
      if (audioRef2.current && searchParams.get("playSound") === "true") {
        // Restart the audio
        audioRef2.current.currentTime = 0;
        audioRef2.current.play();
      }
    };

    // Add event listener for keypress
    window.addEventListener("keydown", handleKeyPress);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    if (isRunning) {
      const countdownTimer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            setIsRunning(false);
            clearInterval(countdownTimer);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => {
        clearInterval(countdownTimer);
      };
    }
  }, [isRunning, router]);

  useEffect(() => {
    if (isRunning) {
      const handleKeyDown = (event: KeyboardEvent) => {
        const inputChar = event.key.toLowerCase();
        const expectedChar = charArray[currentCharIndex]?.toLowerCase();
        //入力した文字が正解の時
        if (inputChar === expectedChar) {
          //あるワードの次の文字に進む
          setCurrentCharIndex((prev) => prev + 1);
          //単語を入力し終えたらという条件
          if (currentCharIndex + 1 >= charArray.length) {
            //currentPhraseIndex:用意したtypingword群の配列の添字番号
            //targetChar:用意したtypingword群の長さ
            //すべての単語を入力し終えていない時
            if (currentPhraseIndex + 1 < targetChar.length) {
              //したの一行+1しないと、最初のわーどが2回でる
              setCharArray(targetChar[currentPhraseIndex + 1].split(""));
              setCurrentPhraseIndex((prevcurrent) => prevcurrent + 1);
              setCurrentCharIndex(0); // 新しいフレーズの最初の文字から始める
            } else {
              setIsRunning(false);
            }
          } //ここにelseを書く時、その条件はまだ最後まで単語を入力し終えてない。
        } else {
          setMissCount((prevmiss) => prevmiss + 1);
        }
      };
      //keydownした時、handleKeyDownをセット
      window.addEventListener("keydown", handleKeyDown);
      //メモリリークしないようにイベントを解除しておく。
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isRunning, currentCharIndex, currentPhraseIndex]);

  useEffect(() => {
    countRef.current = count;
    missCountRef.current = missCount;
  }, [count, missCount]);

  useEffect(() => {
    const setUpAnimations = () => {
      // アニメーションを設定する関数
      const image1 = imageRef.current;
      const image2 = imageRef2.current;
      const image3 = imageRef3.current;
      const image4 = imageRef4.current;
      const image5 = imageRef5.current;
      const image6 = imageRef6.current;
      const image7 = imageRef7.current;
      const image8 = imageRef8.current;
      const image9 = imageRef9.current;

      if (image2 && image3 && image9) {
        setTimeout(() => {
          image2.setAttribute("visible", "true");
          image2.setAttribute(
            "animation__position",
            "property: position; to: -8 -1 10; dur: 4000; easing: linear; loop: false"
          );
          image2.setAttribute("scale", "3 3 3");
          image3.setAttribute("visible", "true");
          image9.setAttribute("visible", "true");
          image3.setAttribute(
            "animation__position",
            "property: position; to: 8 -1 10; dur: 3000; easing: linear; loop: false"
          );
          image3.setAttribute("scale", "3 3 3");
          image9.setAttribute(
            "animation__position",
            "property: position; to: -8 4 10; dur: 3000; easing: linear; loop: false"
          );
          image9.setAttribute("scale", "3 3 3");

          setTimeout(() => {
            image2.setAttribute("visible", "false");
          }, 8001);
        }, 1000);
      }

      if (image1) {
        setTimeout(() => {
          image1.setAttribute("visible", "true");
          image1.setAttribute(
            "animation__position",
            "property: position; to: 0 2 -7; dur: 300; easing: linear; loop: false"
          );
          setTimeout(() => {
            image1.setAttribute(
              "animation__rotation",
              "property: rotation; to: 0 360 0; dur: 300; easing: linear; loop: true"
            );
          }, 1000);

          setTimeout(() => {
            image1.setAttribute("visible", "false");
          }, 5000);
        }, 8002);
      }

      if (image5) {
        setTimeout(() => {
          image5.setAttribute("visible", "true");
          image5.setAttribute("scale", "10 10 10");

          setTimeout(() => {
            image5.setAttribute(
              "animation__position",
              "property: position; to: 35 4 -200; dur: 8000; easing: linear; loop: false"
            );
          }, 1000);

          setTimeout(() => {
            image5.setAttribute("visible", "false");
          }, 9001);
        }, 13002);
      }

      if (image6) {
        setTimeout(() => {
          image6.setAttribute("visible", "true");

          image6.setAttribute("scale", "10 10 10");

          setTimeout(() => {
            image6.setAttribute("visible", "false");
          }, 4001);
        }, 22004);
      }

      if (image4) {
        setTimeout(() => {
          image4.setAttribute("visible", "true");

          image4.setAttribute("scale", "3 3 3");

          setTimeout(() => {
            image4.setAttribute(
              "animation__position",
              "property: position; to: -10 -4 -10; dur: 3000; easing: linear; loop: false"
            );
          }, 2001);

          setTimeout(() => {
            image4.setAttribute(
              "animation__position",
              "property: position; to: 5 4 -10; dur: 3000; easing: linear; loop: false"
            );
          }, 5001);

          setTimeout(() => {
            image4.setAttribute(
              "animation__position",
              "property: position; to: 5 4 50; dur: 3000; easing: linear; loop: false"
            );
          }, 8001);
        }, 26004);
      }
    };

    if (isRunning) {
      setUpAnimations();
    } else {
      router.push(href);
    }
  }, [isRunning]);

  return (
    <a-scene keyboard-shortcuts="enterVR: false; exitVR: false">
      <a-camera wasd-controls="enabled: false"></a-camera>

      <a-assets>
        <audio id="myAudio" src="/main.mp3" ref={audioRef} loop></audio>
        <audio id="myAudio2" src="/type.mp3" ref={audioRef2}></audio>
      </a-assets>

      <a-assets timeout="10000">
        <img id="my-image" src="/univ.jpeg" alt="" />
        <img id="new-image" src="/ham.png" alt="" />
        <img id="inseki-image" src="/inseki.png" alt="" />
        <img id="inseki2-image" src="/inseki2.png" alt="" />
        <img id="nasu-image" src="/uchuhuku.png" alt="" />
        <img id="flying-image" src="/susi.png" alt="" />
        <img id="input-image" src="/input.png" alt="" />
        <img id="ufo-image" src="/ufo.png" alt="" />
        <img id="ship-image" src="/ship.png" alt="" />
      </a-assets>
      <a-sky src="#my-image" width="1" height="5"></a-sky>

      <a-image
        src="#new-image"
        ref={imageRef}
        id="animated-image"
        visible={false}
        position="0 0 -60"
        scale="3 3 3"
      ></a-image>
      <a-image
        src="#nasu-image"
        ref={imageRef2}
        id="animated-image2"
        visible={false}
        position="0 0 -60"
        scale="3 3 3"
      ></a-image>
      <a-image
        src="#inseki-image"
        ref={imageRef3}
        id="animated-image3"
        visible={false}
        position="0 0 -60"
        scale="3 3 3"
      ></a-image>
      <a-image
        src="#ufo-image"
        ref={imageRef4}
        id="ufo-image"
        visible={false}
        position="0 0 -60"
        scale="3 3 3"
      ></a-image>
      <a-image
        src="#ship-image"
        ref={imageRef5}
        id="ufo-image"
        visible={false}
        position="0 0 50"
        scale="1 1 1"
      ></a-image>
      <a-image
        src="#flying-image"
        ref={imageRef6}
        id="flying-image"
        visible={false}
        position="0 0 -60"
        scale="1 1 1"
      ></a-image>

      <a-image
        src="#new-image"
        ref={imageRef8}
        id="animated-image8"
        visible={false}
        position="25 6 -20"
        scale="9 9 9"
      ></a-image>
      <a-image
        src="#inseki2-image"
        ref={imageRef9}
        id="animated-image9"
        visible={false}
        position="0 0 -60"
        scale="3 3 3"
      ></a-image>

      <a-light type="ambient" color="#445451"></a-light>

      <a-entity position="0 0 0">
        <a-image
          src="#input-image"
          width="10"
          height="2"
          visible={true}
          position="0 -0.7 -7"
        ></a-image>
        <a-text value="Now Interactable" geometry="primitive:plane"></a-text>

        {charArray.map((char, index) => (
          <a-text
            key={index}
            value={char}
            text="font: https://cdn.aframe.io/fonts/Exo2Bold.fnt"
            color={index < currentCharIndex ? "gray" : "white"}
            position={`${(-charArray.length / 2 + index) * 0.5}  0 -5`}
            scale="3 3 3"
          ></a-text>
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
      <a-entity position="0 -3 -3">
        <a-text
          value={gamestart}
          color="yellow"
          position="0 2.5 0"
          align="center"
          width="4"
          scale="2 2 2"
        ></a-text>
      </a-entity>
    </a-scene>
  );
};

export default VRInputComponent;
