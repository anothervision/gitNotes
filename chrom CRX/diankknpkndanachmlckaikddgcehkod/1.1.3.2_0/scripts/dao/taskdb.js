define(function(require,exports,module){var a=require("service/filter"),b=require("model/task").Model,c=require("collection/task").Collection,d=new c;exports.db={collection:d,getOnTimeTasks:function(){var b=this.collection.filter(a.filter.onTimeTasks);return b},getById:function(a){return this.collection.get(a)},add:function(a){var c=new b(a);this.collection.add(c)},addTaskModel:function(a){this.collection.add(a)},deleteById:function(a){var b=this.collection.get(a);_.isUndefined(b)||(this.collection.remove(b),b.trigger("destroy"))},flush:function(){this.collection.reset()},countTodoTasks:function(){return this.collection.filter(a.filter.countTodoTasks).length}},Backbone.on("addToTaskdb",this.addTaskModel)});