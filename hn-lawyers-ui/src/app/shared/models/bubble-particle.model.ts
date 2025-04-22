export class BubbleParticle {
    lifeSpan: number;
    initialLifeSpan: number;
    velocity: { x: number; y: number };
    position: { x: number; y: number };
    baseDimension: number;

    constructor(x: number, y: number) {
        this.initialLifeSpan = Math.floor(Math.random() * 60 + 60);
        this.lifeSpan = this.initialLifeSpan;
        this.velocity = {
            x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 10),
            y: -0.4 + Math.random() * -1,
        };
        this.position = { x, y };
        this.baseDimension = 4;
    }

    update(context: CanvasRenderingContext2D) {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.velocity.x += ((Math.random() < 0.5 ? -1 : 1) * 2) / 75;
        this.velocity.y -= Math.random() / 600;
        this.lifeSpan--;

        const scale = 0.2 + (this.initialLifeSpan - this.lifeSpan) / this.initialLifeSpan;

        context.fillStyle = '#e6f1f7';
        context.strokeStyle = '#3a92c5';
        context.beginPath();
        context.arc(
            this.position.x - (this.baseDimension / 2) * scale,
            this.position.y - this.baseDimension / 2,
            this.baseDimension * scale,
            0,
            2 * Math.PI
        );

        context.stroke();
        context.fill();
        context.closePath();
    }
}
