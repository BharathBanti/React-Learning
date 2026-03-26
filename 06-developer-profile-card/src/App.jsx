import './App.css';

const developerData = {
  name: 'Bharath Dasari',
  photo: '/car.jpg',
  bio: 'Front-End developer with strong JavaScript(ES6+), and pursuing React to develop large and complex projects. Also familiar with the DSA like Number theory, Math, Bit Manipulation, Searching. Confident with using AI tools in the live development like Cursor AI, Windsurf AI, Firebase Studio and Google AI Studio.',
  skills: [
    'HTML',
    'CSS',
    'Tailwind CSS',
    'JavaScript',
    'Git & GitHub',
    'React.js',
    'DSA - Fundamentals',
  ],
  skillColors: ['blue', 'red', 'orange', 'violet', 'brown', 'green', 'magenta'],
  skillEmojis: ['👍', '🤏', '😊', '🥳', '🤷‍♂️', '🎯', '🤭'],
};

const skills = [
  {
    skill: 'HTML',
    level: 'advanced',
    color: 'blue',
  },
  {
    skill: 'CSS',
    level: 'advanced',
    color: 'orange',
  },
  {
    skill: 'JavaScript',
    level: 'advanced',
    color: 'violet',
  },
  {
    skill: 'Tailwind CSS',
    level: 'intermediate',
    color: 'brown',
  },
  {
    skill: 'React',
    level: 'beginner',
    color: 'green',
  },
  {
    skill: 'DSA',
    level: 'beginner',
    color: 'magenta',
  },
];

function App() {
  return <Card />;
}

function Card() {
  return (
    <div className="card">
      <DeveloperPhoto photo={developerData.photo} name={developerData.name} />
      <DeveloperName name={developerData.name} />
      <DeveloperBio bio={developerData.bio} />
      <SkillsList skills={skills} />
    </div>
  );
}

function DeveloperPhoto(props) {
  return <img className="profile-image" src={props.photo} alt={props.name} />;
}

function DeveloperName(props) {
  return <h3 className="name">{props.name}</h3>;
}

function DeveloperBio(props) {
  return <p className="bio">{props.bio}</p>;
}

function SkillsList(props) {
  return (
    <ul className="skillList">
      {props.skills.map((skill) => (
        <li key={skill.name} style={{ backgroundColor: skill.color}}>
          {skill.skill}{' '}
          {skill.level.toLowerCase() === 'advanced'
            ? '💪'
            : skill.level.toLowerCase() === 'intermediate'
              ? '👌'
              : '👍'}
        </li>
      ))}
    </ul>
  );
}

export default App;
