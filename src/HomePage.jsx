import {HomeContent} from "./HomeContent.jsx";
import {HomeContentFr} from "./fr/HomeContentFr.jsx";
import PropTypes from 'prop-types';

export function HomePage({ isComponentASelected }){
    return (
            (isComponentASelected ? <HomeContent/> : <HomeContentFr/>)
    )
}

HomePage.propTypes = {
    isComponentASelected: PropTypes.bool.isRequired,
};
