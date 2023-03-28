import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
// import Image from "*.png"
// import { FacebookProvider, Like } from 'react-facebook';

export const Footer = () => {
  return (
    <Box sx={{
         width: "100%",
        // height: "auto",
        backgroundColor: "primary.main",
        // opacity: [0.9, 0.9, 0.9],
        //  paddingTop: "1rem",
        //  paddingBottom: "1rem",
        position: "absolute",
        textAlign: "left",
      }}>
        
        
        Copyright© : Paola Rios 2023
        
        {/* <FacebookProvider appId="123456789"> */}
             {/* <Like href="http://www.facebook.com" colorScheme="dark" showFaces share />  */}
        {/* </FacebookProvider> */}
        

        {/* <div>
            <Image priority src="image/facebook.png" width={75} height={30} alt="facebook" />
        </div> */}
    </Box>
  )
}
