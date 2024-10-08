import gksImg from "../../assets/gks.png";

export const GKS = () => {
  return (
    <section className="gks">
      <div className="container">
        <div className="gks-content">
          <div className="title">
            Koreya Universitetlariga 100% gacha grant yutish imkoniyati
          </div>
          <div className="gks-menu d-flex justify-between items-center">
            <div className="menu-left">
              <img src={gksImg} alt="photo" />
            </div>
            <div className="menu-right">
              <div className="menu-right-top">
                <h5>
                  GKS (Global Korean Scholarship) - <span>$70.000</span> lik
                  Grant
                </h5>
                <p>
                  Janubiy Koreya hukumatining stipendiya dasturi (GKS)
                  Koreyaning Xalqaro ta'lim bo'yicha milliy instituti tomonidan
                  <span>xorijiy</span> talabalarning Koreyada bakalavr va magistratura
                  bosqichida <span>100% gacha to’liq grant</span> va oylik <span>stipendiya</span> olish
                  imkoniyatingiz bor
                </p>
              </div>
              <div className="menu-right-bottom">
                <h5>GKS granti sizga nima beradi</h5>
                <p> <span className="circle"></span> Dastur boshlanganida va tugaganida Koreyaga borish hamda Koreyadan qaytish xarajatlari qoplanadi.</p>
                <p> <span className="circle"></span> Koreyaga yetib borganda joylashib olish uchun bir martalik to'lovberiladi. Miqdori - 200 000 Koreya voni (taxminan 157 AQSh dollari).</p>
                <p> <span className="circle"></span> Til kursi va universitetning kontrak to'lovi to'liq to'lab beriladi (faqat magistr va doktorantlarga)... ko’proq</p>
              </div>
              
            </div>
          </div>
          <div className="video">
          <div className="video-iframe">
                <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/8n30SNcEZJE?&autoplay=1&amp;rel=0&enablejsapi=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
                </div>
                <div className="video-sub d-flex items-center">GKS granti haqida to’liq siz uchun tayyorlagan video suhbatimizda bilib oling! ...</div>
          </div>
          

        </div>
      </div>
    </section>
  );
};
