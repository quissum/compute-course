export class MyTime {
  static init(selectors, startTime, delay) {
    this.elements = selectors.map(s => document.querySelector(s))
    this.startTime = startTime

    this.interval(delay)
  }

  static interval(delay) {
    setInterval(() => {
      const timeRemains = this.second(this.startTime - Date.now())
      const time = this.computeTime(timeRemains)
      this.elements.forEach((el, i) => (el.innerHTML = time[i]))
    }, delay)
  }

  static computeTime(val) {
    const second = Math.floor(val % 60)
    const minute = Math.floor((val / 60) % 60)
    const hour = Math.floor((val / 3600) % 24)
    const day = Math.floor(val / 86400)

    return [
      day,
      hour,
      minute >= 10 ? minute : `0${minute}`,
      second >= 10 ? second : `0${second}`,
    ]
  }

  static second(val) {
    return Math.floor(val / 1000)
  }
}
