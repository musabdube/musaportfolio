import React from 'react';

export default function SocialIcon(props) {
  const { link, icon } = props;
  return (
    <a target="_blank" rel="noopener noreferrer" href={link}>
      <i className={icon} aria-hidden="true" />
    </a>
  );
}