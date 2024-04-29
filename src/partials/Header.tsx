import { styled } from "@mui/system";
import CustomLink from "../components/CustomLink";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CodeIcon from '@mui/icons-material/Code';
import BarChartIcon from '@mui/icons-material/BarChart';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HelpIcon from '@mui/icons-material/Help';
import { Typography } from "@mui/material";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Links = styled("div")({
  display: "flex",
  alignItems: "baseline",
  color: "white"
})


const Header = () => {
  
  return (
    <div style={{ height: "52px", gridArea: "header", margin: "4px 0"}} className="flex items-center w-100">
      <Link to="/" className="flex p-2">
        <img alt="logo" src={Logo} style={{ width: "40px", height: "40px", margin: "0 5px 0 3px"}} />
        <Typography variant="h4" color="primary" sx={{marginBottom: "8px", fontFamily: "Courier New, sans-serif", fontWeight: "600"}}>bustabit</Typography>
      </Link>
      <nav className="flex justify-between">
        <Links>
          <CustomLink url="/" title="BANKROLL" icon={AccountBalanceIcon} />
          <CustomLink url="/" title="BACKTESTING" icon={CodeIcon}/>
          <CustomLink url="/" title="STATS" icon={BarChartIcon}/>
          <CustomLink url="/" title="LEADERBORAD" icon={EmojiEventsIcon}/>
          <CustomLink url="/" title="HELP" icon={HelpIcon} />
        </Links>
      </nav> 
      <div className="ml-auto"/>
      <Links>
        <a href="/" className="p-2"><Typography variant="subtitle1">LOGIN</Typography></a>
        <a href="/" className="p-2"><Typography variant="subtitle1">REGISTER</Typography></a>
      </Links>
    </div>
  )
}

export default Header;