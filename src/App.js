import React, { Component } from "react";
import NotificationPanel from './templates/NotificationPanel.js';
import HeroShotSection from './templates/HeroShotSection.js';
import HighlightsPanel from './templates/HighlightsPanel.js';
import NewsletterPanel from './templates/NewsletterPanel.js';
import PageFooter from './templates/PageFooter.js';

/* Identify current scrollY position */
const scrollRelative = (body, element) => {
  const winScroll = body.scrollTop || element.scrollTop;
  const height = element.scrollHeight - element.clientHeight;
  const scrolled = winScroll / height;
  return scrolled;
}

class App extends Component {
  constructor(props) {
    super(props)
    this.setHide = this.setHide.bind(this);
    this.state = {
      hideNews: true,
      hideNotif: false,
      notifHeight: 0,
      screenHeight: 0
    };
  }

  componentDidMount() {
    /* Check if the page has already visited */
    if(!localStorage.getItem('newsvisited')) {
      /* Record scrollY position if the newsletter hasn't been clicked before */
      window.addEventListener('scroll', this.listenToScroll);
      /*Set 10 mins timeout for newsletter panel*/ 
      this.setNewsTimeout = setTimeout(this.hideNewsTimeout, 1000*60*10);
    }
    /*Get relative initial scrollY position of the screen*/
    const initialScroll = scrollRelative(document.body, document.documentElement);
    this.setState({
      notifHeight: this.container.offsetHeight,
      screenHeight: this.screenAll.offsetHeight,
      hideNews: ((initialScroll < .33333 && localStorage.getItem('newsvisited') === null) || localStorage.getItem('newsvisited')) ? true : false
    });
  }

  hideNewsTimeout = () => {
    localStorage.setItem('newsvisited', true);
    this.setState({
      hideNews: true
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
    clearTimeout(this.timeCounter)
  }

  setHide = name => e => {
    e.preventDefault();
    /*local storage record previous close newsletter if the user had already closed newsletter previously*/
    if(name === "hideNews") {
      localStorage.setItem('newsvisited', true);
    }
    this.setState({
      [name]: true
    });
  }

  listenToScroll = () => {
    const scrolled = scrollRelative(document.body, document.documentElement);
    if(scrolled > .3333 && this.state.hideNews === true && !localStorage.getItem('newsvisited')) {
      this.setState({
        scrollPosition: scrolled,
        hideNews: false
      })
    }
  }

  render() {
    const {hideNotif, notifHeight, hideNews} = this.state;
    return (
      <div className="app" ref={el => (this.screenAll = el) } >
        <div style={{ top: hideNotif && notifHeight > 0 ? -notifHeight-1 : 0 }} className="notification-panel smoke-grey-bg" ref={el => (this.container = el)}>
          <NotificationPanel setHide={this.setHide} hideNotif={hideNotif} />
        </div>
        <header className="app-header" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/work-desk__dustin-lee.jpg)`, marginTop: hideNotif && notifHeight > 0 ? 0 : `${notifHeight}px`}}>
          <HeroShotSection />
        </header>
        <main className="mainpanel smoke-grey-bg">
          <HighlightsPanel />
        </main>
        <NewsletterPanel setHide={this.setHide} hideNews={hideNews} />
        <PageFooter />
      </div>
    );
  }
}

export default App;
