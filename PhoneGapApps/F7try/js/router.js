define('app', ['js/router'], function(Router){
    Router.init();
    var f7 = new Framework7();
    var mainView = f7.addView('.view-main', {
       dynamicNavbar : true
    });
    return {
       f7: f7,
       mainView: mainView,
       router: Router,
    };
});