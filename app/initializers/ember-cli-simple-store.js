import Store from 'ember-cli-simple-store/store';

var initializer = function() {
    var application = arguments[1] || arguments[0];
    application.register('storage:main', Store);
    application.inject('controller', 'storage', 'storage:main');
    application.inject('route', 'storage', 'storage:main');
};

export default {
    name: 'storage',
    initialize: initializer
};
