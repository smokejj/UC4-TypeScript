var rl = require('readline-sync')
class  Ponto2D{
        
    private x : number 
    private y : number

        constructor(){
            this.x = 0
            this.y = 0
        }
    public  getX(): number{
        return this.x
    }
    public setX():number{
        return this.x 
    }
    public getY(): number{
        return this.y
    }
    public setY(): number{
        return this.y
    }

    movimentacao():void{
        let x = rl.question('Qual o valor que você quer botar :')
        let y = rl.question('Qual o valor que você quer botar :')

        this.x = x
        this.y = y  
    }

    public equals(outroPonto: Ponto2D): boolean {
        return this.x === outroPonto.getX() && this.y === outroPonto.getY()
      }

      public toString(): string {
        return `Ponto2D(x: ${this.x}, y: ${this.y})`
      }

        distancia(outroPonto: Ponto2D): number{
        return Math.sqrt((outroPonto.x - this.x) ** 2 + (outroPonto.y - this.y) ** 2)
        }
        
     clone(){
        let newPonto = new Ponto2D()
        newPonto.x = this.x
        newPonto.y = this.y
    return new Ponto2D()
  }

}