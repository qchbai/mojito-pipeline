YUI.add('BoxController', function (Y, NAME) {
    'use strict';

    Y.namespace('mojito.controllers')[NAME] = {
        index: function (ac) {
            var view = {
                title: ac.config.get('title'),
                taskType: ac.config.get('taskType')
            };

            //ac.assets.addCss('./box.css');
            //ac.assets.addJs('./script.js');
            ac.data.set('sectionName', ac.config.get('title'));
            ac.data.set('sectionType', ac.config.get('taskType'));


            Y.mix(view, ac.params.body('children'));

            if (view.title === 'search-result2') {
                error.setError(true);
            }
            if (view.title === 'search-result4') {
                //return;
            }

            ac.done(view);
        }
    };

}, '0.0.1', {
    requires: [
        'mojito-assets-addon',
        'mojito-data-addon',
        'mojito-config-addon',
        'mojito-params-addon'
    ]
});
