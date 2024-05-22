import {Button} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import top from '../../public/univ.jpeg';
import main from '../../public/maincontent.jpeg';
import React, { useState, useEffect,Suspense } from 'react';

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
        .description2{
            color:white;
            padding-top:100px;
        }
        footer{
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
                <div>
                    <img src="/inseki.png" alt="隕石" className='img-fluid' />
                </div>
                <div>
                    <p className='description'>Welcome!!<br/>宇宙一ふざけたタイピングアプリをどうぞお試しあれ</p>
                </div>
                <div>
                <Button href="/game" variant="contained" color="primary">音ありでPLAY</Button><Button href="/game/otonasi" variant="contained"  color="primary">音なしでPLAY</Button>
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

        <Grid xs={12}md={2}>
            <div className="side-bar text-center" style={{ backgroundImage: `url(${main.src})`}}>
                <div>
                    <img src="/profile.jpg" className='img-fluid'/>
                </div>
                <p>
                    某大学院卒。ITエンジニア（開発）。<br/>トイック・応用情報勉強中。<br/>お問い合わせは<br/>twitterのDMでお願いします。
                </p>
                <a href="https://twitter.com/kaburieruuu?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="false">Follow @x</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>

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