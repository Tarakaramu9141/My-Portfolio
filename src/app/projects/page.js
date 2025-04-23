import Image from 'next/image';

const projects = [
  {
    title: 'Real Time Stock Prediction Systems',
    description: 'An advanced LSTM-based stock price prediction system with real-time dashboard powered by Streamlit.',
    image: '/project1.png',
    liveLink: 'https://real-time-stock-price-predictor-trox.streamlit.app/',
    githubLink: 'https://github.com/Tarakaramu9141/Real-time-Stock-Price-Predictor',
  },
  {
    title: 'Indian Climate Change Prediction System',
    description: 'A Streamlit app visualizing current and forecasted weather for Indian states using Open-Meteo API and a custom neural network model.',
    image: '/project2.png',
    liveLink: 'https://indianclimatechangepredictor-232.streamlit.app/',
    githubLink: 'https://github.com/Tarakaramu9141/Indian_Climate_Change_Predictor',
  },
  {
    title: 'Customer Lifetime Value Prediction',
    description: 'Predicted Customer Lifetime Value (CLTV) by leveraging Probabilistic models and XGBoost Machine Learning model.',
    image: '/project3.png',
    liveLink: 'https://customerlifetimeprediction-to.streamlit.app/',
    githubLink: 'https://github.com/Tarakaramu9141/Customer_Life_time_Prediction',
  },
  {
    title: 'Autonomous Driving System',
    description: 'A real-time computer vision system for autonomous vehicle perception, featuring lane detection, object recognition, and control logic.',
    image: '/project4.png',
    githubLink: 'https://github.com/Tarakaramu9141/-Advanced-Autonomous-Driving-System',
  },
  {
    title: 'NLP Sentiment Analysis',
    description: 'A sentiment analysis system that allows users to provide feedback on model predictions, improving accuracy over time.',
    image: '/project5.png',
    githubLink: 'https://github.com/Tarakaramu9141/Sentiment-Analysis-with-Feedback-and-Retraining',
  },
  {
    title: 'AI ATS Resume Maker',
    description: 'AI ATS Resume Maker Pro is a Streamlit-based tool that optimizes resumes for Applicant Tracking Systems (ATS) by analyzing keyword matches and content relevance. It offers professional resume generation with customizable templates and real-time improvement suggestions.',
    image: '/project6.png',
    liveLink: 'https://ai-ats-resume-maker-pr0.streamlit.app/',
    githubLink: 'https://github.com/Tarakaramu9141/AI-ATS-Resume-Maker-Pro',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto p-6">
        <h1 className="text-5xl font-bold mb-4 text-center text-white">My Projects</h1>
        <p className="text-center text-gray-200 mb-8">
          These projects may take some time to run.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glow-effect bg-gray-800/50 p-6 rounded-lg shadow-lg relative corner-glow"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                className="rounded-lg mb-4 object-cover"
              />
              <h2 className="text-2xl font-semibold mb-2 text-white">{project.title}</h2>
              <p className="mb-4 text-gray-200">{project.description}</p>
              <div className="flex space-x-4">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 transition"
                  >
                    Live Demo
                  </a>
                )}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/Tarakaramu9141"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white py-3 px-6 rounded-full hover:bg-green-700 transition duration-300"
          >
            Visit My GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}
