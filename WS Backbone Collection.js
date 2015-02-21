/**
 * Created by ${USER} on ${DATE}.
 */

/*global define*/

define(function (require){
    'use strict';

    var Backbone = require('backbone'),
        modelType = require('../models/${NAME}');

    /**
     * @class ${NAME}
     * @extends Backbone.Collection
     */
    return Backbone.Collection.extend({

        /** @private */
        initialize: function (models, options){
            //initialize
        },

        /** @private */
        url: function (){
            return 'youtpath/${NAME}.json'
        },

        /** @private */
        model: modelType,

        /** @private */
        parse: function (response){
            return _.map(response.content, function (content){
                return content;
            });
        }
    });
});