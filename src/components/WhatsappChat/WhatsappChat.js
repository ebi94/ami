import React from "react";
import { Button, Image } from "antd";
import WhatsappImage from "assets/images/WhatsApp.svg";

const WhatsappChat = () => {


    return (
        <div style={{ position: 'fixed', bottom: 35, right: 25 }}>
            <Button
                type="primary"
                size="large"
                shape="round"
                href="https://wa.me/6285888840629?text=Assalamualaikum%2C+Saya+ingin+tahu+tentang+Asosiasi+Amanah+Muthowif+Indonesia"
                target="_blank"
                style={{ width: 200, backgroundColor: '#008489', padding: 0, boxShadow: '2px 2px 3px #999', borderRadius: 30 }}>
                <Image
                    src={WhatsappImage}
                    width={20}
                    preview={false}
                    style={{ width: 21, position: 'absolute', left: -5, top: -16 }}
                />
                Live Chat WhatsApp
            </Button>
        </div>
    )
}

export default WhatsappChat;
