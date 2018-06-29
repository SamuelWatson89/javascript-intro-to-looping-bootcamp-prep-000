
function forLoop(counts) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      counts.push("I am 1 strange loop.")
    } else {
      counts.push(`I am ${i} strange loops.`)
    }
  }
  return counts
}

function whileLoop (spy) {
  let countdown = 100;
   
  while (countdown > 0) {
    console.log('done')
  }
}