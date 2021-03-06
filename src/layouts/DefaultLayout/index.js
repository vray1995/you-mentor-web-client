import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Menu from '../../components/Menu';
import { Scrollbars } from 'react-custom-scrollbars';

const style = require('./DefaultLayout.sass');

class DefaultLayout extends Component {
  render() {
    const { header, children, footer } = this.props;
    return <div>
      <section className={style.ContentZone}>
        <Scrollbars style={{ height: '100%' }}>
          <div className={style.Content}>
            <div className={style.Container}>
              { children }
            </div>
          </div>
        </Scrollbars>
      </section>
      <footer className={style.FooterZone}>
        <div className={style.Container} style={{ height: '100%' }}>
          {/*{ footer ? footer : <Menu/> }*/}
        </div>
      </footer>
    </div>;
  }
}

DefaultLayout.propTypes = {
  header: PropTypes.node,
  footer: PropTypes.node,
};
DefaultLayout.defaultProps = {
  header: null,
  footer: null,
};

export default DefaultLayout;
