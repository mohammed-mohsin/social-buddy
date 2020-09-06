import React from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = () => {

    return (
        <>
            <AppBar position="static" align="center" style={{
                backgroundColor: "#242526"
            }}>
                <Toolbar variant="dense">

                    <Typography variant="h4" align="center" style={{
                        color: "#D0D2D6",
                        textAlign: "center"
                    }}>
                        Social Buddy
                    </Typography>
                </Toolbar>
            </AppBar>

        </>
    );
};

export default Header;