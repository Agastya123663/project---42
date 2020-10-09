class Goalkeeper{
    constructor(x,y,width,height){
        this.body = createSprite(x,y,width,height);
    }

     goalKeeperLeftMovement(){
        this.body.velocityX = -5;
        this.body.velocityY = 3;
        if(this.body.x === 200 && this.body.y === 480){
            this.body.velocityX = 0;
            this.body.velocityY = 0;
        }
      }
      
     goalKeeperDownMovement(){
        this.body.velocityX = 5;
        this.body.velocityY = 3;
        if(this.body.x === 720 && this.body.y === 792){
            this.body.velocityX = 0;
            this.body.velocityY = 0;
        }
      }
      
    goalKeeperRightMovement(){
        this.body.velocityX = 7;
        this.body.velocityY = -3;
        if(this.body.x === 1329 && this.body.y === 499){
            this.body.velocityX = 0;
            this.body.velocityY = 0;
        }
        
        
      }
      
       goalKeeperUpMovement(){
        this.body.velocityX = -5;
        this.body.velocityY = -3;
        if(this.body.x === 735 && this.body.y === 161){
            this.body.velocityX = 0;
            this.body.velocityY = 0;
        }
        
      }
}
