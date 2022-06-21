import React from 'react'
import { styled } from '@mui/material'
import useBasePath from '../../hooks/useBasePath'

const QrCode = () => {
    const basePath = useBasePath();
    return <QrCodeContent src={`${basePath}/images/qrcode.png`} />;
}

export default QrCode

const QrCodeContent = styled('img')(({src, theme }: any) => ({
    src: `url(${src})`,
    width: 112,
    height: 102,
}))