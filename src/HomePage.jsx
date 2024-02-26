import {HomeContent} from "./HomeContent.jsx";
import {HomeContentFr} from "./fr/HomeContentFr.jsx";
import PropTypes from 'prop-types';

export function HomePage({ isComponentASelected }){
    return (
        <div style={{width: "100%", position: "absolute", left: "0", top: "0"}}>
            {isComponentASelected ? <HomeContent/> : <HomeContentFr/>}
        </div>
    )
}

HomePage.propTypes = {
    isComponentASelected: PropTypes.bool.isRequired,
};
