console.log('Start', Date.now());

const patches = [{ id: 'patch1' }, { id: 'patch2' }];
const blob = new Blob([JSON.stringify(patches)], { type: 'application/json' });
const url = URL.createObjectURL(blob);

self.postMessage(url);
