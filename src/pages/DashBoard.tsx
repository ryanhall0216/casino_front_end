import React from 'react';
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import theme from '../theme';
import Logo from "../assets/logo.png";
import SocialImg from "../assets/social.png";
import FairImg from "../assets/fair.png";
import BankrollImg from "../assets/bankroll.png";
import GraphicImg from "../assets/graph.png";
import PoliceImg from "../assets/police.png";
import PerformanceImg from "../assets/performance.png";
import WBankrollImg from "../assets/w-bankroll.png";
import InvestImg from "../assets/invest.png";
import WFairImg from "../assets/w-fair.png";
import Medal1Img from "../assets/medal-1.png";
import Medal2Img from "../assets/medal-2.png";
import Medal3Img from "../assets/medal-3.png";
import Medal4Img from "../assets/medal-4.png";
import Medal5Img from "../assets/medal-5.png";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const PlayMode = styled('a')({
  width: '40vw',
  border: 'none',
  fontSize: '1.2em',
  cursor: 'pointer',
  textTransform: 'uppercase',
  textAlign: 'center',
  letterSpacing: '5px',
  fontWeight: 800,
  outline: 'none',
  position: 'relative',
  transition: 'all 0.3s',
  borderRadius: '5px',
  padding: '15px 50px',
  overflow: 'hidden',
  margin: '0 auto 15px auto',
  background: '#e58929',
  color: '#fff',
  boxShadow: '0 5px #ad6215',
  display: "block"
});

const Features = styled('div')({
  color: "white",
  padding: "25px",
});

const Feature = styled('div')({
  padding: "48px",
  margin: "5px 0 20px 0",
  display: "flex",
  background: "white",
  color: theme.palette.secondary.main
});

const Definition = styled('div')({
  color: theme.palette.secondary.light,
  background: "white",
  display: "grid",
  padding: "40px",
  gridTemplateColumns: "1fr 1fr"
});

const Social = styled('div')({
  display: "flex",
  padding: "35px",
  background: "white",
  color: theme.palette.secondary.main
});

const Fair = styled('div')({
  display: "flex",
  padding: "35px",
  color: "white",
  "a": {
    color: theme.palette.primary.main
  }
});

const Bankroll = styled('div')({
  display: "flex",
  padding: "35px",
  background: "white",
  color: theme.palette.secondary.main
});

const Winners = styled('div')({
  padding: "35px",
  "th": {
    padding: "4px !important"
  },
  "td": {
    padding: "8px !important",
  },
});

const LearnMore = styled('div')({
  padding: "35px",
  background: "white",
  color: theme.palette.secondary.main
})

const Footer = styled('div')({
  height: "200px"
})

const createData = (img: string, name: string, profit: string) => {
  return { img, name, profit }
}

const rows = [
  createData(Medal1Img, "KLITZ", "₿ 468.9"),
  createData(Medal2Img, "gohard", "₿ 279.3"),
  createData(Medal3Img, "LosDeXibalbaMC", "₿ 251.4"),
  createData(Medal4Img, "Predictable", "₿ 234.6"),
  createData(Medal5Img, "dudaxmaimons", "₿ 232.4"),
]

