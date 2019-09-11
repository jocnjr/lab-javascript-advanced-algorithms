console.log('we\'re on - queue');

const queue = new QueueDataStructure();

// initialising stack size;
console.log(queue.MAX_SIZE);

let ulQueue = document.getElementById('queue');
const addQueueButton = document.getElementById('add-queue');
const takeQueueButton = document.getElementById('take-queue');

for (let i = 0; i < queue.MAX_SIZE; i += 1) {
  let newLi = document.createElement('li');
  newLi.classList.add("list-group-item", "list-group-item-dark");
  newLi.dataset.queue = i + 1;
  ulQueue.appendChild(newLi);
}

// add element to the queue

addQueueButton.onclick = () => {
  takeQueueButton.disabled = false;

  if (queue.canEnqueue()) {
    const liById = document.querySelector(`li[data-queue="${queue.size + 1}"]`);
    const addQueueInput = document.getElementById('add-element-queue');

    liById.classList.add('active');
    liById.innerHTML = addQueueInput.value;
    queue.enqueue(addQueueInput.value);
  } else {
    console.log('cant enqueue');
    let newLi = document.createElement('li');
    newLi.classList.add("list-group-item", "list-group-item-danger");
    newLi.innerHTML = 'queue overflow';
    ulQueue.appendChild(newLi);
    setTimeout(() => ulQueue.removeChild(newLi), 800);
  }
}

// take element from the queue


takeQueueButton.onclick = () => {
  const dequeue = queue.dequeue();
  
  
  if (dequeue !== 'Queue Underflow') {
    takeQueueButton.disabled = true;
    const firtLiActive = document.querySelector('#queue > .active');
    firtLiActive.classList.remove('active');
    firtLiActive.innerHTML = '';
    // repositioning others when the line moves
    const allLiActive = document.querySelectorAll('#queue > .active');

    setTimeout(() => {
      allLiActive.forEach((li, idx) => {
        const liElem = document.querySelector(`li[data-queue="${idx + 1}"]`);
        liElem.classList.add('active');
        liElem.innerHTML = li.innerHTML;
        li.classList.remove('active');
        li.innerHTML = '';
        takeQueueButton.disabled = false;
      })
    }, 400);
    
  } else {
    takeQueueButton.disabled = false;

    const firstLi = document.querySelector(`li[data-queue="1"]`);
    const newLi = document.createElement('li');
    newLi.classList.add("list-group-item", "list-group-item-danger");
    newLi.innerHTML = dequeue;
    ulQueue.insertBefore(newLi, firstLi);
    setTimeout(() => ulQueue.removeChild(newLi), 800);
  }
}