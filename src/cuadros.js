import styles from './styles-enum';

function horizontal(width, height, frames, margin) {
  return [...Array(frames).keys()].map(index => {
    return {
      x: margin + ((margin + width) * index),
      y: margin,
      width,
      height
    }
  })
}

export default {
  [styles.singlePrint]: [
    {x: 10, y: 10, width: 330, height: 220}

  ],
  [styles.splitImage]: horizontal(120, 155, 3, 10),
  [styles.collages] : [
    {x: 10, y: 10, width: 150, height: 150},
    {x: 170, y: 10, width: 150, height: 150},
    {x: 10, y: 170, width: 150, height: 150},
    {x: 170, y: 170, width: 150, height: 150}
  ]
}
