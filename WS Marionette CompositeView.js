/**
 * Created by albinotonnina on 21/02/2015.
 */
/**
 * Created by ${USER} on ${DATE}.
 */

/*global define*/

define(function (require){
    'use strict';

    var Marionette = require('backbone.marionette'),
    //_ = require('underscore'),
        JST = require('YOUR-ui.templates'),
        MyCollection = require('../collections/MyCollection'),
        MyEmptyView = require('../views/MyEmptyView'),
        MyItemView = require('../views/MyItemView');

    /**
     * @class ${NAME}
     * @extends Marionette.CompositeView
     */
    return Marionette.CompositeView.extend({

        /** @private */
        itemView: MyItemView,

        /** @private */
        emptyView: MyEmptyView,

        /** @private */
        tagName: 'div',

        /** @private */
        id: '${NAME}',

        /** @private */
        className: '${NAME}',

        /** @private */
        collection: MyCollection,

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