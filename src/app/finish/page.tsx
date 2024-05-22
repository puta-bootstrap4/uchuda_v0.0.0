'use client';
import {Button} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import top from '../../../public/univ.jpeg';
import main from '../../../public/maincontent.jpeg';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {AdsInFeed} from '../AdComponent';

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
            padding-top:50px;
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
        <div className="side-bar text-center" style={{ backgroundImage: `url(${main.src})`}}>
                <div>
                    <img src="/profile.jpg" className='img-fluid'/>
                </div>
                <p>
                    某大学院卒。ITエンジニア（開発）。<br/>トイック・応用情報勉強中。<br/>お問い合わせは<br/>twitterのDMでお願いします。
                </p>
                <a href="https://twitter.com/kaburieruuu?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="false">Follow @x</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                <AdsInFeed />
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