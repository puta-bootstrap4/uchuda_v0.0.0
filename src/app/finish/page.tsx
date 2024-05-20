'use client';
import {Button} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import top from '../../../public/univ.jpeg';
import main from '../../../public/maincontent.jpeg';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AdComponent from '../AdComponent';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Finish(){
    const [message, setMessage] = useState("");
    const [message2, setMessage2] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const router = useRouter();



    
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
      useEffect(() => {
        // データの取得や初期化処理をここで行う
        const fetchData = async () => {
          try {
            // 例えば、フェイクのAPI呼び出し
            await new Promise(resolve => setTimeout(resolve, 4000));
            // データ取得完了
          } catch (error) {
            console.error("Error loading data", error);
          } finally {
            setIsLoading(false);
          }
        };
    
        fetchData();
      }, []);
      if (isLoading) {
        return (
            <div className="loading-container">
            <div className="spinner"></div>
            <style jsx>{`
              .loading-container {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100vh;
                background-color: white; /* 任意の背景色に変更 */
              }
              .spinner {
                border: 4px solid rgba(0, 0, 0, 0.1);
                width: 36px;
                height: 36px;
                border-radius: 50%;
                border-left-color: #09f;
                animation: spin 1s linear infinite;
              }
              @keyframes spin {
                to {
                  transform: rotate(360deg);
                }
              }
            `}</style>
          </div>
        );
      }
    
return(
    <>
    <style jsx>{`
        .description{
            color:white;
            font-size:50px;
            font-weight:bold;
        }
        #maincontentimg{
            width:100%;
            height:100px;
        }
        #blackcolor{
            height:1508px;
        }
        .header{
            color:white;
            text-align:center;
            height:80px;
            margin-bottom:10px;
            font-size:20px;
        }
        .title{
            padding-top:30px;

        }
        .maincontent{
            border: 2px solid black;
            padding:3px 3px 3px 3px;
            text-align:center;
            background-color:grey;
            height:1498px;
        }
        .side-bar{
            color:white;
            background-color:grey;
            height:1504px;
            border: 2px solid black;
        }
        .footer{
            text-align:center;
            color:white;
        }
        .result{
            color:white;
            padding-top:200px;
        }
    `}
    </style>
    <Grid container>
        <Grid xs={0} md={2}></Grid>
        <Grid xs={12} md={8}>
            <div className="header" style={{ backgroundImage: `url(${top.src})`}}>
                <p className='title'>タイピングゲーム:宇宙打</p>
            </div>
            <div>

            </div>
        </Grid>
        <Grid xs={0} md={2}></Grid>
        <Grid xs={0} md={2}>
        </Grid>
        <Grid xs={12}md={6}>
            <div className="maincontent" style={{ backgroundImage: `url(${main.src})`}}>
                <div className='result'>
                    <p>ミスタイプ数は{message}です</p>
                    <p>得点は{message2}です</p>
                </div>
                <div>
                    <Button href="/game" variant="contained" color="primary">音ありでPLAY</Button><Button href="/" variant="contained" color="primary">HOME</Button><Button href="/game/otonasi" variant="contained"  color="primary">音なしでPLAY</Button>
                </div>
            </div>
        </Grid>

        <Grid xs={12}md={2}>
            <div className="side-bar" style={{ backgroundImage: `url(${main.src})`}}>
            </div>
        </Grid>

        <Grid xs={0} md={2}></Grid>
        <Grid xs={0} md={2}></Grid>

        <Grid xs={12} md={8}>

        </Grid>
        <Grid xs={0} md={2}></Grid>

        </Grid>
    </>
);
}