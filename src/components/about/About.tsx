import { HeroButton } from "../button/heroButton"
import chatImg from "../../assets/chat-bubble-dynamic-color.png"
import keyImg from "../../assets/key-dynamic-color.png"
import rocketImg from "../../assets/rocket-dynamic-color.png"
import targetImg from "../../assets/target-dynamic-color.png"
import travelImg from "../../assets/travel-dynamic-color.png"
import moneyImg from "../../assets/money-dynamic-color.png"


export const About = () => {
  return (
    <section className="about">
        <div className="container">
            <div className="about-content d-flex flex-column items-center">
                <h4 className="title">TOPIK academy aniq siz uchun agar siz:</h4>
                <div className="about-cards d-flex justify-center">
                    <div className="about-card">
                        <div className="card-img flex-center"><img src={chatImg} alt="photo" /></div>
                        <div className="card-text"><span>Qisqa</span> muddat ichida Koreys tilida gapirishni istaysiz</div>
                    </div>
                    <div className="about-card">
                        <div className="card-img flex-center"><img src={rocketImg} alt="photo" /></div>
                        <div className="card-text">Koreys tili o’rganib o’z <span>karyerangizni</span> qurmoqchisiz</div>
                    </div>
                    <div className="about-card">
                        <div className="card-img flex-center"><img src={moneyImg} alt="photo" /></div>
                        <div className="card-text">Topik sertifikatini olib Koreyaning nufuzli universitetlariga <span>GRANT</span> yutmoqchisiz</div>
                    </div>
                    <div className="about-card">
                        <div className="card-img flex-center"><img src={travelImg} alt="photo" /></div>
                        <div className="card-text">Janubiy Koreya davlatida <span>o’qish</span> va <span>ishlash</span> uchun ketmoqchisiz</div>
                    </div>
                    <div className="about-card">
                        <div className="card-img flex-center"><img src={targetImg} alt="photo" /></div>
                        <div className="card-text">Koreys tilini o’rta darajda bilasiz va darajangizni <span>oshirmoqchisiz</span></div>
                    </div>
                    <div className="about-card">
                        <div className="card-img flex-center"><img src={keyImg} alt="photo" /></div>
                        <div className="card-text">Ko’p yillardan buyon o’qib ham <span>natijaga</span> chiqa olmayapsiz</div>
                    </div>
                </div>
                <a href="#support"><HeroButton text="Ha, bu men"></HeroButton></a>
            </div>
        </div>
    </section>
  )
}
