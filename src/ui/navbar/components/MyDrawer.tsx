import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SvgIconProps } from '@mui/material'
import React from 'react';
import {
    Link as RouterLink,
    LinkProps as RouterLinkProps,
  } from 'react-router-dom';
import { ListInventoryItem } from '../types';
interface MyDrawerProps {
    items: ListInventoryItem[]
}
interface ListItemLinkProps {
    primary?: string;
    to: string;
    icon: React.ComponentType<SvgIconProps>;
  }

const Link = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(
    function Link(itemProps, ref) {
      return <RouterLink ref={ref} {...itemProps} role={undefined} />;
    },
  );
  function ListItemLink(props: ListItemLinkProps) {
    const { primary = "p", to, icon: Icon } = props;
  
    return (
      <ListItemButton component={Link} to={to}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={primary} />
    </ListItemButton>
    );
  }

export const MyDrawer = ({items}:MyDrawerProps) => {
  return (
    <div>
      {/* <Toolbar /> */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',   
          width: '100%',           
          height: 'flex',         
          overflow: 'hidden',      
        }}
      >
        <img
          src="../public/logo.png" 
          alt="Expotuna logo" 
          style={{
            maxWidth: '100%', 
            height: '150px',
            objectFit: 'contain'
          }}
        />
      </Box>
      <Divider />
      <List>
        {items.map((item) => {
          if (item.to && item.icon) { 
            return (
              <ListItem key={item.text} disablePadding>
                <ListItemLink to={item.to} primary={item.text} icon={item.icon} />
              </ListItem>
            );
          }
          return null;
        })}
      </List>
    </div>
  );
}
