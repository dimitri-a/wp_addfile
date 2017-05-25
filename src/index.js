import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes.js';
import  'babel-polyfill';

const router = {
    routes,
    history: createBrowserHistory(),
    createElement: (component, props) => {
        return React.createElement(component, { ...props });
    }
};


import Oidc from 'oidc-client';

var settings = {
    authority: 'http://localhost:5000/oidc',
    client_id: 'js.tokenmanager',
    redirect_uri: 'http://localhost:5000/user-manager-sample.html',
    post_logout_redirect_uri: 'http://localhost:5000/user-manager-sample.html',
    response_type: 'id_token token',
    scope: 'openid email roles',

    popup_redirect_uri:'http://localhost:5000/user-manager-sample-popup-signin.html',
    popup_post_logout_redirect_uri:'http://localhost:5000/user-manager-sample-popup-signout.html',

    silent_redirect_uri:'http://localhost:5000/user-manager-sample-silent.html',
    automaticSilentRenew:false,
    //silentRequestTimeout:10000,

    filterProtocolClaims: true,
    loadUserInfo: true
};

var mgr = new Oidc.UserManager(settings);

ReactDOM.render(
    React.createElement(Router, { ...router }),
    document.getElementById('root')
);