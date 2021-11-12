import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from './../../../hooks/useAuth';
import AdminRoute from './../../Login/AdminRoute/AdminRoute';
import MyOrders from '../../MyOrders/MyOrders';
import ManageAllOrders from '../../ManageAllOrders/ManageAllOrders';
import ManageAllServices from '../../ManageAllServices/ManageAllServices';
import AddANewService from '../../AddANewService/AddANewService';
import Pay from '../Pay/Pay';
import Review from '../../Review/Review';
import DashboardHome from '../DashboardHome/DashboardHome';
import './Dashboard.css'

const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin, logout } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            {!admin && <Box>
                <Toolbar sx={{ backgroundColor: '#212529' }}><span className="text-color1">Users</span><span className="text-color2">Options</span></Toolbar>
                <Divider />
                <Link to={`${url}`}><Button sx={{ backgroundColor: '#212529' }} className="mb-2 mt-3 button-design " variant="contained">Dashboard</Button></Link><br />
                <Link to={`${url}/pay`}><Button sx={{ backgroundColor: '#212529' }} className="mb-2 button-design" variant="contained">Pay</Button></Link><br />
                <Link to={`${url}/myorders`}><Button sx={{ backgroundColor: '#212529' }} className="mb-2 button-design" variant="contained">My Orders</Button></Link><br />
                <Link to={`${url}/review`}><Button sx={{ backgroundColor: '#212529' }} className="mb-2 button-design" variant="contained">Add A Review</Button></Link><br />
                <Link to="/home" ><Button sx={{ backgroundColor: '#212529' }} className="mb-2 button-design" variant="contained">Home</Button></Link><br />
                <Button className="button-design" onClick={logout} sx={{ backgroundColor: '#212529' }} variant="contained">Logout</Button>
            </Box>}
            {admin && <Box>
                <Toolbar sx={{ backgroundColor: '#212529', py: 1 }}><span className="text-color1">Admin</span> <span className="text-color2">Options</span></Toolbar>
                <Divider />
                <Link to={`${url}/manageallorders`}><Button sx={{ backgroundColor: '#212529' }} className="mb-2 mt-3 button-design" variant="contained">Manage All Orders</Button></Link>

                <Link to={`${url}/addanewservice`}><Button sx={{ backgroundColor: '#212529' }} className="mb-2 button-design" variant="contained">Add A New Car</Button></Link>

                <Link to={`${url}/makeAdmin`}><Button sx={{ backgroundColor: '#212529' }} className="mb-2 button-design" variant="contained">Make Admin</Button></Link>

                <Link to={`${url}/manageallservices`}><Button sx={{ backgroundColor: '#212529' }} className="mb-2 button-design" variant="contained">Manage All Services</Button></Link>
                <Link to="/home" ><Button sx={{ backgroundColor: '#212529' }} className="mb-2 button-design" variant="contained">Home</Button></Link><br />
                <Button className="button-design" onClick={logout} sx={{ backgroundColor: '#212529' }} variant="contained">Logout</Button>

            </Box>}
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        backgroundColor: '#212529',
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h5" noWrap component="div">
                            Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />

                    <Switch>
                        <Route exact path={path}>
                            <DashboardHome></DashboardHome>
                        </Route>
                        <Route path={`${path}/pay`}>
                            <Pay></Pay>
                        </Route>
                        <Route path={`${path}/myorders`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/review`}>
                            <Review></Review>
                        </Route>
                        <Route path={`${path}/manageallorders`}>
                            <ManageAllOrders></ManageAllOrders>
                        </Route>
                        <Route path={`${path}/addanewservice`}>
                            <AddANewService></AddANewService>
                        </Route>
                        <AdminRoute path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageallservices`}>
                            <ManageAllServices></ManageAllServices>
                        </AdminRoute>
                    </Switch>

                </Box>
            </Box>
        </div>
    );
}

Dashboard.propTypes = {

    window: PropTypes.func,
};

export default Dashboard;