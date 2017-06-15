
/*эмуляторы онлайн
http://www.jamus.co.uk/demos/rwd-demonstrations/

*/
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
    speed: 800,
    spaceBetween: 100
  });

var id=0;
var inputCheck=false;

//-----Этот иф исполниться только один раз в самом начале
//-----поэтому в нем выполни проверку аутентификации и заполнение первого слайда данными
if (mainView.slides[1]) {
myApp.modalLogin('Введите данные для входа','Авторизация', function (username, password) {
    $$.post('http://localhost:58444/auth', {username:username, password: password}, function (data) {
        myApp.alert(JSON.stringify(data));
        $$.get('http://localhost:58444/PUdata/id', function (data) {
    data = JSON.parse(data);
    $$('td.power').text(data.power[id]);
    $$('td.network_frequency').text(data.network_frequency[id]);
    $$('td.axial_shift').text(data.axial_shift[id]);
    $$('td.drum_level').text(data.drum_level[id]);
    $$('td.pressure_in_the_drum').text(data.pressure_in_the_drum[id]);
    $$('td.block_stop').text(data.block_stop);
});
    });
    inputCheck=true;
});


}
    
 
mainView.on('slideNextStart', function () { 
    switch (mainView.activeIndex) {
case 1:
id=1;
if (inputCheck) {
    $$.get('http://localhost:58444/PUdata/id', function (data) {
    data = JSON.parse(data);
    $$('td.power').text(data.power[id]);
    $$('td.network_frequency').text(data.network_frequency[id]);
    $$('td.axial_shift').text(data.axial_shift[id]);
    $$('td.drum_level').text(data.drum_level[id]);
    $$('td.pressure_in_the_drum').text(data.pressure_in_the_drum[id]);
    $$('td.block_stop').text(data.block_stop);
}); 
}



break;
case 2:
id=2;

if (inputCheck) {
    $$.get('http://localhost:58444/PUdata/id', function (data) {
    data = JSON.parse(data);
    $$('td.power').text(data.power[id]);
    $$('td.network_frequency').text(data.network_frequency[id]);
    $$('td.axial_shift').text(data.axial_shift[id]);
    $$('td.drum_level').text(data.drum_level[id]);
    $$('td.pressure_in_the_drum').text(data.pressure_in_the_drum[id]);
    $$('td.block_stop').text(data.block_stop);
});
}

 
   
break;
   }

});



mainView.on('slidePrevStart', function () {
    
    
      switch (mainView.activeIndex) {
case 0:
id=0;
  
  if (inputCheck) {
    $$.get('http://localhost:58444/PUdata/id', function (data) {
    data = JSON.parse(data);
    $$('td.power').text(data.power[id]);
    $$('td.network_frequency').text(data.network_frequency[id]);
    $$('td.axial_shift').text(data.axial_shift[id]);
    $$('td.drum_level').text(data.drum_level[id]);
    $$('td.pressure_in_the_drum').text(data.pressure_in_the_drum[id]);
    $$('td.block_stop').text(data.block_stop);
}); 
}

$$.getJSON('http://localhost:58444/auth', function (data) {
    data = JSON.parse(data);
    myApp.alert(data);
  });




break;
case 1:
id=1;

if (inputCheck) {
    $$.get('http://localhost:58444/PUdata/id', function (data) {
    data = JSON.parse(data);
    $$('td.power').text(data.power[id]);
    $$('td.network_frequency').text(data.network_frequency[id]);
    $$('td.axial_shift').text(data.axial_shift[id]);
    $$('td.drum_level').text(data.drum_level[id]);
    $$('td.pressure_in_the_drum').text(data.pressure_in_the_drum[id]);
    $$('td.block_stop').text(data.block_stop);
}); 
}



break;
}   
});


// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
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

$$(document).on('init', function (e) {
myApp.alert('Here comes Authorization page');

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'mainView') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }


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

