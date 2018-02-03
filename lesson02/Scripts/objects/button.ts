module objects {
    export class Button extends createjs.Bitmap {
        constructor(imageUrl:string, x:number=0, y:number=0, isCentered=false) {
            super(imageUrl);

            this.x = x;
            this.y = y;
            
            this.on("mouseover", this.mouseOver);
            this.on("mouseout", this.mouseOut)
        }

        public mouseOver():void {
            this.alpha = 0.7
        }

        public mouseOut():void {
            this.alpha = 1.0
        }
    }
}