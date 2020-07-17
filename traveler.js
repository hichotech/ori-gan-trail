


class Traveler {
constructor(name){
    this.name = name
    this.food = 1
    this.ishealthy  = true
}
hunt (){
    this.food +=2
    
}
    
eat (){
   
   this.food -=1
   
   if(this.food<=0){
       this.food =0
     this.ishealthy =false
   }
   return this.ishealthy
}
 
}

