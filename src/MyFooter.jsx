import "./css/Footer.css";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import { useTranslation } from 'react-i18next';

export function MyFooter(){
    const { t, i18n  } = useTranslation();
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
      };


    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 768) {
                setIsChecked(false);
            } else {
                setIsChecked(true);
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    return (
        <div className={"Footer"}>
            <button className="switchLang" onClick={() => changeLanguage(t('language.lang'))} >{t('language.change')}</button>
        </div>
    )
}

