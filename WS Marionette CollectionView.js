/**
 * Created by ${USER} on ${DATE}.
 */

/*global define*/

define(function (require){
    'use strict';

    var Marionette = require('backbone.marionette'),
    //_ = require('underscore'),
        MyEmptyView = require('../views/MyEmptyView'),
        MyItemView = require('../views/MyItemView');

    /**
     * @class ${NAME}
     * @extends Marionette.CollectionView
     */
    return Marionette.CollectionView.extend({

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