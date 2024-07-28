import React from 'react';

const SectionWithSpeechBubble = () => {
  return (
    <div>
        <div className="span mx-12 mt-12">
            <div className="bg-eggshell p-6 rounded-lg mb-8 inline-block fade-in-grow">
                <p className="text-sea-blue text-2xl">
                    okay cool, so when are y&apos;all open?
                </p>
            </div>
        </div>
        <div className="mx-12 mt-5 flex justify-end">
            <div className="bg-light-green p-6 rounded-lg mb-8 inline-block rtl fade-in-grow">
                <p className="text-dark-green text-2xl rtl">
                    Sunday: 10am-11pm <br />
                    Mon-Thurs: 11am-11pm <br />
                    Fri: 11am-midnight <br />
                    Sat: 10am-midnight <br />
                    Our kitchen closes 2.5-3 hours before we close!
                </p>
            </div>
        </div>
        <div className="span mx-12">
            <div className="bg-eggshell p-6 rounded-lg mb-8 inline-block fade-in-grow">
                <p className="text-sea-blue text-2xl">
                    ooh, and what games do y&apos;all have?
                </p>
            </div>
        </div>
        <div className="mx-12 mt-5 mb-12 flex justify-end">
            <div className="bg-light-green p-6 rounded-lg mb-8 inline-block rtl fade-in-grow">
                <p className="text-dark-green text-2xl rtl">
                    we have every kind of game you can think of. <br />
                    fantasy, adventure, chill, multiplayer? <br />
                    we&apos;ve got &apos;em all, check them out below!
                </p>
            </div>
        </div>
    </div>
  );
};

export default SectionWithSpeechBubble;
