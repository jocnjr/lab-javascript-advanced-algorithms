
  console.log('we\'re on');

  const stack = new StackDataStructure();

  // initialising stack size;
  console.log(stack.MAX_SIZE);

  let ulStack = document.getElementById('stack');

  for (let i = stack.MAX_SIZE; i > 0 ; i -= 1) {
    let newLi = document.createElement('li');
    newLi.classList.add("list-group-item", "list-group-item-dark");
    newLi.dataset.stack = i;
    ulStack.appendChild(newLi);
  }

// add element to the stack
const addStackButton = document.getElementById('add-stack');

addStackButton.onclick = () => {
  if (stack.canPush()) {
    const liById = document.querySelector(`li[data-stack="${stack.size + 1}"]`);
    const addStackInput = document.getElementById('add-element-stack');

    liById.classList.add('active');
    liById.innerHTML = addStackInput.value;
    stack.push(addStackInput.value);
  } else {
    console.log('cant push');
    const firstLi = document.getElementById(`s${stack.MAX_SIZE}`);
    const newLi = document.createElement('li');
    newLi.classList.add("list-group-item", "list-group-item-danger");
    newLi.innerHTML = 'stack overflow';
    ulStack.insertBefore(newLi, firstLi);
    setTimeout(() => ulStack.removeChild(newLi), 800);
  }
}

// take element from the stack

const takeStackButton = document.getElementById('take-stack');

takeStackButton.onclick = () => {
  const stackPop = stack.pop();
  if (stackPop !== 'Stack Underflow') {
    const liById = document.querySelector(`li[data-stack="${stack.size + 1}"]`);
    liById.classList.remove('active');
    liById.innerHTML = '';
  } else {
    const firstLi = document.querySelector(`li[data-stack="${stack.MAX_SIZE}"]`);
    const newLi = document.createElement('li');
    newLi.classList.add("list-group-item", "list-group-item-danger");
    newLi.innerHTML = stackPop;
    ulStack.insertBefore(newLi, firstLi);
    setTimeout(() => ulStack.removeChild(newLi), 800);
  }
}