const DashBoard = () => {
  return (
    <div className=' bg-gradient-to-b from-[#404040] to-[#4c4c4c]'>
      <div className='flex flex-col items-center justify-around min-h-screen pb-1 pt-20'>
        <Typography variant="h4" sx={{fontWeight: "500", marginBottom: "20px", letterSpacing: "4px", color: "white"}}>THE ORIGINAL CRASH GAME</Typography>
        <div className='flex'>
          <img alt="logo" src={Logo} style={{margin: "15px 10px", height: "55px"}}></img>
          <Typography variant="h2" color="primary" sx={{fontFamily: "Courier New", fontWeight: "600", letterSpacing: "4px"}}>bustabit</Typography>
        </div>
        <Typography variant="h6" sx={{letterSpacing: "5px", opacity:"0.6", color: "white"}}>BITCOIN GAMBLING SINCE 2014</Typography>
        <PlayMode href='/play'>Play now!</PlayMode>
        <div className='flex justify-center flex-wrap'>
          <div className='text-center px-8 py-2 text-[#f7f9f9] cursor-pointer'>
            <Typography variant="h6" sx={{marginBottom: "15px"}}>Social & Real Time</Typography>
            <a href="#social">
              <img alt="Social and Real Time Game" src={SocialImg} style={{ height: "150px"}} />
            </a>
          </div>
          <div className='text-center px-8 py-2 text-[#f7f9f9] cursor-pointer'>
            <Typography variant="h6" sx={{marginBottom: "15px"}}>Provably Fair</Typography>
            <a href="#fair">
              <img alt="Provably Fair" src={FairImg} style={{ height: "150px"}} />
            </a>
          </div>
          <div className='text-center px-8 py-2 text-[#f7f9f9] cursor-pointer'>
            <Typography variant="h6" sx={{marginBottom: "15px"}}>Be the Bankroll</Typography>
            <a href="#bankroll">
              <img alt="Be the Bankroll" src={BankrollImg} style={{ height: "150px"}} />
            </a>
          </div>
        </div>
      </div>
      <div className='flex px-20 py-8 justify-between w-full bg-[#4c4c4c]'>
        <div className='flex flex-col items-center text-[#e58929] bg-[#404040] rounded-lg p-2'>
          <Typography variant="h6" sx={{letterSpacing: "2px", fontWeight: "600", marginBottom: "2px"}}>HOUSE EDGE</Typography>
          <Typography variant="h5" sx={{letterSpacing: "2px", fontWeight: "600"}}>1 %</Typography>
        </div>
        <div className='flex flex-col items-center text-[#e58929] bg-[#404040] rounded-lg p-2'>
          <Typography variant="h6" sx={{letterSpacing: "2px", fontWeight: "600", marginBottom: "2px"}}>WAGERED</Typography>
          <Typography variant="h5" sx={{letterSpacing: "2px", fontWeight: "600"}}>"&gt; ₿2,300,000"</Typography>
        </div>
        <div className='flex flex-col items-center text-[#e58929] bg-[#404040] rounded-lg p-2'>
          <Typography variant="h6" sx={{letterSpacing: "2px", fontWeight: "600", marginBottom: "2px"}}>BANKROLL</Typography>
          <Typography variant="h5" sx={{letterSpacing: "2px", fontWeight: "600"}}>"&gt; ₿700"</Typography>
        </div>
      </div>
      <Definition>
        <Typography variant='h5' className='col-start-1 col-end-3 row-start-1 row-end-2 !mb-8'>What's bustabit?</Typography >
        <Typography variant="subtitle1" className='col-start-1 col-end-3 row-start-2 row-end-3'>
          bustabit is an online multiplayer bitcoin gambling game consisting of an increasing curve that can crash anytime.
          It's fun and thrilling. It can also make you millions.
        </Typography>
        <img alt="graph" src={GraphicImg} className='col-start-1 col-end-2 row-start-3 row-end-5 m-auto' style={{ height: "180px"}} />
        <Typography variant='h5' className='col-start-2 col-end-3 row-start-3 row-end-4'>How does it work?</Typography >
        <Typography variant="subtitle1" className='col-start-2 col-end-3 row-start-4 row-end-5'>
          Place a bet. Watch the multiplier increase from 1x upwards! Cash out any time to get your bet multiplied by that multiplier.
          But be careful because the game can bust at any time, and you'll get nothing!
        </Typography>
      </Definition>
      <Features>
        <Typography variant='h5' className='!mb-8'>Features</Typography>
        <Feature>
          <div className="w-2/3">
            <Typography variant='h5' className='col-start-2 col-end-3 row-start-3 row-end-4'>How does it work?</Typography >
            <Typography variant="subtitle1" className='col-start-2 col-end-3 row-start-4 row-end-5'>
              Place a bet. Watch the multiplier increase from 1x upwards! Cash out any time to get your bet multiplied by that multiplier.
              But be careful because the game can bust at any time, and you'll get nothing!
            </Typography>
          </div>
          <div className='flex w-1/3 justify-center items-center'>
            <img alt="invest" src={InvestImg} className="w-40"/>
          </div>
        </Feature>
        <Feature>
          <div className="w-2/3">
            <Typography variant='h5' className='col-start-2 col-end-3 row-start-3 row-end-4'>Performance Overhaul.</Typography >
            <Typography variant="subtitle1" className='col-start-2 col-end-3 row-start-4 row-end-5'>
              bustabit has been rewritten for the most efficient performance and the ultimate user experience.
            </Typography>
          </div>
          <div className='flex w-1/3 justify-center items-center'>
            <img alt="invest" src={PerformanceImg} className="w-40"/>
          </div>
        </Feature>
        <Feature>
          <div className="w-2/3">
            <Typography variant='h5' className='col-start-2 col-end-3 row-start-3 row-end-4'>Advanced Autobet.</Typography >
            <Typography variant="subtitle1" className='col-start-2 col-end-3 row-start-4 row-end-5'>
              Create and share scripts for your preferred autobet strategy using a sandbox.
            </Typography>
          </div>
        </Feature>
        <Feature>
          <div className="w-2/3">
            <Typography variant='h5' className='col-start-2 col-end-3 row-start-3 row-end-4'>Enhanced Privacy.</Typography >
            <Typography variant="subtitle1" className='col-start-2 col-end-3 row-start-4 row-end-5'>
              We use a sophisticated coin selection algorithm tailored to bustabit when handling payments in order to offer our
              players and investors industry-leading privacy.
            </Typography>
          </div>
          <div className='flex w-1/3 justify-center items-center'>
            <img alt="invest" src={PoliceImg} className="w-40"/>
          </div>
        </Feature>
      </Features>
      <Social>
        <div className="w-3/4">
          <Typography variant='h5' className='col-start-2 col-end-3 row-start-3 row-end-4'>Social & Real Time</Typography >
          <Typography variant="subtitle1" className='col-start-2 col-end-3 row-start-4 row-end-5 mb-4'>
            Be part of our unique community. Watch your fortune rise and play with friends in real time.
          </Typography>
          <Typography variant="subtitle1" className='col-start-2 col-end-3 row-start-4 row-end-5'>
            Features such as a <i>friend list</i> and <i>private messages</i> make it easier to talk to your friends and make new friends in game.
          </Typography>
        </div>
        <div className='flex w-1/4 justify-center items-center'>
          <img alt="invest" src={SocialImg} className="w-40"/>
        </div>
      </Social>
      <Fair>
        <div className='flex w-1/4 justify-center items-center'>
          <img alt="invest" src={WFairImg} className="w-40"/>
        </div>
        <div className="w-3/4">
          <Typography variant='h5' className='col-start-2 col-end-3 row-start-3 row-end-4'>Provably Fair</Typography >
          <Typography variant="subtitle1" className='col-start-2 col-end-3 row-start-4 row-end-5 mb-4'>
            bustabit's wager outcomes can be proven as fair. There are third party scripts you can use to verify the game hashes and calculate the results.
            You can read the technical details in
            <a href='#'> this thread</a>.
          </Typography>
        </div>
      </Fair>
      <Bankroll>
        <div className='flex w-1/4 justify-center items-center'>
          <img alt="invest" src={WBankrollImg} className="w-40"/>
        </div>
        <div className="w-3/4">
          <Typography variant='h5' className='col-start-2 col-end-3 row-start-3 row-end-4'>Be the Bankroll</Typography >
          <Typography variant="subtitle1" className='col-start-2 col-end-3 row-start-4 row-end-5 mb-4'>
            Looking to grow your fortune? The bankroll is the pool of money that the house uses to pay out winners.
            You can become part of it and take part in bustabit's profits and losses.
          </Typography>
        </div>
      </Bankroll>
      <Winners>
        <Typography variant='h5' color="white" sx={{ fontWeight: "500", marginBottom: "32px" }}>Biggest Winners So Far</Typography>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{background: "#333333"}}>
              <TableCell align="center"></TableCell>
              <TableCell align="center">
                <Typography variant='h6' sx={{color: "white", fontWeight: "700"}}>PLAYER</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant='h6' sx={{color: "white", fontWeight: "700"}}>PROFIT</Typography>
              </TableCell>
          </TableRow>
        </TableHead>
          <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:nth-child(even)': { background: "#404040 !important" } }}
            >
              <TableCell><img src={row.img} style={{width: "30px", margin: "0 auto"}} /></TableCell>
              <TableCell align="center">
                <Typography variant='h6' color="primary">{row.name}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant='h6' sx={{color: "white"}}>{row.profit}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
      </Winners>
      <LearnMore>
        <Typography variant='h5' className='col-start-2 col-end-3 row-start-3 row-end-4 !mb-2'>Learn More</Typography >
        <Typography variant="subtitle1" className='col-start-2 col-end-3 row-start-4 row-end-5 !mb-4'>
          If you still have questions or simply want to learn more you can check our Help Docs or our bitcointalk thread.
        </Typography>
        <PlayMode href='/play'>Play now!</PlayMode>
      </LearnMore>
      <Footer></Footer>
    </div>
  )
}

export default DashBoard;