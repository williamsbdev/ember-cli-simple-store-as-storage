import Ember from "ember";

var get = Ember.get;

var ApplicationRoute = Ember.Route.extend({
    model: function() {
        console.log(get(this, "store"));
        console.log(get(this, "storage"));
        return {};
    }
});

export default ApplicationRoute;
