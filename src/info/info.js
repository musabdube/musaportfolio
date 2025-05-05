import self from '../img/self.png';

export let colors = ['rgb(94, 140, 186)', 'rgb(86, 47, 111)'];

export const info = {
  firstName: 'Musawenkosi',
  lastName: 'Dube',
  initials: 'MD',
  position: 'a Full Stack Developer || Electronics and Nanotechnology Engineer',
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: '☕',
      text: 'Fueled by drive and coffee',
    },
    {
      emoji: '🌎',
      text: 'Based in ZA 🇿🇦',
    },
    {
      emoji: '📧',
      text: 'musabdube@gmail.com',
    },
  ],
  socials: [
    {
      link: 'https://facebook.com/musa.dube.7528',
      icon: 'fa fa-facebook',
    },
    {
      link: 'https://instagram.com/musabardube',
      icon: 'fa fa-instagram',
    },
    {
      link: 'https://vk.com/mdube',
      icon: 'fa fa-vk',
    },
    {
      link: 'https://twitter.com/musabardube',
      icon: 'fa fa-twitter',
    },
    {
      link: 'https://www.linkedin.com/in/musawenkosi-dube-b06a30256',
      icon: 'fa fa-linkedin',
    },
  ],
  bio: "Hello! I'm Musa, an Electronics and Nanotechnology Engineer. I studied Electronics at St. Petersburg Electrotechnical University. I'm also a Web Developer. I enjoy art and believe artificial intelligence will inevitably rule us all one day. You should hire me!",
  skills: {
    proficientWith: [
      'JavaScript',
      'React',
      'Git',
      'GitHub',
      'Bootstrap',
      'Databases (MongoDB, PostgreSQL)',
      'Java',
      'MATLAB',
      'Django',
      'COMSOL Multiphysics',
      'Python',
      'Node.js',
    ],
    exposedTo: ['Software (LTSpice, AutoCAD)', 'Arduino', 'VHDL', 'Linux'],
  },
  hobbies: [
    {
      label: 'coding',
      emoji: '💻',
    },
    {
      label: 'drawing',
      emoji: '🎨',
    },
    {
      label: 'nature',
      emoji: '🌿',
    },
  ],
  portfolio: [
    {
      title: 'Glow Squad',
      live: 'https://www.glowsquad.co.za/',
      // source: 'https://github.com/musabdube',
    },
  ],
  cv: '/Musawenkosi_Dube_CV.pdf', // Link to CV file
};
