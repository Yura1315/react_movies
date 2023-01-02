import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

type PrimaryLinkPropsType = {
  title: string;
  link: string;
};

const PrimaryLink = ({ title, link }: PrimaryLinkPropsType) => {
  return (
    <Link className="primary-link" to={link}>
      {title}
    </Link>
  );
};

export default PrimaryLink;
