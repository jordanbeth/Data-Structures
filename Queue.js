// Queue
// FIFO - First In First Out
// Enqueue - add item to end of Queue
// Dequeue - remove item from beginnign of Queue

function Queue(capacity) {
    // private properties
    this._capacity = capacity || Infinity;
    this._waitingLine = {};
    this._head = 0;
    this._tail = 0;
};

Queue.prototype.enqueue = function(value) {
    if (this.count() < this._capacity) {
        this._waitingLine[this._tail++] = value;
        return this.count();
    }
    return "Error: Queue is full!!!"
};

Queue.prototype.dequeue = function() {
    let element = this._waitingLine[this._head];
    delete this._waitingLine[this._head];
    if (this._head < this._tail) this._head++;
    return element;
};

Queue.prototype.peek = function() {
    return this._waitingLine[this._head];
};

Queue.prototype.count = function() {
    return this._tail - this._head;
};

Queue.prototype.contains = function(value) {
    for (let i = this._head; i < this._tail; i++) {
        if (this._waitingLine[i] === value) return true;
    }
    return false;
};

Queue.prototype.until = function(value) {
    for (let i = this._head; i < this._tail; i++) {
        if (this._waitingLine[i] === value) return i - this._head + 1;
    }
    return null;
};
