import React from 'react';
import SearchArea from './SearchLanding/Search';
import WelcomeLogo from 'components/WelcomeLogo/WelcomeLogo';
import WelcomeCard from 'components/WelcomeCard/WelcomeCard';
import VisiCard from 'components/VisiCard/VisiCard';
import MisiCard from 'components/MisiCard/MisiCard';
import JoinCard from 'components/JoinCard/JoinCard';
import SignupCard from 'components/SignupCard/SignupCard';
import ContactCard from 'components/ContactCard/ContactCard';
import Article from '../Article/Article';
import ImageCarousel from './ImageCarousel/ImageCarousel';

const Home = () => {
    const misiList = [
        { desc: "Menjadi Asosiasi yang mampu membentuk para pembimbing jamaah menjadi lebih unggul"},
        { desc: "Menjadi Asosiasi yang selalu melindungi para pembimbing baik secara hukum maupun pelayanan"},
        { desc: "Menjadi Asosiasi yang mampu bersaing dalam memberikan pelayanan di mata Domestik dan International"},
        { desc: "Mengedepankan Pelayanan untuk para jamaah Haji dan Umroh"}
    ];

    return (
        <>
            <SearchArea />
            <WelcomeLogo
                title="ASOSIASI AMANAH MUTHOWIF INDONESIA | AMI"
                description="JOINT US TO PROFESIONAL TEAM"    
            />
            <WelcomeCard 
                title="Tentang Kami"
                description="
                    Asosiasi ini terbentuk melihat bahwa para tenaga kerja
                    indonesia yang membantu menangani para jamaah
                    dalam melakukan ibadah umroh dan haji belum
                    mempunyai wadah atau rumah dalam menghadapi era
                    yang terus berkembang dari pihak kerjaan saudi,
                    Untuk itu Asosiasi ini terbentuk selain itu Asosiasi
                    Amanah Muthowif Indonesia juga siap bersaing secara
                    profesional dengan melakukan pengembangan baik
                    penyerataan pelayanan sampai melakukan pemesanan
                    muthowif ( pembimbing) dengan menggunakan
                    Tekhnologi yang berbasis Applikasi agar memperingkas
                    alur kerja travel dan menjamin kelayakan pelayanan
                    muthowif ( pembimbing) dalam menjalan ibadah Haji
                    dan Umroh
                "
            />
            <VisiCard 
                title="Visi Kami"
                description="
                    Menjadikan para pembimbing jamaah menjadi pelayanan
                    jamaah yang Profesional dan sesuai dengan Sunnah Nabi
                    Muhammad SAW
                "
            />
            <MisiCard
                title="Misi Kami"
                description={misiList}
            />
            <JoinCard />
            {/* <div>
                <ImageCarousel
                    title="Partner Kami"
                    dataApi="/data/partner.json"
                />  
            </div> */}
            <SignupCard />
            <ContactCard />
        </>
    );
};

export default Home;
