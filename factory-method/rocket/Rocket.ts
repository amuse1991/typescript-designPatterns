class Rocket{
    payload: Payload
    stages: Stage[]
    constructor(payload: Payload = null, stages: Stage[] = null){
        this.payload = payload;
        this.stages = stages;
    }
}