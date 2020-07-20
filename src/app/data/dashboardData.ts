import { DashboardData } from '../model/dashboardData';

export const dashboardData: DashboardData[] = [
  {
    year: '2020-2012',
    roster: [
      { name: 'Jacob David', images: 'assets/images/image1.png' },
      { name: 'Leo Henny', images: 'assets/images/profile.png' },
      { name: 'Ethan Hunt', images: 'assets/images/image1.png' },
      { name: 'Alife Muhammad', images: 'assets/images/profile.png' },
      { name: 'Jack Thomas', images: 'assets/images/image1.png' },
    ],
    classes: [
      {
        subjects: 'Algebra',
        total: '12',
        score: 100,
        grade: 'A',
        details: [
          { topic: 'notes', value: '150' },
          { topic: 'Assessment', value: '10' },
          { topic: 'Gradebook', value: '5' },
        ],
      },
      {
        subjects: 'Language Class',
        total: '18',
        score: 70,
        grade: 'B',
        details: [
          { topic: 'notes', value: '210' },
          { topic: 'Assessment', value: '10' },
          { topic: 'Gradebook', value: '7' },
        ],
      },
      {
        subjects: 'Physics Batch',
        total: '18',
        score: 40,
        grade: 'C',
        details: [
          { topic: 'notes', value: '100' },
          { topic: 'Assessment', value: '7' },
          { topic: 'Gradebook', value: '9' },
        ],
      },
    ],
  },
  {
    year: '2019-2020',
    roster: [
      { name: 'Ethan Hunt', images: 'assets/images/image1.png' },
      { name: 'Alife Muhammad', images: 'assets/images/profile.png' },
      { name: 'Jack Thomas', images: 'assets/images/image1.png' },
      { name: 'Jacob David', images: 'assets/images/profile.png' },
      { name: 'Jack Thomas', images: 'assets/images/image1.png' },
    ],
    classes: [
      {
        subjects: 'Language Class',
        total: '18',
        score: 90,
        grade: 'A',
        details: [
          { topic: 'notes', value: '100' },
          { topic: 'Assessment', value: '7' },
          { topic: 'Gradebook', value: '9' },
        ],
      },
      {
        subjects: 'Algebra',
        total: '12',
        score: 40,
        grade: 'C',
        details: [
          { topic: 'science', value: '4' },
          { topic: 'Gradebook', value: '5' },
        ],
      },

      {
        subjects: 'Physics Batch',
        total: '18',
        score: 40,
        grade: 'C',
        details: [{ topic: 'notes', value: '100' }],
      },
    ],
  },
  {
    year: '2018-2019',
    roster: [
      { name: 'Jacob David', images: 'assets/images/image1.png' },
      { name: 'Leo Henny', images: 'assets/images/profile.png' },
      { name: 'Ethan Hunt', images: 'assets/images/image1.png' },
      { name: 'Alife Muhammad', images: 'assets/images/profile.png' },
      { name: 'Jack Thomas', images: 'assets/images/image1.png' },
    ],
    classes: [
      {
        subjects: 'Algebra',
        total: '12',
        score: 100,
        grade: 'A',
        details: [
          { topic: 'Assessment', value: '10' },
          { topic: 'Gradebook', value: '5' },
        ],
      },
      {
        subjects: 'Language Class',
        total: '18',
        score: 70,
        grade: 'B',
        details: [{ topic: 'notes', value: '210' }],
      },
      {
        subjects: 'Physics Batch',
        total: '18',
        score: 40,
        grade: 'C',
        details: [{ topic: 'Assessment', value: '7' }],
      },
    ],
  },
];
