import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
        <footer className="page-footer blue-grey darken-4">
        <div className="container">
          <div className="row">
            <div className="col s6">
              <h5 className="white-text">E - Shopping</h5>
              <p className="grey-text text-lighten-4">E - Shopping site. Easy to buy and cheap.</p>
            </div>
            <div className="col s3">
              <h5 className="white-text">Contacts</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="#!">Tel: +345444545</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Fax: +343534534</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Almaty, Aimanova 126, Office 606</a></li>
              </ul>
            </div>
            <div className="col s3">
              <h5 className="white-text">FAQ</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="#!">Feedback</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">About Creators</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Developers</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          © 2021 Copyright Text
          <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
          </div>
        </div>
      </footer>
        );
    }
}

export default Footer;