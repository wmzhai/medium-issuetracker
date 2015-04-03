PatientsController = RouteController.extend({
  subscriptions: function () {
    this.subscribe('patients', Meteor.userId());
  },

  data: function () {
    return Patients.findOne({_id: this.params._id});
  },

  insert: function () {
    this.render('InsertPatient', {});
  },

  list: function() {
    this.render('PatientsList', {});
  },

  edit: function() {
    this.render('EditPatient', {});
  }
});
