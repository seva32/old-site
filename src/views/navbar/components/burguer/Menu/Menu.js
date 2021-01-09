import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
// eslint-disable-next-line
import { Link, animateScroll as scroll } from 'react-scroll';

const Menu = ({ open, setOpen, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  const setScrollMove = (o) => {
    setOpen(!o);
    // if (!o) {
    //   document.body.style.position = 'fixed';
    //   document.body.style.top = `-${window.scrollY}px`;
    // } else {
    //   const scrollY = document.body.style.top;
    //   document.body.style.position = '';
    //   document.body.style.top = '';
    //   window.scrollTo(0, parseInt(scrollY || '0') * -1);
    // }
  };

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Link
        to="projects"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        tabIndex={tabIndex}
        onClick={() => setScrollMove(open)}
      >
        Projects
      </Link>
      <Link
        to="skills"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        tabIndex={tabIndex}
        onClick={() => setScrollMove(open)}
      >
        Skills
      </Link>
      <Link
        to="form-view"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        tabIndex={tabIndex}
        onClick={() => setScrollMove(open)}
      >
        Contact
      </Link>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
