import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa';
import { MdOutlinePending } from "react-icons/md";
import { VscDebugRestart } from "react-icons/vsc";
import Wrapper from '../assets/wrappers/StatsContainer';
import StatItem from './StatItem';
const StatsContainer = ({ defaultStats }) => {
  const stats = [
    {
      title: "pending applications",
      count: defaultStats?.pending || 0,
      icon: <MdOutlinePending />,
      color: "#f59e0b",
      bcg: "#fef3c7",
    },
    {
      title: "interviews scheduled",
      count: defaultStats?.interview || 0,
      icon: <FaCalendarCheck />,
      color: "#647acb",
      bcg: "#e0e8f9",
    },
    {
      title: "jobs declined",
      count: defaultStats?.declined || 0,
      icon: <VscDebugRestart />,
      color: "#d66a6a",
      bcg: "#ffeeee",
    },
  ];
  return (
    <Wrapper>
      {stats.map((item) => {
        return <StatItem key={item.title} {...item} />;
      })}
    </Wrapper>
  );
};
export default StatsContainer;
