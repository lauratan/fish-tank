$(() => {

  window.fishtank = new Fishtank('fishtank');             // making it global to make debugging 1% easier.  shhhh.
  window.fishtank.registerSpecies(SwitchFish, GoFish, BiteFish);
  var starter = new Starter({
    tank: window.fishtank,     // look, it's Dependency Injection!  Pretend you care!
    position: new Vector(0, 0)
  });
  let pyu = new FloorLife({
    tank: window.fishtank,     // look, it's Dependency Injection!  Pretend you care!
    position: new Vector(150, 50),
  });
  let omanyte = new Omanyte({
    tank: window.fishtank,     // look, it's Dependency Injection!  Pretend you care!
    position: new Vector(-150, 50)
  });
  let shellder = new Shellder({
    tank: window.fishtank,     // look, it's Dependency Injection!  Pretend you care!
    position: new Vector(350, 50)
  })

});



