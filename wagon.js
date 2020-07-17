class Wagon {
    
    constructor (capacity ){
    this.capacity = capacity
    this.passengers  = [] 
    
}
getAvailableSeatCount (){
    
    let  avialableseat = this.capacity-this.passengers.length;
    return avialableseat
   
    
 
}
join(Traveler){
    
    if(this.getAvailableSeatCount()<=2 && this.getAvailableSeatCount() >0 ){
        this.passengers.push(Traveler)
    }
    


    
}
shouldQuarantine(){


    if (this.passengers.some(Traveler=>Traveler.ishealthy==false)){
        return true
    }else{
        return false
    }

  

}
totalFood(){
    let foodcount = 0
    for (let i=0;i<this.passengers.length;i++){
        foodcount += this.passengers[i].food
    }
    return foodcount
}
}
