import {Button} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import top from '../../public/univ.jpeg';
import main from '../../public/maincontent.jpeg';
import React, { useState, useEffect,Suspense } from 'react';
import {Adsense} from '@ctrl/react-adsense';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Top(){




    
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
            height:auto;
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
        .description2{
            color:white;
        }
        footer{
            color:white;
            padding-top:200px;
        }
        #text-color{
            color:yellow;
            padding-top:60px;
            padding-bottom:60px;
        }
    `}
    </style>
    <Grid container style={{ backgroundImage: `url(${top.src})`}}>
        <Grid xs={0} md={2}></Grid>

        <Grid xs={0} md={2}></Grid>
        <Grid xs={0} md={2}>
        </Grid>
        <Grid xs={12}md={12}>
            <div className="maincontent" style={{ backgroundImage: `url(${top.src})`}}>
                <div>
                    <img src="/inseki.png" alt="隕石" className='img-fluid' />
                </div>
                <div>
                    <p className='description'>Welcome!!<br/>宇宙一ふざけたタイピングアプリをどうぞお試しあれ</p>
                </div>
                <div>
                    <p id="text-color">注意:ゲームの読み込みに30秒くらいかかりますが、ご了承ください</p>
                </div>
                <div>
                <Button href="/game" variant="contained" color="primary">音ありでPCでPLAY</Button><Button href="/game/otonasi" variant="contained"  color="primary">音なしでPCでPLAY</Button>
                <Adsense
                    client="ca-pub-4549864067149386"
                    slot="2969075044"
                    style={{ display: 'block' }}
                    layout="in-article"
                    format="fluid"
                />
                </div>
                <div className='text-center description2'>
                    <p>宇宙打(うちゅうだ)は個人によって開発された無料VRwebアプリケーションです。<br/>日頃の皆様のストレスを発散や<br/>タイピングスキル向上に貢献したいと思い、開発されました。<br/>また、今の時代、プログラミングでこういうゲームも
                        作れるということを伝えたいです。<br/>最後になりましたが、プログラミングに関心を持っていただけたら最高です。
                    </p>
                </div>
                <footer>
                    <p>&copy; 2024 宇宙打(うちゅうだ). All rights reserved.</p>
                    <p>このサイトの内容、テキスト、画像、動画などすべての著作物は、著作権法により保護されています。<br/>無断での複製、転載、再配布を禁じます。</p>
                </footer>

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