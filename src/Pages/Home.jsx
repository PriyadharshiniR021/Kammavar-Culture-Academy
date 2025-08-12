import React, { useState } from 'react';

export const Home = () => {
    const [lang, setLang] = useState('en');

    const content = {
        en: {
            heading: "Kammavar Culture Academy",
            tagline: "Rooted in Dharma. Rising with Courage. Remembering the Sacrifice.",
            description: "Kammavar Cultural Academy is a government-registered charitable trust committed to preserving and promoting the rich traditions, cultural values, and lifestyle of the Kammavar community. The academy functions with a noble mission to guide the younger generation in embracing their heritage with pride and purpose.",
            objectivesTitle: "Our Core Objectives",
            objectives: [
                "To encourage the younger generation to follow the traditional values and cultural practices of the Kammavar community.",
                "To inspire children to actively participate in kuladeivam (family deity) worship and temple rituals.",
                "To empower Kammavar youth to rise to authoritative positions in central and state governments.",
                "To advocate for the rightful legal protections and welfare of the Kammavar people and their children.",
                "Through these goals, the academy operates across educational, cultural, spiritual, and legal fronts to uplift the community as a whole.",
            ],
            legacyTitle: "A Legacy of Sacrifice and Righteousness",
            legacyDesc: "Our community descends from a proud lineage that contributed over 600 years of uncompromising resistance during India’s thousand-year struggle for freedom. Our ancestors stood fearlessly to protect Dharma (righteousness) and the nation, sacrificing hundreds of thousands of warriors in the process.",
            legacyFooter: "We bow with reverence at the feet of Goddess Sri Renuka Devi, whose divine grace continues to guide and protect us.",
            kingsTitle: "Honoring Heroic Kings and Warriors",
            kingsDesc: "When Tamil Nadu faced grave danger under Sultanate invasions, it was the valorous Vijayanagara emperor, Veera Kumara Kampanna, who led his forces into Tamil land to protect the people and the temples.",
            kingsFooter: "Kammavar Cultural Academy proudly remembers and honors such brave rulers who upheld Dharma with unwavering courage and sacrifice.",
            switchBtn: "தமிழ்"
        },
        ta: {
            heading: "கம்மவர் கலாசார அகாடமி",
            tagline: "தர்மத்தில் வேரூன்றியது, தைரியத்துடன் உயருகிறது, தியாகத்தை நினைவுகூருகிறது.",
            description: "கம்மவர் கலாசார அகாடமி என்பது அரசுப் பதிவு செய்யப்பட்ட அறக்கட்டளையாகும். இது கம்மவர் சமூகத்தின் பாரம்பரியங்கள், கலாசார மதிப்புகள் மற்றும் வாழ்க்கை முறைகளை பாதுகாக்கும் மற்றும் மேம்படுத்தும் பணியை மேற்கொள்கிறது. இவ்வகாடமி, இளைஞர்கள் தங்கள் பாரம்பரியத்தை பெருமையுடன் புரிந்து வாழ வழிகாட்டும் உயரிய நோக்கத்துடன் இயங்குகிறது.",
            objectivesTitle: "எங்கள் முக்கிய குறிக்கோள்கள்",
            objectives: [
                "கம்மவர் சமூகத்தின் பாரம்பரிய மதிப்புகள் மற்றும் கலாசாரப் பழக்கங்களை இளைஞர்கள் பின்பற்ற ஊக்குவிப்பது.",
                "குழந்தைகள் குலதெய்வ வழிபாடு மற்றும் கோயில் முறைகளை செயலில் பங்கேற்கத் தூண்டும்.",
                "கம்மவர் இளைஞர்கள் மத்திய மற்றும் மாநில அரசுகளின் அதிகாரப்பூர்வ நிலைகளில் உயர வளரச் செய்யும்.",
                "கம்மவர் மக்கள் மற்றும் அவர்களின் பிள்ளைகள் பெற வேண்டிய சட்ட உரிமைகள் மற்றும் நலன்களை ஆதரிப்பது.",
                "இந்த நோக்கங்களின் மூலம், அகாடமி கல்வி, கலாசாரம், ஆன்மிகம் மற்றும் சட்ட துறைகளில் சமூக வளர்ச்சிக்காக செயல்படுகிறது.",
            ],
            legacyTitle: "தியாகமும் தர்மமும் நிரம்பிய பாரம்பரியம்",
            legacyDesc: "நமது சமுதாயம் இந்தியாவின் ஆயிரம் ஆண்டு சுதந்திரப் போராட்டத்தின் போது 600 ஆண்டுகளுக்கும் மேலாக மறுப்பை வழங்கிய ஒரு பெருமைமிக்க வழிமுறையிலிருந்து வந்தது. நமது முன்னோர்கள் தர்மத்தையும் நாட்டையும் பாதுகாக்க அஞ்சாமல் நின்று, லட்சக்கணக்கான வீரர்களைத் தியாகம் செய்துள்ளனர்.",
            legacyFooter: "தேவீஸ்வரூபி ஸ்ரீ ரேணுகா தேவியின் திருவருளால் நமக்கு வழிகாட்டுதல் மற்றும் பாதுகாப்பு கிடைத்து வருகிறது என பணிவுடன் வணங்குகிறோம்.",
            kingsTitle: "வீரமிகு அரசர்களுக்கும் வீரர்களுக்கும் மரியாதை",
            kingsDesc: "சுல்தான்கள் தமிழகத்தில் ஆபத்தை ஏற்படுத்திய போது, தைரியமான விஜயநகர சாம்ராஜ்யத்தின் பேரரசர் வீர குமார கம்பண்ணன் தனது படைகளை வழிநடத்தி தமிழக மக்களையும் கோவில்களையும் பாதுகாத்தார்.",
            kingsFooter: "இத்தகைய தர்மத்தை நிலைநிறுத்திய வீரமிகு மன்னர்களை கம்மவர் கலாசார அகாடமி பெருமையாக நினைவுகூருகிறது.",
            switchBtn: "English"
        }
    };

    const toggleLang = () => {
        setLang(prev => (prev === 'en' ? 'ta' : 'en'));
    };

    return (
        <>
            <button onClick={toggleLang} className='language'>
                {content[lang].switchBtn}
            </button>
            <div style={{ backgroundColor: "#BE913A" }}>
                <div
                    className='d-flex justify-content-center align-items-center flex-column white p-4'
                    style={{
                        backgroundImage: "url(./Home.png)",
                        width: "100vw",
                        height: "100vh",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="container">
                        <div className='d-flex justify-content-center align-items-center flex-column mb-5'>
                            <img
                                src="./logo.jpg"
                                alt="logo"
                                style={{ width: "150px", height: "150px" }}
                            />
                            <h1 className='text-center fw-bold'>{content[lang].heading}</h1>
                            <p className='text-center fw-semibold'>{content[lang].tagline}</p>
                        </div>
                        <div className='px-lg-5'>
                            <p className='px-md-5' style={{ textAlign: "center", }}>
                                {content[lang].description}
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    style={{
                        backgroundImage: "url(./Home2.png)",
                        width: "100vw",
                        minHeight: "100vh",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="container p-3 pb-5">

                        <div className="row">
                            <div className="col-12 col-lg-6 pt-5">
                                <div className='d-flex justify-content-center align-items-center flex-column white pt-5 text-center'>
                                    <div className='py-5 px-2 px-lg-5 blur'>
                                        <div className='py-5'>
                                            <h4 className='fw-semibold mb-4'>{content[lang].objectivesTitle}</h4>
                                            {content[lang].objectives.map((line, idx) => (
                                                <p key={idx}>{line}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-lg-6 pt-5 text-white">
                                <div className="row">
                                    <div className="col-12 pt-5 text-center">
                                        <div className="blur px-2 px-lg-5 py-5 py-lg-2">
                                            <h4 className='fw-semibold mb-4'>{content[lang].legacyTitle}</h4>
                                            <p>{content[lang].legacyDesc}</p>
                                            <p className='fw-semibold'>{content[lang].legacyFooter}</p>
                                        </div>
                                    </div>

                                    <div className="col-12 pt-5 text-center">
                                        <div className="blur px-2 px-lg-5 py-5 py-lg-2">
                                            <h4 className='fw-semibold mb-4'>{content[lang].kingsTitle}</h4>
                                            <p>{content[lang].kingsDesc}</p>
                                            <p className='fw-semibold'>{content[lang].kingsFooter}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};