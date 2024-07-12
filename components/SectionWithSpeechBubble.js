import React from 'react';

const SectionWithSpeechBubble = () => {
  return (
    <div className="mt-24 mb-24 mx-12">
        <div className="span">
            <div className="bg-eggshell p-6 rounded-lg mb-8 inline-block">
                <p className="text-sea-blue text-2xl">
                    okay cool, so when are y'all open?
                </p>
            </div>
        </div>
        <div className="span right-px align-right">
            <div className="bg-olive-green p-6 rounded-lg mb-8 inline-block rtl">
                <p className="text-dark-brown text-2xl rtl">
                Sunday: 10am-11pm <br></br>
                Mon-Thurs: 11am-11pm <br></br>
                Fri: 11am-midnight <br></br>
                Sat: 10am-midnight <br></br>
                Our kitchen closes 2.5-3 hours before we close!
                </p>
            </div>
        </div>
    </div>
  );
};

export default SectionWithSpeechBubble;
