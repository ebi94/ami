import React from 'react';
import ArticleCard from 'components/ArticleCard/ArticleCard';
import Wrapper, {
  Title,
  Border,
  ArticleOne,
  ArticleTwo,
  ArticleWrapper,
  ArticleWrapperTwo
} from './Article.style';

const Pricing = () => {

    return (
        <Wrapper>  
            <Title>Berita Terbaru</Title>
            <Border />
            <ArticleWrapper>
                <ArticleOne>
                    <ArticleCard 
                        title="5 Produk UMKM Indonesia yang Bakal Banjiri Arab Saudi"
                        imageUrl="https://cdn0-production-images-kly.akamaized.net/lye9bdAceq8TWG0jluht5lah8JI=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2874909/original/097269900_1565143359-20190806-Berburu-Oleh-oleh-Haji-di-Tanah-Suci-AFP-3.jpg"
                    />
                </ArticleOne>
                <ArticleWrapperTwo>
                    <ArticleTwo>
                        <ArticleCard 
                            title="Lion Air Layani Rute Surabaya-Jeddah untuk Penerbangan Umrah"
                            imageUrl="https://cdn1-production-images-kly.akamaized.net/EdwkBzcUp2lzp8wQnkrcH-jqbAE=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3325109/original/000992200_1608089936-16_Desember_2020-2.jpg"
                        />
                        <ArticleCard 
                            title="KJRI Jeddah: Infrastruktur Pelayanan Jemaah Haji Indonesia Akan Dibangun di Makkah"
                            imageUrl="https://cdn1-production-images-kly.akamaized.net/yKnRNwgbI1iZ_WnqO6WGkyGxIMs=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3139672/original/041606400_1590809665-20200530-FOTO-_FEATURE_-IDUL-FITRI-DAN-PANDEMI-AFP-2.jpg"        
                        />
                    </ArticleTwo>
                    <ArticleTwo>
                        <ArticleCard title="Garuda Indonesia Ingin Ikut Uji Coba Penerbangan Jamaah Umrah di Januari 2021"
                            imageUrl="https://cdn0-production-images-kly.akamaized.net/ba1yWPlvi0mtvsCldFsfKPxFS48=/640x853/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3286173/original/006954200_1604453538-Desain_Mahasiswi_UPH_Helena_Calista_Menjuarai_Kompetisi_Garuda_Airlines__1_.JPG"
                        />
                        <ArticleCard title="Incar Jamaah Haji, Erick Thohir Ingin Bangun Rumah UMKM Indonesia di Mekah"
                            imageUrl="https://cdn0-production-images-kly.akamaized.net/Uj_dIMLwE5Z0cpMOM-p6AWwHD5M=/640x853/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2987754/original/051925100_1575546075-20191205-Harley-dan-Brompton-yang-Diselundupkan-di-Garuda-Indonesia-IQBAL-5.jpg"
                        />
                    </ArticleTwo>
                </ArticleWrapperTwo>
            </ArticleWrapper>
        </Wrapper>
    );
};

export default Pricing;
