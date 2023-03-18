import React from 'react';
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import Button from '@mui/material/Button';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display='flex' justifyContent='space-between' p={2}>

            <Box>
                <Button style={{color: colors.primary[100]}}>Chrome Extension</Button>
                <Button style={{color: colors.primary[100]}}>Plagiarism Credits</Button>
                <Button style={{color: colors.primary[100]}}>API</Button>
                <Button style={{color: colors.primary[100]}}>Help Center</Button>
    
            </Box>

            {/* Search Bar */}
            <Box display='flex' backgroundColor={colors.primary[400]} borderRadius='3px'>
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder='Search' />
                <IconButton type='button' sx={{ p: 1 }}>
                    <SearchIcon />
                </IconButton>
            </Box>

            {/* Icons */}
            <Box display='flex'>
                <IconButton onClick={colorMode.toggleColorMode} >
                    {theme.palette.mode === 'light' ? (<LightModeOutlinedIcon />) : (<DarkModeOutlinedIcon />)}
                </IconButton>
                <IconButton>
                    <HelpOutlineOutlinedIcon />
                </IconButton>
                <IconButton>
                    <CampaignOutlinedIcon />
                </IconButton>
                <Button variant="contained" startIcon={<ControlPointOutlinedIcon />}>
                    Create Content
                </Button>
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>

        </Box >
    );
};

export default Topbar;