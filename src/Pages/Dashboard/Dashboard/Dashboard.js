import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DashboardHome from "../DashboardHome/DashboardHome";
import logo from "../../../images/logo.png";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import "./dashboard.css";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../../AdminRoute/AdminRoute";
import AddBike from "../AddBike/AddBike";
import Payment from "../Payment/Payment";
import { Button } from "@material-ui/core";
import MyOrder from "../MyOrder/MyOrder";
import Review from "../Review/Review";
import ManageOrder from "../ManageOrder/ManageOrder";
import ManageProduct from "../ManageProduct/ManageProduct";
import {
  BiHomeAlt,
  BiUserPlus,
  BiFolderPlus,
  BiClipboard,
  BiCreditCardFront,
  BiHeartCircle,
  BiLayer,
  BiLogInCircle,
} from "react-icons/bi";

const drawerWidth = 260;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { admin, handleSignout } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <div className="dash-logo">
          <img src={logo} alt="" />
        </div>
      </Toolbar>
      <List className="menu-warper">
        <Link to={`${url}`}>
          <BiHomeAlt /> Dashboard
        </Link>
        {admin ? (
          <Box>
            <Link to={`${url}/make-admin`}>
              <BiUserPlus /> Make Admin
            </Link>
            <Link to={`${url}/add-bike`}>
              <BiFolderPlus /> Add Bike
            </Link>
            <Link to={`${url}/manage-order`}>
              <BiClipboard /> Manage order
            </Link>
            <Link to={`${url}/manage-product`}>
              <BiLayer /> Manage Product
            </Link>
          </Box>
        ) : (
          <Box>
            <Link to={`${url}/my-payment`}>
              <BiCreditCardFront />
              Payment
            </Link>
            <Link to={`${url}/my-orders`}>
              <BiClipboard /> My Order
            </Link>
            <Link to={`${url}/add-review`}>
              <BiHeartCircle /> Review
            </Link>
          </Box>
        )}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} className="dashboard-main">
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className="topbar-warper">
          <div className="topbar-left">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Link to="/home">
              <BiHomeAlt />
              Home
            </Link>
          </div>
          <div className="topbar-right">
            <Button onClick={handleSignout}>
              <BiLogInCircle />
              Logout
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <AdminRoute path={`${path}/:make-admin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <Route path={`${path}/:my-payment`}>
            <Payment></Payment>
          </Route>
          <Route path={`${path}/:my-orders`}>
            <MyOrder></MyOrder>
          </Route>
          <Route path={`${path}/:add-review`}>
            <Review></Review>
          </Route>
          <Route path={`${path}/:add-bike`}>
            <AddBike></AddBike>
          </Route>
          <Route path={`${path}/:manage-order`}>
            <ManageOrder></ManageOrder>
          </Route>
          <Route path={`${path}/:manage-product`}>
            <ManageProduct></ManageProduct>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
