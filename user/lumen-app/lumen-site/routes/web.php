<?php

/** @var \Laravel\Lumen\Routing\Router $router */


// $router->get('/', function () use ($router) {
//     return $router->app->version();
// });


$router->get('/chartData',['middleware'=>'auth','uses'=>'ChartDataController@onAllSelect']);
$router->get('/clientReview',['middleware'=>'auth','uses'=>'ClientReviewController@onAllSelect']);
$router->post('/contactSend',['middleware'=>'auth','uses'=>'ContactController@onContactSend']);

$router->get('/courseHome',['middleware'=>'auth','uses'=>'CourseController@onSelectFour']);
$router->get('/courseAll',['middleware'=>'auth','uses'=>'CourseController@onSelectAll']);
$router->get('/courseDetails/{courseID}',['middleware'=>'auth','uses'=>'CourseController@onSelectDetails']);

$router->get('/footerAll',['middleware'=>'auth','uses'=>'FooterController@onSelectAll']);
$router->get('/information',['middleware'=>'auth','uses'=>'InformationController@onSelectAll']);
$router->get('/service',['middleware'=>'auth','uses'=>'ServiceController@onSelectAll']);

$router->get('/projectHome',['middleware'=>'auth','uses'=>'ProjectController@onSelectThree']);
$router->get('/projectAll',['middleware'=>'auth','uses'=>'ProjectController@onSelectAll']);
$router->get('/projectDetails/{projectID}',['middleware'=>'auth','uses'=>'ProjectController@onSelectDetails']);

$router->get('/videoHome',['middleware'=>'auth','uses'=>'HomeEtcController@onSelectVideo']);
$router->get('/totalProjectClient',['middleware'=>'auth','uses'=>'HomeEtcController@onSelectTotalProjectClient']);
$router->get('/techDes',['middleware'=>'auth','uses'=>'HomeEtcController@onSelectTechDescription']);
$router->get('/homeTopTitle',['middleware'=>'auth','uses'=>'HomeEtcController@onSelectHomeTopTitle']);