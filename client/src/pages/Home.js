import React from 'react'
// import { useQuery } from '@apollo/client';

// import component to be rendered
import Jumbotron from '../components/Jumbotron';
// import the queries if needed

const Home = () => {
    return (
        <main>
            <div className="flex-row justify-center">
                <div className="col-12">
                    <Jumbotron />
                </div>
            </div>
        </main>
    );
};

export default Home;