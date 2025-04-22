export interface CharacterParticle {
    rotationSign: number;
    age: number;
    initialLifeSpan: number;
    lifeSpan: number;
    velocity: { x: number; y: number };
    position: { x: number; y: number };
    canv: HTMLCanvasElement;
    update: (context: CanvasRenderingContext2D) => void;
}
