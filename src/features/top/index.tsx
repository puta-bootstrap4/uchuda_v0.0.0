import { Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import top from "../../../public/univ.jpeg";
import main from "../../public/maincontent.jpeg";
import React, { useState, useEffect, Suspense } from "react";
import { Adsense } from "@ctrl/react-adsense";
import "bootstrap/dist/css/bootstrap.min.css";
import ParticleImage from "../../features/demo";

export default function Top() {
  return (
    <>
      <style jsx>
        {`
          .description {
            color: white;
            font-size: 50px;
            font-weight: bold;
            margin-top: -90px;
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
            height: 80px;
            margin-bottom: 10px;
            font-size: 20px;
          }
          .title {
            padding-top: 30px;
          }
          .maincontent {
            border: 2px solid black;
            padding: 3px 3px 3px 3px;
            text-align: center;
            background-color: grey;
            height: auto;
          }
          .side-bar {
            color: white;
            background-color: grey;
            height: 1504px;
            border: 2px solid black;
            padding-top: 50px;
          }
          .footer {
            text-align: center;
            color: white;
          }
          .description2 {
            color: white;
          }
          footer {
            color: white;
            padding-top: 200px;
          }
          #text-color {
            color: yellow;
            padding-top: 60px;
            padding-bottom: 60px;
          }
        `}
      </style>
      <Grid container style={{ backgroundImage: `url(${top.src})` }}>
        <Grid xs={0} md={2}></Grid>
        <Grid xs={0} md={2}></Grid>
        <Grid xs={0} md={2}></Grid>
        <Grid xs={12} md={12}>
          <div className="text-center">
            <ParticleImage imageSrc="/susi.png" width={300} height={300} />
          </div>
        </Grid>
        <Grid xs={12} md={12}>
          <div
            className="maincontent"
            style={{ backgroundImage: `url(${top.src})` }}
          >
            <div>
              <p className="description">
                Welcome!!
                <br />
                宇宙一ふざけたタイピングアプリをどうぞお試しあれ
              </p>
            </div>
            <div>
              <p id="text-color">
                注意：周囲をみて安全を確認してからプレイしてください。
                <br />
                注意:ゲームの読み込みに30秒くらいかかりますが、ご了承ください
                <br />
                30秒たっても表示されない場合は、ページを再読み込みしてください。
              </p>
            </div>
            <div>
              <Button
                href="/game?playSound=true"
                variant="contained"
                color="primary"
              >
                音ありでPLAY(PCのみ)
              </Button>
              <Button
                href="/game?playSound=false"
                variant="contained"
                color="primary"
              >
                音なしでPLAY(PCのみ)
              </Button>
              <Button
                href="/movie?play=true"
                variant="contained"
                color="secondary"
              >
                映像のみ音あり(スマホ・PC)
              </Button>
              <Button href="/movie" variant="contained" color="secondary">
                映像のみ音なし(スマホ・PC)
              </Button>
              <Adsense
                client="ca-pub-4549864067149386"
                slot="2969075044"
                style={{ display: "block" }}
                layout="in-article"
                format="fluid"
              />
            </div>
            <div className="text-center description2">
              <p>
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
            </div>
            <footer>
              <p>&copy; 2024 宇宙打(うちゅうだ). All rights reserved.</p>
              <p>
                このサイトの内容、テキスト、画像、動画などすべての著作物は、著作権法により保護されています。
                <br />
                無断での複製、転載、再配布を禁じます。
              </p>
            </footer>
          </div>
        </Grid>

        <Grid xs={0} md={2}></Grid>
        <Grid xs={0} md={2}></Grid>

        <Grid xs={12} md={8}></Grid>
        <Grid xs={0} md={2}></Grid>
      </Grid>
    </>
  );
}
