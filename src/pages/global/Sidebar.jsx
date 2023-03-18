import React from 'react';
import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from '../../theme';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ImageSearchOutlinedIcon from '@mui/icons-material/ImageSearchOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import FormatShapesOutlinedIcon from '@mui/icons-material/FormatShapesOutlined';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import user from '../../assets/user.jpg';
import logo from '../../assets/logo.png';
import { color } from '@mui/system';
import './sidebar.css'


const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};


const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box>
      <Sidebar backgroundColor={colors.primary[400]} style={{ height: '100vh' }}>
        <Menu >
          <MenuItem>
            <Box display="flex"
              justifyContent="space-between"
              alignItems="center"
              ml="15px">
              <img src={logo} alt="profile-user"
                width="100px"

                style={{}} />
              <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                <MenuOutlinedIcon />
              </IconButton>
            </Box>
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={user}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Shakil
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box display='flex' justifyContent="space-between" flexDirection='column' alignItems='center'>
            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
              <Item
                title="Dashboard"
                to="/"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Data
              </Typography>
              <Item
                title="All Tools"
                to="/team"
                icon={<LayersOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="My content"
                to="/contacts"
                icon={<FolderCopyOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Article Generator"
                to="/invoices"
                icon={<ArticleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Pages
              </Typography>
              <Item
                title="Chat"
                to="/form"
                icon={<ChatBubbleOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Image Generator"
                to="/calendar"
                icon={<ImageSearchOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Rewriter"
                to="/faq"
                icon={<DriveFileRenameOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />


              <Item
                title="Smart Editor"
                to="/bar"
                icon={<FormatShapesOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

            </Box>

            <Box>
              <Menu>
                <SubMenu label='Projects'>
                  <MenuItem>
                    Project
                  </MenuItem>
                </SubMenu>
              </Menu>
              <Item
                title="Line Chart"
                to="/line"
                icon={<TimelineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Geography Chart"
                to="/geography"
                icon={<MapOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
          </Box>

        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBar;