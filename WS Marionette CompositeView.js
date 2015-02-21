/**
 * Created by ${USER} on ${DATE}.
 */

/*global define*/

define(function (require){
    'use strict';

    var Marionette = require('backbone.marionette'),
    //_ = require('underscore'),
        JST = require('${REPO}.templates'),
        ${CollectionName} = require('../collections/${CollectionName}'),
        ${EmptyView} = require('../views/${EmptyView}'),
        ${ItemView} = require('../views/${ItemView}');

    /**
     * @class ${NAME}
     * @extends Marionette.CompositeView
     */
    return Marionette.CompositeView.extend({

        /** @private */
        itemView: ${ItemView},

        /** @private */
        emptyView: ${EmptyView},

        /** @private */
        tagName: 'div',

        /** @private */
        id: '${NAME}',

        /** @private */
        className: '${NAME}',

        /** @private */
        collection: ${CollectionName},

        /** @private */
        template: JST['../templates/${NAME}.hbs'],

        /** @private */
        collectionEvents: {
            'custom:event': 'render',
            'sync': 'render'
        },

        initialize: function (options){
            // ...
        },

        /** @private */
        onRender: function (){
            // ...
        },

        ///** @private */
        //onBeforeRender: function (){
        //    // ...
        //},
        //
        ///** @private */
        //onBeforeItemAdded: function (){
        //    // ...
        //},
        //
        ///** @private */
        //onAfterItemAdded: function (){
        //    // ...
        //},
        //
        ///** @private */
        //onItemRemoved: function (){
        //    // ...
        //},

        /** @private */
        onClose: function (){
            // ...
        }

    });
});