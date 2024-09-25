import React from 'react';
import { Routes,Route,Navigate } from 'react-router-dom';
import {ArchivePage} from "ui/pages/archivePage";

export const Pages = () => {
    return (
        <div>
<Routes>
    <Route path='/' element={<Navigate to='/archive'/>}/>
    <Route path='/archive' element={<ArchivePage/>}/>
</Routes>
        </div>
    );
};

