import React, { useState } from 'react';
import PadGrid from '../../components/PadGrid/PadGrid';
import Controls from '../../components/Controls/Controls';
import sounds from '../../sounds.json';

const drumMachine = () => {
    const [soundLibrary, setSoundLibrary] = useState(sounds.bankOne);
    const [displayContent, setDisplayContent] = useState('welcome');

    return (
        <React.Fragment>
            <PadGrid sounds={soundLibrary} />
            <Controls changeSounds={setSoundLibrary} display={displayContent} />
        </React.Fragment>
    );
};

export default drumMachine;