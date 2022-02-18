//Produce a car chassis (no input, outputs new chassis object)
//Add 4 wheels to chassis (input is a chassis, output is chassis with wheels)
//Add an engine to chassis (input is a chassis, output is chassis with an engine)
//Add a steering wheel to chassis (input is a chassis, output is chassis with a steering wheel)
//Add a body to chassis (input is a chassis, output is chassis with a body)
//Add a drive train to chassis (input is a chassis, output is chassis with a drive train)

const createChassis = () => {
    const chassisObject ={}
    return chassisObject
    }

const addWheels = (chassisObject) => {
    chassisObject.wheels = 4
    return chassisObject
    }

const addEngine = (chassisObject) => {
    chassisObject.engine = "2L"
    return chassisObject
    }

const addSteeringWheel = (chassisObject) => {
    chassisObject.steeringWheel = "Two hands"   
    return chassisObject
    }

const addBody = (chassisObject) => {
    chassisObject.body = "Fever"                  
    return chassisObject
    }

const addDriveTrain = (chassisObject) => {
chassisObject.driveTrain = "Two Wheel Drive"                  
return chassisObject
    }

const chassis = createChassis()
const chassisBody = addBody(chassis)
const chassisWheels = addWheels(chassisBody)
const chassisEngine = addEngine(chassisWheels)
const chassisSteering = addSteeringWheel(chassisEngine)
const chassisDrive = addDriveTrain(chassisSteering)

console.log(chassisDrive)