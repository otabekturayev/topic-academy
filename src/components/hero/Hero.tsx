import { HeroButton } from "../button/heroButton";
import heroBg from "../../assets/hero-bg.png"

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="korea-lng d-flex items-center">
            <div className="line"></div>
            <p>3 oyda Koreys tilida gapirishni boshlang</p>
          </div>
          <h1>
            Janubiy Koreya Universitetlarida 100% gacha grant asosida o’qish
            imkoniyati
          </h1>
          <div className="topic-abouts d-flex items-center">
            <div className="about d-flex items-center">
              <div className="about-bg">
                <svg
                  width="15"
                  height="37"
                  viewBox="0 0 15 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.4383 8.36725C11.6597 6.48423 8.77345 1.55129 8.14546 1.02953C7.3602 0.377302 6.82647 0.848342 4.98869 3.81481C-1.05027 13.5615 -1.07593 23.3184 4.91098 33.4675C6.63202 36.3847 7.06851 36.8544 7.87958 36.6613C8.49814 36.5141 11.8919 30.8146 12.9047 28.2214C13.9611 25.5178 14.7713 21.0337 14.6785 18.4046C14.5853 15.7559 13.5201 10.9834 12.4383 8.36725Z"
                    fill="#ABDDB1"
                  />
                </svg>
              </div>
              <p>5 oyda Topikdan 6 darajagacha olishda yordam beramiz</p>
            </div>
            <div className="about d-flex items-center">
              <div className="about-bg">
                <svg
                  width="15"
                  height="37"
                  viewBox="0 0 15 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.4383 8.36725C11.6597 6.48423 8.77345 1.55129 8.14546 1.02953C7.3602 0.377302 6.82647 0.848342 4.98869 3.81481C-1.05027 13.5615 -1.07593 23.3184 4.91098 33.4675C6.63202 36.3847 7.06851 36.8544 7.87958 36.6613C8.49814 36.5141 11.8919 30.8146 12.9047 28.2214C13.9611 25.5178 14.7713 21.0337 14.6785 18.4046C14.5853 15.7559 13.5201 10.9834 12.4383 8.36725Z"
                    fill="#ABDDB1"
                  />
                </svg>
              </div>
              <p>
                Topikdan yuqori darajani qo’lga kiritib, Janubiy Koreyada o’qish
                va ishlash imkoniyati
              </p>
            </div>
          </div>
          <div className="hero-bottom">
            <a href="#course"><HeroButton text="bepul Darsga yozilish" /></a>
            <p>Birinchi darsga bepul yoziling</p>
          </div>
        </div>
      </div>
      <div className="hero-bg"><img src={heroBg} alt="photo" /></div>
    </section>
  );
};
