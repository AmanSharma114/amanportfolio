import React from 'react';
import './Education.css'; // Import CSS file for styling

export const Education = () => {
  const educationData = [
    {
      institution: 'Chandigarh University , Gharuan , Mohali ',
      degree: 'B.E in Computer Science',
      year: '2020-2024',
      description: 'Related courses: Object Oriented Programming, DBMS , Data Structures , Operating System , Computer Networks',
      Percentagecgpa : '8.23 Cgpa',
    },
    {
      institution: 'SHIV SR. SEC. SCHOOL, JULANA-JIND',
      degree: '12th Grade | CBSE Board',
      year: '2019-2020',
      description: 'I delve deeper into the subjects of Physics, Chemistry, and Mathematics.',
      Percentagecgpa : '83%',
    },
    {
        institution: 'SHIV SR. SEC. SCHOOL, JULANA-JIND',
        degree: '10th Grade | CBSE Board',
        year: '2017-2018',
        description: 'I cover a wide range of subjects, including Mathematics, Science, Social Studies, and Languages',
        Percentagecgpa : '72%',
    },
    // Add more education details here
  ];

  return (
    <div className="education-container">
      <h2 className="education-title">Education</h2>
      <div className="education-list">
        {educationData.map((education, index) => (
          <div key={index} className="education-item">
            <h3 className="institution">{education.institution}</h3>
            <h2 >{education.degree}</h2>
            <p>{education.year}</p>
            <p>{education.description}</p>
            <h2>{education.Percentagecgpa}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};


