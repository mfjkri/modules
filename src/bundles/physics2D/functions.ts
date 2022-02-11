/**
 * A single sentence summarising the module (this sentence is displayed larger).
 *
 * Sentences describing the module. More sentences about the module.
 *
 * @module module_name
 * @author Author Name
 * @author Author Name
 */

import { b2Body, b2BodyDef, b2StepConfig, b2Vec2, b2World } from '@box2d/core';
import { Vector2, Force, Timer, PhysicsObject, PhysicsWorld } from './types';

// Global Variables

const world: PhysicsWorld = {
  objects: [],
  timer: new Timer(),
};

// =============================================================================
// Module's Private Functions
// =============================================================================

// =============================================================================
// Module's Exposed Functions
// =============================================================================

export function make_vector(x: number, y: number): Vector2 {
  return new Vector2(x, y);
}
