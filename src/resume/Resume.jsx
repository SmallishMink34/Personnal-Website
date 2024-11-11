import { useTranslation, Trans } from 'react-i18next';

export function Resume() {
    const { t } = useTranslation();
    return (
        <div className={"a"}>
            <a href="CV.pdf" target="_blank" rel="noopener noreferrer">
                {t('open_pdf')}
            </a>
            <br />
            <br />
        </div>
    );
}