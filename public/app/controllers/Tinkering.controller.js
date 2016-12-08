angular
    .module('portfolio')
    .controller('TinkeringController', TinkeringController);

function TinkeringController($scope, $state) {
    $scope.tinkerProjects = [{
        title: 'Car Power System',
        image: 'app/images/CarPower.png',
        category: 'Tinker',
        description: 'This project was created as a means of powering Arduino, Raspberry Pi, and Tessel 2 projects in my car. The majority of the system is setup behind my dash out of the way.',
        githubLink: 'https://github.com/RussellAFisher/Car-Projects/wiki/Part-1---Power-Setup'
    }, {
        title: 'GPS Homing Lights',
        image: 'app/images/GPSHoming.png',
        category: 'Arduino',
        description: 'The GPS homing light project is built around the Arduino Uno. Using a GPS module and programmed coordinates a 12 LED ring points towards "home". The LED color relates to your current heading and LED brightness to your distance from "home".',
        githubLink: 'https://github.com/RussellAFisher/Car-Projects/tree/master/GPS_Homing_Project'
    }, {
        title: 'Power Relay',
        image: 'app/images/PowerRelay.png',
        category: 'Arduino',
        description: 'A power relay for AC household voltage controlled with a Metro Mini using a Vizio TV remote. Created as a means of supplying power to my (slightly finicky) TV before powering it on. One button on the remote has been assigned to the "on" state and another to the "off" so switching is deliberate and controlled.',
        githubLink: 'https://github.com/RussellAFisher/Arduino-Power-Relay'
    }];
    $scope.test = "Test";
}
