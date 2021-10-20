import React from 'react';
import { mount, route, } from 'navi';
import { Home } from './home/home.component';
import { Counter } from './counter/counter.component';
import { FetchComponent } from './fetch/fetch.component';

export const routes = mount({
    '/': route({
        view: <Home name='David' location='Budapest' age={23}></Home>
    }),
    '/counter': route({
        view: <Counter />
    }),
    '/fetch': route({
        view: <FetchComponent />
    })
});