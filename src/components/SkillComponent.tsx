import React from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaJava, 
  FaPython, 
  FaLaravel, 
  FaHtml5, 
  FaCss3Alt, 
  FaDocker, 
  FaGithub, 
  FaGitlab, 
  FaBitbucket, 
  FaJenkins, 
  FaAws, 
  FaLinux, 
  FaBootstrap, 
  FaAngular} from 'react-icons/fa';

import { 
  SiTypescript, 
  SiTailwindcss, 
  SiMongodb, 
  SiJavascript, 
  SiSpringboot, 
  SiMysql, 
  SiApachekafka, 
  SiPhp, 
  SiKubernetes, 
  SiGnubash, 
  SiHibernate, 
  SiSpringsecurity} from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { DiRedis } from 'react-icons/di';
import { BsFiletypeXml } from 'react-icons/bs';
import { FaGear } from 'react-icons/fa6';
import { TbBrandGraphql } from 'react-icons/tb';

interface SkillProps {
    skill: string;
    icon: string;
}

const iconsMap: Record<string, React.ElementType> = {
  FaAngular,
  SiSpringsecurity,
  SiHibernate,
  FaBootstrap,
  TbBrandGraphql,
  FaGear,
  BsFiletypeXml,
  SiGnubash,
  FaLinux,
  SiKubernetes,
  FaAws,
  FaJenkins,
  SiPhp,
  FaBitbucket,
  FaGitlab,
  FaGithub,
  FaDocker,
  FaCss3Alt,
  FaHtml5,
  SiApachekafka,
  DiRedis,
  SiMysql,
  BiLogoPostgresql,
  FaLaravel,
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  SiSpringboot,
  FaGitAlt,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiJavascript,
};

const SkillComponent: React.FC<SkillProps> = ({ skill, icon }) => {
  const IconComponent = iconsMap[icon];

 return (
    <div className="flex flex-col items-center justify-center rounded-lg p-3  hover:shadow-lg w-full h-full max-w-sm overflow-hidden shadow-lg bg-white dark:bg-slate-900 transition-colors duration-300">
      {IconComponent && <IconComponent className="text-5xl mb-2 text-blue-500" />}
      <span className="text-center text-gray-900 dark:text-gray-100 font-semibold">{skill}</span>
    </div>
 )
};

export default SkillComponent;