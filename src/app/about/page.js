import Image from 'next/image';
import Link from 'next/link';

const dataAnalystSkills = [
  { name: 'SQL', logo: '/SQL.png' },
  { name: 'Excel', logo: '/excel.png' },
  { name: 'MS Power Point', logo: '/mspowerpoint.png' },
  { name: 'Power BI', logo: '/power-bi.png' },
  { name: 'NumPy', logo: '/NumPy.png' },
  { name: 'Statistical Analysis', logo: '/statstics.png' },
  { name: 'Python', logo: '/Python.png' },
];
const dataScientistSkills = [
  { name: 'Python', logo: '/Python.png' },
  { name: 'R', logo: '/R.png' },
  { name: 'OpenCV', logo: '/OpenCV.png' },
  { name: 'TensorFlow', logo: '/tensorFlow.png' },
  { name: 'Pandas', logo: '/Pandas.png' },
  { name: 'Scikit-learn', logo: '/scikit-learn.png' },
  { name: 'PyTorch', logo: '/PyTorch.png' },
];
const education = [
  { degree: 'B.Tech (CSE(AI&ML))', school: 'Siddhartha Institute of Engineering and Technology', year: '2021-2025', image: '/education1.png' },
  { degree: 'Intermediate (XII)', school: 'Narayana Junior College', year: '2019-2021', image: '/education2.png' },
  { degree: 'SSC (X)', school: 'Sri Vikas Model School', year: '2018-2019', image: '/education3.png' },
];
const experience = [
  { role: 'Intern(ML Developer)', company: 'Centre for Railway Information System', period: 'Oct, 2024 - Jan, 2025' },
];

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto p-6">
        <h1 className="text-5xl font-bold mb-12 text-center text-white">About Me</h1>
        <div className="flex flex-col space-y-8">
          <div className="glow-effect bg-gray-800/50 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-green-400">Skills</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-4 text-white">Data Analyst</h3>
                <div className="grid grid-cols-2 gap-4">
                  {dataAnalystSkills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Image
                        src={skill.logo}
                        alt={skill.name}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                      <span className="text-gray-200">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4 text-white">Data Scientist</h3>
                <div className="grid grid-cols-2 gap-4">
                  {dataScientistSkills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Image
                        src={skill.logo}
                        alt={skill.name}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                      <span className="text-gray-200">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="glow-effect bg-gray-800/50 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-green-400">Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-center mb-4">
                  <Image
                    src={edu.image}
                    alt={edu.degree}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div className="text-gray-200">
                  <p className="font-bold">{edu.degree}</p>
                  <p>{edu.school}</p>
                  <p>{edu.year}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="glow-effect bg-gray-800/50 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-green-400">Experience</h2>
            <div className="flex justify-center mb-4">
              <Image
                src="/experience.png"
                alt="Experience"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            {experience.map((exp, index) => (
              <div key={index} className="mb-4 text-gray-200">
                <p className="font-bold">{exp.role}</p>
                <p>{exp.company}</p>
                <p>{exp.period}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="https://www.linkedin.com/in/ktr2/" // Replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition"
            >
              Connect with me on LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}