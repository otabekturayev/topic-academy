import logo from "../../assets/logo.png";

export const Header = () => {
  return (
    <header>
      <div className="container" id="home">
        <div className="header-content d-flex items-center">
          <div className="header-left d-flex items-center">
            <div className="logo">
              <a href="#home"><img src={logo} alt="photo" /></a>
            </div>
          </div>
          <div className="header-right d-flex items-center justify-between">
            <div className="logo-text">
              Toshkentda joylashgan Koreys tili hamda Topik o’quv markazi
            </div>
            <nav>
              <ul className="d-flex">
                <li>
                  <a href="#we">Nega biz</a>
                </li>
                <li>
                  <a href="#result">Natijalar</a>
                </li>
                <li>
                  <a href="#course">Kurslar</a>
                </li>
                <li>
                  <a href="#faq">Ko'p beriladigan savollar</a>
                </li>
              </ul>
            </nav>
            <div className="header-contact d-flex items-center">
              <a href="tel:+998333060098"><div className="tel-number">+998 (33) 306 0098</div></a>
              <a href="tel:+998333060098"><div className="header-contact-bottom">Hoziroq bog'laning</div></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
