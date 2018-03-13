const Widgets = new Mongo.Collection('widgets');

Meteor.methods({  
  'widgets.fetch'() { return Widgets.find().fetch(); },
  'widgets.insert'(data) { return Widgets.insert(data); },
  'widgets.insert.show'(data) { 
  	Widgets.insert(data); 
  	return Widgets.find().fetch();
  }
})

export default Widgets;
