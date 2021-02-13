function myFunction() {
  var now = new Date();
  var start = new Date("02/13/2021 14:00");
  var stop = new Date("02/13/2021 14:51");
  FormApp.getActiveForm().setAcceptingResponses(now > start && now < stop);
    
}

// time from new york  -7 hours
