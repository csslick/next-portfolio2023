// 3. 아이콘
import { FaHtml5 } from 'react-icons/fa';
import { FaMobileAlt } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export const aboutText = '안녕하세요! 프론트엔드 개발자로서 최신 웹 기술과 트렌드에 관심을 갖고, 사용자 친화적인 인터페이스와 효율적인 코드를 실현하기 위해 노력합니다. 다양한 디바이스에서 일관된 성능과 디자인을 제공하며, 웹 접근성과 최적화에 중점을 둡니다.'

export const timelineText = [
  {
    title: '웹 표준 코딩',
    text: 'HTML5 웹표준과 웹접근성을 준수하여 사용자 친화적이고 다양한 기기에서 호환성을 제공하는 웹 애플리케이션을 개발합니다. 시맨틱한 마크업과 ARIA 레이블링을 통해 모든 사용자가 웹 콘텐츠에 접근할 수 있도록 합니다.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Web Accesibility'],
    icon: <FaHtml5 />,
    date: 'in progress',
  },
  {
    title: '반응형 웹',
    text: '모바일 퍼스트 디자인 및 미디어 쿼리를 활용한 반응형 웹 구현',
    tags: ['미디어쿼리', 'SASS', '부트스트랩'],
    icon: <FaMobileAlt />,
    date: 'in progress',
  },
  {
    title: '프론트엔드 프레임워크',
    text: 'React 등의 프론트엔드 프레임워크 역량 강화. 컴포넌트 기반 개발 및 상태 관리 스킬 향상',
    tags: ['React', 'NPM', 'Vite'],
    icon: <FaReact />,
    date: 'in progress',
  },
  {
    title: '협업 및 버전 관리',
    text: 'Git을 활용한 협업 및 버전 관리 능력 향상. 협업 도구와 워크플로우에 익숙해지기',
    tags: ['Git', 'Github', '버전 관리'],
    icon: <FaGithub />,
    date: 'in progress',
  },
]

// 프로젝트 작품 정보
export const projectList = [
  { 
    title: '카랜더 앱', 
    image: '/images/calendar.png',
    skills: ['React', 'JavaScript', 'Bootstrap', 'Vite'],
    url: 'https://react-calendar-csslick.vercel.app/',
    text: '이 앱은 사용자들이 일정을 관리하고 효율적으로 일정을 조직할 수 있도록 도와줍니다. 간편한 사용자 인터페이스와 직관적인 디자인으로, 일정을 쉽게 추가, 삭제할 수 있습니다. 날짜별로 일정을 확인하고 관리하는 데 도움이 되는 편리한 기능을 제공합니다. 이 앱은 React를 사용하여 개발되었으며, React 컴포넌트를 효율적으로 관리하여 유연하고 확장 가능한 코드를 구축했습니다.',
  },
  { 
    title: '비디오 플레이어', 
    image: '/images/video-player.png', 
    skills: ['React', 'JavaScript', 'Vite'],
    url: 'https://react-calendar-csslick.vercel.app/',
    text: '이 앱은 사용자들에게 원활하고 편리한 비디오 시청 경험을 제공하기 위해 개발되었습니다. 플레이어의 컨트롤을 사용하여 재생, 일시정지 등을 관리할 수 있습니다. 이 앱은 React를 기반으로 구축되었으며, 미디어 관련 기능을 효율적으로 구현하기 위해 다양한 라이브러리와 기술을 활용하였습니다.',
  },
  { 
    title: '리덕스 정보관리 앱', 
    image: '/images/poke-info.png',
    skills: ['React', 'Redux', 'SASS', 'Vite'], 
    url: 'https://react-calendar-csslick.vercel.app/',
    text: '이 앱은 복잡한 상태 관리를 간편하게 할 수 있도록 Redux를 활용하여 개발되었습니다. Redux의 미들웨어를 통해 비동기 작업을 처리하고, 컴포넌트 간의 데이터 공유를 용이하게 해줍니다. 이 앱은 React 및 Redux 아키텍처를 기반으로 개발되었으며, 깔끔하고 확장 가능한 코드를 통해 효율적인 상태 관리를 구현하였습니다.'
  },
]
