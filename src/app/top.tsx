import {Button} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import top from '../../public/univ.jpeg';
import main from '../../public/maincontent.jpeg';

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
        }
        .footer{
            text-align:center;
            color:white;
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
                    <img src="/inseki.png" className='img-fluid' />
                </div>
                <div>
                    <p className='description'>Welcome!!<br/>宇宙一ふざけたタイピングアプリをどうぞお試しあれ</p>
                </div>
                <div>
                <Button href="/game" variant="contained" color="primary">音ありでPLAY</Button><Button href="/game/otonasi" variant="contained"  color="primary">音なしでPLAY</Button>
                </div>
            </div>
        </Grid>

        <Grid xs={12}md={2}>
            <div className="side-bar" style={{ backgroundImage: `url(${main.src})`}}>
                <p>広告募集中</p>
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