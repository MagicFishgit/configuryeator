import React, { useState } from "react";
import './Home.scss';
import { MdSend } from "react-icons/md";


function Home() {

    //State
    const [accessCode, setAccessCode] = useState('');

  return (
    <div className="content">
        <div>
        <h1>Configuryeator</h1>
        <p2><b>Easily configure</b> your telephony logic.</p2>
            <form>
                <input required text placeholder="Enter your access code here." value={accessCode} onChange={(e) => setAccessCode(e.target.value)}></input>
                <button><MdSend fontSize={20} /></button>
            </form>
            <p2>{accessCode}</p2>
        </div>
    </div>
  )
}

export default Home
