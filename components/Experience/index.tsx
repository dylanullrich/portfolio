import LineConnector from './LineConnector';
import TextRight from './TextRight';
import TextLeft from './TextLeft';
export interface Job {
  companyName: string;
  jobTitle: string;
  timeActive: string;
  imgUrl: string;
}

const experience: Job[] = [
  {
    companyName: 'Code Fellows',
    jobTitle: 'Advanced Software Development',
    timeActive: '2022',
    imgUrl: '/images/cflogo.png',
  },
  {
    companyName: 'BaseHubs',
    jobTitle: 'Business Development',
    timeActive: '2021-2022',
    imgUrl: '/images/BaseHubslogo.png',
  },
  {
    companyName: 'University of Washington',
    jobTitle: 'BA - Law, Economics, and Public Policy',
    timeActive: '2021-2022',
    imgUrl: '/images/uwlogo.svg',
  },
  {
    companyName: 'US Army',
    jobTitle: '11B - Infantry',
    timeActive: '2017-2020',
    imgUrl: '/images/usarmylogo.png',
  },
];
export default function Work() {
  return (
    <div className='py-24'>
      <TextLeft
        companyName={experience[0].companyName}
        jobTitle={experience[0].jobTitle}
        timeActive={experience[0].timeActive}
        imgUrl={experience[0].imgUrl}
      />
      <LineConnector />
      <TextRight
        companyName={experience[1].companyName}
        jobTitle={experience[1].jobTitle}
        timeActive={experience[1].timeActive}
        imgUrl={experience[1].imgUrl}
      />
      <LineConnector />
      <TextLeft
        companyName={experience[2].companyName}
        jobTitle={experience[2].jobTitle}
        timeActive={experience[2].timeActive}
        imgUrl={experience[2].imgUrl}
      />
      <LineConnector />
      <TextRight
        companyName={experience[3].companyName}
        jobTitle={experience[3].jobTitle}
        timeActive={experience[3].timeActive}
        imgUrl={experience[3].imgUrl}
      />
    </div>
  );
}
