import DescriptionLeft from './DescriptionLeft';
import DescriptionRight from './DescriptionRight';

interface Project {
  name: string;
  description: string;
  imageUrl: string;
  url: string;
}

const projects: Project[] = [
  {
    name: 'Assignment Buster',
    description:
      'Assignment Buster is a Slack App that helps students stay up-to-date with their coursework. Students are able to quickly access their Canvas assignments utilzing slash commands in slack.',
    imageUrl:
      'https://avatars.githubusercontent.com/u/108555923?s=400&u=ff58dd4f31d0efe8ec0c524aeedc3b57ecd87f36&v=4',
    url: 'https://github.com/GetUllrichorDieTrying/assignment-buster',
  },
  {
    name: 'Captain Caption',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit.Impedit ex obcaecati natus eligendi delectus, cum deleniti sunt in labore nihil quod quibusdam expedita nemo.',
    imageUrl: 'https://avatars.githubusercontent.com/u/106547519?s=200&v=4',
    url: 'https://github.com/GetUllrichorDieTrying/captain-caption',
  },
];

export default function Projects() {
  return (
    <div className='px-32'>
      <DescriptionLeft
        projectName={projects[0].name}
        description={projects[0].description}
        imageUrl={projects[0].imageUrl}
        url={projects[0].url}
      />
      <DescriptionRight
        projectName={projects[1].name}
        description={projects[1].description}
        imageUrl={projects[1].imageUrl}
        url={projects[1].url}
      />
    </div>
  );
}
