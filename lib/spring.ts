/**
 * Kleine Feder-Animation nach Apples "Designing Fluid Interfaces":
 * parametrisiert über Dämpfung (1 = kein Überschwingen) und Response (Sekunden),
 * startet immer vom aktuellen Wert und übernimmt die Geschwindigkeit –
 * dadurch jederzeit unterbrechbar, ohne Sprung.
 */
export class Spring {
  value: number
  velocity = 0
  target: number
  private k = 0
  private c = 0
  private raf = 0
  private last = 0
  private onRest?: () => void

  constructor(
    initial: number,
    private onUpdate: (v: number) => void,
    private precision = 0.5,
  ) {
    this.value = initial
    this.target = initial
  }

  get isAnimating() {
    return this.raf !== 0
  }

  /** Zum Ziel federn. velocity in Einheiten pro Sekunde (z. B. px/s vom Finger). */
  to(
    target: number,
    { response = 0.4, damping = 1, velocity }: { response?: number; damping?: number; velocity?: number } = {},
    onRest?: () => void,
  ) {
    this.target = target
    this.k = (2 * Math.PI / response) ** 2
    this.c = (4 * Math.PI * damping) / response
    if (velocity !== undefined) this.velocity = velocity
    this.onRest = onRest
    if (!this.raf) {
      this.last = performance.now()
      this.raf = requestAnimationFrame(this.step)
    }
  }

  /** Sofort setzen (z. B. 1:1 unter dem Finger). Hält eine laufende Animation an. */
  set(v: number) {
    this.stop()
    this.value = v
    this.target = v
    this.velocity = 0
    this.onUpdate(v)
  }

  stop() {
    if (this.raf) cancelAnimationFrame(this.raf)
    this.raf = 0
  }

  private step = (now: number) => {
    const dt = Math.min((now - this.last) / 1000, 1 / 30)
    this.last = now
    // mehrere kleine Schritte = stabile Feder auch bei 60 Hz
    const steps = 4
    const h = dt / steps
    for (let i = 0; i < steps; i++) {
      const a = -this.k * (this.value - this.target) - this.c * this.velocity
      this.velocity += a * h
      this.value += this.velocity * h
    }

    const settled =
      Math.abs(this.value - this.target) < this.precision && Math.abs(this.velocity) < this.precision * 2
    if (settled) {
      this.value = this.target
      this.velocity = 0
      this.raf = 0
      this.onUpdate(this.value)
      const cb = this.onRest
      this.onRest = undefined
      cb?.()
      return
    }
    this.onUpdate(this.value)
    this.raf = requestAnimationFrame(this.step)
  }
}

/** Wohin eine Bewegung mit dieser Geschwindigkeit ausrollen würde (Apples Projektionsformel). */
export function project(velocity: number, decelerationRate = 0.99) {
  return ((velocity / 1000) * decelerationRate) / (1 - decelerationRate)
}

/** Gummiband: je weiter über den Rand gezogen, desto weniger folgt das Element. */
export function rubberband(overshoot: number, dimension: number, constant = 0.55) {
  return (overshoot * dimension * constant) / (dimension + constant * Math.abs(overshoot))
}
