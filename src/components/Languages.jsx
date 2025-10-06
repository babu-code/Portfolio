import React from 'react'
import { FaDatabase, FaHtml5,FaCss3,FaJs, FaPython, FaGit, FaDocker, FaAws, FaTerminal, FaFlask, FaNode, FaReact, FaBootstrap, FaWind,} from 'react-icons/fa'
import Language from './Language'

const Languages = () => {
  return (
    
    <div className="mt-12 grid grid-cols-2 md:grid-cols-6 gap-4">

    <Language Icon={FaHtml5} color="text-orange-500" label="HTML5" />
    <Language Icon={FaCss3} color={"text-blue-500"} label={"CSS3"} />
    <Language Icon={FaJs} color={"text-yellow-400"} label={"JavaScript"} />
    <Language Icon={FaReact} color={"text-cyan-400"} label={"React"} />
    <Language Icon={FaBootstrap} color={"text-green-500"} label={"JavaScript"} />
    <Language Icon={FaPython} color={"text-blue-400"} label={"Python"} />
    <Language Icon={FaDatabase} color={"text-blue-300"} label={"Postgres"} />
    <Language Icon={FaGit} color={"text-orange-600"} label={"Git"} />
    <Language Icon={FaReact} color={"text-black-300"} label={"React Native"} />
    <Language Icon={FaWind} color={"text-blue-400"} label={"Tailwind"} />
    <Language Icon={FaFlask} color={"text-yellow-500"} label={"Flask"} />
    
</div>
  )
}

export default Languages