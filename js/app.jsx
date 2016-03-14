/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');

if (!global.Intl) {
    global.Intl = require('intl');
}

const ReactDOM = require('react-dom');

const {Provider} = require('react-redux');

const {Router, Route, hashHistory} = require('react-router');

const Sira = require('./containers/Sira');
const Home = require('./containers/Home');

const store = require('./stores/store');

const {loadMapConfig} = require('../MapStore2/web/client/actions/config');
const {changeBrowserProperties} = require('../MapStore2/web/client/actions/browser');
const {loadLocale} = require('../MapStore2/web/client/actions/locale');

const ConfigUtils = require('../MapStore2/web/client/utils/ConfigUtils');
const LocaleUtils = require('../MapStore2/web/client/utils/LocaleUtils');

const {loadQueryFormConfig, loadFeatureTypeConfig} = require('./actions/queryform');
const {loadFeatureGridConfig} = require('./actions/grid');

function startApp() {
    store.dispatch(changeBrowserProperties(ConfigUtils.getBrowserProperties()));

    ConfigUtils
        .loadConfiguration()                       // localConfig.json: Global configuration
        .then(() => {                              // config.json: app configuration
            const { configUrl, legacy } = ConfigUtils.getUserConfiguration('config', 'json');
            store.dispatch(loadMapConfig(configUrl, legacy));

            let locale = LocaleUtils.getUserLocale();
            store.dispatch(loadLocale('translations', locale));

            // load the queryform configuration
            // store.dispatch(loadFeatureTypeConfig("/sira/services/queryformconfig/", "aua"));
            store.dispatch(loadFeatureTypeConfig("assets/", "aua.json"));

            store.dispatch(loadQueryFormConfig("assets/", "queryFormConfig.json"));

            store.dispatch(loadFeatureGridConfig("assets/featureGridConfig.json"));
        });

    ReactDOM.render(
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path="/" component={Home}/>
                <Route path="/map/:profile" component={Sira}/>
            </Router>
        </Provider>
        , document.getElementById("container")
    );
}

if (!global.Intl) {
    require.ensure(['intl', 'intl/locale-data/jsonp/en.js', 'intl/locale-data/jsonp/it.js'], (require) => {
        require('intl/locale-data/jsonp/en.js');
        require('intl/locale-data/jsonp/it.js');
        startApp();
    });
}else {
    startApp();
}
