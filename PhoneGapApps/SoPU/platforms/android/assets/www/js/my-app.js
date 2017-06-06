// Initialize app
var myApp = new Framework7({
    animateNavBackIcon: true
});

var isAndroid = Framework7.prototype.device.android === true;
var isIos = Framework7.prototype.device.ios === true;
Template7.global = {
    android: isAndroid,
    ios: isIos
};

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.swiper('.swiper-container', {
    pagination:'.swiper-pagination',
    speed: 400,
    spaceBetween: 100
  });

mainView.on('Init', function () {
    myApp.alert('ssa');
    $$.get('http://localhost:58444/auth', function (data) {
    myApp.alert(data);
});
});
  var k=1;
  var flag=true;
  if (flag) {
    $$.get('http://localhost:58444/PUdata', function (data) {
    myApp.alert(data);
    $$('.huhuhue').text(data);
})
    flaf=false;
}
  
mainView.on('slideNextStart', function () { 
    k++;
    myApp.alert(k);

});

mainView.on('slidePrevStart', function () {

    k--;
    myApp.alert(k);
    switch (k) {
case 1:
$$.get('http://localhost:58444/PUdata', function (data) {
    myApp.alert(data);
    $$('.huhuhue').text(data);
})
   }
     if (k==1) {
         
    }  
});


// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");

    $$.get('http://localhost:58444/auth', function (data) {
    myApp.alert(data);
});

}); 


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

//Авторизация-----------------------------------------------------------------------------
myApp.onPageInit('authorization', function (page) {
    //$$('.login-modal').on('click', function () {
        myApp.modalLogin('Введите данные для входа', function (username, password) {
            myApp.alert('Thank you! Username: ' + username + ', Password: ' + password);
        });
    //});
})
//-----------------------------------------------------------------------------------------


myApp.onPageInit('power_state_data1', function (page) {

   $$.ajax({
    crossDomain: true,
    method: "GET",
    url: "http://localhost:58444/power_state_data1",
    dataType: "text",
    async: true,
    success: function(data){
            myApp.alert(data);
        },
        error: function(){
            myApp.alert('error');
        }

    });

   $$.get('http://localhost:58444/PUdata', function (data) {
    myApp.alert(data);
    $$('.huhuhue').text(data);
});
})


  //------http://zabolotskikh.com/tips/content-security-policy/


// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;  

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }
    if (page.name === 'authorization') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes Authorization page');

    }
    if (page.name === 'power_state_data1') {
        var user = '{ "name": "Вася", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
        //user = JSON.parse(user);
        //myApp.alert( user.name+ ' '+ user.age + ' '+ user.isAdmin);
    }
})
