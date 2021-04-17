import React from 'react';
import Wrapper, {
    Title,
    Border,
    ContentWrapper
} from './JoinCard.style';
import BenefitCard from 'components/BenefitCard/BenefitCard';

const JoinCard = () => {
    const benefitList = [
        {
            id: 1,
            desc: "Memberikan pekerjaan secara ter jamin dan terjadwal.",
            icon: "",
        },
        {
            id: 2,
            desc: "Mengatur alur pekerjaan muthowif secara terstruktur.",
            icon: "",
        },
        {
            id: 3,
            desc: "Memberikan jaminan pekerjaan yang di sahkan oleh pihak Indonesia dan pihak Kerajaan Saudi",
            icon: ""
        },
        {
            id: 4,
            desc: "Mengatasi persaingan pelayanan dengan keadaan yang ada saat ini",
            icon: ""
        },
        {
            id: 5,
            desc: "Memberikan lisensi / Sertifikasi untuk melayani jamaah",
            icon: ""
        },
        {
            id: 6,
            desc: "Menjamin Kesejahteraan keluarga muthowif di Indonesia",
            icon: ""
        }
    ];

    return (
        <Wrapper>  
            <Title>Kenapa Harus Bergabung Bersama Kami ?</Title>
            <Border />
            <ContentWrapper>
                {benefitList.map((data) => (
                    <BenefitCard 
                        data={data}
                    />
                ))}
            </ContentWrapper>
        </Wrapper>
    )
}

export default JoinCard;
