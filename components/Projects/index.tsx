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
    imageUrl: '/images/assignment-buster.png',
    url: 'https://github.com/GetUllrichorDieTrying/assignment-buster',
  },
  {
    name: 'Captain Caption',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit.Impedit ex obcaecati natus eligendi delectus, cum deleniti sunt in labore nihil quod quibusdam expedita nemo.',
    imageUrl: '/images/captain-caption.png',
    url: 'https://github.com/GetUllrichorDieTrying/captain-caption',
  },
  {
    name: 'Resty',
    description: `Resty is a browser based API testing tool. Give the deployment link a click, and enter in your favorite API's. `,
    imageUrl: '/images/resty.png',
    url: 'https://github.com/GetUllrichorDieTrying/resty',
  },
  {
    name: 'Serverless API',
    description: 'AWS Lambda Serverless API.',
    imageUrl: '/images/serverless-api.png',
    url: 'AWS Lambda Serverless API.',
  },
];

export default function Projects() {
  return (
    <div className='px-6 md:px-24'>
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
      <DescriptionLeft
        projectName={projects[2].name}
        description={projects[2].description}
        imageUrl={projects[2].imageUrl}
        url={projects[2].url}
      />
      <DescriptionRight
        projectName={projects[3].name}
        description={projects[3].description}
        imageUrl={projects[3].imageUrl}
        url={projects[3].url}
      />
    </div>
  );
}
