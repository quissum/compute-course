import { Sidenav } from './modules/sidenav.js'
import { MyTime } from './modules/time.js'

Sidenav.init('.burger', '.burger-menu')

MyTime.init(
  ['#day', '#hour', '#minute', '#second'],
  new Date(2592000000).valueOf() + Date.now(),
  1000
)
