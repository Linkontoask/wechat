import React from 'react';
import PropeTypes from 'prop-types'
import '../../style/base/LineCose.sass'

export const LineCose = ({opting, message}) => {
    return (
        <div className={`LineCose ${opting.type} ${opting.color}`} data-type={opting.target}>
            {/*<time>{opting.time}</time>*/}
            <img src={opting.img} alt="Not Found"/>
            <p data-type={opting.target}>{message}</p>
        </div>
    )
};
LineCose.propTypes = {
    opting: PropeTypes.object,
    message: PropeTypes.string
};
LineCose.defaultProps = {
    opting: {
        target: 1,
        type: 'normal',
        color: 'green',
        img: 'http://newimg88.b0.upaiyun.com/newimg88/2009/05/feiwen8772qqcom_2da5419d.jpg'
    }
};
