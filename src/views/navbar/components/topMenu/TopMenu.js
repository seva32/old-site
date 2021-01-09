import React from 'react';
import { StyledLink, StyledWrapper } from './TopMenu.styles';
import Flex from '../../../../components/Flex';
// eslint-disable-next-line
import { Link, animateScroll as scroll } from 'react-scroll';

export default ({ visible }) => {
  return (
    <StyledWrapper>
      <Flex justifyAround alignCenter heightPerc id="top-menu">
        <StyledLink visible={visible}>
          <Link
            activeClass="active-scroll"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            PROJECTS
          </Link>
        </StyledLink>
        <StyledLink visible={visible}>
          <Link
            activeClass="active-scroll"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            SKILLS
          </Link>
        </StyledLink>
        <StyledLink visible={visible}>
          <Link
            activeClass="active-scroll"
            to="form-view"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            CONTACT
          </Link>
        </StyledLink>
      </Flex>
    </StyledWrapper>
  );
};
