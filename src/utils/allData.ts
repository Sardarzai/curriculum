import { images } from '../constants';

// ==========================================================================================
// ==========================================================================================
//                             profile title data storing section
// ==========================================================================================
// ==========================================================================================

export const profileData: { name: string; position: string } = {
  name: 'Sardarzai Dev',
  position: 'Full-Stack Developer',
};

// ==========================================================================================
// ==========================================================================================
//                             Contact data storing section
// ==========================================================================================
// ==========================================================================================

export const contactData: {
  //interfacing section here
  address: string;
  mobile: string;
  email: string;
  web: string;
} = {
  //data section here
  address: '4700-004 BRAGA, Rua Quinta de Cabanas',
  mobile: '+351933655069',
  email: 'ola@sardarzai.com',
  web: 'www.sardarzai.com',
};

// ==========================================================================================
// ==========================================================================================
//                             About Section data storing
// ==========================================================================================
// ==========================================================================================

export const aboutData: {
  //interfacing section here
  info: string;
} = {
  //data section here
  info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

// ==========================================================================================
// ==========================================================================================
//                             Education Section data storing
// ==========================================================================================
// ==========================================================================================

/* Defining the structure of the data that will be stored in the array. */
interface educationKeys {
  info: string;
  title: string;
  subtitle: string;
  startDate: string;
  endDate: string;
}

export const educationData: Array<educationKeys> = [
  // ==============================================1st Item of List====================================================//
  {
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    startDate: '2016-02-15',
    endDate: '2018-02-15',
    subtitle: 'Portugal University',
    title: 'BCS Degree',
  },
  // ============================================================END====================================================//

  // ==============================================2nd Item of List====================================================//
  {
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    startDate: '2008-02-15',
    endDate: '2015-02-15',
    subtitle: 'Braga High School',
    title: 'Graduated High School',
  },
  // ============================================================END====================================================//
];

// ============================================================END====================================================//

// ==========================================================================================
// ==========================================================================================
//                             Expereince Section data storing
// ==========================================================================================
// ==========================================================================================

/* Defining the structure of the data that will be stored in the array. */
interface experienceKeys {
  info: string;
  title: string;
  subtitle: string;
  startDate: string;
  endDate: string;
}

export const expereinceData: Array<experienceKeys> = [
  // ==============================================1st Item of List====================================================//
  {
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    startDate: '2004-02-13',
    endDate: '2022-01-5',
    subtitle: 'Apps-Chain ICT',
    title: 'Full-Stack Developer',
  },
  // ============================================================END====================================================//

  // ==============================================2nd Item of List====================================================//
  {
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    startDate: '2015-09-12',
    endDate: '2021-02-18',
    subtitle: 'Database Specialist',
    title: 'Good Groups of Company',
  },
  // ============================================================END====================================================//
];

// ============================================================END====================================================//

// ==========================================================================================
// ==========================================================================================
//                             Expereince Section data storing
// ==========================================================================================
// ==========================================================================================

/* Defining the structure of the data that will be stored in the array. */
interface servicesKeys {
  info: string;
  title: string;
  imgURL: string;
}

export const servicesData: Array<servicesKeys> = [
  // ==============================================1st Item of List====================================================//
  {
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',

    imgURL: images.serCodeIcon,
    title: 'Web Development',
  },
  // ============================================================END====================================================//

  // ==============================================2nd Item of List====================================================//
  {
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',

    imgURL: images.serDatabaseIcon,
    title: 'Databases',
  },
  // ============================================================END====================================================//

  // ==============================================3rd Item of List====================================================//
  {
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',

    imgURL: images.serSettingIcon,
    title: 'Software Testing',
  },
  // ============================================================END====================================================//
];

// ============================================================END====================================================//

// ==========================================================================================
// ==========================================================================================
//                             Brands Section data storing
// ==========================================================================================
// ==========================================================================================

/* Defining the structure of the data that will be stored in the array. */
interface brandsKeys {
  imgURL: string;
  id: string;
}

export const brandsData: Array<brandsKeys> = [
  {
    imgURL: images.brNodejs,
    id: '1',
  },
  { imgURL: images.brReact, id: '2' },
  { imgURL: images.brSass, id: '3' },
  { imgURL: images.brSql, id: '4' },
];

// ============================================================END====================================================//

// ==========================================================================================
// ==========================================================================================
//                             Portfolio Tags Categories Section data storing
// ==========================================================================================
// ==========================================================================================

/* Defining the structure of the data that will be stored in the array. */
interface portfolioTagsProps {
  tagsName: string;
  _id: string;
}

export const portfolioTags: Array<portfolioTagsProps> = [
  { tagsName: 'All', _id: '1' },
  { tagsName: 'UX/UI', _id: '2' },
  { tagsName: 'Web App', _id: '3' },
  { tagsName: 'Desktop App', _id: '4' },
];
// ============================================================END====================================================//

// ==========================================================================================
// ==========================================================================================
//                             Portfolio Section data storing
// ==========================================================================================
// ==========================================================================================

/* Defining the structure of the data that will be stored in the array. */
interface portfolioProps {
  imgURL: string;
  name: string;
  tags: string;
  technologies: string;
  info: string;
  _id: string;
}

export const portfolioData: Array<portfolioProps> = [
  {
    _id: '1',
    imgURL: images.img01,
    name: 'Repair Services Website',
    tags: 'Web App',
    technologies: 'MERN Stack',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    _id: '2',
    imgURL: images.img02,
    name: 'School Management System',
    tags: 'Desktop App',
    technologies: 'MERN Stack',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    _id: '3',
    imgURL: images.img03,
    name: 'ECommerce Web UI',
    tags: 'UX/UI',
    technologies: 'MERN Stack',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    _id: '4',
    imgURL: images.img04,
    name: 'Website Application',
    tags: 'Web App',
    technologies: 'MySQL PHP Codeiniter',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    _id: '5',
    imgURL: images.img05,
    name: 'Web UI/UX',
    tags: 'UX/UI',
    technologies: 'LAMP Stack',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    _id: '6',
    imgURL: images.img06,
    name: 'Logistic Management System',
    tags: 'Desktop App',
    technologies: 'SQL SERVER C#.Net',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

// ============================================================END====================================================//
