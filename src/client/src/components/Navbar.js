import React from "react";
import {
  Stack,
  IconButton,
  Badge,
  Box,
  Slide,
  useScrollTrigger,
  AppBar,
} from "@mui/material";
import { Link } from "react-router-dom";
import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { Container } from "@mui/system";

//components
import UserMenu from "./Auth/UserMenu";
import Navigation from "./Navigation";
import { ReactComponent as Logo } from "../logo.svg";
//redux
import { useDispatch, useSelector } from "react-redux";
import { appActions } from "../redux/slices/appSlice";
//config
import { NAVBAR } from "../config";

export default function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClickUser = (event) => {
    if (user) return setAnchorEl(event.currentTarget);
    return dispatch(appActions.toggleShowAuthModal());
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        backgroundColor: (theme) => theme.palette.background.paper,
        zIndex: 10,
      }}
    >
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ height: NAVBAR.HEIGHT + "px" }}
        >
          <Link to={"/"}>
            <Logo />
          </Link>
          <Navigation theme="dark" />
          <Stack direction="row">
            <IconButton>
              <Badge color="secondary" badgeContent={0} showZero>
                <LocalMallOutlinedIcon />
              </Badge>
            </IconButton>

            <IconButton onClick={handleClickUser}>
              <Person4OutlinedIcon />
            </IconButton>

            {user && (
              <UserMenu
                open={open}
                anchorEl={anchorEl}
                handleClose={handleClose}
                user={user}
              />
            )}
          </Stack>
        </Stack>
      </Container>
    </AppBar>
  );
}