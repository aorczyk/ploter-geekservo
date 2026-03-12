myController.onCommandReceived(function () {
    if (myController.commandName() == "pen") {
        if (myController.commandValue() == "up") {
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S7, 180)
            myController.setButton("1", myController.ButtonVisibility.Visible, myController.ButtonColor.Black)
        } else {
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S7, 280)
            myController.setButton("1", myController.ButtonVisibility.Visible, myController.ButtonColor.Green)
        }
    }
    if (myController.buttonWasPressed("up")) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, motorSpeed)
    }
    if (myController.buttonWasPressed("down")) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, motorSpeed * -1)
    }
    if (myController.buttonWasPressed("right")) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, motorSpeed)
    }
    if (myController.buttonWasPressed("left")) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, motorSpeed * -1)
    }
    if (myController.buttonWasPressed("p")) {
        wuKong.setAllMotor(motorSpeed, motorSpeed)
    }
    if (myController.buttonWasPressed("o")) {
        wuKong.setAllMotor(motorSpeed * -1, motorSpeed)
    }
    if (myController.buttonWasPressed("l")) {
        wuKong.setAllMotor(motorSpeed, motorSpeed * -1)
    }
    if (myController.buttonWasPressed("k")) {
        wuKong.setAllMotor(motorSpeed * -1, motorSpeed * -1)
    }
    if (myController.buttonWasReleased("up") || myController.buttonWasReleased("down") || myController.buttonWasReleased("right") || myController.buttonWasReleased("left") || myController.buttonWasReleased("o") || myController.buttonWasReleased("p") || myController.buttonWasReleased("k") || myController.buttonWasReleased("l")) {
        wuKong.stopAllMotor()
    }
    if (myController.buttonWasPressed("1") || myController.buttonWasPressed("m")) {
        if (myController.toggleButton()) {
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S7, 280)
            myController.setButton("1", myController.ButtonVisibility.Visible, myController.ButtonColor.Green)
        } else {
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S7, 180)
            myController.setButton("1", myController.ButtonVisibility.Visible, myController.ButtonColor.Black)
        }
    }
    if (myController.buttonWasPressed("2")) {
        wuKong.stopAllMotor()
    }
    if (myController.buttonWasPressed("3")) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, motorSpeed)
        basic.pause(2000)
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 0)
        wuKong.setMotorSpeed(wuKong.MotorList.M2, motorSpeed)
        basic.pause(2000)
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 0)
        wuKong.setMotorSpeed(wuKong.MotorList.M1, -1 * motorSpeed)
        basic.pause(2000)
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 0)
        wuKong.setMotorSpeed(wuKong.MotorList.M2, -1 * motorSpeed)
        basic.pause(2000)
        wuKong.stopAllMotor()
        basic.pause(2000)
        wuKong.setMotorSpeed(wuKong.MotorList.M2, motorSpeed)
        basic.pause(2000)
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 0)
        wuKong.setMotorSpeed(wuKong.MotorList.M1, motorSpeed)
        basic.pause(2000)
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 0)
        wuKong.setMotorSpeed(wuKong.MotorList.M2, -1 * motorSpeed)
        basic.pause(2000)
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 0)
        wuKong.setMotorSpeed(wuKong.MotorList.M1, -1 * motorSpeed)
        basic.pause(2000)
        wuKong.stopAllMotor()
    }
    if (myController.buttonWasPressed("4")) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, motorSpeed)
        wuKong.setMotorSpeed(wuKong.MotorList.M2, motorSpeed)
        basic.pause(2000)
        wuKong.stopAllMotor()
        wuKong.setMotorSpeed(wuKong.MotorList.M2, -1 * motorSpeed)
        basic.pause(2000)
        wuKong.stopAllMotor()
        wuKong.setMotorSpeed(wuKong.MotorList.M1, -1 * motorSpeed)
        wuKong.setMotorSpeed(wuKong.MotorList.M2, motorSpeed)
        basic.pause(2000)
        wuKong.stopAllMotor()
        wuKong.setMotorSpeed(wuKong.MotorList.M2, -1 * motorSpeed)
        basic.pause(2000)
        wuKong.stopAllMotor()
    }
    if (myController.buttonWasPressed("7")) {
        stop = false
        for (let x = 0; x <= 99; x+=5) {
            wuKong.setAllMotor(100, x)
            basic.pause(50)
            if (stop) {
                break;
            }
        }
        wuKong.setAllMotor(0, 0)
        for (let x2 = 0; x2 <= 99; x2+=5) {
            wuKong.setAllMotor(0 - x2, -100)
            basic.pause(50)
            if (stop) {
                break;
            }
        }
        wuKong.setAllMotor(0, 0)
    }
    if (myController.rightSliderChanged() || myController.rightJoystickChanged(myController.JoystickDirection.X) || myController.orientationChanged(myController.OrientationAxis.X)) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, myController.commandValueAsNumber())
    }
    if (myController.leftSliderChanged() || myController.rightJoystickChanged(myController.JoystickDirection.Y) || myController.orientationChanged(myController.OrientationAxis.Y)) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, myController.commandValueAsNumber())
    }
    if (myController.commandName() == "playStop") {
        stop = true
        wuKong.setAllMotor(0, 0)
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S7, 180)
    }
})
myController.onSetup(myController.ConfirmationMode.Require, function () {
    myController.applySettings("vc;init; vc;sl;1;-100;100;1;0;0;1;; vc;sr;1;-100;100;1;0;0;0;; vc;jrx;-100;100;1;0;0; vc;jry;-100;100;1;0;0; vc;b;m;1;0;<i class=\"fa-solid fa-arrows-up-down\"></i>; vc;b;1;1;0;<i class=\"fa-solid fa-arrows-up-down\"></i>; vc;b;2;1;0;<i class=\"fa-solid fa-circle-stop\"></i>; vc;b;3;1;0;<i class=\"fa-regular fa-square\"></i>; vc;b;4;1;0;<i class=\"fa-solid fa-xmark\"></i>; vc;b;7;1;0;<i class=\"fa-solid fa-slash\"></i>; vc;il;1; vc;show;sl,sr,jl,jr,ar,br,bl,arb;")
})
let stop = false
let motorSpeed = 0
motorSpeed = 100
myController.useBluetooth()
