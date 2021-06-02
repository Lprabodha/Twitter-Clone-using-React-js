import React from 'react';
import Routes from '../../../routes/Routes';
import useReadSession from '../hook/useReadSession';
import Loading from './components/Loading';

export default function Wrapper() {

    const isLoading = useReadSession();
    return (
        <div>
            {isLoading ? <Loading loading={isLoading} /> : <Routes />} 
        </div>
    )
}
