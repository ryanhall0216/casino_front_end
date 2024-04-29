
import React from 'react';
import { SvgIconComponent } from '@mui/icons-material';
import { Typography } from '@mui/material';

type CustomLinkProps = {
  url: string;
  title: string;
  icon: SvgIconComponent
};

const CustomLink:React.FC<CustomLinkProps> = ({ url, title, icon: Icon}) => {
  return (
    <a href={url} className='p-2 flex items-baseline'>
      <Icon style={{fontWeight: "900", fontSize: "12px"}} />
      <Typography variant="caption" className="px-1">{title}</Typography>
    </a>
  )
}

export default CustomLink;