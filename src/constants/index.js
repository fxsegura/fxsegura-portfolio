export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -6, 0] : [0.25, -9, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -7, 0] : isTablet ? [7, -5, 0] : [10, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [6, 3, 0] : [10, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-14, 7.5, 0] : isTablet ? [-12, 6, 0] : [-20, 6, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-7, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
 