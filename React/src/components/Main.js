
function Main() {
  return (
    <>
      <div className="page-content landingpage-style">
        <div className="page-content">
          <div className="page-title has-subtitle">
            <h1></h1><span className="color-white">DJ SONGBLENDR (Under Construction)</span>
          </div>
          <div className=" center-text">
            <a href="dj" id="register" className=" button  shadow-huge button-l button-round-small bg-blue1-dark" style={{Width: '150px'}}>I AM A DJ</a>
            <a href="i-am-guest" className=" button  shadow-huge button-l button-round-small bg-orange-dark" style={{Width: '150px', marginLeft: '1vw'}}>I AM A GUEST</a>
        </div>
          <div className="grid-icons grid-icons-2">
            <a href="home" className="bg-gradient-orange round-large shadow-huge scale-hover">
              <i className="fa fa-home"></i>
              <span>HOME</span>
            </a>
            <a href="all-dj-list" className="bg-gradient-green1 round-large shadow-huge scale-hover">
              <i className="fa fa-list"></i>
              <span>DJ LIST</span>
            </a>
            <a href="create-dj" className="bg-gradient-yellow1 round-large shadow-huge scale-hover">
              <i className="fa fa-user"></i>
              <span>CREATE DJ</span>
            </a>
            <a href="update-dj" className="bg-gradient-magenta1 round-large shadow-huge scale-hover">
              <i className="fa fa-cog"></i>
              <span>UPDATE DJ</span>
            </a>
            <a href="i-am-dj" className="bg-gradient-blue2 round-large shadow-huge scale-hover">
              <i className="fa fa-calendar"></i>
              <span>EVENTS</span>
            </a>
            <a href="all-event-list" className="bg-gradient-pink1 round-large shadow-huge scale-hover">
              <i className="fa fa-calendar-check"></i>
              <span> EVENT LIST </span>
            </a>
          </div>
          <div className="clear"></div>
          <div className="divider divider-margins top-20"></div>
          <div className="content center-text">
            <p className="bottom-0">
              <a href="#" className="scale-hover icon icon-m bg-facebook icon-circle shadow-huge"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="scale-hover left-15 right-15 icon icon-m bg-phone icon-circle shadow-huge"><i className="fa fa-phone"></i></a>
              <a href="#" className="scale-hover icon icon-m bg-twitter icon-circle shadow-huge"><i className="fab fa-twitter"></i></a>
            </p>
          </div>
          <p className="footer-content">2020 &copy; Copyright <span className="copyright-year"></span>. All Rights Reserved</p>
        </div>
      </div>
      <div className="menu-hider"></div>
    </>
  );
}

export default Main;
