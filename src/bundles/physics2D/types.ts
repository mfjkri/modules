import { b2Body, b2BodyDef, b2Shape, b2StepConfig, b2Vec2, b2World } from '@box2d/core';
import { ReplResult } from '../../typings/type_helpers';



export class Vector2 extends b2Vec2 {}

export type Force = {
  direction: Vector2;
  magnitude: number;
  duration: number;
  start_time: number;
};

export class Timer {
  private time: number;

  constructor() {
    this.time = 0;
  }

  public step(dt: number) {
    this.time += dt;
    return this.time;
  }

  public getTime() {
    return this.time;
  }
}

export class PhysicsObject implements ReplResult {
  private forces: Force[];
  //   private position: Vector2;
  //   private size: Vector2;
  //   private rotation: number;
  private body: b2Body;
  private shape: b2Shape;

  constructor(
    position: Vector2,
    rotation: number,
    world: PhysicsWorld,
    // size: Vector2,
  ) {
    const bodyDef : b2BodyDef = {
      position,
      angle: rotation,
    };
    this.body = world.createBody(bodyDef);
    // this.size = size;
    this.forces = [];
  }

  public applyForce(force: Force) {
    this.forces.push(force);
  }

  public toReplString = () => 'something';
}

export class PhysicsWorld {
  private objects: PhysicsObject[];
  private timer: Timer;
  private world: b2World;
  private iterationsConfig: b2StepConfig = {
    velocityIterations: 1,
    positionIterations: 1,
  };

  constructor() {
    this.objects = [];
    this.timer = new Timer();
    this.world = b2World.Create(new Vector2(0, 0));
  }

  public setGravity(gravity: Vector2) {
    this.world.SetGravity(gravity);
  }

  public addObject(obj: PhysicsObject) {
    this.objects.push(obj);
    // this.world.
  }

  public createBody(bodyDef: b2BodyDef) {
    return this.world.CreateBody(bodyDef);
  }

  public makeGround(height: number) {
    const bodyDef: b2BodyDef = {};
    const ground: b2Body = this.world.CreateBody(bodyDef);
  }

  public update(dt: number) {
    this.world.Step(dt, this.iterationsConfig);
    this.timer.step(dt);
  }
}
