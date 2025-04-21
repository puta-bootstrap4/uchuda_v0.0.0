"use client";
import { Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import top from "/../../public/univ.jpeg";
import main from "../../../public/maincontent.jpeg";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Adsense } from "@ctrl/react-adsense";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store";
import { increment, reset } from "@/features/finish/counter/counterSlice";
export default function Finish() {
  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");
  const count = useSelector((State: RootState) => State.counter.score);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key1Value = params.get("key1");
    const keyValue2 = params.get("key2");
    if (key1Value) {
      setMessage(key1Value);
    }
    if (keyValue2) {
      setMessage2(keyValue2);
    }
  }, []);

  return (
    <>
      <style jsx>{`
        .description {
          color: white;
          font-size: 50px;
          font-weight: bold;
        }
        #maincontentimg {
          width: 100%;
          height: 100px;
        }
        #blackcolor {
          height: 1508px;
        }
        .header {
          color: white;
          text-align: center;
          font-size: 20px;
        }
        .maincontent {
          border: 2px solid black;
          padding: 3px 3px 3px 3px;
          text-align: center;
          background-color: grey;
          height: auto;
        }
        .footer {
          text-align: center;
          color: white;
        }
        .result {
          color: white;
          padding-top: 200px;
        }
        .description2 {
          color: white;
        }
        .title {
          color: white;
        }
        .text-color {
          color: white;
        }
      `}</style>
      <Grid container>
        <Grid xs={12} md={12}>
          <div
            className="maincontent"
            style={{ backgroundImage: `url(${main.src})` }}
          >
            <div className="result">
              <p>得点は{count}です</p>
            </div>
            <div className="mb-3">
              <Button
                href="/"
                variant="contained"
                color="primary"
                onClick={() => dispatch(reset())}
              >
                HOME
              </Button>
              <Button
                href="/game?playSound=true"
                variant="contained"
                color="primary"
                onClick={() => dispatch(reset())}
              >
                音ありでPLAY(PCのみ)
              </Button>
              <Button
                href="/game/?playSound=false"
                variant="contained"
                color="primary"
                onClick={() => dispatch(reset())}
              >
                音なしでPLAY(PCのみ)
              </Button>
              <Button
                href="/movie?play=true"
                variant="contained"
                color="secondary"
                onClick={() => dispatch(reset())}
              >
                映像のみ音あり(スマホ・PC)
              </Button>
              <Button
                href="/movie"
                variant="contained"
                color="secondary"
                onClick={() => dispatch(reset())}
              >
                映像のみ音なし(スマホ・PC)
              </Button>
            </div>
            <Adsense
              client="ca-pub-4549864067149386"
              slot="2969075044"
              style={{ display: "block" }}
              layout="in-article"
              format="fluid"
            />
            <Adsense
              client="ca-pub-4549864067149386"
              slot="2969075044"
              style={{ display: "block" }}
              layout="in-article"
              format="fluid"
            />
            <p className="text-color">
              宇宙打(うちゅうだ)は個人によって開発された無料VRwebアプリケーションです。
              <br />
              日頃の皆様のストレスを発散や
              <br />
              タイピングスキル向上に貢献したいと思い、開発されました。
              <br />
              また、今の時代、プログラミングでこういうゲームも
              作れるということを伝えたいです。
              <br />
              最後になりましたが、プログラミングに関心を持っていただけたら最高です。
            </p>
            <footer>
              <p className="text-color">
                &copy; 2024 宇宙打(うちゅうだ). All rights reserved.
              </p>
              <p className="text-color">
                このサイトの内容、テキスト、画像、動画などすべての著作物は、著作権法により保護されています。
                <br />
                無断での複製、転載、再配布を禁じます。
              </p>
            </footer>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
