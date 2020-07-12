function GetDuration(start_address, end_address, arrival_time, mode) {
   var arrive = new Date(arrival_time.getTime());
   var directions  = Maps.newDirectionFinder().setArrive(arrive)
  .setOrigin(start_address)
  .setDestination(end_address)
  .setMode(Maps.DirectionFinder.Mode[mode])
  .getDirections();
 return directions.routes[0].legs[0].duration.text;
};
