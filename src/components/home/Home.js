import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from './EmojiBullet';
import SocialIcon from './SocialIcon';
import { Box } from '@mui/material';
import { info } from '../../info/info';

export default function Home() {
  return (
    <Box
      component={'main'}
      display={'flex'}
      flexDirection={{ xs: 'column', md: 'row' }}
      alignItems={'center'}
      justifyContent={'center'}
      minHeight={'calc(100vh - 175px)'}
    >
      <Box
        className={classNames(Style.avatar, Style.shadowed)}
        style={{ background: info.gradient }}
        component={'img'}
        src={me}
        width={{ xs: '35vh', md: '40vh' }}
        height={{ xs: '35vh', md: '40vh' }}
        borderRadius={'50%'}
        p={'0.75rem'}
        mb={{ xs: '1rem', sm: 0 }}
        mr={{ xs: 0, md: '2rem' }}
      />
      <Box>
        <h1>
          Hi, I'm{' '}
          <span
            style={{
              background: info.gradient,
              webkitBackgroundClip: 'text',
              webkitTextFillColor: 'transparent',
            }}
          >
            {info.firstName}
          </span>
          <span className={Style.hand}>🤚</span>
        </h1>
        <h2>I'm {info.position}.</h2>
        <Box component={'ul'} p={'0.8rem'}>
          {info.miniBio.map((bio) => (
            <EmojiBullet emoji={bio.emoji} text={bio.text} />
          ))}
        </Box>
        <Box
          display={'flex'}
          gap={'1.5rem'}
          justifyContent={'center'}
          fontSize={{ xs: '2rem', md: '2.5rem' }}
        >
          {info.socials.map((social) => (
            <SocialIcon link={social.link} icon={social.icon} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}