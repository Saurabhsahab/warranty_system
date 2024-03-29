import React,  { useEffect ,useState} from 'react';
import axios from 'axios';

import { Box, styled } from '@mui/material';

import NavBar from './Home/NarBar';
import Banner from './Home/Banner';
import MidSlide from './Home/MidSlide';
import MidSection from './Home/MidSection';
import Slide from './Home/Slide';




const Component = styled(Box)`
    padding: 20px 10px;
    background: #F2F2F2;`
;

const Home = () => {


    const [products, setproducts] = useState([]);



    useEffect(() => {
        console.log("Line 28!")
        const fetch  = async () => {
            console.log("Line 30!")
            let {data}  = await axios.get("http://localhost:8000/products");
            console.log("Line Number: 32", data);
            setproducts(data);
            console.log(products,"Line 34!");
        }
        fetch();
    }, [])

    return (
        <>
            <NavBar />
            <Component>
                <Banner />
                <MidSlide products={products} />
                <MidSection />
                 <Slide
                    data={products} 
                    title='Discounts for You'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Suggested Items'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Top Selection'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Recommended Items'
                    timer={false} 
                    multi={true} 
                />
            </Component>
        </>
    )
}

export default Home;
