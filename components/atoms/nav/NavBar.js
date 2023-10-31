import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const Navbar = () => {
    return (
        <AppBar position="static" className="bg-blue-500">
            <Toolbar>
                <Link href="/">
                    <Button color="inherit">Home</Button>
                </Link>
                <Link href="/about">
                    <Button color="inherit">About Me</Button>
                </Link>
                <Link href="/service">
                    <Button color="inherit">Service</Button>
                </Link>
                <Link href="/skills">
                    <Button color="inherit">Skills</Button>
                </Link>
                <Link href="/portfolio">
                    <Button color="inherit">Portfolio</Button>
                </Link>
                <Link href="/blog">
                    <Button color="inherit">Blog</Button>
                </Link>
                <Link href="/contact">
                    <Button color="inherit">Contact</Button>
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
