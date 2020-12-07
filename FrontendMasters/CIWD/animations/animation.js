import { animate } from "popmotion"

animate({
  from: 2, 
  to: 80,
  onUpdate: latest => console.log(latest)
})