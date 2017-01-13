const { assign } = Object;

const toJSON = resp => resp.json();
const onmessage = e => fetch(e.data).then(toJSON).then(patches => {
  console.log('End', Date.now());
  console.log(patches);
}) ;

const worker = assign(new Worker('worker.js'), { onmessage });
