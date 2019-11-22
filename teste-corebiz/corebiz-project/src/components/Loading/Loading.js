import React from 'react';
import { Spin, Icon } from 'antd';
import { DivSpin } from './style.js';

//Loading de telas
function Loading() {
    const icon = <Icon type="loading" style={{ fontSize: 150, color: 'salmon' }} spin />;
    return (
        <DivSpin>
            <Spin indicator={icon} />
        </DivSpin>
    );
}

export default Loading;