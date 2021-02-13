import React from 'react';
import SearchArea from './SearchLanding/Search';
import WelcomeCard from 'components/WelcomeCard/WelcomeCard';
import VisiCard from 'components/VisiCard/VisiCard';
import MisiCard from 'components/MisiCard/MisiCard';
import ImageCarousel from './ImageCarousel/ImageCarousel';

const Home = () => {

    return (
        <>
            <SearchArea />
            <WelcomeCard 
                title="Selamat Datang di Asosiasi Muthowif Indonesia"
                description="Kami adalah Asosiasi Muthowif Indonesia"
            />
            <div>
                <ImageCarousel
                    title="Partner Kami"
                    dataApi="/data/partner.json"
                />  
            </div>
            <VisiCard 
                title="Visi Kami"
                description="Kami adalah Asosiasi Muthowif Indonesia"
            />
            <MisiCard
                title="Misi Kami"
                description="Kami adalah Asosiasi Muthowif Indonesia"
            />
        </>
    );
};

export default Home;
